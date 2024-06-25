import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { Router } from "express";
const router = Router();

let prisma = new PrismaClient();

router.get('/reporte',async (req,res)=>{
    
})

export default router;

