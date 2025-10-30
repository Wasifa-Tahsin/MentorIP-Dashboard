import { FiUser, FiBook, FiEye } from "react-icons/fi";
import { MdOutlineDangerous } from "react-icons/md";
import logoImage from "../../assets/images/logoimage.png";
import StarsCard from "../Card/StarsCard";
import UserGrowthChart from "../page/UserGrowthChart";
import ViewerGrowthChart from "../page/ViewerGrowthChart";

const Dashboard = () => {
  const recentUsers = [
    { id: 1, name: "Dindiniya", email: "example1@mail.com", contact: "01935625421", number: "08+ 123 456 789" },
    { id: 2, name: "Rafi", email: "example2@mail.com", contact: "01935625422", number: "08+ 123 456 789" },
    { id: 3, name: "Mitu", email: "example3@mail.com", contact: "01935625423", number: "08+ 123 456 789" },
    { id: 4, name: "Hasan", email: "example4@mail.com", contact: "01935625424", number: "08+ 123 456 789" },
  ];

  return (
    <section className="container mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <StarsCard title="Total Users" value="852,650" icon={<FiUser />} />
          <StarsCard title="Total Blogs" value="4,782" icon={<FiBook />} />
          <StarsCard title="Total Viewer" value="2,500" icon={<FiUser />} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <ViewerGrowthChart />
          <UserGrowthChart />
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 overflow-x-auto">
          <div className="flex justify-between">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">Recent User</h2>
          <h2 className="font-semibold text-red-800 mb-4 text-lg">View All</h2>
          </div>
          <table className="min-w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b bg-gray-100 text-gray-700">
                <th className="py-3 px-4 font-medium">S No.</th>
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium hidden md:table-cell">Email</th>
                <th className="py-3 px-4 font-medium hidden sm:table-cell">Contact No</th>
                <th className="py-3 px-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user, index) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4 text-gray-700 whitespace-nowrap">#{index + 1}</td>

                  {/* User Details */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        className="rounded-full h-10 w-10 object-cover"
                        src={logoImage}
                        alt={user.name}
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800 text-sm sm:text-base">{user.name}</span>
                        <span className="text-gray-500 text-xs sm:text-sm">{user.number}</span>
                      </div>
                    </div>
                  </td>

                  {/* Hide columns on smaller screens */}
                  <td className="py-3 px-4 text-gray-600 hidden md:table-cell">{user.email}</td>
                  <td className="py-3 px-4 text-gray-600 hidden sm:table-cell">{user.contact}</td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button className="text-gray-800  transition">
                        <FiEye size={18} />
                      </button>
                      <button className="text-gray-800 transition">
                        <MdOutlineDangerous size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden mt-6 space-y-4">
          {recentUsers.map((user, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={logoImage}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-800 font-medium">{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                  <p className="text-gray-400 text-xs">{user.contact}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="text-green-600 hover:text-green-700">
                  <FiEye size={18} />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <MdOutlineDangerous size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
