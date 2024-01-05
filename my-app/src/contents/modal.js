export const ModalForm = ({
  userName,
  firstName,
  lastName,
  newUserName,
  setNewUserName,
  closeModal,
  save,
}) => {
  return (
    <form onSubmit={save}>
      <label htmlFor="userName">
        New Username:
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder={userName}
          value={newUserName}
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
      <button type="submit" onClick={save}>
        Save
      </button>
    </form>
  );
};

function Modal({
  userName,
  firstName,
  lastName,
  newUserName,
  setNewUserName,
  closeModal,
  save,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Name</h2>
        <ModalForm
          userName={userName}
          firstName={firstName}
          lastName={lastName}
          newUserName={newUserName}
          setNewUserName={setNewUserName}
          closeModal={closeModal}
          save={save}
        />
      </div>
    </div>
  );
}

export default Modal;
