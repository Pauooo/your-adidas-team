import { newE2EPage } from '@stencil/core/testing';

describe('yat-your-team-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-your-team-page></yat-your-team-page>');

    const element = await page.find('yat-your-team-page');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<yat-your-team-page></yat-your-team-page>');

    const element = await page.find('yat-your-team-page >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
