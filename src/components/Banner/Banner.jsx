import arrowRight from '../img/right.png';
import arrowLeft from '../img/left.png';
import rightBtn from '../img/rightBtn.png';
import industry from '../img/industry.svg';
import heart from '../img/heartbeat.svg';
import travel from '../img/travel.svg';
import house from '../img/house.svg';
import tree from '../img/Path61389.svg';
import energy from '../img/Path61391.svg';
import './Slider.scss';
import SmallCard from '../SmallCard/SmallCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faHouse, faTree, faIndustry, faBolt, faHeart, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Slider = (props) => {
	const cardImages = [industry, heart, travel, house, energy];
	const cardDesc = ['Tourism', 'Agriculture', 'Real Estate', 'Industrials', 'Energy', 'Healthcare'];
	let tree = 'fa-light fa-tree';
	const icons = [faSuitcase, faHouse, faTree, faIndustry, faBolt, faHeartPulse];
	let desc = null;

	const sliderItems = [
		{ title: 'mission', content: 'Your business \nexpansion destination' },
		{ title: 'outsource', content: 'Global IT \nEngineering experts' },
		{ title: 'deploy', content: 'Accelerate \nbusiness productivity' },
		{ title: 'build', content: 'Futuristic \ndigital platforms' }
	];

	let [sliderIndex, setSliderIndex] = useState(1);

	const changeSliderIndex = (dir) => {
		if (dir === 'left') {
			if (sliderIndex === 1) {
				setSliderIndex(sliderItems.length);
			} else {
				setSliderIndex(sliderIndex - 1);
			}
		} else {
			if (sliderIndex === sliderItems.length) {
				setSliderIndex(1);
			} else {
				setSliderIndex(sliderIndex + 1);
			}
		}
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-2 cricle-contain border-right">
					<div className="circle">
						<div className="circle-content">
							<img src={arrowLeft} onClick={() => changeSliderIndex('left')} />
							<span>{sliderIndex}</span>
							<img src={arrowRight} onClick={() => changeSliderIndex('right')} />
						</div>
					</div>
				</div>
				<div className="col-lg-10  slider-text-contain">
					<div className="container pr-0">
						<div className="row">
							<div className="col-lg-12 slide-text-contain">
								<div>
									<span>{sliderItems[sliderIndex - 1].title}</span>
									<h1>{sliderItems[sliderIndex - 1].content}</h1>
								</div>
								<div className="btn-more">
									<button onClick={() => changeSliderIndex('right')}>
										More <br /> <img width="17" src={rightBtn} />
									</button>
								</div>
							</div>
							<div className="col-lg-5 pr-0">
								<div className="greenDiv container-fluid">
									<div className="row">
										<div className="col-lg-10">
											<span className="recent">RECENT INVESTMENT ANNOUNCEMENTS</span>
											<h3>
												Navigating the <br /> Opportunities of Africa’s <br /> Logistics Sector
											</h3>
										</div>
										<div className="btn-more col-lg-2">
											<button>
												more <br /> <img width="17" src={rightBtn} />
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-7 pl-0">
								<div className="container-fluid yellowDiv">
									<div className="row">
										<div className="col-lg-8 invest-contain">
											<span>Investment Sectors</span>
										</div>
										<div className="col-lg-4">
											<div className="btn-row text-center">
												<span>More</span>
												<button>
													<img width="17" src={rightBtn} />
												</button>
											</div>
										</div>

										{icons.map((icon, idx) => (
											<SmallCard key={idx} icon={icon} cardTitle={cardDesc[idx]} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Slider;
