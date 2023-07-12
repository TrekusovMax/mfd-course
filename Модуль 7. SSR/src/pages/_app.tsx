import type { AppProps, AppContext } from 'next/app'
import { trpc } from '@/shared/api'
import { SessionProvider, getSession } from 'next-auth/react'
import '@/app/global.css'
import { useEffect } from 'react'
import { Navbar } from '@/entities/event'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('preline')
  }, [])
  
  
  return (
    <div className="mx-auto max-w-4xl">
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}

App.getInitialProps = async (ctx: AppContext) => {
  return {
    pageProps: {
      session: await getSession(ctx.ctx),      
    },
  }
}

export default trpc.withTRPC(App)
