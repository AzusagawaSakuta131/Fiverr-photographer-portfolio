export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Alex Photo</h1>
      <ul className="nav-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}