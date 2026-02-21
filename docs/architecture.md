# 営業支援AIエージェントプラットフォーム - アーキテクチャ設計

## 1. システム概要

営業活動を支援する7つのAIエージェントを統合管理するプラットフォーム。

## 2. ドメイン構造

### 2.1 ナレッジ領域 (Knowledge Domain)
- **資料収集・更新エージェント**: 営業資料の自動収集と更新監視
- **提案書作成エージェント**: 商談提案書の自動生成
- **Q&Aエージェント**: 顧客質問への自動回答

### 2.2 ワーク領域 (Work Domain)
- **アカウントプランエージェント**: 顧客別アカウントプラン自動生成
- **タスクエージェント**: 商談・ミーティングタスクの自動生成
- **CRM/SFA運用エージェント**: CRM/SFA運用の自動監視とアラート

### 2.3 ピープル&ラーニング領域 (People & Learning Domain)
- **営業上司エージェント**: 営業担当への相談・指導

## 3. システムアーキテクチャ

### 3.1 全体構成
```
┌─────────────────────────────────────────────────────────┐
│                    Frontend Layer                        │
│  (React/Next.js - Dashboard, Agent Management UI)        │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│                   API Gateway Layer                      │
│  (REST API / GraphQL - Authentication, Routing)          │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│              Agent Orchestration Layer                   │
│  (Agent Manager, Workflow Engine, Task Queue)           │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│              AI Agent Services Layer                     │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │ Knowledge    │ Work         │ People&Learn │        │
│  │ Domain       │ Domain       │ Domain       │        │
│  └──────────────┴──────────────┴──────────────┘        │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│              Data & Integration Layer                    │
│  (Database, CRM/SFA Connectors, Document Storage)       │
└─────────────────────────────────────────────────────────┘
```

### 3.2 技術スタック

#### Frontend
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+, Tailwind CSS
- **State Management**: Zustand / React Query
- **UI Components**: shadcn/ui
- **Charts**: Recharts / Chart.js

#### Backend
- **Runtime**: Node.js 20+ / Python 3.11+
- **API Framework**: FastAPI (Python) or Express.js (Node.js)
- **Agent Framework**: LangChain / LangGraph
- **LLM**: OpenAI GPT-4 / Anthropic Claude
- **Task Queue**: Celery (Python) or Bull (Node.js)

#### Database
- **Primary DB**: PostgreSQL
- **Cache**: Redis
- **Document Store**: MongoDB / Vector DB (Pinecone/Weaviate)

#### Infrastructure
- **Container**: Docker, Docker Compose
- **Orchestration**: Kubernetes (optional)
- **CI/CD**: GitHub Actions

## 4. ディレクトリ構造

```
SP/
├── frontend/                 # Next.js フロントエンド
│   ├── app/                 # App Router pages
│   │   ├── dashboard/        # ダッシュボード
│   │   ├── agents/           # エージェント管理
│   │   │   ├── knowledge/    # ナレッジ領域エージェント
│   │   │   ├── work/         # ワーク領域エージェント
│   │   │   └── people/       # ピープル領域エージェント
│   │   └── settings/         # 設定
│   ├── components/           # React コンポーネント
│   │   ├── agents/           # エージェント固有コンポーネント
│   │   ├── common/           # 共通コンポーネント
│   │   └── layout/           # レイアウトコンポーネント
│   ├── lib/                  # ユーティリティ
│   ├── hooks/                # React Hooks
│   └── types/                # TypeScript型定義
│
├── backend/                  # バックエンドAPI
│   ├── api/                  # API エンドポイント
│   │   ├── v1/
│   │   │   ├── agents/       # エージェントAPI
│   │   │   ├── documents/    # 資料管理API
│   │   │   ├── tasks/        # タスク管理API
│   │   │   └── accounts/     # アカウント管理API
│   │   └── auth/             # 認証API
│   ├── agents/               # AIエージェント実装
│   │   ├── knowledge/        # ナレッジ領域
│   │   │   ├── document_collector/
│   │   │   ├── proposal_generator/
│   │   │   └── qa_agent/
│   │   ├── work/             # ワーク領域
│   │   │   ├── account_planner/
│   │   │   ├── task_agent/
│   │   │   └── crm_monitor/
│   │   └── people/           # ピープル領域
│   │       └── sales_supervisor/
│   ├── core/                 # コア機能
│   │   ├── orchestration/    # エージェントオーケストレーション
│   │   ├── workflow/         # ワークフローエンジン
│   │   └── queue/            # タスクキュー
│   ├── models/               # データモデル
│   ├── services/             # ビジネスロジック
│   └── integrations/         # 外部連携
│       ├── crm/              # CRM/SFA連携
│       └── storage/          # ストレージ連携
│
├── shared/                   # 共有コード
│   ├── types/                # 共通型定義
│   └── constants/            # 定数
│
├── infrastructure/           # インフラ設定
│   ├── docker/               # Docker設定
│   ├── k8s/                  # Kubernetes設定
│   └── scripts/              # デプロイスクリプト
│
├── docs/                     # ドキュメント
│   ├── architecture.md       # このファイル
│   ├── requirements.md       # 要件定義
│   └── api/                  # API仕様
│
└── tests/                    # テスト
    ├── unit/
    ├── integration/
    └── e2e/
```

## 5. データモデル

### 5.1 主要エンティティ

```typescript
// エージェント
interface Agent {
  id: string;
  name: string;
  domain: 'knowledge' | 'work' | 'people';
  type: AgentType;
  status: 'active' | 'inactive' | 'error';
  config: AgentConfig;
  createdAt: Date;
  updatedAt: Date;
}

// タスク
interface Task {
  id: string;
  agentId: string;
  type: TaskType;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  input: Record<string, any>;
  output: Record<string, any>;
  createdAt: Date;
  completedAt?: Date;
}

// 顧客/アカウント
interface Account {
  id: string;
  name: string;
  accountPlan?: AccountPlan;
  documents: Document[];
  tasks: Task[];
  createdAt: Date;
}

// 資料
interface Document {
  id: string;
  title: string;
  type: 'proposal' | 'sales_material' | 'other';
  content: string;
  source: string;
  lastUpdated: Date;
  version: number;
}

// 提案書
interface Proposal {
  id: string;
  accountId: string;
  title: string;
  content: string;
  status: 'draft' | 'review' | 'approved' | 'sent';
  generatedAt: Date;
}
```

## 6. エージェント間の連携

### 6.1 ワークフロー例

**提案書作成フロー:**
```
資料収集エージェント → 提案書作成エージェント → タスクエージェント
```

**アカウントプラン作成フロー:**
```
CRM/SFA運用エージェント → アカウントプランエージェント → タスクエージェント
```

### 6.2 イベント駆動アーキテクチャ

- エージェント間の通信はイベントベース
- メッセージキュー（Redis/RabbitMQ）を使用
- 非同期処理でスケーラビリティを確保

## 7. セキュリティ

- 認証: JWT + OAuth2
- 認可: RBAC (Role-Based Access Control)
- データ暗号化: 保存時・転送時
- API レート制限
- 監査ログ

## 8. 監視・ログ

- アプリケーションログ: ELK Stack / Loki
- メトリクス: Prometheus + Grafana
- エージェント実行状況の可視化
- エラートラッキング: Sentry
