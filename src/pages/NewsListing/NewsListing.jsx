import Header from "../../components/Header/Header";
// import NewsListingBanner from './NewsListingBanner';
import './NewsListing.scss'
import React, { useState, useEffect } from 'react';

function useInput({ type }) {
	const [value, setValue] = useState("");
	const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
	return [value, input];
}

const NewsListingBanner = (props) => {
	return (
		<div id='news-listing-banner'>
			<div>
				<h3>News</h3>
			</div>
			<div>
				<p>Filter by:</p>
				<div id='news-listing-banner__filters'>
					{props.fromDateInput}
					{props.toDateInput}
					{props.searchInput}
				</div>
			</div>
		</div>
	);
}

const getNewsListingItemHTML = (item) => {
	return (
		<div class='news-listing-item'>
			<div class='news-listing-item__top'>
				<img class='news-listing-item__top__img' src={item.urlToImage} />
				<h2 class='news-listing-item__top__title'>{item.title}</h2>
			</div>

			<div class='news-listing-item__bottom'>
				<span class='news-listing-item__bottom__date'>{item.published}</span>
				<span class='news-listing-item__bottom__fav_share'></span>
			</div>
		</div>
	);
}

const NewsListing = () => {

	const [fromDate, fromDateInput] = useInput({ type: 'datetime-local' });
	const [toDate, toDateInput] = useInput({ type: 'datetime-local' });
	const [search, searchInput] = useInput({ type: 'search' });
	const [newsListingItems, setNewsListingItems] = useState([]);
	const [newsListingItemsFiltered, setNewsListingItemsFiltered] = useState([]);

	const NEWS_LISTING_API = 'https://api.npoint.io/96363b7b60639fdd6e7d';
	const getNewsListingData = ()=>{
		fetch(NEWS_LISTING_API).then(response => response.json()).then((data) => {
			setNewsListingItems(data.News);
			setNewsListingItemsFiltered(data.News);
			console.log(data.News);
		}).catch(err => {
			console.log(err);
		});
	}

	const filterNewsListingItems = () => {
		let filteredNewsListingItems = [...newsListingItems];
		if (fromDate !== '' && fromDate !== undefined) {
			filteredNewsListingItems = filteredNewsListingItems.filter(item => { const dateSplit = item.published.split('/'); return new Date('20'+`20${dateSplit[2]}`.slice(-2), dateSplit[0]-1, parseInt(dateSplit[1]+1)).toISOString().split('T')[0] >= fromDate.split('T')[0] });
		}
		if (toDate !== '' && toDate !== undefined) {
			filteredNewsListingItems = filteredNewsListingItems.filter(item => { const dateSplit = item.published.split('/'); return new Date('20'+`20${dateSplit[2]}`.slice(-2), dateSplit[0]-1, parseInt(dateSplit[1]+1)).toISOString().split('T')[0] <= toDate.split('T')[0] });
		}
		if (search !== '' && search !== undefined) {
			filteredNewsListingItems = filteredNewsListingItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
		}
		setNewsListingItemsFiltered(filteredNewsListingItems);
	}

	useEffect(() => {
		getNewsListingData();
	}, []);

	useEffect(() => {
		filterNewsListingItems();
	}, [fromDate, toDate, search]);

	return (
		<>
			<div className="bg">
				<Header />
				<NewsListingBanner fromDateInput={fromDateInput} toDateInput={toDateInput} searchInput={searchInput} />
			</div>
			<div id="news-listing">
				{newsListingItemsFiltered.map(item => getNewsListingItemHTML({ ...item }))}
			</div>
		</>
	);
}

export default NewsListing;