import {Ingredient, groupTypes} from './Ingredient';
import {MacroNutrients} from './MacroNutrients';


/**
 * Implementa un plato con sus ingredientes y valores.
 * @var name_ Nombre del plato.
 * @var ingredients_ Ingredientes del plato.
 * @var nutritionalComposition_ Valor nutricional del plato.
 * @var predominantGroup_ Grupo de alimento predominante en el plato.
 * @var price_ Precio total del plato.
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
   * Devuelve los ingredientes del plato.
   */
  public get ingredients(): Ingredient[] {
    return this.ingredients_;
  }

  /**
   * Cambia los ingredientes del plato.
   */
  public set ingredients(newIngredients: Ingredient[]) {
    this.ingredients_ = newIngredients;
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el valor nutricional del plato.
   */
  public get nutritionalComposition(): MacroNutrients {
    return this.nutritionalComposition_;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el grupo de alimento predominante del plato.
   */
  public get predominantGroup(): groupTypes {
    return this.predominantGroup_;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el precio del plato.
   */
  public get price(): number {
    return this.price_;
  }

  /**
   * Cambia el precio del plato.
   */
  public set price(newPrice: number) {
    this.price_ = newPrice;
  }

  /** ******************************************************************** **/

  /**
   * Añade un nuevo ingrediente al plato.
   */
  public pushIngredients(newIngredients: Ingredient) {
    this.ingredients_.push(newIngredients);
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  /**
   * Calcula el valor nutricional del plato..
   */
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

  /**
   * calcula el grupo de alimento predominante del plato.
   */
  private calculatePredominantGroup(): groupTypes {
    const auxGroups: groupTypes[] = [groupTypes.Meat, groupTypes.Fish,
      groupTypes.Eggs, groupTypes.Tofu, groupTypes.Nuts, groupTypes.Seeds,
      groupTypes.Legumes, groupTypes.Vegetables, groupTypes.Dairy,
      groupTypes.Cereal, groupTypes.Fruit];
    const result: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ingredients_.forEach((ingredient) => {
      result[auxGroups.indexOf(ingredient.group)]++;
    });
    return auxGroups[result.indexOf(Math.max.apply(null, result))];
  }

  /**
   * Calcula el precio del plato.
   */
  private calculatePrice(): number {
    let price: number = 0;
    this.ingredients.forEach((ingredient) => {
      price += (ingredient.price * ingredient.amount) / 100;
    });
    return price;
  }
};
