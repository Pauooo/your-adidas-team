import { newSpecPage } from '@stencil/core/testing';
import { YatNationalTeam } from '../yat-national-team';

describe('yat-national-team', () => {
  xit('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatNationalTeam],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-national-team');
    component.teamId = 18;
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
