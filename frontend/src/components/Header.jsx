function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark border-bottom border-white border-opacity-10 shadow-sm py-3"
      style={{ background: "linear-gradient(135deg, #3730a3 0%, #4f46e5 55%, #6366f1 100%)" }}
    >
      <div className="container-fluid px-3 px-lg-4">
        <span className="navbar-brand mb-0 fw-semibold fs-5">
          Master RSI — Portfolio
        </span>
      </div>
    </header>
  );
}

export default Header;
