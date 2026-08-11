import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Directive,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
  afterRenderEffect,
  model,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-E5OH4RHV.js";
import {
  SIGNAL,
  createComputed,
  createSignal,
  inject,
  signal
} from "./chunk-HHN5OX7V.js";
import {
  __spreadValues
} from "./chunk-6DU2HRTW.js";

// node_modules/@angular/aria/fesm2022/_expansion-chunk.mjs
var ListExpansion = class {
  inputs;
  constructor(inputs) {
    this.inputs = inputs;
  }
  open(item) {
    if (!this.isExpandable(item)) return false;
    if (item.expanded()) return false;
    if (!this.inputs.multiExpandable()) {
      this.closeAll();
    }
    item.expanded.set(true);
    return true;
  }
  close(item) {
    if (!this.isExpandable(item)) return false;
    item.expanded.set(false);
    return true;
  }
  toggle(item) {
    return item.expanded() ? this.close(item) : this.open(item);
  }
  openAll() {
    if (this.inputs.multiExpandable()) {
      for (const item of this.inputs.items()) {
        this.open(item);
      }
    }
  }
  closeAll() {
    for (const item of this.inputs.items()) {
      this.close(item);
    }
  }
  isExpandable(item) {
    return !this.inputs.disabled() && !item.disabled() && item.expandable();
  }
};

// node_modules/@angular/aria/fesm2022/_signal-like-chunk.mjs
var Modifier;
(function(Modifier2) {
  Modifier2[Modifier2["None"] = 0] = "None";
  Modifier2[Modifier2["Ctrl"] = 1] = "Ctrl";
  Modifier2[Modifier2["Shift"] = 2] = "Shift";
  Modifier2[Modifier2["Alt"] = 4] = "Alt";
  Modifier2[Modifier2["Meta"] = 8] = "Meta";
  Modifier2["Any"] = "Any";
})(Modifier || (Modifier = {}));
var EventManager = class {
  configs = [];
  handle(event) {
    for (const config of this.configs) {
      if (config.matcher(event)) {
        config.handler(event);
        if (config.preventDefault) {
          event.preventDefault();
        }
        if (config.stopPropagation) {
          event.stopPropagation();
        }
      }
    }
  }
};
function getModifiers(event) {
  return (+event.ctrlKey && Modifier.Ctrl) | (+event.shiftKey && Modifier.Shift) | (+event.altKey && Modifier.Alt) | (+event.metaKey && Modifier.Meta);
}
function hasModifiers(event, modifiers) {
  const eventModifiers = getModifiers(event);
  const modifiersList = Array.isArray(modifiers) ? modifiers : [modifiers];
  if (modifiersList.includes(Modifier.Any)) {
    return true;
  }
  return modifiersList.some((modifiers2) => eventModifiers === modifiers2);
}
var KeyboardEventManager = class extends EventManager {
  options = {
    ignoreRepeat: true,
    preventDefault: true,
    stopPropagation: true
  };
  on(...args) {
    const {
      modifiers,
      key,
      handler,
      options
    } = this._normalizeInputs(...args);
    this.configs.push(__spreadValues(__spreadValues({
      handler,
      matcher: (event) => this._isMatch(event, key, modifiers, options)
    }, this.options), options));
    return this;
  }
  _normalizeInputs(...args) {
    const withModifiers = Array.isArray(args[0]) || args[0] in Modifier;
    const modifiers = withModifiers ? args[0] : Modifier.None;
    const key = withModifiers ? args[1] : args[0];
    const handler = withModifiers ? args[2] : args[1];
    const options = withModifiers ? args[3] : args[2];
    return {
      key,
      handler,
      modifiers,
      options: options ?? {}
    };
  }
  _isMatch(event, key, modifiers, options) {
    if (!hasModifiers(event, modifiers)) {
      return false;
    }
    if (event.repeat && options?.ignoreRepeat !== false) {
      return false;
    }
    if (key instanceof RegExp) {
      return key.test(event.key);
    }
    const keyStr = typeof key === "string" ? key : key();
    return keyStr.toLowerCase() === event.key.toLowerCase();
  }
};
function computed(computation) {
  const computed2 = createComputed(computation);
  computed2.toString = () => `[Computed: ${computed2()}]`;
  computed2[SIGNAL].debugName = "";
  return computed2;
}
function signal2(initialValue) {
  const [get, set, update] = createSignal(initialValue);
  get[SIGNAL].debugName = "";
  return Object.assign(get, {
    set,
    update,
    asReadonly: () => get
  });
}

