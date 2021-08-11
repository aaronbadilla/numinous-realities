import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import Footer from './components/footer/footer.component.jsx'
import Gallery1 from './pages/gallery-1/gallery-1.component.jsx'
import Gallery2 from './pages/gallery-2/gallery-2.component.jsx'


const App = () => {
  

    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/numinous-realities/' component={Gallery1}/>
        <Route exact path='/gallery2' component={Gallery2}/>
      </Switch>
      <Footer/>
      </div>
  
    );

}

export default App;
