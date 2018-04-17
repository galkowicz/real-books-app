import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/home';
import Books from './containers/books';
import BookDetail from './containers/books';
import NavBar from './containers/navBar';
import {connect} from "react-redux";
import {Container} from 'semantic-ui-react';
import './App.css';

class App extends Component {
    render() {
        return (<div>

            <Container className='body'>
                <NavBar />
                <Route exact path='/' component={Home}/>
                <Route path={`/books`} component={Books}/>
                <Route path={`/bookDetail`} component={BookDetail}/>
            </Container>
        </div>);
  }
}

const mapStateToProps = state => ({
    routing: state.routing
});

export default connect(mapStateToProps)(App);