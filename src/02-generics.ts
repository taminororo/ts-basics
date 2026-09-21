// generics
// 資料いわく「書くより読むことのほうがずっと多い」。まずは読めるようになるのが目標
//
// 練習:
// 1. Array<string> と string[]、Promise<number> がそれぞれ何を表すか、コメントで説明する
// 2. 配列の最初の要素を返す関数 first を、どんな型の配列にも使えるように書く
//    first([1, 2, 3]) の結果が number、first(['a', 'b']) の結果が string になれば成功
// 3. todo-app の web/src/api.ts にある json<T>() を読み、T が何のためにあるかを説明する

import type { Todo } from "./types/todo.ts";

const fruits: Array<string> = ['りんご', 'バナナ']
const numbers: Array<number> = [23, 12]
const todos: Array<Todo> = [{id: 1, title: "牛乳を買う", status: 'todo'}]

const fruits2: string[] = fruits

// Promise解決後は中身の型になる
const p: Promise<number> = Promise.resolve(42)
const n = await p

// @ts-expect-error Promiseは違う型に入れられない
const bad: Promise<number> = Promise.resolve('a')

function first<T>(x: T[]): T | undefined {
  return x[0]
}

const a = first([1,2,3])
if (a !== undefined) {
    console.log(a.toFixed(2))
}

const b = first(['a', 'b'])


// 1つの関数を、ジェネリクスにすることで使いまわせる例をAPIでやった
// Responseからはres.json()の本文の形がわからないので、呼び出しがわが型を渡す
async function json<T> (res: Response): Promise<T> {
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json() as Promise<T>;
}

const BASE = "https://example.com"
export const api = {
    list: () => fetch(BASE).then(json<Todo[]>),
    create: (title: string) => 
        fetch(BASE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        }).then(json<Todo>),
}