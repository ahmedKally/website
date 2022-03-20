const NewsListingBanner = () => {
	return (
		<div id="news-listing-banner">
			<div>
				<h3>News</h3>
			</div>
			<div>
				<p>Filter by:</p>
				<div id="news-listing-banner__filters">
					<input id="news-listing-banner__start_date" type="datetime-local" />
					<input id="news-listing-banner__end_date" type="datetime-local" />
					<input id="news-listing-banner__search" placeholder="Keyword" type="search" />
				</div>
			</div>
		</div>
	);
};

export default NewsListingBanner;
