describe('validations', ()=>{
  it('rejects empty string for title', async()=>{
    try {
      await factory.create('Book',{
        title:''
      }
      )
      expect.fail()
    } catch (error) {
      expect(error).to.include({ message: 'Validation error: You need to'})
      
    }
  })
})