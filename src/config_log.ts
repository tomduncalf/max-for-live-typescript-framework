interface LogConfig {
  enabled: boolean;
  debug: boolean;
  verbose: boolean;
}

export const LOG_CONFIG = {
  LiveParameterListener: {
    enabled: true,
    debug: true,
    verbose: true,
  } as LogConfig,

  LiveHub: {
    enabled: true,
    debug: true,
    verbose: true,
  } as LogConfig,

  ParameterScene: {
    enabled: true,
    debug: true,
    verbose: false,
  } as LogConfig,

  LiveApiObjectWrapper: {
    enabled: true,
    debug: true,
    verbose: false,
  } as LogConfig,
};

export const LOG_ALL_MODULES = false;
export const LOG_ALL_LEVEL = {
  debug: false,
  verbose: false,
};

export const LOG_TO_OUTLET = true;
export const OUTLET_LOG_LINES = 10;
