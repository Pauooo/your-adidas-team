import { YatDmComponent } from '../dm';

//TODO: mock properly fetch method to fully test DM
describe('YatDmComponent', () => {
  let DmComponent: YatDmComponent;
  let getWorldCupTeams;

  beforeEach(async () => {
    DmComponent = new YatDmComponent;
    getWorldCupTeams = await DmComponent.getWorldCupTeams();
  });
  it('should create an instance of data manager', () => {
    expect(DmComponent).toBeTruthy();
  });
});
