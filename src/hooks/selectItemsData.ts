import { DepService } from "@/services/department";
import { SelectDataTypes } from "@/types/structureTypes";
import { useEffect, useState } from "react";

export const TestDepartmentSelect=()=>{

    const [options, setOptions] = useState<SelectDataTypes[]>([]);

    const { data, error, isLoading } = DepService.useDepartmentListQuery();
    const bb = 1
    const tt = 1

    useEffect(() => {
        if (data) {
          const formattedOptions = data.departments.map((item) => ({
            value: item.id,
            labelText: item.name,
          }));
          setOptions(formattedOptions);
        }
      }, [data]);


    return {options ,isLoading ,error};
}