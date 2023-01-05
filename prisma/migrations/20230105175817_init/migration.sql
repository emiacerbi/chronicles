-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "heroClass" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chronicle" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "heroId" INTEGER NOT NULL,

    CONSTRAINT "Chronicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hero_userId_key" ON "Hero"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Chronicle_heroId_key" ON "Chronicle"("heroId");

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chronicle" ADD CONSTRAINT "Chronicle_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
