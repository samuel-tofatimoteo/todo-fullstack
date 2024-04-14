export interface TodoIntrfc {
    todo: string, 
    complete: boolean
}

export interface TodoId extends TodoIntrfc{ 
    id: number 
}

