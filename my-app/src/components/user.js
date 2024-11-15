import { useSelector, useDispatch } from "react-redux";
import "../styles/main.min.css";
import { UserInfo } from "./userInfo";
import { useState, useEffect } from "react";
import { getUser } from "../features/userSlice";
import { AccountList } from "../components/accountList"; 

export function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <div>
      <main className="main bg-dark">
        {!showForm && (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.userName}!
            </h1>
            <button
              className="edit-button"
              onClick={handleEditClick}
            >
              Edit Name
            </button>
          </div>
        )}
        {showForm && <UserInfo onCancel={handleCancelClick} />}
        <AccountList />
      </main>
    </div>
  );
}
