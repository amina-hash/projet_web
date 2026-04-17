function Header() {
  return (
    <header style={styles.header}>
      <h2>Master RSI — Portfolio</h2>
    </header>
  );
}

const styles = {
  header: {
    background: "#625dc1",
    color: "white",
    padding: "10px",
    textAlign: "start",
  }
};

export default Header;