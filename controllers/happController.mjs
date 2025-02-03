import Happ from '../models/happSchema.mjs';

//Create
async function createHapp(req, res) {
  try {
    let newHapp = new Happ(req.body);

    await newHapp.save();

    res.json(newHapp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Read
async function readHapp(req, res) {
  try {
    let allHapps = await Happ.find({});

    res.json(allHapps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Update
async function updateHapp(req, res) {
  try {
    let updatedHapp = await Happ.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedHapp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Delete
async function deleteHapp(req, res) {
  try {
    await Happ.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Deleted Happ' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

export default { createHapp, readHapp, updateHapp, deleteHapp };
