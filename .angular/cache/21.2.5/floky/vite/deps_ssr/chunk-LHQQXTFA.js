import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MatTooltip,
  TooltipComponent
} from "./chunk-APYWS3I4.js";
import {
  A11yModule
} from "./chunk-BBRJ5XOB.js";
import {
  OverlayModule
} from "./chunk-2W2UPT4G.js";
import {
  CdkScrollableModule
} from "./chunk-3WI7ABM6.js";
import {
  BidiModule
} from "./chunk-ZCHOUZYR.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineNgModule
} from "./chunk-E5OH4RHV.js";
import {
  require_operators,
  ɵɵdefineInjector
} from "./chunk-HHN5OX7V.js";
import {
  require_cjs
} from "./chunk-O5J3CNTX.js";
import {
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@angular/material/fesm2022/tooltip.mjs
var import_operators = __toESM(require_operators(), 1);
var import_rxjs = __toESM(require_cjs(), 1);
var MatTooltipModule = class _MatTooltipModule {
  static ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [A11yModule, OverlayModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
    }]
  }], null, null);
})();

export {
  MatTooltipModule
};
//# sourceMappingURL=chunk-LHQQXTFA.js.map
