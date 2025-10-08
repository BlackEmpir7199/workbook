import { generateStreamToken } from "../config/stream.js";

export const getStreamToken = async (req, res) => {
  try {
    const token = generateStreamToken(req.auth().userId);
    res.status(200).json({ token });
  } catch (err) {
    console.log(err + "Error in generating token");
    res.status(500).json({
      message: "Failed to generate Stream token",
    });
  }
};
