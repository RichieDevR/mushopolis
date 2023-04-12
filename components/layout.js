import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"

export default function Layout({ children }) {
  return (
    <>
      <Header /> 
      <Hero/>
      {/* <main>{children}</main> */}
      <Footer/> 
    </>
  );
}
