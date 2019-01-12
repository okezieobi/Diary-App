import getOne from '../controllers/getOne';
import getOneRouter from './index';

getOneRouter.get('/entries/:id', getOne);

export default getOneRouter;
