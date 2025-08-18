import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    try {
        const ValidatedDarahmuda = formSchema.parse(req.body);
        return res.status(200).json({
            message: "Note created successfully",
            data: ValidatedDarahmuda,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: "Validation failed",
            });
        }
        return res.status(500).json({ error: "Internal server error" });
    }
}