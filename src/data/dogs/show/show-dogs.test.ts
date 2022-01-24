import { ShoowDogs } from '@data/dogs/show'

describe('ShoowDogs', () => {
  const makeSut = () => {
    const sut = new ShoowDogs()
    return { sut }
  }

  describe('success', () => {
    describe('showDogs', () => {
      it('should showDogs returns a list dogs', async () => {
        const { sut } = makeSut()
        const result = await sut.showDogs()
        expect(result).toMatchObject([{ name: 'caramelo', breed: 'vira-lata' }])
      })
    })
  })
})
