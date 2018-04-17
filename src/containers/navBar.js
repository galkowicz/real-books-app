import React from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Menu} from 'semantic-ui-react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}) {
        const pageMapper = {
            'Homepage': '/',
            'Your Books': '/books'
        };
        this.props.changePage(pageMapper[name]);
    }

    render() {
        const activeItem = this.props.routing.location.pathname;

        return (<Menu>
            <Menu.Item header>Real Books App</Menu.Item>
            <Menu.Item name='Homepage' active={activeItem === '/'} onClick={this.handleItemClick}/>
            <Menu.Item name='Your Books' active={activeItem === '/books'} onClick={this.handleItemClick}/>
        </Menu>);
    }
}

const mapStateToProps = state => ({
    routing: state.routing
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(`${page}`)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)
