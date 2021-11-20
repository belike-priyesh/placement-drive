import React from "react";
import { Route, Routes as BrowsingRoutes, NavLink } from "react-router-dom";
import CarrieResources from "../screens/CarrierResources";
import CompanyProfile from "../screens/CompanyProfile";
import Feedbacks from "../screens/Feedbacks";
import Home from "../screens/Home";

export default function Routes() {
  return (
    <BrowsingRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/carrier_resources" element={<CarrieResources />} />
      <Route path="/feedbacks" element={<Feedbacks />} />
      <Route path="/company_profile" element={<CompanyProfile />} />
    </BrowsingRoutes>
  );
}
