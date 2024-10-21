// src/pages/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
// import { connectToDatabase } from "../../../lib/mongodb"; // Adjust the import based on your MongoDB setup
import User from "../../../models/User"; // Adjust the import based on your User model setup

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password, companyName, companyWebsite } = req.body;

    if (!email || !password || !companyName || !companyWebsite) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create new user
      const user = new User({
        email,
        password: hashedPassword,
        companyName,
        companyWebsite,
      });
      await user.save();

      return res.status(201).json({ message: "User created successfully." });
    } catch (error) {
      return res.status(500).json({ message: "Error creating user." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
