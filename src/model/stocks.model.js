import paginate from "mongoose-paginate-v2";
import mongoose from "mongoose";

const stockMovementSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    type: {
      type: String,
      enum: ["IN", "OUT"],
      required: true
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    reason: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);
stockMovementSchema.plugin(paginate)

const StockMovementModel = mongoose.model(
  "StockMovement",
  stockMovementSchema
);

export default StockMovementModel;
