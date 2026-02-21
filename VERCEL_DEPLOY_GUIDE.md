# Vercelデプロイガイド - どのファイルをアップロードするか

## 📦 アップロードするファイル

Vercelにデプロイするには、**`frontend`ディレクトリ全体**をアップロードします。

### 必須ファイル（frontendディレクトリ内）

```
frontend/
├── app/                    ✅ 必須
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             ✅ 必須
│   ├── ui/
│   └── agents/
├── package.json            ✅ 必須
├── next.config.js          ✅ 必須
├── tsconfig.json           ✅ 必須
├── tailwind.config.js      ✅ 必須
├── postcss.config.js       ✅ 必須
└── .gitignore              ✅ 推奨
```

## 🚀 デプロイ方法

### 方法1: GitHub連携（最も簡単・推奨）

#### ステップ1: GitHubにリポジトリを作成

```bash
# プロジェクトルートで実行
cd /Users/akiyamamasaru/SP

# Gitリポジトリを初期化（まだの場合）
git init
git add .
git commit -m "Initial commit"

# GitHubにリポジトリを作成してから、以下を実行
git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
git branch -M main
git push -u origin main
```

#### ステップ2: Vercelでインポート

1. [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
2. "Add New..." → "Project" をクリック
3. GitHubリポジトリを選択
4. **重要**: プロジェクト設定で以下を設定：
   - **Root Directory**: `frontend` を選択
   - Framework Preset: Next.js（自動検出）
   - Build Command: `npm run build`（自動検出）
   - Output Directory: `.next`（自動検出）
5. "Deploy" ボタンをクリック

### 方法2: Vercel CLI（直接デプロイ）

#### ステップ1: Vercel CLIをインストール

```bash
npm i -g vercel
```

#### ステップ2: frontendディレクトリでデプロイ

```bash
# frontendディレクトリに移動
cd /Users/akiyamamasaru/SP/frontend

# Vercelにログイン
vercel login

# デプロイ（初回）
vercel

# 本番環境にデプロイ
vercel --prod
```

初回デプロイ時の質問：
- Set up and deploy? → **Yes**
- Which scope? → あなたのアカウントを選択
- Link to existing project? → **No**
- What's your project's name? → プロジェクト名を入力
- In which directory is your code located? → **./** （frontendディレクトリ内なので）

## ⚠️ 重要なポイント

### ✅ アップロードするもの

- **`frontend`ディレクトリ全体**
- `package.json`（依存関係の定義）
- すべてのソースコード（`.tsx`, `.ts`, `.css`ファイル）
- 設定ファイル（`next.config.js`, `tsconfig.json`, `tailwind.config.js`など）

### ❌ アップロードしないもの（自動的に除外される）

- `node_modules/`（`.gitignore`で除外、Vercelが自動インストール）
- `.next/`（ビルド時に生成）
- `.env*.local`（環境変数はVercelダッシュボードで設定）
- `.git/`（GitHub連携の場合）

## 🔧 プロジェクトルートからデプロイする場合

もしプロジェクトルート（`SP/`）からデプロイしたい場合は、`vercel.json`の設定を使用できます：

```json
{
  "version": 2,
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/.next",
  "installCommand": "cd frontend && npm install",
  "framework": "nextjs"
}
```

この場合、プロジェクトルートから`vercel`コマンドを実行します。

## 📝 推奨手順（最も簡単）

1. **GitHubにプッシュ**
   ```bash
   cd /Users/akiyamamasaru/SP
   git init
   git add .
   git commit -m "Initial commit"
   # GitHubにリポジトリを作成してから
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Vercelでインポート**
   - Vercelダッシュボードでプロジェクトをインポート
   - **Root Directory**: `frontend` を設定
   - デプロイ

これで完了です！🎉
