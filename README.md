# feedme
Content aggregation and tech stack demo

## Tech Stack

- Next.js
- Koa
- TypeScript
- Postgres, Sequelize
- JWT

## Links

*and notes in-progress*

### Boilerplate & Idea

*this has deviated significantly*

- https://github.com/jaygould/nextjs-typescript-jwt-boilerplate
- https://www.jaygould.co.uk/2019-04-04-nextjs-typescript-jwt-postgres-starter/

###  Next.js

- https://nextjs.org/docs/advanced-features/custom-server
- https://nextjs.org/docs/basic-features/typescript
- https://github.com/zeit/next.js/tree/master/examples/with-apollo
- https://github.com/zeit/next.js/tree/master/examples/with-context-api

### Koa.js

- https://github.com/ZijianHe/koa-router

### Postgres, Sequelize 

 *TODO: Simplifiy database relation, seed sql file and flowchart*

 - https://medium.com/@leonyapkl/how-to-run-graphql-api-server-with-postgresql-under-30-minutes-1732304cb825
 - https://github.com/pthom/northwind_psql


### Demo query

```
{
  orders {
    order_id
    customer_id
    employee_id
    order_date
    required_date
    shipped_date
    ship_via
    freight
    ship_name
    ship_address
    ship_city
    ship_region
    ship_postal_code
    ship_country
  }
}
```