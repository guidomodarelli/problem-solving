export class DroneOutOfBoundsException extends Error {
  constructor() {
    super("The drone is out of the pot's bounds!");
  }
}
