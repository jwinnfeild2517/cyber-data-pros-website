-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "hashTag" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
