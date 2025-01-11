import { Router } from "express";

const router = Router();

router.get('/', (req,res)=>{
    res.send('Backend is Running');
})

export default router;