import { Router } from "express";
import { deletItem, getItem, getItemsByZonas, getItemsZonas, postItems, putItem } from "../controllers/itemZona"

// se definen las peticiones y las rutas que las recibirán
const router = Router();
router.get('/', getItemsZonas)
router.get('/:id', getItem)
router.delete('/:id', deletItem)
router.post('/', postItems)
router.put('/:id', putItem)
router.get('/zona/:id', getItemsByZonas)

export default router;