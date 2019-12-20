import React, { Component } from 'react';

class ThemeToggle extends Component {
  state = {
    mode: '🌛',
  };

  render() {
    return (
      <span
        style={{
          cursor: 'pointer',
          fontSize: '18px',
          userSelect: 'none',
        }}
        role="img"
        aria-label="dark"
        onClick={this.toggleTheme}
      >
        {this.state.mode}
      </span>
    );
  }

  componentDidMount = () => {
    const mode = localStorage.getItem('mode');
    mode === 'dark' ? document.body.classList.add('dark') : undefined;
  };

  toggleTheme = () => {
    const isDarkMode = document.body.classList.contains('dark');
    if (isDarkMode) {
      document.body.classList.remove('dark');
      this.setState({
        mode: '🌛',
      });
      localStorage.setItem('mode', 'light');
    } else {
      document.body.classList.add('dark');
      this.setState({
        mode: '🌞',
      });
      localStorage.setItem('mode', 'dark');
    }
  };
}

export default ThemeToggle;
