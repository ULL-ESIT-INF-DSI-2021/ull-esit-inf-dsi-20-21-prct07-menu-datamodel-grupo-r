import low from 'lowdb';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {MenuLetter} from './MenuLetter';
import {Menu} from './Menu';
import {Plate} from './Plate';


type SchemaType = {
  menus: Menu[],
  plates: Plate[]
}


export class LetterDatabase extends MenuLetter {
  private dataBase_: lowdb.LowdbSync<SchemaType>;

  constructor(plates: Plate[], menus: Menu[]) {
    super(plates, menus);
    this.dataBase_ = low(new FileSync('db.json'));
    if (this.dataBase_.has('menus').value()) {
      const dbMenus = this.dataBase_.get('menus').value();
      dbMenus.forEach((menu) => {
        this.menus_.push(menu);
      });
    } else {
      this.dataBase_.set('menus', this.menus_).write();
    }
  }

  public addMenu(menu: Menu) {
  }
}

