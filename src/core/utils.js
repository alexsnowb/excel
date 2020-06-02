export function capitalize(string) {
  if (typeof string !== 'string') throw new Error('Not string');

  return string.charAt(0).toUpperCase() + string.slice(1);
}
