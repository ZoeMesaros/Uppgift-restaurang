import "./Modalstyles.scss";

export default function Modal({ open, children, onClose, rememberUser }: any) {
  if (!open) return null;
  const handleClose = (event: { preventDefault: () => void }) => {
    onClose();
    event.preventDefault();
  };
  return (
    <>
      <div className="overlay" />
      <div className="modalStyle">
        <form onSubmit={handleClose}>
          {children}
          <h3>Användarvillkor</h3>
          <p>
            Vi samlar in användaruppgifter i enlighet med gdpr för att öka
            användarvänligheten.
          </p>
          <input type="checkbox" name="check" required />
          <label className="checkLabel">Jag godkänner användarvillkoren</label>
          <button onSubmit={handleClose}>Jag samtycker</button>
          <button>Läs mer</button>
        </form>
      </div>
    </>
  );
}
