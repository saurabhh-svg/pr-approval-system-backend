import mongoose, { Schema, Document } from "mongoose";

export interface IReviews extends Document {
  reviewId: mongoose.Schema.Types.ObjectId;
  pullRequestId: mongoose.Schema.Types.ObjectId;
  reviewerId: mongoose.Schema.Types.ObjectId;
  comments: String;
  createdAt: Date;
}

const reviewerSchema: Schema<IReviews> = new Schema(
  {
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
    pullRequestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PullRequest",
      required: true,
    },
    reviewerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviewer",
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const ReviewsModel = mongoose.model<IReviews>("Reviews", reviewerSchema);

export default ReviewsModel;
