import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import { Request, Response } from "express";
async function main() {
    // Insira as queries neste formato:
    // const user1 = await prisma.user.create({
    //     data: {
    //         nome: "Marley",
    //         email: "marnemarne@marne.com.uvv"
    //     }
    // })
    // const leilao1 = await prisma.leilao.create({
    //     data: {
    //         idLeilao: "1",
    //         idProduto: "1",
    //         lanceId: "1",
    //         preco: 12.2,
    //         userId: "Marley"
    //     }
    // })

    // const lance1 = await prisma.lance.create({
    //     data: {
    //         idLance: "1",
    //         userId: "Marley",
    //         leilaoId: "1",
    //         valor: 12.2
    //     }
    // })
}
// Mandar as queries para o banco de dados
main()
    // O que fazer depois da promessa retornar (as queries serem enviadas)
    .then(async () => {
    await prisma.$disconnect()
    })
    // Catch para demonstrar o erro no console
    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})