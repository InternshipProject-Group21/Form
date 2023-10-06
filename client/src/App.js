// src/App.js
import React from 'react';
import RequirementForm from './components/RequirementForm';

function App() {
  return (
    <div className="App">
      <RequirementForm />
    </div>
  );
}

export default App;


/*
// src/App.js (Updated)
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RequirementForm from './components/RequirementForm';
import SubscribeForm from './components/SubscribeForm';
import AddProgram from './components/AddProgram';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/subscribe">Subscribe Us</Link>
            </li>
            <li>
              <Link to="/add-program">Add Funding Program</Link>
            </li>
          </ul>
        </nav>

        <Switch>
//          <Route path="/" exact component={RequirementForm} />
//          <Route path="/subscribe" component={SubscribeForm} />

//           <Route path="/add-program" component={AddProgram} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

//export default App;
*/