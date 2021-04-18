# PRÁCTICA 7:  Modelo de datos de un sistema que permite el diseño de menús.


[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-r?branch=main)

## **OBJETIVO DE LA PRÁCTICA**
El objetivo de la práctica consiste en realizar una serie de problemas propuestos y resolverlos usando TypeScript para familiarizarnos con el lenguaje y su funcionamiento.

En esta práctica nos centraremos especialmente en las clases e interfaces genéricas. Así como en los principios de programación SOLID. Que serán necesarios para poder realizar cada uno de los ejercicios. 



## **EJERCICIOS**


### **Ejercicio 1 - El combate definitivo**

#### **Enunciado**:
Partiendo del desarrollo realizado para el Ejercicio 1 de la Práctica 5, supongamos que ahora queremos incluir distintos tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars o Dragon Ball entre otros. Puede incluir otros universos y/o personajes que desee. Para extender el desarrollo anterior se pide:

- Desarrolle una clase abstracta llamada Fighter que permita hacer que un contendiente pueda luchar. Esta clase se considerará la superclase del resto de clases a implementar. Para cada universo, desarrolle la clase que lo represente (Pokemon, Marvel, DC, Star Wars, Dragon Ball, etc).
- Cada contendiente debe ser descendiente de su clase universo. Además, para cada contendiente se debe poder acceder a la información requerida para la clase Pokemon de la práctica anterior (nombre, altura, peso, etc). Puede incluir información extra que considere oportuna según el universo.
- La clase Combat ahora permitará que los combates se disputen entre contendientes de distintos universos. Todas las combinaciones deben ser posibles, incluso contendientes del mismo universo. Asimismo, la simulación de los combates debe ser similar a la realizada en la práctica anterior. Sin embargo, ahora con cada ataque los contendientes deberán mostrar alguna catching phrase representativa de su personaje.
- Actualice los valores de efectividad de los movimientos de los nuevos contendientes de la forma que considere oportuna. Contendientes de un universo son más fuertes que los de otro, personajes concretos son más fuertes que otros sin importar el universo o una mezcla de ambas. Puede basarse en un criterio similar al empleado en las prácticas anteriores sobre los tipos de Pokemon.
- La clase Pokedex deberá actualizarse para incluir también el resto de contendientes. Esto es, deberá ser capaz de almacenar personajes de todos los universos considerados dentro de una misma estructura de datos. Además, deberá ofrecer todas las funcionalidades previamente requeridas para los nuevos contendientes.
- Por último, desarrolle este ejercicio empleando los principios SOLID Single Responsability y Open-Closed.


#### **Desarrollo**:
Para este ejercicio hemos desarrollado una interfaz llamada `FighterInterface` y una clase abstracta `Fighter` que nos serviran para representar a los luchadores.
Cada luchador es por tanto oblidado a tener los atributos: `nombre`, `velocidad`, `vida`, `ataque`, `defensa` y `frase`. 

Interfaz:
```typescript
export interface FighterInterface {
  name_: string;
  speed_: number;
  health_: number;
  attack_: number;
  defense_: number;
  sentence_: string;
}
```

Clase abstracta:
```typescript
export abstract class Fighter {
  private name_: string;
  private speed_: number;
  private health_: number;
  private attack_: number;
  private defense_: number;
  private sentence_: string;
  
  constructor(name: string, speed: number, health: number, attack: number,
      defense: number, sentence: string) {
    this.name_ = name;
    this.speed_ = speed;
    this.health_ = health;
    this.attack_ = attack;
    this.defense_ = defense;
    this.sentence_ = sentence;
  }

  public get name(): string {
    return this.name_;
  }

  public get speed(): number {
    return this.speed_;
  }

  public get health(): number {
    return this.health_;
  }
  
  public get attack(): number {
    return this.attack_;
  }
  
  public get defense(): number {
    return this.defense_;
  }

  public get sentence(): string {
    return this.sentence_;
  }

  public abstract get universe(): string;

  public abstract damageMultiplier(enemy: Fighter): number;
}
```

Lueago, para cada universo, hemos creado un luchador con distintos atributos. Por ejemplo los de dragon ball tienen razas, lde pokemon tienen tipos, los de marvel super poderes...

