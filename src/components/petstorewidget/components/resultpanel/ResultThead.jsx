import "./ResultThead.scss";
export const ResultThead = () => {
	return (
		<div className="petstorewidget-thead" role="rowgroup">
			<div className="petstorewidget-row" role="row">
				<div
					className="petstorewidget-column petstorewidget-column-icon-placeholder"
					aria-hidden="true"
				>
					<span className="petstorewidget-column-key"> </span>
				</div>
				<div className="petstorewidget-column" role="columnheader">
					<strong className="petstorewidget-column-key">
						{"Name "}
					</strong>
				</div>
				<div className="petstorewidget-column" role="columnheader">
					<strong className="petstorewidget-column-key">
						{"ID "}
					</strong>
				</div>
				<div className="petstorewidget-column" role="columnheader">
					<strong className="petstorewidget-column-key">
						{"Tags "}
					</strong>
				</div>
			</div>
		</div>
	);
};
