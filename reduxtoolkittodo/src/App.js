// Redux is a state management library and is compatible with many js libraries.

// Flux developed by Facebook due to their state management problem.

// Redux is derived from flux having single source of truth store for data store and access. 

// State has to be read only, i.e you should never modify or mutate your state. All changes to state must done via functions(pure functions or reducers).

// [A] Store : A single source of truth (kind of repository) from where all data should be kept and fetched. Inside store there are many mini stores.

// [B] Reducers: All the updates inside store have been done by reducers.

// Below both components are part of react.
// [C] useSelector : To select any value from store

// [D] useDispatch : To send any value to store.  

// first thing to do is create store. Next create reducers, here referred as slices. After it we have access to state inside of any components.

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
    </div>
  );
}

export default App;
