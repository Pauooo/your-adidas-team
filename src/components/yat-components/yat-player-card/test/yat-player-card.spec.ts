import { newSpecPage } from '@stencil/core/testing';
import { Player } from '../../../../types';
import { YatPlayerCard } from '../yat-player-card';

describe('yat-player-card', () => {

  const fakeNationalPlayer: Player = {
    id: 13,
    name: 'John',
    position: 'Attacker'
  }

  const fakePlayer: Player = {
    id: 13,
    name: 'John',
    position: 'Attacker',
    originalTeam: 'England'
  }

  it('renders correctly component', async () => {
    const page = await newSpecPage({
      components: [YatPlayerCard],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-player-card');
    component.player = fakeNationalPlayer;
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });
});
