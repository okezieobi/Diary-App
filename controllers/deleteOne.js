import diaries from '../models/diaries';

function deleteOneDiaryEntry(req, res) {
  const id = parseInt(req.params.id, 10);
  const diaryEntry = diaries.find(diaryItem => diaryItem.id === id);
  if (!diaryEntry) {
    res.status(404).send({
      message: 'Diary entry does not exist',
    });
  } else {
    diaries.splice(diaryEntry.id, 1);
    res.status(200).send({
      message: 'Diary entry successfully deleted',
    });
  }
}

export default deleteOneDiaryEntry;
