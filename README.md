# FeedMe
Content aggregation and tech stack demo

## API

### Database

Spin up Postgres in Docker. 

```
cd api
docker-compose up

# access Postgres shell
docker-compose exec db psql -U queue -d queue_database
```

Install Sequelize CLI:
`npm i -g sequelize`

Generate User model:
`sequelize model:generate --name User --attributes username:string,email:string,password:string`

Initialize:
`sequelize init`

Migrate:
`sequelize db:migrate`

Start Apollo Server:

```
cd api
yarn dev
```

## Client
Next.js and Apollo-Client 3 (beta).

```
cd client
yarn dev
```