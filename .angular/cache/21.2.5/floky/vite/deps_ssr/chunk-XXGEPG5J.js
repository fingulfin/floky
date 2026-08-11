import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/@angular/cdk/fesm2022/_css-pixel-value-chunk.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}

export {
  coerceCssPixelValue
};
//# sourceMappingURL=chunk-XXGEPG5J.js.map
