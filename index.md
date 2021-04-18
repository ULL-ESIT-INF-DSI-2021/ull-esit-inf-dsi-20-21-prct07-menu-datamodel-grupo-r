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
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/Ingredient.ts)

[Pruebas Unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/tests/Ingredients.spec.ts)

```
import {MacroNutrients} from './MacroNutrients';

export enum groupTypes  {
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
  private amount_: number;
  private origin_: string;
  private group_: groupTypes;
  private nutrients_: MacroNutrients;

  constructor(name: string, price: number, amount: number, origin: string,
        group: groupTypes, nutrients: MacroNutrients) {
    this.name_ = name;
    this.price_ = price;
    this.amount_ = amount;
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

   public get amount(): number {
    return this.amount_;
  }

  public set amount(newAmount: number) {
    this.amount_ = newAmount;
  }

  public get origin(): string {
    return this.origin_;
  }

  public set origin(newOrigin: string) {
    this.origin_ = newOrigin;
  }

  public get group(): groupTypes {
    return this.group_;
  }

  public set group(newGroup: groupTypes) {
    this.group_ = newGroup;
  }
  
  public get nutrients(): MacroNutrients {
    return this.nutrients_;
  }

  public set nutrients(newNutrients: MacroNutrients) {
    this.nutrients_ = newNutrients;
  }
}

```
Durante esta práctica vamos a crear una clase que creará los objetos según el tipo de alimento que sea. Para empezar creamos un **enum** llamado *groupTypes*, dentro de este *enum* tenemos todos los tipos de alimentos. Una vez tenemos esto pasamos a la clase **Ingrediente**, en el constructor le pasamos como parámetros: el nombre del ingrediente, el precio del ingrediente, el monto, el origen del alimento, la variable *group* que tendrá un valor que está dentro del *enum groupTypes* y por último los nutrientes, que es un tipo de dato *macronutrients*, para esto usamos la clase **MacroNutrients** de la que se hablará posteriormente. Tras esto tenemos los correspondientes *getters y setters*.


## Clase MacroNutrients

[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/MacroNutrients.ts)

[Pruebas unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/tests/MacroNutrients.spec.ts)

```
export class MacroNutrients {
  private carbohydrates_: number;
  private proteins_: number;
  private lipids_: number;

  constructor(carbohydrates: number, proteins: number, lipids: number) {
    this.carbohydrates_ = carbohydrates;
    this.proteins_ = proteins;
    this.lipids_ = lipids;
  }

  public get carbohydrates(): number {
    return this.carbohydrates_;
  }

  public set carbohydrates(newCarbohydrates: number) {
    this.carbohydrates_ = newCarbohydrates;
  }

  public get proteins(): number {
    return this.proteins_;
  }

  public set proteins(newProteins: number) {
    this.proteins_ = newProteins;
  }

  public get lipids(): number {
    return this.lipids_;
  }

  public set lipids(newLipids: number) {
    this.lipids_ = newLipids;
  }
}
```

En esta clase se almacenan los macronutrientes de cada alimento en kilocalorias por cada 100 gramos. Los macronutientes son *carbohidratos, proteinas y lipidos*, que son métodos privados de la clase de tipo number. Luego, se crea el constructor, pasando los macronutrientes dicho anteriormente y se inicializan. Por último, se realizan los respectivos *getters y setters* de los métodos.


## Clase Menu

[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/Menu.ts)

[Pruebas unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/tests/Menu.spec.ts)


```
import {groupTypes, Ingredient} from "./Ingredient";
import {MacroNutrients} from "./MacroNutrients";
import {Plate, plateTypes} from "./Plate";

export class Menu {
  private name_: string;
  private plates_: Plate[];
  private price_: number;
  private nutrients_: MacroNutrients;
  private groups_: groupTypes[];

  constructor(name: string, plates: Plate[]) {
    this.name_ = name;
    this.plates_ = plates;
    this.price_ = this.calculatePrice();
    this.nutrients_ = this.calculateNutritionalValue();
    this.groups_ = this.calculateGroups();
  }

  public get name(): string {
    return this.name_;
  }

  public set name(newName: string) {
    this.name_ = newName;
  }

  public get plates(): Plate[] {
    return this.plates_;
  }

  public set plates(newPlates: Plate[]) {
    this.plates_ = newPlates;
    this.price_ = this.calculatePrice();
    this.nutrients_ = this.calculateNutritionalValue();
    this.groups_ = this.calculateGroups();
  }

  public get price(): number {
    return this.price_;
  }

  public get nutrients(): MacroNutrients {
    return this.nutrients_;
  }

  public get groups(): groupTypes[] {
    return this.groups_;
  }

  private calculateNutritionalValue(): MacroNutrients {
    const returnValue = new MacroNutrients(0, 0, 0);
    this.plates_.forEach((plate) => {
      returnValue.carbohydrates += plate.nutritionalComposition.carbohydrates;
      returnValue.proteins += plate.nutritionalComposition.proteins;
      returnValue.lipids += plate.nutritionalComposition.lipids;
    });
    return returnValue;
  }

  private calculateGroups(): groupTypes[] {
    const result: groupTypes[] = [];
    this.plates_.forEach((plate) => {
      plate.ingredients.forEach((ingredient) => {
        result.push(ingredient.group);
      });
    });
    return result;
  }

  private calculatePrice(): number {
    let price: number = 0;
    this.plates_.forEach((plate) => {
      price += plate.price;
    });
    return price;
  }
};

```

