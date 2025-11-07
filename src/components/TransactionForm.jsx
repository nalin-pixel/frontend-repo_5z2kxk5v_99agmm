import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function TransactionForm({ onAdd }) {
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("General");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const value = Number(amount);
    if (!value || value <= 0) return;
    onAdd({
      id: crypto.randomUUID(),
      type,
      category,
      amount: value,
      note,
      date: new Date().toISOString(),
    });
    setAmount(0);
    setNote("");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-slate-900">Add Transaction</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option>General</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Housing</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Salary</option>
          <option>Other</option>
        </select>
        <input
          type="number"
          value={amount}
          min="0"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note (optional)"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800"
        >
          <PlusCircle size={16} /> Add
        </button>
      </div>
    </form>
  );
}
