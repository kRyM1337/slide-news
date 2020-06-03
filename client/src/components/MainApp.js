import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from './static/Header.js'
import Footer from './static/Footer.js'
import Intro from './static/Intro.js'
import News from './News.js'
import Customize from './Customize.js'
import {createTimeline, editTimeline} from '../animation/introSequence.js'
//@TO-DO make redirects carry a message about why it's being redirected

class MainApp extends Component {
   componentDidMount() {
      let intro = createTimeline()
      const elements = [
         'header > div',
         '#slide-hero > img',
         '#slide-hero > a',
         '#about-row',
         '#powered-by',
         '#icons-by'
      ]
      editTimeline(intro, elements)
   }
   render() {
      return (
         <Router forceRefresh={true}>
            <Switch>
               <Route exact path='/'>
                  {localCheck() ? <Redirect exact from='/' to='/news' /> : <Home />}
               </Route>
               <Route exact path='/customize' component={Customize}>
                  {localCheck() ? <Redirect exact from='/customize' to='/news' /> : <Customize />}
               </Route>
               <Route exact path='/news' component={News}>
                  {!localCheck() ? <Redirect exact from='/news' to='/' /> : <News />}
               </Route>
            </Switch>
         </Router>
      )
   }
}

const Home = () => (
   <React.Fragment>
      <Header />
      <Intro />
      <Footer />
   </React.Fragment>
)

function localCheck() {
   const localOptions = JSON.parse(window.localStorage.getItem('myNewsOptions'))
   if (localOptions === null || localOptions.id === null) {
      return false
   }
   return true
}

export default MainApp
