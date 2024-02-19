/*
  Warnings:

  - You are about to drop the `CES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CSAT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Channel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Configuration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ENPS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Metrics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NPS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PMF` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Smiley` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stars` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Thumb` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workflow` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `channel` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailBounced` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailChannel` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailCommented` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailOpen` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailResponded` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailSent` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailThrottled` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailUnsubscribed` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkChannel` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smsChannel` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smsCommented` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smsSent` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smsShown` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smsThrottled` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webChannel` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webCommented` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webResponded` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webShown` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CES_userId_key";

-- DropIndex
DROP INDEX "CSAT_userId_key";

-- DropIndex
DROP INDEX "ENPS_userId_key";

-- DropIndex
DROP INDEX "NPS_userId_key";

-- DropIndex
DROP INDEX "PMF_userId_key";

-- DropIndex
DROP INDEX "Smiley_userId_key";

-- DropIndex
DROP INDEX "Stars_userId_key";

-- DropIndex
DROP INDEX "Thumb_userId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CES";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CSAT";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Channel";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Configuration";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ENPS";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Metrics";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "NPS";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PMF";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Question";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Smiley";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Stars";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Thumb";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Workflow";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Flow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "surveyId" TEXT NOT NULL,
    CONSTRAINT "Flow_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "teamId" TEXT,
    "customerId" TEXT,
    CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_User" ("customerId", "email", "emailVerified", "id", "image", "name", "teamId") SELECT "customerId", "email", "emailVerified", "id", "image", "name", "teamId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_customerId_key" ON "User"("customerId");
CREATE TABLE "new_Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "subscriptionId" TEXT,
    CONSTRAINT "Team_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Team" ("id", "name") SELECT "id", "name" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
CREATE UNIQUE INDEX "Team_subscriptionId_key" ON "Team"("subscriptionId");
CREATE TABLE "new_Response" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT,
    "score" INTEGER NOT NULL,
    "surveyId" TEXT NOT NULL,
    "contactId" TEXT,
    "channel" TEXT NOT NULL,
    CONSTRAINT "Response_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Response_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Response" ("comment", "contactId", "createdAt", "id", "surveyId") SELECT "comment", "contactId", "createdAt", "id", "surveyId" FROM "Response";
DROP TABLE "Response";
ALTER TABLE "new_Response" RENAME TO "Response";
CREATE TABLE "new_Subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "subscritiptionId" TEXT NOT NULL,
    "currentPeriodEndDate" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "planId" TEXT,
    "userId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subscription" ("active", "createdAt", "currentPeriodEndDate", "id", "planId", "subscritiptionId", "updatedAt", "userId") SELECT "active", "createdAt", "currentPeriodEndDate", "id", "planId", "subscritiptionId", "updatedAt", "userId" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
CREATE UNIQUE INDEX "Subscription_subscritiptionId_key" ON "Subscription"("subscritiptionId");
CREATE UNIQUE INDEX "Subscription_userId_key" ON "Subscription"("userId");
CREATE UNIQUE INDEX "Subscription_teamId_key" ON "Subscription"("teamId");
CREATE INDEX "Subscription_userId_idx" ON "Subscription"("userId");
CREATE TABLE "new_Survey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isAnonymous" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,
    "onMobile" BOOLEAN NOT NULL,
    "apresentationMessage" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "skipComment" BOOLEAN NOT NULL,
    "language" TEXT NOT NULL,
    "timeToShow" INTEGER NOT NULL,
    "emailChannel" BOOLEAN NOT NULL,
    "emailSent" INTEGER NOT NULL,
    "emailOpen" INTEGER NOT NULL,
    "emailResponded" INTEGER NOT NULL,
    "emailCommented" INTEGER NOT NULL,
    "emailThrottled" INTEGER NOT NULL,
    "emailBounced" INTEGER NOT NULL,
    "emailUnsubscribed" INTEGER NOT NULL,
    "linkChannel" BOOLEAN NOT NULL,
    "smsChannel" BOOLEAN NOT NULL,
    "smsSent" INTEGER NOT NULL,
    "smsShown" INTEGER NOT NULL,
    "smsCommented" INTEGER NOT NULL,
    "smsThrottled" INTEGER NOT NULL,
    "webChannel" BOOLEAN NOT NULL,
    "webShown" INTEGER NOT NULL,
    "webResponded" INTEGER NOT NULL,
    "webCommented" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Survey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Survey" ("apresentationMessage", "createdAt", "id", "image", "isAnonymous", "language", "limit", "onMobile", "skipComment", "status", "timeToShow", "title", "updatedAt", "userId") SELECT "apresentationMessage", "createdAt", "id", "image", "isAnonymous", "language", "limit", "onMobile", "skipComment", "status", "timeToShow", "title", "updatedAt", "userId" FROM "Survey";
DROP TABLE "Survey";
ALTER TABLE "new_Survey" RENAME TO "Survey";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
