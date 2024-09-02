import { DepService } from "@/services/department";
import { SelectDataTypes } from "@/types/structureTypes";
import { useEffect, useState } from "react";

export const getDynamicSelectData=({target}:{target:ServiceRegistryCall})=>{

    const [options, setOptions] = useState<SelectDataTypes[]>([]);

 

    const { data, error, isLoading } = services?.[target]
    ? services[target].query 
    : { data: null, isLoading: false, error: null };
  

    useEffect(() => {
        if (data) {
          const formattedOptions = data.departments.map((item:any) => ({
            value: item.id,
            labelText: item.name,
          }));
          setOptions(formattedOptions);
        }
      }, [data]);


    return {options ,isLoading ,error};
}

type ServiceRegistryCall="Manager"|"Department";

type ServiceRegistry = {
    [key in ServiceRegistryCall]: {
        query: any;
        idTarget: string;
        labelTarget: string;
    };
};

const services: ServiceRegistry = {
    Department: {
        query: DepService.useDepartmentListQuery(),
        idTarget: "id",
        labelTarget: "name",
    },
    Manager: {
        query: undefined,
        idTarget: "",
        labelTarget: ""
    } 
};