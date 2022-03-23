import { newSpecPage } from '@stencil/core/testing';
import { YatYourTeamService } from '../../../../services/yat-your-team-service';
import { YatCreateYourTeam } from '../yat-create-your-team';

const getYourTeamSpy = jest.fn();
const YOUR_TEAM = {
  id: 'yourTeam',
  name: 'YourTeam',
  squad: []
}
//TODO: add tests
describe('yat-create-your-team', () => {

  beforeEach(() => {
    getYourTeamSpy.mockResolvedValue(YOUR_TEAM);
  });
  it('renders correctly component', async () => {
    YatYourTeamService.prototype.getYourTeam = getYourTeamSpy;
    const page = await newSpecPage({
      components: [YatCreateYourTeam],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-create-your-team');
    component.match = { params: { id: '15' }, path: '', url: '', isExact: false };
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
