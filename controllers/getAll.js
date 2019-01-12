import diaries from '../models/diaries';

function getAllDiaryEntries(req, res) {
  res.status(200).send({
    diaries,
    message: 'Diary entries successfully retrieved',
  });
}

export default getAllDiaryEntries;
