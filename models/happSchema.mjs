import mongoose from 'mongoose';

const happSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: false,
  },
});

export default mongoose.model('Happ', happSchema);
