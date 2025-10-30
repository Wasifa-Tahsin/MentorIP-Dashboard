import { FiArrowLeft, FiSearch, FiEye, FiTrash2 } from "react-icons/fi";
import userImage from "../../assets/images/logoimage.png";

const UserManagement = () => {
  const users = [
    { id: "#12333", name: "dindiniya", email: "bockelboy@att.com", contact: "0195365245263" },
    { id: "#12334", name: "johndoe", email: "csilvers@verizon.com", contact: "0195365245263" },
    { id: "#12335", name: "sarah", email: "qmahb@mail.com", contact: "0195365245263" },
    { id: "#12336", name: "alisha", email: "xternis@gmail.com", contact: "0195365245263" },
  ];

  return (
    <section className="container mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Back + Title */}
        <div className="flex items-center gap-2">
          <button className="text-red-600 hover:text-red-700">
            <FiArrowLeft size={22} />
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            User Management
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-red-400"
          />
        </div>
      </div>

      {/* ===== Table Section (Desktop & Tablet) ===== */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full text-left border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-100 text-gray-700">
              <th className="py-3 px-4 font-medium whitespace-nowrap">S No.</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Name</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Email</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Contact No</th>
              <th className="py-3 px-4 font-medium text-center whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50 transition duration-150"
              >
                <td className="py-3 px-4 text-gray-700">{user.id}</td>

                {/* Name + Image */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={userImage}
                      alt={user.name}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-medium">{user.name}</p>
                      <p className="text-gray-400 text-xs">08+ 123 456 789</p>
                    </div>
                  </div>
                </td>

                <td className="py-3 px-4 text-gray-700">{user.email}</td>
                <td className="py-3 px-4 text-gray-700">{user.contact}</td>

                {/* Action */}
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition">
                      <FiEye size={16} />
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition">
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Mobile Card View ===== */}
      <div className="md:hidden mt-4 space-y-4">
        {users.map((user, i) => (
          <div
            key={i}
            className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={userImage}
                alt={user.name}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  {user.name}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">{user.email}</p>
                <p className="text-gray-400 text-xs">{user.contact}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition">
                <FiEye size={16} />
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition">
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserManagement;
