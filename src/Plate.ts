import {Ingredient, groupTypes} from './Ingredient';
import {MacroNutrients} from './MacroNutrients';


/**
 * Objeto de tipo TypePlate
 */
export enum typePlate {
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
  private nutritionalComposition_: MacroNutrients;
  private predominantGroup_: groupTypes;
  private price_: number;

  /**
   * Constructor de la clase Plate.
   * @param name_plate Nombre del plato.
   * @param ingredients Vector de ingredientes.
   */
  constructor(name: string, ingredients: Ingredient[]) {
    this.name_ = name;
    this.ingredients_ = ingredients;
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  /** ******************************************************************** **/

  public get name(): string {
    return this.name_;
  }

  public set name(newName: string) {
    this.name_ = newName;
  }

  /** ******************************************************************** **/

  public get ingredients(): Ingredient[] {
    return this.ingredients_;
  }

  public set ingredients(newIngredients: Ingredient[]) {
    this.ingredients_ = newIngredients;
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  /** ******************************************************************** **/

  public get nutritionalComposition(): MacroNutrients {
    return this.nutritionalComposition_;
  }

  /** ******************************************************************** **/

  public get predominantGroup(): groupTypes {
    return this.predominantGroup_;
  }

  /** ******************************************************************** **/

  public get price(): number {
    return this.price_;
  }

  public set price(newPrice: number) {
    this.price_ = newPrice;
  }

  /** ******************************************************************** **/

  public pushIngredients(newIngredients: Ingredient) {
    this.ingredients_.push(newIngredients);
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  private calculateNutritionalValue(): MacroNutrients {
    const returnValue = new MacroNutrients(0, 0, 0);
    this.ingredients_.forEach((ingredient) => {
      const carbohydrates = ingredient.nutrients.carbohydrates;
      const proteins = ingredient.nutrients.proteins;
      const lipids = ingredient.nutrients.lipids;
      returnValue.carbohydrates += (carbohydrates * ingredient.amount) / 100;
      returnValue.proteins += (proteins * ingredient.amount) / 100;
      returnValue.lipids += (lipids * ingredient.amount) / 100;
    });
    return returnValue;
  }

  private calculatePredominantGroup(): groupTypes {
    /* return this.ingredients_.sort((a, b) =>
      this.ingredients_.filter((v) => v===a).length -
        this.ingredients_.filter((v) => v===b).length,
    ).pop().group; */
    return groupTypes.Fruit;
  }

  private calculatePrice(): number {
    let price: number = 0;
    this.ingredients.forEach((ingredient) => {
      price += (ingredient.price * ingredient.amount) / 100;
    });
    return price;
  }
};
