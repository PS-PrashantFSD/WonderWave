import User from './../models/User.js'

export const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(200).json({success:true, message: 'Succefully Created', data: savedUser})
    } catch (error) {
        res.status(500).json({success:false, message: 'Failed to Create. try again'})
    }
}

//update User
export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({success:true, message: 'Succefully updated', data: updateUser})

    } catch (error) {
        res.status(500).json({success:false, message: 'Failed to update. try again'})
    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const deletedUser = await User.findByIdAndDelete(id)

        res.status(200).json({success:true, message: 'Succefully Deleted'})

    } catch (error) {
        res.status(500).json({success:false, message: 'Failed to Delete'})
    }
}
export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)

        res.status(200).json({success:true, message: 'Succefull', data: user})

    } catch (error) {
        res.status(404).json({success:false, message: 'Not Found'})
    }
}

export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})

        res.status(200).json({success:true, message: 'Succefully', data: users})
    } catch (error) {
        res.status(404).json({success:false, message: 'Not Found'})
    }
}
