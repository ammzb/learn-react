function MyButton() {
  let count = 0;
  function handleClick() {
    count = count + 1;
  }
  return <button onClick={handleClick}> click {count} times</button>;
}

function MyApp() {
  return (
    <div>
      <h1>Counters That Update Separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

export default MyApp;
