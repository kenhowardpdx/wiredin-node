// tslint:disable:no-any file-name-casing

const childProcess: any = jest.genMockFromModule('child_process');
childProcess.execFileSync = jest.fn();

module.exports = childProcess;
