const Modal = ({
  isModalOpen,
  closeModal,
  save,
  newUserName,
  handleNewUserName,
  userName,
  firstName,
  lastName,
}) => {
  return (
    isModalOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <form onSubmit={save}>
            <label htmlFor="userName">
              New Username:
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder={userName}
                value={newUserName}
                onChange={handleNewUserName}
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
    )
  );
};

export default Modal;
