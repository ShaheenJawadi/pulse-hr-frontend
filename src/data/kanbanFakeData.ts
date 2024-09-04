import { KanbanColumnType, KanbanTaskTagsType, KanbanTasksType } from "@/types/kanbanTypes";


const kanbanTaskTags: KanbanTaskTagsType[] = [
    {
        title: "Haute Priorité",
        color: "error"
    },
    {
        title: "Moyenne Priorité",
        color: "warning"
    },
    {
        title: "Basse Priorité",
        color: "info"
    },
    {
        title: "Urgent ",
        color: "error"
    },
    {
        title: "Amélioration",
        color: "warning"
    },
    {
        title: "Maintenance ",
        color: "info"
    }
]

const kanbanColumn: KanbanColumnType[] = [
    {
        id: 1,
        title: "À Faire",
        tasks:[{
            id: 1,
            columnId: 1,
            title: "Créer un projet",
            tags: [kanbanTaskTags[5], kanbanTaskTags[1]]
        }
        ,
        {
            id: 2,
            columnId: 3,
            title: "Créer une application",
            tags: [kanbanTaskTags[0], kanbanTaskTags[2]]
        }
        ,
        {
            id: 3,
            columnId: 1,
            title: "Créer une application",
            tags: [kanbanTaskTags[1], kanbanTaskTags[4]]
        }
        ,
        {
            id: 4,
            columnId: 4,
            title: "Créer une application",
            tags: [kanbanTaskTags[2], kanbanTaskTags[3]]
        }
        ,
        {
            id: 5,
            columnId: 3,
            title: "Créer une application",
            tags: [kanbanTaskTags[3], kanbanTaskTags[4]]
        }
        ,
        {
            id: 6,
            columnId: 1,
            title: "Créer une application",
            tags: [kanbanTaskTags[1], kanbanTaskTags[5]]
        }
        ,
        {
            id: 7,
            columnId: 4,
            title: "Créer une application",
            tags: [kanbanTaskTags[5], kanbanTaskTags[2]]
        }],
    },
    {
        id: 2,
        title: "En Cours",
        tasks:[{
            id: 8,
            columnId: 1,
            title: "Créer une application",
            tags: [kanbanTaskTags[1], kanbanTaskTags[2]]
        }
        ,
        {
            id: 9,
            columnId: 3,
            title: "Créer une application",
            tags: [kanbanTaskTags[1], kanbanTaskTags[1]]
        }
        ,
        {
            id: 10,
            columnId: 1,
            title: "Créer une application",
            tags: [kanbanTaskTags[0], kanbanTaskTags[3]]
        },
            {
            id: 11,
            columnId: 1,
            title: "Créer une application",
            tags: [kanbanTaskTags[0], kanbanTaskTags[1], kanbanTaskTags[2]]
        }
        ,
        {
            id: 12,
            columnId: 2,
            title: "Créer une application",
            tags: [kanbanTaskTags[0], kanbanTaskTags[1], kanbanTaskTags[5]]
        }]
    },
    {
        id: 3,
        title: "En Révision ",
        tasks:[   {
            id: 13,
            columnId: 2,
            title: "Créer une application",
            tags: [kanbanTaskTags[1], kanbanTaskTags[4], kanbanTaskTags[2]]
        }
        ,
        {
            id: 14,
            columnId: 3,
            title: "Créer une application",
            tags: [kanbanTaskTags[5], kanbanTaskTags[3], kanbanTaskTags[1]]
        }
        ,
        {
            id: 15,
            columnId: 3,
            title: "Créer une application",
            tags: [kanbanTaskTags[4], kanbanTaskTags[1], kanbanTaskTags[2]]
        }]
    }
    ,
    {
        id: 4,
        title: "Terminé",
        tasks:[{
            id: 18,
            columnId: 2,
            title: "Créer une application",
            tags: [kanbanTaskTags[3], kanbanTaskTags[4], kanbanTaskTags[2]]
        }]
    }

]





 
export { kanbanColumn, kanbanTaskTags  }

 