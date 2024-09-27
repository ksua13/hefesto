
// import { Router } from "express";

// import { deletecategory, getCategories, getCategory, postCategory, updatecategory } from "../controllers/categoria";

// const router = Router();

// router.get('/', getCategories)
// router.get('/:id', getCategory)
// router.delete('/:id', deletecategory)
// router.post('/', postCategory)
// router.put('/:id', updatecategory)




// export default router;
import { Router } from 'express';
import { getCategories, getCategory } from '../controllers/categoria';

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategory);


export default router;
