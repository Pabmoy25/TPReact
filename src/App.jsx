import Ejercicio2 from "./components/Ejercicio2";
import "bootstrap/dist/css/bootstrap.min.css";
import Ejercicio3 from "./components/Ejercicio3";
import './App.css'
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <section className="container mt-5">
      <Ejercicio2 ejercicio2="my friend!"></Ejercicio2>
      <Ejercicio3 ejercicio3="(from changed state)"> </Ejercicio3>
    </section>
    <Footer></Footer>

    </>
  );
}

export default App;
