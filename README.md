# mui-react-todo-app

## 概要

React + Material-UI で作成したToDoアプリ

## セットアップ

### 1. リポジトリをクローンする

```sh
# SSH
git clone git@github.com:ryota-k0827/mui-react-todo-app.git

# HTTPS
git clone https://github.com/ryota-k0827/mui-react-todo-app.git
```

### 2. ディレクトリに移動する

```sh
cd mui-react-todo-app
```

### 3. 初期化（初回のみ）

コンテナのビルド、コンテナの起動までを一括で行います

```sh
# 初回実行コマンド
make init
```

### 4. コンテナを起動

```sh
make up
```

### 5. ブラウザでアクセスする

```sh
# http://localhost:3000
make open/web
```

## コンテナの操作

### コンテナの削除（終了時）

`Control` + `C`

### その他

- Makeコマンドのヘルプ
  ```sh
  make help
  ```
