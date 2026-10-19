import express from 'express'
import StockMovementModel from '../model/stocks.model.js'

export const allStocks = async (req, res) => {
    try {
        const stocks = await StockMovementModel.paginate()
        res.status(200).json({
            success: true,
            message: "stocks Fetched Successfully!",
            stocks: stocks.docs,
            page: stocks.page,
            totalpage: stocks.totalPages,
            limit: stocks.limit,
            hasPrevPage: stocks.hasPrevPage,
            hasNextPage: stocks.hasNextPage
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const addStocks = async (req, res) => {
    try {
        const data = req.body
        const stocks = await StockMovementModel.create(data)
        res.status(201).json({
            success: true,
            message: "stocks Created Successfully!",
            stocks: stocks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const stocks = async (req, res) => {
    try {
        const id = req.params.id
        const stocks = await StockMovementModel.findById(id)
        if (!stocks) {
            res.status(400).json({
                success: false,
                message: "stocks Not Found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "stocks Found Successfully!",
            stocks: stocks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}
export const updateStocks = async (req, res) => {
    try {
        const id = req.params.id
        const stocks = await StockMovementModel.findByIdAndUpdate(id, req.body, { new: true })
        if (!stocks) {
            res.status(400).json({
                success: false,
                message: "stocks Not Found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "stocks Updated Successfully!",
            stocks: stocks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

export const deleteStocks = async (req, res) => {
    try {
        const id = req.params.id
        const stocks = await StockMovementModel.findByIdAndDelete(id, { new: true })
        if (!stocks) {
            res.status(400).json({
                success: false,
                message: "stocks Not Found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "stocks Deleted Successfully!",
            stocks: stocks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}