Por ejemplo la clase del universo marvel quedaría así:
```typescript
export class MarvelFighter extends Fighter {
  private readonly universe_: string = "Marvel";
  private readonly ability_: string ;

  constructor(name: string, speed: number, health: number, attack: number,
      defense: number, sentence: string, ability: string) {
    super(name, speed, health, attack, defense, sentence);
    this.ability_ = ability;
  }

  public get ability(): string {
    return this.ability_;
  }

  public get universe(): string {
    return this.universe_;
  }

  public damageMultiplier(enemy: Fighter): number {
    let effectiveness: number;

    switch (enemy.universe) {
      case 'Pokemon': {
        effectiveness = 2;
        break;
      }
      case 'Dragon Ball': {
        effectiveness = 0.5;
        break;
      }
      default: {
        effectiveness = 1;
        break;
      }
    }

    return effectiveness;
  }
}
```

Luego hemos creado la clase `FighterEncyclopedia`. Esta clase se encargará de almacenar luchadoresr aquellos que ya hayan sido almacenados. Dispone de un método store que almacena un objeto del tipo `Fighter`, un méodo `getByName` que recibe el nombre de un luchador y devuelve el Fighter y sus estadísticas si lo encuentra en la enciclopedia. Y un método `find` que busca un luchador completo.

```typescript
export class FighterEncyclopedia {
  private readonly encyclopedia: Fighter[];

  constructor(fighters: Fighter[]) {
    this.encyclopedia = fighters;
  }

  public get getEncyclopedia(): Fighter[] {
    return this.encyclopedia;
  }

  public store(fighter: Fighter) {
    this.encyclopedia.push(fighter);
  }

  public getByName(fighterName: string): Fighter | undefined {
    return this.encyclopedia.find((fighter) => fighter.name === fighterName);
  }
  
  public find(fighter2find: Fighter): boolean {
    let returnValue: boolean = false;
    this.encyclopedia.forEach((fighter) => {
      if (fighter === fighter2find) {
        returnValue = true;
      }
    });
    return returnValue;
  }
}
```

Por último hemos creado la clase combat que simula el combate entre dos luchadores. Esta clase recibe dos luchadores como argumento y simula el combate. Para ello dispone de dos funciones. La función `start`que inicia el combate y entra en un bucle hasta que alguno de los luchadores se quede sin vida y utiliza la función `attackDamage`  para calcular el daño que un luchador hace al atacar a otro utilizando el método damageMultiplier que tiene iimplementado cada luchador, lo que devuelve un multiplicador de daño que depende del universo de los luchadores.

```typescript
export class Combat {
  private readonly fighter1_: Fighter;
  private readonly fighter2_: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    this.fighter1_ = fighter1;
    this.fighter2_ = fighter2;
  }

  public get fighter1(): Fighter {
    return this.fighter1_;
  }

  public get fighter2(): Fighter {
    return this.fighter2_;
  }

  public start() {
    let fighter1Health: number = this.fighter1_.health;
    let fighter2Health: number = this.fighter2_.health;
    console.log(
        `Starting combat between ${this.fighter1.name} and `,
        `${this.fighter2.name}\n`,
        `${this.fighter1.name}: ${this.fighter1.sentence}\n`,
        `${this.fighter2.name}: ${this.fighter2.sentence}\n`,
    );
    while ((fighter1Health > 0) && (fighter2Health > 0)) {
      let attackResult: number = Math.floor(
          this.attackDamage(this.fighter1, this.fighter2));
      fighter2Health -= attackResult;
      console.log(
          `${this.fighter1.name} attacked ${this.fighter2.name} and dealt `,
          `${attackResult} of damage!\n${this.fighter2.name} hp reduced to `,
          `${fighter2Health}\n`,
      );
      if (fighter2Health <= 0) {
        break;
      }

      attackResult = Math.floor(
          this.attackDamage(this.fighter2, this.fighter1));
      fighter1Health -= attackResult;
      console.log(
          `${this.fighter2.name} attacked ${this.fighter1.name} and dealt `,
          `${attackResult} of damage!\n${this.fighter1.name} hp reduced to `,
          `${fighter1Health}\n`,
      );
    }
    console.log(
        `Combat ended!`,
    );
  }

  private attackDamage(fighter1: Fighter, fighter2: Fighter) {
    let effectiveness: number;

    if (fighter1.universe === fighter2. universe) {
      effectiveness = 1;
    } else {
      effectiveness = fighter1.damageMultiplier(fighter2);
    }

    return (50 * (fighter1.attack / fighter2.defense) * effectiveness);
  }
}
```



