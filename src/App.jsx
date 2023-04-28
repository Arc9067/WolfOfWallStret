import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Picture from "./Components/Picture/Picture";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <section>
        <About />
        <Picture />
      </section>
      <Footer />
    </>
  );
}

export default App;
