import { wiredin } from './wiredin';

const updateFn = (...args: string[]): void => {
  wiredin('update', ...args);
};

const colorFn = (color: string): void => {
  updateFn('--color', color);
};

const emojiFn = (emoji: string): void => {
  updateFn('--emoji', emoji);
};

const nameFn = (name: string): void => {
  updateFn('--name', name);
};

const update = {
  color: colorFn,
  emoji: emojiFn,
  name: nameFn
};

export { update };
