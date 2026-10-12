import { useState } from 'react'

export default function App() {
  const [testCount, setTestCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
          ℞
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Nishan Pharmacy & Grocery
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Frontend initialized with React + Vite + Tailwind CSS
          </p>
        </div>
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Setup Status
          </p>
          <p className="text-sm text-emerald-700 mt-1">
            ✓ Tailwind CSS styling is active and compiled successfully!
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => setTestCount((c) => c + 1)}
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Interactive Test Click: {testCount}
          </button>
        </div>
      </div>
    </div>
  )
}
