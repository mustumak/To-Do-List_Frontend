import {Routes, Route} from 'react-router';
import Home from './routes/home/home.component';
import Dashboard from './routes/Dashboard/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
