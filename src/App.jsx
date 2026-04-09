import React, { useState } from "react";

export default function VoltVault() {
  const [page, setPage] = useState("features");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="images\logo.png"
            alt="VoltVault logo"
            className="h-9 w-9 rounded-md border border-gray-300"
          />
          <h1 className="text-xl font-bold">VoltVault</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPage("features")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              page === "features"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setPage("dashboard")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              page === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            Dashboard
          </button>
        </div>
      </nav>

      <div className="p-6">
        {/* Features Page */}
        {page === "features" && (
          <div>
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow overflow-hidden mb-6">
              <div className="h-80 flex items-center justify-center bg-gray-100 overflow-hidden">
                <img
                  src="images\61KKF63m28L._SL1500.jpg"
                  alt="VoltVault Hero"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-2 text-slate-900">Smart Energy Storage</h1>
                <p className="text-slate-700">
                  Affordable, reliable, and sustainable home energy powered by second-life batteries.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
              {[
                {
                  title: "Energy Tracking",
                  desc: "Monitor real-time energy usage and optimize consumption.",
                  img: "images\\const_update.jpg",
                },
                {
                  title: "Battery Health",
                  desc: "Track battery performance and lifecycle with insights.",
                  img: "images\\monitor.jpg",
                },
                {
                  title: "Cost Savings",
                  desc: "View savings and reduce electricity bills efficiently.",
                  img: "images\\customize.jpg",
                },
                {
                  title: "Smart Controls",
                  desc: "Easily switch between grid and battery usage.",
                  img: "images\\control.jpg",
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col max-w-md w-full border border-gray-200">
                  <div className="h-80 w-full flex items-center justify-center bg-gray-100 overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="text-base font-semibold text-slate-900">{feature.title}</h2>
                    <p className="mt-1 text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dashboard Page */}
        {page === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">VoltVault Dashboard</h1>

            {/* Optional Banner Image */}
            <div className="mb-6 rounded-2xl overflow-hidden shadow">
              <img
                src="images\dashboard.jpg"
                alt="Dashboard Banner"
                className="w-full h-64 object-contain"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="text-xl font-semibold">Energy Usage</h2>
                <p className="mt-2">Today's Usage: 12 kWh</p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="text-xl font-semibold">Battery Health</h2>
                <p className="mt-2">Health: 78%</p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="text-xl font-semibold">Cost Savings</h2>
                <p className="mt-2">Saved this month: ₹1,200</p>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-2xl shadow">
              <h2 className="text-xl font-semibold">Controls</h2>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-xl">
                Switch to Battery
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
