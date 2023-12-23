import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import FicheLogement from "./pages/FicheLogement";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/*route parente Layout qui comprends la navigation et le Footer*/}
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/homarv.github.io/kasa-app/" element={<Home />} />
					<Route path="/Apropos" element={<APropos />} />
					{/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
					<Route path="*" element={<Error />} />
					<Route path="/Fiche_Logement/:id" element={<FicheLogement />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
