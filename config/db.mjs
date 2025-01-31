import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGO_URI || '';

console.log(connectionString)
const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log(`Mongo DB Connected...`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
