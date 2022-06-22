import { Navbar } from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movies" />
      <List />
      <List />
      <List />
    </div>
  );
};