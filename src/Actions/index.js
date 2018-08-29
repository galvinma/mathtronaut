import { GET_NUMBERS, GET_TIME } from '../Constants/action-types';

export const getNumbers = numbers => ({
  type: "GET_NUMBERS",
  numbers
});

export const getTime = time => ({
  type: "GET_TIME",
  time
});
