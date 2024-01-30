import mongoose, { Schema, Document } from "mongoose";

export interface IRoles extends Document {
  roleId: mongoose.Schema.Types.ObjectId;
  rolename: String;
}

const rolesSchema: Schema<IRoles> = new Schema(
  {
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    rolename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RoleModel = mongoose.model<IRoles>("Role", rolesSchema);

export default RoleModel;
