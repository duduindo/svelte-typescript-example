import App from '../App.svelte'


describe('App', () => {
  test('Should contain "Hello, World"', () => {
    const app = new App({
      target: document.body
    })

    console.warn('App: ', app)
    expect(document.body.textContent).toContain('Hello, World')
  })
})
