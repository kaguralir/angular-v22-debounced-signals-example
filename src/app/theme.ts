import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const PrepngoThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#FFF8ED',
      100: '#FEEFD6',
      200: '#FCDBAC',
      300: '#FAC177',
      400: '#F79B40',
      500: '#F58220',
      600: '#E66410',
      700: '#BF4B0F',
      800: '#973C15',
      900: '#7A3314',
      950: '#421808',
    },
    secondary: palette('#FDDE48'),
    danger:    palette('#FF3B3B'),
    success:   palette('#27AB5E'),
    info:      palette('#2196F3'),
    colorScheme: {
      light: {
        surface: {
          0:   '#FFFFFF',
          50:  '#F5F5F6',
          100: '#E6E6E7',
          200: '#CFD0D2',
          300: '#ADAEB3',
          400: '#84858C',
          500: '#696A71',
          600: '#5A5B60',
          700: '#4D4D51',
          800: '#434347',
          900: '#3B3B3E',
          950: '#1D1D1D',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '14px',
        label: { fontWeight: '700' },
      },
    },
    inputtext: {
      root: {
        borderRadius: '14px',
        borderColor: 'transparent',
        background: '{surface.100}',
        color: '{surface.950}',
      },
    },
    select: {
      root: {
        borderRadius: '14px',
        borderColor: 'transparent',
        background: '{surface.100}',
      },
      overlay: {
        borderRadius: '14px',
        background: '{surface.0}',
        borderColor: 'transparent',
        shadow: '0 4px 20px rgba(0,0,0,0.12)',
      },
      option: {
        selectedBackground: '{primary.100}',
        selectedFocusBackground: '{primary.200}',
        focusBackground: '{surface.100}',
      },
    },
    card: {
      root: {
        background: '{surface.0}',
        shadow: '0 2px 8px rgba(0,0,0,0.06)',
        borderRadius: '16px',
        color: '{surface.950}',
      },
    },
    tag: {
      root: {
        borderRadius: '6px',
        fontWeight: '600',
      },
      colorScheme: {
        light: {
          secondary: { background: '#FEF08A', color: '#78350F' },
          info:      { background: '#BFDBFE', color: '#1e3a5f' },
          success:   { background: '#27AB5E', color: '#ffffff' },
          danger:    { background: '#FEE2E2', color: '#FF3B3B' },
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          root: {
            checkedBackground: '#27AB5E',
            checkedBorderColor: '#27AB5E',
          },
        },
      },
    },
  },
});
