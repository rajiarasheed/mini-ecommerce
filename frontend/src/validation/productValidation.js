import * as Yup from "yup";

export const productValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters required")
    .required("Product name is required"),

  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  category: Yup.string()
    .required("Category is required"),

  image: Yup.string()
    .url("Enter a valid image URL")
    .required("Image URL is required"),
});
