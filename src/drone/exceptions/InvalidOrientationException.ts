export class InvalidOrientationException extends Error {
  constructor() {
    super("The drone's orientation must be one of these values: N, W, E, or S");
  }
}
