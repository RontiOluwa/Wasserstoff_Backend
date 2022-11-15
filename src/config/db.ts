import mongoose from 'mongoose';
import * as dotEnv from 'dotenv';
dotEnv.config();

let url = process.env.MONGO_URI;

const db = async () => {
  if (!url) {
    console.log('Invalid connection url');
    process.exit(1);
  }
  try {
    
    console.log(`Connecting to database`);

    await mongoose.connect(url, {
      serverSelectionTimeoutMS: 15000
    });

    console.log(`Connected to database`);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default db;
