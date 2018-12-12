// tslint:disable:no-any no-magic-numbers
import { init } from '../status';

const wiredInMock = jest.fn();

describe('status', () => {
  let status: any;
  beforeEach(() => {
    status = init(wiredInMock);
  });
  describe('#status', () => {
    test('should look at current status', () => {
      expect.assertions(2);

      status.status();

      expect(wiredInMock).toHaveBeenCalledTimes(1);
      expect(wiredInMock).toHaveBeenCalledWith('status');
    });
  });
});
