import updateOne from '../controllers/updateOne';

import updateOneRouter from './index';

updateOneRouter.put('/entries/:id', updateOne);

export default updateOneRouter;
