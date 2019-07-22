import { normalize, resolve } from "path";
import { OperatingSystem } from "../../models/os.model";
import { state } from "../../models/state.model";

export class EnvironmentService {
  public locations = {
    userFolder: null,
    repoFolder: null,
    settings: null,
    customFilesFolder: null
  };

  public os: OperatingSystem;

  constructor() {
    this.os = process.platform as OperatingSystem;

    const slash = normalize("/");

    if (!process.env.VSCODE_PORTABLE) {
      const path = resolve(state.context.globalStoragePath, "../../..").concat(
        slash
      );
      this.locations.userFolder = resolve(path, "User").concat(slash);
    } else {
      const path = process.env.VSCODE_PORTABLE;
      this.locations.userFolder = resolve(path, "user-data/User").concat(slash);
    }

    this.locations.repoFolder = resolve(
      state.context.globalStoragePath,
      "repo"
    );

    this.locations.settings = resolve(
      state.context.globalStoragePath,
      "settings.json"
    );

    this.locations.customFilesFolder = resolve(
      this.locations.userFolder,
      "customFiles"
    );
  }
}