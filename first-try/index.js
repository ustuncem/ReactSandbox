function Navbar() {
  return (
    <nav>
      <ul>
        <li>Selam Abim!</li>
        <li>Selam Ablam!</li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <header>
      <h1>Hello, REACT! </h1>
    </header>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <hr />
    <MainContent />
  </div>
);
