import { LoadDogsRepository, DogModelResult } from '@data/protocols/dogs/show'
import { PrismaClient } from '@prisma/client'

export class DogRepositoryPrisma implements LoadDogsRepository {
  private readonly prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async onLoadDogs(): Promise<DogModelResult[]> {
    const dogList = await this.prisma.dog.findMany()

    await this.prisma.$disconnect()
    return dogList
  }
}
