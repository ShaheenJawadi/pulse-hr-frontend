export type KanbanColumnType = {

    id: number,
    title: string,
   tasks?: KanbanTasksType[],
}

export type KanbanTasksType = {

    id: number,
    columnId: number,
    title: string, 
    tags: KanbanTaskTagsType[],
    displayOrder:number


}

export type KanbanTaskTagsType = {
    title: string,
    color: "primary"| "secondary" | "error" | "warning" | "info" | "success",
 

}