import { newSpecPage } from '@stencil/core/testing';
import { FAKE_TEAM } from '../../../../mocks';
import { Team } from '../../../../types';
import { YatYourTeam } from '../yat-your-team';

describe('yat-your-team', () => {
  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatYourTeam],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-your-team') as HTMLYatTeamElement;
    component.team = FAKE_TEAM as Team;
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
