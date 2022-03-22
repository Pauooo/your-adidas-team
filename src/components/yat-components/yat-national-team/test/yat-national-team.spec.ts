import { newSpecPage } from '@stencil/core/testing';
import { YatDmComponent } from '../../../../dm/dm';
import { FAKE_TEAM } from '../../../../mocks';
import { YatNationalTeam } from '../yat-national-team';

const getNationalTeamSpy = jest.fn();
describe('yat-national-team', () => {
  beforeEach(() => {
    getNationalTeamSpy.mockResolvedValue(FAKE_TEAM);
  });
  it('renders correctly component', async () => {
    YatDmComponent.prototype.getNationalTeam = getNationalTeamSpy;
    const page = await newSpecPage({
      components: [YatNationalTeam],
      html: `<yat-national-team></yat-national-team>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-national-team') as HTMLYatNationalTeamElement;
    await page.waitForChanges();
    expect(component).toBeTruthy();
    expect(getNationalTeamSpy).toHaveBeenCalledTimes(1);
  });
});
