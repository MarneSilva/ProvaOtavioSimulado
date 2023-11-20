/*
  Warnings:

  - You are about to drop the column `produto` on the `Leilao` table. All the data in the column will be lost.
  - Added the required column `idProduto` to the `Leilao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Leilao" (
    "idLeilao" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "lanceId" TEXT NOT NULL,
    CONSTRAINT "Leilao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("datalimite", "idLeilao", "lanceId", "preco", "userId") SELECT "datalimite", "idLeilao", "lanceId", "preco", "userId" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
