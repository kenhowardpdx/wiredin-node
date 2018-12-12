import { PresetModule, Wiredin } from './core';

const init = (wiredin: Wiredin): PresetModule => {
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

  return {
    color: colorFn,
    emoji: emojiFn,
    name: nameFn
  };
};

export { init };
