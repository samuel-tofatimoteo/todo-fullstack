import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, updateTodo } from "../apis/todos";
import { NewTodo, Todo } from "../../models/models";

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos()
  })
}

export function useAddTodo() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (newTodo: NewTodo) => addTodo(newTodo) ,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export function useUpdateTodo() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (todoUpdate: Todo) => updateTodo(todoUpdate),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}
