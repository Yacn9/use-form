import { useRef, useState } from "react";
import { TFormValues, IHookForm } from "types";
import yup from 'yup';
import { keyBy, isEmpty } from 'lodash';

const useForm = (options: IHookForm, initialValues?: TFormValues) => {
    const [values, setValues] = useState<TFormValues | undefined>(initialValues);
    const [errors, setErrors] = useState<TFormValues>();
    const refs = useRef<{ [key: string]: HTMLInputElement }>({});

    const validate = (values: TFormValues) => {
        const schema = options.validationSchema || yup.object().shape({});
        try {
            schema.validateSync(values, { abortEarly: false });
            return {};
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                return keyBy(err.inner, 'path');
            }
            return {};
        }
    };

    const handleChange = (name: string, value: any) => {
        if (refs.current[name]) {
            const newValues = { ...values, [name]: refs.current[name].value };
            setValues(newValues);
            const newErrors = validate(newValues);
            setErrors(newErrors);
        } else {
            const newValues = { ...values, [name]: value };
            setValues(newValues);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (values) {
            const newErrors = validate(values);
            setErrors(newErrors);
            if (isEmpty(newErrors)) {
                options.onSubmit(values, refs.current);
            }
        }
    };

    const register = (name: string) => (ref: HTMLInputElement) => {
        refs.current[name] = ref;
        if (ref && !ref.value) {
            const value = initialValues ? initialValues[name] : {};
            const newValues = { ...values, [name]: value };
            setValues(newValues);
        }
    };

    return { values, refs, handleChange, handleSubmit, errors, register };
};


export default useForm;
