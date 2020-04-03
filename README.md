# FeedMe
Content aggregation and tech stack demo

## API

### Database
Postgres in Docker. On first load the database will populate with `northwind.sql`.

```
cd api
docker-compose up
```

### Apollo-Server-Lambda
Sequelize ORM connects to our local Postgres instance.

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