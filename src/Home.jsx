
import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header/index.jsx";
import Hero from "./components/shared/Hero/index.jsx";
import Team from "./components/shared/Team/index.jsx";
import Author from "./pages/author/index.jsx";

function Home() {
  return (
    <>
      <Header />
      <Author />
      <Footer />
    </>
  )
}

export default Home;