/**
 * The upper limit of milliseconds used in getRandomTime
 */
const UPPER_LIMIT_MILLIS = 5000

/**
 * The N in 1 in N odds
 */
const ONE_IN_N = 10

/**
 * Returns a random number of milliseconds between 0 and the upper limit
 */
export function getRandomTime(): number {
  return Math.random() * UPPER_LIMIT_MILLIS
}

/**
 * Returns a boolean based on 1 in N odds
 */
export function shouldChance(): boolean {
  return Math.floor(Math.random() * ONE_IN_N) === 0
}