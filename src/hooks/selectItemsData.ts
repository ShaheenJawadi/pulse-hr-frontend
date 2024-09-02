import { DepService } from "@/services/department";
import { EmpService } from "@/services/employees";
import { WpService } from "@/services/workPosition";
import { SelectDataTypes, ServiceRegistryCall } from "@/types/structureTypes";
import { useEffect, useState } from "react";

export const getDynamicSelectData=({target}:{target:ServiceRegistryCall})=>{

    const [options, setOptions] = useState<SelectDataTypes[]>([]);
  
  
    const services: ServiceRegistry = {
      Department: {
          query: DepService.useDepartmentListQuery(),
          idTarget: "id",
          labelTarget: "name",
          mapKey: "departments"
      },
      Manager: {
          query: EmpService.useEmployeeListQuery(),
          idTarget: "id",
          labelTarget: "name",
          mapKey: "employees"

      },
      WorkPosition: {
          query: WpService.useListerQuery(),
          idTarget: "id",
          labelTarget: "designation",
          mapKey: "positions"

      },
      Shift: {
          query: undefined,
          idTarget: "id",
          labelTarget: "",
          mapKey: ""

      },
      ContractType: {
          query: undefined,
          idTarget: "id",
          labelTarget: "",
          mapKey: ""

      }
    };
    
    const { data=null, error, isLoading } = services?.[target] && services[target].query !=undefined
    ? services[target].query 
    : { data: null, isLoading: false, error: null };
  
   
  
  
    useEffect(() => {
        if (data) {
          const formattedOptions = data[services[target].mapKey].map((item:any) => ({
            value: item[services[target].idTarget],
            labelText: item[services[target].labelTarget],
          }));
          setOptions(formattedOptions);
        }
      }, [data]);
  
  
    return {options ,isLoading ,error};
  }
  
  
  
  type ServiceRegistry = {
    [key in ServiceRegistryCall]: {
        query: any;
        idTarget: string;
        labelTarget: string;
        mapKey: string;
    };
  };
  