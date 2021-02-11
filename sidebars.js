/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    Overview: ["index"],
    Propulsion: [
      {
        "Aphlex Engine Design": [
            "overview",
        ].map((page) => `propulsion/aphlex/${page}`),
      },
      {
        "Callisto Rocket Development": [
            "general",
        ].map((page) => `propulsion/callisto/${page}`),
      }
    ],
    Electronics: ["launchbox"].map((page) => `electronics/${page}`),
    Programming: [
      {
        "Flight Software": [
          "overview",
          "setup",
          "mcl",
          "tasks",
          "control-tasks",
          "drivers",
          "lib",
          "errors",
        ].map((page) => `programming/fs/${page}`),
      },
      {
        "Ground Software": ["setup", "back-end", "front-end", "errors"].map(
          (page) => `programming/gs/${page}`
        ),
      },
    ],
    Website: ["front-end", "cms"].map((page) => `website/${page}`),
  },
};
