const Hello = (app) => {
  app.get('/hello', (req, res) => {
    console.log('hello')
    res.send('Life is good!')
  })
  app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
  })
}
export default Hello;