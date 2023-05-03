import path from 'path';
import { promises as fs } from 'fs';

export default async function readJson(fileName) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(`${jsonDirectory}/${fileName}`, 'utf8');
  return JSON.parse(fileContents);
}
