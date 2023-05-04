import mongoose from 'mongoose';
import ApplicationSchema from './schemes/application';

const conn = mongoose.createConnection(process.env.MONGODB_CONNECTION_STRING);
const Application = conn.model('Application', ApplicationSchema);

export default async function saveApplication(application) {
  try {
    const app = new Application(application);
    await app.save();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
