import { NavLink } from "react-router";

// react-icons import
import {
  MdDashboard,
  MdPeople,
  MdPostAdd,
  MdOutlineDescription,
  MdOutlineMail,
  MdFeedback,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const menu = [
    { label: "Dashboard", to: "/dashboard", icon: <MdDashboard size={20} /> },
    { label: "UserManagement", to: "/users", icon: <MdPeople size={20} /> },
    { label: "AddBlog", to: "/add-blog", icon: <MdPostAdd size={20} /> },
    { label: "AddBlogDetails", to: "/add-blog-details", icon: <MdOutlineDescription size={20} /> },
    { label: "Add Post Outline", to: "/add-post-outline", icon: <MdOutlineDescription size={20} /> },
    { label: "Email", to: "/email", icon: <MdOutlineMail size={20} /> },
    { label: "Feedback", to: "/feedback", icon: <MdFeedback size={20} /> },
    { label: "Settings", to: "/settings", icon: <MdSettings size={20} /> },
  ];

  return (
    <div className="bg-white h-screen w-64 p-4 border-r border-gray-200 flex flex-col justify-between mt-5">
      <div>
        <ul className="space-y-3">
          {menu.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3  px-3 py-2 rounded border border-red-300 transition-all duration-200 
                   hover:bg-red-300 hover:border-red-500 
                   ${
                     isActive
                       ? "bg-red-100 border-red-600 text-red-700 font-medium"
                       : "text-gray-700"
                   }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button className="flex items-center gap-3 px-3 py-2 rounded border border-red-300 bg-red-50 hover:bg-red-100 hover:border-red-500 text-red-900 font-medium transition-all duration-200">
        <MdLogout size={20} />
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
