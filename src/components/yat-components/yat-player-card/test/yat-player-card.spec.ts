import { newSpecPage } from '@stencil/core/testing';
import { Player, YourTeamPlayerEvent } from '../../../../types';
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

  it('renders correctly component for national team', async () => {
    const page = await newSpecPage({
      components: [YatPlayerCard],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-player-card');
    component.player = fakeNationalPlayer;
    component.nationalTeam = 'England';
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });

  it('renders correctly component for your team', async () => {
    const page = await newSpecPage({
      components: [YatPlayerCard],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-player-card');
    component.player = fakePlayer;
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
  });

  it('If the player is of a national team and the button is clicked, an event should be emitted', async () => {
    const page = await newSpecPage({
      components: [YatPlayerCard],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-player-card');
    component.player = fakeNationalPlayer;
    component.nationalTeam = 'England';
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
    page.doc.addEventListener('movePlayerEvent', (event: CustomEvent<YourTeamPlayerEvent>) => {
      expect(event.detail).toBe({
        player: { id: 13, name: 'John', position: 'Attacker' },
        originalTeam: 'England',
        action: 'add'
      });
    });
    const button = component.shadowRoot.querySelector('button')
    button.click();
    await page.waitForChanges();
  });

  it('If the player is of your team and the button is clicked, an event should be emitted', async () => {
    const page = await newSpecPage({
      components: [YatPlayerCard],
      html: `<div></div>`
    });
    await page.waitForChanges();
    const component = page.doc.createElement('yat-player-card');
    component.player = fakePlayer;
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
    page.doc.addEventListener('movePlayerEvent', (event: CustomEvent<YourTeamPlayerEvent>) => {
      expect(event.detail).toBe({
        player: { id: 13, name: 'John', position: 'Attacker' },
        action: 'remove'
      });
    });
    const button = component.shadowRoot.querySelector('button')
    button.click();
    await page.waitForChanges();
  });

  it('If the component is displayed in small breakpoint, the button add literal should be shorter', async () => {
    const page = await newSpecPage({
      components: [YatPlayerCard],
      html: `<div></div>`
    });
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 400 });
    window.dispatchEvent(new Event('resize'));
    await page.waitForChanges();
    const component = page.doc.createElement('yat-player-card');
    component.player = fakeNationalPlayer;
    component.nationalTeam = 'England';
    page.root && page.root.appendChild(component);
    await page.waitForChanges();
    expect(component).toBeTruthy();
    const button = component.shadowRoot.querySelector('button')
    expect(button.innerText).toBe('Add me');
  });
});