### **Ejercicio 2 - Conversor de unidades**

#### **Enunciado**:
Considere una herramienta que nos permita realizar las conversiones de unidades o sistemas de medición para distintas magnitudes físicas. Las más comunes pueden ser:

- Velocidad
- Masa
- Longitud
- Tiempo
- Temperatura
- Fuerza
- Volumen
Diseñe una interfaz genérica isConvertible que permita realizar conversiones entre sistemas para cada magnitud considerada. La interfaz debe definirse de modo que, aquellas clases que la implementen, ofrezcan la posibilidad de hacer cambios entre, al menos, dos sistemas o unidades diferentes como, por ejemplo, en el caso de la velocidad, de millas por horas a kilómetros por hora. A continuación, diseñe diferentes clases, una por magnitud física, que implementen dicha interfaz. El desarrollo propuesto deberá incluir las siguientes funcionalidades:

Una clase para cada magnitud considerada.
Se pide ser capaz de poder cambiar, al menos, entre dos unidades o sistemas de medición por cada magnitud.
El software deberá seguir los principios SOLID Single Responsability and Open-Closed.

#### **Desarrollo**:
Para este ejercicio hemos creado una interfaz `isConvertible`. Que se asegura de que todas las unidades sean convertibles y para ello deben dispoenr de un valor, una unidad de medida y una función que implemente esta conversión.

```typescript
export interface isConvertible<T> {
  value_: number;
  valueUnits_: T;
  convert(measure: T, oirginalMeasure: T,
    data: number): number;
}
```

Después hemos creado una clase para cad unidad de medida. En este caso hemos implementado longitud, tiempo y peso. cada clase posee un enum con todos los valores de conversión y su valor respecto a dicha medida en el SI. Es decir, si usamos la clase de longitud como ejemplo, el metro sería la unidad de referencia y valdría 1 y todos los demás valores serían respecto a este, es decir, el km valdría 100, el hm valdría 100, el cm valdría 0.01... y así con todas las unidades. Después en la función convert nos encargamos de pasar el valor actual al de referencia del enum dividiendo por el valor de la unidad actual. Depués lo muktiplicareos por el valor de la unidad a la que queremos convertir y ya tendríamos el resultado.

Medida de longitud:
```typescript
export enum LengthUnits {
  Ym = 1000000000000000000000000,
  Zm = 1000000000000000000000,
  Em = 1000000000000000000,
  Pm = 1000000000000000,
  Tm = 1000000000000,
  Gm = 1000000000,
  Mm = 1000000,
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
  µm = 0.000001,
  nm = 0.000000001,
  pm = 0.000000000001,
  fm = 0.000000000000001,
  am = 0.000000000000000001,
  zm = 0.000000000000000000001,
  ym = 0.000000000000000000000001,
  mile = 1609.34,
  inche = 0.0254
};

export class Length implements isConvertible<LengthUnits> {
  static readonly units = LengthUnits;
  value_: number;
  valueUnits_: LengthUnits;

  constructor(newValue: number, newUnit: LengthUnits) {
    this.value_ = newValue;
    this.valueUnits_ = newUnit;
  }

  public convert(units: LengthUnits): number {
    const meters: number = this.value_ / this.valueUnits_;
    return meters * units;
  }
}
```

Medida de tiempo:
```typescript
export enum TimeUnits {
  year = 6622560000,
  month = 18144000,
  week = 604800,
  day = 86400,
  hour = 3600,
  min = 60,
  sec = 1,
};

export class Time implements isConvertible<TimeUnits> {
  static readonly units = TimeUnits;
  value_: number;
  valueUnits_: TimeUnits;

  constructor(newValue: number, newUnit: TimeUnits) {
    this.value_ = newValue;
    this.valueUnits_ = newUnit;
  }

  public convert(units: TimeUnits): number {
    const seconds: number = this.value_ * this.valueUnits_;
    return seconds / units;
  }
}
```

