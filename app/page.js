import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Visualizer from "./components/Visualizer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CodeEditor />
      <Visualizer />
      <h1>CodeLens</h1>
      <p>Understand code, one step at a time.</p>
    </main>
  );
}
