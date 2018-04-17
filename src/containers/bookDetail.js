import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class BookDetail extends React.Component {
    render() {
        return (<div className='book-details'>
            <h1>Book Details</h1>
        </div>);
    }
}

const mapStateToProps = state => ({
    routing: state.routing
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookDetail)
