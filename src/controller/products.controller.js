import ProductModel from "../model/products.model.js"

export const allProducts = async (req, res) => {
    try {
        const products = await ProductModel.paginate()
        res.status(200).json({
            success: true,
            message: "Products Fetched Successfully!",
            products: products.docs,
            page: products.page,
            totalpage: products.totalPages,
            limit: products.limit,
            hasPrevPage: products.hasPrevPage,
            hasNextPage: products.hasNextPage
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const addProducts = async (req, res) => {
    try {
        const data = req.body
        const products = await ProductModel.create(data)
        res.status(201).json({
            success: true,
            message: "Products Created Successfully!",
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const singleProducts = async (req, res) => {
    try {
        const id = req.params.id
        const products = await ProductModel.findById(id)
        if (!products) {
            res.status(400).json({
                success: false,
                message: "Products Not Found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "Products Found Successfully!",
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const updateProducts = async (req, res) => {
    try {
        const id = req.params.id
        const products = await ProductModel.findByIdAndUpdate(id,req.body,{new: true})
        if (!products) {
            res.status(400).json({
                success: false,
                message: "Products Not Found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "Products Updated Successfully!",
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id
        const products = await ProductModel.findByIdAndDelete(id,{new:true})
        if (!products) {
            res.status(400).json({
                success: false,
                message: "Products Not Found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "Products Deleted Successfully!",
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}