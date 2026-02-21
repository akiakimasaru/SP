# 営業支援AIエージェントプラットフォーム

営業活動を支援する7つのAIエージェントを統合管理するプラットフォームです。

## 📋 概要

このプラットフォームは、営業活動を効率化するためのAIエージェント群を提供します：

### ナレッジ領域
- **資料収集・更新エージェント**: 営業資料の自動収集と更新監視
- **提案書作成エージェント**: 商談提案書の自動生成
- **Q&Aエージェント**: 顧客質問への自動回答

### ワーク領域
- **アカウントプランエージェント**: 顧客別アカウントプラン自動生成
- **タスクエージェント**: 商談・ミーティングタスクの自動生成
- **CRM/SFA運用エージェント**: CRM/SFA運用の自動監視とアラート

### ピープル&ラーニング領域
- **営業上司エージェント**: 営業担当への相談・指導

## 🏗️ プロジェクト構造

```
SP/
├── docs/                    # ドキュメント
│   ├── architecture.md     # アーキテクチャ設計
│   ├── requirements.md     # 開発要件
│   └── ui-design.md        # UI設計
├── frontend/               # フロントエンド (Next.js)
│   ├── app/               # App Router pages
│   ├── components/        # React コンポーネント
│   └── ...
├── backend/               # バックエンドAPI
│   ├── api/              # API エンドポイント
│   ├── agents/           # AIエージェント実装
│   └── ...
└── README.md
```

## 📚 ドキュメント

詳細な設計ドキュメントは以下のファイルを参照してください：

- [アーキテクチャ設計](./docs/architecture.md)
- [開発要件](./docs/requirements.md)
- [UI設計](./docs/ui-design.md)

## 🚀 セットアップ

### 前提条件

- Node.js 20+
- Python 3.11+ (バックエンド用)
- PostgreSQL
- Redis

### インストール

```bash
# フロントエンド
cd frontend
npm install

# バックエンド
cd backend
pip install -r requirements.txt
```

### 環境変数

`.env` ファイルを作成し、必要な環境変数を設定してください。

```env
# データベース
DATABASE_URL=postgresql://user:password@localhost:5432/sales_platform

# Redis
REDIS_URL=redis://localhost:6379

# LLM API
OPENAI_API_KEY=your_api_key
ANTHROPIC_API_KEY=your_api_key

# 認証
JWT_SECRET=your_jwt_secret
```

## 🛠️ 開発

### フロントエンド開発サーバー起動

```bash
cd frontend
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### バックエンド開発サーバー起動

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

## 🚀 Vercelへのデプロイ

詳細なデプロイ手順は [DEPLOY.md](./DEPLOY.md) を参照してください。

### クイックスタート

1. **Vercel CLIをインストール**
   ```bash
   npm i -g vercel
   ```

2. **フロントエンドディレクトリでデプロイ**
   ```bash
   cd frontend
   vercel
   ```

3. **本番環境にデプロイ**
   ```bash
   vercel --prod
   ```

### GitHub連携（推奨）

1. GitHubにリポジトリをプッシュ
2. [Vercel Dashboard](https://vercel.com/dashboard)でプロジェクトをインポート
3. **Root Directory** を `frontend` に設定
4. デプロイボタンをクリック

## 📦 技術スタック

### Frontend
- Next.js 14+ (App Router)
- React 18+
- Tailwind CSS
- TypeScript

### Backend
- FastAPI (Python) または Express.js (Node.js)
- LangChain / LangGraph
- PostgreSQL
- Redis

## 📝 ライセンス

このプロジェクトはプライベートプロジェクトです。