// node_modules/@angular/aria/fesm2022/_list-navigation-chunk.mjs
var ListFocus = class {
  inputs;
  prevActiveItem = signal2(void 0);
  prevActiveIndex = computed(() => {
    return this.prevActiveItem() ? this.inputs.items().indexOf(this.prevActiveItem()) : -1;
  });
  activeIndex = computed(() => {
    return this.inputs.activeItem() ? this.inputs.items().indexOf(this.inputs.activeItem()) : -1;
  });
  constructor(inputs) {
    this.inputs = inputs;
  }
  isListDisabled() {
    return this.inputs.disabled() || this.inputs.items().every((i) => i.disabled());
  }
  getActiveDescendant() {
    if (this.isListDisabled()) {
      return void 0;
    }
    if (this.inputs.focusMode() === "roving") {
      return void 0;
    }
    return this.inputs.activeItem()?.id() ?? void 0;
  }
  getListTabIndex() {
    if (this.isListDisabled()) {
      return 0;
    }
    return this.inputs.focusMode() === "activedescendant" ? 0 : -1;
  }
  getItemTabIndex(item) {
    if (this.isListDisabled()) {
      return -1;
    }
    if (this.inputs.focusMode() === "activedescendant") {
      return -1;
    }
    return this.inputs.activeItem() === item ? 0 : -1;
  }
  focus(item, opts) {
    if (this.isListDisabled() || !this.isFocusable(item)) {
      return false;
    }
    this.prevActiveItem.set(this.inputs.activeItem());
    this.inputs.activeItem.set(item);
    if (opts?.focusElement || opts?.focusElement === void 0) {
      this.inputs.focusMode() === "roving" ? item.element()?.focus() : this.inputs.element()?.focus();
    }
    return true;
  }
  isFocusable(item) {
    return !item.disabled() || this.inputs.softDisabled();
  }
};
var ListNavigation = class {
  inputs;
  constructor(inputs) {
    this.inputs = inputs;
  }
  goto(item, opts) {
    return item ? this.inputs.focusManager.focus(item, opts) : false;
  }
  next(opts) {
    return this._advance(1, opts);
  }
  peekNext(opts) {
    return this._peek(1, opts);
  }
  prev(opts) {
    return this._advance(-1, opts);
  }
  peekPrev(opts) {
    return this._peek(-1, opts);
  }
  first(opts) {
    const item = this.peekFirst(opts);
    return item ? this.goto(item, opts) : false;
  }
  last(opts) {
    const item = this.peekLast(opts);
    return item ? this.goto(item, opts) : false;
  }
  peekFirst(opts) {
    const items = opts?.items ?? this.inputs.items();
    return items.find((i) => this.inputs.focusManager.isFocusable(i));
  }
  peekLast(opts) {
    const items = opts?.items ?? this.inputs.items();
    for (let i = items.length - 1; i >= 0; i--) {
      if (this.inputs.focusManager.isFocusable(items[i])) {
        return items[i];
      }
    }
    return;
  }
  _advance(delta, opts) {
    const item = this._peek(delta, opts);
    return item ? this.goto(item, opts) : false;
  }
  _peek(delta, opts) {
    const items = opts?.items ?? this.inputs.items();
    const itemCount = items.length;
    const activeItem = this.inputs.focusManager.inputs.activeItem();
    const startIndex = opts?.items && activeItem ? items.indexOf(activeItem) : this.inputs.focusManager.activeIndex();
    const step = (i) => this.inputs.wrap() ? (i + delta + itemCount) % itemCount : i + delta;
    for (let i = step(startIndex); i !== startIndex && i < itemCount && i >= 0; i = step(i)) {
      if (this.inputs.focusManager.isFocusable(items[i])) {
        return items[i];
      }
    }
    return;
  }
};

