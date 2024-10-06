
import './App.css';
import NavBar from './Component/navBar';
import Main from './Component/main';
import About from './Component/about';
import ServicesSection from './Component/ServicesSection';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';
function App() {
  return (<>
    <NavBar></NavBar>
    <Main></Main>
    <About></About>
    <ServicesSection></ServicesSection>
    <ContactUs></ContactUs>
    <Footer></Footer>
  </>
  );
}
export default App;
