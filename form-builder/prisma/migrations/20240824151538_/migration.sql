/*
  Warnings:

  - A unique constraint covering the columns `[sharedURL]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Form_sharedURL_key" ON "Form"("sharedURL");
