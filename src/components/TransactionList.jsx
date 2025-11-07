import { Trash2 } from "lucide-react";

export default function TransactionList({ items, onDelete }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-medium text-slate-900">Recent Activity</h3>
        <p className="text-xs text-slate-500">{items.length} items</p>
      </div>
      <ul className="divide-y divide-slate-200">
        {items.length === 0 && (
          <li className="px-5 py-6 text-sm text-slate-500">No transactions yet. Add your first one above.</li>
        )}
        {items.map((t) => (
          <li key={t.id} className="px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  t.type === "income" ? "bg-emerald-500" : "bg-rose-500"
                }`}
                aria-hidden
              />
              <div>
                <p className="text-sm font-medium text-slate-900">{t.category}</p>
                <p className="text-xs text-slate-500">{new Date(t.date).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className={`text-sm font-semibold ${t.type === "income" ? "text-emerald-600" : "text-rose-600"}`}>
                {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
              </p>
              <button
                onClick={() => onDelete(t.id)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
                aria-label="Delete transaction"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
