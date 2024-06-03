export class DronePositionFormatException extends Error {
  constructor() {
    super(
      "The drone's position is defined by two natural numbers followed by one of the following letters: N, W, S, or E, separated by spaces",
    );
  }
}