La clase Menu se encarga de  implementar un menú con sus respectivos platos, para ello, en principio se va a importar las clases *Ingredient, MacroNutrients y Plate*, además del *enum groupTypes*. Luego, se crean los siguientes métodos privados de la clase:

* name_: es un dato tipo *string* que almacena el nombre del menú.
* plates_: es un array de tipo *Plate* donde se almacenan los platos del menú.
* price_: es un dato de tipo *number* que tiene el precio total del menú.
* nutrients_: es un dato de tipo *MacroNutrients* donde se almacena el calor nutricional del menú.
* groups_: es un array de tipo *groupType* que almacena los grupos de alimentos del menú.

Al constructor se pasan los atributos *name* y *plates* para luego incializar todos los atributos de la clase, donde especialmente se recalca lo siguiente:

* price_ se iguala a la función *calculatePrice()*
* nutrients_ se iguala a la función *calculateNutritionalValue()*
* groups_ se iguala a la función *calculateGroups*

Después, se realizan los **setters y getters** de los atributos, donde especialmente destaca el *setPlates* debido a que para cambiar los platos del menú, se tiene que cambiar el precio, los valores nutricionales y el grupo de alimentos, ademas del propio plato en sí. 

Para ello, se han creado las siguientes funciones:

* calculateNutriotionalValue: Sirve para calcular el valor nutricional del menú que esta compuesto por los macronutrientes carbohidratos, proteinas y lipidos.
* CalculateGroup: Calcula el grupo al que pertenecen los alimentos que posee cada plato.
* calculatePrice: Calcula el precio en euros de cada plato.


## Clase MenuLetters

[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/MenuLetter.ts)

[Pruebas unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/tests/MenuLetter.spec.ts)

```
import {Menu} from './Menu';
import {Plate} from './Plate';

export class MenuLetter {
  plates_: Plate[];
  menus_: Menu[];

  constructor(plates: Plate[], menus: Menu[]) {
    this.plates_ = plates;
    this.menus_ = menus;
  }

  public get plates(): Plate[] {
    return this.plates_;
  }

  public set plates(newPlates: Plate[]) {
    this.plates_ = newPlates;
  }

  public get menus(): Menu[] {
    return this.menus_;
  }

  public set menus(newMenus: Menu[]) {
    this.menus_ = newMenus;
  }
}
```

El funcionamiento principal de esta clase es el de contener la carta de un restaurante. Primero, importamos las clases *Menu y Plate*. Luego inicializamos dos atributos de tipo array, uno de tipo *Plate[]*, que contiene los platos de la carta y otro de tipo *Menu[]*, que contiene los menús del restaurante. Por último, se realizan los *setters y getters* de los atributos.


## Clase Plate

[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/Plate.ts)

[Pruebas unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/tests/Plate.spec.ts)

```
import {Ingredient, groupTypes} from './Ingredient';
import {MacroNutrients} from './MacroNutrients';

export enum plateTypes {
  starter = 'Entrante',
  firstPlate = 'Primer plato',
  secondPlate = 'Segundo plato',
  dessert = 'Postre'
};

export class Plate {
  private name_: string;
  private type_: plateTypes;
  private ingredients_: Ingredient[];
  private nutritionalComposition_: MacroNutrients;
  private predominantGroup_: groupTypes;
  private price_: number;

  constructor(name: string, type: plateTypes, ingredients: Ingredient[]) {
    this.name_ = name;
    this.type_ = type;
    this.ingredients_ = ingredients;
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  public get name(): string {
    return this.name_;
  }

  public set name(newName: string) {
    this.name_ = newName;
  }

  public get type(): plateTypes {
    return this.type_;
  }

  public set type(newType: plateTypes) {
    this.type_ = newType;
  }

  public get ingredients(): Ingredient[] {
    return this.ingredients_;
  }

  public set ingredients(newIngredients: Ingredient[]) {
    this.ingredients_ = newIngredients;
    this.nutritionalComposition_ = this.calculateNutritionalValue();
    this.predominantGroup_ = this.calculatePredominantGroup();
    this.price_ = this.calculatePrice();
  }

  public get nutritionalComposition(): MacroNutrients {
    return this.nutritionalComposition_;
  }

  public get predominantGroup(): groupTypes {
    return this.predominantGroup_;
  }

  public get price(): number {
    return this.price_;
  }

  public set price(newPrice: number) {
    this.price_ = newPrice;
  }

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

  private calculatePrice(): number {
    let price: number = 0;
    this.ingredients.forEach((ingredient) => {
      price += (ingredient.price * ingredient.amount) / 100;
    });
    return price;
  }
};

```

