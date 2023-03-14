import axios from "axios";

export const removeBooking = (id : string) => {
  axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/` + id)
    .then(response => {
      console.log('Borttagen:', response.data);
    })
    .catch(error => {
      console.error('Något gick fel:', error);
    });

    alert('Bookning borttagen')
}