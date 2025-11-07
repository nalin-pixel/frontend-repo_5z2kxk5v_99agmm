import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

export default function BudgetSummary({ summary }) {
  const { income, expenses, balance, month } = summary;
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{month} Snapshot</h2>
          <p className="text-slate-500">Your financial overview at a glance</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">Income</p>
            <ArrowUpRight className="text-emerald-600" size={18} />
          </div>
          <p className="mt-2 text-2xl font-semibold">${income.toLocaleString()}</p>
          <p className="text-xs text-emerald-600 mt-1">On track</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">Expenses</p>
            <ArrowDownRight className="text-rose-600" size={18} />
          </div>
          <p className="mt-2 text-2xl font-semibold">${expenses.toLocaleString()}</p>
          <p className="text-xs text-rose-600 mt-1">Keep an eye</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">Balance</p>
            <TrendingUp className="text-indigo-600" size={18} />
          </div>
          <p className={`mt-2 text-2xl font-semibold ${balance >= 0 ? "text-slate-900" : "text-rose-600"}`}>
            ${balance.toLocaleString()}
          </p>
          <p className="text-xs text-slate-500 mt-1">After expenses</p>
        </div>
      </div>
    </section>
  );
}
