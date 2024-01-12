import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserData, update } from "../services/user";
import Modal from "../contents/modal";

function Header() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const [user, setUser] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  const { firstName, lastName, userName } = user?.body ?? {};

  const isLoggedin = !!token;

  useEffect(() => {
    isLoggedin || navigate("/sign-in");
  }, [isLoggedin]);

  useEffect(() => {
    if (!token) return;
    getUserData(token).then(setUser);
  }, [token, getUserData]);

  const handleUpdateUserName = async () => {
    try {
      await update(token, newUserName);
      await getUserData(token);
    } catch (error) {
      console.error("Error updating user name:", error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setNewUserName("");
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

  const handleNewUserName = (value) => {
    setNewUserName(value);
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
