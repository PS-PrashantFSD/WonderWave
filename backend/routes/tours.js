import express from 'express'
import { 
    createTour, 
    deleteTour, 
    getAllTour, 
    getFeaturedTour, 
    getSingleTour, 
    getTourBySearch, 
    getTourCount, 
    updateTour } from './../controllers/tourController.js';
    import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// Tour routes Get, Post, Delete, Update & get single
router.post('/',verifyAdmin, createTour);
router.put('/:id',verifyAdmin, updateTour);
router.get('/', getAllTour);
router.delete('/:id',verifyAdmin, deleteTour);
router.get('/:id', getSingleTour);

router.get('/search/getTourBySearch', getTourBySearch)
router.get('/search/getFeaturedTour', getFeaturedTour)
router.get('/search/getTourCount', getTourCount)



export default  router;