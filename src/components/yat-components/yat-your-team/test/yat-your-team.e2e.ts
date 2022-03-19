import { newE2EPage } from '@stencil/core/testing';

describe('yat-your-team', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-your-team></yat-your-team>');

    const element = await page.find('yat-your-team');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('yat-root >>> yat-your-team');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "yat-your-team"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('yat-root >>> yat-your-team >>> div');
  //   expect(element).toHaveClass('yat-your-team');
  // });
});
