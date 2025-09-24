"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { EditIcon, EyeOpenIcon, HouseLineIcon, TrashIcon } from "@/icon";
import { Status } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const RoleManagement = () => {
  const router = useRouter();
  // Mock role data based on the image
  const data = [
    {
      id: 1,
      schoolName: "Building Blocks Academy",
      branchName: "La Marque",
      roleName: "Super Admin",
      roleDescription: "Full control of the daycare system (boss role)",
      createdDate: "October 01, 2028",
      status: "active",
    },
    {
      id: 2,
      schoolName: "Building Blocks Academy",
      branchName: "La Marque",
      roleName: "Daycare Director",
      roleDescription: "Runs the daycare and manages staff",
      createdDate: "October 01, 2028",
      status: "active",
    },
    {
      id: 3,
      schoolName: "Building Blocks Academy",
      branchName: "La Marque",
      roleName: "Lead Teachers",
      roleDescription: "Teaches and takes care of kids",
      createdDate: "October 01, 2028",
      status: "active",
    },
    {
      id: 4,
      schoolName: "Building Blocks Academy",
      branchName: "La Marque",
      roleName: "Assistant Teachers",
      roleDescription: "Helps teacher and supports kids",
      createdDate: "October 01, 2028",
      status: "active",
    },
    {
      id: 5,
      schoolName: "Building Blocks Academy",
      branchName: "La Marque",
      roleName: "Front Desk Officer",
      roleDescription: "Talks to parents and keeps records",
      createdDate: "October 01, 2028",
      status: "active",
    },
    {
      id: 6,
      schoolName: "Building Blocks Academy",
      branchName: "La Marque",
      roleName: "Admin Officer",
      roleDescription: "Handles fees and bills",
      createdDate: "October 01, 2028",
      status: "active",
    },
  ];

  const columns: Column<(typeof data)[0]>[] = [
    {
      name: "School Name",
      key: "schoolName",
      sortable: true,
      render: (row) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#7752FF] text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
            <HouseLineIcon size={18} />
          </div>
          <div className="text-sm font-medium text-gray-900">
            {row.schoolName}
          </div>
        </div>
      ),
    },
    { name: "Branch Name", key: "branchName", sortable: true },
    { name: "Role Name", key: "roleName", sortable: true },
    { name: "Role Description", key: "roleDescription", sortable: true },
    { name: "Created Date", key: "createdDate", sortable: true },
    {
      name: "Status",
      key: "status",
      sortable: true,
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
          title="Role Management"
          backTo="/cms/dashboard"
          backToText="Back to Main Menu"
        />
        <Button onClick={() => router.push("/cms/role-management/add")}>
          <Plus size={16} />
          <span>Add New Role</span>
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        itemsPerPage={10}
        actions={(row) => (
          <div className="flex space-x-2">
            <button onClick={() => {}}>
              <EyeOpenIcon size={22} color="#1683FF" />
            </button>
            <button
              className="text-green-600 hover:text-green-900"
              onClick={() => {}}
            >
              <EditIcon size={18} />
            </button>
            <button
              className="text-red-600 hover:text-red-900"
              onClick={() => {}}
            >
              <TrashIcon size={18} />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default RoleManagement;
