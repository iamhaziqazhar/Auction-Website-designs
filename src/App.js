import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import BrowseByCategory from "./Components/BrowseByCategory";
import FeaturedAuctions from "./Components/FeaturedAuctions";
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "./Components/SignupPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import NavbarSignuppage from './Components/NavbarSignuppage';

const auctions = [
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLvXuQsCiguydVu9xUtG6gmfhlUd48PoieQ&s", Title: "1969 Chevrolet Camaro SS", Bid: "$75,500", TimeRemaining: "2d 14h 22m" },
  { img: "https://i.ytimg.com/vi/4AYrmTCnRwg/maxresdefault.jpg", Title: "Modern Villa in Beverly Hills", Bid: "$12,250,000", TimeRemaining: "15d 8h 5m" },
  { img: "https://images.ctfassets.net/5vy1mse9fkav/B9IHmgQQvskImiKUQl0uo/218c23610c8b0dd4b0d597e6fd43f4e0/icon-fbgg-mc.jpg", Title: "Harley Davidson Fat Boy", Bid: "$18,500", TimeRemaining: "1d 5h 44m" },
  { img: "https://www.boattrader.com/research/files/donzi-41-gt.jpg", Title: "Luxury Speed Boat", Bid: "$250,000", TimeRemaining: "6d 2h 15m" },
  { img: "https://m.media-amazon.com/images/I/71KSLguDwNL._AC_SL1500_.jpg", Title: "Rolex Submariner 2023", Bid: "$9,800", TimeRemaining: "18h 34m" },
  { img: "https://39841271.fs1.hubspotusercontent-na1.net/hubfs/39841271/N1759C-WebRes-1.jpg", Title: "Private Jet Falcon X", Bid: "$3,800,000", TimeRemaining: "28d 4h 10m" },
  { img: "https://i.ebayimg.com/images/g/YBUAAeSw8floZcO1/s-l400.jpg", Title: "Vintage Oil Painting 1890", Bid: "$74,200", TimeRemaining: "3d 19h" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLvXuQsCiguydVu9xUtG6gmfhlUd48PoieQ&s", Title: "Royal Luxury Yacht", Bid: "$8,900,000", TimeRemaining: "12d 9h" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_CjL4jtsSOWYdGYZ6SZ0a5JsLyUVR5yjnQ&s", Title: "24K Gold Bar", Bid: "$45,000", TimeRemaining: "6d 21h" },
  { img: "/images/mansion.jpeg", Title: "European Palace Mansion", Bid: "$16,400,000", TimeRemaining: "32d 12h" },
];

function HomePage() {
  return (
    <>
     
      <Navbar img="/HT LOGO PNG.png" title="Hammers & Tongues Logo" /> 
      <HeroSection />
      <BrowseByCategory />
      <FeaturedAuctions data={auctions} />
            <Footer />

    </>
  );
}

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/signup" element={
  <>
    <NavbarSignuppage img="/HT LOGO PNG.png" title="Hammers & Tongues Logo" />
    <SignupPage />
  </>
} />
       
      </Routes>
       </Router>
  );
}

export default App;