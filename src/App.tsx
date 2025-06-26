import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div className="flex flex-col gap-4">
      <Card title="Demo Card">
        This is the Card component that can be imported by other apps!
      </Card>
      <Button>Click me</Button>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
