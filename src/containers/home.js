import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Header, Input, Button, List, Icon} from 'semantic-ui-react';
import {fetchBooks, addToMyBooks} from '../actions';
import {parseBooksFromGoogle} from '../utils/parseData';
import {BASE_URL} from '../constants';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {searchString: ''}
    }

    handleInputChange(e, data) {
        this.setState({searchString: data.value});
    }

    handleSearch() {
        let {searchString} = this.state;
        searchString.replace(/ /g, '+');

        searchString !== '' && this.props.fetchBooks(`${BASE_URL}${searchString}`)
    }

    handleAddBook(book) {
        this.props.addToMyBooks(book);
    }

    render() {
        const {books = []} = this.props;
        const parsedBooks = parseBooksFromGoogle(books);

        return (<div>
            <Header size='large'>Homepage</Header>
            <Input placeholder='Search...' onChange={this.handleInputChange}/>
            <Button onClick={this.handleSearch}>Search</Button>
            <List>
                {parsedBooks.map((book, index) => {
                    return <List.Item key={index}>{book.title}
                        <Icon className='plus-icon'
                              onClick={this.handleAddBook.bind(this, book)} name='plus'/></List.Item>;
                })}
            </List>
        </div>);
    }
}

const mapStateToProps = state => ({
    books: state.books.googleBooks
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBooks: fetchBooks,
    addToMyBooks: addToMyBooks
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);