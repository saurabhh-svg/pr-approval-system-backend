import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  username: String;
  email: String;
  password: String;
  roles: "SDE1" | "SDE2" | "TEAM_LEAD" | "MANAGER";
}

const userSchema: Schema<IUser> = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      enum: ["SDE1", "SDE2", "TEAM_LEAD", "MANAGER"],
      required: true,
      default: "SDE1",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>("Task", userSchema);

export default UserModel;
