import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsCreator } from '../../store/actions/newsCreator';
import { Loader } from '../Loader/Loader';
import { Card } from '../Card/Card';

export const News = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewsCreator());
	}, [dispatch]);

	const loading = useSelector((state) => state.getnews.loading);

	const newsCard = useSelector((state) => state.getnews.news);

	return (
		<div className="row">
			{loading ? (
				<Loader />
			) : (
				newsCard.map((elNews) => (
					<div className="col-sm-4 mb-4" key={uuid()}>
						<Card news={elNews} />
					</div>
				))
			)}
		</div>
	);
};
