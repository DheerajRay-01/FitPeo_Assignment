import React from "react";
import {
  LayoutDashboard,
  GalleryVerticalEnd,
  CalendarDays,
  CirclePlus,
  LifeBuoy,
  MessageSquare,
  Settings,
} from "lucide-react";

function SideBar() {
  const sidebarItemsGeneral = [
    { title: "Dashboard", icon: LayoutDashboard },
    { title: "History", icon: GalleryVerticalEnd },
    { title: "Calendar", icon: CalendarDays },
    { title: "Appointments", icon: CirclePlus },
  ];

  const sidebarItemsTools = [
    { title: "Support", icon: LifeBuoy },
    { title: "Chat", icon: MessageSquare },
    { title: "Setting", icon: Settings },
  ];

  return (
    <div className="p-2 w-fi">
      <ul className="menu bg-base-200 rounded-box w-40  ">
        <li className="menu-title">General</li>
        {sidebarItemsGeneral.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="pt-3">
              <a className="flex items-center gap-2">
                <Icon size={18} />
                {item.title}
              </a>
            </li>
          );
        })}

        <li className="menu-title">Tools</li>
        {sidebarItemsTools.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="pt-3">
              <a className="flex items-center gap-2">
                <Icon size={18} />
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
