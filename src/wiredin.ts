import * as childProcess from 'child_process';

const wiredin = (
  action: 'preset' | 'status' | 'update',
  ...args: string[]
): string => {
  try {
    return childProcess.execFileSync('wiredin', [action, ...args]);
  } catch (err) {
    throw err;
  }
};

export { wiredin };
