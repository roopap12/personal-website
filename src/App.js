import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import EcommerceProjectPage from './Pages/EcommerceProjectPage';
import MeditationProject from './Pages/MeditationProject';
import ExobrainProject from './Pages/ExobrainProject';
import GetInTouchPage from './Pages/GetInTouchPage';
import AboutPage from './Pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/ecommerce-project" component={EcommerceProjectPage} />
          <Route path="/meditation-project" component={MeditationProject} />
          <Route path="/exobrain-project" component={ExobrainProject} />
          <Route path="/get-in-touch" component={GetInTouchPage} />
          <Route path="/about" component={AboutPage} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





