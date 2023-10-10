import style from "../assets/css/style.module.css";

export const Header = () => {
  return (
    <nav className={style.navigation}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Services</a>
    </nav>
  );
};
