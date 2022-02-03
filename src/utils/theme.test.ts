import React from 'react';
import DynamicTheme from './theme';

test('class returns palette', () => {
    const theme = new DynamicTheme();

    expect(typeof theme.palette).toBe("object");
    expect(typeof theme.palette.primary.toString()).toBe("string");
});
