import mongoose, { Schema, Document } from "mongoose";

interface IApprover {
  approverId: mongoose.Schema.Types.ObjectId;
  status: string;
  comments?: string;
}

export interface IPullRequests extends Document {
  pullRequestId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  requesterId: mongoose.Schema.Types.ObjectId;
  approvers: IApprover[];
  status: "Open" | "Approved" | "Rejected";
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const pullRequestsSchema: Schema<IPullRequests> = new Schema(
  {
    pullRequestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PullRequest", // Reference to the Pull request model
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requesterId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    approvers: [
      {
        approverId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
        comments: {
          type: String,
        },
      },
    ],
    status: {
      type: String,
      enum: ["Open", "Approved", "Rejected"],
      required: true,
      default: "Open",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    deletedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const PullRequestsModel = mongoose.model<IPullRequests>(
  "PullRequests",
  pullRequestsSchema
);

export default PullRequestsModel;
