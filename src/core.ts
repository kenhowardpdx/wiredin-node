type Action = 'preset' | 'status' | 'update';
type Wiredin = (action: Action, ...args: string[]) => string;

interface PresetModule {
  color(color: string): void;
  emoji(emoji: string): void;
  name(name: string): void;
}

interface StatusModule {
  status(): Status;
}

interface UpdateModule {
  color(color: string): void;
  emoji(emoji: string): void;
  name(name: string): void;
}

interface Preset {
  emoji?: string;
  name?: string;
}
interface Status {
  light: string;
  preset: Preset;
  sign: string;
}

export { Wiredin, PresetModule, StatusModule, UpdateModule, Preset, Status };
