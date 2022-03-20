import { FAKE_TEAM } from "../../mocks";
import { YatYourTeamService } from "../yat-your-team-service";

const getYourTeamSpy = jest.spyOn(YatYourTeamService.prototype, 'getYourTeam');
const addPlayerToYourTeamSpy = jest.spyOn(YatYourTeamService.prototype, 'addPlayerToYourTeam');
const removePlayerToYourTeamSpy = jest.spyOn(YatYourTeamService.prototype, 'removePlayerToYourTeam');
const deleteYourTeamSpy = jest.spyOn(YatYourTeamService.prototype, 'deleteYourTeam');

describe('YatYourTeamService', () => {
  it('get instance', () => {
    expect(YatYourTeamService.getInstance()).toBeTruthy();
  });

  it('returns same instance', () => {
    const instance = YatYourTeamService.getInstance();
    expect(YatYourTeamService.getInstance()).toStrictEqual(instance);
  });

  it('should call getYourTeam', () => {
    const instance = YatYourTeamService.getInstance();
    instance.getYourTeam();
    expect(getYourTeamSpy).toHaveBeenCalledTimes(1);
  });

  it('should call addPlayerToYourTeam', () => {
    const instance = YatYourTeamService.getInstance();
    instance.addPlayerToYourTeam(FAKE_TEAM.squad[0]);
    expect(addPlayerToYourTeamSpy).toHaveBeenCalledTimes(1);
  });

  it('should call removePlayerToYourTeam', () => {
    const instance = YatYourTeamService.getInstance();
    instance.removePlayerToYourTeam(FAKE_TEAM.squad[0]);
    expect(removePlayerToYourTeamSpy).toHaveBeenCalledTimes(1);
  });

  it('should call deleteYourTeam', () => {
    const instance = YatYourTeamService.getInstance();
    instance.deleteYourTeam();
    expect(deleteYourTeamSpy).toHaveBeenCalledTimes(1);
  });
});
