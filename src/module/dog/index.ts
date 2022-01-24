import { ShoowDogs } from '@data/dogs/show'
import { Module } from '@nestjs/common'
import { ShowDogsController } from '@presentation/controllers/show-dogs.controller'

@Module({
  controllers: [ShowDogsController],
  providers: [
    {
      provide: 'ShowDogsProvider',
      useClass: ShoowDogs
    }
  ]
})
export class DogModule {}
