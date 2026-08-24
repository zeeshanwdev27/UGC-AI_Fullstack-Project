# Pkgs I Install For This Project

1. `npm i express dotenv cors`

2. `npm i -D typescript tsx @types/node ts-node @types/express nodemon @types/cors`

3. `npx tsc --init`
   Create `tsconfig.json`

4. `npm install prisma @types/pg --save-dev`
   Install Prisma

5. `npm install @prisma/client @prisma/adapter-pg pg dotenv`
   Install Prisma Client and PostgreSQL adapter

6. `npx prisma`

7. `npx prisma init --output ../generated/prisma`

# Create Prisma App

8. `npx prisma migrate dev --name init`

9. `npx prisma generate`

# Prisma Documentation

[Prisma Documentation](https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres)
