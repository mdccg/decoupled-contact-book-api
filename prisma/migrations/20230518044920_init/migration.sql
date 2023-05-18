-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" DATE,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
