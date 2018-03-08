import hlp from './../../_js/script';

test('__capitalize', () =>
{
    expect( hlp.__capitalize('string') ).toBe('String');
    expect( hlp.__capitalize('') ).toBe('');
    expect( hlp.__capitalize('STRINGß') ).toBe('STRINGß');
    expect( hlp.__capitalize(null) ).toBe(null);
});