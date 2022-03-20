import newsPic from '../img/isto.jpg';
import './_newsItem.scss';
import share from '../img/share.svg';
import favorite from '../img/favorit.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = (props) => {
	return (
		<div className="item-contain container-fluid">
			<div className="row latest-contain-news">
				<div className="img-contain col-lg-12">
					<img className="w-100" src={props.urlToImage} />
				</div>
				<div className="col-lg-12">
					<h4>{props.title}</h4>
				</div>
				<div className="co-lg-12 news-icon-contain">
					<span className="date">{props.published}</span>

					<img src={share} />
					<img src={favorite} />
				</div>
			</div>
		</div>
	);
};
export default Item;
