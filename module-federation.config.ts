export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: ["react", "react-dom"],
};
