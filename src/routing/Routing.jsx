import AddressList from "../components/AddressList/AddressList";
import AddressForm from "../components/addressform/AddressForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/addressform" element={<AddressForm />} />
				<Route path="/addresslist" element={<AddressList />} />
			</Routes>
		</Router>
	);
}
