import type { ObjectSchema } from 'yup';

interface IHookForm {
    validationSchema?: ObjectSchema<TFormValues>;
    initialValues?: TFormValues
}

type TFormValues = Record<string, any>;

export type { IHookForm, TFormValues }