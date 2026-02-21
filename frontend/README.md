# 営業支援AIエージェントプラットフォーム - フロントエンド

Next.js 14 + React 18 + TypeScript + Tailwind CSS で構築されたフロントエンドアプリケーションです。

## 🚀 クイックスタート

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

```bash
npm run build
```

### 本番環境で起動

```bash
npm start
```

## 📁 プロジェクト構造

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── ui/               # UIコンポーネント
│   │   ├── Dashboard.tsx
│   │   └── AgentCard.tsx
│   └── agents/           # エージェント固有コンポーネント
│       ├── ProposalGenerator.tsx
│       └── QAAgent.tsx
├── public/               # 静的ファイル
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 スタイリング

このプロジェクトは [Tailwind CSS](https://tailwindcss.com) を使用しています。

カスタムカラーは `tailwind.config.js` で定義されています。

## 🔧 設定

### 環境変数

`.env.local` ファイルを作成して環境変数を設定できます：

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

### TypeScript

TypeScriptの設定は `tsconfig.json` で管理されています。

パスエイリアス `@/` が設定されており、プロジェクトルートからの相対パスでインポートできます。

## 📦 依存関係

主要な依存関係：

- **Next.js 14**: Reactフレームワーク
- **React 18**: UIライブラリ
- **TypeScript**: 型安全性
- **Tailwind CSS**: ユーティリティファーストCSS

## 🚀 Vercelへのデプロイ

### 方法1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### 方法2: GitHub連携

1. GitHubにリポジトリをプッシュ
2. Vercelダッシュボードでプロジェクトをインポート
3. **Root Directory** を `frontend` に設定（プロジェクトルートから実行する場合）
4. デプロイ

詳細は [../DEPLOY.md](../DEPLOY.md) を参照してください。

## 📝 開発ガイドライン

- コンポーネントは `components/` ディレクトリに配置
- UIコンポーネントは `components/ui/` に配置
- エージェント固有コンポーネントは `components/agents/` に配置
- TypeScriptの型定義を活用
- Tailwind CSSのユーティリティクラスを使用

## 🐛 トラブルシューティング

### ビルドエラー

- `npm install` を実行して依存関係を再インストール
- `node_modules` を削除して再インストール

### スタイルが適用されない

- `tailwind.config.js` の `content` パスを確認
- ブラウザのキャッシュをクリア

### パスエイリアス（@/）が動作しない

- `tsconfig.json` の `paths` 設定を確認
- IDEを再起動
