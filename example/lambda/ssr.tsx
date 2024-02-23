// @jsxRuntime automatic
// @jsxImportSource hono/jsx
// You can use JSX pragma to set the required configuration https://github.com/evanw/esbuild/pull/2349
// Instead you can use tsconfig.json too

import type { FC } from 'hono/jsx'
import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';

const app = new Hono()
    const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </Layout>
  )
}

app.get('/ssr', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})

export const handler = handle(app);
