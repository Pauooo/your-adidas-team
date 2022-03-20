import { newSpecPage } from '@stencil/core/testing';
import { YatRoot } from '../yat-root';

describe('yat-root', () => {
  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatRoot],
      html: `<yat-root></yat-root>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-root') as HTMLYatYourTeamPageElement;
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
