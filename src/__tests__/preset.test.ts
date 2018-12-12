// tslint:disable:no-any no-magic-numbers
import { init } from '../preset';

const wiredInMock = jest.fn();

describe('preset tests', () => {
  let preset: any;
  beforeEach(() => {
    preset = init(wiredInMock);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('#color', () => {
    test('should search/set a preset based on a color', () => {
      expect.assertions(2);

      preset.color('FF0000');

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('preset', '--color', 'FF0000');
    });
  });
  describe('#name', () => {
    test('should search/set a preset based on a name', () => {
      expect.assertions(2);

      preset.name('test name');

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('preset', '--name', 'test name');
    });
  });
  describe('#emoji', () => {
    test('should search/set a preset based on a emoji', () => {
      expect.assertions(2);

      preset.emoji('👤');

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('preset', '--emoji', '👤');
    });
  });
});
