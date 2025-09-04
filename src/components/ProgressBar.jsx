export default function ProgressBar({value=0,max=10}){const pct=max>0?Math.min(100,Math.round((value/max)*100)):0;
return(<div className="w-full"><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-2 bg-blue-500 transition-all" style={{width:`${pct}%`}}/></div>
<div className="mt-1 text-xs text-gray-600">{value} / {max}</div></div>);}