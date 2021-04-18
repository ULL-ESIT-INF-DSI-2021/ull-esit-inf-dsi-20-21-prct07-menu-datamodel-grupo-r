# Práctica 7 - Modelo de datos de un sistema que permite el diseño de menús

## Introducción
Durante el desarrollo de la práctica llevaremos a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita el diseño de menús.

## Descripción de los requisitos del sistema de diseño de menús
### Alimentos y/o ingredientes
Para cada alimento o ingrediente considerado dentro del sistema de diseño de menús se debe almacenar la información siguiente:
1. Grupo de alimentos al que pertenece que puede ser:
- Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres.
- Verduras y hortalizas.
- Leche y derivados.
- Cereales.
- Frutas.
2. La composición nutricional del alimento con respecto a los macronutrientes y kcal por 100 gr de dicho alimento.
- Macronutrientes: Hidratos de carbono, proteínas y lípidos.
3. Precio del alimento y/o ingrediente por kg en euros.

Además, un alimento tendrá un nombre y localización de origen (país, ciudad, etc.)

### Platos
Los platos de un menú estarán compuestos por alimentos y/o ingredientes como los definidos anteriormente. Además, deberá considerar que un plato puede pertener a **cuatro categorías distintas: entrante, primer plato, segundo plato y postre**. Asimismo, para cada plato dentro del sistema se debería poder acceder a la siguiente información:

1. Lista de alimentos y/o ingredientes que lo componen.
2. Composición nutricional del plato. Esto es, la suma de la composición nutricional de los alimentos que componen el plato. Hay que tener en cuenta que los valores nutricionales se definen por 100 gr de ingrediente, pero no siempre se usan 100 gr de cada ingrediente para elaborar un plato.
3. Grupo de alimento predominante. Este atributo deberá definir el grupo de alimento que más aparece entre los ingredientes del plato.
4. Precio total del plato en euros en función de la suma de los precios de los ingredientes y sus cantidades que lo componen.

### Menús
Un menú estará compuesto por platos, incluyendo un plato de cada categoría o, al menos, tres de ellas. Para cada menú, se debe poder consultar la siguiente información:

1. Precio total del menú en euros.
2. Platos que lo componen con sus correspodientes alimentos y/o ingredientes.
3. Composición nutricional del menú de acuerdo a lo definido en el punto 2 de la sección Alimentos.
4. Listado de grupos de alimentos por orden de aparición.

### Carta
Supongamos que el sistema que estamos diseñando se empleará en un restaurante. Dicho restaurante dispone de una carta con una serie de menús prediseñados por la administración del local. Además, en la carta se incluyen platos individuales para que los comensales diseñen sus propios menús para comer. Los menús a diseñar por los clientes pueden tener todos los platos que deseen ya que, por ejemplo, un grupo de personas podría decidir pedir varios platos para compartir o pedirlos individualmente.

Para ver el informe completo, pinche [aquí](https://ull-esit-inf-dsi-2021.github.io/prct07-menu-dataModel/)

## Clase Ingredient
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/Ingredient.ts)
[Pruebas Unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/tests/Ingredients.spec.ts)

```
export enum macroNutrients {carbohydrates, proteins, lipids};
export type nutrientValues = [macroNutrients, number];

export enum typeAliment {
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

export class Ingredient {
  private name_: string;
  private price_: number;
  private group_: typeAliment;
  private origin_: string;
  private nutrients_: nutrientValues[];

  constructor(name: string, price: number, group: typeAliment, origin: string,
      nutrients: nutrientValues[]) {
    this.name_ = name;
    this.price_ = price;
    this.group_ = group;
    this.origin_ = origin;
    this.nutrients_ = nutrients;
  }

  public get name(): string {
    return this.name_;
  }

  public set name(newName: string) {
    this.name_ = newName;
  }

  public get price(): number {
    return this.price_;
  }

  public set price(newPrice: number) {
    this.price_ = newPrice;
  }

  public get group(): typeAliment {
    return this.group_;
  }

  public set group(newGroup: typeAliment) {
    this.group_ = newGroup;
  }

  public get origin(): string {
    return this.origin_;
  }

  public set origin(newOrigin: string) {
    this.origin_ = newOrigin;
  }

  public get nutrients(): nutrientValues[] {
    return this.nutrients_;
  }

  public set nutrients(newNutrients: nutrientValues[]) {
    this.nutrients_ = newNutrients;
  }
}

```
Durante esta práctica vamos a crear una clase que creará los objetos según el tipo de alimento que sea. Para empezar creamos un **enum** con los macronutrientes, es decir, los carbohidratos, proteinas y lípidos. Tras esto creamos un **type** que será un array, con el nombre del nuetriente y valor que tendría. Tras esto, creamos un **enum** llamado *typeAliment*, dentro de este *enum* tenemos todos los tipos de alimentos. Una vez tenemos esto pasamos a la clase **Ingrediente**, en el constructor le pasamos como parámetros: el nombre del ingrediente, el precio del ingrediente, la variable *group* que tendrá un valor que está dentro del *enum typeAliment*, el origen del ingrediente y por último los nuetrientes del mismo, para esto usamos el *type* creado anteriormente. Tras esto tenemos los correspondientes *getters y setters*.
