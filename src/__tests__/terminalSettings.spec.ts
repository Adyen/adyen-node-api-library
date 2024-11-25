import { TerminalSettings } from '../typings/management/terminalSettings';

describe('TerminalSettings properties', () => {
  let terminalSettings: TerminalSettings;

  beforeEach(() => {
    terminalSettings = new TerminalSettings();
  });

  test('should allow properties to be null', () => {
    terminalSettings.cardholderReceipt = null;
    terminalSettings.connectivity = null;
    terminalSettings.gratuities = null;
    terminalSettings.hardware = null;

    expect(terminalSettings.cardholderReceipt).toBeNull();
    expect(terminalSettings.connectivity).toBeNull();
    expect(terminalSettings.gratuities).toBeNull();
    expect(terminalSettings.hardware).toBeNull();
  });

  test('should allow properties to be undefined', () => {
    terminalSettings.cardholderReceipt = undefined;
    terminalSettings.connectivity = undefined;

    expect(terminalSettings.cardholderReceipt).toBeUndefined();
    expect(terminalSettings.connectivity).toBeUndefined();
  });

  test('should allow properties to have valid type values', () => {
    const mockGratuities = [{ /* mock Gratuity object */ }];
    terminalSettings.gratuities = mockGratuities;

    expect(terminalSettings.gratuities).toBe(mockGratuities);
  });
});
