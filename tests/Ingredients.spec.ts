import 'mocha';
import {expect} from 'chai';
import {Ingredient, groupTypes} from '../src/Ingredient';
import {MacroNutrients} from '../src/MacroNutrients';

const nutrients = new MacroNutrients(60, 40, 20);
const nutrients2 = new MacroNutrients(61, 41, 21);
const chicken = new Ingredient("Pollo", 3.86, 200, "El Sauzal", groupTypes.Meat,
    nutrients);


describe('Funcionamiento básico de la clase Ingredients.',
    () => {
      it('Se puede acceder a sus atributos.', () => {
        expect(chicken.name).to.be.deep.equal("Pollo");
        expect(chicken.price).to.be.deep.equal(3.86);
        expect(chicken.amount).to.be.deep.equal(200);
        expect(chicken.origin).to.be.deep.equal("El Sauzal");
        expect(chicken.group).to.be.deep.equal(groupTypes.Meat);
        expect(chicken.nutrients).to.be.deep.equal(nutrients);
      });

      it('Se pueden modificar sus atributos.', () => {
        chicken.name = "Gallina";
        chicken.price = 4.70;
        chicken.amount = 30;
        chicken.origin = "La Laguna";
        chicken.group = groupTypes.Eggs;
        chicken.nutrients = nutrients2;
        expect(chicken.name).to.be.deep.equal("Gallina");
        expect(chicken.price).to.be.deep.equal(4.70);
        expect(chicken.amount).to.be.deep.equal(30);
        expect(chicken.origin).to.be.deep.equal("La Laguna");
        expect(chicken.group).to.be.deep.equal(groupTypes.Eggs);
        expect(chicken.nutrients).to.be.deep.equal(nutrients2);
      });
    });
