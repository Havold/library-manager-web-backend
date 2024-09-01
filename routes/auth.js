import { Router } from "express";

const router = Router()

// CREATE
router.get('/', (req,res) => {
    res.send('Hello World from auth.js')
})
// UPDATE
// DELETE
// GET
// GET ALL

export default router