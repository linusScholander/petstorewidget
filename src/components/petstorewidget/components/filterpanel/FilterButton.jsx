import "./FilterButton.scss";
import { Icon } from "../icon/Icon";
export const FilterButton = (props) => {
	const { buttonStatus, text, label, petStatus, setPetStatus } = props;
	if (petStatus === buttonStatus) {
		return (
			<strong
				className="petstorewidget-filter-button petstorewidget-filter-button-active"
				onClick={() => {
					setPetStatus(buttonStatus);
				}}
				role="radio"
				aria-checked="true"
				/* tabIndex={0} */
				tabIndex={0}
				title={label}
				aria-label={label}
			>
				<span className="petstorewidget-filter-button-icon petstorewidget-filter-button-icon-active">
					<Icon name={buttonStatus} />
				</span>
				<span className="petstorewidget-filter-button-text petstorewidget-filter-button-text-active">
					{text}
				</span>
			</strong>
		);
	} else {
		return (
			<span
				className="petstorewidget-filter-button"
				onClick={() => {
					setPetStatus(buttonStatus);
				}}
				role="radio"
				aria-checked="false"
				/* tabIndex={-1} */
				tabIndex={0}
				title={label}
				aria-label={label}
			>
				<span className="petstorewidget-filter-button-icon">
					<Icon name={buttonStatus} />
				</span>
				<span className="petstorewidget-filter-button-text">
					{text}
				</span>
			</span>
		);
	}
};
