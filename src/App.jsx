import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <section>
        <About />
      </section>
    </>
  );
}

export default App;
