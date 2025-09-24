"use client";
import { EditIcon, EyeOpenIcon, TrashIcon } from "@/icon";
import { useRouter } from "next/navigation";
import { Status } from "@/types";
import DataTable, { Column } from "@/components/common/DataTable";

const ManageClosing = () => {
  const router = useRouter();

  const data = [
    {
      id: 1,
      closingId: "CLS-2024-001",
      school: "Building Blocks Academy (La Marque)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Approved",
    },
    {
      id: 2,
      closingId: "CLS-2024-002",
      school: "Building Blocks Academy (Bear Creek)",
      monthYear: "October 2024",
      students: 165,
      staff: 22,
      feeCollected: "$39,562",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Locked",
    },
    {
      id: 3,
      closingId: "CLS-2024-003",
      school: "Building Blocks Academy (Hobby Airport)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Pending",
    },
    {
      id: 4,
      closingId: "CLS-2024-004",
      school: "Building Blocks Academy (Alvin)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Approved",
    },
    {
      id: 5,
      closingId: "CLS-2024-005",
      school: "Building Blocks Academy (Pasadena)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Pending",
    },
    {
      id: 6,
      closingId: "CLS-2024-006",
      school: "Building Blocks Academy (Aldine)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Pending",
    },
    {
      id: 7,
      closingId: "CLS-2024-007",
      school: "Building Blocks Academy (Friendswood)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Locked",
    },
    {
      id: 8,
      closingId: "CLS-2024-008",
      school: "Building Blocks Academy (Cypress)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Locked",
    },
    {
      id: 9,
      closingId: "CLS-2024-009",
      school: "Building Blocks Academy (VTM)",
      monthYear: "October 2024",
      students: 125,
      staff: 18,
      feeCollected: "$28,500",
      expenses: "$15,200",
      netBalance: "$8,450",
      status: "Approved",
    },
  ];

  const columns: Column<(typeof data)[0]>[] = [
    {
      name: "Closing ID",
      key: "closingId",
      sortable: true,
      minWidth: "120px",
      render: (row) => (
        <div
          className="text-sm font-normal text-gray-900"
          title={row.closingId}
        >
          {row.closingId}
        </div>
      ),
    },
    {
      name: "School (Branch)",
      key: "school",
      sortable: true,
      minWidth: "250px",
      render: (row) => (
        <div className="max-w-[240px] truncate" title={row.school}>
          {row.school}
        </div>
      ),
    },
    {
      name: "Month & Year",
      key: "monthYear",
      sortable: true,
      minWidth: "130px",
    },
    { name: "Students", key: "students", sortable: true, minWidth: "100px" },
    { name: "Staff", key: "staff", sortable: true, minWidth: "80px" },
    {
      name: "Fee Collected",
      key: "feeCollected",
      sortable: true,
      minWidth: "120px",
    },
    { name: "Expenses", key: "expenses", sortable: true, minWidth: "100px" },
    {
      name: "Net Balance",
      key: "netBalance",
      minWidth: "120px",
      sortable: true,
      render: (row) => (
        <span className="text-green-600 font-medium">{row.netBalance}</span>
      ),
    },
    {
      name: "Status",
      key: "status",
      sortable: true,
      minWidth: "100px",
      render: (row) => (
        <span
          className={`rounded-sm text-xs text-center px-2 py-1 whitespace-nowrap ${
            row.status.toLowerCase() === Status.APPROVED
              ? "bg-green-100 border border-green-200 text-green-800"
              : row.status.toLowerCase() === Status.LOCKED
              ? "bg-red-100 border border-red-200 text-red-800"
              : row.status.toLowerCase() === Status.PENDING
              ? "bg-yellow-100 border border-yellow-200 text-yellow-800"
              : "bg-yellow-100 border border-yellow-200 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      itemsPerPage={5}
      actions={(row) => (
        <div className="flex gap-2">
          <button>
            <EyeOpenIcon size={18} color="#1683FF" />
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
  );
};

export default ManageClosing;
