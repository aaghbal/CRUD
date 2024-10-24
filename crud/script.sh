#!/bin/sh

# Wait until Postgres is ready
echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h db -U $POSTGRES_USER; do
  sleep 1
done

# Run Prisma migration
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Start the Next.js app
echo "Starting the Next.js app..."
npm run build

npm run start
 
 

 