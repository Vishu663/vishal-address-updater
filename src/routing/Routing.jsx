import { Router } from "express";
import AddressList from "../components/AddressList/AddressList";
import AddressForm from "../components/addressform/AddressForm";
import { Route, Routes } from "react-router-dom";

export default function Routing() {
    return <Router>
    <Routes>
        <Route path="/" element={<AddressForm />} />
        <Route path="/addresslist" element={<AddressList />} />
    </Routes>
</Router>
}