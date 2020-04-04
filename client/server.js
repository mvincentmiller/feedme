const Koa = require('koa')
const next = require('next')
const Router = require('@koa/router')
var bodyParser = require('koa-bodyparser');
var nJwt = require('njwt');
var secureRandom = require('secure-random');




const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var signingKey = secureRandom(256, {type: 'Buffer'}); // Create a highly random byte array of 256 bytes

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  server.use(bodyParser());
  router.get('/:title/:id',  async ctx => {
    console.log(ctx.params)
    
    try{
      verifiedJwt = nJwt.verify(ctx.params.token,signingKey);
      console.log('VERIFY?', verifiedJwt)
    }catch(e){
      console.log('ERROR', e);
    }

	  await app.render(ctx.req, ctx.res, ctx.params.title, ctx.params.id);
		});

    router.post('/get-token', async ctx => {
     

       console.log('CTX', ctx.request.body )

      var claims = {
        iss: "http://localhost:3000/",  // The URL of your service
        sub: ctx.request.body,    // The UID of the user in your system
        scope: "self, admins"
      }

      var jwt = nJwt.create(claims,signingKey);

      var token = jwt.compact();

      ctx.body = {token: token};

    })

  router.all('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
