import mongoose, { Schema, Document } from "mongoose";

export interface IApproval extends Document {
  approvalId: mongoose.Schema.Types.ObjectId;
  pullRequestId: mongoose.Schema.Types.ObjectId;
  approverId: mongoose.Schema.Types.ObjectId;
  password: String;
  status: "Open" | "Approved" | "Rejected";
  createdAt: Date;
}

const approvalSchema: Schema<IApproval> = new Schema(
  {
    approvalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Approval",
      required: true,
    },
    pullRequestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PullRequest",
      required: true,
    },
    approverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Approver",
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "Approved", "Rejected"],
      required: true,
      default: "Open",
    },
    createdAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const ApprovalModel = mongoose.model<IApproval>("Approval", approvalSchema);

export default ApprovalModel;
