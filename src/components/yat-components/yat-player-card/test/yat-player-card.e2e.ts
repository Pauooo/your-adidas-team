import { newE2EPage } from '@stencil/core/testing';

describe('yat-player-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-player-card></yat-player-card>');

    const element = await page.find('yat-player-card');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('yat-root >>> yat-player-card');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "yat-player-card"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('yat-root >>> yat-player-card >>> div');
  //   expect(element).toHaveClass('yat-player-card');
  // });
});
