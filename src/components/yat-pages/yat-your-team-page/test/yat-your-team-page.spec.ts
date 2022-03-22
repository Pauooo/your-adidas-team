import { newSpecPage } from '@stencil/core/testing';
import { YatYourTeamService } from '../../../../services/yat-your-team-service';
import { YatYourTeamPage } from '../yat-your-team-page';

const deleteYourTeamSpy = jest.fn();

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

  it('when the delete button is clicked, the delete method should be called', async () => {
    YatYourTeamService.prototype.deleteYourTeam = deleteYourTeamSpy;
    const page = await newSpecPage({
      components: [YatYourTeamPage],
      html: `<yat-your-team-page></yat-your-team-page>`
    });
    await page.waitForChanges();
    const component = page.doc.querySelector('yat-your-team-page') as HTMLYatYourTeamPageElement;
    await page.waitForChanges();
    const button = component.shadowRoot.querySelector('button');
    button.click();
    expect(deleteYourTeamSpy).toHaveBeenCalledTimes(1);
  });
});
