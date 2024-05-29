import GlobalHero from './GlobalHero.vue'

describe('<GlobalHero />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(GlobalHero, {
      props: {
        imageSrc: 'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg',
        linkText: 'link text',
        textColor: 'red',
        reverse: false,
        heroTitle: 'hero title',
        leftImageSrc: 'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg'
      }
    })
  })
})