import { FiArrowLeft, FiSearch, FiEye, FiTrash2 } from "react-icons/fi";
import userImage from "../../assets/images/logoimage.png";

const UserManagement = () => {
  const users = [
    { id: "#12333", name: "dindiniya", email: "bockelboy@att.com", contact: "0195365245263" },
    { id: "#12333", name: "dindiniya", email: "csilvers@verizon.com", contact: "0195365245263" },
    { id: "#12333", name: "dindiniya", email: "qmahb@mail.com", contact: "0195365245263" },
    { id: "#12333", name: "dindiniya", email: "xternis@gmail.com", contact: "0195365245263" },
  ];

  return (
    <section className=" container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="text-red-600 hover:text-red-700">
            <FiArrowLeft size={22} />
          </button>
          <h2 className="text-lg font-medium text-gray-800">User Management</h2>
        </div>

        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className=" rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-3 px-4 font-medium">S no.</th>
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">Email</th>
              <th className="py-3 px-4 font-medium">Contact no</th>
              <th className="py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">{user.id}</td>

                {/* Name + Image + Subtext */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={userImage}
                      alt={user.name}
                      className="h-10 w-10 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-medium">{user.name}</p>
                      <p className="text-gray-400 text-sm">08+ 123 456 789</p>
                    </div>
                  </div>
                </td>

                <td className="py-3 px-4 text-gray-700">{user.email}</td>
                <td className="py-3 px-4 text-gray-700">{user.contact}</td>

                {/* Action Buttons */}
                <td className="py-3 px-4 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">
                    <FiEye size={16} />
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
                    <FiTrash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserManagement;
