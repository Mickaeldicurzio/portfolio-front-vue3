import FooterComponent from './FooterComponent.vue'

describe('<FooterComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(FooterComponent)
  })
})