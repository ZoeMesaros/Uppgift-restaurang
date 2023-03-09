import { useState } from "react";
import axios from "axios";
import "./Booking.scss";
import { IBookingForm } from "../../models/IBookingForm";

export default function BookingForm() {
  const initialBookingForm: IBookingForm = {
    restaurantId: "6408978376187b915f68e168",
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
  };

  const [bookingForm, setBookingForm] = useState<IBookingForm>(
    initialBookingForm
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://school-restaurant-api.azurewebsites.net/booking/create`,
        bookingForm
      );
      console.log(response.data.insertedId);
      setBookingForm(initialBookingForm);
      alert("Bokning klar");
    } catch (error) {
      console.error(error);
    }
  };

  const validTimes = ["18:00", "21:00"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingForm((prevBookingForm) => ({
      ...prevBookingForm,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingForm((prevBookingForm) => ({
      ...prevBookingForm,
      [name]: value,
    }));
  };

  const handleCustomerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setBookingForm((prevBookingForm) => ({
      ...prevBookingForm,
      customer: {
        ...prevBookingForm.customer,
        [name]: value,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Datum:
        <input
          type="date"
          name="date"
          value={bookingForm.date}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Tid:
        <select
          name="time"
          value={bookingForm.time}
          required
          onChange={handleSelectChange}
        >
          <option value="">Välj Tid:</option>
          {validTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        Antal gäster:
        <input
          type="number"
          required
          name="numberOfGuests"
          value={bookingForm.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Förnamn:
        <input
          type="text"
          name="name"
          required
          value={bookingForm.customer.name}
          onChange={handleCustomerChange}
        />
      </label>
      <label>
        Efternamn:
        <input
          type="text"
          required
          name="lastname"
          value={bookingForm.customer.lastname}
          onChange={handleCustomerChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          value={bookingForm.customer.email}
          onChange={handleCustomerChange}
        />
      </label>
      <label>
        Telefonnummer:
        <input
          type="tel"
          name="phone"
          required
          value={bookingForm.customer.phone}
          onChange={handleCustomerChange}
          pattern="[0-9]{3} - [0-9]{3} [0-9]{2} [0-9]{2}" 
          placeholder="XXX - XXX XX XX"
        />
      </label>
      <button type="submit" >Boka</button>
    </form>
  );
}
