import mongoose from 'mongoose';

const happSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model('Happ', happSchema);
