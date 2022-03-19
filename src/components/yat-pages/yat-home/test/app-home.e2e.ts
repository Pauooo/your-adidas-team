import { newE2EPage } from '@stencil/core/testing';

describe('yat-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-home></yat-home>');

    const element = await page.find('yat-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-home></yat-home>');

    const element = await page.find('yat-home >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
