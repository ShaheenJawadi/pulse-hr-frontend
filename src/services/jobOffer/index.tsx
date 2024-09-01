import { JobOffer } from "@/modules/JobOffer";
import { CoreApi } from "@/utils/apiCore";
import { API_SECTIONS } from "@/utils/apiEndpoints";
import { useMutation, useQuery } from "react-query";

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



  /* ////////////////////////// */


fetchList = async () => {

  const list = await this.service.list();

  return {
    offres: list?.data as JobOffer[], 
  };
};
 
useListerQuery = () => {
  return useQuery<{ offres: JobOffer[] }, Error>(
    [API_SECTIONS.jobOffer+"#list"],
    this.fetchList
  );
};


}

const JobOfferService = new JobOfferServiceClass();

export { JobOfferService };
