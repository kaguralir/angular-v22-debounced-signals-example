import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const PrepngoThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFF8ED',
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
    danger: palette('#FF3B3B'),
    success: palette('#27AB5E'),
    info: palette('#2196F3'),
    colorScheme: {
      light: {
        surface: {
          0: '#FFFFFF',
          50: '#F5F5F6',
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
      colorScheme: {
        light: {
          root: {
            secondary: {
              background: '{secondary.500}',
              hoverBackground: '{secondary.600}',
              activeBackground: '{secondary.700}',
              borderColor: '{secondary.500}',
              hoverBorderColor: '{secondary.600}',
              activeBorderColor: '{secondary.700}',
              color: '{surface.950}',
              focusRing: { color: '{secondary.500}' },
            },
            danger: {
              background: '{danger.500}',
              hoverBackground: '{danger.600}',
              activeBackground: '{danger.700}',
              borderColor: '{danger.500}',
              hoverBorderColor: '{danger.600}',
              activeBorderColor: '{danger.700}',
              focusRing: { color: '{danger.500}' },
            },
            success: {
              background: '{success.500}',
              hoverBackground: '{success.600}',
              activeBackground: '{success.700}',
              borderColor: '{success.500}',
              hoverBorderColor: '{success.600}',
              activeBorderColor: '{success.700}',
              focusRing: { color: '{success.500}' },
            },
          },
          outlined: {
            contrast: {
              borderColor: '{primary.500}',
              color: '{primary.600}',
            },
          },
        },
        dark: {
          root: {
            secondary: {
              color: '{surface.950}',
              background: '{secondary.500}',
              hoverBackground: '{secondary.600}',
              activeBackground: '{secondary.700}',
              borderColor: '{secondary.500}',
              hoverBorderColor: '{secondary.600}',
              activeBorderColor: '{secondary.700}',
              focusRing: { color: '{secondary.500}' },
            },
          },
        },
      },
      root: {
        borderRadius: '16px',
        label: { fontWeight: '600' },
        lg: { fontSize: '18px', paddingY: '17px' },
      },
    },
    select: {
      dropdown: { color: 'var(--p-primary-950)' },
      overlay: {
        borderRadius: '16px',
        background: 'var(--p-surface-0)',
        borderColor: 'transparent',
        shadow: '0px 2px 28.1px 0px #0000001A',
      },
      option: {
        selectedBackground: 'var(--p-primary-100)',
        selectedFocusBackground: 'var(--p-primary-200)',
        focusBackground: 'var(--p-surface-100)',
      },
      root: {
        borderRadius: '16px',
        borderColor: 'transparent',
        background: 'var(--p-surface-100)',
        shadow: 'none',
        lg: { paddingY: '17.5px', paddingX: '16px', fontSize: '1.125rem' },
      },
    },
    inputtext: {
      root: {
        borderRadius: '16px',
        borderColor: 'transparent',
        background: 'var(--p-surface-100)',
        color: 'var(--p-surface-950)',
        lg: { paddingY: '12px', paddingX: '16px', fontSize: '1.5rem' },
      },
    },
    textarea: {
      root: {
        borderRadius: '16px',
        borderColor: 'transparent',
        background: 'var(--p-surface-100)',
        color: 'var(--p-surface-950)',
      },
    },
    card: {
      root: {
        background: '{surface.0}',
        shadow: '0px 2px 8px rgba(0,0,0,0.05)',
        borderRadius: '16px',
      },
      title: { fontSize: '1.25rem', fontWeight: '700' },
    },
    tag: {
      root: {
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '600',
      },
      colorScheme: {
        light: {
          secondary: {
            background: '{secondary.200}',
            color: '{primary.950}',
          },
          info: {
            background: '{info.100}',
            color: '{surface.950}',
          },
          success: {
            background: '{success.500}',
            color: '{surface.0}',
          },
        },
      },
    },
    checkbox: {
      root: {
        borderRadius: '6px',
        borderColor: '{surface.300}',
        background: '{surface.0}',
        hoverBorderColor: '{surface.400}',
        focusRing: { color: '{primary.500}', width: '2px' },
      },
    },
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            colorOne: '{primary.500}',
            colorTwo: '{primary.500}',
            colorThree: '{primary.500}',
            colorFour: '{primary.500}',
          },
        },
      },
    },
  },
});
