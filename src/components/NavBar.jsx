import { Wallet, User, Building2 } from "lucide-react";

export default function NavBar({ mode, onModeChange }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow">
            <Wallet size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Budgetly</p>
            <p className="text-xs text-slate-500">Plan. Track. Thrive.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onModeChange("personal")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition border ${
              mode === "personal"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
            aria-label="Switch to personal budget"
          >
            <User size={16} /> Personal
          </button>
          <button
            onClick={() => onModeChange("organization")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition border ${
              mode === "organization"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
            aria-label="Switch to organization budget"
          >
            <Building2 size={16} /> Organization
          </button>
        </div>
      </div>
    </header>
  );
}
