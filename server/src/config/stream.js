import { StreamChat } from "stream-chat";
import { ENV } from "./env";

const streamClient = StreamChat.getInstance(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData);
    console.log("User upserted to stream!");
  } catch (err) {
    console.log("Error in upserting User to stream!");
    console.log(err);
  }
};
export const deleteStreamUser = async (userId) => {
  try {
    await streamClient.deleteUser(userId);
    console.log("User deleted from stream!");
  } catch (err) {
    console.log("Error in deleting user from stream! " + err);
  }
};

export const generateStreamToken = async (userId) => {
  try {
    console.log("Generated Token!");
    return streamClient.createToken(userId.toString());
  } catch (err) {
    console.log("Error Encountered in Generate Token! " + err);
    return null;
  }
};


