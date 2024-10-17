import { Router } from "express";
import { getApartamentosDetalles, getApartamentosDetallesByApartamento } from "../controllers/apartamentoDetalle";


// se definen las peticiones y las rutas que las recibirán
const router = Router();
router.get('/', getApartamentosDetalles)
// router.get('/:id', getApartamento)
// router.delete('/:id', deletApartamento)
// router.post('/', postApartamento)
// router.put('/:id', putApartamento)
router.get('/apartamento/:id', getApartamentosDetallesByApartamento)

export default router;