import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../apis/todos";
import { query } from "express";

export function useTodos() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTodos()
  })
}