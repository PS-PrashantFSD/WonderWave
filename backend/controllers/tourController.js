import Tour from './../models/Tour.js'

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()
        res.status(200).json({success:true, message: 'Succefully Created', data: savedTour})
    } catch (error) {
        res.status(500).json({success:false, message: 'Failed to Create. try again'})
    }
}

//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({success:true, message: 'Succefully updated', data: updateTour})

    } catch (error) {
        res.status(500).json({success:false, message: 'Failed to update. try again'})
    }
}
export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        const deletedTour = await Tour.findByIdAndDelete(id)

        res.status(200).json({success:true, message: 'Succefully Deleted'})

    } catch (error) {
        res.status(500).json({success:false, message: 'Failed to Delete'})
    }
}
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate('reviews')

        res.status(200).json({success:true, message: 'Succefull', data: tour})

    } catch (error) {
        res.status(404).json({success:false, message: 'Not Found'})
    }
}

export const getAllTour = async (req, res) => {

    //for paginaion
    const page = parseInt(req.query.page)

    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8)

        res.status(200).json({success:true, count: tours.length, message: 'Succefully', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'Not Found'})
    }
}

// get tour by search
export const getTourBySearch = async(req, res) => {

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    
    try {
        //gte (Greater than Equal)
        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')
        res.status(200).json({success:true, count: tours.length, message: 'Succefully', data: tours})

    } catch (error) {
        res.status(404).json({success:false, message: 'Not Found'})
    }
}

export const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({featured: true}).populate('reviews').limit(8)

        res.status(200).json({success:true, message: 'Succefully', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'Not Found'})
    }
}

// Geat Tour Counts
export  const getTourCount = async(req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({success: true, data: tourCount})
    } catch (error) {
        res.status(500).json({success:false, message: 'failed to fetch'})
    }
}