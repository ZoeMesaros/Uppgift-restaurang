import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "./App.scss";

function App() {
  //_______________________________________________HÄMTA RESTURANG_______________________________________________________
  // axios
  //   .get(
  //     "https://school-restaurant-api.azurewebsites.net/restaurant/6408978376187b915f68e168"
  //   )
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });

  //_______________________________________________SKAPA BOKING_______________________________________________________

  //   axios.post('https://school-restaurant-api.azurewebsites.net/booking/create', {
  //   "restaurantId": "6408978376187b915f68e168",
  //   "date": "2022-01-01",
  //   "time": "18:00",
  //   "numberOfGuests": 7,
  //   "customer": {
  //   "name": "Franzén",
  //   "lastname": "Sebastian",
  //   "email": "someone@somedomain.com",
  //   "phone": "070-1112233"
  // }
  // })
  // .then(response => {
  //   console.log(response.data.insertedId
  //     );
  // })
  // .catch(error => {
  //   console.error(error);
  // });

    //_______________________________________________HÄMTA BOKING_______________________________________________________



  axios.get(
    "https://school-restaurant-api.azurewebsites.net/booking/640998d376187b915f68e17b"
  )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  return (
    <>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
