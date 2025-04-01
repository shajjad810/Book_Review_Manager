import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Login from './components/Login';
import Signup from './components/Signup';
import ThemeSwitcher from './components/ThemeSwitcher';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import './styles.css';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="container">
        <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}>
          <div className="card">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" />;
};

function Header() {
  const { user, logout } = useAuth();
  
  return (
    <header className="header">
      <div className="container header-content">
        <h1>Book Review Manager</h1>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          {user && (
            <>
              <span className="text-white">Welcome, {user.username}!</span>
              <button onClick={logout} className="button button-secondary">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <main className="main-content">
                <div className="container">
                  <BookForm />
                  <BookList />
                </div>
              </main>
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
