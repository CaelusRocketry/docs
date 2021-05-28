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
        "Callisto Rocket Development": ["general"].map(
          (page) => `propulsion/callisto/${page}`
        ),
      },
    ],
    Electronics: [
      {
        "PCBs": [
          "launchbox",
          "teststandpcb",
        ].map((page) => `electronics/PCBs/${page}`),
      },
      {
        "Sensors": [
          "pts",
          "loadcells",
        ].map((page) => `electronics/Sensors/${page}`),
      },
    ],
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
      "programming/packets",
    ],
    Website: ["front-end", "cms"].map((page) => `website/${page}`),
    Livestreaming: [
      "obs", 
      "stream_setup", 
      "streaming",
    ].map((page) => `livestreaming/${page}`),
  },
};
26;
// uh oh stinky
