import getAll from '../controllers/getAll';
import getAllRouter from './index';

getAllRouter.get('/entries', getAll);

export default getAllRouter;
