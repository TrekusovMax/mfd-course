import { z } from 'zod'

export const CreateEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.coerce.date(),
})
export const EditEventSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.coerce.date(),
})

export type CreateEventSchema = z.infer<typeof CreateEventSchema>
export type EditEventSchema = z.infer<typeof EditEventSchema>

export const JoinEventSchema = z.object({
  id: z.number().int().positive(),
})
export const LeaveEventSchema = z.object({
  userId: z.number().int().positive(),
  eventId: z.number().int().positive(),
})
