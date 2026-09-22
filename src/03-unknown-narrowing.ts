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

// any は型チェックをすり抜ける。unknown は確かめるまで何もできない
// typeof で調べた if の中だけ、値をその型として扱える（narrowing）
// type guard の構文を使うと、その値をその型として扱わせられる（チェックの仕方を誤ると判定も間違う）

import type { TodoStatus, Todo } from "./types/todo.ts"

// 実行: node src/03-unknown-narrowing.ts
const a: any = "q"
const b: unknown = "w"

console.log(a.toUpperCase())
// 型チェックでは落ちず実行時に落ちる
// console.log(a.fooBar())
// unknownは内容を確かめるまでエラーになる、実行はできる
// console.log(b.toUpperCase())

function decition(x: unknown) {
    if (typeof x === "string") {
        return x.toUpperCase()
    } else if (typeof x === "number") {
        return x * 2
    } else {
        throw new Error('Unusual input')
    }
}

const result = decition("b")
if (typeof result === "string") {
  console.log(result.toUpperCase())   // ここでは result は string
}

console.log(decition("a"))
console.log(decition(23))

function isTodo(value: unknown): value is Todo {
    return (
        typeof value === "object" 
        && value !== null && "id" in value 
        && typeof value.id === "number" 
        && "title" in value 
        && typeof value.title === "string" 
        && "status" in value 
        && (value.status === "todo" || value.status === "doing" || value.status === "done")
    ) 
}

const data: unknown = JSON.parse('{"id":1,"title":"牛乳を買う","status":"todo"}')
if (isTodo(data)) {
    console.log(data.title)
}