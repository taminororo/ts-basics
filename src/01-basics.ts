// primitives / interface vs type / unions / literal types
//
// 練習:
// 1. string, number, boolean の変数を1つずつ作る。わざと違う型の値を入れて、
//    npm run check-types でどんなエラーが出るか読む
// 2. interface と type の違いを、3つの実験で確かめる
//    2-a. Todo と同じ形の型を `type TodoAsType = { ... }` で書き、
//         Todo 型の変数を TodoAsType 型の変数に代入できるか試す
//    2-b. `interface Status = 'todo' | 'done'` のように、union を interface で書こうとしてみる
//    2-c. 同じ名前の interface を2回書いた場合と、同じ名前の type を2回書いた場合を比べる
// 3. types/todo.ts のステータス型 (リテラル型の union) を import し、
//    決められた値以外の文字列を代入するとどうなるか確かめる
import type { Todo, TodoStatus } from "./types/todo.ts";

// @ts-expect-error TodoStatus で指定した型以外の文字列は代入できない
const s: TodoStatus = "finished"

// @ts-expect-error
const a: string = 1
// @ts-expect-error
const b: number =  "a"
// @ts-expect-error
const c: boolean = 5

// 条件を満たしていれば違う型同士の代入は可能
type TodoAsType = { id: number; title: string; status: TodoStatus }
const t1: Todo = { id: 1, title: "牛乳を買う", status: 'todo' }
const t2: TodoAsType = t1

// interfaceではunion型をかけない
// interface Status = 'todo' | 'done'

// interfaceは型を書き直すと、andで要求が追加されていく
interface Box { a: number}
interface Box { b: string}
// @ts-expect-error b が足りない
const B: Box = { a: 2}
// @ts-expect-error a が足りない
const C: Box = { b: "s"}
const D: Box = { a: 2, b: "s"}

// typeは定義の段階で重複エラーが出る
// type Sox = string
// type Sox = boolean