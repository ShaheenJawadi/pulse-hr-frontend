import { Department } from '@/modules/Department';
import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { useMutation, useQuery } from 'react-query';


class DepartmentServiceClass {

    protected DepService;
    constructor() {
        this.DepService = new CoreApi(API_SECTIONS.structure.department);

    }


    create = async (data: any) => {
        const response = await this.DepService.create(data);

        return response.data;
    };

    useCreateMutation = () => {
        return useMutation(this.create, {
            onSuccess: (data) => { },
            onError: (error) => { },
        });
    };

/* ////////////////////////// */


 fetchDepartmentList = async () => {

    const list = await this.DepService.list();

    return {
      departments: list?.data as Department[], 
    };
  };
   
  useDepartmentListQuery = () => {
    return useQuery<{ departments: Department[] }, Error>(
      "departments",
      this.fetchDepartmentList
    );
  };


}

const DepService = new DepartmentServiceClass();

export { DepService };


export const aaaauseDepartmentListQuery = () => {
  return useQuery<{ departments: Department[] }, Error>(
    "departments",
    DepService.fetchDepartmentList
  );
};

