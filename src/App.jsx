import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { AdvanceLifeSupport, Home, Mortuary, ScheduleAmbulance } from './pages';
import { BasicLifeSupport, Emergency, } from './pages';
import BookingPage from './pages/BookingPage/BookingPage';
import ModalState from './context/Modals/modelContext.jsx';
import ScrollState from './context/scroll/scroll.jsx';
import './App.css';

function App() {
  return (
      <ScrollState>
        <ModalState>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/emergency' element={<Emergency />} />
          <Route exact path='/advancelifesupport' element={<AdvanceLifeSupport />} />
          <Route exact path='/transport/basiclifesupport' element={<BasicLifeSupport />} />
          <Route exact path='/transport/mortuary' element={<Mortuary />} />
          <Route exact path='/transport/schedule' element={<ScheduleAmbulance />} />
          <Route exact path='/booking' element={<BookingPage />} />
        </Routes>
      </Router>
        </ModalState>
      </ScrollState>
  );
}

export default App;
