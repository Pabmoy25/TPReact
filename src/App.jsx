import "bootstrap/dist/css/bootstrap.min.css";
import Ejercicio2 from "./components/Ejercicio2y3";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="container mt-5 mainpage text-center">
        <Ejercicio2 ejercicio2="my friend!"></Ejercicio2>
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
