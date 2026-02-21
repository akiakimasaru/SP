import React, { useState } from 'react';

interface Proposal {
  id: string;
  title: string;
  customer: string;
  status: 'draft' | 'review' | 'approved' | 'sent';
  createdAt: Date;
}

export const ProposalGenerator: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: '1',
      title: '顧客A向け提案書',
      customer: '顧客A',
      status: 'review',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      title: '顧客B向け提案書',
      customer: '顧客B',
      status: 'approved',
      createdAt: new Date('2024-01-14'),
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    customer: '',
    deal: '',
    template: 'standard',
    additionalInfo: '',
  });

  const statusLabels = {
    draft: '下書き',
    review: 'レビュー中',
    approved: '承認済み',
    sent: '送信済み',
  };

  const statusColors = {
    draft: 'bg-gray-100 text-gray-800',
    review: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    sent: 'bg-blue-100 text-blue-800',
  };

  const handleCreate = () => {
    // 提案書生成ロジック
    console.log('Creating proposal with:', formData);
    setShowCreateModal(false);
    // 実際の実装ではAPIを呼び出す
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">提案書作成エージェント</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + 新規提案書作成
        </button>
      </div>

      {/* 提案書一覧 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">提案書一覧</h2>
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📋</span>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{proposal.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          作成日: {proposal.createdAt.toLocaleDateString('ja-JP')}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[proposal.status]}`}>
                        {statusLabels[proposal.status]}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                      プレビュー
                    </button>
                    {proposal.status === 'review' && (
                      <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        承認
                      </button>
                    )}
                    {proposal.status === 'approved' && (
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        ダウンロード
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 新規作成モーダル */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">新規提案書作成</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">顧客</label>
                <select
                  value={formData.customer}
                  onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">顧客を選択</option>
                  <option value="customer1">顧客A</option>
                  <option value="customer2">顧客B</option>
                  <option value="customer3">顧客C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">商談</label>
                <select
                  value={formData.deal}
                  onChange={(e) => setFormData({ ...formData, deal: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">商談を選択</option>
                  <option value="deal1">商談1</option>
                  <option value="deal2">商談2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">テンプレート</label>
                <select
                  value={formData.template}
                  onChange={(e) => setFormData({ ...formData, template: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="standard">標準テンプレート</option>
                  <option value="premium">プレミアムテンプレート</option>
                  <option value="custom">カスタムテンプレート</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">追加情報</label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="追加の要件や情報を入力してください"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCreate}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                生成
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
