import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

let db;

export function createDatabase() {
  const adapter = new FileSync('db.json');
  db = low(adapter);

  db.defaults({menus: []}).write();
}

export const getDatabase = () => db;

