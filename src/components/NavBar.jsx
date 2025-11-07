import { useState } from "react";
import { Wallet, User, Building2, LogIn, X } from "lucide-react";

export default function NavBar({ mode, onModeChange }) {
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin"); // 'signin' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // In this Vite template we only provide the UI. Hook this up to your backend or Next.js BetterAuth instance.
    // For now we just close the panel to simulate success.
    setOpen(false);
    setEmail("");
    setPassword("");
    setName("");
  }

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
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition border bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            aria-label="Open sign in / register"
          >
            <LogIn size={16} /> Sign in
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
                  <Wallet size={16} />
                </div>
                <h3 className="font-semibold text-slate-900">Welcome</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-5 pt-4">
              <div className="inline-flex p-1 rounded-lg bg-slate-100 text-slate-600 text-sm">
                <button
                  onClick={() => setAuthMode("signin")}
                  className={`px-3 py-1.5 rounded-md transition ${authMode === "signin" ? "bg-white text-slate-900 shadow" : "hover:text-slate-900"}`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => setAuthMode("signup")}
                  className={`px-3 py-1.5 rounded-md transition ${authMode === "signup" ? "bg-white text-slate-900 shadow" : "hover:text-slate-900"}`}
                >
                  Create account
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-5 pb-5 pt-4 space-y-3">
              {authMode === "signup" && (
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800"
              >
                {authMode === "signin" ? "Sign in" : "Create account"}
              </button>
              <p className="text-xs text-slate-500 text-center">
                This UI is ready for BetterAuth. For a Next.js deployment, wire these controls to the BetterAuth client methods.
              </p>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
