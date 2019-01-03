import diaryList from '../models/diaryModel';

class DiaryController {
  static getAll(req, res) {
    res.status(200).json({
      diaryList,
      message: 'Diary entries successfully retrieved',
    });
  }
}

export default DiaryController;
