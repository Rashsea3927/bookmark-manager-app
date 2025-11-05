import { promises as fs } from 'fs';

export const getBookmarks = async () => {
  // Simulate fetching data from a database or an API
  const bookmarks = await fs.readFile(process.cwd() + '/data/bookmarks.json', 'utf-8');
  const result = JSON.parse(bookmarks);

  return result['bookmarks'];
};
