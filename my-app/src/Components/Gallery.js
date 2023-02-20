export function Profile() {
  return <img src="./dall.png" alt="two lovers" />;
}

function Gallery() {
  return (
    <>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </>
  );
}

export default Gallery;