La clase *Plate* implementa un plato con sus respectivos ingredientes, valores nutricionales, alimentos y precio. Primero, se importan la clase *Ingrediente y MacroNutrients* de sus respectivos archivos. Luego, se realiza un *enum* llamado **plateTypes** que contiene el entrante, el primer plato, el segundo plato y el postre.

Los atributos de la clase son:

* name_: de tipo *string*.
* type_: de tipo *plateTypes*.
* ingredients_: array de tipo *Ingredient*.
* nutririonalComposition_: de tipo *MacroNutrients*.
* predominantGroup_: de tipo *groupTypes*.
* price_: de tipo number.

El constructor tendrá los atributos name, type e ingredients y se inicializarán todos los atributos, especialmente se recalcarán las siguientes inicializaciones:

* nutritionalComposition se iguala a la función *calculateNutritionalValue()*.
* predominantGroup se iguala a la función *calculatePredominantGroup()*.
* price se iguala a *calculatePrice*.

Después se realizan los correspondientes *getters y setters* de los atributos de la clase. En cuanto a las funciones, se puede destacar las siguentes:

* pushIngredients: Funcion publica que añade un nuevo ingrediente al plato.
* calculateNutririonalValue: Funcion privada que calcula el valor nutricional (carbohidratos, proteínas y lípidos) de cada plato.
* calculatePredominantGroup: Funcion privada que calcula el grupo de alimentos que predomina en cada plato.
* calculatePrice: Funcion privada que calcula el precio en euros de cada plato.


## Clase CustomerFunctions

[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/CustomerFunctions.ts)

[Pruebas unitarias]()

```
import inquirer from 'inquirer';

enum CustomerCommands {
  showLetter = "Mostrar carta",
  addMenu = "Añadir menú",
  removeMenu = "Eliminar menú",
  addPlate = "Añadir plato",
  removePlate = "Eliminar plato",
  showCommand = "Mostrar pedido",
  exit = "Salir",
}


export class CustomerFunctions {
 
  public async promptCustomer() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Bienvenido a nuestro restaurante',
      choices: Object.values(CustomerCommands),
    });
  }

  public async customerShowLetter() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async customerAddMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async customerRemoveMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async customerAddPlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async customerRemovePlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async customerShowCommand() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async customerExit() {
    console.log(`Vuelva pronto`);
  }
}
```

La clase *CoustomerFunctions* muestra el menú a los clientes. En primer lugar, tenemos un *enum* llamdo *customerCommands*, donde tenemos todos los comandos del cliente ordenados. Dentro de la clase, se realizan las siguientes funciones:

* prompCustomer: Función publica asincrona que muestra el menú del cliente.
* customerShowLetter: función publica asincrona que muestra la carta al cliente.
* customerAddMenu: Función publica asincrona del cliente que añade un menú.
* customerRemoveMenu: Función publica asincrona del cliente para eliminar un menú.
* customerAddPlate: Función publica asincrona del cliente para añadir un plato.
* customerRemovePlate: Función publica asincrona del cliente para eliminar un plato.
* customerShowCommand: Función publica asincrona del cliente para mostrar el pedido.
* customerExit: Función publica asincrona del cliente para salir.


## Clase ChefFunctions

[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/blob/main/src/models/ChefFunctions.ts)

[Pruebas unitarias]()

```
import inquirer from 'inquirer';

 enum ChefCommands {
  addMenu = "Añadir menú",
  removeMenu = "Eliminar menú",
  addPlate = "Añadir plato",
  removePlate = "Eliminar plato",
  showLetter = "Mostrar la carta",
  exit = "Salir"
}


export class ChefFunctions {

  public async promptChef() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Bienvenido a nuestro restaurante',
      choices: Object.values(ChefCommands),
    });
  }

  public async chefShowLetter() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async chefAddMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async chefRemoveMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async chefAddPlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async chefRemovePlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  public async chefExit() {
    console.log(`Vuelva pronto`);
  }
}
```

La clase *ChefFunctions* realiza la función de mostrar el menú del chef. En primer lugar, tenemos un *enum* llamado *ChefCommands* donde tendremos lo siguiente:

* añadir menú.
* eliminar menú.
* añadir plato.
* eliminar plato.
* mostrar carta.
* salir.

En cuanto a las funciones, se han realizado las siguientes:

* promptChef: Función publica asincrona del chef que muestra el menu del chef.
* chefShowLetter: Función publica asincrona del chef que muestra la carta.
* chefAddMenu: Función publica asincrona del chef para añadir un menu.
* chefRemoveMenu: Función publica asincrona del chef para eliminar un menu.
* chefAddPlate: Función publica asincrona del chef para añadir un plato.
* chefRemovePlate: Función publica asincrona del chef para eliminar un plato.
* chefExit: Función publica asincrona del chef para salir.





































