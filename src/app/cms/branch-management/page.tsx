"use client";
import Alert from "@/components/common/Alert";
import DataTable, { Column } from "@/components/common/DataTable";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { EditIcon, EyeOpenIcon, TrashIcon } from "@/icon";
import { Status } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BranchManagement = () => {
  const router = useRouter();
  // Mock branch data based on the image
  const data = Array(9)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: "Building Blocks Academy",
      branchCode: `BBA00${index + 1}`,
      type:
        index % 3 === 0
          ? "Primary"
          : index % 3 === 1
          ? "Secondary"
          : "Tertiary",
      city:
        index % 4 === 0
          ? "New York"
          : index % 4 === 1
          ? "Los Angeles"
          : index % 4 === 2
          ? "Chicago"
          : "Houston",
      capacity: `$${(1 + index * 0.1).toFixed(1)},200`,
      status: index % 2 === 0 ? Status.ACTIVE : Status.INACTIVE,
    }));

  const columns: Column<(typeof data)[0]>[] = [
    {
      name: "Branch Name",
      key: "name",
      sortable: true,
    },
    { name: "Branch Code", key: "branchCode", sortable: true },
    { name: "Type", key: "type", sortable: true },
    { name: "City", key: "city", sortable: true },
    { name: "Capacity", key: "capacity", sortable: true },
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
          title="Branch Management"
          backTo="/cms/dashboard"
          backToText="Back to Main Menu"
        />
        <Button onClick={() => router.push("/cms/branch-management/add")}>
          <Plus size={16} />
          <span>Add Branch Management</span>
        </Button>
      </div>
      <div className="mb-8">
        <Alert
          title="Branch Limit Information  "
          description="Building Blocks Academy can have up to "
          bold="11 Branchs."
          button1="Current Branch: 7"
          button2="Remaining slots: 4"
        />
      </div>
      <DataTable
        columns={columns}
        data={data}
        itemsPerPage={10}
        checkbox={true}
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

export default BranchManagement;
