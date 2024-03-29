import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { IBookingSide } from "../../models/IBookingSide";
import "./Booking.scss";

const BookingForm: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [bookings, setBookings] = useState<IBookingSide[]>([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);

  const TotalTables = 15;

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get<IBookingSide[]>(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6408978376187b915f68e168"
      );
      setBookings(response.data);
    };
    fetchBookings();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(bookings);
    const matchingBookings = bookings.filter(
      (booking: IBookingSide) => booking.date === date && booking.time === time
    );

    const totalBookings = matchingBookings.length;
    console.log(matchingBookings);

    if (totalBookings < TotalTables) {
      try {
        const response = await axios.post(
          "https://school-restaurant-api.azurewebsites.net/booking/create",
          {
            restaurantId: "6408978376187b915f68e168",
            date,
            time,
            numberOfGuests,
            customer: {
              name,
              lastname,
              email,
              phone,
            },
          }
        );
        console.log(response.data);
        Swal.fire("Bokning skapad för " + date + " " + time);
      } catch (error) {
        console.error(error);
        Swal.fire(
          "Något gick fel, dubbeloklla uppfifterna så att allt är korrekt"
        );
      }
    }
  };

  const handleSearch = () => {
    const matchingBookings = bookings.filter(
      (booking: IBookingSide) => booking.date === date && booking.time === time
    );
    const totalBookings = matchingBookings.length;
    console.log(matchingBookings);

    if (totalBookings < TotalTables) {
      setShowBookingForm(true);
    } else {
      Swal.fire("Det finns tyvärr inga lediga bord på denna tidpunkt.");
    }
  };

  const dateNow = new Date();

  let day = dateNow.getDate();
  let month = dateNow.getMonth() + 1;
  let year = dateNow.getFullYear();
  let currentDate = `${year}-0${month}-${day}`;

  return (
    <div className="booking-form">
      <label htmlFor="date">Datum:</label>
      <input
        type="date"
        id="date"
        value={date}
        min={currentDate}
        required
        onChange={(e) => setDate(e.target.value)}
        className="booking-form__input"
      />

      <label htmlFor="time">Tid:</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="booking-form__input"
        required
      >
        <option value="18:00">18:00</option>
        <option value="21:00">21:00</option>
      </select>

      <label htmlFor="numberOfGuests">Antal gäster:</label>
      <input
        type="number"
        id="numberOfGuests"
        min="1"
        max="6"
        required
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(Number(e.target.value))}
        className="booking-form__input"
      />

      <button className="booking-form__btn" onClick={handleSearch}>
        Sök
      </button>
      {showBookingForm && (
        <form className="booking-form__form" onSubmit={handleSubmit}>
          <h2 className="booking-form__h2">
            Bokning för {date} kl {time}
          </h2>
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="booking-form__input"
          />

          <label htmlFor="lastname">Efternamn:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            className="booking-form__input"
          />

          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="booking-form__input"
          />

          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="booking-form__input"
            pattern="[0-9]{3} - [0-9]{3} [0-9]{2} [0-9]{2}"
            placeholder="XXX - XXX XX XX"
          />
          <button type="submit" className="booking-form__btn">
            Skapa bokning
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
