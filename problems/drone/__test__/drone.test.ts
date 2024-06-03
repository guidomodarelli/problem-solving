import { expect, it, test } from "vitest";
import { Drone } from "../src/Drone";
import { Orientation } from "../src/types";
import { DroneOutOfBoundsException, InvalidMovementException } from "../src/exceptions";

test("1", () => {
  const drone = new Drone("LMLMLMLMM", Orientation.NORTH, 1, 2);

  drone.explore(5, 5);

  expect(drone.x).toBe(1);
  expect(drone.y).toBe(3);
  expect(drone.orientation).toBe(Orientation.NORTH);
});

test("2", () => {
  const drone = new Drone("MMRMMRMRRM", Orientation.EAST, 3, 3);

  drone.explore(5, 5);

  expect(drone.x).toBe(5);
  expect(drone.y).toBe(1);
  expect(drone.orientation).toBe(Orientation.EAST);
});

test("3", () => {
  const drone = new Drone("MMMRM", Orientation.NORTH, 0, 0);

  drone.explore(5, 5);

  expect(drone.x).toBe(1);
  expect(drone.y).toBe(3);
  expect(drone.orientation).toBe(Orientation.EAST);
});

test("4", () => {
  const drone = new Drone("MMR", Orientation.NORTH, 0, 0);

  drone.explore(5, 5);

  expect(drone.x).toBe(0);
  expect(drone.y).toBe(2);
  expect(drone.orientation).toBe(Orientation.EAST);
});

it("should be throw an InvalidInstructionException (using invalid instruction `E`)", () => {
  expect(() => {
    new Drone("E", Orientation.NORTH, 0, 0);
  }).toThrowError(InvalidMovementException);
});

it("should be throw an OrientationValueException (goForward x2)", () => {
  expect(() => {
    const drone = new Drone("MM", Orientation.NORTH, 0, 0);
    drone.explore(1, 1);
  }).toThrowError(DroneOutOfBoundsException);
});

it("should be throw an OrientationValueException (Wrong initial position)", () => {
  expect(() => {
    const drone = new Drone("M", Orientation.NORTH, 2, 2);
    drone.explore(1, 1);
  }).toThrowError(DroneOutOfBoundsException);
});
