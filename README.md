# NodeJS-Basic-DrizzleORM (Postgres example)

Here are the steps to recreate this project: 
**Important**: Please make sure to be in your project directory.

## In terminal run the following commands:
1. pnpm init
2. pnpm i -D typescript ts-node @types/node nodemon
3. npx tsc --init
4. pnpm add drizzle-orm postgres
5. pnpm add -D drizzle-kit
6. pnpm i dotenv

## Steps:
1. Create 'drizzle.config.ts' file and copy the code from the repo (Notice the 'schema' and 'out')

**Note**: schema = the target schema folder, the schema folder will contain database table schema

**Note**: out = the target output folder

3. Create 'migrator.ts' file and copy the code from the repo (Notice the 'migrationFolder')
4. Create a folder for migrator.ts to be pointed to
**Note**: Migration folder contain meta data for changes in the database.
