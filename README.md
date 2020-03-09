# TAKIBI -- 焚き火

*「数年前に焚き火を囲む体験みたいなの流行ったやん？ 焚き火の動画見るのとかも流行ったやん？ それWebでやろかな。」*

というプロジェクトです。 先駆者がいるかもしれんが私は知らん。

## キーワード/コアイメージ
- **Firebase**
  - 最重要。 焚き火だし
- Angular
- PWA
- チャット
- ASMR
- 火・炎・薪・暗黒・光・コミュニケーション

## 環境設定
本プログラムの動作にはnpm環境と、Firebaseアカウントが必要です。

### Firebaseの設定
まずはじめに、リポジトリをクローンした後、次のコードをご自身の**Firebase SDK snippet**の情報で上書きしたものを、  
**`/src/environments/environment.firebase.ts`**として保存して下さい。

```ts
export const environment = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'xxxxxx-xxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxx-xxxxx.firebaseio.com',
  projectId: 'xxxxxx-xxxxx',
  storageBucket: 'xxxxxx-xxxxx.appspot.com',
  messagingSenderId: '000000000000',
  appId: '0:000000000000:web:0000000000000000000000',
  measurementId: 'X-XXXXXXXXX',
};
```

`environment.ts`や`environment.prod.ts`は`environment.firebase.ts`の情報を元にfirebaseにアクセスできるようになります。

---

（別に私のAPIを使ってもらっても構わないのですが、際限なく使われてしまっては困るのでご協力よろしくおねがいします。）

### インストール・起動
```sh
$ npm i     # パッケージのインストール
$ npm start # 開発サーバーの起動
```

## コントリビューション
お遊びで作ってるので気軽にどうぞ。 ライセンスもMITです。

Issueの書き込みもお待ちしてます。
