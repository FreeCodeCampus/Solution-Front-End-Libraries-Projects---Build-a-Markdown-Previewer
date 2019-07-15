import React from "react";
import "./App.css";
import marked from "marked";

const Editor = () => {
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    setInput(`# h1

    ## h2
  
    [links](https://www.google.com)
  
   some code, \`<div></div>\`, between 2 backticks.
  
   multi-line code:
  
    \`\`\`
  
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`
  
  
  
  * Unordered list can use asterisks
  - Or minuses
  + Or pluses
  
  ordered list:
    1. And there are numbererd lists too.
    1. Use just 1s if you want! 
    1. But the list goes on...
      
   **bold text**
    
   Block Quotes:
  > Blockquotes are very handy in email to emulate reply text.
  > This line is part of the same quote.
  
  
    image:
  
    ![React Logo w/ Text](https://goo.gl/Umyytc)
    `);
  }, []);

  const convetToMarkdown = () => {
    return { __html: marked(input) };
  };

  return (
    <div>
      <textarea
        id="editor"
        onChange={e => setInput(e.target.value)}
        defaultValue={input}
      />
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
