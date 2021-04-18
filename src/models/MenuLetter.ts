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
   * Imprime el plato.
   */
  public print() {
    console.log('Platos:');
    this.plates_.forEach((plate) => plate.print());

    console.log('Menúes:');
    this.menus_.forEach((menu) => menu.print());
  }
}
