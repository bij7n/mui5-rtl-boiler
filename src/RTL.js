import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
})

const RTL = ({ children }) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}

export default RTL
