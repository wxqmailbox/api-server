import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, VS Code!!!')
})

export { app }

interface Task {
  category: string
  title: string
  done: boolean
}

const tasks: Task[] = [
  {
    category: 'Private',
    title: '買い物',
    done: false,
  },
]

app.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks)
})

app.post('/tasks', (req: Request, res: Response) => {
  const received = req.body
  if ('category' in received && 'title' in received && 'done' in received) {
    const newTask: Task = {
      category: received.category,
      title: received.title,
      done: received.done,
    }
    tasks.push(newTask)
    console.log('Add:', newTask)
    res.send('An item has been added.')
  } else {
    res.status(400).send('Parameters are invalid.')
  }
})
