function Listitem() {
  return (
    <nav>
      <h1>Using function</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact </li>
      </ul>
    </nav>
  );
}
ReactDOM.render(
  <div>
    <Listitem />
  </div>,
  document.getElementById("header")
);

const navbar = (
  <nav>
    <h1>Using const</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
