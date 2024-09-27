import { Router } from "express";
import { deleteProduct, getProduct, getProductosByCategoria, getProducts, postProduct, updateProduct } from "../controllers/producto";

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)
router.post('/', postProduct)
router.put('/:id', updateProduct)
router.get('/categoria/:id', getProductosByCategoria);
// router.get('/:categoria',getProductsByCategory)
// router.get('/categorias/:id/productos', getProductsByCategory);




export default router;