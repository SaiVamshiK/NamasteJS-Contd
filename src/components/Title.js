import Logo from '../assets/images/foodVilla.jpg'
export const Title = () => {
  return (
    <a href="/"> 
      <img
        className="h-28 p-2"
        alt="logo"
        src= {Logo}
      />
    </a>
  );
};
