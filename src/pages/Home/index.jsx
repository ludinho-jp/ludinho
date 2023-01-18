import logo2 from "../../assets/logo2.jpg";
import Post from "../../components/Post";
// import sendPost from "../../utils/sendPost";

import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo2} alt="logo" />
      </header>
      <main>
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
      <div />
    </div>
  );
}
