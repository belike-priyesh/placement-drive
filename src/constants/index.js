export const Tabs = [
  { title: "Home", link: "/" },
  { title: "Carrier Resources", link: "/carrier_resources" },
  { title: "Company Profile", link: "/company_profile" },
  { title: "Feedbacks", link: "/feedbacks" },
  { title: "Upload Resume", link: "/" },
  { title: "Sign-In", link: "/" },
];
export const activeTab = (history, text, index) => {
  if (index == 0 && history.location.pathname == "/")
    return history.location.pathname.match(new RegExp("/"));
  return history.location.pathname.match(new RegExp(text, "ig"));
};
export default {
  Tabs,
  activeTab,
};
