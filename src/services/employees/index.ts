import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';

class EmployeeServiceClass {

    protected EMPLOYEE_Service;
    
    constructor() {
        this.EMPLOYEE_Service = new CoreApi(API_SECTIONS.employee);
    }
 
    private fetchList = async (): Promise<any> => {
        const list = await this.EMPLOYEE_Service.list();
        return list; 
    };

 
}

const BankService = new EmployeeServiceClass();

export { BankService };
