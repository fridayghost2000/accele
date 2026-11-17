import { useState } from 'react'
import { 
  Sparkles, 
  Layers, 
  Zap, 
  Code2, 
  CheckCircle2, 
  ExternalLink,
  Plus,
  Minus,
  RotateCcw
} from 'lucide-react'

export default function App() {
  const [count, setCount] = useState(0)

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Vite Bundler",
      description: "Lightning-fast hot module replacement (HMR) and optimized build speeds."
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-500" />,
      title: "Tailwind CSS",
      description: "Utility-first modern styling setup ready for rapid component development."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "React 19",
      description: "Modern declarative component architecture with the latest React features."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      title: "Lucide Icons",
      description: "Clean, consistent icon set integrated and ready to use across your app."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              A
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">Accele</span>
              <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                v1.0.0
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Ready to build
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Project successfully configured with React + Tailwind CSS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Build modern apps with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              React & Tailwind
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Your workspace is set up with Vite, React 19, Tailwind CSS, and Lucide icons.
            Start editing <code className="text-indigo-300 bg-slate-900 px-2 py-1 rounded border border-slate-800 font-mono text-sm">src/App.jsx</code> to develop your application.
          </p>
        </div>

        {/* Interactive State Demo */}
        <div className="max-w-md mx-auto w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl mb-16">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Interactive State Test
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300">
              useState Hook
            </span>
          </div>
          <div className="text-center py-6">
            <div className="text-5xl font-black text-white tracking-tight mb-2">
              {count}
            </div>
            <p className="text-xs text-slate-400">Current Counter Value</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setCount(prev => prev - 1)}
              className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition active:scale-95"
            >
              <Minus className="w-4 h-4" />
              <span>Dec</span>
            </button>
            <button
              onClick={() => setCount(0)}
              className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-slate-200 font-medium transition active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
            <button
              onClick={() => setCount(prev => prev + 1)}
              className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/25 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Inc</span>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition hover:bg-slate-900/70"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <p>Accele • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}
