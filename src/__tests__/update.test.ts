// tslint:disable:no-any no-magic-numbers
import { init } from '../update';

const wiredInMock = jest.fn();

describe('update tests', () => {
  let update: any;
  beforeEach(() => {
    update = init(wiredInMock);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('#color', () => {
    test('should change color', () => {
      expect.assertions(2);

      update.color('FF0000');

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('update', '--color', 'FF0000');
    });
  });
  describe('#name', () => {
    test('should search/set a update based on a name', () => {
      expect.assertions(2);

      update.name('test name');

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('update', '--name', 'test name');
    });
  });
  describe('#emoji', () => {
    test('should search/set a update based on a emoji', () => {
      expect.assertions(2);

      update.emoji('👤');

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('update', '--emoji', '👤');
    });
  });
});
