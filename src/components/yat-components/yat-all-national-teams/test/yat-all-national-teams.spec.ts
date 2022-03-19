import { YatAllNationalTeams } from '../yat-all-national-teams';
import { newSpecPage } from '@stencil/core/testing';

describe('yat-all-national-teams', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [YatAllNationalTeams],
        html: '<yat-all-national-teams></yat-all-national-teams>',
      });
      expect(rootInstance.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', async () => {
      const { rootInstance } = await newSpecPage({
        components: [YatAllNationalTeams],
        html: '<yat-all-national-teams></yat-all-national-teams>',
      });
      expect(rootInstance.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [YatAllNationalTeams],
        html: '<yat-all-national-teams></yat-all-national-teams>',
      });
      expect(rootInstance.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [YatAllNationalTeams],
        html: '<yat-all-national-teams></yat-all-national-teams>',
      });
      expect(rootInstance.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [YatAllNationalTeams],
        html: '<yat-all-national-teams></yat-all-national-teams>',
      });
      expect(rootInstance.normalize('q')).toEqual('Q');
    });
  });
});
