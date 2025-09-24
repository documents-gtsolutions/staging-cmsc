"use client";
import Alert from "@/components/common/Alert";
import DataTable, { Column } from "@/components/common/DataTable";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { EditIcon, EyeOpenIcon, GalleryIcon, TrashIcon } from "@/icon";
import { Status } from "@/types";
import { Plus, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserManagement = () => {
  const router = useRouter();
  // Mock user data based on the image
  const data = [
    {
      id: 1,
      name: "Abdul Qadir Parekh",
      username: "Abdul Qadir Parekh",
      school: "Little Bo Peep Lawndale",
      branch: "Evergreen",
      role: "Admin",
      status: "active",
    },
    {
      id: 2,
      name: "Abdul Qadir Parekh",
      username: "Abdul Qadir Parekh",
      school: "Little Bo Peep Lawndale",
      branch: "Evergreen",
      role: "Admin",
      status: "active",
    },
    {
      id: 3,
      name: "Abdul Qadir Parekh",
      username: "Abdul Qadir Parekh",
      school: "Little Bo Peep Lawndale",
      branch: "Evergreen",
      role: "Admin",
      status: "active",
    },
    {
      id: 4,
      name: "Abdul Qadir Parekh",
      username: "Abdul Qadir Parekh",
      school: "Little Bo Peep Lawndale",
      branch: "Evergreen",
      role: "Admin",
      status: "active",
    },
    {
      id: 5,
      name: "Abdul Qadir Parekh",
      username: "Abdul Qadir Parekh",
      school: "Little Bo Peep Lawndale",
      branch: "Evergreen",
      role: "Admin",
      status: "active",
    },
  ];

  const columns: Column<(typeof data)[0]>[] = [
    { name: "ID", key: "id", sortable: true },
    {
      name: "Name",
      key: "name",
      sortable: true,
      render: (row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <GalleryIcon size={18} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{row.name}</div>
          </div>
        </div>
      ),
    },
    { name: "Username", key: "username", sortable: true },
    { name: "School", key: "school", sortable: true },
    { name: "Branch", key: "branch", sortable: true },
    { name: "Role", key: "role", sortable: true },
    {
      name: "Status",
      key: "status",
      render: (row) => (
        <div
          className={` rounded-sm text-xs text-center ${
            row.status === Status.ACTIVE
              ? "bg-[#00B221]/10 border border-[#00B221]/20 text-[#00B221]"
              : "bg-[#FB3B2D]/10 border border-[#FB3B2D] text-[#FB3B2D]"
          } px-1.5 py-1.5`}
        >
          {row.status.slice(0, 1).toUpperCase() + row.status.slice(1)}
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <Heading
          title="User Management"
          backTo="/cms/dashboard"
          backToText="Back to Main Menu"
        />
        <Button onClick={() => router.push("/cms/user-management/add")}>
          <Plus size={16} />
          <span>Add New User</span>
        </Button>
      </div>
      <div className="mb-8">
        <Alert
          title="User Limit Information  "
          description="Building Blocks Academy can have up to "
          bold="9 users."
          button1="Current users: 5"
          button2="Remaining slots: 4"
        />
      </div>
      <DataTable
        columns={columns}
        data={data}
        itemsPerPage={5}
        actions={(row) => (
          <div className="flex gap-2">
            <button>
              <Shield className="fill-[#F78E09] stroke-[#F78E09]" size={18} />
            </button>
            <button onClick={() => {}}>
              <EyeOpenIcon size={22} color="#1683FF" />
            </button>
            <button className="text-green-600 hover:text-green-900/80">
              <EditIcon size={18} />
            </button>
            <button className="text-red-600 hover:text-red-900">
              <TrashIcon size={18} />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default UserManagement;
