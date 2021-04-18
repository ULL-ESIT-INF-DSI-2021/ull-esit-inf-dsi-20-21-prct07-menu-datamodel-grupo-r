/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Ingredient, groupTypes} from '../src/Ingredient';
import {MacroNutrients} from '../src/MacroNutrients';
import {Plate, plateTypes} from '../src/Plate';

const chickenNutrients = new MacroNutrients(60, 40, 20);
const salmonNutrients = new MacroNutrients(21, 44, 22);
const orangeNutrients = new MacroNutrients(23, 53, 32);
const appleNutrients = new MacroNutrients(54, 17, 35);
const auxNutrient = new MacroNutrients(172, 119.25, 82.25);
const auxNutrient2 = new MacroNutrients(206.44, 191.41, 118.33);


const chicken = new Ingredient("Pollo", 3.86, 200, "El Sauzal", groupTypes.Meat,
    chickenNutrients);
const salmon = new Ingredient("Salmón", 7.5, 164, "La Laguna", groupTypes.Fish,
    salmonNutrients);
const orange = new Ingredient("Naranja", 1.25, 50, "Taco", groupTypes.Fruit,
    orangeNutrients);
const apple = new Ingredient("Manzana", 1.64, 75, "Taco", groupTypes.Fruit,
    appleNutrients);
const chickenIngredients: Ingredient[] = [chicken, orange, apple];
const chickenIngredients2: Ingredient[] = [chicken, orange, apple, salmon];

const firstPlate = new Plate("Pollo con naranja y manzana", plateTypes.firstPlate, chickenIngredients);


describe('Funcionamiento básico de la clase Plates.',
    () => {
      it('Se puede acceder a sus atributos.', () => {
        expect(firstPlate.name).to.be.deep.equal("Pollo con naranja y manzana");
        expect(firstPlate.type).to.be.deep.equal(plateTypes.firstPlate);
        expect(firstPlate.ingredients).to.be.deep.equal(chickenIngredients);
        expect(firstPlate.nutritionalComposition).to.be.deep.equal(auxNutrient);
        expect(firstPlate.predominantGroup).to.be.deep.equal(groupTypes.Fruit);
        expect(firstPlate.price).to.be.equal(9.575);
      });

      it('Se pueden modificar sus atributos.', () => {
        firstPlate.name = "Pollo con naranja, manzana y salmon";
        firstPlate.pushIngredients(salmon);
        firstPlate.type = plateTypes.secondPlate;
        expect(firstPlate.name).to.be.deep.equal("Pollo con naranja, manzana y salmon");
        expect(firstPlate.type).to.be.deep.equal(plateTypes.secondPlate);
        expect(firstPlate.ingredients).to.be.deep.equal(chickenIngredients2);
        expect(firstPlate.nutritionalComposition).to.be.deep.equal(auxNutrient2);
        expect(firstPlate.predominantGroup).to.be.deep.equal(groupTypes.Fruit);
        expect(firstPlate.price).to.be.equal(21.875);
        firstPlate.ingredients = chickenIngredients;
        expect(firstPlate.ingredients).to.be.deep.equal(chickenIngredients);
        expect(firstPlate.nutritionalComposition).to.be.deep.equal(auxNutrient2);
        expect(firstPlate.predominantGroup).to.be.deep.equal(groupTypes.Fruit);
        expect(firstPlate.price).to.be.equal(21.875);
        firstPlate.price = 32;
        expect(firstPlate.price).to.be.equal(32);
      });
    });
