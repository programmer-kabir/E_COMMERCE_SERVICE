import React from "react";

const AdminBreadcrumb = ({ name }) => {
  return (
    <div>
      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
        <p>Home</p>
        <li>{name}</li>
      </div>
    </div>
  );
};

export default AdminBreadcrumb;
