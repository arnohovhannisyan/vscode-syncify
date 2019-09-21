import { commands, ViewColumn, window, workspace } from "vscode";
import { defaultSettings, ISettings, PartialSettings, state } from "~/models";
import {
  Environment,
  FS,
  localize,
  Logger,
  Utilities,
  Webview
} from "~/services";

export class Settings {
  public static async get(): Promise<ISettings> {
    const exists = await FS.exists(Environment.settings);

    if (!exists) {
      await FS.mkdir(state.context.globalStoragePath);
      await FS.write(
        Environment.settings,
        JSON.stringify(defaultSettings, null, 2)
      );
      return defaultSettings;
    }

    try {
      const contents = await FS.read(Environment.settings);
      const settings = JSON.parse(contents);

      return Utilities.merge(defaultSettings, settings);
    } catch (err) {
      Logger.error(err, null, true);
      return;
    }
  }

  public static async set(settings: PartialSettings): Promise<void> {
    const exists = await FS.exists(state.context.globalStoragePath);
    if (!exists) {
      await FS.mkdir(state.context.globalStoragePath);
    }

    const currentSettings = await Settings.get();

    await FS.write(
      Environment.settings,
      JSON.stringify(Utilities.merge(currentSettings, settings), null, 2)
    );

    await commands.executeCommand("syncify.reinitialize");
  }

  public static async openSettings() {
    await Webview.openSettingsPage(await Settings.get());
  }

  public static async openSettingsFile() {
    const filepath = Environment.settings;
    await window.showTextDocument(
      await workspace.openTextDocument(filepath),
      ViewColumn.One,
      true
    );
  }

  public static async reset(): Promise<void> {
    const userIsSure = await Utilities.confirm("reset");

    if (!userIsSure) {
      return;
    }

    state.watcher.stopWatching();

    await FS.delete(state.context.globalStoragePath);

    await state.sync.reset();

    if (defaultSettings.watchSettings) {
      state.watcher.startWatching();
    }

    window.showInformationMessage(localize("(info) reset.resetComplete"));
  }
}