import diaries from '../models/diaries';

function updateOneDiaryEntry(req, res) {
  const id = parseInt(req.params.id, 10);
  const diaryEntry = diaries.find(diaryItem => diaryItem.id === id);
  if (!diaryEntry) {
    res.status(404).send({
      message: 'Diary entry does not exist',
    });
  } else if (!req.body.title) {
    res.status(400).send({
      message: 'Title is required',
    });
  } else if (!req.body.description) {
    res.status(400).send({
      message: 'Description is required',
    });
  } else {
    const updatedDiaryEntry = {
      id: diaryEntry.id,
      title: req.body.title,
      description: req.body.description,
    };
    diaries.splice(diaryEntry.id, 1, updatedDiaryEntry);
    res.status(200).send({
      message: 'Diary entry updated successfully',
      updatedDiaryEntry,
    });
  }
}

export default updateOneDiaryEntry;
