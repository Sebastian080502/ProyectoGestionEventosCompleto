/*
  Warnings:

  - Added the required column `password` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" ADD COLUMN     "password" TEXT NOT NULL;
