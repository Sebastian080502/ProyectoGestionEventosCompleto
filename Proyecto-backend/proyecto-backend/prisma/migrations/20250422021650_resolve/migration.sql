/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Speaker` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Sponsor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institution` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `affiliation` to the `Speaker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Speaker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Speaker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Speaker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `industry` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logoUrl` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conference" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "capacity" INTEGER NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "anonymous" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "eventId" TEXT NOT NULL,
ADD COLUMN     "userEmail" TEXT NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "capacity" INTEGER NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "room" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Registration" ADD COLUMN     "eventId" TEXT NOT NULL,
ADD COLUMN     "institution" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Speaker" ADD COLUMN     "affiliation" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sponsor" ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "industry" TEXT NOT NULL,
ADD COLUMN     "logoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Speaker_email_key" ON "Speaker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sponsor_email_key" ON "Sponsor"("email");
