import deleteOne from '../controllers/deleteOne';
import deleteOneRouter from './index';

deleteOneRouter.delete('/entries/:id', deleteOne);

export default deleteOneRouter;
