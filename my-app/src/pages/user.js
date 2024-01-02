import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userdata } from "../services/authUser";

function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    } else {
      userdata(token)
        .then((userData) => {
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
        })
        .catch((error) => {
          console.error(
            "Échec de la récupération des données de l'utilisateur :",
            error,
          );
        });
    }
  }, [token, navigate]);

  return (
    <div className="header">
      <h1>
        Welcome back <br /> {firstName} {lastName} !
      </h1>
      <button className="edit-button">Edit Name</button>
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
