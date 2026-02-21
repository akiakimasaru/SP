import React from 'react';

interface AgentCardProps {
  name: string;
  domain: 'knowledge' | 'work' | 'people';
  status: 'active' | 'inactive' | 'error' | 'processing';
  lastExecuted?: Date;
  executionCount: number;
  onExecute?: () => void;
  onConfigure?: () => void;
  onViewHistory?: () => void;
}

const domainColors = {
  knowledge: 'bg-blue-50 border-blue-200',
  work: 'bg-green-50 border-green-200',
  people: 'bg-purple-50 border-purple-200',
};

const statusColors = {
  active: 'bg-green-500',
  inactive: 'bg-gray-400',
  error: 'bg-red-500',
  processing: 'bg-yellow-500 animate-pulse',
};

const domainLabels = {
  knowledge: 'ナレッジ領域',
  work: 'ワーク領域',
  people: 'ピープル&ラーニング領域',
};

export const AgentCard: React.FC<AgentCardProps> = ({
  name,
  domain,
  status,
  lastExecuted,
  executionCount,
  onExecute,
  onConfigure,
  onViewHistory,
}) => {
  return (
    <div className={`p-6 rounded-lg border-2 ${domainColors[domain]} shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          </div>
          <p className="text-sm text-gray-600">{domainLabels[domain]}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">実行回数:</span>
          <span className="font-medium text-gray-900">{executionCount.toLocaleString()}</span>
        </div>
        {lastExecuted && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">最終実行:</span>
            <span className="font-medium text-gray-900">
              {lastExecuted.toLocaleDateString('ja-JP')} {lastExecuted.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        {onExecute && (
          <button
            onClick={onExecute}
            disabled={status === 'processing'}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'processing' ? '実行中...' : '実行'}
          </button>
        )}
        {onConfigure && (
          <button
            onClick={onConfigure}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            設定
          </button>
        )}
        {onViewHistory && (
          <button
            onClick={onViewHistory}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            履歴
          </button>
        )}
      </div>
    </div>
  );
};
