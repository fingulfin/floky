
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/floky/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/floky/admin",
    "route": "/floky"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2D6NGJUV.js"
    ],
    "route": "/floky/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2D6NGJUV.js"
    ],
    "redirectTo": "/floky",
    "route": "/floky/home/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GJMYHQ5S.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GJMYHQ5S.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GJMYHQ5S.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GJMYHQ5S.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/sign-in"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GJMYHQ5S.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/sign-up"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/dashboards/project",
    "route": "/floky/admin/dashboards"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/dashboards/project"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/dashboards/analytics"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/dashboards/finance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/academy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/academy/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/contacts"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/contacts/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/file-manager"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/file-manager/folders/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center/faq"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center/support"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/help-center/guides/getting-started",
    "route": "/floky/admin/help-center/guides"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center/guides/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/notes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/notes/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/tasks"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/tasks/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/account"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/security"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/plan-and-billing"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/error"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/error/404"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/documentation/getting-started/introduction",
    "route": "/floky/admin/documentation/getting-started"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/getting-started/installation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/getting-started/development"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/getting-started/building"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/changelog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/404"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/404",
    "route": "/floky/admin/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YSW2POM6.js",
      "chunk-5IZO4XV6.js"
    ],
    "route": "/floky/coming-soon"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 32128, hash: '31bfeb7a7445c28a9f1846c3916e794bc93cc3de05ee3a6611a0848e7af0b056', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2424, hash: 'dbf2efe3aef99095a33f0de5c84836285051d24f4cf7a92a263a8a2f31e21655', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3DNZV47U.css': {size: 116889, hash: 'WMr+dEgzkQ4', text: () => import('./assets-chunks/styles-3DNZV47U_css.mjs').then(m => m.default)}
  },
};
