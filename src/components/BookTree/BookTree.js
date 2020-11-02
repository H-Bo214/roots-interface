import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './BookTree.css';
import BookCard from '../BookCard/BookCard';
import AddCookBook from '../AddCookBook/AddCookBook';
import userIcon from '../../assets/tan-user-icon.svg';
import { GET_USER_COOKBOOKS } from '../../queries/Queries';
import { Link } from 'react-router-dom';

const BookTree = ({ user }) => {
	const id = user.id || '0';
	const { loading, error, data } = useQuery(GET_USER_COOKBOOKS, {
		variables: { id },
	});
	const [books, setBooks] = useState([]);

	useEffect(() => {
		if (data) {
			setBooks(data.getUserCookbooks);
		}
	}, [data]);

	const userCookBooks = books.map((book) => {
		return (
			<Link key={book.id} to={`/recipe-book/${book.id}`}>
				<BookCard cookBookName={book.title} bookId={book.id} />;
			</Link>
		);
	});

	const addNewBook = (title, id) => {
		const newBooks = [...books, { title, id }];
		setBooks(newBooks);
	};

	if (loading) return <h1>Loading...</h1>;
	if (error) {
		console.log(error);
		return <h1>error</h1>;
	}

	return (
		<section className="BookTree">
			<div className="user-icon-container">
				<img src={userIcon} alt="user icon" className="user-img" />
			</div>
			<div className="user-cook-books">
				<AddCookBook addNewBook={addNewBook} userId={id} />
				{userCookBooks}
			</div>
		</section>
	);
};

export default BookTree;
