import { TFormValues } from "./use-form.type";

interface IFormProps {
    isControlled: boolean;
    getData: (data: TFormValues) => void
}

export type { IFormProps }