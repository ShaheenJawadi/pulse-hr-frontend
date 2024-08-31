import { CoreApi } from '@/utils/apiCore';
import { API_SECTIONS } from '@/utils/apiEndpoints';
import { setTokenCookie } from '@/utils/authCookies';
import { useMutation } from 'react-query';

import { useRouter } from "next/navigation";
import { ROUTING } from '@/utils/routes';


class AuthServiceClass {

    protected AuthService; 
    constructor() {
        this.AuthService = new CoreApi(API_SECTIONS.auth); 

    }


    login = async (data: { email: string; password: string }) => {
        const response = await this.AuthService.postReq("/login", data);

        return response.data;
    };

    useLoginMutation = () => {
        const   router = useRouter();
        return useMutation(this.login, {
            onSuccess: (data) => { 
                setTokenCookie(data.token);
                router.push(ROUTING.DASHBOARD.MAIN);
            },
            onError: (error) => {
                alert("error");
            },
        });
    };


}

const AuthService = new AuthServiceClass();

export { AuthService };
