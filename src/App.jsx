
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css';

function HomePage() {
  // ... same code as above
}

function OtherPage() {
  return <div>Place holder page</div>;
}

function SearchPage() {
  return <div>This is the search page.</div>;
}
function LoginPage() {
  return <div>This is the login page.</div>;
}

function LogoutPage() {
  return <div>You have been logged out.</div>;
}

function SignUpPage() {
  return <div>This is the sign-up page.</div>;
}

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link> {' | '}
          <Link to="/otherPage">Other Page</Link> {' | '}
          <Link to="/search">Search</Link> {' | '}
          <Link to="/login">Login</Link> {' | '}
          <Link to="/logout">Log Out</Link> {' | '}
          <Link to="/signUp">Sign Up</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/otherPage" element={<OtherPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Added login route */}
          <Route path="/logout" element={<LogoutPage />} /> {/* Added logout route */}
          <Route path="/signUp" element={<SignUpPage />} /> {/* Added sign-up route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
