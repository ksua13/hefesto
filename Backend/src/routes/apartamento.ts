import { Router } from "express";
import { deletApartamento, getApartamento, getApartamentos, postApartamento, putApartamento } from "../controllers/apartamento";

// se definen las peticiones y las rutas que las recibirán
const router = Router();
router.get('/', getApartamentos)
router.get('/:id', getApartamento)
router.delete('/:id', deletApartamento)
router.post('/', postApartamento)
router.put('/:id', putApartamento)
// router.get('/zona/:id', getItemsByZonas)

export default router;