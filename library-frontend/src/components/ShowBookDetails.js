import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const ShowBookDetails = (props) => {
    const [book, setBook] = useState({})

    useEffect(() => {
        axios
        .get('http://localhost:8082/api/books/' + props.match.params.id)
        .then(res => setBook(res.data))
        .catch(err => console.log('Error in ShowBookDetails'));
    }, [props.match.params.id]);

    const deleteClick = () => {
      axios
        .delete('http://localhost:8082/api/books/' + book._id)
        .then(res => {
          props.history.push("/");
        })
        .catch(err => console.log("Error in ShowBookDetails_deleteClick"))
    }

    let BookItem =
    <div>
        <table className="table table-hover table-dark">
            {/* <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>*/}
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Title</td>
                    <td>{ book.title }</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Author</td>
                    <td>{ book.author }</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th>ISBN</th>
                    <td>{ book.isbn }</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <th>Publisher</th>
                    <th>{ book.publisher }</th>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <th>Published Date</th>
                    <th>{ book.published_date }</th>
                </tr>
                <tr>
                    <th schope="row">6</th>
                    <th>Description</th>
                    <th>{ book.description }</th>
                </tr>
            </tbody>
        </table>
    </div>

    return (
        <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={deleteClick}>
                Delete Book
              </button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    )
}

export default ShowBookDetails;