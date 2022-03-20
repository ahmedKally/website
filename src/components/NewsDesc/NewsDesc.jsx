import fly from '../img/fly.jpeg';
import share from '../img/share.svg';
import favorite from '../img/favorit.svg';
import './_newsDesc.scss';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';

const NewsDesc = () => {
	const [newsItem, setnewsItem] = useState([]);

	const getNewsDesc = (newsId) => {
		const NEWS_LISTING_API = `https://api.npoint.io/96363b7b60639fdd6e7d/News/${newsId - 1}`;
		fetch(NEWS_LISTING_API)
			.then((response) => response.json())
			.then((data) => {
				//setNewsListingItems(data.News);
				console.log(data);
				setnewsItem(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const newsId = params.get('id');
		getNewsDesc(newsId);
	}, []);

	return (
		// start NewsDesc
		<>
			<div className="bg">
				<Header />
			</div>
			<div className="container news-desc-container">
				<div className="row">
					<div className="col-lg-6 ">
						<img className="plane" src={newsItem.urlToImage} />
					</div>
					<div className="col-lg-6 desc-data">
						<div className="desc-title">
							<h1>{newsItem.title}</h1>
							<div className=" news-icon-contain">
								<span className="date">{newsItem.published}</span>
								<img src={share} />
								<img src={favorite} />
							</div>
						</div>
						<p>{newsItem.description}</p>
					</div>
					<p className="py-4">{newsItem.content}</p>
				</div>
			</div>
		</>
	);
};
// end NewsDesc
export default NewsDesc;
