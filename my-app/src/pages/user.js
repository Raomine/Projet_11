import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../services/authUser";
import { update } from "../services/authProfile";

function Header() {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState(userName);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    } else {
      getUserData(token)
        .then((userData) => {
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setUserName(userData.userName);
        })
        .catch((error) => {
          console.error(
            "Échec de la récupération des données de l'utilisateur :",
            error,
          );
        });
    }
  }, [token, navigate]);

  const openModal = () => {
    setIsModalOpen(true);
    setNewUserName(userName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const save = (e) => {
    e.preventDefault();
    if (newUserName === "") {
      return;
    }
    update(token, newUserName)
      .then((updatedData) => {
        setUserName(newUserName);
        closeModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="header">
      <h1>
        Welcome back <br /> {firstName} {lastName} !
      </h1>
      <button className="edit-button" onClick={openModal}>
        Edit Name
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Name</h2>
            <form onSubmit={save}>
              <label htmlFor="userName">
                New Username:
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder={userName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </label>
              <label htmlFor="firstName">First Name :</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={firstName}
                disabled
              />
              <label htmlFor="lastName">Last Name :</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={lastName}
                disabled
              />
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
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
