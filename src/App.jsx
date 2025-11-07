import { useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import BudgetSummary from "./components/BudgetSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function calculateSummary(transactions, monthLabel) {
  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expenses = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  return { income, expenses, balance: income - expenses, month: monthLabel };
}

export default function App() {
  const [mode, setMode] = useState("personal");
  const [transactions, setTransactions] = useState([]);

  const monthLabel = useMemo(() => new Date().toLocaleString(undefined, { month: "long", year: "numeric" }), []);
  const summary = useMemo(() => calculateSummary(transactions, monthLabel), [transactions, monthLabel]);

  function handleAdd(t) {
    setTransactions(prev => [t, ...prev]);
  }

  function handleDelete(id) {
    setTransactions(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar mode={mode} onModeChange={setMode} />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 text-white p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">{mode === "personal" ? "Personal" : "Organization"} Budget Planner</h1>
              <p className="text-white/80 mt-1 text-sm">Track income and expenses, stay on top of cash flow, and plan with clarity.</p>
            </div>
          </div>
        </div>

        <BudgetSummary summary={summary} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TransactionForm onAdd={handleAdd} />
          </div>
          <div className="lg:col-span-2">
            <TransactionList items={transactions} onDelete={handleDelete} />
          </div>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-medium text-slate-900 mb-2">How this works</h3>
          <ul className="list-disc ml-5 text-sm text-slate-600 space-y-1">
            <li>Add income or expense items with categories and notes.</li>
            <li>See your monthly snapshot update instantly.</li>
            <li>Switch between personal and organization mode at the top.</li>
          </ul>
        </section>
      </main>
      <footer className="py-8 text-center text-xs text-slate-500">
        Built for you with ❤️ — Ready for auth, multi-user and team workspaces.
      </footer>
    </div>
  );
}
