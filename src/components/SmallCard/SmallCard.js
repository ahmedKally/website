import './_smallCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SmallCard = (props) => {
	return (
		<div className="col-lg-2">
			<div className="card-contain">
				<FontAwesomeIcon icon={props.icon} />
				<p>{props.cardTitle}</p>
			</div>
		</div>
	);
};

export default SmallCard;
