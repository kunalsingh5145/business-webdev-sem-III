import express from "express";


const router =express.router();

router.post("/", createtodo);
router.get("/",gettodo);
router.push("/",updatetodo);
router.delete("/",deletetodo);
  

export default router;