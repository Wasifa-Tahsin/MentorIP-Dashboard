import { FiUser, FiBook, FiEye } from "react-icons/fi";
import logoImage from '../../assets/images/logoimage.png'
import StarsCard from "../Card/StarsCard";

import { MdOutlineDangerous } from "react-icons/md";
import UserGrowthChart from "../page/UserGrowthChart";
import ViewerGrowthChart from "../page/ViewerGrowthChart";
const Dashboard = () => {
 

   const recentUsers = [
    { id: 1, name: "Dindiniya", email: "example1@mail.com", contact: "01935625421",number:"08+ 123 456 789" },
    { id: 2, name: "Rafi", email: "example2@mail.com", contact: "01935625422",number:"08+ 123 456 789" },
    { id: 3, name: "Mitu", email: "example3@mail.com", contact: "01935625423",number:"08+ 123 456 789" },
    { id: 4, name: "Hasan", email: "example4@mail.com", contact: "01935625424",number:"08+ 123 456 789" },
  ];

  return (
    <section className="container mx-auto">
        <div className="flex">
 

      <div className="flex-1 p-6 bg-gray-50">
        {/* Stats */}
        <div className="flex gap-4 mb-6">
          <StarsCard title="Total Users"  value="852,650" icon={<FiUser /> }  />
          <StarsCard title="Total Blogs" value="4,782" icon={<FiBook />} />
          <StarsCard title="Total Viewer" value="2,500" icon={<FiUser />} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
  <ViewerGrowthChart />
  <UserGrowthChart />
</div>

       
        {/* Recent Users Table */}
          <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
            <h2 className="font-semibold mb-4">Recent Users</h2>
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-3 px-4">S No.</th>
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Contact No</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 text-gray-700">#{index + 1}</td>
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
                        className="rounded-full h-10 w-10"
                        src={logoImage}
                        alt={user.name}
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">{user.name}</span>
                      <span>{user.number}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                    <td className="py-3 px-4 text-gray-600">{user.contact}</td>
                    <td className="py-3 px-4 text-center space-x-3">
                      <button className="text-gray-500 ">
                        <FiEye />
                      </button>
                      <button className="text-gray-500 ">
                        <MdOutlineDangerous />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;
