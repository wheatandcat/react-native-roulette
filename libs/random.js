// @flow

export function random(num: number): number {
  return Math.floor(Math.random() * num)
}

export function randomRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}
