import {write} from 'lowdb/adapters/FileSync';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {MenuLetter} from './models/MenuLetter';
import {createDatabase, getDatabase} from './Database';

createDatabase();

getDatabase().defaults({menus: []}).write();

const letter = new MenuLetter([], []);

getDatabase().get('menus').push(letter).write();
