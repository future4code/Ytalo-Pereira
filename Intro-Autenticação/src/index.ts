import app from "./app";
import editUser from './endpoints/editUser';
import createUser from './endpoints/createUser';
import login from "./endpoints/login";
// import { Authenticator } from "./services/Authenticator";

app.post('/users/signup', createUser)
app.put('/users/:id', editUser)
app.post('/users/login', login)

// const pessoa = {
//     id: "uhsdhaushduhd637467"
// }

// const jwt = new Authenticator().generateToken(pessoa)

// const verify = new Authenticator().getTokenData(jwt)

// console.log(verify)