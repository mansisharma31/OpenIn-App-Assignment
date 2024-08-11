//import logo from './logo.svg';
//import './App.css';
// import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';
import './index.css';
import Home from './screens/Home/Home.js';
import Dashboard from './screens/Dashboard/Dashboard.js';
import Uploaded from './screens/Uploaded/Uploaded.js';
import Remove from './screens/Remove/Remove.js';
// import ThemeToggle from './components/ThemeToggle.js';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";

function App() {
  // <div className="min-h-screen">
  //     <header className="p-4">
        //<ThemeToggle />
    //   </header>
    //   <main className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    //     <h1 className="text-2xl font-bold">Hello, World!</h1>
    //     <p>This is a simple dark/light mode toggle example for the entire page.</p>
    //   </main>
    // </div>
  return (
    <Router>  
      
      <div>
      {/* <header className="p-4">
        <ThemeToggle />
      </header> */}
        <Routes>
            {/* <Route path="/" component={Home} />
            <PrivateRoute path="/" component={Login} />
            <Navigate from="/" to="/dashboard" /> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/uploaded" element={<Uploaded/>} />
          <Route exact path="/remove" element={<Remove/>} />
          {/* <Route exact path="/" element={<Dashboard/>} /> */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
