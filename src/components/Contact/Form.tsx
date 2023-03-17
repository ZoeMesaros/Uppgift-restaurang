import "./Form.scss";
import Swal from "sweetalert2";

export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire("Ditt meddelande har mottagits");
  };
  return (
    <>
      <div className="container">
        <form id="contact" onSubmit={handleSubmit}>
          <h3>Kontakta oss</h3>
          <h4>Vi svarar så snabbt vi kan!</h4>
          <fieldset>
            <input placeholder="Namn" type="text" required />
          </fieldset>
          <fieldset>
            <input placeholder="Email" type="email" required />
          </fieldset>
          <fieldset>
            <input
              type="tel"
              required
              pattern="[0-9]{3} - [0-9]{3} [0-9]{2} [0-9]{2}"
              placeholder="Telefon XXX - XXX XX XX"
            />
          </fieldset>
          <fieldset>
            <textarea placeholder="Ditt meddelande..." required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit">
              Skicka
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};
