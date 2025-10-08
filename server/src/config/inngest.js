import User from "../models/user.model.js";
import { Inngest } from "inngest";
import { connectToDB } from "./db.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "workbook" });

const syncUser = inngest.createFunction(
  {
    id: "sync-user",
  },
  {
    event: "clerk/user.created",
  },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } =
        event.data;

      await connectToDB();

      const newUser = await User.create({
        clerkId: id,
        name: first_name + (first_name === "" ? last_name : " " + last_name),
        email: email_addresses[0]?.email_address,
        image: image_url,
      });

      await upsertStreamUser({
        id: newUser.clerkId.toString(),
        name: newUser.name,
        image: newUser.image,
      });
      
      console.log("Successfully created user");

    } catch (err) {
      console.log("Error Occured:" + err);
    }
  }
);

const deleteUserFromDb = inngest.createFunction(
  {
    id: "delete-user-from-db",
  },
  {
    event: "clerk/user.deleted",
  },
  async ({ event }) => {
    try {
      const { id } = event.data;
      await connectToDB();
      await User.deleteOne({
        clerkId: id,
      });

      await deleteStreamUser({id});

      console.log("Successfully deleted user");
    } catch (err) {
      console.log("Error Occured:" + err);
    }
  }
);

export const functions = [syncUser, deleteUserFromDb];
