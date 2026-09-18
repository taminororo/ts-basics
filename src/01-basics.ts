// primitives / interface vs type / unions / literal types
//
// 練習:
// 1. string, number, boolean の変数を1つずつ作る。わざと違う型の値を入れて、
//    npm run check-types でどんなエラーが出るか読む
// 2. 同じ形の型を interface と type の両方で書いてみる
// 3. types/todo.ts のステータス型 (リテラル型の union) を import し、
//    決められた値以外の文字列を代入するとどうなるか確かめる
import type { TodoStatus } from "./types/todo.ts";