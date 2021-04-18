import {write} from 'lowdb/adapters/FileSync';
import {createDatabase, getDatabase} from './Database';
import {MenuLetter} from './MenuLetter';

const letter = new MenuLetter([], []);

getDatabase().get('menus').push(letter).write();
