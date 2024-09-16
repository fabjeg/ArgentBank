import "../styles/main.css";
import { Header } from "./header";
import { UserInfo } from "./userInfo";

export function CompteHeader() {
  return (
    <div>
      <Header />
      <UserInfo />
    </div>
  );
}
