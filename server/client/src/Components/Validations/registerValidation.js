import * as Yup from "yup";
import { REGEX } from "../../Utils/Constants";

export const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('Required')
      .min(3, 'Must be 3 characters or greater')
      .max(15, 'Max be 15 characters or less'),
    lastName: Yup.string()
      .required('Required')
      .min(3, 'Must be 3 characters or greater')
      .max(15, 'Max be 15 characters or less'),
    email: Yup.string()
      .required('Required')
      .email('Invalid email address'),
    phone: Yup.string()
      .matches(REGEX.PHONE_NUMBER, 'Phone number is not valid'),
    password: Yup.string()
      .min(3, 'Must be 8 characters or greater')
      .max(15, 'Max be 15 characters or less')
      .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  })