import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
const router = express.Router()

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


// Update, Get All, Delete And Get Single User
router.put('/:id',verifyUser, updateUser);
router.get('/',verifyAdmin, getAllUser);
router.delete('/:id',verifyUser, deleteUser);
router.get('/:id',verifyUser, getSingleUser);

export default router 