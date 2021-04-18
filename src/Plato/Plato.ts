import { typeAliment, nutrientValues, Ingredient} from "../Ingredient.ts";


/**
 * Objeto de tipo TypePlate,
 * es un enumerable
 */
export enum TypePlate {
  Starter = 'Entremes',
  first_Plate = 'Primer plato',
  second_Plate = 'Segundo plato',
  dessert = 'Postre'
};

export class Plate { 

  private nutritional_Composition: nutrientValues;
  /**
   * Constructor de la clase Plate
   * @param name_plate Nombre del plato
   * @param ingredients Vector de ingredientes
   */
  constructor(protected name_plate: string, protected ingredients: Ingredient[] = []) {
    this.nutritional_Composition = this.calculate_Nutritional_Composition();  
  }

  /**
   * Método privado al que se llama en el constructor
   * calcula la composición nutricional
   * @returns objeto de tipo nutrientValues
   */
  private calculate_Nutritional_Composition(): nutrientValues {
    const nutritional_Composition = new nutrientValues();
    const ingredients_Compositions = this.ingredients.map((ingredient) => ingredient.getNutritionalComposition());
    
    nutritional_Composition.lipids = ingredients_Compositions.reduce((lipids, ingredient) => lipids + ingredient.lipids, 0);
    nutritional_Composition.carbohydrates = ingredients_Compositions.reduce((carbohydrates, ingredient) => carbohydrates + ingredient.carbohydrates, 0);
    nutritional_Composition.proteins = ingredients_Compositions.reduce((proteins, ingredient) => proteins + ingredient.proteins, 0);

    return nutritional_Composition;
  }


    /**
   * Get del atributo name
   * @returns nombre del plato
   */
  get_the_Name(): string {
    return this.name_plate;
  }

  /**
   * Añade un nuevo ingredient
   */
  append_Ingredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  
   /**
   * Get del atributo nutritional_Composition
   * @returns objeto de nutrientValues
   */
  get_Nutritional_Composition(): nutrientValues {
    return this.nutritional_Composition;
  }

 /**
   * Get del atributo type_aliments
   * @returns un objeto set con typeAliment
   */
  get_type_Aliments(): typeAliment[] {
    return [...new Set<typeAliment>(this.ingredients.map((ingredient) => ingredient.get_Food().get_type_Alimentos()))];
  }


  /**
   * Get del precio completo
   * @returns suma total de los precios de los igredientes
   */
  get_the_Price(): number {
    return this.ingredients.map((ingredient) => ingredient.get_the_Price()).reduce((total, price) => total + price, 0);
  }

  /**
   * Get del atributo Ingredients
   */
  get_Ingredients(): Ingredient[] {
    return this.ingredients;
  }
  /**
   * Get del grupo que mas aparece
   * @returns 
   */
  get_most_appears_Aliment(): typeAliment {
    const counter = new Map<typeAliment, number>();

    this.ingredients.forEach((ingredient) => {
      const typeAliment = ingredient.get_Food().get_type_Aliment();
      if (counter.has(typeAliment)) {
        counter.set(typeAliment, counter.get(typeAliment) as number + 1);
      } else {
        counter.set(typeAliment, 0);
      }
    });

    let result : typeAliment = [...counter.keys()][0];
    let moreAppearances = [...counter.values()][0];
    counter.forEach((appearances, group) => {
      if (appearances > moreAppearances) {
        result = group;
        moreAppearances = appearances;
      } 
    });

    return result;
  }
};