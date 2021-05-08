import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const CreateBook = () => {
    const [book, setBook] = useState({
        title: '',
        isbn: '',
        author: '',
        description: '',
        published_date: '',
        publisher: ''
    });

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: book.title,
            isbn: book.isbn,
            author: book.author,
            description: book.description,
            published_date: book.published_date,
            publisher: book.publisher
        }

        console.log(book);
        axios
        .post('http://localhost:8082/api/books', data)
        .then(res => {
            setBook({
                title: '',
                isbn: '',
                author: '',
                description: '',
                published_date: '',
                publisher: '' 
            })
        })
        .catch(err => {
            console.log("Error in CreateBook!");
        })
        console.log(data);
    }

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show Book List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">
                            Create new book
                        </p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                type='text'
                                placeholder='Book Title'
                                name='title'
                                className='form-control'
                                value={book.title}
                                onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <input
                                type='text'
                                placeholder='ISBN'
                                name='isbn'
                                className='form-control'
                                value={book.isbn}
                                onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                type='text'
                                placeholder='Author'
                                name='author'
                                className='form-control'
                                value={book.author}
                                onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                type='text'
                                placeholder='Description'
                                name='description'
                                className='form-control'
                                value={book.description}
                                onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                type='date'
                                placeholder='published_date'
                                name='published_date'
                                className='form-control'
                                value={book.published_date}
                                onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                type='text'
                                placeholder='Publisher'
                                name='publisher'
                                className='form-control'
                                value={book.publisher}
                                onChange={onChange}
                                />
                            </div>

                            <input 
                            type="submit"
                            className="btn btn-outline-warning btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook;