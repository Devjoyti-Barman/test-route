import React, { useContext } from "react";
import "./header.css";
import { UserContext } from "./../../context/userContext/userContext";
import { signInWithGoogle } from "../../services/auth";

export const Header: React.FC<{}> = () => {
  const [user, userDispatch] = useContext(UserContext).user;

  const handleSigninClick: () => Promise<void> = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) userDispatch({ type: "ADD_USER", user: userBySignIn });
  };

  return (
    <div className="header">
      <div className="header__name">Codding Masala</div>
      {!user ? (
        <div onClick={handleSigninClick} className="header__btn">
          SignInWithGoogle
        </div>
      ) : (
        <div className="header__user">
          <div className="user__displayName">{user.displayName}</div>
          <img
            className="user__photoURL"
            alt={user.photoURL}
            src={user.photoURL}
          />
        </div>
      )}
    </div>
  );
};
