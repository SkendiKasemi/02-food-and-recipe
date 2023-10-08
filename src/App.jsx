import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import FoodItem from './pages/FoodItem/FoodItem';
import FoodCategoryPage from './pages/FoodCategoryPage/FoodCategoryPage';
import CountryFoodItem from './pages/CountryFoodItem/CountryFoodItem';
import AboutUs from './components/AboutUs/AboutUs';
import Favorites from './pages/Favorites/Favorites';
import Footer from './components/Footer/Footer';

import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path='/item?' element={<FoodItem />} />
          <Route path='/foodCategory?' element={<FoodCategoryPage />} />
          <Route path='/country?' element={<CountryFoodItem />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
