import { EmployeeType } from '@/modules/Employee';
import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { useMutation, useQuery } from 'react-query';


class EmployeeServiceClass {

    protected service;
    constructor() {
        this.service = new CoreApi(API_SECTIONS.employee);

    }


    create = async (data: any) => {
        const response = await this.service.create(data);

        return response.data;
    };

    useCreateMutation = () => {
        return useMutation(this.create, {
            onSuccess: (data) => { },
            onError: (error) => { },
        });
    };

/* ///////////////// */


fetchEmployeeList = async () => {

    const list = await this.service.list();

    return {
      employees: list?.data as EmployeeType[], 
    };
  };
   
  useEmployeeListQuery = () => {
    return useQuery<{ employees: EmployeeType[] }, Error>(
      [API_SECTIONS.employee+"#list"],
      this.fetchEmployeeList
    );
  };

}

const EmpService = new EmployeeServiceClass();

export { EmpService };
