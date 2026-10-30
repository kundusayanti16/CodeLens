
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          ● Interactive · Visual · Step by Step
        </span>

        <h1>
          Understand code,
          <br />
          <span>one step at a time.</span>
        </h1>

        <p>
          CodeLens helps you understand code step by step
          through line highlighting, variable tracking,
          and interactive visualizations.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">
            Start Visualizing →
          </button>

          <button className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-panel">
          <div className="code-panel-header">
            <span>● ● ●</span>
            <span>JavaScript</span>
          </div>

          <pre>
            <code>{`let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);`}</code>
          </pre>

          <div className="code-line-active">
            ▶ Executing line 2
          </div>
        </div>
      </div>
    </section>
  );
}
