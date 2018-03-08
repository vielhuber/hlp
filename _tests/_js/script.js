import hlp from './../../_js/script';

test('capitalize', () =>
{
    expect( hlp.capitalize('string') ).toBe('String');
    expect( hlp.capitalize('') ).toBe('');
    expect( hlp.capitalize('STRINGß') ).toBe('STRINGß');
    expect( hlp.capitalize(null) ).toBe(null);
});