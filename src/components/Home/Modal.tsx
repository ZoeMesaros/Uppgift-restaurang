import "./Modalstyles.scss";

export default function Modal({ open, onClose }: any) {
  if (!open) return null;
  const handleClose = (event: { preventDefault: () => void }) => {
    onClose();
    event.preventDefault();
  };
  return (
    <>
      <div className="overlay" />
      <div className="modalStyle">
        <h3>Användarvillkor</h3>
        <form onSubmit={handleClose}>
          <p>
            Vi hanterar personuppgifter enligt GDPR för att <br /> underlätta
            användarupplevelsen
          </p>
          <input type="checkbox" name="check" required />
          <label className="checkLabel">Jag godkänner användarvillkoren</label>
          <br />
          <button className="agreed" onSubmit={handleClose}>
            Jag samtycker
          </button>
          <button>Läs mer</button>
        </form>
      </div>
    </>
  );
}
