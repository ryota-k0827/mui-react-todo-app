# ベースイメージの指定
# latestはバージョンが変わる可能性があるので、バージョンを指定する！
FROM node:18.16.0-alpine3.17

# gitのインストール
RUN apk add --no-cache git~=2.38.5

# コンテナ内で作業する際のカレントディレクトリの指定
WORKDIR /app

# npmのアップデート
RUN npm install -g npm@9.6.7

# ホストのpackage.jsonをコンテナ内にコピー
COPY package.json ./
COPY yarn.lock ./

# 依存関係のインストール
RUN yarn install --frozen-lockfile
