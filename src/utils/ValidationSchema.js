import * as yup from "yup";

export const formSchema = yup.object().shape({  
  title: yup
    .string()
    .max(25, "The title may not be greater than 25 characters")
    .required("Please enter the title"),
  text: yup
    .string()
    .max(255, "The text may not be greater than 255 characters")
    .required("Please enter the text")
});

