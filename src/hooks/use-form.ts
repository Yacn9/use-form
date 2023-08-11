import { useRef, useState } from "react";
import { TFormValues, IHookForm } from "types";
import * as yup from 'yup';
import { keyBy, isEmpty } from 'lodash';

const useForm = (props: IHookForm) => {
    const { initialValues, validationSchema } = props
    const [values, setValues] = useState<TFormValues>(initialValues ?? {});
    const [errors, setErrors] = useState<TFormValues>({});
    const refs = useRef<{ [key: string]: HTMLInputElement }>({});

    const validate = (values: TFormValues) => {
        const schema = validationSchema || yup.object().shape({});
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
        const newValues = { ...values, [name]: value };
        setValues(newValues);
        const newError = validate({ [name]: value });
        setErrors({ ...errors, newError });
    };

    const handleSubmit = (onSubmit: (values: TFormValues) => void) => {
        return (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const refVal: TFormValues = {};
            for (const key in refs.current) {
                const value = refs.current[key].value;
                if (value) {
                    refVal[key] = value;
                }
            }

            const data = Object.keys(refVal).length === 0 ? values : refVal;
            const newErrors = validate(data);
            setErrors(newErrors);
            if (isEmpty(newErrors)) {
                onSubmit(data);
            }
        };
    };

    const register = (name: string) => (ref: HTMLInputElement) => {
        if (ref) {
            refs.current[name] = ref;
        }
    };
    const onReset = () => {
        setValues({})
        setErrors({})
    }

    return { values, refs, handleChange, handleSubmit, errors, register, onReset };
};


export default useForm;
