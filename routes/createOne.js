import createOne from '../controllers/createOne';
import createOneRouter from './index';

createOneRouter.post('/entries', createOne);

export default createOneRouter;
