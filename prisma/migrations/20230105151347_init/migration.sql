-- CreateTable
CREATE TABLE "Chronicle" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "heroId" INTEGER NOT NULL,

    CONSTRAINT "Chronicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chronicle_heroId_key" ON "Chronicle"("heroId");

-- AddForeignKey
ALTER TABLE "Chronicle" ADD CONSTRAINT "Chronicle_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
