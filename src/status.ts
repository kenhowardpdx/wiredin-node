import { wiredin } from './wiredin';

const statusFn = (): void => {
  wiredin('status');
};

const status = {
  status: statusFn
};

export { status };
