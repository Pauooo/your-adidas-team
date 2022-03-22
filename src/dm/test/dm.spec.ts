import { YatDmComponent } from '../dm';



describe('YatDmComponent', () => {

  let DmComponent: YatDmComponent;

  beforeEach(() => {
    DmComponent = new YatDmComponent;
  });
  it('should create an instance of data manager', () => {
    expect(DmComponent).toBeTruthy();
  });
});
