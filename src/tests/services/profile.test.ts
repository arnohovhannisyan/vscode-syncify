import { tmpdir } from "os";
import { resolve } from "path";
import { Environment, FS, Profile, Settings } from "~/services";

jest.mock("~/services/localization.ts");

const cleanupPath = resolve(tmpdir(), "syncify-jest/services/prpfile");

const pathToTest = resolve(cleanupPath, "test");

const paths = [pathToTest];

jest
  .spyOn(Environment, "settings", "get")
  .mockReturnValue(resolve(pathToTest, "settings.json"));

beforeEach(() => Promise.all(paths.map(FS.mkdir)));

afterEach(() => FS.delete(cleanupPath));

it("should switch profile", async () => {
  await Settings.set({
    repo: {
      profiles: [
        {
          name: "1",
          branch: "1"
        },
        {
          name: "2",
          branch: "2"
        }
      ],
      currentProfile: "1"
    }
  });

  await Profile.switch("2");

  const currentProfile = await Settings.get(s => s.repo.currentProfile);

  expect(currentProfile).toBe("2");
});
