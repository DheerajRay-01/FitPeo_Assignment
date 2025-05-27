import React from "react";
import { Plus, Bell  } from "lucide-react";

function Header() {
  return (
    <div className="w-full shadow-sm px-4 py-2  m-auto ">
     
   

      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
       
        <div className="flex items-center justify-between">

           {/* Profile image */}
            <div className="avatar">
              <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                />
              </div>
            </div>
          {/* Logo */}
          <div className="text-3xl sm:text-2xl font-bold text-blue-600 m-auto px-15 ">HealthCare</div>

        </div>

       
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
             
          {/* Search input */}
          <div className="w-full sm:w-64">
            
            <input
              type="text"
              placeholder="Search..."
              className="input rounded-full w-full"
            />
          </div>

          {/* Add button */}
          <button className="btn btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
            {/* Notification button */}
          <button className="hidden lg:block btn p-2">
  <Bell className="w-5 h-5" />
</button>

        </div>
      </nav>
    </div>
  );
}

export default Header;
