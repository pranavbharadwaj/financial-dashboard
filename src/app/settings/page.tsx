"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main Street, Cityville",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
  });

  const validate = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Invalid email address.",
      address: formData.address ? "" : "Address is required.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Updated Profile Information:", formData);
      alert("Profile updated successfully!");
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header header={"Settings"} />

        {/* Settings Form */}
        <div className="w-4/5 mx-auto mt-8 p-6 bg-white rounded-lg text-black">
          <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-1 p-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-1 p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full mt-1 p-2 border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
