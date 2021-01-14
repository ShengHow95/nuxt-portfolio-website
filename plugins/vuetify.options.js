import colors from 'vuetify/es5/util/colors'

import {
  mdiChevronDown,
  mdiChevronUp,
  mdiAirplane,
  mdiGamepadSquare,
  mdiCodeBraces,
  mdiFacebook,
  mdiInstagram,
  mdiWhatsapp,
  mdiLinkedin,
  mdiGmail,
} from '@mdi/js'

export default function () {
  return {
    icons: {
      iconfont: 'mdiSvg',
      values: {
        mdiChevronDown,
        mdiChevronUp,
        mdiAirplane,
        mdiGamepadSquare,
        mdiCodeBraces,
        mdiFacebook,
        mdiInstagram,
        mdiWhatsapp,
        mdiLinkedin,
        mdiGmail,
      },
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  }
}
