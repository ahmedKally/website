import './_lists.scss';

const Lists = (props) => {
	return (
		<div className="col-lg-2">
			<div className="state-contain">
				<h4>{props.title}</h4>
				<ul>{props.item}</ul>
			</div>
		</div>
	);
};
export default Lists;
