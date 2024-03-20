import mongoose, { Types } from "mongoose";

const codeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    owner: {
      type: Types.ObjectId,
      required: true
    }
  },
  {
    timestamps: true,
  }
);
export const Code = mongoose.model("Code", codeSchema);
