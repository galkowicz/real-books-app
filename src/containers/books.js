import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { List, Header } from 'semantic-ui-react';

class Books extends React.Component {
    render() {
        const {books = []} = this.props;

        return (<div>
            <Header size='large'>Your Books List</Header>
            <List>
                {books.map((book, index) => {
                    return <List.Item key={index}>{book}</List.Item>;
                })}
            </List>
        </div>);
    }
}

const mapStateToProps = state => ({
    books: state.myBooks
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);