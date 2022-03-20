import { newSpecPage } from '@stencil/core/testing';
import { FAKE_TEAM } from '../../../../mocks';
import { Team } from '../../../../types';
import { YatTeam } from '../yat-team';

describe('yat-team', () => {

  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatTeam],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-team') as HTMLYatTeamElement;
    component.team = FAKE_TEAM as Team;
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
