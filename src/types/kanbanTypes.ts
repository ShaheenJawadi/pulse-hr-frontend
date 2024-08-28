
export type kanbanColumnType = {

    id: number,
    title: string,

}

export type kanbanTasksType = {

    id: number,
    columnId: number,
    title: string, 
    tags: kanbanTaskTagsType[],


}

export type kanbanTaskTagsType = {
    title: string,
    color: "primary"| "secondary" | "error" | "warning" | "info" | "success",

}