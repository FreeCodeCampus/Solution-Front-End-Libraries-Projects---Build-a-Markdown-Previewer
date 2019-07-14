import React from "react";
import "./App.css";
import marked from "marked";

const Editor = () => {
  const [input, setInput] = React.useState("");

  const convetToMarkdown = () => {
    return { __html: marked(input) };
  };

  return (
    <div>
      <textarea id="editor" onChange={e => setInput(e.target.value)} />
      <div id="preview" dangerouslySetInnerHTML={convetToMarkdown()} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
