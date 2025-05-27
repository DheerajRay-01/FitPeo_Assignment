import React from "react";
import { Plus, Bell } from "lucide-react";

function Header() {
  return (
    <div className="w-full shadow-sm px-4 py-2">
      <nav className="flex items-center justify-between">
        {/* Left side: Logo, Input, Notification */}
        <div className="flex items-center gap-4">
          {/* Website logo */}
          <div className="text-xl font-bold text-blue-600">HealthCare</div>

          {/* Search input */}
          <div className="w-64">
             <input type="text" placeholder="Search.." className="input rounded-full " />
          </div>

          {/* Notification button */}
          <button className="btn p-2">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Right side: Profile and Add */}
        <div className="flex items-center gap-4">
          {/* Profile image */}
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " alt="profile" />
            </div>
          </div>

          {/* Add button */}
          <button className="btn btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            <span>Add</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
