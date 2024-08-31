import { useForm, UseFormReturn, DefaultValues, Path } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation, UseMutationResult } from "react-query";

type MutationFunction<T> = (data: T) => Promise<any>;

interface BackendErrors {
  [key: string]: string[];
}

const useFormWithMutation = <T extends Record<string, any>>(
  defaultValues: DefaultValues<T>,
  schema: Yup.ObjectSchema<any>,
  mutation: MutationFunction<T>,
  onSuccess?: (data: any) => void // Optional success callback
): UseFormReturn<T> & { onSubmit: (data: T) => void } => {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const mutationResult: UseMutationResult<any, any, T, any> =
    useMutation(mutation);

  const onSubmit = async (data: T) => {
    try {
      const result = await mutationResult.mutateAsync(data);
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const backendErrors = error.response.data.errors as BackendErrors;
        for (const [field, messages] of Object.entries(backendErrors)) {
          methods.setError(field as Path<T>, {
            type: "manual",
            message: messages[0],
          });
        }
      }
    }
  };

  return { ...methods, onSubmit };
};

export default useFormWithMutation;
