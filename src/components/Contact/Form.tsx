import "./Form.scss";

export const Form = () => {
  return (
    <>
      <div className="container">
        <form id="contact">
          <h3>Kontakta oss</h3>
          <h4>Vi svarar så snabbt vi kan!</h4>
          <fieldset>
            <input placeholder="Namn" type="text" required />
          </fieldset>
          <fieldset>
            <input placeholder="Email" type="email" required />
          </fieldset>
          <fieldset>
            <input placeholder="Telefon" type="tel" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Ditt meddelande..." required></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Skickar"
            >
              Skicka
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};
