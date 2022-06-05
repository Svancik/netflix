import { Navbar } from "../components/navbar/Navbar";
import Featured from "./../components/featured/Featured";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movies" />
    </div>
  );
};
