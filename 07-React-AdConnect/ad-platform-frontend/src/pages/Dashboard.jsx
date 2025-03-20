import React from 'react';

const Dashboard = () => {
  // Dummy metrics for quick overview
  const metrics = [
    { label: "Total Earnings", value: "$2,450" },
    { label: "Total Clicks", value: "3,200" },
    { label: "Total Impressions", value: "45,000" },
    { label: "Conversion Rate", value: "4.5%" }
  ];

  // Dummy data for recent transactions
  const transactions = [
    { id: 1, date: "2025-03-01", adTitle: "Summer Sale", revenue: "$50", status: "Completed" },
    { id: 2, date: "2025-03-02", adTitle: "New Arrivals", revenue: "$75", status: "Pending" },
    { id: 3, date: "2025-03-03", adTitle: "Exclusive Offer", revenue: "$100", status: "Completed" },
    { id: 4, date: "2025-03-04", adTitle: "Holiday Deals", revenue: "$90", status: "Completed" },
    { id: 5, date: "2025-03-05", adTitle: "Tech Innovations", revenue: "$120", status: "Failed" },
    { id: 6, date: "2025-03-06", adTitle: "Fashion Fiesta", revenue: "$80", status: "Completed" },
    { id: 7, date: "2025-03-07", adTitle: "Spring Specials", revenue: "$60", status: "Completed" },
    { id: 8, date: "2025-03-08", adTitle: "Back to School", revenue: "$85", status: "Pending" }
  ];

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard</h1>

      {/* Overview Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{metric.label}</h2>
            <p className="text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Ad Title</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Revenue</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td className="px-4 py-2 text-sm">{txn.date}</td>
                  <td className="px-4 py-2 text-sm">{txn.adTitle}</td>
                  <td className="px-4 py-2 text-sm font-bold">{txn.revenue}</td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${txn.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : txn.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                        }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
