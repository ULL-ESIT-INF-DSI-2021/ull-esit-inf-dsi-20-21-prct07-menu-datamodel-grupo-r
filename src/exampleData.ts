/* eslint-disable max-len */
import {groupTypes, Ingredient} from './models/Ingredient';
import {MacroNutrients} from './models/MacroNutrients';
import {Menu} from './models/Menu';
import {Plate, plateTypes} from './models/Plate';

// Entrantes


export const pan = new Ingredient("Pan", 2, 260, "La Esperanza",
    groupTypes.Cereal, new MacroNutrients(2.5, 59.2, 12.6));

export const queso = new Ingredient("Queso", 10, 335, "Fuerteventura",
    groupTypes.Dairy, new MacroNutrients(20, 45, 9));

export const almogrote = new Ingredient("Almogrote", 8, 50, "La Gomera",
    groupTypes.Dairy, new MacroNutrients(24, 60, 11.5));

export const fuet = new Ingredient("Fuet", 5, 160, "Extremadura",
    groupTypes.Meat, new MacroNutrients(30, 70, 18.1));

export const boqueron = new Ingredient("Boquerones", 7, 150, "Las Galletas",
    groupTypes.Vegetables, new MacroNutrients(24, 35, 7));

export const papaslocas = new Ingredient("Papas locas", 5, 500, "La Guancha",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const mantequilla = new Ingredient("Mantequilla", 2, 39, "Asturias",
    groupTypes.Dairy, new MacroNutrients(57, 120, 26));

export const alioli = new Ingredient("alioli", 2.6, 120, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(28, 87, 24));

export const jamonSerrano = new Ingredient("Jamon Serrano", 2, 300, "Extremadura",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const tomate = new Ingredient("Tomates aliñados", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(10, 48, 7));

// alimentos primer plato
export const agua = new Ingredient("Agua", 0.64, 1, "La Orotava",
    groupTypes.Dairy, new MacroNutrients(1, 1, 1));

export const garbanzos = new Ingredient("Garbanzos", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(18, 60, 10));

export const verduras = new Ingredient("Sopa de verduras", 4, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(12, 49, 15));

export const pescados = new Ingredient("Sopa de pescado", 6, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(1, 16, 2.5));

export const pollo = new Ingredient("Sopa de pollo", 5, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(15, 30, 60));

export const gazpacho = new Ingredient("gazpacho", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(10, 9, 7));

export const ensalada = new Ingredient("Ensalada", 5, 300, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(0.9, 2, 0.9));

export const potaje = new Ingredient("Potaje", 5, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(30, 53, 40));

export const salmorejo = new Ingredient("Salmorejo", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(12, 13, 9));

export const ensaladaPasta = new Ingredient("Ensalada pasta", 6, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(27, 26, 16));

export const ensaladaAguacate = new Ingredient("Ensalada aguacate", 6, 310, "Laguna",
    groupTypes.Vegetables, new MacroNutrients(27, 26, 16));

// alimentos segundo plato
export const papas = new Ingredient("Papas", 1.35, 200, "Los Realejos",
    groupTypes.Vegetables, new MacroNutrients(45, 9, 21.8));

export const rice = new Ingredient("Arroz", 2, 300, "La Laguna",
    groupTypes.Cereal, new MacroNutrients(57, 9, 18.1));

export const chicken = new Ingredient("Pollo", 4, 300, "Tegueste",
    groupTypes.Meat, new MacroNutrients(11, 18, 7.3));

export const CowMeat = new Ingredient("Carne", 4, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(14, 17, 10));

export const rabbit = new Ingredient("Conejo", 4, 300, "Tegueste",
    groupTypes.Meat, new MacroNutrients(10, 16, 9));

export const quinoa = new Ingredient("quinoa", 3, 300, "Perú",
    groupTypes.Cereal, new MacroNutrients(50, 10, 20));

export const tofu = new Ingredient("Tofu", 2, 300, "Sevilla",
    groupTypes.Cereal, new MacroNutrients(10, 20, 11));

export const pasta = new Ingredient("Pasta", 2, 300, "Italia",
    groupTypes.Cereal, new MacroNutrients(60, 10, 15.5));

export const albondigas = new Ingredient("Albondiga", 6, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(18, 16, 17));

export const berenjenas = new Ingredient("Berenjena", 5, 300, "Almeria",
    groupTypes.Vegetables, new MacroNutrients(4, 10, 3));

export const calabacin = new Ingredient("Calabacin", 2, 300, "Almeria",
    groupTypes.Vegetables, new MacroNutrients(4, 9, 5));

export const pescado = new Ingredient("Pescado", 2, 300, "Candelaria",
    groupTypes.Meat, new MacroNutrients(14, 19, 6.4));

// postres
export const mouseChocolate = new Ingredient("Mouse", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(200, 5, 60.3));

export const principe = new Ingredient("principe", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(210, 4, 55.4));

export const tiramisu = new Ingredient("Tiramisu", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(190, 6, 54.6));

export const sorbete = new Ingredient("SorbeteLimon", 2, 300, "La Laguna",
    groupTypes.Fruit, new MacroNutrients(77, 5, 55));

export const macedonia = new Ingredient("Macedonia", 2, 300, "La Laguna",
    groupTypes.Fruit, new MacroNutrients(45, 5, 20.4));

export const tarta = new Ingredient("Tarta", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(200, 4, 60.5));

export const helado = new Ingredient("Helado", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(150, 9, 25.5));

export const flan = new Ingredient("Flan", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(165, 7, 45.4));

export const gelatina = new Ingredient("Gelatina", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(12, 8, 26));

export const quesillo = new Ingredient("Quesillo", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(195, 8, 55.8));

// platos
export const tapaBoquerones = new Plate("Tapa de boquerones", plateTypes.starter, [boqueron, pan]);
export const sopaVerduras = new Plate("Sopa de Verduras", plateTypes.firstPlate, [agua, verduras]);
export const racionAlbondigas = new Plate("Albondigas", plateTypes.secondPlate, [albondigas]);
export const porcionTiramisu = new Plate("Tiramisu", plateTypes.dessert, [tiramisu]);
export const tapaQuesos = new Plate("Tapa de Quesos", plateTypes.starter, [queso, pan]);
export const sopaPescado = new Plate("Sopa de Pescado", plateTypes.firstPlate, [agua, pescados]);
export const racionPollo = new Plate("Pollo", plateTypes.secondPlate, [pollo, papas]);
export const porcionSorbete = new Plate("Sorbete", plateTypes.dessert, [sorbete]);
export const tapaAlmogrote = new Plate("Tapa de Almogrote", plateTypes.starter, [almogrote, pan]);
export const sopaPollo = new Plate("Sopa de Pollo", plateTypes.firstPlate, [agua, pollo]);
export const racionTernera = new Plate("Ternera", plateTypes.secondPlate, [CowMeat, papas]);
export const porcionGelatina = new Plate("Gelatina", plateTypes.dessert, [gelatina]);
export const tapaFuet = new Plate("Tapa de Fuet", plateTypes.starter, [fuet, pan]);
export const Potaje = new Plate("Potaje", plateTypes.firstPlate, [agua, verduras, papas]);
export const racionConejo = new Plate("Conejo", plateTypes.secondPlate, [rabbit, papas]);
export const porcionQuesillo = new Plate("Quesillo", plateTypes.dessert, [quesillo]);
export const tapaAlioli = new Plate("Tapa de Alioli", plateTypes.starter, [alioli, pan]);
export const racionEnsalada = new Plate("Ensalada", plateTypes.firstPlate, [ensalada]);
export const racionPasta = new Plate("Pasta", plateTypes.secondPlate, [pasta]);
export const porcionFlan = new Plate("Flan", plateTypes.dessert, [flan]);
export const tapaSerrano = new Plate("Tapa de Serrano", plateTypes.starter, [jamonSerrano, pan]);
export const racionSalmorejo = new Plate("Salmorejo", plateTypes.firstPlate, [salmorejo]);
export const racionPescado = new Plate("Pescado", plateTypes.secondPlate, [pescado]);
export const porcionHelado = new Plate("Helado", plateTypes.dessert, [helado]);
export const panTumaca = new Plate("Tapa de Pan Tumaca", plateTypes.starter, [tomate, pan]);
export const racionGarbanzos = new Plate("Garbanzos", plateTypes.firstPlate, [garbanzos]);
export const calabacinRelleno = new Plate("Calabacin Relleno", plateTypes.secondPlate, [calabacin]);
export const porcionTarta = new Plate("Tarta", plateTypes.dessert, [tarta]);
export const racionPapasLocas = new Plate("Papas Locas", plateTypes.starter, [papaslocas]);
export const racionEnsaladaPasta = new Plate("Ensalada de Pasta", plateTypes.firstPlate, [ensaladaPasta]);
export const berenjenaRellena = new Plate("Berenjena Rellena", plateTypes.secondPlate, [berenjenas]);
export const porcionMacedonia = new Plate("Macedonia", plateTypes.dessert, [macedonia]);
export const racionMantequilla = new Plate("Mantequilla", plateTypes.starter, [mantequilla, pan]);
export const racionEnsaladaAguacate = new Plate("Ensalada de Aguacate", plateTypes.firstPlate, [ensaladaAguacate]);
export const racionTofu = new Plate("Tofu", plateTypes.secondPlate, [tofu]);
export const porcionPrincipeAlberto = new Plate("Principe Alberto", plateTypes.dessert, [principe]);
export const tapaPan = new Plate("Pan", plateTypes.starter, [pan]);
export const racionGazpacho = new Plate("Gazpacho", plateTypes.firstPlate, [gazpacho]);
export const racionQuinoa = new Plate("Quinoa", plateTypes.secondPlate, [quinoa]);
export const porcionMouse = new Plate("Mouse Chocolate", plateTypes.dessert, [mouseChocolate]);

// menus
export const menu1 = new Menu("Menu 1", [tapaBoquerones, sopaVerduras, racionAlbondigas, porcionTiramisu]);
export const menu2 = new Menu("Menu2", [tapaQuesos, sopaPescado, racionPollo, porcionSorbete]);
export const menu3 = new Menu("Menu3", [tapaAlmogrote, sopaPollo, racionTernera, porcionGelatina]);
export const menu4 = new Menu("Menu4", [tapaFuet, Potaje, racionConejo, porcionQuesillo]);
export const menu5 = new Menu("Menu5", [tapaAlioli, racionEnsalada, racionPasta, porcionFlan]);
export const menu6 = new Menu("Menu6", [tapaSerrano, racionSalmorejo, racionPescado, porcionHelado]);
export const menu7 = new Menu("Menu7", [panTumaca, racionGarbanzos, calabacinRelleno, porcionTarta]);
export const menu8 = new Menu("Menu8", [racionPapasLocas, racionEnsaladaPasta, berenjenaRellena, porcionMacedonia]);
export const menu9 = new Menu("Menu9", [racionMantequilla, racionEnsaladaAguacate, racionTofu, porcionPrincipeAlberto]);
export const menu10 = new Menu("Menu10", [tapaPan, racionGazpacho, racionQuinoa, porcionMouse]);
