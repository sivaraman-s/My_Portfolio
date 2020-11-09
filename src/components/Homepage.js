import { render } from '@testing-library/react'
import React,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import  {Switch,Route,Redirect}      from 'react-router-dom'

class Homepage extends Component{
    render(){
        return(
            <>
                <Header />
                <Switch>
                    <Route  path="/home" component={About} />
                    <Route  path="/Education" component={Education} />
                    <Route  path="/Skills" component={Skills} />
                    <Route  path="/Projects" component={Projects} />
                    <Route  path="/Feedback" component={Contact} />
                    <Redirect to="/home" /> 
                </Switch>

                <Footer />
            </>


        )
    }
}

export default Homepage