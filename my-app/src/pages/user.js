import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, updateUserName, setNewUserName } from "../stores/user";
import Modal from "../contents/modal";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const newUserName = useSelector((state) => state.user.newUserName);

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    } else if (token) {
      dispatch(fetchUserData(token));
    } else {
      console.error("Token is undefined or null");
    }
  }, [dispatch, token]);

  const userData = useSelector((state) => state.user.userData);
  const firstName =
    userData && userData.body ? `${userData.body.firstName}` : "";
  const lastName = userData && userData.body ? `${userData.body.lastName}` : "";
  const userName = userData && userData.body ? `${userData.body.userName}` : "";

  const handleUpdateUserName = () => {
    dispatch(updateUserName({ token, newUserName }))
      .then(() => dispatch(fetchUserData(token)))
      .catch((error) => {
        console.error("Error updating user name:", error);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    dispatch(setNewUserName(""));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const save = (e) => {
    e.preventDefault();

    if (newUserName === "") {
      return;
    }
    handleUpdateUserName();

    closeModal();
  };

  const handleNewUserName = (e) => {
    dispatch(setNewUserName(e.target.value));
  };

  return (
    <div className="header">
      <h1>
        Welcome back <br /> {firstName} {lastName} !
      </h1>
      <button className="edit-button" onClick={openModal}>
        Edit Name
      </button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        save={save}
        newUserName={newUserName}
        handleNewUserName={handleNewUserName}
        userName={userName}
        firstName={firstName}
        lastName={lastName}
      />
    </div>
  );
}

const ACCOUNTS = [
  {
    id: 0,
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: 1,
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];
function Accounts({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

function User() {
  return (
    <main className="main bg-dark">
      <Header />
      <h2 className="sr-only">Accounts</h2>
      {ACCOUNTS.map((account) => (
        <Accounts key={account.id} {...account} />
      ))}
    </main>
  );
}
export default User;
