/*
  Warnings:

  - You are about to drop the column `apresentationMessage` on the `Survey` table. All the data in the column will be lost.
  - Added the required column `commentMessage` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailFrom` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailSubject` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRecurrent` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `replyTo` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `welcomeMessage` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invitationMessage" TEXT NOT NULL,
    "mainQuestion" TEXT NOT NULL,
    "emailRequest" BOOLEAN NOT NULL DEFAULT false,
    "thanksMessage" TEXT NOT NULL,
    "isAllUsers" BOOLEAN NOT NULL DEFAULT true,
    "trafficCoverage" INTEGER NOT NULL DEFAULT 100
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Survey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isAnonymous" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "onMobile" BOOLEAN NOT NULL,
    "welcomeMessage" TEXT NOT NULL,
    "skipComment" BOOLEAN NOT NULL DEFAULT false,
    "commentMessage" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "timeToShow" INTEGER NOT NULL DEFAULT 2,
    "emailChannel" BOOLEAN NOT NULL DEFAULT false,
    "emailSent" INTEGER NOT NULL DEFAULT 0,
    "emailOpen" INTEGER NOT NULL DEFAULT 0,
    "emailResponded" INTEGER NOT NULL DEFAULT 0,
    "emailCommented" INTEGER NOT NULL DEFAULT 0,
    "emailThrottled" INTEGER NOT NULL DEFAULT 0,
    "emailBounced" INTEGER NOT NULL DEFAULT 0,
    "emailUnsubscribed" INTEGER NOT NULL DEFAULT 0,
    "emailFrom" TEXT NOT NULL,
    "replyTo" TEXT NOT NULL,
    "emailSubject" TEXT NOT NULL,
    "linkChannel" BOOLEAN NOT NULL DEFAULT false,
    "linkShown" INTEGER NOT NULL DEFAULT 0,
    "linkResponded" INTEGER NOT NULL DEFAULT 0,
    "linkCommented" INTEGER NOT NULL DEFAULT 0,
    "smsChannel" BOOLEAN NOT NULL DEFAULT false,
    "smsSent" INTEGER NOT NULL DEFAULT 0,
    "smsShown" INTEGER NOT NULL DEFAULT 0,
    "smsCommented" INTEGER NOT NULL DEFAULT 0,
    "smsThrottled" INTEGER NOT NULL DEFAULT 0,
    "webChannel" BOOLEAN NOT NULL DEFAULT false,
    "webShown" INTEGER NOT NULL DEFAULT 0,
    "webResponded" INTEGER NOT NULL DEFAULT 0,
    "webCommented" INTEGER NOT NULL DEFAULT 0,
    "isRecurrent" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Survey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Survey" ("createdAt", "emailBounced", "emailChannel", "emailCommented", "emailOpen", "emailResponded", "emailSent", "emailThrottled", "emailUnsubscribed", "id", "image", "isAnonymous", "language", "limit", "linkChannel", "onMobile", "question", "skipComment", "smsChannel", "smsCommented", "smsSent", "smsShown", "smsThrottled", "status", "timeToShow", "title", "type", "updatedAt", "userId", "webChannel", "webCommented", "webResponded", "webShown") SELECT "createdAt", "emailBounced", "emailChannel", "emailCommented", "emailOpen", "emailResponded", "emailSent", "emailThrottled", "emailUnsubscribed", "id", "image", "isAnonymous", "language", "limit", "linkChannel", "onMobile", "question", "skipComment", "smsChannel", "smsCommented", "smsSent", "smsShown", "smsThrottled", "status", "timeToShow", "title", "type", "updatedAt", "userId", "webChannel", "webCommented", "webResponded", "webShown" FROM "Survey";
DROP TABLE "Survey";
ALTER TABLE "new_Survey" RENAME TO "Survey";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
