import { newSpecPage } from '@stencil/core/testing';
import { YatHome } from '../yat-home';

describe('yat-home', () => {
  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatHome],
      html: `<yat-home></yat-home>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-home') as HTMLYatYourTeamPageElement;
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
