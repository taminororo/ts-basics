// packages/types を真似た「型定義だけ」のファイル。
// 関数・if・for などの処理は書かず、アプリで扱うデータの形だけをここに集める。
// 他のファイルからは `import type { Todo } from './types/todo.ts'` のように使う。

export interface Todo {
    id: number
    title: string
    status: TodoStatus
}

export type TodoStatus = 'todo'| 'doing' | 'done' 
