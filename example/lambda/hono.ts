import { Hono } from 'hono';
import { html, raw } from 'hono/html'
import { handle } from 'hono/aws-lambda';

const app = new Hono();

app.get('/hono', (c) => {
  return c.text('Hello Hono!');
});

app.get('/', (c) => {
  return c.html(
    html`<!DOCTYPE html>
      <h1>Links</h1>
      <p><a href="./hono">Hono Hello World</a></p>
      <p><a href="./ssr">Hono JSX</a></p>
`
  )
});

export const handler = handle(app);
