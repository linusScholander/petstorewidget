import "./ResultPanel.scss";
import { ResultItem } from "./ResultItem";
import { ResultThead } from "./ResultThead";
export const ResultPanel = (props) => {
	const {
		loading,
		petData,
		petStatus,
		maxItems,
		resultPanelId,
		currentBreakpoint,
	} = props;

	if (loading) {
		return <div>...</div>;
	} else {
		const displayPetData = petData.slice(0, maxItems);
		return (
			<div className="petstorewidget-result" id={resultPanelId}>
				<div
					className="petstorewidget-table"
					role={"table"}
					aria-label={`${petStatus} Pets`}
					aria-rowcount={maxItems}
				>
					<ResultThead />
					<ul className="petstorewidget-tbody" role="rowgroup">
						{displayPetData?.map((itemData, itemIndex) => (
							<ResultItem
								key={`petStore${itemIndex}`}
								itemIcon={petStatus}
								itemData={itemData}
								itemIndex={itemIndex}
								currentBreakpoint={currentBreakpoint}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
};
