import { WorkPOsition } from '@/modules/WorkPosition';
import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { useMutation, useQuery } from 'react-query';


class WorkPositionServiceClass {

    protected WpService;
    constructor() {
        this.WpService = new CoreApi(API_SECTIONS.structure.positions);

    }


    create = async (data: any) => {
        const response = await this.WpService.create(data);

        return response.data;
    };

    useCreateMutation = () => {
        return useMutation(this.create, {
            onSuccess: (data) => { },
            onError: (error) => { },
        });
    };

/* ////////////////////////// */


fetchWorkPositionsList = async () => {

    const list = await this.WpService.list();

    return {
      positions: list?.data as WorkPOsition[], 
    };
  };
   
  useDepartmentListQuery = () => {
    return useQuery<{ positions: WorkPOsition[] }, Error>(
      [API_SECTIONS.structure.positions+"#list"],
      this.fetchWorkPositionsList
    );
  };


}

const WpService = new WorkPositionServiceClass();

export { WpService };
