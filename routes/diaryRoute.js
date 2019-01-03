import diaryController from '../controllers/diaryController';

export default (router) => {
  router.route('/v1/entries/:id')
    .get(diaryController.getOne);
};
