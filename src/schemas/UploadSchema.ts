import { z } from "zod";


const UploadSchema = z.object({
    file: z
        .any()
        .refine(
            (files) => files?.[0]?.type,
            "Necessário ter pelo menos um arquivo."
        ),
});

export default UploadSchema;