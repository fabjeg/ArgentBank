import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser, getUser } from "../features/userSlice";
import "../styles/main.min.css";

export function UserInfo({ onCancel }) {
  const dispatch = useDispatch();
  const { userName, firstName, lastName } = useSelector((state) => state.user);
  const { accessToken } = useSelector((state) => state.auth);
  const [username, setUsername] = useState(userName);

  useEffect(() => {
    dispatch(getUser());
  }, [accessToken, dispatch]);

  useEffect(() => {
    setUsername(userName);
  }, [userName]);

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleSave = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(updateUser(username));
    }
  };

  return (
    <div>
      <div className="container-form anim-form">
        <h2>Edit user info</h2>
        <form onSubmit={handleSave}>
          <label>
            User name:
            <input
              className="input-form-user"
              type="text"
              value={username || ""}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            First name:
            <input
              className="input-form-user"
              type="text"
              value={firstName || ""}
              readOnly
            />
          </label>
          <br />
          <label>
            Last name:
            <input
              className="input-form-user"
              type="text"
              value={lastName || ""}
              readOnly
            />
          </label>
          <br />
          <div className="container-button">
            <button
              className="button-form"
              type="submit"
            >
              Save
            </button>
            <button
              className="button-form"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
