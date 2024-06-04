// for stopping unnecessary passing of props from parent to child component we use context API

// (1) create usercontext.js file
// -> createContext
// -> store it inside variable and throw it

// (2) context gives you provider as it is giving only variable to us and we wrap up all components inside this provider to give access to state to all 
// components. Provider provides data.

// (3) Then we'll make a provider here UserContextProvider.jsx

// (4) At the time of defining provider we also need to mention the values which we want to give access to components.

import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import './App.css'

function App() {
  return (
    <UserContextProvider>
      <h1> Context in React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
