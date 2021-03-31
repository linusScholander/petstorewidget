import { useState, useEffect } from "react";
import useDimensions from "react-cool-dimensions";
import "./styles/PetStoreWidget.scss";
import PetStoreAPIService from "./api/service/PetStoreAPIService";
import { ResultPanel } from "./components/resultpanel/ResultPanel";
import { FilterPanel } from "./components/filterpanel/FilterPanel";

export const PetStoreWidget = (props) => {
	const [petData, setPetData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [petStatus, setPetStatus] = useState("sold");
	const { maxItems = 5, breakpointWidth = 360 } = props;
	const resultPanelId = "petStoreWidget_filter_result";
	const [widgetClassName, setWidgetClassName] = useState(
		"petstorewidget petstorewidget-large"
	);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const { data } = await PetStoreAPIService.findByStatus(petStatus);
			setPetData(data);
			// console.log(data);
			setLoading(false);
		};
		fetchData();
	}, [petStatus]);

	const { ref, currentBreakpoint } = useDimensions({
		breakpoints: { small: 0, large: breakpointWidth },
		updateOnBreakpointChange: true,
		onResize: ({ currentBreakpoint }) => {
			currentBreakpoint === "small"
				? setWidgetClassName("petstorewidget petstorewidget-small")
				: setWidgetClassName("petstorewidget petstorewidget-large");
		},
	});

	return (
		<>
			<section id="petStoreWidget" className={widgetClassName} ref={ref}>
				<FilterPanel
					petStatus={petStatus}
					setPetStatus={setPetStatus}
					resultPanelId={resultPanelId}
					currentBreakpoint={currentBreakpoint}
				/>
				<ResultPanel
					loading={loading}
					petData={petData}
					petStatus={petStatus}
					maxItems={maxItems}
					resultPanelId={resultPanelId}
					currentBreakpoint={currentBreakpoint}
				/>
			</section>
		</>
	);
};
