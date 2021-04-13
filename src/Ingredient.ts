/**
 * Contiene los macronutrientes de un ingrediente.
 */
export enum macroNutrients {carbohydrates, proteins, lipids};
export type nutrientValues = [macroNutrients, number];


/**
 * Implementa un ingrediente y almacena sus atributos básicos.
 * @var name_ Almacena el nombre del ingrediente.
 * @var price_ Almacena el precio del ingrediente.
 * @var group_ Almacena el grupo alimenticio del ingrediente.
 * @var origin_ Almacena la dirección de origen del alimento.
 * @var nutrients_ Almacena la cantidad de cada macronutriente. Su valor es en
 * kcl por cada 100gr.
 */
export class Ingredient {
  private name_: string;
  private price_: number;
  private group_: string;
  private origin_: string;
  private nutrients_: nutrientValues[];

  /** ********************************************************************** **/

  /**
   * Construye el objeto y asigna a cada atributo su valor.
   * @param name Nombre del ingrediente.
   * @param price Precio del ingrediente.
   * @param group Grupo alimenticio del ingrediente.
   * @param origin Dirección de origen del alimento.
   * @param nutrients Cantidad de cada macronutriente.
   */
  constructor(name: string, price: number, group: string, origin: string,
      nutrients: nutrientValues[]) {
    this.name_ = name;
    this.price_ = price;
    this.group_ = group;
    this.origin_ = origin;
    this.nutrients_ = nutrients;
  }

  /** ********************************************************************** **/

  /**
   * Devuelve el nombre del alimento.
   */
  public get name(): string {
    return this.name_;
  }

  /**
   * Cambia el nombre del alimento.
   * @param newName Nuevo nombre del alimento.
   */
  public set name(newName: string) {
    this.name_ = newName;
  }

  /** ********************************************************************** **/

  /**
   * Devuelve el precio del alimento.
   */
  public get price(): number {
    return this.price_;
  }

  /**
   * Cambia el precio del alimento.
   * @param newPrice Nuevo precio del alimento.
   */
  public set price(newPrice: number) {
    this.price_ = newPrice;
  }

  /** ********************************************************************** **/

  /**
   * Devuelve el grupo del alimento.
   */
  public get group(): string {
    return this.group_;
  }

  /**
   * Cambia el grupo del alimento.
   * @param newGroup Nuevo grupo del alimento.
   */
  public set group(newGroup: string) {
    this.group_ = newGroup;
  }

  /** ********************************************************************** **/

  /**
   * Devuelve el origen del alimento.
   */
  public get origin(): string {
    return this.origin_;
  }

  /**
   * Cambia el origen del alimento.
   * @param newOrigin Nuevo origen del alimento.
   */
  public set origin(newOrigin: string) {
    this.origin_ = newOrigin;
  }

  /** ********************************************************************** **/

  /**
   * Devuelve los nutrientes del alimento.
   */
  public get nutrients(): nutrientValues[] {
    return this.nutrients_;
  }

  /**
   * Cambia los nutrientes del alimento.
   * @param newNutrients Nuevos nutrientes del alimento.
   */
  public set nutrients(newNutrients: nutrientValues[]) {
    this.nutrients_ = newNutrients;
  }
}
