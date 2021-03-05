module.exports = {
  docs: {
    Overview: ["index"],
    Propulsion: [
      {
        "Aphlex Engine Design": [
            "parameter_overview",
            "design_overview",
            "inputs",
            "cea",
            "nozzle",
            "injector",
            "propsim",
            "outputs",
            "optimization"
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
};26
// uh oh stinky