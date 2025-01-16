import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainGrid from "./MainGrid";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen h-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 w-full h-full bg-[#F5F7FA]">
        {/* Header */}
        <Header />

        {/* Main Grid */}
        <MainGrid />
      </div>
    </div>
  );
};

export default DashboardLayout;
