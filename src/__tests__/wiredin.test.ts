// tslint:disable:no-any no-magic-numbers

jest.mock('child_process');

import * as childProcess from 'child_process';

import { wiredin } from '../wiredin';

const execFileSyncSpy = jest.spyOn(childProcess, 'execFileSync');

describe('wiredin tests', () => {
  test('it should call execFileSync', () => {
    expect.assertions(2);

    wiredin('status');

    expect(execFileSyncSpy).toHaveBeenCalledTimes(1);
    expect(execFileSyncSpy).toHaveBeenCalledWith('wiredin', ['status']);
  });
});
