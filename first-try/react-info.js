function Page() {
  const page = (
    <main>
      <img src="/react-logo.png" width="120" />
      <h1>React İnşallah</h1>
      <ul>
        <li>React öğrendiğim için mutluyum</li>
        <li>React iyi bir şey.</li>
        <li>Allah herkese react versin.</li>
      </ul>
    </main>
  );
  return page;
}

const ROOT = ReactDOM.createRoot(document.getElementById("root"));

ROOT.render(<Page />);
