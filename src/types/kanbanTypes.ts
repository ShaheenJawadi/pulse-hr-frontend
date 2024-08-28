
export type KanbanColumnType = {

    id: number,
    title: string,

}

export type KanbanTasksType = {

    id: number,
    columnId: number,
    title: string, 
    tags: KanbanTaskTagsType[],


}

export type KanbanTaskTagsType = {
    title: string,
    color: "primary"| "secondary" | "error" | "warning" | "info" | "success",

}