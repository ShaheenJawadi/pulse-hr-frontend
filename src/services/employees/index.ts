import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { useMutation } from 'react-query';


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


}

const EmpService = new EmployeeServiceClass();

export { EmpService };
