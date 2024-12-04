import * as process from "process";

import { Turbo } from "./Turbo";

it(`turbo.runTask('invalid-script') should be ignored;`, async () => {
  const turbo = new Turbo(process.cwd());
  turbo.runTask("invalid-script", {
    filter: `@ordzaar/turbo^...`,
  });
});

it(`turbo.runTasks('invalid-script') should be ignored;`, async () => {
  const turbo = new Turbo(process.cwd());
  turbo.runTasks([
    {
      task: "invalid-script",
      opts: {
        filter: `@ordzaar/turbo^...`,
      },
    },
  ]);
});

it(`should turbo.runBefore('build') without failure`, async () => {
  const turbo = new Turbo(process.cwd());
  turbo.runBefore("build", {
    dry: "json",
  });
});

it(`turbo.planPackages('test') should generate a list of packages to run`, async () => {
  const turbo = new Turbo(process.cwd());
  const packages = turbo.planPackages("test");
  expect(packages).toStrictEqual(
    expect.arrayContaining(["@ordzaar/jest", "@ordzaar/testcontainers", "@ordzaar/turbo"]),
  );
});
