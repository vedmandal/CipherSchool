

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <span className="navbar__logo">⚡</span>
          <span className="navbar__title">CipherSQLStudio</span>
        </div>

        <div className="navbar__actions">
          <span className="navbar__badge">SQL Playground</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;