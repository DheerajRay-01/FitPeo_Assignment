import React from 'react'

function DashBoardNav() {
  return (
    <div>
          <div className="navbar bg-transparent">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DashBoard</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>This Week</summary>
                <ul className="p-2 bg-base-100 rounded-box w-40 z-10">
                  <li><a>This Week</a></li>
                  <li><a>Last Week</a></li>
                  <li><a>This Month</a></li>
                  <li><a>Last Month</a></li>
                  <li><a>Custom Range</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoardNav