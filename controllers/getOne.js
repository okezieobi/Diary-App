import diaries from '../models/diaries';

function getOneDiaryEntry(req, res) {
  const id = parseInt(req.params.id, 10);
  const diaryEntry = diaries.find(diaryItem => diaryItem.id === id);
  if (diaryEntry) {
    res.status(200).send({
      message: 'Diary entry successfully retrieved',
      diaryEntry,
    });
  } else {
    res.status(404).send({
      message: 'Diary entry does not exist',
    });
  }
}

export default getOneDiaryEntry;
