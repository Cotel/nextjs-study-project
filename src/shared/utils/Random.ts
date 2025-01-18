const inRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const oneOf = <T>(...args: T[]): T =>
  args[inRange(0, args.length - 1)];

export const Random = {
  inRange,
  oneOf,
};
