# Full-Stack eCommerce App

## Website
http://ecommerce-env-1.eba-ih2n93pk.ap-southeast-1.elasticbeanstalk.com/

## Technologies Stack

**Backend**
- Deno
- PostgreSQL

**Frontend**
- React
- Redux-Toolkit
- React-Query

**Third Party Services**
- Stripe
- Cloudinary
- SendGrid

## Usage
**Credit cards for testing**
- 4242424242424242
- 5555555555554444

**Acess admin area**
- email: ```alan@test.com```
- password: ```abc123```

## Deployment
- Dcoker
- Github Actions
- AWS Elastic Beanstalk
- AWS RDS

## Clone and Test Locally
1. Create postgreSQL database locally.
2. In the backend folder, create .env file and set the below environment variables.
    ```
    FRONTEND_URI=http://localhost:3000
    PORT=1993
    PGDATABASE=
    PGUSER=
    PGPASSWORD=
    PGHOST=
    PGPORT=5432
    PGAPPNAME=ecommerce
    TK_REFRESH_KEY=
    TK_ACCESS_KEY=
    TK_NAME=ast
    SENDGRID_API_ENDPOINT=https://api.  sendgrid.com/v3/mail/send
    SENDGRID_API_KEY=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    CLOUDINARY_BASE_URL=
    STRIPE_SECRET_KEY=
    STRIPE_CUSTOMERS_URL=
    ```
3. In the frontend folder, create .env file and set the below environment variables.
    ```
    REACT_APP_BACKEND_URI=http://localhost:1993
    REACT_APP_STRIPE_PUBLISHABLE_KEY=
    REACT_APP_PRODUCTS_PER_PAGE_CLIENT=9
    REACT_APP_PRODUCTS_PER_PAGE_ADMIN=10
    REACT_APP_USERS_PER_PAGE=10
    ```
4. In the backend folder terminal run
    ```deno run --allow-net --allow-read --allow-env --unstable main.ts ```
5. In the frontend folder termnal run
    ```npm start```


