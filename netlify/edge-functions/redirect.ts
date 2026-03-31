import type { Config, Context } from '@netlify/edge-functions'

export default async (req: Request, context: Context) => {
  const host = new URL(req.url).hostname

  if (host === 'nexthellow.netlify.app') {
    const url = new URL(req.url)
    url.hostname = 'nexthello.co.uk'
    url.protocol = 'https:'
    url.port = ''
    return Response.redirect(url.toString(), 301)
  }

  return
}

export const config: Config = {
  path: '/*',
}
