import { wiredin } from './wiredin';

const presetFn = (...args: string[]): void => {
  wiredin('preset', ...args);
};

const colorFn = (color: string): void => {
  presetFn('--color', color);
};

const emojiFn = (emoji: string): void => {
  presetFn('--emoji', emoji);
};

const nameFn = (name: string): void => {
  presetFn('--name', name);
};

const preset = {
  color: colorFn,
  emoji: emojiFn,
  name: nameFn
};

export { preset };
