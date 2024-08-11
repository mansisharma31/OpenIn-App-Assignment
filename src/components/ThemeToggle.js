import './ThemeToggle.css';
import sun from '../Assets/Images/tabler-icon-sun.png';
import moon from '../Assets/Images/tabler-icon-moon.png';
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="light-dark">
       <div>
         <input
           type="checkbox"
           className="checkbox"
           id="checkbox"
          //  checked={isDarkMode}
           onChange={toggleTheme}
         />
         <label htmlFor="checkbox" className="checkbox-label">
           <img className="sun" src={sun} alt="Sun Logo" />
           <img className="moon" src={moon} alt="Moon Logo" />
           <span className="ball"></span>
         </label>
       </div>
     </div>
  );
};

export default ThemeToggle;



// import React, { useState } from 'react';
// import sun from '../Assets/Images/tabler-icon-sun.png';
// import moon from '../Assets/Images/tabler-icon-moon.png';
// import './ThemeToggle.css'; // Make sure to add your CSS styles here

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle('dark', !isDarkMode);
//     document.body.classList.toggle('light', isDarkMode);
//   };

//   return (
//     <div className="light-dark">
//       <div>
//         <input
//           type="checkbox"
//           className="checkbox"
//           id="checkbox"
//           checked={isDarkMode}
//           onChange={toggleDarkMode}
//         />
//         <label htmlFor="checkbox" className="checkbox-label">
//           <img className="sun" src={sun} alt="Sun Logo" />
//           <img className="moon" src={moon} alt="Moon Logo" />
//           <span className="ball"></span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ThemeToggle;
