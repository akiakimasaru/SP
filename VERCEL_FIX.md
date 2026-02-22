# Vercelデプロイエラー修正ガイド

## 🔧 修正内容

エラー `cd: frontend: No such file or directory` を修正しました。

### 変更点

1. **プロジェクトルートの`vercel.json`を削除**
   - プロジェクトルートの`vercel.json`は削除しました

2. **`frontend/vercel.json`を作成**
   - `frontend`ディレクトリ内に`vercel.json`を配置しました
   - これにより、Vercelが`frontend`ディレクトリをルートとして認識します

## 🚀 デプロイ手順（修正後）

### 方法1: Vercelダッシュボードで設定（推奨）

1. **GitHubにプッシュ**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push
   ```

2. **Vercelダッシュボードで設定**
   - [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
   - プロジェクトの「Settings」を開く
   - 「General」→「Root Directory」を開く
   - **「Root Directory」を`frontend`に設定**
   - 「Save」をクリック

3. **再デプロイ**
   - 「Deployments」タブで「Redeploy」をクリック

### 方法2: Vercel CLIを使用

```bash
# frontendディレクトリに移動
cd frontend

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

## ⚠️ 重要なポイント

- **Root Directoryの設定が重要です**
  - Vercelダッシュボードで「Root Directory」を`frontend`に設定してください
  - これにより、Vercelは`frontend`ディレクトリをプロジェクトルートとして扱います

- **`frontend/vercel.json`について**
  - `frontend`ディレクトリ内の`vercel.json`は、Vercelが自動検出するため、実際には不要な場合もあります
  - しかし、明示的に設定することで、ビルド設定を明確にできます

## 🔍 エラーの原因

元のエラーは、Vercelがプロジェクトルート（`SP/`）からビルドを実行しようとしていたため、`cd frontend`コマンドが失敗していました。

修正後は、Vercelが`frontend`ディレクトリをルートとして認識するため、`cd frontend`は不要になります。
