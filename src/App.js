import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import AuthHoc from "./hoc/Auth";
import ErrorBoundary from "./hoc/ErrorBoundary";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={() => setIsAuthenticated(true)} />

          <ErrorBoundary>
              <AuthHoc isAuthenticated={isAuthenticated}>
                  <p>Success</p>
              </AuthHoc>
          </ErrorBoundary>

      </header>
    </div>
  );
}

export default App;
