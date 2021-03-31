import "normalize.css";
import "./App.css";
import { PetStoreWidget } from "./components/petstorewidget/PetStoreWidget";
function App() {
	return (
		<>
		
		<div style={{ padding: "4.8rem 0 19.2rem" }}>
			<h1 style={{ padding: "4.8rem 0", textAlign: "center" }}>Pet Store Widget</h1>
			<div style={{ paddingBottom: "4.8rem" }}>
				
				<PetStoreWidget />
			</div>
			<hr />
			<div style={{ width: "320px", maxWidth: "100%", margin: "0 auto" }}>
				<h2 style={{ padding: "4.8rem 0", textAlign: "center" }}>
					Small version e.g sidebar
				</h2>
				<PetStoreWidget breakpointWidth="9999" maxItems="5" />
			</div>
		</div>
		</>
	);
}
export default App;
