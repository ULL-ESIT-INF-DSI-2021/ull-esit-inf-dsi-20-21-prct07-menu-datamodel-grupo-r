import {groupTypes, Ingredient, nutrientValues} from "./Ingredient";
import {Plate, PlateType } from "./Plate";

export class Menu {

    private our_plates: PlateType[] = [];
    
  
    constructor(...plates: Plate[]) {
      if (!this.plates_Valid(plates)) {
        throw new Error('Mala config del menu');
      }
  
      plates.forEach((plate) => {
        if (plate instanceof Plate) this.our_plates.push(plate);

      });
    }
  
    get_Plates(): Plate[] {
      return this.our_plates);
    }
  
    get_Price(): number {
      return this.get_Plates().reduce((total, plate) => total + plate.get_Price(), 0);
    }
  
    get_Nutritional_Composition(): nutrientValues {
      const nutritional_Composition = new nutrientValues();
      const plates_Compositions = this.get_Plates().map((plate) => plate.get_Nutritional_Composition());
  
      nutritional_Composition.lipids = plates_Compositions.reduce((lipids, composition) => lipids + composition.lipids, 0);
      nutritional_Composition.carbohydrates = plates_Compositions.reduce((carbohydrates, composition) => carbohydrates + composition.carbohydrates, 0);
      nutritional_Composition.proteins = plates_Compositions.reduce((proteins, composition) => proteins + composition.proteins, 0);
  
      return nutritional_Composition;
    }
  
    listgroupType(): groupTypes[] {
      if (this.get_Plates()) {
        return [...new Set<groupTypes>(this.get_Plates().map((plate) => plate.get_most_appears_()))];
      }
      return [];
    }
  
    plates_Valid(plates: Plate[]): boolean {
      if (plates.length > 4 || plates.length < 3) return false;
  
      const UnidTypes = [...new Set<PlateType>(plates.map((plate) => plate.getType()))];
  
      if (UnidTypes.length < 3) return false;
  
      return true;
    }
  };
