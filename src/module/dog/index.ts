import { Module } from '@nestjs/common'
import { ShowDogsController } from '@presentation/controllers/show-dogs.controller'

@Module({
  controllers: [ShowDogsController]
})
export class DogModule {}
