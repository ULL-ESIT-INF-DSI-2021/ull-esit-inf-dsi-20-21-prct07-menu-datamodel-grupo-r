import {groupTypes, Ingredient} from './models/Ingredient';
import {MacroNutrients} from './models/MacroNutrients';
import {Menu} from './models/Menu';

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

export const albondigas = new Ingredient("Albóndiga", 6, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(18, 16, 17));

export const berenjenas = new Ingredient("Berenjena", 5, 300, "Almería",
    groupTypes.Vegetables, new MacroNutrients(4, 10, 3));

export const calabacin = new Ingredient("Calabacín", 2, 300, "Almería",
    groupTypes.Vegetables, new MacroNutrients(4, 9, 5));

export const pescado = new Ingredient("Pescado", 2, 300, "Candelaria",
    groupTypes.Meat, new MacroNutrients(14, 19, 6.4));

// postres
export const mouseChocolate = new Ingredient("Mouse", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(200, 5, 60.3));

export const principe = new Ingredient("PríncipeAlberto", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(210, 4, 55.4));

export const tiramisú = new Ingredient("Tiramisu", 2, 300, "La Laguna",
    groupTypes.Dairy, new MacroNutrients(190, 6, 54.6));

export const sorbete = new Ingredient("SorbeteLimón", 2, 300, "La Laguna",
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
export const menu1 = new Menu("Menu1", entrante, primerplato, "Albondiga", "Tiramisu");
export const menu2 = new Menu("Menu2", entrante, primerplato, "Carne", "sorbeteLimon");
export const menu3 = new Menu("Menu3", entrante, primerplato, "Pollo", "Gelatina");
export const menu4 = new Menu("Menu4", entrante, primerplato, "Conejo", "Quesillo");
export const menu5 = new Menu("Menu5", entrante, primerplato, "Pasta", "Flan");
export const menu6 = new Menu("Menu6", entrante, primerplato, "Pescado", "Helado");
export const menu7 = new Menu("Menu7", entrante, primerplato, "Calabacin", "Tarta");
export const menu8 = new Menu("Menu8", entrante, primerplato, "Berenjena", "Macedonia");
export const menu9 = new Menu("Menu9", entrante, primerplato, "Tofu", "PrincipeAlberto");
export const menu10 = new Menu("Menu10", entrante, primerplato, "Quinoa", "Mouse");
