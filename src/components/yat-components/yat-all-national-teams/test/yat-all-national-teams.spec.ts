import { newSpecPage } from '@stencil/core/testing';
import { YatAllNationalTeams } from '../yat-all-national-teams';


const mockWCTeam = jest.fn();
jest.mock('../../../../dm/dm', () => {
  return jest.fn().mockImplementation(() => {
    return { getWorldCupTeams: mockWCTeam };
  });
});
xdescribe('yat-all-national-teams', () => {
  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatAllNationalTeams],
      html: `<yat-all-national-teams></yat-all-national-teams>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-all-national-teams') as HTMLYatAllNationalTeamsElement;
    await page.waitForChanges();
    expect(component).toBeTruthy();
    expect(mockWCTeam).toHaveBeenCalledTimes(1);
  });
});
