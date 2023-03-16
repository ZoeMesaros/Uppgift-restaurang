import { FormEvent } from "react";
import "./Modalstyle.scss";

export default function Modal({ open, onClose }: any) {
  if (!open) return null;
  const handleChange = (e: { target: { checked: any } }) => {
    localStorage.setItem("checkbox", `${e.target.checked}`);
  };
  const handleClose = (event: FormEvent) => {
    event.preventDefault();
    onClose();
  };
  return (
    <>
      <div className="overlay" />
      <div className="modalStyle">
        <h3>Användarvillkor</h3>
        <form onSubmit={handleClose}>
          <p>
            Vi hanterar personuppgifter enligt GDPR för <br /> en bättre
            användarupplevelse.
          </p>
          <label className="switch">
            <input
              type="checkbox"
              name="gdprChecked"
              required
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </label>
          <label className="checkLabel">Jag godkänner användarvillkoren</label>
          <br />
          <button className="agreed">Jag samtycker</button>
        </form>
      </div>
    </>
  );
}
