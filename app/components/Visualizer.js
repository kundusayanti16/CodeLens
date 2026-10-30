
"use client";

import { useState } from "react";
import "./Visualizer.css";

export default function Visualizer() {

  const [step, setStep] = useState(0);

  const codeLines = [
    "let sum = 0;",
    "",
    "for (let i = 1; i <= 5; i++) {",
    "  sum += i;",
    "}",
    "",
    "console.log(sum);"
  ];

  const steps = [
    { i: 0, sum: 0, line: 1, message: "Initialize sum = 0" },
    { i: 1, sum: 1, line: 4, message: "Iteration 1: sum = 0 + 1" },
    { i: 2, sum: 3, line: 4, message: "Iteration 2: sum = 1 + 2" },
    { i: 3, sum: 6, line: 4, message: "Iteration 3: sum = 3 + 3" },
    { i: 4, sum: 10, line: 4, message: "Iteration 4: sum = 6 + 4" },
    { i: 5, sum: 15, line: 4, message: "Iteration 5: sum = 10 + 5" },
    { i: 5, sum: 15, line: 7, message: "Execution completed! Output = 15" }
  ];

  const current = steps[step];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const reset = () => {
    setStep(0);
  };

  return (
    <section className="visualizer" id="visualizer">

      <div className="visualizer-heading">

        <span className="visualizer-badge">
          INTERACTIVE LEARNING
        </span>

        <h2>See How Your Code Works</h2>

        <p>
          Understand every iteration, variable and execution step.
        </p>

      </div>

      <div className="visualizer-container">

        {/* CODE PANEL */}

        <div className="visualizer-code">

          <h3>JavaScript Code</h3>

          <div className="code-display">

            {codeLines.map((line, index) => (

              <div
                key={index}
                className={`code-row ${
                  current.line === index + 1
                    ? "active-line"
                    : ""
                }`}
              >

                <span className="line-number">
                  {index + 1}
                </span>

                <code>{line || " "}</code>

              </div>

            ))}

          </div>

        </div>

        {/* VARIABLE PANEL */}

        <div className="visualizer-data">

          <h3>Variable Tracking</h3>

          <div className="variable-cards">

            <div className="variable-card">
              <span>i</span>
              <h2>{current.i}</h2>
            </div>

            <div className="variable-card">
              <span>sum</span>
              <h2>{current.sum}</h2>
            </div>

          </div>

          {/* EXECUTION DETAILS */}

          <div className="execution-info">

            <span>Execution Step</span>

            <h2>{step} / {steps.length - 1}</h2>

            <p>{current.message}</p>

          </div>

          {/* PROGRESS BAR */}

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${(step / (steps.length - 1)) * 100}%`
              }}
            />
          </div>

          {/* CONTROLS */}

          <div className="visualizer-buttons">

            <button
              className="reset-btn"
              onClick={reset}
            >
              Reset
            </button>

            <button
              className="prev-btn"
              onClick={previousStep}
              disabled={step === 0}
            >
              Previous
            </button>

            <button
              className="next-btn"
              onClick={nextStep}
              disabled={step === steps.length - 1}
            >
              {step === steps.length - 1
                ? "Completed"
                : "Next Step →"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
