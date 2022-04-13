export const capitalize = (str) => {
  const [first, ...rest] = str.split(" ");
  return [
    first.slice(0, 1).toUpperCase() + first.slice(1, first.length),
    ...rest,
  ].join(" ");
};
