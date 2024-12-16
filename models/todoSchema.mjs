import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
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

export default mongoose.model('Todo', todoSchema);
