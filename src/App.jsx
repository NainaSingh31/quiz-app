import { Outlet, Link, useLocation } from 'react-router-dom';
export default function App() {
  const loc = useLocation();
  return (<div className="min-h-screen flex flex-col">
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
        <Link to="/quiz" className="font-semibold tracking-tight text-xl">Quiz App</Link>
        <div className="text-sm text-gray-500">{loc.pathname === '/results' ? 'Results' : 'Quiz'}</div>
      </nav></header>
    <main className="flex-1 mx-auto max-w-3xl w-full px-4 py-6"><Outlet /></main>
    <footer className="border-t bg-white"><div className="mx-auto max-w-3xl px-4 py-4 text-xs text-gray-500">
      Built with React • Open Trivia DB • TailwindCSS</div></footer></div>);
}