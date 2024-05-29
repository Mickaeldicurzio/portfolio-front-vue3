import AboutMeDescription from './AboutMeDescription.vue'

describe('<AboutMeDescription />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AboutMeDescription, {
      dataProps: {
        aboutMeDescription: { data: { attributes:  {title: 'test' }}}
      }
    })
  })
})