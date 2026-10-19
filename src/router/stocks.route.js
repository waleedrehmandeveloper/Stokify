import express from 'express'
import { allStocks,addStocks,updateStocks,stocks,deleteStocks } from '../controller/stocks.controller.js'
const router = express.Router()

router.get('/allstocks',allStocks)
router.post('/addstocks',addStocks)
router.post('/stocks/:id',stocks)
router.patch('/updatestocks',updateStocks)
router.delete('/deletestocks',deleteStocks)

router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found!"
    });                                                                 
});

export default router