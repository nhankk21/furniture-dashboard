export const convertRowToArrNumber = (arrStr: string[]) =>
  arrStr.toString().split(',').map(Number);
