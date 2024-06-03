export class PlateauCoordinatesFormatException extends Error {
  constructor() {
    super(
      "The plateau's coordinates must be two natural numbers separated by spaces",
    );
  }
}
