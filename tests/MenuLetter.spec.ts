import 'mocha';
import {expect} from 'chai';
import {Plate, plateTypes} from '../src/models/Plate';
import {Menu} from '../src/models/Menu';
import {MenuLetter} from '../src/models/MenuLetter';
import {groupTypes, Ingredient} from '../src/models/Ingredient'
import { MacroNutrients } from '../src/models/MacroNutrients';

const nutrients = new MacroNutrients(60, 40, 20);
const nutrients1 = new MacroNutrients(32, 45, 12);
const nutrients2 = new MacroNutrients(43, 56, 34);
const pollo = new Ingredient("Pollo", 2.35, 1.200, "La Orotava", groupTypes.Meat, nutrients);
const naranja = new Ingredient("Naranja", 0.32, 0.1, "La Orotava", groupTypes.Fruit, nutrients);
const tomate = new Ingredient("Tomate", 0.45, 0.2, "La Matanza", groupTypes.Vegetables, nutrients1);
const lechuga = new Ingredient("Lechuga", 0.32, 0.3, "Icod", groupTypes.Vegetables, nutrients1);
const bizcocho = new Ingredient("Bizcocho", 1.32, 0.1, "La Laguna", groupTypes.Dairy, nutrients2);
const manzana = new Ingredient("Manzana", 0.24, 2, "Icod", groupTypes.Fruit, nutrients);

const polloALaNaranja = new Plate("Pollo con naranja", plateTypes.firstPlate, [pollo, naranja]);
const ensalada = new Plate("Ensalada simple", plateTypes.firstPlate, [tomate, lechuga]);
const ensaladaLechuga = new Plate("Ensalada de lechuga", plateTypes.firstPlate, [lechuga]);
const tarta = new Plate("Tarta de manzana", plateTypes.secondPlate, [bizcocho, manzana]);

const menu = new Menu("Menú del día", [ensalada, polloALaNaranja, tarta]);
const menu2 = new Menu("Menú de cena", [ensaladaLechuga, polloALaNaranja, tarta]);

const listadoMenu = new MenuLetter([polloALaNaranja, ensalada, ensaladaLechuga], [menu]);


describe('Funcionamiento básico de la clase MenuLetter.',
    () => {
      it('Se puede acceder a los atributos de los menus.', () => {
        expect(menu.name).to.be.deep.equal("Menú del día");
        expect(menu.plates).to.be.deep.equal([ensalada, polloALaNaranja, tarta]);
      });

      it('Se pueden modificar los atributos de los menús.', () => {
        menu.name = "Menú 2";
        menu.plates = [ensaladaLechuga, ensalada, tarta];
        expect(menu.name).to.be.deep.equal("Menú 2");
        expect(menu.plates).to.be.deep.equal([ensaladaLechuga, ensalada, tarta]);

      });

      it('Se pueden añadir y eliminar platos y menus de un objeto MenuLetter', () => {
        listadoMenu.pushPlates(tarta);
        expect(listadoMenu.plates).to.be.deep.equal([polloALaNaranja, ensalada, ensaladaLechuga, tarta]);
        listadoMenu.popPlates();
        expect(listadoMenu.plates).to.be.deep.equal([polloALaNaranja, ensalada, ensaladaLechuga]);

        listadoMenu.pushMenu(menu2);
        expect(listadoMenu.menus).to.be.deep.equal([menu, menu2]);
        listadoMenu.popMenu();
        expect(listadoMenu.menus).to.be.deep.equal([menu]);
      });
    });
