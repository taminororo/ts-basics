// utility types: Partial, Pick, Omit, Record, ReturnType
//
// utility types は「型を受け取って、別の型を返す」仕組み。
// 元になる型 (ここでは Todo) を1つ決めておき、そこから派生させるのが基本形。
// Todo を変更すると、下の型はすべて自動で追従する。これが手書きしない理由。

import type { Todo, TodoStatus } from "./types/todo.ts";

// ---------------------------------------------------------------
// 1. Omit<T, K> : T から K を取り除いた型
//    新規作成リクエスト。id はサーバーが振るので、送る側は持たない
// ---------------------------------------------------------------
export type CreateTodoRequest = Omit<Todo, "id">;

const newTodo: CreateTodoRequest = { title: "牛乳を買う", status: "todo" };

// @ts-expect-error id は取り除かれているので渡せない
const withId: CreateTodoRequest = { id: 1, title: "牛乳を買う", status: "todo" };

// ---------------------------------------------------------------
// 2. Partial<T> : T のすべての項目を省略可能 (?) にした型
//    更新リクエスト。変えたい項目だけ送れる
//    utility types は入れ子にできる (1 で作った型をそのまま渡している)
// ---------------------------------------------------------------
export type UpdateTodoRequest = Partial<CreateTodoRequest>;

const patch: UpdateTodoRequest = { status: "done" }; // title は省略できる

function updateTodo(todo: Todo, fields: UpdateTodoRequest): Todo {
    return { ...todo, ...fields };
}

// 型注釈を付けないと status が string に広がってしまうので、: Todo を書く
const todo1: Todo = {
    id: 2,
    title: "hello",
    status: "done",
};

const todo2 = updateTodo(todo1, { title: "throw out trash" });
console.log(todo2);

// ---------------------------------------------------------------
// 3. Pick<T, K> : T から K だけを取り出した型
//    一覧表示用。画面に出す項目だけあればよい
// ---------------------------------------------------------------
export type TodoListItem = Pick<Todo, "id" | "title">;

const row: TodoListItem = { id: 1, title: "牛乳を買う" };

// ---------------------------------------------------------------
// 4. Record<K, V> : キーが K、値が V のオブジェクトの型
//    ステータスごとの件数。キーを TodoStatus にすると、
//    3つのステータスすべてを書かないとエラーになる
// ---------------------------------------------------------------
export type StatusCount = Record<TodoStatus, number>;

const counts: StatusCount = { todo: 2, doing: 1, done: 5 };
console.log(counts.done);

// @ts-expect-error done が足りない
const missingDone: StatusCount = { todo: 0, doing: 0 };

// ---------------------------------------------------------------
// 5. ReturnType<typeof f> : 関数 f の戻り値の型を取り出す
//    関数の戻り値に名前が付いていないとき、後から型だけ借りられる
//    typeof は「値から、その値の型を取り出す」演算子 (03 の typeof とは別物)
// ---------------------------------------------------------------
function buildTodo(title: string) {
    return { id: 0, title, status: "todo" as TodoStatus };
}

export type BuiltTodo = ReturnType<typeof buildTodo>; // = { id: number; title: string; status: TodoStatus }

const built: BuiltTodo = buildTodo("あとで書く");
console.log(built);