
export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">CodeLens</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#visualizer">Visualizer</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button className="nav-button">
        Get Started
      </button>

    </nav>
  );
}
