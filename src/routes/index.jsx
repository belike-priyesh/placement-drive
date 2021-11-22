import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import CarrierResourceDetail from "../screens/carriedResourceDetail";
import CarrieResources from "../screens/carrierResources";
import CompanyProfile from "../screens/companyProfile";
import CompanyProfileDetail from "../screens/companyProfile/detail";
import Feedbacks from "../screens/feedbacks";
import Home from "../screens/home";
import "./routes.css";

export default function WebRoutes() {
  return (
    <div className="RoutesContainer">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrier_resources" element={<CarrieResources />} />
        <Route
          path="/carrier_resources/:id"
          element={<CarrierResourceDetail />}
        />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/company_profile" element={<CompanyProfile />} />
        <Route path="/company_profile/:id" element={<CompanyProfileDetail />} />
      </Routes>
    </div>
  );
}
