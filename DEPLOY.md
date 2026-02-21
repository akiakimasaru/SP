# Vercelへのデプロイ手順

## 前提条件

- GitHubアカウント
- Vercelアカウント（[vercel.com](https://vercel.com)で無料登録可能）

## デプロイ方法

### 方法1: Vercel CLIを使用（推奨）

1. **Vercel CLIをインストール**
   ```bash
   npm i -g vercel
   ```

2. **プロジェクトルートでログイン**
   ```bash
   vercel login
   ```

3. **フロントエンドディレクトリに移動**
   ```bash
   cd frontend
   ```

4. **デプロイ**
   ```bash
   vercel
   ```
   
   初回デプロイ時は以下の質問に答えます：
   - Set up and deploy? → **Yes**
   - Which scope? → あなたのアカウントを選択
   - Link to existing project? → **No**
   - What's your project's name? → プロジェクト名を入力（例: `sales-platform`）
   - In which directory is your code located? → **./** または **frontend**（プロジェクトルートから実行する場合）

5. **本番環境にデプロイ**
   ```bash
   vercel --prod
   ```

### 方法2: GitHub連携（推奨）

1. **GitHubにリポジトリをプッシュ**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Vercelでプロジェクトをインポート**
   - [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
   - "Add New..." → "Project" をクリック
   - GitHubリポジトリを選択
   - プロジェクト設定：
     - **Framework Preset**: Next.js
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`（自動検出されるはず）
     - **Output Directory**: `.next`（自動検出されるはず）
     - **Install Command**: `npm install`（自動検出されるはず）

3. **環境変数の設定（必要に応じて）**
   - プロジェクト設定 → Environment Variables
   - 必要な環境変数を追加

4. **デプロイ**
   - "Deploy" ボタンをクリック

## プロジェクト設定

Vercelでは以下の設定が自動検出されます：

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 環境変数

必要に応じて、Vercelのダッシュボードで以下の環境変数を設定してください：

```
NEXT_PUBLIC_API_URL=https://your-api-url.com/api/v1
NEXT_PUBLIC_ENV=production
```

## カスタムドメインの設定

1. Vercelダッシュボードでプロジェクトを開く
2. Settings → Domains
3. カスタムドメインを追加

## トラブルシューティング

### ビルドエラーが発生する場合

- `package.json`の依存関係を確認
- ローカルで `npm run build` が成功するか確認
- Vercelのビルドログを確認

### パスエイリアス（@/）が動作しない場合

- `tsconfig.json`の`paths`設定を確認
- `next.config.js`で追加設定が必要な場合がある

### スタイルが適用されない場合

- `tailwind.config.js`の`content`パスを確認
- `globals.css`が正しくインポートされているか確認

## 参考リンク

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
