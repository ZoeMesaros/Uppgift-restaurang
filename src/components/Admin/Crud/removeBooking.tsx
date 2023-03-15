import axios from "axios";
import Swal from "sweetalert2";

export const removeBooking = (id : string) => {
  axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/` + id)
    .then(response => {
      console.log('Borttagen:', response.data);
    })
    .catch(error => {
      console.error('Något gick fel:', error);
    });

    Swal.fire('Bookning borttagen')
}