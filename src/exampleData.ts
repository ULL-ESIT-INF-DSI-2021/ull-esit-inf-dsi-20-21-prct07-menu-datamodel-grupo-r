import {groupTypes, Ingredient} from './models/Ingredient';
import {MacroNutrients} from './models/MacroNutrients';
import {Menu} from './models/Menu';

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

export const jamon = new Ingredient("Jamon Serrano", 2, 300, "Extremadura",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const tomate = new Ingredient("Tomates aliñados", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(10, 48, 7));

// alimentos primer plato
export const garbanzos = new Ingredient("Garbanzos", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(18, 60, 10));

export const sopa1 = new Ingredient("Sopa de verduras", 4, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(12, 49, 15));

export const sopa2 = new Ingredient("Sopa de pescado", 6, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(1, 16, 2.5));

export const sopa3 = new Ingredient("Sopa de pollo", 5, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(15, 30, 60));

export const gazpacho = new Ingredient("gazpacho", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(10, 9, 7));

export const ensalada = new Ingredient("Ensalada", 5, 300, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(0.9, 2, 0.9));

export const potaje = new Ingredient("Potaje", 5, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(30, 53, 40));

export const salmorejo = new Ingredient("Salmorejo", 4, 260, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(12, 13, 9));

export const ensalada2 = new Ingredient("Ensalada pasta", 6, 310, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(27, 26, 16));

export const ensalada3 = new Ingredient("Ensalada aguacate", 6, 310, "Laguna",
    groupTypes.Vegetables, new MacroNutrients(27, 26, 16));

// alimentos segundo plato
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

// menus

export const menu1 = new Menu("Menu1", [boqueron, sopa1, albondigas, tiramisu]);
export const menu2 = new Menu("Menu2", [queso, sopa2, chicken, sorbete]);
export const menu3 = new Menu("Menu3", [almogrote, sopa3, CowMeat, gelatina]);
export const menu4 = new Menu("Menu4", [fuet, potaje, rabbit, quesillo]);
export const menu5 = new Menu("Menu5", [alioli, ensalada, pasta, flan]);
export const menu6 = new Menu("Menu6", [jamonserrano, salmorejo, pescado, helado]);
export const menu7 = new Menu("Menu7", [tomate, garbanzos, calabacin, tarta]);
export const menu8 = new Menu("Menu8", [papaslocas, ensalada2, berenjenas, macedonia]);
export const menu9 = new Menu("Menu9", [mantequilla, ensalada3, tofu, principeAlberto]);
export const menu10 = new Menu("Menu10", [pan, gazpacho, pasta, gelatina]);
