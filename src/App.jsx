import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Welcome to Todo Hero</h1>
        <p>Organize your tasks effortlessly.</p>
        <a href="#signup" className="btn">Get Started</a>
      </header>

      <section id="signup" className="signup">
        <h2>Join the Beta</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      <footer>
        &copy; 2025 Todo Hero. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
