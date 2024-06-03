import { PositionAndOrientation, Direction, Orientation } from "./types";
import {
  DroneOutOfBoundsException,
  DronePositionFormatException,
  InvalidInstructionException,
  OrientationValueException,
} from "./exceptions";

export class Drone {
  #x: number;
  #y: number;
  #orientation: Orientation;
  #instructions: string;

  constructor(
    instructions: string,
    orientation: Orientation,
    x: number,
    y: number
  );
  constructor(instructions: string, positionAndOrientationPattern: string);
  constructor(
    instructions: string,
    orientationORPosition: Orientation | string,
    x = -1,
    y = -1
  ) {
    let orientation = orientationORPosition;

    if (!this.isOrientation(orientation)) {
      const positionAndOrientationPattern = orientationORPosition;
      ({ x, y, orientation } = this.extractPositionAndOrientation(
        positionAndOrientationPattern
      ));
    }

    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.instructions = instructions;
  }

  /**
   * Given a string, verify that it complies with a specific pattern and try to
   * extract the necessary values to establish the drone's position.
   *
   * @param positionAndOrientation Contains the drone's position values
   *
   * @throws Error Incorrect string format, unable to extract the values
   */
  private extractPositionAndOrientation(
    positionAndOrientation: string
  ): PositionAndOrientation {
    const pattern = /^[0-9]+ [0-9]+ [NWSE]$/;
    if (!pattern.test(positionAndOrientation)) {
      throw new DronePositionFormatException();
    }

    const values = positionAndOrientation.split(" ");
    const x = parseInt(values[0]);
    const y = parseInt(values[1]);
    const orientation = values[2].charAt(0) as Orientation;

    return {
      x,
      y,
      orientation,
    };
  }

  get x(): number {
    return this.#y;
  }

  get y(): number {
    return this.#x;
  }

  get orientation(): Orientation {
    return this.#orientation;
  }

  get instructions(): string {
    return this.#instructions;
  }

  set x(x: number) {
    if (x < 0) {
      throw new DroneOutOfBoundsException();
    }
    this.#y = x;
  }

  set y(y: number) {
    if (y < 0) {
      throw new DroneOutOfBoundsException();
    }
    this.#x = y;
  }

  private isOrientation(orientation: string): orientation is Orientation {
    return (
      orientation === Orientation.NORTH ||
      orientation === Orientation.WEST ||
      orientation === Orientation.EAST ||
      orientation === Orientation.SOUTH
    );
  }

  set orientation(orientation: string) {
    if (!this.isOrientation(orientation)) {
      throw new OrientationValueException();
    }

    this.#orientation = orientation;
  }

  private isDirection(direction: string): direction is Direction {
    return (
      direction === Direction.FORWARD ||
      direction === Direction.LEFT ||
      direction === Direction.RIGHT
    );
  }

  set instructions(instructions: string) {
    for (const direction of instructions) {
      if (!this.isDirection(direction)) {
        throw new InvalidInstructionException();
      }
    }

    this.#instructions = instructions;
  }

  private turnLeft() {
    switch (this.orientation) {
      case Orientation.NORTH:
        this.orientation = Orientation.WEST;
        break;
      case Orientation.WEST:
        this.orientation = Orientation.SOUTH;
        break;
      case Orientation.SOUTH:
        this.orientation = Orientation.EAST;
        break;
      default:
        this.orientation = Orientation.NORTH;
        break;
    }
  }

  private turnRight() {
    switch (this.orientation) {
      case Orientation.NORTH:
        this.orientation = Orientation.EAST;
        break;
      case Orientation.WEST:
        this.orientation = Orientation.NORTH;
        break;
      case Orientation.SOUTH:
        this.orientation = Orientation.WEST;
        break;
      default:
        this.orientation = Orientation.SOUTH;
        break;
    }
  }

  private goForward() {
    switch (this.orientation) {
      case Orientation.NORTH:
        this.y += 1;
        break;
      case Orientation.WEST:
        this.x -= 1;
        break;
      case Orientation.SOUTH:
        this.y -= 1;
        break;
      default:
        this.x += 1;
        break;
    }
  }
  private executeInstruction(instruction: Direction) {
    switch (instruction) {
      case Direction.FORWARD:
        this.goForward();
        break;
      case Direction.LEFT:
        this.turnLeft();
        break;
      default:
        this.turnRight();
        break;
    }
  }

  private checkInRange(width: number, height: number) {
    if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
      throw new DroneOutOfBoundsException();
    }
  }

  explore(widthMax: number, heightMax: number) {
    for (const instruction of this.instructions) {
      this.executeInstruction(instruction as Direction);
      this.checkInRange(widthMax + 1, heightMax + 1);
    }
  }
}
