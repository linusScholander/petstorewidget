import "./FilterPanel.scss";
import { FilterButton } from "./FilterButton";
import { Icon } from "../icon/Icon";

export const FilterPanel = (props) => {
	const { petStatus, setPetStatus, resultPanelId } = props;

	return (
		<div
			id="petStoreWidget_filter"
			className="petstorewidget-filter"
			role="radiogroup"
			aria-controls={resultPanelId}
		>
			<strong
				className="petstorewidget-filter-label"
				aria-hidden="true"
			>
				<span className="petstorewidget-filter-label-icon" title="Filter options">
					<Icon name="filter" />
				</span>
			</strong>
			<ul className="petstorewidget-filter-list">
				<li className="petstorewidget-filter-item">
					<FilterButton
						buttonStatus="available"
						text="Available"
						label="Show available pets"
						petStatus={petStatus}
						setPetStatus={setPetStatus}
					/>
				</li>
				<li className="petstorewidget-filter-item">
					<FilterButton
						buttonStatus="pending"
						text="Pending"
						label="Show pending Pets"
						petStatus={petStatus}
						setPetStatus={setPetStatus}
					/>
				</li>
				<li className="petstorewidget-filter-item">
					<FilterButton
						buttonStatus="sold"
						text="Sold"
						label="Show sold pets"
						petStatus={petStatus}
						setPetStatus={setPetStatus}
					/>
				</li>
			</ul>
		</div>
	);
};
