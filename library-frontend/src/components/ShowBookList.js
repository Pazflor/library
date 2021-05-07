import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const ShowBookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8082/api/books')
        .then(res => setBooks(res.data))
        .catch(err => console.log('Error in ShowBookList'))
    }, [])

    console.log('PrintBook: ' + books);
    let bookList;

    if (!books) {
        bookList = "there is no books record..";
    } else {
        bookList = books.map((book, k) => 
            <BookCard book={book} key={k} />
        )
    }

    return (
        <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Internet Library</h2>
            </div>
            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <div className="list">
            {bookList}
          </div>
        </div>
      </div>
    )
}

export default ShowBookList;