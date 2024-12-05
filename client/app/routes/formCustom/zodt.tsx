import * as z from "zod"

const formSchema = z.object({
    address: z.string().min(10, {
      message: "First name must be at least 10 digits.",
    }),
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    gender: z.string({
      required_error: "Please select a gender.",
    }),
    contactNumber: z.string().min(10, {
      message: "Contact number must be at least 10 digits.",
    }),
    cancerType: z.string({
      required_error: "Please select a cancer type.",
    }),
})

export { formSchema, z }