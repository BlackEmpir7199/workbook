import express from "express";
import { ENV } from "./config/env.js";
import { connectToDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { inngest } from "./config/inngest.js";
import { functions } from "./config/inngest.js";
import { serve } from "inngest/express";

const app = express();
app.use(express.json());
app.use(cors);
// need the blow one to access req.auth | or else it will be undefined always
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

const PORT = ENV.PORT;

const startServer = async () => {
  try {
    await connectToDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log("Server is up on port: ", PORT);
        // invoke db connection
      });
    }
  } catch (error) {
    console.log("Error Occured:" + err);
    process.exit(1);
  }
};

await startServer();

export default app;
