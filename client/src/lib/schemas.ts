import { z } from "zod";

// Schema di validazione per il form di contatto (solo client)
export const insertContactSchema = z.object({
  name: z.string().min(1, "Nome e cognome sono obbligatori"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Il messaggio è obbligatorio"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
