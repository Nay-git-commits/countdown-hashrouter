import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; // Assuming you have standard CSS

// --- Component 1: The Countdown Home Page ---
const Home = () => {
  const [count, setCount] = useState(5); // Start at 5
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    // Logic: If count reaches 0, navigate away
    if (count === 0) {
      navigate('/welcome');
      return; 
    }

    // Logic: Decrease count by 1 every second
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Cleanup: Clear timeout if component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, [count, navigate]); // Effect runs whenever 'count' changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redirecting in...</h1>
      <div style={{ fontSize: '100px', fontWeight: 'bold', color: 'red' }}>
        {count}
      </div>
    </div>
  );
};

// --- Component 2: The Destination Page ---
const WelcomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎉 Welcome!</h1>
      <p>You have been successfully redirected.</p>
      <a href="#/">Go back to Countdown</a>
    </div>
  );
};

// --- Main App Component with HashRouter ---
function App() {
  return (
    // HashRouter is used specifically for GitHub Pages compatibility
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;