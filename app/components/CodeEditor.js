
"use client";

import { useState } from "react";
import "./CodeEditor.css";
export default function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(
    "// Welcome to CodeLens\n\nfunction hello() {\n  console.log('Hello World');\n}"
  );
  const [output, setOutput] = useState("");

  const handleRun = () => {
    if (language === "javascript") {
      try {
        const result = new Function(code)();
        setOutput(
          result === undefined
            ? "Code executed successfully!"
            : String(result)
        );
      } catch (error) {
        setOutput("Error: " + error.message);
      }
    } else {
      setOutput("Execution for this language is coming soon!");
    }
  };

  return (
    <div className="editor-container">

      <div className="editor-header">
        <h2>Code Editor</h2>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>

      <textarea
        className="code-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        placeholder="Write your code here..."
      />

      <button className="run-button" onClick={handleRun}>
        Run Code
      </button>

      <div className="output-container">
        <h3>Output</h3>
        <pre>{output || "Your output will appear here..."}</pre>
      </div>

    </div>
  );
}