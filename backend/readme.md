# Packages Installed For Backend

### 1. Install Express, dotenv, and CORS

```bash
npm i express dotenv cors
```

### 2. Install TypeScript and Development Dependencies

```bash
npm i -D typescript tsx @types/node ts-node @types/express nodemon @types/cors
```

### 3. Initialize TypeScript

```bash
npx tsc --init
```

This creates the `tsconfig.json` file.

### 4. Install Prisma

```bash
npm install prisma @types/pg --save-dev
```

### 5. Install Prisma Client and PostgreSQL Dependencies

```bash
npm install @prisma/client @prisma/adapter-pg pg dotenv
```

## Prisma Setup

### 6. Check Prisma CLI

```bash
npx prisma
```

### 7. Initialize Prisma

```bash
npx prisma init --output ../generated/prisma
```

This creates the Prisma configuration and schema files.

## Create Prisma Database

### 8. Create the Initial Migration

```bash
npx prisma migrate dev --name init
```

### 9. Generate Prisma Client

```bash
npx prisma generate
```


## More Libraries

### 1. Clerk With Express
```bash
npm install @clerk/express
```




## Prisma Documentation

[Prisma Documentation](https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres)
[Clerk-Express Documentation](https://clerk.com/docs/expressjs/getting-started/quickstart)
[Clerk-Webhook Documentation](https://clerk.com/docs/guides/development/webhooks/syncing)




## Environment Variables

```bash
PORT =
DATABASE_UR =
CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =
```