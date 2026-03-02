'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function DashboardPage() {
  const [balance] = useState(5420.75);
  const [transactions] = useState([
    { id: 1, name: 'Salary Deposit', amount: '+$3000', date: '2025-03-01', type: 'income' },
    { id: 2, name: 'Grocery Shopping', amount: '-$125.50', date: '2025-02-28', type: 'expense' },
    { id: 3, name: 'Internet Bill', amount: '-$79.99', date: '2025-02-27', type: 'expense' },
    { id: 4, name: 'Freelance Project', amount: '+$500', date: '2025-02-26', type: 'income' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Profile
          </Button>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <p className="text-sm font-semibold opacity-90">Total Balance</p>
          <h2 className="text-5xl font-bold">${balance.toFixed(2)}</h2>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
            Add Income
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3">
            Add Expense
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3">
            Export Report
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Description</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date</th>
                  <th className="text-right py-3 px-4 text-gray-600 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-800">{tx.name}</td>
                    <td className="py-3 px-4 text-gray-600">{tx.date}</td>
                    <td className={`py-3 px-4 text-right font-semibold ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                      {tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
