import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { CheckCircle, Circle, ArrowRight, Lock } from 'lucide-react';

const StatusIcon = ({ status }: { status?: string }) => {
  if (status === 'completed') return <CheckCircle className="w-4 h-4 text-green-500" />;
  if (status === 'in-progress') return <ArrowRight className="w-4 h-4 text-blue-500" />;
  if (status === 'advanced') return <Lock className="w-4 h-4 text-purple-500" />;
  return <Circle className="w-4 h-4 text-slate-300" />;
};

export default memo(({ data, selected }: any) => {
  return (
    <div className={`px-4 py-3 shadow-md rounded-xl border bg-white dark:bg-slate-900 w-[250px] transition-all duration-300 ${
      selected 
        ? 'border-blue-500 ring-2 ring-blue-500/20' 
        : 'border-slate-200 dark:border-slate-800'
    } ${
        data.status === 'completed' ? 'border-l-4 border-l-green-500' : ''
    }`}>
      <Handle type="target" position={Position.Top} className="!bg-slate-400 !w-3 !h-1 !rounded-sm opacity-0 group-hover:opacity-100" />
      
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <StatusIcon status={data.status} />
        </div>
        <div>
           <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{data.label}</div>
           {data.description && (
             <div className="text-xs text-slate-500 mt-1 line-clamp-2">{data.description}</div>
           )}
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-slate-400 !w-3 !h-1 !rounded-sm opacity-0 group-hover:opacity-100" />
    </div>
  );
});
