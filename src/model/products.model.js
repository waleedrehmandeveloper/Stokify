import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true
    },
    sku: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    filePath: {
      type: String,
      required: true
    },

    fileName: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },

    lowStockThreshold: {
      type: Number,
      default: 5,
      min: 0
    },

    description: {
      type: String,
      trim: true,
      default: ""
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);
productSchema.plugin(paginate)

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
