import {groupTypes, Ingredient} from './models/Ingredient';
import {MacroNutrients} from './models/MacroNutrients';

// alimentos segundo plato
export const rice = new Ingredient("Arroz", 2, 300, "La Laguna",
    groupTypes.Cereal, new MacroNutrients(57, 9, 18.1));

export const chicken = new Ingredient("Pollo", 4, 300, "Tegueste
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const CowMeat = new Ingredient("Carne", 4, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const rabbit = new Ingredient("Conejo", 4, 300, "Tegueste",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const quinoa = new Ingredient("quinoa", 3, 300, "Perú",
    groupTypes.Cereals, new MacroNutrients(57, 9, 18.1));

export const tofu = new Ingredient("Tofu", 2, 300, "Sevilla",
    groupTypes.Cereals, new MacroNutrients(57, 9, 18.1));

export const pasta = new Ingredient("Pasta", 2, 300, "Italia",
    groupTypes.Cereals, new MacroNutrients(57, 9, 18.1));

export const albondigas = new Ingredient("Albondiga", 6, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const berenjenas = new Ingredient("Berenjena", 5, 300, "Almeria",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const calabacin = new Ingredient("Calabacin", 2, 300, "Almeria",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const pescado = new Ingredient("Pescado", 2, 300, "Candelaria",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));


