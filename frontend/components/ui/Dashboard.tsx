import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'red' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    red: 'bg-red-50 text-red-600',
    yellow: 'bg-yellow-50 text-yellow-600',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface AgentProgressProps {
  name: string;
  progress: number;
  status: 'active' | 'inactive' | 'error';
}

const AgentProgress: React.FC<AgentProgressProps> = ({ name, progress, status }) => {
  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-300',
    error: 'bg-red-500',
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${statusColors[status]}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const Dashboard: React.FC = () => {
  const stats = [
    { title: '実行中', value: 12, icon: '⚙️', color: 'blue' as const },
    { title: '完了', value: 245, icon: '✅', color: 'green' as const },
    { title: 'エラー', value: 3, icon: '❌', color: 'red' as const },
    { title: '待機中', value: 8, icon: '⏳', color: 'yellow' as const },
  ];

  const agents = [
    { name: '資料収集・更新', progress: 80, status: 'active' as const },
    { name: '提案書作成', progress: 60, status: 'active' as const },
    { name: 'Q&A', progress: 100, status: 'active' as const },
    { name: 'アカウントプラン', progress: 40, status: 'active' as const },
    { name: 'タスク', progress: 80, status: 'active' as const },
    { name: 'CRM/SFA運用', progress: 100, status: 'active' as const },
    { name: '営業上司', progress: 70, status: 'active' as const },
  ];

  const recentTasks = [
    { id: 1, title: '提案書生成完了', customer: '顧客A', time: '2時間前' },
    { id: 2, title: 'タスク生成', deal: '商談B', time: '5時間前' },
    { id: 3, title: 'アカウントプラン更新', customer: '顧客C', time: '1日前' },
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: '資料更新検知', detail: '営業資料v2.0', time: '1時間前' },
    { id: 2, type: 'error', message: 'CRMデータ異常', detail: '顧客C', time: '3時間前' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">ダッシュボード</h1>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={<span className="text-2xl">{stat.icon}</span>}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* エージェント別実行状況 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">エージェント別実行状況</h2>
          <div>
            {agents.map((agent) => (
              <AgentProgress
                key={agent.name}
                name={agent.name}
                progress={agent.progress}
                status={agent.status}
              />
            ))}
          </div>
        </div>

        {/* 最近のアクティビティ */}
        <div className="space-y-6">
          {/* 最近のタスク */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">最近のタスク</h2>
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {task.customer || task.deal} • {task.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 最近のアラート */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">最近のアラート</h2>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start gap-3 p-3 rounded-md ${
                    alert.type === 'error' ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'
                  }`}
                >
                  <span className="text-lg">{alert.type === 'error' ? '⚠️' : '🔔'}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {alert.detail} • {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
