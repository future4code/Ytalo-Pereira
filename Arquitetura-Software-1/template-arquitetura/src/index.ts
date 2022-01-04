import { app } from "./app"
import { createTask } from './endpoints/createTask'
import { getTaskById } from './endpoints/getTaskById'
import { signUpControllers } from "./controllers/signUpControllers"
import { loginController } from "./controllers/loginController"

app.post('/user/signup', signUpControllers)
app.post('/user/login', loginController)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)



