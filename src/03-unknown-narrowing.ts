// unknown vs any / narrowing / type guards
//
// 練習:
// 1. any 型の変数と unknown 型の変数を作り、それぞれで .toUpperCase() を呼ぶ。
//    どちらが型エラーになるか、なぜそうなるかを確かめる
// 2. unknown の値を受け取り、string なら大文字にして、number なら 2 倍にして返す関数を書く
//    (typeof で型を絞り込む = narrowing)
// 3. unknown の値が Todo の形をしているか確かめる関数 isTodo(value: unknown): value is Todo を書く
//    (type guard。fetch した res.json() の結果を安全に扱うための道具)
//
// 実行: node src/03-unknown-narrowing.ts
