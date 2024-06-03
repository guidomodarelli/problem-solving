### Problem Description

We need to develop a program that simulates the movement of drones on a rectangular grid. The drones explore the grid following specific instructions to search for oil.

### Input

- **Grid Dimensions:** Two integers separated by a space indicating the size of the grid.
- **Drone Initial State:** Three values separated by spaces indicating the initial coordinates (x, y) and the orientation (N, E, S, W) of the drone.
- **Instructions:** A string of characters containing the movement instructions (`L`, `R`, `M`).

### Input Format

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

### Output

For each drone, print the final position and orientation after executing all the instructions.

### Example

#### Input

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

#### Output

```
1 3 N
5 1 E
```

### Movement Details

- `L` (Left): Turns the drone 90 degrees to the left.
- `R` (Right): Turns the drone 90 degrees to the right.
- `M` (Move): Moves one position forward in the direction the drone is facing.

### Orientation Details

- `N` (North): The drone faces upward.
- `E` (East): The drone faces to the right.
- `S` (South): The drone faces downward.
- `W` (West): The drone faces to the left.

### Considerations

- The grid is a matrix of the specified size, with `(0, 0)` as the bottom-left corner.
- Drones will not move outside the grid boundaries.
- Instructions are executed sequentially and affect the drone's position and orientation on the grid.

Develop a function that reads the input data, processes the instructions for each drone, and returns the final position and orientation of each drone.
