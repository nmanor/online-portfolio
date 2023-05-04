import { Schema } from 'mongoose';

const ApplicationSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  content: String,
  date: { type: Date, default: Date.now },
});

export default ApplicationSchema;
