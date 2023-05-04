import { HttpStatusCode } from 'axios';
import saveApplication from '../../DAL/mongoose';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(HttpStatusCode.MethodNotAllowed).send({ message: 'Only POST requests allowed' });
    }

    const saved = await saveApplication(req.body);

    if (saved) {
      return res.send({ message: 'Application saved' });
    }
    return res.status(HttpStatusCode.InternalServerError).send({ message: 'An error accord' });
  } catch (e) {
    console.error(e);
    return res.status(HttpStatusCode.InternalServerError).send({ message: 'An error accord' });
  }
}
