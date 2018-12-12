import { Status, StatusModule, Wiredin } from './core';

const init = (wiredin: Wiredin): StatusModule => {
  const format = (results: string): Status => {
    const [
      ,
      sign,
      light,
      emoji,
      name
    ] = /Sign:\s(.*);.*Light:\s(.*);.*Status:(?:\s(\S*)\s)?(.*)/.exec(
      results
    ) || ['', '', '', '', ''];
    // results: Getting ct state...;CURRENT STATUS;Sign: CONNECTED;Light: ON;Status: 💯 Chill

    return {
      light,
      preset: { emoji, name: name && name.length ? name.trim() : undefined },
      sign
    };
  };

  const statusFn = (): Status => format(wiredin('status'));

  return {
    status: statusFn
  };
};

export { init };
