import { serve } from '@hono/node-server'
import { Hono, type Context } from 'hono'

const DEFAULT_MIN = 0
const DEFAULT_MAX = 100
const DEFAULT_LENGTH = 5

const generateRandom = (min: number, max: number) => Math.ceil(min + Math.random() * (max - min))
const extractMinAndMax = (ctx: Context) => {
  const inputMin = Number.parseInt(ctx.req.query("min") ?? "") 
  const inputMax = Number.parseInt(ctx.req.query("max") ?? "")

  const  min  = !Number.isNaN(inputMin) ? inputMin : DEFAULT_MIN 
  const max = !Number.isNaN(inputMax) ? inputMax : DEFAULT_MAX
  
  return {min,max}

}

const app = new Hono()
app.get('/random', (ctx) => {
  const {min, max} = extractMinAndMax(ctx)
  const number = generateRandom(min, max)

  return ctx.json({success: true, number})
})

app.get('/random/:length', (ctx) => {
  const inputLength = Number.parseInt(ctx.req.param("length"))
  const { min, max } = extractMinAndMax(ctx)
  const numbers = Array.from(new Array(!Number.isNaN(inputLength) ? inputLength : DEFAULT_LENGTH ),()=>generateRandom(min, max))

  return ctx.json({success: true, numbers})
})


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running`)
})
