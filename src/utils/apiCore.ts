import http from './http';
import { AxiosInstance, AxiosResponse } from 'axios';
import { API_ENDPOINTS } from './apiEndpoints';


type responseType = {

    success:boolean;
    data:any;
    message:string;

}

export class CoreApi {
    protected http: AxiosInstance;

    constructor(protected base_path: string) {
        this.http = http;
    }

    async create(data: any): Promise<any> {
        try {
            const res: AxiosResponse<responseType> = await this.http.post(
                `${this.base_path}${API_ENDPOINTS.CREATE}`,
                data
            );

            if (res.data.success) {
                return res.data.data;
            } else {
                throw new Error('Échec de la création');
            }
        } catch (err) {
            throw err;
        }
    }

    async delete(id: number | string): Promise<void> {
        try {
            await this.http.delete(`${this.base_path}${API_ENDPOINTS.DELETE}/${id}`);
        } catch (err) {
            throw err;
        }
    }

    async update(data: any): Promise<any> {
        try {
            const res: AxiosResponse<responseType> = await this.http.post(
                `${this.base_path}${API_ENDPOINTS.UPDATE}`,
                data
            );

            if (res.data.success) {
                return res.data.data;
            } else {
                throw new Error('Échec de la mise à jour');
            }
        } catch (err) {
            throw err;
        }
    }

    async list(params: any = {}): Promise<any[]> {
        try {
            const res: AxiosResponse<responseType> = await this.http.get(
                `${this.base_path}${API_ENDPOINTS.LIST}`,
                { params }
            );
            return res.data.data;
        } catch (err) {
            throw err;
        }
    }

    async findOne(id: number | string): Promise<responseType> {
        try {
            const res: AxiosResponse<responseType> = await this.http.get(`${this.base_path}/${id}`);
            return res.data;
        } catch (err) {
            throw err;
        }
    }
}
