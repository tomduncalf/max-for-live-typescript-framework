import { log, Log } from "./lib_Log";
import { SavedState } from "./models";

interface InletOutlet {
  index: number;
  description: string;
}

export const Inlets: Record<string, InletOutlet> = {
  Messages: { index: 0, description: "Messages" },
};

export const Outlets: Record<string, InletOutlet> = {
  Debug: { index: 0, description: "Debug" },
};

// Main entry point class which hooks everything together
export class LiveHub {
  log = new Log("LiveHub");
  patcher: any;

  constructor() {
    log("LiveHub started");
  }

  handleMessage = (inlet: number, value: number): void => {};

  dumpSavedState = (): void => {};

  getSavedState = (): SavedState => {
    return {};
  };

  loadSavedState = (savedState: string): void => {};
}
