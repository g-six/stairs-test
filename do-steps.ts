// Given the size of the stairs and the initial number of steps,
// return the number of options (valid moves) the person should take to 
// reach the nth stair
function doSteps(stair_size: number, steps_taken: number): number {
    // If stair_size is 0 or negative (might be going down?), then
    // return 0
    if (stair_size <= 0) return 0

    let remainder = stair_size - steps_taken

    // If 0 steps needed
    if (remainder === 0) return 1

    for (let n = remainder; n > 1; n -= 1) {
        remainder += doSteps(stair_size, n)
    }

    return remainder
}

// Test
// The person only have one other move to reach the top
// doSteps(2, 1) === 1

// The person have 3 other options to move to the top
// doSteps(3, 1) === 3

// If initial steps === 2 The person have 1 more move to move to the top
// doSteps(3, 2) === 1
