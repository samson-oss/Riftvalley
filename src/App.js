import React from "react";
import Header from "./components/Navbar/Header";
import Hero from "./components/HeroSection /Hero";
import GlobalStyles from "./theme/GlobalStyle";
import About from "./components/About/About";
import Processing from "./components/ Processing/ Processing";
import Tobacco from "./components/Tobacco /Tobacco ";
import Environmental from "./components/Environmental/Environmental";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Processing />
      <Tobacco />
      <Environmental />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
