import 'mocha';
import {expect} from 'chai';
import {MacroNutrients} from '../src/models/MacroNutrients';

const nutrients = new MacroNutrients(60, 20, 13);

describe('Funcionamiento básico de la clase MacroNutrients.',
    () => {
      it('Se puede acceder a sus atributos.', () => {
        expect(nutrients.carbohydrates).to.be.deep.equal(60);
        expect(nutrients.proteins).to.be.deep.equal(20);
        expect(nutrients.lipids).to.be.deep.equal(13);
      });

      it('Se pueden modificar sus atributos.', () => {
        nutrients.carbohydrates = 50;
        nutrients.proteins = 40;
        nutrients.lipids = 30;
        expect(nutrients.carbohydrates).to.be.deep.equal(50);
        expect(nutrients.proteins).to.be.deep.equal(40);
        expect(nutrients.lipids).to.be.deep.equal(30);
      });
    });
