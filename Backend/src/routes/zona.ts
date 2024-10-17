import { Router } from "express";
import { deleteZona, getZona, getZonas, postZona, updateZona } from "../controllers/zona";

const router = Router();

router.get('/', getZonas)
router.get('/:id', getZona)
router.delete('/:id', deleteZona)
router.post('/', postZona)
router.put('/:id', updateZona)



export default router;