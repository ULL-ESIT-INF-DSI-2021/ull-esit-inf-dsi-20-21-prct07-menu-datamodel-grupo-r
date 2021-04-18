import 'mocha';
import {expect} from 'chai';
import {Ingredient, groupTypes} from '../src/Ingredient';
import {MacroNutrients} from '../src/MacroNutrients';
import {Plate, plateTypes} from '../src/Plate';
import {Menu} from '../src/Menu';


const auxNutrient = new MacroNutrients(205.8, 188, 172);
const auxNutrient2 = new MacroNutrients(184, 210.1, 195);


const chicken = new Ingredient("Pollo", 3.86, 200, "Sauzal", groupTypes.Meat,
    new MacroNutrients(60, 40, 20));

const orange = new Ingredient("Naranja", 1.24, 50, "Taco", groupTypes.Fruit,
    new MacroNutrients(20, 53, 32));

const apple = new Ingredient("Manzana", 1.64, 70, "Taco", groupTypes.Fruit,
    new MacroNutrients(54, 17, 35));

const tomato = new Ingredient("Tomate", 0.42, 50, "Radazul", groupTypes.Legumes,
    new MacroNutrients(32, 68, 95));

const lettuce = new Ingredient("Lechuga", 2, 40, "Radazul", groupTypes.Legumes,
    new MacroNutrients(30, 64, 55));

const cake = new Ingredient("Tarta", 15.70, 100, "La Laguna", groupTypes.Eggs,
    new MacroNutrients(10, 10, 22));


const pollo = new Plate("Pollo con naranja y manzana",
    plateTypes.firstPlate, [chicken, orange]);
const salad = new Plate("Ensalada simple",
    plateTypes.secondPlate, [tomato, lettuce]);
const dessert = new Plate("Tarta de manzana",
    plateTypes.secondPlate, [cake, apple]);
const dessert2 = new Plate("Tarta de manzana",
    plateTypes.secondPlate, [cake, tomato]);

const menu = new Menu("Menú del día", [pollo, salad, dessert]);

describe('Funcionamiento básico de la clase Menu.',
    () => {
      it('Se puede acceder a sus atributos.', () => {
        expect(menu.name).to.be.deep.equal("Menú del día");
        expect(menu.plates).to.be.deep.equal([pollo, salad, dessert]);
        expect(menu.price).to.be.deep.equal(26.198);
        expect(menu.nutrients).to.be.deep.equal(auxNutrient);
        expect(menu.groups).to.be.deep.equal(["Carne", "Frutas", "Legumbres",
          "Legumbres", "Huevos", "Frutas"]);
      });


      it('Se pueden modificar sus atributos.', () => {
        menu.name = "Menú 2";
        menu.plates = [pollo, salad, dessert2];
        expect(menu.name).to.be.deep.equal("Menú 2");
        expect(menu.plates).to.be.deep.equal([pollo, salad, dessert2]);
        expect(menu.price).to.be.deep.equal(25.259999999999998);
        expect(menu.nutrients).to.be.deep.equal(auxNutrient2);
        expect(menu.groups).to.be.deep.equal(["Carne", "Frutas", "Legumbres",
          "Legumbres", "Huevos", "Legumbres"]);
      });
    });

