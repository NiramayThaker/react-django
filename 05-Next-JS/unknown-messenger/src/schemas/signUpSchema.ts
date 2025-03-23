import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, 'username must have atleast 2 character')
    .min(20, 'username should not be more than 20 character')
    .regex(/^[a-zA-Z0-9_]+$/, "Username should now contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6, {message: "Password must be 6 characters"})
})