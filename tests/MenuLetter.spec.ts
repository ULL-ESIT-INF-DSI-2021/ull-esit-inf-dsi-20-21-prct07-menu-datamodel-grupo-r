import 'mocha';
import {expect} from 'chai';
import {Plate} from '../src/Plate';
import {Menu} from '../src/Menu';
import {MenuLetter} from '../src/MenuLetter';


const pollo = new Plate("Pollo con naranja y manzana",
    plateTypes.firstPlate, [chicken, orange]);
const salad = new Plate("Ensalada simple",
    plateTypes.secondPlate, [tomato, lettuce]);
const dessert = new Plate("Tarta de manzana",
    plateTypes.secondPlate, [cake, apple]);
const dessert2 = new Plate("Tarta de manzana",
    plateTypes.secondPlate, [cake, tomato]);

const menu = new Menu("Menú del día", [pollo, salad, dessert]);
const menu2 = new Menu("Menú de cena", [sopa, ternera, postre]);


describe('Funcionamiento básico de la clase MenuLetter.',
    () => {
      it('Se puede acceder a los atributos de los menus.', () => {
        expect(menu.name).to.be.deep.equal("Menú del día");
        expect(menu.plates).to.be.deep.equal([pollo, salad, dessert]);
      });

      it('Se pueden modificar los atributos de los menús.', () => {
        menu.name = "Menú 2";
        menu.plates = [pollo, salad, dessert2];
        expect(menu.name).to.be.deep.equal("Menú 2");
        expect(menu.plates).to.be.deep.equal([pollo, salad, dessert2]);
    
      });

      
    });






