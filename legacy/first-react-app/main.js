function Person(props) {
  return (
    <div class="person">
        <h1>{ props.name }</h1>
        <p>Your Age: { props.age }</p>
    </div>
  );
}

ReactDOM.render(<Person name="Max" age="25" />, document.querySelector('#p1'));
