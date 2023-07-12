import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '@/server/routes'
import { createContext } from '@/server/context'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError(opts) {
    const { error, type, path, input, ctx, req } = opts
    console.log(error.message)
  },
})
