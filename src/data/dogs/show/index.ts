import { DogModel } from '@domain/model/dog'
import { ShowDogsProvider } from '@domain/useCases/dog/show'

export class ShoowDogs implements ShowDogsProvider {
  public showDogs(): Promise<Array<DogModel>> {
    const result: Array<DogModel> = [{ name: 'caramelo', breed: 'vira-lata' }]
    return Promise.resolve(result)
  }
}
