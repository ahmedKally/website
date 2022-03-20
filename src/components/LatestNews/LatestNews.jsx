import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import arrowRight from '../img/a-right.svg';
import arrowLeft from '../img/left.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Item from '../NewsItem/NewsItem';
import './_latestNews.scss';
import rightBtn from '../img/rightBtn.png';
import { useEffect, useState } from 'react';

const LatestNews = () => {
	const [newsListingItemsSorted, setNewsListingItemsSorted] = useState([]);

	const sortNewsListingItemsByDate = (newsListingItems) => {
		const newsListingItemsMapped = newsListingItems.map((item) => {
			const publishedDateYear = `20${item.published.split('/')[2]}`.slice(-2);
			const publishedDateMonth = `00${item.published.split('/')[0]}`.slice(-2);
			const publishedDateDay = `00${item.published.split('/')[1]}`.slice(-2);

			const publishedDateFormatted = `${publishedDateYear}-${publishedDateMonth}-${publishedDateDay}`;

			return { ...item, published: publishedDateFormatted };
		});

		newsListingItemsMapped.sort((a, b) => {
			return b.published > a.published ? 1 : -1;
		});

		return newsListingItemsMapped;
	};

	const NEWS_LISTING_API = 'https://api.npoint.io/96363b7b60639fdd6e7d';
	const getNewsListingData = () => {
		fetch(NEWS_LISTING_API)
			.then((response) => response.json())
			.then((data) => {
				setNewsListingItemsSorted(sortNewsListingItemsByDate(data.News));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getNewsListingData();
	}, []);

	return (
		// start LatestNews
		<div className="container-fluid slider">
			<div className="row">
				<div className="col-lg-2 border-right title-contain bg-latest">
					<div className="layer">
						<h1>Latest News</h1>
					</div>
				</div>
				<div className="col-lg-10 slider-contain">
					<div className="btn-row bordr-green">
						<span className="">More</span>
						<button>
							<img width="17" src={arrowRight} />
						</button>
					</div>

					<CarouselProvider naturalSlideWidth={200} naturalSlideHeight={225} totalSlides={newsListingItemsSorted.length} visibleSlides={4.5} currentSlide={1}>
						<Slider width={200} height={200} responsive={true}>
							{newsListingItemsSorted.map((item, index) => {
								return (
									<Slide responsive index={index}>
										<Item title={item.title} published={item.published} urlToImage={item.urlToImage} />
									</Slide>
								);
							})}
						</Slider>
						<div className="slide-btn">
							<ButtonBack>
								<img className="rotate" src={arrowRight} />
							</ButtonBack>
							<ButtonNext>
								<img src={arrowRight} />
							</ButtonNext>
						</div>
					</CarouselProvider>
				</div>
			</div>
		</div>
		// start LatestNews
	);
};

export default LatestNews;
