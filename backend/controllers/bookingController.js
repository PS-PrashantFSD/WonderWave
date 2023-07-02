import Booking from "../models/Booking.js"

//create booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const  savedBooking = await newBooking.save()
        res.status(200).json({success: true, msg: "Your tour is booked", data:savedBooking})
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error"})
    }
}

// get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({success: true, msg: "Successfull", data:book})
    } catch (error) {
        res.status(404).json({success: false, msg: "not found"})
    }
}


//get all booking
export const getAllBooking = async (req, res) => {
    
    try {
        const bookings = await Booking.find()
        res.status(200).json({success: true, message: "Successfull", data:bookings})
    } catch (error) {
        res.status(500).json({success: false, message: "internal server error"})
    }
}
