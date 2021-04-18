import 'mocha';
import {expect} from 'chai';
import {Ingredient, nutrientValues} from '../src/Ingredient';
import {macroNutrients, groupTypes} from '../src/Ingredient';

const values: nutrientValues[] = [[macroNutrients.carbohydrates, 70],
  [macroNutrients.lipids, 20], [macroNutrients.proteins, 10]];
const values2: nutrientValues[] = [[macroNutrients.carbohydrates, 50],
  [macroNutrients.lipids, 35.6], [macroNutrients.proteins, 15]];

const chicken = new Ingredient("Pollo", 3.86, groupTypes.Meat, "El Sauzal",
    values);


describe('Funcionamiento básico de la clase Ingredients.',
    () => {
      it('Se puede acceder a su nombre.', () => {
        expect(chicken.name).to.be.deep.equal("Pollo");
      });

      it('Se puede acceder a su precio.', () => {
        expect(chicken.price).to.be.deep.equal(3.86);
      });

      it('Se puede acceder a su grupo.', () => {
        expect(chicken.group).to.be.deep.equal("Carne");
      });

      it('Se puede acceder a su origen.', () => {
        expect(chicken.origin).to.be.deep.equal("El Sauzal");
      });

      it('Se puede acceder a sus nutrientes.', () => {
        expect(chicken.nutrients).to.be.deep.equal(values);
      });

      it('Se puede modificar su nombre.', () => {
        chicken.name = "Gallina";
        expect(chicken.name).to.be.deep.equal("Gallina");
      });

      it('Se puede modificar su precio.', () => {
        chicken.price = 2;
        expect(chicken.price).to.be.deep.equal(2);
      });

      it('Se puede modificar su grupo.', () => {
        chicken.group = groupTypes.Fish;
        expect(chicken.group).to.be.deep.equal("Pescado");
      });

      it('Se puede modificar su origen.', () => {
        chicken.origin = "La Laguna";
        expect(chicken.origin).to.be.deep.equal("La Laguna");
      });

      it('Se puede modificar sus nutrientes.', () => {
        chicken.nutrients = values2;
        expect(chicken.nutrients).to.be.deep.equal(values2);
      });
    });
