import MenuComponent from './MenuComponent.vue'

describe('<MenuComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(MenuComponent)
  })
})