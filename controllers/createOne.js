import diaries from '../models/diaries';

function createOneDiaryEntry(req, res) {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Title is required',
    });
  } else if (!req.body.description) {
    res.status(400).send({
      message: 'Description is required',
    });
  } else {
    const diaryEntry = {
      id: diaries.length,
      title: req.body.title,
      description: req.body.description,
    };
    diaries.push(diaryEntry);
    res.status(201).send({
      message: 'Diary Entry successfully created',
      diaryEntry,
    });
  }
}

export default createOneDiaryEntry;
