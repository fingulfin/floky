import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MediaMatcher
} from "./chunk-7KWR7RM3.js";
import {
  ANIMATION_MODULE_TYPE
} from "./chunk-E5OH4RHV.js";
import {
  InjectionToken,
  inject
} from "./chunk-HHN5OX7V.js";

// node_modules/@angular/material/fesm2022/_animation-chunk.mjs
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var reducedMotion = null;
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}

export {
  MATERIAL_ANIMATIONS,
  _getAnimationsState,
  _animationsDisabled
};
//# sourceMappingURL=chunk-MJYRT3QR.js.map
