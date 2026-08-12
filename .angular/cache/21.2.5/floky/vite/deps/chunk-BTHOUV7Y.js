import {
  MatTooltip,
  TooltipComponent
} from "./chunk-TC5GZIA4.js";
import {
  A11yModule
} from "./chunk-NROIRHAT.js";
import {
  OverlayModule
} from "./chunk-BDVCPJNG.js";
import {
  CdkScrollableModule
} from "./chunk-JMKWWLIP.js";
import {
  BidiModule
} from "./chunk-AUDLW4C6.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineNgModule
} from "./chunk-FVDQIGLM.js";
import {
  ɵɵdefineInjector
} from "./chunk-SAVM66CY.js";

// node_modules/@angular/material/fesm2022/tooltip.mjs
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
//# sourceMappingURL=chunk-BTHOUV7Y.js.map
