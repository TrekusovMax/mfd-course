import { CreateUserSchema } from '@/shared/api'
import { prisma } from '../db'
import { procedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const userRouter = router({
  create: procedure.input(CreateUserSchema).mutation(async ({ input }) => {
    try {
      const result = await prisma.user.create({
        data: input,
      })
      return result
    } catch (e) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: (e as Error).message,
      })
    }
  }),
})
