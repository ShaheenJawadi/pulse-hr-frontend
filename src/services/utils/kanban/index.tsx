 
import { KanbanColumnType } from '@/modules/kanabn';
import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { useMutation, useQuery } from 'react-query';


class KanbanServiceClass {

    protected service;
    constructor() {
        this.service = new CoreApi(API_SECTIONS.utils.kanban);

    }

 


fetchKanbanList = async () => {

    const list = await this.service.list();

    return   list?.data as KanbanColumnType[];
  }
 
   
 

}

const KanbanService = new KanbanServiceClass();

export { KanbanService };
