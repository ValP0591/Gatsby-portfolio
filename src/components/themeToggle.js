import React from 'react'
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaCloudSun } from 'react-icons/fa';

function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="dark-button">
          <input
            type="checkbox"
            id="toggle"
            onChange={e =>
              toggleTheme(e.target.checked ? "dark" : "light")
            }
            checked={theme === "dark"}
          />
          <label for="toggle">
            <FaCloudSun style={{
              fontSize: "30",
              color: 'var(--textTitle)',
              transition: 'color 0.2s ease-out, background 0.2s ease-out',
              cursor: 'pointer'
            }}
            />
          </label>
        </div>
      )}
    </ThemeToggler>
  )
}
export default ThemeToggle
