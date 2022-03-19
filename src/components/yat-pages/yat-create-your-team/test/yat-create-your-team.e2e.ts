import { newE2EPage } from '@stencil/core/testing';

describe('yat-create-your-team', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-create-your-team></yat-create-your-team>');

    const element = await page.find('yat-create-your-team');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-create-your-team></yat-create-your-team>');

    const element = await page.find('yat-create-your-team >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
