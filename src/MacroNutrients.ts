/**
 * Almacena los macronutrientes de un ingrediente en kcl por cada 100 gr.
 * @var carbohydrates_ Contiene los carbohidratos.
 * @var proteins_ Contiene las proteínas.
 * @var lipids_ Contiene los lípidos.
 */
export class MacroNutrients {
  private carbohydrates_: number;
  private proteins_: number;
  private lipids_: number;

  /** ******************************************************************** **/

  /**
   * Inicializa los valores de cada nutriente.
   * @param carbohydrates Carbohidratos por cada 100gr.
   * @param proteins Proteínas por cada 100gr.
   * @param lipids Lípidos por cada 100gr.
   */
  constructor(carbohydrates: number, proteins: number, lipids: number) {
    this.carbohydrates_ = carbohydrates;
    this.proteins_ = proteins;
    this.lipids_ = lipids;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve los carbohidratos.
   */
  public get getCarbohydrates(): number {
    return this.carbohydrates_;
  }

  /**
   * Cambia el valor de los carbohidratos.
   */
  public set setCarbohydrates(newCarbohydrates: number) {
    this.carbohydrates_ = newCarbohydrates;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve las proteínas.
   */
  public get getProteins(): number {
    return this.proteins_;
  }

  /**
   * Cambia el valor de las proteínas.
   */
  public set setProteins(newProteins: number) {
    this.proteins_ = newProteins;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve los lípidos.
   */
  public get getLipids(): number {
    return this.lipids_;
  }

  /**
   * Cambia el valor de los lípidos.
   */
  public set setLipids(newLipids: number) {
    this.lipids_ = newLipids;
  }
}
