import { IColorSwatch } from '@/types';

const darkColorLightModeVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-white)',

  plainColor: `var(--joy-palette-${color}-500)`,
  plainHoverBg: `var(--joy-palette-${color}-100)`,
  plainActiveBg: `var(--joy-palette-${color}-200)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,

  outlinedColor: `var(--joy-palette-${color}-500)`,
  outlinedBorder: `var(--joy-palette-${color}-200)`,
  outlinedHoverBg: `var(--joy-palette-${color}-100)`,
  outlinedActiveBg: `var(--joy-palette-${color}-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

  softColor: `var(--joy-palette-${color}-700)`,
  softBg: `var(--joy-palette-${color}-100)`,
  softHoverBg: `var(--joy-palette-${color}-200)`,
  softActiveBg: `var(--joy-palette-${color}-300)`,
  softDisabledColor: `var(--joy-palette-neutral-400)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,

  solidColor: 'var(--joy-palette-common-white)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-600)`,
  solidActiveBg: `var(--joy-palette-${color}-700)`,
  solidDisabledColor: `var(--joy-palette-neutral-400)`,
  solidDisabledBg: `var(--joy-palette-neutral-100)`
});

const lightColorLightModeVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-black)',

  plainColor: `var(--joy-palette-${color}-800)`,
  plainHoverBg: `var(--joy-palette-${color}-100)`,
  plainActiveBg: `var(--joy-palette-${color}-200)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,

  outlinedColor: `var(--joy-palette-${color}-800)`,
  outlinedBorder: `var(--joy-palette-${color}-400)`,
  outlinedHoverBg: `var(--joy-palette-${color}-100)`,
  outlinedActiveBg: `var(--joy-palette-${color}-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

  softColor: `var(--joy-palette-${color}-800)`,
  softBg: `var(--joy-palette-${color}-100)`,
  softHoverBg: `var(--joy-palette-${color}-200)`,
  softActiveBg: `var(--joy-palette-${color}-300)`,
  softDisabledColor: `var(--joy-palette-neutral-400)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,

  solidColor: 'var(--joy-palette-common-black)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-600)`,
  solidActiveBg: `var(--joy-palette-${color}-700)`,
  solidDisabledColor: `var(--joy-palette-neutral-400)`,
  solidDisabledBg: `var(--joy-palette-neutral-100)`
});

const neutralColorLightModeVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-white)',

  plainColor: `var(--joy-palette-${color}-800)`,
  plainHoverBg: `var(--joy-palette-${color}-100)`,
  plainActiveBg: `var(--joy-palette-${color}-200)`,
  plainDisabledColor: `var(--joy-palette-neutral-400)`,

  outlinedColor: `var(--joy-palette-${color}-800)`,
  outlinedBorder: `var(--joy-palette-${color}-200)`,
  outlinedHoverBg: `var(--joy-palette-${color}-100)`,
  outlinedActiveBg: `var(--joy-palette-${color}-200)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

  softColor: `var(--joy-palette-${color}-700)`,
  softBg: `var(--joy-palette-${color}-100)`,
  softHoverBg: `var(--joy-palette-${color}-200)`,
  softActiveBg: `var(--joy-palette-${color}-300)`,
  softDisabledColor: `var(--joy-palette-neutral-400)`,
  softDisabledBg: `var(--joy-palette-neutral-50)`,

  solidColor: 'var(--joy-palette-common-white)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-600)`,
  solidActiveBg: `var(--joy-palette-${color}-700)`,
  solidDisabledColor: `var(--joy-palette-neutral-400)`,
  solidDisabledBg: `var(--joy-palette-neutral-100)`
});

const darkColorDarkModeVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-white)',

  plainColor: `var(--joy-palette-${color}-300)`,
  plainHoverBg: `var(--joy-palette-${color}-800)`,
  plainActiveBg: `var(--joy-palette-${color}-700)`,
  plainDisabledColor: `var(--joy-palette-neutral-500)`,

  outlinedColor: `var(--joy-palette-${color}-200)`,
  outlinedBorder: `var(--joy-palette-${color}-800)`,
  outlinedHoverBg: `var(--joy-palette-${color}-800)`,
  outlinedActiveBg: `var(--joy-palette-${color}-700)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-500)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-800)`,

  softColor: `var(--joy-palette-${color}-100)`,
  softBg: `var(--joy-palette-${color}-800)`,
  softHoverBg: `var(--joy-palette-${color}-700)`,
  softActiveColor: `var(--joy-palette-${color}-100)`,
  softActiveBg: `var(--joy-palette-${color}-600)`,
  softDisabledColor: `var(--joy-palette-neutral-500)`,
  softDisabledBg: `var(--joy-palette-neutral-800)`,

  solidColor: 'var(--joy-palette-common-white)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-500)`,
  solidActiveBg: `var(--joy-palette-${color}-600)`,
  solidDisabledColor: `var(--joy-palette-neutral-500)`,
  solidDisabledBg: `var(--joy-palette-neutral-800)`
});

const lightColorDarkModeVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-black)',

  plainColor: `var(--joy-palette-${color}-300)`,
  plainHoverBg: `var(--joy-palette-${color}-800)`,
  plainActiveBg: `var(--joy-palette-${color}-700)`,
  plainDisabledColor: `var(--joy-palette-neutral-500)`,

  outlinedColor: `var(--joy-palette-${color}-200)`,
  outlinedBorder: `var(--joy-palette-${color}-700)`,
  outlinedHoverBg: `var(--joy-palette-${color}-800)`,
  outlinedActiveBg: `var(--joy-palette-${color}-700)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-500)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-700)`,

  softColor: `var(--joy-palette-${color}-100)`,
  softBg: `var(--joy-palette-${color}-800)`,
  softHoverBg: `var(--joy-palette-${color}-700)`,
  softActiveColor: `var(--joy-palette-${color}-100)`,
  softActiveBg: `var(--joy-palette-${color}-600)`,
  softDisabledColor: `var(--joy-palette-neutral-500)`,
  softDisabledBg: `var(--joy-palette-neutral-800)`,

  solidColor: 'var(--joy-palette-common-black)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-500)`,
  solidActiveBg: `var(--joy-palette-${color}-600)`,
  solidDisabledColor: `var(--joy-palette-neutral-500)`,
  solidDisabledBg: `var(--joy-palette-neutral-800)`
});

const neutralColorDarkModeVariables = (color: string, swatch: IColorSwatch) => ({
  ...swatch,

  contrastText: 'var(--joy-palette-common-white)',

  plainColor: `var(--joy-palette-${color}-300)`,
  plainHoverBg: `var(--joy-palette-${color}-800)`,
  plainActiveBg: `var(--joy-palette-${color}-700)`,
  plainDisabledColor: `var(--joy-palette-neutral-500)`,

  outlinedColor: `var(--joy-palette-${color}-100)`,
  outlinedBorder: `var(--joy-palette-${color}-700)`,
  outlinedHoverBg: `var(--joy-palette-${color}-800)`,
  outlinedActiveBg: `var(--joy-palette-${color}-700)`,
  outlinedDisabledColor: `var(--joy-palette-neutral-500)`,
  outlinedDisabledBorder: `var(--joy-palette-neutral-800)`,

  softColor: `var(--joy-palette-${color}-100)`,
  softBg: `var(--joy-palette-${color}-800)`,
  softHoverBg: `var(--joy-palette-${color}-700)`,
  softActiveColor: `var(--joy-palette-${color}-100)`,
  softActiveBg: `var(--joy-palette-${color}-600)`,
  softDisabledColor: `var(--joy-palette-neutral-500)`,
  softDisabledBg: `var(--joy-palette-neutral-800)`,

  solidColor: 'var(--joy-palette-common-white)',
  solidBg: `var(--joy-palette-${color}-500)`,
  solidHoverBg: `var(--joy-palette-${color}-500)`,
  solidActiveBg: `var(--joy-palette-${color}-600)`,
  solidDisabledColor: `var(--joy-palette-neutral-500)`,
  solidDisabledBg: `var(--joy-palette-neutral-800)`
});

export {
  darkColorLightModeVariables,
  lightColorLightModeVariables,
  darkColorDarkModeVariables,
  lightColorDarkModeVariables,
  neutralColorDarkModeVariables,
  neutralColorLightModeVariables
};
