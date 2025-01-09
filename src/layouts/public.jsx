import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
        { children }
      <Footer />
    </>
  )
}
