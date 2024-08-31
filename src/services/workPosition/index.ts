import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { useMutation } from 'react-query';


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


}

const WpService = new WorkPositionServiceClass();

export { WpService };
