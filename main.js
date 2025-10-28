/*
  This wrapper function waits until the entire HTML document is loaded
  before running our JavaScript.
*/
document.addEventListener('DOMContentLoaded', () => {
  // Find the elements we need in the HTML
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  const rootElement = document.documentElement;

  // A function to apply the saved theme on page load
  const applyButtonState = () => {
    if (rootElement.classList.contains('dark-mode')) {
      themeToggleButton.classList.add('active');
     }
  };

  // The main function to handle the click event
  const toggleTheme = () => {
    // Add or remove the .dark-mode class from the <html> tag
    rootElement.classList.toggle('dark-mode');

    // Save the user's choice and update the button's active state
    if (rootElement.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggleButton.classList.add('active');
    } else {
      localStorage.setItem('theme', 'light');
      themeToggleButton.classList.remove('active');
    }
  };

  // Run the functions
  applyButtonState(); // Check the initial state to set the button correctly
  themeToggleButton.addEventListener('click', toggleTheme); // Listen for clicks


  // Active Nav Link
  // Get the current page's path
  const currentPath = window.location.pathname;

  // Find all the navigation links
  const navLinks = document.querySelectorAll('.nav-links a');

  // Loop through each link
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    // Compare the link's href to the current path
    // Also check if the path is "/" (root) and match it to "index.html"
    if (linkPath === currentPath || (currentPath === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
    }
  });
});

