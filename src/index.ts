import { init as initPreset } from './preset';
import { init as initStatus } from './status';
import { init as initUpdate } from './update';
import { wiredin } from './wiredin';

const preset = initPreset(wiredin);
const status = initStatus(wiredin).status;
const update = initUpdate(wiredin);

export { preset, status, update };
