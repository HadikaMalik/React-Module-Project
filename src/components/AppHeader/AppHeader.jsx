import Logo from "@/assets/hotel-logo.png";
import "./AppHeader.scss";
const AppHeader = () => (
  <header className="app__header">
    <img className="app__logo" src={Logo} alt="main image" />
    <h1 className="app__heading">CYF Hotel</h1>
  </header>
);
export default AppHeader;
