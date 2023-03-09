import { useState } from "react";
import axios from "axios";
import './Booking.scss'
import { IBookingForm } from "../../models/IBookingForm";

export default function BookingForm() {
  const [bookingForm, setBookingForm] = useState<IBookingForm>({
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
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://school-restaurant-api.azurewebsites.net/booking/create`,
        bookingForm
      );
      console.log(response.data.insertedId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const validTimes = ["18:00", "21:00"];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Datum:
        <input
          type="date"
          name="date"
          value={bookingForm.date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Tid:
        <select name="time" value={bookingForm.time} onChange={handleSelectChange}>
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
          value={bookingForm.customer.name}
          onChange={handleCustomerChange}
        />
      </label>
      <label>
        Efternamn:
        <input
          type="text"
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
          value={bookingForm.customer.email}
          onChange={handleCustomerChange}
        />
      </label>
      <label>
        Telefonnummer:
        <input
          type="tel"
          name="phone"
          value={bookingForm.customer.phone}
          onChange={handleCustomerChange}
        />
      </label>
      <button type="submit">Boka</button>
    </form>
  );
}
