import { newE2EPage } from '@stencil/core/testing';

describe('yat-national-team', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-national-team></yat-national-team>');

    const element = await page.find('yat-national-team');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('yat-root >>> yat-national-team');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "yat-national-team"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('yat-root >>> yat-national-team >>> div');
  //   expect(element).toHaveClass('yat-national-team');
  // });
});
