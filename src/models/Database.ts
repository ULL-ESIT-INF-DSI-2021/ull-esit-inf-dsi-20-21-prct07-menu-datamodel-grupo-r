import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

let db: low.LowdbSync<any>;

export function createDatabase() {
  const adapter = new FileSync('db.json');
  db = low(adapter);

  db.defaults({menus: []}).write();
}

export const getDatabase = () => db;

