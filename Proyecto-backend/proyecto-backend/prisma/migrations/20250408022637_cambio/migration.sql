/*
  Warnings:

  - You are about to drop the column `eventId` on the `Conference` table. All the data in the column will be lost.
  - You are about to drop the column `speakerId` on the `Conference` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `Speaker` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `Sponsor` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conference" DROP CONSTRAINT "Conference_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Conference" DROP CONSTRAINT "Conference_speakerId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_userId_fkey";

-- DropForeignKey
ALTER TABLE "Speaker" DROP CONSTRAINT "Speaker_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Sponsor" DROP CONSTRAINT "Sponsor_eventId_fkey";

-- AlterTable
ALTER TABLE "Conference" DROP COLUMN "eventId",
DROP COLUMN "speakerId";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "locationId";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "eventId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Speaker" DROP COLUMN "eventId";

-- AlterTable
ALTER TABLE "Sponsor" DROP COLUMN "eventId";
