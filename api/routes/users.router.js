import express from "express";



const router = express.Router();

router.post("/post", getProduct);


export default router;
