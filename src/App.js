import './App.scss';
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import Footer from './components/footer/footer.component.jsx'
import Gallery1 from './pages/gallery-1/gallery-1.component.jsx'
import Gallery2 from './pages/gallery-2/gallery-2.component.jsx'
import Artist from './pages/artist/artist.component.jsx'
import About from './pages/about/about.component.jsx'


const App = () => {
  

    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Gallery1}/>
        <Route exact path='/gallery2' component={Gallery2}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/artist' component={Artist}/>
      </Switch>
      <Footer/>
      </div>
  
    );

}

export default App;
