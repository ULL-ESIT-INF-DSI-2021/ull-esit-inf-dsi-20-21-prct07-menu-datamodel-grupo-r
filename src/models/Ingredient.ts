import {MacroNutrients} from './MacroNutrients';
/**
 * Contiene los grupos de ingredientes.
 */
export enum groupTypes {
  Meat = 'Carne',
  Fish = 'Pescado',
  Eggs = 'Huevos',
  Tofu = 'Tofu',
  Nuts = 'Frutos Secos',
  Seeds = 'Semillas',
  Legumes = 'Legumbres',
  Vegetables = 'Vegetales',
  Dairy = 'Lacteos',
  Cereal = 'Cereales',
  Fruit = 'Frutas'
}


/**
 * Implementa un ingrediente y almacena sus atributos básicos.
 * @var name_ Almacena el nombre del ingrediente.
 * @var price_ Almacena el precio del ingrediente.
 * @var group_ Almacena el grupo alimenticio del ingrediente.
 * @var origin_ Almacena la dirección de origen del ingrediente.
 * @var nutrients_ Almacena la cantidad de cada macronutriente. Su valor es en
 * kcl por cada 100gr.
 */
export class Ingredient {
  private name_: string;
  private price_: number;
  private amount_: number;
  private origin_: string;
  private group_: groupTypes;
  private nutrients_: MacroNutrients;

  /** ******************************************************************** **/

  /**
   * Construye el objeto y asigna a cada atributo su valor.
   * @param name Nombre del ingrediente.
   * @param price Precio del ingrediente.
   * @param group Grupo alimenticio del ingrediente.
   * @param origin Dirección de origen del ingrediente.
   * @param nutrients Cantidad de cada macronutriente.
   */
  constructor(name: string, price: number, amount: number, origin: string,
      group: groupTypes, nutrients: MacroNutrients) {
    this.name_ = name;
    this.price_ = price;
    this.amount_ = amount;
    this.group_ = group;
    this.origin_ = origin;
    this.nutrients_ = nutrients;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el nombre del ingrediente.
   */
  public get name(): string {
    return this.name_;
  }

  /**
   * Cambia el nombre del ingrediente.
   * @param newName Nuevo nombre del ingrediente.
   */
  public set name(newName: string) {
    this.name_ = newName;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el precio del ingrediente.
   */
  public get price(): number {
    return this.price_;
  }

  /**
   * Cambia el precio del ingrediente.
   * @param newPrice Nuevo precio del ingrediente.
   */
  public set price(newPrice: number) {
    this.price_ = newPrice;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve la cantidad de ingrediente.
   */
  public get amount(): number {
    return this.amount_;
  }

  /**
   * Cambia la cantidad de ingrediente.
   * @param newAmount Nuevo precio del ingrediente.
   */
  public set amount(newAmount: number) {
    this.amount_ = newAmount;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el origen del ingrediente.
   */
  public get origin(): string {
    return this.origin_;
  }

  /**
   * Cambia el origen del ingrediente.
   * @param newOrigin Nuevo origen del ingrediente.
   */
  public set origin(newOrigin: string) {
    this.origin_ = newOrigin;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el grupo del ingrediente.
   */
  public get group(): groupTypes {
    return this.group_;
  }

  /**
   * Cambia el grupo del ingrediente.
   * @param newGroup Nuevo grupo del ingrediente.
   */
  public set group(newGroup: groupTypes) {
    this.group_ = newGroup;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve los nutrientes del ingrediente.
   */
  public get nutrients(): MacroNutrients {
    return this.nutrients_;
  }

  /**
   * Cambia los nutrientes del ingrediente.
   * @param newNutrients Nuevos nutrientes del ingrediente.
   */
  public set nutrients(newNutrients: MacroNutrients) {
    this.nutrients_ = newNutrients;
  }
}
