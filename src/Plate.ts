import {groupTypes, macroNutrients, nutrientValues, Ingredient} from "./Ingredient";


/**
 * Objeto de tipo TypePlate
 */
export enum TypePlate {
  starter = 'Entrante',
  firstPlate = 'Primer plato',
  secondPlate = 'Segundo plato',
  dessert = 'Postre'
};

/**
 *
 */
export class Plate {
  private name_: string;
  private ingredients_: Ingredient[];
  // private nutritionalComposition_: nutrientValues;

  /**
   * Constructor de la clase Plate.
   * @param name_plate Nombre del plato.
   * @param ingredients Vector de ingredientes.
   */
  constructor(name: string, ingredients: Ingredient[]) {
    this.name_ = name;
    this.ingredients_ = ingredients;
    // this.nutritionalComposition_ = ();
  }

  /** ******************************************************************** **/

  public get getName(): string {
    return this.name_;
  }

  public set setName(newName: string) {
    this.name_ = newName;
  }

  /** ******************************************************************** **/

  public get getIngredients(): Ingredient[] {
    return this.ingredients_;
  }

  public set setIngredients(newIngredients: Ingredient[]) {
    this.ingredients_ = newIngredients;
  }

  public set pushIngredients(newIngredients: Ingredient) {
    this.ingredients_.push(newIngredients);
  }

  /** ******************************************************************** **/

  private calculateNutritionalValues(): macroNutrients {
    let returnValue: macroNutrients;
    this.ingredients_.forEach((ingredient) => {
      returnValue.
    });
    return returnValue;
  }
};
