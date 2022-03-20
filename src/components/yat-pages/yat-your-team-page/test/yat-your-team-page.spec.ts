import { newSpecPage } from '@stencil/core/testing';
import { YatYourTeamPage } from '../yat-your-team-page';

describe('yat-your-team-page', () => {
  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatYourTeamPage],
      html: `<yat-your-team-page></yat-your-team-page>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-your-team-page') as HTMLYatYourTeamPageElement;
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
