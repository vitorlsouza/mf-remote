export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button.tsx",
    "./Card": "./src/components/Card.tsx",
  },
  shared: ["react", "react-dom"],
};
