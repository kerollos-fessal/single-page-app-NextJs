import z from "zod";

const schema = z.object({
    name:z.string().min(2),
    id:z.number().max(10)
})

export default schema