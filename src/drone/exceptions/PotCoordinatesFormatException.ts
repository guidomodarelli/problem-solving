export class PotCoordinatesFormatException extends Error {
  constructor() {
    super(
      "The pot's coordinates must be two natural numbers separated by spaces",
    );
  }
}
