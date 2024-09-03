import { Router } from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Router()

// // CHECK AUTHENTICATION
// router.get('/checkAuthentication', verifyToken, (req, res, next) => {
//     res.send('Hello user, you are logged in!')
// })

// // CHECK USER
// router.get('/checkUser/:id', verifyUser, (req,res,next) => {
//     res.send('Hello user, you are logged in and can delete this account!')
// })

// // CHECK ADMIN
// router.get('/checkAdmin', verifyAdmin, (req,res,next) => {
//     res.send('Hello admin, you are logged in and you can do whatever you want!')
// })

// UPDATE
router.put('/:id', verifyUser, updateUser)
// DELETE
router.delete('/:id', verifyUser, deleteUser)
// GET
router.get('/:id', verifyUser, getUser)
// GET ALL
router.get('/', verifyAdmin, getAllUsers)

export default router