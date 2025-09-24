"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { EditIcon, EyeOpenIcon, TrashIcon, UsersIcon } from "@/icon";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ClassroomManagement = () => {
  const router = useRouter();

  // Mock classroom data based on the image

  const columns: Column<(typeof data)[0]>[] = [
    {
      name: "ID",
      key: "id",
    
      render: (row) => (
        <span className="text-sm font-normal text-gray-900" title={row.id.toString()}>
          {row.id}
        </span>
      ),
    },
    {
      name: "Daycare Name",
      key: "name",
    
      render: (row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-[#7752FF] rounded-full flex items-center justify-center text-white font-medium">
            {row.icon}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{row.name}</div>
            <div className="text-sm text-gray-500">{row.subtext}</div>
          </div>
        </div>
      ),
    },
    {
      name: "Code",
      key: "code",
    
      render: (row) => (
        <span className="text-sm font-normal text-gray-900" title={row.code}>
          {row.code}
        </span>
      ),
    },
    {
      name: "Branch",
      key: "branch",
    
      render: (row) => (
        <span className="text-sm font-normal text-gray-900" title={row.branch}>
          {row.branch}
        </span>
      ),
    },
    { name: "Capacity", key: "capacity", render: (row) => (
      <div className="flex items-center gap-1">
        <UsersIcon size={20} />
        {row.capacity}
      </div>
    )},
    { name: "Age Group", key: "ageGroup", render: (row) => (
      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-sm bg-purple-100 text-purple-800">
        {row.ageGroup}
      </span>
    )},
    { name: "Teachers", key: "teachers", render: (row) => (
      <div className="flex flex-wrap gap-1">
        {row.teachers.map((teacher, idx) => (
          <span key={idx} className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-sm bg-blue-100 text-blue-800">
            {teacher}
          </span>
        ))}
      </div>
    )},
    { name: "Status", key: "status", render: (row) => (
      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-sm bg-green-100 text-green-800 items-center">
        {row.status} <span className="ml-1">✓</span>
      </span>
    )},
  ];

  const data = [
    {
      id: 1,
      name: "Sunshine Room",
      subtext: "Nursery",
      code: "SUN001",
      branch: "La Marque",
      capacity: 15,
      ageGroup: "2-4 years",
      teachers: ["Sarah", "Emily"],
      status: "Active",
      icon: "S",
    },
    {
      id: 2,
      name: "Sunshine Room",
      subtext: "Nursery",
      code: "SUN001",
      branch: "La Marque",
      capacity: 15,
      ageGroup: "2-4 years",
      teachers: ["Sarah", "Emily"],
      status: "Active",
      icon: "S",
    },
    {
      id: 3,
      name: "Sunshine Room",
      subtext: "Nursery",
      code: "SUN001",
      branch: "La Marque",
      capacity: 15,
      ageGroup: "2-4 years",
      teachers: ["Sarah", "Emily"],
      status: "Active",
      icon: "S",
    },
    {
      id: 4,
      name: "Sunshine Room",
      subtext: "Nursery",
      code: "SUN001",
      branch: "La Marque",
      capacity: 15,
      ageGroup: "2-4 years",
      teachers: ["Sarah", "Emily"],
      status: "Active",
      icon: "S",
    },
    {
      id: 5,
      name: "Sunshine Room",
      subtext: "Nursery",
      code: "SUN001",
      branch: "La Marque",
      capacity: 15,
      ageGroup: "2-4 years",
      teachers: ["Sarah", "Emily"],
      status: "Active",
      icon: "S",
    },
    {
      id: 6,
      name: "Sunshine Room",
      subtext: "Nursery",
      code: "SUN001",
      branch: "La Marque",
      capacity: 15,
      ageGroup: "2-4 years",
      teachers: ["Sarah", "Emily"],
      status: "Active",
      icon: "S",
    },
  ];

  // const data = Array(10)
  //   .fill(null)
  //   .map((_, index) => ({
  //     id: `CR00${index + 1}`,
  //     name: "Sunshine Room",
  //     subtext: "Nursery",
  //     code: "SUN001",
  //     branch: "La Marque",
  //     capacity: 15,
  //     ageGroup: "2-4 years",
  //     teachers: ["Sarah", "Emily"],
  //     status: "Active",
  //     icon: "S",
  //   }));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <Heading
          title="Classroom Setup"
          backTo="/cms/dashboard"
          backToText="Back to Main Menu"
        />
        <Button onClick={() => router.push("/cms/classroom-management/add")}>
          <Plus size={16} />
          <span>Add New Classroom</span>
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        itemsPerPage={5}
        actions={(row) => (
          <div className="flex gap-2">
            <button>
              <EyeOpenIcon size={18}  color="#1683FF" />
            </button>
            <button
              onClick={() => router.push(`/cms/month-closing/edit/${row.id}`)}
              className="text-green-600"
            >
              <EditIcon size={18} />
            </button>
            <button
              onClick={() => alert(`Delete ID: ${row.id}`)}
              className="text-red-600"
            >
              <TrashIcon size={18} />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default ClassroomManagement;
