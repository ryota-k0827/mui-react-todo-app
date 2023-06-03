# react-docker-project

## 概要
Reactの開発環境をDockerで構築するためのプロジェクト

## 動作確認環境

```sh
# --- mac version ---------------------------------------------------
% uname -m
arm64

% sw_vers
ProductName:		macOS
ProductVersion:		13.2.1
BuildVersion:		22D68
# -------------------------------------------------------------------

# --- Make ----------------------------------------------------------
% make -v
GNU Make 3.81
Copyright (C) 2006  Free Software Foundation, Inc.
This is free software; see the source for copying conditions.
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.

This program built for i386-apple-darwin11.3.0
# -------------------------------------------------------------------

# --- docker version ------------------------------------------------
% docker --version
Docker version 20.10.22, build 3a2c30b

% docker compose version
Docker Compose version v2.15.1
# -------------------------------------------------------------------

# --- vscode version ------------------------------------------------
% code -v
1.77.0
7f329fe6c66b0f86ae1574c2911b681ad5a45d63
arm64
# -------------------------------------------------------------------
```

## セットアップ

### 1. リポジトリをクローンする

```sh
# SSH
git clone git@github.com:ryota-k0827/react-docker-project.git

# HTTPS
git clone https://github.com/ryota-k0827/react-docker-project.git
```

### 2. ディレクトリに移動する

```sh
cd react-docker-project
```

### 3. 初期化（初回のみ）

コンテナのビルド、コンテナの起動までを一括で行います

```sh
# 初回実行コマンド
make init
```

### 4. VSCodeの拡張機能をインストールする

VSCodeを起動します

```sh
code .
```

VSCodeの右下に「推奨拡張機能をインストール」というポップアップが出るので、「インストール」をクリックします。

### 5. コンテナを起動

```sh
make up
```

### 6. ブラウザでアクセスする

```sh
# http://localhost:3000
make open/web
```

以下の画面が確認できれば完了

![screencapture-localhost-3000-2023-05-21-15_45_50](https://github.com/ryota-k0827/react-docker-project/assets/50436249/08b20ec2-4f68-446c-9703-1e5ea33d47e9)

## コンテナの操作

### コンテナの削除（終了時）

`Control` + `C`

### その他

- Makeコマンドのヘルプ
  ```sh
  make help
  ```
