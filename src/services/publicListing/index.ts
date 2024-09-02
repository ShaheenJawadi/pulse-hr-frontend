import { JobOffer } from "@/modules/JobOffer";
import { CoreApi } from "@/utils/apiCore";
import { API_SECTIONS } from "@/utils/apiEndpoints";
import { useMutation, useQuery } from "react-query";

class PublicJobOffersServiceClass {
  protected service; 

  constructor() { 
    this.service = new CoreApi(API_SECTIONS.publicListing.jobOffers);
  }



fetchList = async () => {

  const list = await this.service.list();

  return {
    offres: list?.data as JobOffer[], 
  };
};
 
useListerQuery = () => {
  return useQuery<{ offres: JobOffer[] }, Error>(
    [API_SECTIONS.publicListing.jobOffers+"#list"],
    this.fetchList
  );
};






////////////////////////



getSingle = async (slug: string | number): Promise<JobOffer> => {
  const single = await this.service.findOne(slug);
  return single;
};

useSingleQuery = (slug: string | number) => {
  return useQuery<JobOffer, Error>(
    [API_SECTIONS.jobOffer, slug],
    () => this.getSingle(slug)  
  );
};


}

const PublicJobListingService = new PublicJobOffersServiceClass();

export { PublicJobListingService };
