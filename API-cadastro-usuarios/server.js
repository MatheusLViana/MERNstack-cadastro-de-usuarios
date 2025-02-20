import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'
import cors from 'cors'

const app = express();

app.use(express.json());//indica que usaremos o padrao json nos dados transferidos
app.use(cors());

app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);

//quando o servidor for iniciado a função passada como parâmetro será executada e aparecera a mensagem na tela
app.listen(3000, () => console.log("Servidor Rodando na porta 3000! 🚀"));

//app.listen(3000); //Se preferir, utilize a inicialização simples.