import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../services/user";
import { setToken, setUserData } from "../stores/user";
//mport { update } from "../services/user";
import Modal from "../contents/modal";
//import { useSelector, useDispatch } from "react-redux";
//import { setToken, setUserData } from "../stores/user";

function Header() {
  /* const dispatch = useDispatch();
  const { token, userData } = useSelector((state) => state.user);

  useEffect(() => {
    // Appel de votre fonction pour récupérer les données utilisateur
    getUserData(token)
      .then((data) => {
        // Utilisation des actions pour mettre à jour l'état Redux
        dispatch(setToken(userData.token));
        dispatch(setUserData(userData.data));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error,
        );
      });
  }, [dispatch, token]);*/
  /*const [isModalOpen, setIsModalOpen] = useState(false);

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
*/
  return (
    <div className="header">
      <div>
        <h1>User Data:</h1>
        <p>Token: {token}</p>
        <p>User Data: {JSON.stringify(userData)}</p>
      </div>
      <h1>
        Welcome back <br /> !
      </h1>
      {/*
      <button className="edit-button" onClick={openModal}>
        Edit Name
      </button>
      {isModalOpen && (
        <Modal
          userName={userName}
          firstName={firstName}
          lastName={lastName}
          newUserName={newUserName}
          setNewUserName={setNewUserName}
          closeModal={closeModal}
          //save={save}
        />
      )}*/}
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
