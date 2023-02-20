export default function Toolbar() {
  return (
    <>
      <AlertButton message="Catch me if you can"></AlertButton>
    </>
  );
}

function AlertButton({ message }) {
  function handleClick() {
    alert(message);
  }
  return <button onClick={handleClick}>Play {message}</button>;
}
