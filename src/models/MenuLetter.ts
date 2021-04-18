import {Menu} from './Menu';
import {Plate} from './Plate';


/**
 * Contiene la carta de un restaurante.
 * @var plates_ Platos individuales de la carta.
 * @var menus_ Menúes predefinidos por el restaurante.
 */
export class MenuLetter {
  plates_: Plate[];
  menus_: Menu[];

  /**
   * Inicializa todos los atributos.
   * @param plates Platos individuales de la carta.
   * @param menus Menúes predefinidos por el restaurante.
   */
  constructor(plates: Plate[], menus: Menu[]) {
    this.plates_ = plates;
    this.menus_ = menus;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve los platos del menú.
   */
  public get plates(): Plate[] {
    return this.plates_;
  }

  /**
   * Cambia los platos del menú.
   */
  public set plates(newPlates: Plate[]) {
    this.plates_ = newPlates;
  }

  /**
   * Añade al vector Plates un nuevo plato
   * @param newPlate
   */
  public pushPlates(newPlate: Plate) {
    this.plates_.push(newPlate);
  }

  /**
   * Elimina del vector Plates el ultimo objeto introducido
   */
  public popPlates() {
    this.plates_.pop();
  }


  /** ******************************************************************** **/

  /**
   * Devuelve el nombre del plato.
   */
  public get menus(): Menu[] {
    return this.menus_;
  }

  /**
   * Cambia el nombre del plato.
   */
  public set menus(newMenus: Menu[]) {
    this.menus_ = newMenus;
  }

  /**
   * Añade al vector Menu un nuevo menu
   * @param newPlate
   */
  public pushMenu(newMenu: Menu) {
    this.menus_.push(newMenu);
  }

  /**
   * Elimina del vector Menu el ultimo objeto introducido
   */
  public popMenu() {
    this.menus_.pop();
  }

  public print() {
    console.log('Menus: ');
    this.menus_.forEach((menu) => menu.print());
    console.log('Plates: ');
    this.plates_.forEach((plate) => plate.print());
  }
}
