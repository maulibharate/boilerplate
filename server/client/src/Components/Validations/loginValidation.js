import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
        .required('Required')
        .email('Invalid email address'),
    password: Yup.string()
        .min(3, 'Must be 8 characters or greater')
        .max(15, 'Max be 15 characters or less')
        .required('Required'),
    })