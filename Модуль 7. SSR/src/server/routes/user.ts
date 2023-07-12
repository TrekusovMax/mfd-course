import { CreateUserSchema } from '@/shared/api'
import { prisma } from '../db'
import { procedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'

export const userRouter = router({
  create: procedure.input(CreateUserSchema).mutation(({ input }) => {
    try {
      return prisma.user.create({
        data: input,
      })
    } catch (e) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
      })
    }
  }),
})
