import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserPage from './pages/userPages/userDashboard';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<UserPage/>} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
