import React, {Component} from 'react';
import HomePage from '../HomePage/HomePage';
import Contact from '../Contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '../../components/Header';


class Main extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
                <Switch>
                    <Route path='/home' component={() => <HomePage />}/>
                    <Route path='/contact' component={() => <Contact/>}/>
                    <Redirect to="/home"/>
                </Switch>
        )
    }
}

export default Main;