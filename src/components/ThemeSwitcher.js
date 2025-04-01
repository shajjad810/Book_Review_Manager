import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button
        className={`theme-button ${theme === 'light' ? 'active' : ''}`}
        onClick={() => toggleTheme('light')}
        title="Light Mode"
      >
        🌞
      </button>
      <button
        className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => toggleTheme('dark')}
        title="Dark Mode"
      >
        🌙
      </button>
      <button
        className={`theme-button ${theme === 'system' ? 'active' : ''}`}
        onClick={() => toggleTheme('system')}
        title="System Theme"
      >
        💻
      </button>
    </div>
  );
}

export default ThemeSwitcher; 