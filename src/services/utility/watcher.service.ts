import { commands, extensions, window } from "vscode";
import { watch } from "vscode-chokidar";
import { state } from "../../models/state.model";
import { UtilityService } from "./utility.service";

export class WatcherService {
  private watching = false;
  private watcher = watch(this.userFolder, {
    ignored: this.ignoredItems
  });

  constructor(private ignoredItems: string[], private userFolder: string) {
    extensions.onDidChange(async () => {
      if (this.watching && window.state.focused) {
        this.upload();
      }
    });
  }

  public async startWatching() {
    this.stopWatching();

    this.watching = true;

    this.watcher.addListener("change", async () => {
      if (this.watching && window.state.focused) {
        await this.upload();
      }
    });
  }

  public stopWatching() {
    if (this.watcher) {
      this.watcher.removeAllListeners();
    }
    this.watching = false;
  }

  private async upload() {
    const cmds = await commands.getCommands();
    const alreadyInitiated = cmds.some(cmd => cmd === "syncify.cancelUpload");

    if (alreadyInitiated) {
      return;
    }

    const settings = await state.settings.getSettings();

    let shouldUpload = true;

    const message = window.setStatusBarMessage(
      state.localize(
        "info(upload).initiating",
        settings.autoUploadDelay.toString()
      ),
      5000
    );

    const btn = window.createStatusBarItem(1);

    const disposable = commands.registerCommand("syncify.cancelUpload", () => {
      shouldUpload = false;
      disposable.dispose();
      btn.dispose();
      message.dispose();
    });

    state.context.subscriptions.push(disposable);

    btn.command = "syncify.cancelUpload";
    btn.text = `$(x) ${state.localize("action(upload).cancel")}`;
    btn.show();

    await UtilityService.sleep(settings.autoUploadDelay * 1000);

    disposable.dispose();
    btn.dispose();

    if (shouldUpload) {
      commands.executeCommand("syncify.upload");
    }
  }
}