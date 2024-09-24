import { Banner, Feature } from "../components/index";
import { useSelector } from "react-redux";

export function Home() {
  const stateGlobal = useSelector((state) => state);
  console.log("stateglobale", stateGlobal);
  return (
    <div>
      <Banner />
      <Feature />
    </div>
  );
}
