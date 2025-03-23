import {z} from "zod"


export const messageSchema = z.object({
    content: z
        .string()
        .min(10, "Content must be alteast of 10 characters")
        .max(300, "Content must be less than 300 characters")
})