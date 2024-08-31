import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints'; 
import { useMutation } from 'react-query';
 

class DeparmentServiceClass {

    protected DepService; 
    constructor() {
        this.DepService = new CoreApi(API_SECTIONS.department); 

    }


    create = async (data: any) => {
        const response = await this.DepService.create(data);

        return response.data;
    };

    useCreateMutation = () => { 
        return useMutation(this.create, {
            onSuccess: (data) => {  
                alert('success');
            },
            onError: (error) => {
                alert("error");
            },
        });
    };


}

const DepService = new DeparmentServiceClass();

export { DepService };
