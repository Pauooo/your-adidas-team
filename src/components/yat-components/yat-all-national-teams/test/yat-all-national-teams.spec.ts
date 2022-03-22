import { newSpecPage } from '@stencil/core/testing';
import { YatDmComponent } from '../../../../dm/dm';
import { FAKE_WC_TEAMS } from '../../../../mocks';
import { YatAllNationalTeams } from '../yat-all-national-teams';

const getWorldCupTeamsSpy = jest.fn();
describe('yat-all-national-teams', () => {
  beforeEach(() => {
    getWorldCupTeamsSpy.mockResolvedValue(FAKE_WC_TEAMS);
  });
  it('renders correctly component', async () => {
    YatDmComponent.prototype.getWorldCupTeams = getWorldCupTeamsSpy;
    const page = await newSpecPage({
      components: [YatAllNationalTeams],
      html: `<yat-all-national-teams></yat-all-national-teams>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-all-national-teams') as HTMLYatAllNationalTeamsElement;
    await page.waitForChanges();
    expect(component).toBeTruthy();
    expect(getWorldCupTeamsSpy).toHaveBeenCalledTimes(1);
  });
});
