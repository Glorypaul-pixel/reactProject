function Listitem() {
  return (
    <nav>
      <h1>website</h1>
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

// const learn = document.getElementById("header");
// learn.innerHTML = "<h1>" + "hello, i am learning React" + "</h1>";
