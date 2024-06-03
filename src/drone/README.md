# Drone Exploration on a Plateau: Navigate and Search for Oil

## Problem Description

We need to develop a program that simulates the movement of drones on a rectangular plateau. The drones explore the plateau following specific instructions to search for oil.

## Input

- **Plateau Dimensions:** Two integers separated by a space indicating the size of the plateau.
- **Drone Initial State:** Three values separated by spaces indicating the initial coordinates (x, y) and the orientation (N, E, S, W) of the drone.
- **Instructions:** A string of characters containing the movement instructions (`L`, `R`, `M`).

## Input Format

The input will be provided in the following format:

```
width height
x y orientation
instructions
```

For example:

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

## Output

For each drone, print the final position and orientation after executing all the instructions.

## Example

### Input

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

### Output

```
1 3 N
5 1 E
```

## Movement Details

- `L` (Left): Turns the drone 90 degrees to the left.
- `R` (Right): Turns the drone 90 degrees to the right.
- `M` (Move): Moves one position forward in the direction the drone is facing.

## Orientation Details

- `N` (North): The drone faces upward.
- `E` (East): The drone faces to the right.
- `S` (South): The drone faces downward.
- `W` (West): The drone faces to the left.

## Considerations

- The plateau is a matrix of the specified size, with `(0, 0)` as the bottom-left corner.
- Drones will not move outside the plateau boundaries.
- Instructions are executed sequentially and affect the drone's position and orientation on the plateau.

Develop a function that reads the input data, processes the instructions for each drone, and returns the final position and orientation of each drone.
