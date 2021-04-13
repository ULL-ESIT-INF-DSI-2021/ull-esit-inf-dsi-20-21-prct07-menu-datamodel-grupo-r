import 'mocha';
import {expect} from 'chai';
import {Ingredient, nutrientValues, macroNutrients} from '../src/Ingredient';

const values: nutrientValues[] = [[macroNutrients.carbohydrates, 70],
  [macroNutrients.lipids, 20], [macroNutrients.proteins, 10]];

const chicken = new Ingredient("Pollo", 3.86, "Carne", "El Sauzal", values);


describe('Se puede crear una clase ingrediente y sus valores.', () => {
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
});
