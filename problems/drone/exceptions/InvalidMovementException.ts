export class InvalidMovementException extends Error {
  constructor() {
    super("The drone's movement must be one of these values: M, L or R");
  }
}
