import { UpdateModule, Wiredin } from './core';

const init = (wiredin: Wiredin): UpdateModule => {
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

  return {
    color: colorFn,
    emoji: emojiFn,
    name: nameFn
  };
};

export { init };
