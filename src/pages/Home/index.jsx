import logo2 from "../../assets/logo2.jpg";
import logo from "../../assets/logo.jpg";

import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo2} alt="logo" />
      </header>
      <img className="ludinho" src={logo} alt="ludinho" />
      <div />
    </div>
  );
}
