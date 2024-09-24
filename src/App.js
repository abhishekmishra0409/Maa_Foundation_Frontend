import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import Events from './Components/Events/Events';
import Gallery from './Components/Gallery/Gallery';
import Blogs from './Components/Blog/Blogs';
import BlogOpenPage from './Components/Blog/BlogOpenPage';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import EventDetail from "./Components/Events/EventDetail";
import Signup from './Components/Login/Signup';
import Payment from './Components/Home/Payment';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log('Current path:', location.pathname);
  }, [location]);

  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className='bg-secondary-light font-lato flex flex-col min-h-screen'>
      {/* <h1>Hello</h1> */}
      {!isLoginOrSignup && <header className='sticky top-0 z-20'>
        <Header />
      </header>}
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventid" element={<><EventDetail /></>} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<BlogOpenPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isLoginOrSignup && <footer className='bg-secondary'>
        <div className="py-10 mx-20 flex justify-between gap-4 text-gray-dark font-light">
          <Footer />
        </div>
      </footer>}
    </div>
  );
}

export default App;