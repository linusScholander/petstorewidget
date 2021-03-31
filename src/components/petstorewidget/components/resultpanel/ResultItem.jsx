import { Icon } from "../icon/Icon";
export const ResultItem = (props) => {
	const { itemIcon, itemData, itemIndex, currentBreakpoint } = props;
	const itemTagsData = itemData?.tags ? itemData?.tags : "";
	const rowClassName = (itemIndex === 0) ? "petstorewidget-row petstorewidget-tbody-first-row" : "petstorewidget-row";
	return (
		<>
			<li
				className={rowClassName}
				role="row"
				aria-rowindex={itemIndex + 1}
			>
				<div className="petstorewidget-column" aria-hidden="true">
					<Icon
						name={itemIcon}
						className="petstorewidget-tbody-column-icon petstorewidget-column-icon"
					/>
				</div>

				<div className="petstorewidget-column" role="cell">
					{currentBreakpoint === "small" ? (
						<strong
							className="petstorewidget-tbody-column-key petstorewidget-column-key"
							aria-hidden="true"
						>
							{"Name "}
						</strong>
					) : (
						""
					)}
					{itemData?.name}
				</div>
				<div className="petstorewidget-column" role="cell">
					{currentBreakpoint === "small" ? (
						<strong
							className="petstorewidget-tbody-column-key petstorewidget-column-key"
							aria-hidden="true"
						>
							{"ID "}
						</strong>
					) : (
						""
					)}
					{itemData?.id}
				</div>

				{itemTagsData.length > 0 ? (
					<div className="petstorewidget-column" role="cell">
						{currentBreakpoint === "small" ? (
							<strong
								className="petstorewidget-tbody-column-key petstorewidget-column-key"
								aria-hidden="true"
							>
								{"Tags "}
							</strong>
						) : (
							""
						)}
						<ul className="petstorewidget-column-list">
							{itemTagsData?.map((tagData, tagIndex) => (
								<li
									className="petstorewidget-column-item"
									key={`petStoreTag${itemIndex}_${tagIndex}`}
								>
									<span className="petstorewidget-tag">
										{tagData.name}
									</span>
								</li>
							))}
						</ul>
					</div>
				) : (
					<div
						className="petstorewidget-column petstorewidget-column-placeholder"
						role="cell"
					>
						{currentBreakpoint === "small" ? (
							<strong
								className="petstorewidget-tbody-column-key petstorewidget-column-key"
								aria-hidden="true"
							>
								{"Tags "}
							</strong>
						) : (
							""
						)}
						{"-"}
					</div>
				)}
			</li>
		</>
	);
};