// node_modules/@angular/aria/fesm2022/_pointer-event-manager-chunk.mjs
var MouseButton;
(function(MouseButton2) {
  MouseButton2[MouseButton2["Main"] = 0] = "Main";
  MouseButton2[MouseButton2["Auxiliary"] = 1] = "Auxiliary";
  MouseButton2[MouseButton2["Secondary"] = 2] = "Secondary";
})(MouseButton || (MouseButton = {}));
var PointerEventManager = class extends EventManager {
  options = {
    preventDefault: false,
    stopPropagation: false
  };
  on(...args) {
    const {
      button,
      handler,
      modifiers
    } = this._normalizeInputs(...args);
    this.configs.push(__spreadValues({
      handler,
      matcher: (event) => this._isMatch(event, button, modifiers)
    }, this.options));
    return this;
  }
  _normalizeInputs(...args) {
    if (args.length === 3) {
      return {
        button: args[0],
        modifiers: args[1],
        handler: args[2]
      };
    }
    if (args.length === 2) {
      return {
        button: MouseButton.Main,
        modifiers: args[0],
        handler: args[1]
      };
    }
    return {
      button: MouseButton.Main,
      modifiers: Modifier.None,
      handler: args[0]
    };
  }
  _isMatch(event, button, modifiers) {
    return button === (event.button ?? 0) && hasModifiers(event, modifiers);
  }
};

// node_modules/@angular/aria/fesm2022/_deferred-content-chunk.mjs
var DeferredContentAware = class _DeferredContentAware {
  contentVisible = signal(false, ...ngDevMode ? [{
    debugName: "contentVisible"
  }] : []);
  preserveContent = model(false, ...ngDevMode ? [{
    debugName: "preserveContent"
  }] : []);
  static ɵfac = function DeferredContentAware_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredContentAware)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DeferredContentAware,
    inputs: {
      preserveContent: [1, "preserveContent"]
    },
    outputs: {
      preserveContent: "preserveContentChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredContentAware, [{
    type: Directive
  }], null, {
    preserveContent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "preserveContent",
        required: false
      }]
    }, {
      type: Output,
      args: ["preserveContentChange"]
    }]
  });
})();
var DeferredContent = class _DeferredContent {
  _deferredContentAware = inject(DeferredContentAware, {
    optional: true
  });
  _templateRef = inject(TemplateRef);
  _viewContainerRef = inject(ViewContainerRef);
  _currentViewRef = null;
  _isRendered = false;
  deferredContentAware = signal(this._deferredContentAware, ...ngDevMode ? [{
    debugName: "deferredContentAware"
  }] : []);
  constructor() {
    afterRenderEffect(() => {
      if (this.deferredContentAware()?.contentVisible()) {
        if (!this._isRendered) {
          this._destroyContent();
          this._currentViewRef = this._viewContainerRef.createEmbeddedView(this._templateRef);
          this._isRendered = true;
        }
      } else if (!this.deferredContentAware()?.preserveContent()) {
        this._destroyContent();
        this._isRendered = false;
      }
    });
  }
  ngOnDestroy() {
    this._destroyContent();
  }
  _destroyContent() {
    const ref = this._currentViewRef;
    if (ref && !ref.destroyed) {
      ref.destroy();
      this._currentViewRef = null;
    }
  }
  static ɵfac = function DeferredContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DeferredContent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredContent, [{
    type: Directive
  }], () => [], null);
})();

export {
  ListExpansion,
  Modifier,
  KeyboardEventManager,
  computed,
  signal2 as signal,
  ListFocus,
  ListNavigation,
  PointerEventManager,
  DeferredContentAware,
  DeferredContent
};
//# sourceMappingURL=chunk-PQCUUB35.js.map
