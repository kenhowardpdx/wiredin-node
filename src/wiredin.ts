import * as childProcess from 'child_process';

const wiredin = (
  action: 'preset' | 'status' | 'update',
  ...args: string[]
): string => {
  try {
    return childProcess
      .execFileSync('wiredin', [action, ...args])
      .toString()
      .replace(/\n/g, '>>')
      .replace(/\u001b\[[;\d]{0,}m[\s]{0,}/g, '')
      .replace(/\\u[\da-z]{4}/i, '')
      .replace(/>>/g, '-')
      .split('-')
      .filter((str) => str.length)
      .join(';');
  } catch (err) {
    throw err;
  }
};

export { wiredin };
