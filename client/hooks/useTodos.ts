import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos } from "../apis/todos";
import { NewTodo } from "../../models/models";

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