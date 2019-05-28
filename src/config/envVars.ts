import * as dotenv from "dotenv";

dotenv.config();

// usage: const MY_ENV_VAR = envVars().ENV_VAR1 after importing envVars

// set environment defaults
const ENVIRONMENT_VARIABLES = {
  ENV_VAR1: "",
  ENV_VAR2: ""
};

let fetched: boolean = false;

const fetchEnvVar = envVarName => {
  ENVIRONMENT_VARIABLES[envVarName] =
    process.env[envVarName] || ENVIRONMENT_VARIABLES[envVarName] || "";
};

export default function envVars() {
  if (fetched) {
    return ENVIRONMENT_VARIABLES;
  }
  Object.keys(ENVIRONMENT_VARIABLES).map(fetchEnvVar);
  Object.freeze(ENVIRONMENT_VARIABLES);
  fetched = true;
  return ENVIRONMENT_VARIABLES;
}
