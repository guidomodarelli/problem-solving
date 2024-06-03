import { Drone } from "./Drone";
import { PlateauCoordinatesFormatException } from "./exceptions";

export class Plateau {
  private width: number;
  private height: number;
  private squat: Drone[];

  /**
   * Obtains the top-right coordinates of the pot, and creates drones with their
   * respective positions and instructions.
   *
   * @param list The first position includes the top-right coordinates of the
   * pot, and the rest is information belonging to the drone that has been
   * deployed. Each drone has two nodes, the first indicating its position and
   * the second, the instructions.
   */
  constructor(list: string[]) {
    this.getPlateauCoordinates(list.splice(0)[0]);
    this.squat = [];

    for (let i = 0; i < list.length; i++) {
      const position = list[i];
      let instructions = "";
      if (i < list.length - 1) {
        instructions = list[++i];
      }
      this.squat.push(new Drone(instructions, position));
    }
  }

  /**
   * Obtains the top-right coordinates of the pot
   *
   * @param dimensionsPattern Top-right coordinates of the pot, which are two
   * natural numbers separated by a space
   */
  getPlateauCoordinates(dimensionsPattern: string) {
    const pattern = /^[0-9]+ [0-9]+$/;
    if (!pattern.test(dimensionsPattern)) {
      throw new PlateauCoordinatesFormatException();
    }
    const dimensions = dimensionsPattern.split(" ");
    this.width = parseInt(dimensions[0]);
    this.height = parseInt(dimensions[1]);
  }

  /**
   * For each drone, explores the pot in search of oil
   */
  resolve() {
    for (const drone of this.squat) {
      drone.explore(this.width, this.height);
      console.log(drone);
    }
    console.log();
  }
}
