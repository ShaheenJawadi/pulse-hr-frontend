import { CoreApi } from "@/utils/apiCore";
import { API_SECTIONS } from "@/utils/apiEndpoints";
import { useMutation } from "react-query";

class JobOfferServiceClass {
  protected service;
  constructor() {
    this.service = new CoreApi(API_SECTIONS.jobOffer);
  }

  create = async (data: any) => {
    const response = await this.service.create(data);

    return response.data;
  };

  useCreateMutation = () => {
    return useMutation(this.create, {
      onSuccess: (data) => {},
      onError: (error) => {},
    });
  };
}

const JobOfferService = new JobOfferServiceClass();

export { JobOfferService };
