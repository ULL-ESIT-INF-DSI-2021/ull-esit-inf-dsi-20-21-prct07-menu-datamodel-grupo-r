import {groupTypes, Ingredient} from "./Ingredient";
import {MacroNutrients} from "./MacroNutrients";
import {Plate, plateTypes} from "./Plate";

/**
 * Implementa un menu con sus platos.
 * @var name_ Nombre del menú.
 * @var plates_ Platos que conformar el menú
 * @var price_ Precio total del menú.
 * @var nutrients_ Valor nutricional del menú.
 * @var groups_ Grupos de alimentos que aparecen en el menú.
 */
export class Menu {
  private name_: string;
  private plates_: Plate[];
  private price_: number;
  private nutrients_: MacroNutrients;
  private groups_: groupTypes[];

  /**
   * Inicializa todos los atributos.
   * @param plates Platos que conforma en menú.
   */
  constructor(name: string, plates: Plate[]) {
    this.name_ = name;
    this.plates_ = plates;
    this.price_ = this.calculatePrice();
    this.nutrients_ = this.calculateNutritionalValue();
    this.groups_ = this.calculateGroups();
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el nombre del plato.
   */
  public get name(): string {
    return this.name_;
  }

  /**
   * Cambia el nombre del plato.
   */
  public set name(newName: string) {
    this.name_ = newName;
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
    this.price_ = this.calculatePrice();
    this.nutrients_ = this.calculateNutritionalValue();
    this.groups_ = this.calculateGroups();
  }

  /**
  *Añade un plato
  */
  public addPlates(plate: Plate[]) {
    // Plate.push(plate);
  }

  /**
  *elimina un plato
  */
  public removePlates(plate: Plate[]) {
    // splice(Plate.length, 1);
  }


  /** ******************************************************************** **/

  /**
   * Devuelve el precio del menú.
   */
  public get price(): number {
    return this.price_;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve los nutrientes del menú.
   */
  public get nutrients(): MacroNutrients {
    return this.nutrients_;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve los grupos alimenticios del menú.
   */
  public get groups(): groupTypes[] {
    return this.groups_;
  }

  /** ******************************************************************** **/

  /**
   * Calcula el valor nutricional del menú.
   */
  private calculateNutritionalValue(): MacroNutrients {
    const returnValue = new MacroNutrients(0, 0, 0);
    this.plates_.forEach((plate) => {
      returnValue.carbohydrates += plate.nutritionalComposition.carbohydrates;
      returnValue.proteins += plate.nutritionalComposition.proteins;
      returnValue.lipids += plate.nutritionalComposition.lipids;
    });
    return returnValue;
  }

  /**
   * calcula el grupo de alimento predominante del plato.
   */
  private calculateGroups(): groupTypes[] {
    const result: groupTypes[] = [];
    this.plates_.forEach((plate) => {
      plate.ingredients.forEach((ingredient) => {
        result.push(ingredient.group);
      });
    });
    return result;
  }

  /**
   * Calcula el precio del plato.
   */
  private calculatePrice(): number {
    let price: number = 0;
    this.plates_.forEach((plate) => {
      price += plate.price;
    });
    return price;
  }


  /**
   * Imprime el plato.
   */
  public print() {
    console.log(`${this.name_}`);
  }
};
