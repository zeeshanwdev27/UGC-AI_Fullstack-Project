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

## ~ Prisma Setup

### 6. Check Prisma CLI

```bash
npx prisma
```

### 7. Initialize Prisma

```bash
npx prisma init --output ../generated/prisma
```

This creates the Prisma configuration and schema files.

## ~ Create Prisma Database

### 8. Create the Initial Migration

```bash
npx prisma migrate dev --name init
```

### 9. Generate Prisma Client

```bash
npx prisma generate
```


## ~ More Libraries

### 1. Clerk With Express
```bash
npm install @clerk/express
```
### 2. Sentry For Testing
```bash
npm install @sentry/node --save
```
### 3. Multer For Files Handling
```bash
npm i multer
npm i -D @types/multer
```
### 4. Cloudinary For Cloud Storage
```bash
npm i cloudinary
```
### 5. Google GENAI For Including AI Features
```bash
npm i @google/genai
```
### 6. Axios
```bash
npm i axios
```



## ~ Prisma Documentation

[Prisma Documentation](https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres)
[Clerk-Express Documentation](https://clerk.com/docs/expressjs/getting-started/quickstart)
[Clerk-Webhook Documentation](https://clerk.com/docs/guides/development/webhooks/syncing)




## ~ Environment Variables

```bash
PORT =
DATABASE_UR =
CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =
CLERK_WEBHOOK_SIGNING_SECRET=
CLOUDINARY_URL=
GOOGLE_CLOUD_API_KEY=
```

## ~ Webhook locally through ngrok

### Run locally in Command Prompt
```bash
ngrok http 5000
```