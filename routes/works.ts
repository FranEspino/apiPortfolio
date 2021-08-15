import {Router} from 'express';
import {getWorks,getOnceWork,postWorks,updateWorks,deleteWorks} from '../controllers/works';

const router =  Router();
//Construir los endpoints de la API

router.get('/', getWorks);
router.get('/:id', getOnceWork);
router.post('/', postWorks);
router.put('/:id', updateWorks);
router.delete('/:id', deleteWorks);

export default router;