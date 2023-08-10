import type { ObjectSchema } from 'yup';

interface IHookForm {
    reset: () => void
    onSubmit: (values: TFormValues, refs: Record<string, HTMLInputElement>) => void;
    validationSchema?: ObjectSchema<TFormValues>;
}

type TFormValues = Record<string, any>;

export type { IHookForm, TFormValues }