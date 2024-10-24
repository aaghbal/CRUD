#!/bin/sh


echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h db -U $POSTGRES_USER; do
  sleep 1
done


echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Starting the Next.js app..."
npm run build

exec npm run start
 
 

 