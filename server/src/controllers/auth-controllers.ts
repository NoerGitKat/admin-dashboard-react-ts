import { Request, Response } from "express";
import User from "../models/User";
import { EHttpStatusCode } from "../types";

export async function getUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user) {
      throw new Error("No user found!");
    }

    return res.status(EHttpStatusCode.OK).json(user);
  } catch (error) {
    return res
      .status(EHttpStatusCode.NOT_FOUND)
      .json({ message: error.message });
  }
}
