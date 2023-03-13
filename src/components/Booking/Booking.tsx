import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Booking } from '../../models/IBooking';

const BookingForm: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const TotalTables = 15;

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get<Booking[]>(
        'https://school-restaurant-api.azurewebsites.net/booking/restaurant/6408978376187b915f68e168'
      );
      setBookings(response.data);
      console.log(response.data);
    };
    fetchBookings();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(bookings);
    const matchingBookings = bookings.filter(
      (booking: Booking) => booking.date === date && booking.time === time
    );

    const totalBookings = matchingBookings.length;
    console.log(matchingBookings);

    if (totalBookings < TotalTables) {
      try {
        const response = await axios.post(
          'https://school-restaurant-api.azurewebsites.net/booking/create',
          {
            restaurantId: '6408978376187b915f68e168',
            date,
            time,
            numberOfGuests,
            customer: {
              name,
              lastname,
              email,
              phone
            }
          }
        );
        console.log(response.data);
        alert('Bokning skapad!');
      } catch (error) {
        console.error(error);
        alert('Något gick fel');
      }
    } 
  };

  const handleSearch = () => {
    const matchingBookings = bookings.filter(
      (booking: Booking) => booking.date === date && booking.time === time
    );
    const totalBookings = matchingBookings.length;
    console.log(matchingBookings);

    if (totalBookings <= TotalTables) {
      setShowBookingForm(true);
    } else {
      alert('Det finns tyvärr inga lediga bord på denna tidpunkt.');
    }
  };

  return (
    <>
      <label htmlFor="date">Datum:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Tid:</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
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
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
          />
        
          <button onClick={handleSearch}>Sök lediga bord</button>
        
          {showBookingForm && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Namn:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
        
              <label htmlFor="lastname">Efternamn:</label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
        
              <label htmlFor="email">E-post:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
        
              <label htmlFor="phone">Telefonnummer:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button type="submit">Boka</button>
            </form>
          )}
        </>
        );
        };
        
        export default BookingForm;