Medida de peso:
```typescript
export enum WeightUnits {
  Gt = 1000000000000000,
  Mt = 1000000000000,
  T = 1000000,
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
  µg = 0.000001,
  ng = 0.000000001,
  pg = 0.000000000001,
  pound = 0.00220462,
  ounce = 0.035274
};

export class Weight implements isConvertible<WeightUnits> {
  static readonly units = WeightUnits;
  value_: number;
  valueUnits_: WeightUnits;

  constructor(newValue: number, newUnit: WeightUnits) {
    this.value_ = newValue;
    this.valueUnits_ = newUnit;
  }

  public convert(units: WeightUnits): number {
    const grams: number = this.value_ / this.valueUnits_;
    return grams * units;
  }
}
```



### **Ejercicio 3 - DSIflix**

#### **Enunciado**:
Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

- Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
- Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
- Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
- Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.


#### **Desarrollo**:
Para este ejercicio hemos desarrollado una interfaz `Streamable` que defina todos los objetos que son stremeables. Después hemos creado una clase abstracta `StreamableObject` que implemente esta interfaz. Esta interfaz requiere un nombre, un director y una fecha. Al igual que atributos para acceder a todos estos métodos.

Interfaz Streamable:
```typescript
interface Streamable {
  name_: string;
  date_: string;
  director_: string;

  getName(): string;
  getDate(): string;
  getDirector(): string;
}
```

ClaseStreamableObject:
```typescript
export abstract class StreamableObject implements Streamable {
  name_: string;
  date_: string;
  director_: string;

  constructor(name: string, date: string, director: string) {
    this.name_ = name;
    this.date_ = date;
    this.director_ = director;
  }

  public getName(): string {
    return this.name_;
  }

  public getDate(): string {
    return this.date_;
  }

  public getDirector(): string {
    return this.director_;
  }
}
```

Luego hamos creado 2 tipos de objetos distinto: película, serie y documental. Los tres implementan la clase abstarcta `StreamableObject` definida anteriormente por lo que automaticamente se converten en objetos stremeables. Además cada uno tiene un atributo extra. Los documentales el animal del mismo, las series el número de temporadas y la película su género.

Por ejemplo, la película quedaría así:
```typescript
export class Film extends StreamableObject {
  genre_: string;

  constructor(name: string, date: string, director: string, genre: string) {
    super(name, date, director);
    this.genre_ = genre;
  }

  public getName(): string {
    return this.name_;
  }

  public getDate(): string {
    return this.date_;
  }

  public getDirector(): string {
    return this.director_;
  }
c getGenre(): string {
    return this.genre_;
  }
}
```

El resto de objetos quedarían de la misma forma pero cambiando el género por los atributos motrados anteriormente.

Además hemos creado una interfaz `IsStreamableCollection` que define una colección de objetos stremeables. Es decir, un vector de estos objetos y métodos para encontrarlos por nombre, director o fecha. Luego hemos creado una clase `StreamableCollection` que implemente esta interfaz y almacene objetos `Stremeables`
```typescript
export class StreamableCollection implements IsStreamableCollection {
  collection_: StreamableObject[];

  constructor(collection: StreamableObject[]) {
    this.collection_ = collection;
  }

  public findByName(name: string): StreamableObject | undefined {
    return this.collection_.find((aux) => aux.getName() === name);
  }

  public findByDate(date: string): StreamableObject | undefined {
    return this.collection_.find((aux) => aux.getDate() === date);
  }

  public findByDirector(director: string): StreamableObject | undefined {
    return this.collection_.find((aux) => aux.getDirector() === director);
  }
}
```

## **CONCLUSIÓN**
Las clases e interfaces genéricas en typescript son una herramienta muy potente pues nos ayudan a definir e implementar multitud de objetos qu ecompartan muchos atributos entre si. Las interfaces nos ayudan a asegurarnos de que un objeto cumple una serie de características predefinidas. Muientras que las clases genéricas nos ayudan a definir varios tipos de objetos de distinto tipo pero que se manejan del mismo mod. Así nos podemos olvidar del tipo y centrarnos en los métodos.

