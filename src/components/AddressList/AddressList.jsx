import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddressList.css";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const AddressList = () => {
	const [addresses, setAddresses] = useState([]);
	const [editingAddress, setEditingAddress] = useState(null); // To track which address is being edited
	const [editedAddressData, setEditedAddressData] = useState({
		streetAddress: "",
		city: "",
		state: "",
		zipCode: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		fetchAddresses();
	}, []);

	const fetchAddresses = async () => {
		try {
			const response = await axios.get("http://localhost:3001/api/address");
			setAddresses(response.data);
		} catch (error) {
			console.error("Error fetching addresses:", error);
		}
	};

	const handleEdit = (address) => {
		setEditingAddress(address);
		setEditedAddressData({
			streetAddress: address.streetAddress,
			city: address.city,
			state: address.state,
			zipCode: address.zipCode,
		});
	};

	const handleSaveEdit = async () => {
		try {
			await axios.put(
				`http://localhost:3001/api/address/${editingAddress._id}`,
				editedAddressData
			);
			fetchAddresses(); // Refresh the address list after editing
			setEditingAddress(null); // Reset editing state
		} catch (error) {
			console.error("Error editing address:", error);
		}
	};

	const handleCancelEdit = () => {
		setEditingAddress(null);
	};

  const handleDelete = async (addressId) => {
    try {
      await axios.delete(`http://localhost:3001/api/address/${addressId}`);
      fetchAddresses();
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedAddressData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div className="list">
			<h2>List of Addresses</h2>
			<ul>
				{addresses.map((address, index) => (
					<li className="address-list" key={index}>
						{editingAddress === address ? (
							<div className="edit-form">
								<input
									type="text"
									name="streetAddress"
									value={editedAddressData.streetAddress}
									onChange={handleChange}
								/>
								<input
									type="text"
									name="city"
									value={editedAddressData.city}
									onChange={handleChange}
								/>
								<input
									type="text"
									name="state"
									value={editedAddressData.state}
									onChange={handleChange}
								/>
								<input
									type="text"
									name="zipCode"
									value={editedAddressData.zipCode}
									onChange={handleChange}
								/>
								<button onClick={handleSaveEdit}>Save</button>
								<button onClick={handleCancelEdit}>Cancel</button>
							</div>
						) : (
							<div>
								<strong>The complete address is:</strong>{" "}
								{address.streetAddress}, {address.city}, {address.state},{" "}
								{address.zipCode}
								<button className="edit-button" onClick={() => handleEdit(address)}><CiEdit className="icons" /></button>
                <button className="delete-button" onClick={() => handleDelete(address._id)}><MdDelete className="icons" /></button>
							</div>
						)}
					</li>
				))}
			</ul>
			<button
				className="newadd-button"
				onClick={() => navigate("/addressform")}
			>
				Add New Address
        <CiCirclePlus className="icons" />
			</button>
		</div>
	);
};

export default AddressList;
