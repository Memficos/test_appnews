import React from 'react';
import './card.scss';

export const Card = ({ news }) => {
	return (
		<div className="card">
			<div className="card-body">
				<img src={news.urlToImage} className="card-img-top" alt="..."></img>
				<h5 className="card-title">{news.title}</h5>
				<p className="card-text">{news.description}</p>
				<a
					href={news.url}
					className="btn btn-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Read
				</a>
			</div>
		</div>
	);
};
