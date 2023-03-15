import { Outlet } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import { Header } from "./components/Nav/Header";
import { Footer } from "./components/Nav/Footer";

function App() {
  // const API = "https://school-restaurant-api.azurewebsites.net";

  //_______________________________________________HÄMTA RESTURANG_______________________________________________________
  // axios
  //   .get(
  //     `${API}/restaurant/6408978376187b915f68e168`
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

  //   axios.post(`${API}/booking/create`, {
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

  // axios.get(
  //   `${API}/booking/640998d376187b915f68e17b`
  // )
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // });

  //_______________________________________________HÄMTA BOKINGAR FÖR HELA RESTURANGEN ___________________________________________

  // axios
  //   .get(`${API}/booking/restaurant/6408978376187b915f68e168`)
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });

  //_______________________________________________TA BORT EN BOKING ___________________________________________

  // axios.delete(`${API}/booking/delete/6409995176187b915f68e17d`)
  //   .then(response => {
  //     console.log('Item deleted:', response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error deleting item:', error);
  //   });

  //__________________________________________________________________________________________

  return (
    <>
      <Header />
      <main className="App">
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}

export default App;
