import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Samples from "./pages/Samples";
import LoadingScreen from './components/LoadScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching resources
    const fetchResources = async () => {
      // Perform your resource fetching logic here
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulating resource fetching delay

      setIsLoading(false);
    };

    fetchResources();
  }, []);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work-samples" element={<Samples />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;