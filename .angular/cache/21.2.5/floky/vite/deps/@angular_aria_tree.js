import {
  DeferredContent,
  DeferredContentAware,
  KeyboardEventManager,
  ListExpansion,
  ListFocus,
  ListNavigation,
  Modifier,
  PointerEventManager,
  computed as computed2,
  signal as signal2
} from "./chunk-HGAPZ7V6.js";
import "./chunk-NROIRHAT.js";
import "./chunk-XFE6OGQK.js";
import "./chunk-MS3JM4E7.js";
import "./chunk-4RMONEW5.js";
import "./chunk-M7CJEGP6.js";
import "./chunk-B7XDWOSB.js";
import "./chunk-FJLHLNUT.js";
import {
  _IdGenerator
} from "./chunk-KCGWZZWS.js";
import "./chunk-4OFQPBG3.js";
import "./chunk-N4DOILP3.js";
import {
  Directionality
} from "./chunk-AUDLW4C6.js";
import "./chunk-LXBE3MHA.js";
import "./chunk-SPOG25LG.js";
import "./chunk-GOFQFLCJ.js";
import "./chunk-TU3DGOM7.js";
import {
  ContentChild,
  Directive,
  ElementRef,
  Input,
  Output,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  contentChild,
  input,
  model,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵcontentQuerySignal,
  ɵɵdefineDirective,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵqueryAdvance
} from "./chunk-FVDQIGLM.js";
import {
  InjectionToken,
  computed,
  forwardRef,
  inject,
  signal,
  untracked
} from "./chunk-SAVM66CY.js";
import "./chunk-RSS3ODKE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/aria/fesm2022/_combobox-chunk.mjs
var ComboboxPattern = class {
  inputs;
  expanded = signal2(false);
  disabled = () => this.inputs.disabled();
  activeDescendant = computed2(() => {
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return null;
    }
    return popupControls?.activeId() ?? null;
  });
  highlightedItem = signal2(void 0);
  isDeleting = false;
  isFocused = signal2(false);
  hasBeenFocused = signal2(false);
  expandKey = computed2(() => this.inputs.textDirection() === "rtl" ? "ArrowLeft" : "ArrowRight");
  collapseKey = computed2(() => this.inputs.textDirection() === "rtl" ? "ArrowRight" : "ArrowLeft");
  popupId = computed2(() => this.inputs.popupControls()?.id() || null);
  autocomplete = computed2(() => this.inputs.filterMode() === "highlight" ? "both" : "list");
  hasPopup = computed2(() => this.inputs.popupControls()?.role() || null);
  readonly = computed2(() => this.inputs.readonly() || this.inputs.disabled() || null);
  listControls = () => {
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return null;
    }
    return popupControls;
  };
  treeControls = () => {
    const popupControls = this.inputs.popupControls();
    if (popupControls?.role() === "tree") {
      return popupControls;
    }
    return null;
  };
  keydown = computed2(() => {
    const manager = new KeyboardEventManager();
    const popupControls = this.inputs.popupControls();
    if (!popupControls) {
      return manager;
    }
    if (popupControls instanceof ComboboxDialogPattern) {
      if (!this.expanded()) {
        manager.on("ArrowUp", () => this.open()).on("ArrowDown", () => this.open());
        if (this.readonly()) {
          manager.on("Enter", () => this.open()).on(" ", () => this.open());
        }
      }
      return manager;
    }
    if (!this.inputs.alwaysExpanded()) {
      manager.on("Escape", () => this.close({
        reset: !this.readonly()
      }));
    }
    if (!this.expanded()) {
      manager.on("ArrowDown", () => this.open({
        first: true
      })).on("ArrowUp", () => this.open({
        last: true
      }));
      if (this.readonly()) {
        manager.on("Enter", () => this.open({
          selected: true
        })).on(" ", () => this.open({
          selected: true
        }));
      }
      return manager;
    }
    manager.on("ArrowDown", () => this.next(), {
      ignoreRepeat: false
    }).on("ArrowUp", () => this.prev(), {
      ignoreRepeat: false
    }).on("Home", () => this.first()).on("End", () => this.last());
    if (this.readonly()) {
      manager.on(" ", () => this.select({
        commit: true,
        close: !popupControls.multi()
      }));
    }
    if (popupControls.role() === "listbox") {
      manager.on("Enter", () => {
        this.select({
          commit: true,
          close: !popupControls.multi()
        });
      });
    }
    const treeControls = this.treeControls();
    if (treeControls?.isItemSelectable()) {
      manager.on("Enter", () => this.select({
        commit: true,
        close: true
      }));
    }
    if (treeControls?.isItemExpandable()) {
      manager.on(this.expandKey(), () => this.expandItem()).on(this.collapseKey(), () => this.collapseItem());
      if (!treeControls.isItemSelectable()) {
        manager.on("Enter", () => this.expandItem());
      }
    }
    if (treeControls?.isItemCollapsible()) {
      manager.on(this.collapseKey(), () => this.collapseItem());
    }
    return manager;
  });
  click = computed2(() => new PointerEventManager().on((e) => {
    if (e.target === this.inputs.inputEl()) {
      if (this.readonly()) {
        this.expanded() ? this.close() : this.open({
          selected: true
        });
      }
    }
    const controls = this.inputs.popupControls();
    if (controls instanceof ComboboxDialogPattern) {
      return;
    }
    const item = controls?.getItem(e);
    if (item) {
      if (controls?.role() === "tree") {
        const treeControls = controls;
        if (treeControls.isItemExpandable(item) && !treeControls.isItemSelectable(item)) {
          treeControls.toggleExpansion(item);
          this.inputs.inputEl()?.focus();
          return;
        }
      }
      this.select({
        item,
        commit: true,
        close: !controls?.multi()
      });
      this.inputs.inputEl()?.focus();
    }
  }));
  constructor(inputs) {
    this.inputs = inputs;
  }
  onKeydown(event) {
    if (!this.inputs.disabled()) {
      this.keydown().handle(event);
    }
  }
  onClick(event) {
    if (!this.inputs.disabled()) {
      this.click().handle(event);
    }
  }
  onInput(event) {
    if (this.inputs.disabled() || this.inputs.readonly()) {
      return;
    }
    const inputEl = this.inputs.inputEl();
    if (!inputEl) {
      return;
    }
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    this.open();
    this.inputs.inputValue?.set(inputEl.value);
    this.isDeleting = event instanceof InputEvent && !!event.inputType.match(/^delete/);
    if (this.inputs.filterMode() === "highlight" && !this.isDeleting) {
      this.highlight();
    }
  }
  onFocusIn() {
    if (this.inputs.alwaysExpanded() && !this.hasBeenFocused()) {
      const firstSelectedItem = this.listControls()?.getSelectedItems()[0];
      firstSelectedItem ? this.listControls()?.focus(firstSelectedItem) : this.first();
    }
    this.isFocused.set(true);
    this.hasBeenFocused.set(true);
  }
  onFocusOut(event) {
    if (this.inputs.disabled()) {
      return;
    }
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    if (!(event.relatedTarget instanceof HTMLElement) || !this.inputs.containerEl()?.contains(event.relatedTarget)) {
      this.isFocused.set(false);
      if (!this.expanded()) {
        return;
      }
      if (this.readonly()) {
        this.close();
        return;
      }
      if (this.inputs.filterMode() !== "manual") {
        this.commit();
      } else {
        const item = popupControls?.items().find((i) => i.searchTerm() === this.inputs.inputEl()?.value);
        if (item) {
          this.select({
            item
          });
        }
      }
      this.close();
    }
  }
  firstMatch = computed2(() => {
    if (this.listControls()?.role() === "listbox") {
      return this.listControls()?.items()[0];
    }
    return this.listControls()?.items().find((i) => i.value() === this.inputs.firstMatch());
  });
  onFilter() {
    if (this.readonly()) {
      return;
    }
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    const isInitialRender = !this.inputs.inputValue?.().length && !this.isDeleting;
    if (isInitialRender) {
      return;
    }
    if (!this.isFocused()) {
      return;
    }
    if (this.inputs.popupControls()?.role() === "tree") {
      const treeControls = this.inputs.popupControls();
      this.inputs.inputValue?.().length ? treeControls.expandAll() : treeControls.collapseAll();
    }
    const item = this.firstMatch();
    if (!item) {
      popupControls?.clearSelection();
      popupControls?.unfocus();
      return;
    }
    popupControls?.focus(item);
    if (this.inputs.filterMode() !== "manual") {
      this.select({
        item
      });
    }
    if (this.inputs.filterMode() === "highlight" && !this.isDeleting) {
      this.highlight();
    }
  }
  highlight() {
    const inputEl = this.inputs.inputEl();
    const selectedItems = this.listControls()?.getSelectedItems();
    const item = selectedItems?.[0];
    if (!inputEl || !item) {
      return;
    }
    const isHighlightable = item.searchTerm().toLowerCase().startsWith(this.inputs.inputValue().toLowerCase());
    if (isHighlightable) {
      inputEl.value = this.inputs.inputValue() + item.searchTerm().slice(this.inputs.inputValue().length);
      inputEl.setSelectionRange(this.inputs.inputValue().length, item.searchTerm().length);
      this.highlightedItem.set(item);
    }
  }
  close(opts) {
    const popupControls = this.inputs.popupControls();
    if (this.inputs.alwaysExpanded()) {
      return;
    }
    if (popupControls instanceof ComboboxDialogPattern) {
      this.expanded.set(false);
      return;
    }
    if (this.readonly()) {
      this.expanded.set(false);
      popupControls?.unfocus();
      return;
    }
    if (!opts?.reset) {
      if (this.inputs.filterMode() === "manual") {
        if (!this.listControls()?.items().some((i) => i.searchTerm() === this.inputs.inputEl()?.value)) {
          this.listControls()?.clearSelection();
        }
      }
      this.expanded.set(false);
      popupControls?.unfocus();
      return;
    }
    if (!this.expanded()) {
      this.inputs.inputValue?.set("");
      popupControls?.clearSelection();
      const inputEl = this.inputs.inputEl();
      if (inputEl) {
        inputEl.value = "";
      }
    } else if (this.expanded()) {
      this.expanded.set(false);
      const selectedItem = popupControls?.getSelectedItems()?.[0];
      if (selectedItem?.searchTerm() !== this.inputs.inputValue()) {
        popupControls?.clearSelection();
      }
      return;
    }
    this.close();
    if (!this.readonly()) {
      popupControls?.clearSelection();
    }
  }
  open(nav) {
    this.expanded.set(true);
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    const inputEl = this.inputs.inputEl();
    if (inputEl && this.inputs.filterMode() === "highlight") {
      const isHighlighting = inputEl.selectionStart !== inputEl.value.length;
      this.inputs.inputValue?.set(inputEl.value.slice(0, inputEl.selectionStart || 0));
      if (!isHighlighting) {
        this.highlightedItem.set(void 0);
      }
    }
    if (nav?.first) {
      this.first();
    }
    if (nav?.last) {
      this.last();
    }
    if (nav?.selected) {
      const selectedItem = popupControls?.items().find((i) => popupControls?.getSelectedItems().includes(i));
      if (selectedItem) {
        popupControls?.focus(selectedItem);
      }
    }
  }
  next() {
    this._navigate(() => this.listControls()?.next());
  }
  prev() {
    this._navigate(() => this.listControls()?.prev());
  }
  first() {
    this._navigate(() => this.listControls()?.first());
  }
  last() {
    this._navigate(() => this.listControls()?.last());
  }
  collapseItem() {
    const controls = this.inputs.popupControls();
    this._navigate(() => controls?.collapseItem());
  }
  expandItem() {
    const controls = this.inputs.popupControls();
    this._navigate(() => controls?.expandItem());
  }
  select(opts = {}) {
    const controls = this.listControls();
    const item = opts.item ?? controls?.getActiveItem();
    if (item?.disabled()) {
      return;
    }
    if (opts.item) {
      controls?.focus(opts.item, {
        focusElement: false
      });
    }
    controls?.multi() ? controls.toggle(opts.item) : controls?.select(opts.item);
    if (opts.commit) {
      this.commit();
    }
    if (opts.close) {
      this.close();
    }
  }
  commit() {
    const inputEl = this.inputs.inputEl();
    const selectedItems = this.listControls()?.getSelectedItems();
    if (!inputEl) {
      return;
    }
    inputEl.value = selectedItems?.map((i) => i.searchTerm()).join(", ") || "";
    this.inputs.inputValue?.set(inputEl.value);
    if (this.inputs.filterMode() === "highlight" && !this.readonly()) {
      const length = inputEl.value.length;
      inputEl.setSelectionRange(length, length);
    }
  }
  _navigate(operation) {
    operation();
    if (this.inputs.filterMode() !== "manual") {
      this.select();
    }
    if (this.inputs.filterMode() === "highlight") {
      const selectedItem = this.listControls()?.getSelectedItems()[0];
      if (!selectedItem) {
        return;
      }
      if (selectedItem === this.highlightedItem()) {
        this.highlight();
      } else {
        const inputEl = this.inputs.inputEl();
        inputEl.value = selectedItem?.searchTerm();
      }
    }
  }
};
var ComboboxDialogPattern = class {
  inputs;
  id = () => this.inputs.id();
  role = () => "dialog";
  keydown = computed2(() => {
    return new KeyboardEventManager().on("Escape", () => this.inputs.combobox.close());
  });
  constructor(inputs) {
    this.inputs = inputs;
  }
  onKeydown(event) {
    this.keydown().handle(event);
  }
  onClick(event) {
    if (event.target === this.inputs.element()) {
      this.inputs.combobox.close();
    }
  }
};

// node_modules/@angular/aria/fesm2022/combobox.mjs
var COMBOBOX = new InjectionToken("COMBOBOX");
var ComboboxPopup = class _ComboboxPopup {
  combobox = inject(COMBOBOX, {
    optional: true
  });
  _controls = signal(void 0, ...ngDevMode ? [{
    debugName: "_controls"
  }] : []);
  static ɵfac = function ComboboxPopup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxPopup)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxPopup,
    selectors: [["", "ngComboboxPopup", ""]],
    exportAs: ["ngComboboxPopup"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxPopup, [{
    type: Directive,
    args: [{
      selector: "[ngComboboxPopup]",
      exportAs: "ngComboboxPopup"
    }]
  }], null, null);
})();
var Combobox = class _Combobox {
  textDirection = inject(Directionality).valueSignal.asReadonly();
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _deferredContentAware = inject(DeferredContentAware, {
    optional: true
  });
  popup = contentChild(ComboboxPopup, ...ngDevMode ? [{
    debugName: "popup"
  }] : []);
  filterMode = input("manual", ...ngDevMode ? [{
    debugName: "filterMode"
  }] : []);
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  readonly = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "readonly"
  } : {}), {
    transform: booleanAttribute
  }));
  firstMatch = input(void 0, ...ngDevMode ? [{
    debugName: "firstMatch"
  }] : []);
  expanded = computed(() => this.alwaysExpanded() || this._pattern.expanded(), ...ngDevMode ? [{
    debugName: "expanded"
  }] : []);
  alwaysExpanded = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "alwaysExpanded"
  } : {}), {
    transform: booleanAttribute
  }));
  inputElement = computed(() => this._pattern.inputs.inputEl(), ...ngDevMode ? [{
    debugName: "inputElement"
  }] : []);
  _pattern = new ComboboxPattern(__spreadProps(__spreadValues({}, this), {
    textDirection: this.textDirection,
    disabled: this.disabled,
    readonly: this.readonly,
    inputValue: signal(""),
    inputEl: signal(void 0),
    containerEl: () => this._elementRef.nativeElement,
    popupControls: () => this.popup()?._controls()
  }));
  constructor() {
    afterRenderEffect(() => {
      if (this.alwaysExpanded()) {
        this._pattern.expanded.set(true);
      }
    });
    afterRenderEffect(() => {
      if (!this._deferredContentAware?.contentVisible() && (this._pattern.isFocused() || this.alwaysExpanded())) {
        this._deferredContentAware?.contentVisible.set(true);
      }
    });
  }
  open() {
    this._pattern.open({
      selected: true
    });
  }
  close() {
    this._pattern.close();
  }
  static ɵfac = function Combobox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Combobox)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Combobox,
    selectors: [["", "ngCombobox", ""]],
    contentQueries: function Combobox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.popup, ComboboxPopup, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    hostVars: 1,
    hostBindings: function Combobox_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function Combobox_input_HostBindingHandler($event) {
          return ctx._pattern.onInput($event);
        })("keydown", function Combobox_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("click", function Combobox_click_HostBindingHandler($event) {
          return ctx._pattern.onClick($event);
        })("focusin", function Combobox_focusin_HostBindingHandler() {
          return ctx._pattern.onFocusIn();
        })("focusout", function Combobox_focusout_HostBindingHandler($event) {
          return ctx._pattern.onFocusOut($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-expanded", ctx.expanded());
      }
    },
    inputs: {
      filterMode: [1, "filterMode"],
      disabled: [1, "disabled"],
      readonly: [1, "readonly"],
      firstMatch: [1, "firstMatch"],
      alwaysExpanded: [1, "alwaysExpanded"]
    },
    exportAs: ["ngCombobox"],
    features: [ɵɵProvidersFeature([{
      provide: COMBOBOX,
      useExisting: _Combobox
    }]), ɵɵHostDirectivesFeature([{
      directive: DeferredContentAware,
      inputs: ["preserveContent", "preserveContent"]
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Combobox, [{
    type: Directive,
    args: [{
      selector: "[ngCombobox]",
      exportAs: "ngCombobox",
      hostDirectives: [{
        directive: DeferredContentAware,
        inputs: ["preserveContent"]
      }],
      host: {
        "[attr.data-expanded]": "expanded()",
        "(input)": "_pattern.onInput($event)",
        "(keydown)": "_pattern.onKeydown($event)",
        "(click)": "_pattern.onClick($event)",
        "(focusin)": "_pattern.onFocusIn()",
        "(focusout)": "_pattern.onFocusOut($event)"
      },
      providers: [{
        provide: COMBOBOX,
        useExisting: Combobox
      }]
    }]
  }], () => [], {
    popup: [{
      type: ContentChild,
      args: [forwardRef(() => ComboboxPopup), {
        isSignal: true
      }]
    }],
    filterMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "filterMode",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "readonly",
        required: false
      }]
    }],
    firstMatch: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "firstMatch",
        required: false
      }]
    }],
    alwaysExpanded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alwaysExpanded",
        required: false
      }]
    }]
  });
})();
var ComboboxDialog = class _ComboboxDialog {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  combobox = inject(Combobox);
  _popup = inject(ComboboxPopup, {
    optional: true
  });
  _pattern;
  constructor() {
    this._pattern = new ComboboxDialogPattern({
      id: () => "",
      element: () => this._elementRef.nativeElement,
      combobox: this.combobox._pattern
    });
    if (this._popup) {
      this._popup._controls.set(this._pattern);
    }
    afterRenderEffect(() => {
      if (this._elementRef) {
        this.combobox._pattern.expanded() ? this._elementRef.nativeElement.showModal() : this._elementRef.nativeElement.close();
      }
    });
  }
  close() {
    this._popup?.combobox?._pattern.close();
  }
  static ɵfac = function ComboboxDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxDialog)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxDialog,
    selectors: [["dialog", "ngComboboxDialog", ""]],
    hostVars: 1,
    hostBindings: function ComboboxDialog_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function ComboboxDialog_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("click", function ComboboxDialog_click_HostBindingHandler($event) {
          return ctx._pattern.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-open", ctx.combobox._pattern.expanded());
      }
    },
    exportAs: ["ngComboboxDialog"],
    features: [ɵɵHostDirectivesFeature([ComboboxPopup])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxDialog, [{
    type: Directive,
    args: [{
      selector: "dialog[ngComboboxDialog]",
      exportAs: "ngComboboxDialog",
      host: {
        "[attr.data-open]": "combobox._pattern.expanded()",
        "(keydown)": "_pattern.onKeydown($event)",
        "(click)": "_pattern.onClick($event)"
      },
      hostDirectives: [ComboboxPopup]
    }]
  }], () => [], null);
})();
var ComboboxInput = class _ComboboxInput {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  combobox = inject(Combobox);
  value = model("", ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  constructor() {
    this.combobox._pattern.inputs.inputEl.set(this._elementRef.nativeElement);
    this.combobox._pattern.inputs.inputValue = this.value;
    const controls = this.combobox.popup()?._controls();
    if (controls instanceof ComboboxDialogPattern) {
      return;
    }
    afterRenderEffect(() => {
      this.value();
      controls?.items();
      untracked(() => this.combobox._pattern.onFilter());
    });
  }
  static ɵfac = function ComboboxInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxInput)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxInput,
    selectors: [["input", "ngComboboxInput", ""]],
    hostAttrs: ["role", "combobox"],
    hostVars: 8,
    hostBindings: function ComboboxInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("value", ctx.value());
        ɵɵattribute("aria-disabled", ctx.combobox._pattern.disabled())("aria-expanded", ctx.combobox._pattern.expanded())("aria-activedescendant", ctx.combobox._pattern.activeDescendant())("aria-controls", ctx.combobox._pattern.popupId())("aria-haspopup", ctx.combobox._pattern.hasPopup())("aria-autocomplete", ctx.combobox._pattern.autocomplete())("readonly", ctx.combobox._pattern.readonly());
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    exportAs: ["ngComboboxInput"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxInput, [{
    type: Directive,
    args: [{
      selector: "input[ngComboboxInput]",
      exportAs: "ngComboboxInput",
      host: {
        "role": "combobox",
        "[value]": "value()",
        "[attr.aria-disabled]": "combobox._pattern.disabled()",
        "[attr.aria-expanded]": "combobox._pattern.expanded()",
        "[attr.aria-activedescendant]": "combobox._pattern.activeDescendant()",
        "[attr.aria-controls]": "combobox._pattern.popupId()",
        "[attr.aria-haspopup]": "combobox._pattern.hasPopup()",
        "[attr.aria-autocomplete]": "combobox._pattern.autocomplete()",
        "[attr.readonly]": "combobox._pattern.readonly()"
      }
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }]
  });
})();
var ComboboxPopupContainer = class _ComboboxPopupContainer {
  static ɵfac = function ComboboxPopupContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxPopupContainer)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxPopupContainer,
    selectors: [["ng-template", "ngComboboxPopupContainer", ""]],
    exportAs: ["ngComboboxPopupContainer"],
    features: [ɵɵHostDirectivesFeature([DeferredContent])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxPopupContainer, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: "ngComboboxPopupContainer",
      hostDirectives: [DeferredContent]
    }]
  }], null, null);
})();

// node_modules/@angular/aria/fesm2022/_list-typeahead-chunk.mjs
var ListSelection = class {
  inputs;
  rangeStartIndex = signal2(0);
  rangeEndIndex = signal2(0);
  selectedItems = computed2(() => this.inputs.items().filter((item) => this.inputs.values().includes(item.value())));
  constructor(inputs) {
    this.inputs = inputs;
  }
  select(item, opts = {
    anchor: true
  }) {
    item = item ?? this.inputs.focusManager.inputs.activeItem();
    if (!item || item.disabled() || !item.selectable() || !this.inputs.focusManager.isFocusable(item) || this.inputs.values().includes(item.value())) {
      return;
    }
    if (!this.inputs.multi()) {
      this.deselectAll();
    }
    const index = this.inputs.items().findIndex((i) => i === item);
    if (opts.anchor) {
      this.beginRangeSelection(index);
    }
    this.inputs.values.update((values) => values.concat(item.value()));
  }
  deselect(item) {
    item = item ?? this.inputs.focusManager.inputs.activeItem();
    if (item && !item.disabled() && item.selectable()) {
      this.inputs.values.update((values) => values.filter((value) => value !== item.value()));
    }
  }
  toggle(item) {
    item = item ?? this.inputs.focusManager.inputs.activeItem();
    if (item) {
      this.inputs.values().includes(item.value()) ? this.deselect(item) : this.select(item);
    }
  }
  toggleOne() {
    const item = this.inputs.focusManager.inputs.activeItem();
    if (item) {
      this.inputs.values().includes(item.value()) ? this.deselect() : this.selectOne();
    }
  }
  selectAll() {
    if (!this.inputs.multi()) {
      return;
    }
    for (const item of this.inputs.items()) {
      this.select(item, {
        anchor: false
      });
    }
    this.beginRangeSelection();
  }
  deselectAll() {
    for (const value of this.inputs.values()) {
      const item = this.inputs.items().find((i) => i.value() === value);
      item ? this.deselect(item) : this.inputs.values.update((values) => values.filter((v) => v !== value));
    }
  }
  toggleAll() {
    const selectableValues = this.inputs.items().filter((i) => !i.disabled() && i.selectable() && this.inputs.focusManager.isFocusable(i)).map((i) => i.value());
    selectableValues.every((i) => this.inputs.values().includes(i)) ? this.deselectAll() : this.selectAll();
  }
  selectOne() {
    const item = this.inputs.focusManager.inputs.activeItem();
    if (item && (item.disabled() || !item.selectable())) {
      return;
    }
    this.deselectAll();
    if (this.inputs.values().length > 0 && !this.inputs.multi()) {
      return;
    }
    this.select();
  }
  selectRange(opts = {
    anchor: true
  }) {
    const isStartOfRange = this.inputs.focusManager.prevActiveIndex() === this.rangeStartIndex();
    if (isStartOfRange && opts.anchor) {
      this.beginRangeSelection(this.inputs.focusManager.prevActiveIndex());
    }
    const itemsInRange = this._getItemsFromIndex(this.rangeStartIndex());
    const itemsOutOfRange = this._getItemsFromIndex(this.rangeEndIndex()).filter((i) => !itemsInRange.includes(i));
    for (const item of itemsOutOfRange) {
      this.deselect(item);
    }
    for (const item of itemsInRange) {
      this.select(item, {
        anchor: false
      });
    }
    if (itemsInRange.length) {
      const item = itemsInRange.pop();
      const index = this.inputs.items().findIndex((i) => i === item);
      this.rangeEndIndex.set(index);
    }
  }
  beginRangeSelection(index = this.inputs.focusManager.activeIndex()) {
    this.rangeStartIndex.set(index);
    this.rangeEndIndex.set(index);
  }
  _getItemsFromIndex(index) {
    if (index === -1) {
      return [];
    }
    const upper = Math.max(this.inputs.focusManager.activeIndex(), index);
    const lower = Math.min(this.inputs.focusManager.activeIndex(), index);
    const items = [];
    for (let i = lower; i <= upper; i++) {
      items.push(this.inputs.items()[i]);
    }
    if (this.inputs.focusManager.activeIndex() < index) {
      return items.reverse();
    }
    return items;
  }
};
var ListTypeahead = class {
  inputs;
  timeout;
  focusManager;
  isTyping = computed2(() => this._query().length > 0);
  _query = signal2("");
  _startIndex = signal2(void 0);
  constructor(inputs) {
    this.inputs = inputs;
    this.focusManager = inputs.focusManager;
  }
  search(char) {
    if (char.length !== 1) {
      return false;
    }
    if (!this.isTyping() && char === " ") {
      return false;
    }
    if (this._startIndex() === void 0) {
      this._startIndex.set(this.focusManager.activeIndex());
    }
    clearTimeout(this.timeout);
    this._query.update((q) => q + char.toLowerCase());
    const item = this._getItem();
    if (item) {
      this.focusManager.focus(item);
    }
    this.timeout = setTimeout(() => {
      this._query.set("");
      this._startIndex.set(void 0);
    }, this.inputs.typeaheadDelay());
    return true;
  }
  _getItem() {
    const items = this.focusManager.inputs.items();
    const itemCount = items.length;
    const startIndex = this._startIndex();
    for (let i = 0; i < itemCount; i++) {
      const index = (startIndex + 1 + i) % itemCount;
      const item = items[index];
      if (this.focusManager.isFocusable(item) && item.searchTerm().toLowerCase().startsWith(this._query())) {
        return item;
      }
    }
    return void 0;
  }
};

// node_modules/@angular/aria/fesm2022/_combobox-tree-chunk.mjs
var TreeListFocus = class extends ListFocus {
  isFocusable(item) {
    return super.isFocusable(item) && item.visible();
  }
};
var Tree = class {
  inputs;
  navigationBehavior;
  selectionBehavior;
  typeaheadBehavior;
  focusBehavior;
  expansionBehavior;
  disabled = computed2(() => this.focusBehavior.isListDisabled());
  activeDescendant = computed2(() => this.focusBehavior.getActiveDescendant());
  tabIndex = computed2(() => this.focusBehavior.getListTabIndex());
  activeIndex = computed2(() => this.focusBehavior.activeIndex());
  _anchorIndex = signal2(0);
  _wrap = signal2(true);
  constructor(inputs) {
    this.inputs = inputs;
    this.focusBehavior = new TreeListFocus(inputs);
    this.selectionBehavior = new ListSelection(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior
    }));
    this.typeaheadBehavior = new ListTypeahead(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior
    }));
    this.expansionBehavior = new ListExpansion(inputs);
    this.navigationBehavior = new ListNavigation(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior,
      wrap: computed2(() => this._wrap() && this.inputs.wrap())
    }));
  }
  getItemTabindex(item) {
    return this.focusBehavior.getItemTabIndex(item);
  }
  first(opts) {
    this._navigate(opts, () => this.navigationBehavior.first(opts));
  }
  last(opts) {
    this._navigate(opts, () => this.navigationBehavior.last(opts));
  }
  next(opts) {
    this._navigate(opts, () => this.navigationBehavior.next(opts));
  }
  prev(opts) {
    this._navigate(opts, () => this.navigationBehavior.prev(opts));
  }
  firstChild(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.children?.() ?? [];
      return this.navigationBehavior.first(__spreadValues({
        items
      }, opts));
    });
  }
  lastChild(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.children?.() ?? [];
      return this.navigationBehavior.last(__spreadValues({
        items
      }, opts));
    });
  }
  nextSibling(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.parent?.()?.children?.() ?? [];
      return this.navigationBehavior.next(__spreadValues({
        items
      }, opts));
    });
  }
  prevSibling(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.parent?.()?.children?.() ?? [];
      return this.navigationBehavior.prev(__spreadValues({
        items
      }, opts));
    });
  }
  parent(opts) {
    this._navigate(opts, () => this.navigationBehavior.goto(this.inputs.activeItem()?.parent?.(), opts));
  }
  goto(item, opts) {
    this._navigate(opts, () => this.navigationBehavior.goto(item, opts));
  }
  unfocus() {
    this.inputs.activeItem.set(void 0);
  }
  anchor(index) {
    this._anchorIndex.set(index);
  }
  search(char, opts) {
    this._navigate(opts, () => this.typeaheadBehavior.search(char));
  }
  isTyping() {
    return this.typeaheadBehavior.isTyping();
  }
  select(item) {
    this.selectionBehavior.select(item);
  }
  selectOne() {
    this.selectionBehavior.selectOne();
  }
  deselect(item) {
    this.selectionBehavior.deselect(item);
  }
  deselectAll() {
    this.selectionBehavior.deselectAll();
  }
  toggle(item) {
    this.selectionBehavior.toggle(item);
  }
  toggleOne() {
    this.selectionBehavior.toggleOne();
  }
  toggleAll() {
    this.selectionBehavior.toggleAll();
  }
  toggleExpansion(item) {
    item ??= this.inputs.activeItem();
    if (!item || !this.isFocusable(item)) return;
    if (this.isExpandable(item)) {
      this.expansionBehavior.toggle(item);
    }
  }
  expand(item) {
    if (this.isExpandable(item)) {
      this.expansionBehavior.open(item);
    }
  }
  collapse(item) {
    this.expansionBehavior.close(item);
  }
  expandSiblings(item) {
    item ??= this.inputs.activeItem();
    if (!item) return;
    const parent = item.parent?.();
    const siblings = parent ? parent.children?.() : this.inputs.items().filter((i) => !i.parent?.());
    siblings?.forEach((s) => this.expand(s));
  }
  expandAll() {
    this.expansionBehavior.openAll();
  }
  collapseAll() {
    this.expansionBehavior.closeAll();
  }
  isFocusable(item) {
    return this.focusBehavior.isFocusable(item);
  }
  isExpandable(item) {
    return this.expansionBehavior.isExpandable(item);
  }
  updateSelection(opts = {
    anchor: true
  }) {
    if (opts.toggle) {
      this.selectionBehavior.toggle();
    }
    if (opts.select) {
      this.selectionBehavior.select();
    }
    if (opts.selectOne) {
      this.selectionBehavior.selectOne();
    }
    if (opts.selectRange) {
      this.selectionBehavior.selectRange();
    }
    if (!opts.anchor) {
      this.anchor(this.selectionBehavior.rangeStartIndex());
    }
  }
  _navigate(opts = {}, operation) {
    if (opts?.selectRange) {
      this._wrap.set(false);
      this.selectionBehavior.rangeStartIndex.set(this._anchorIndex());
    }
    const moved = operation();
    if (moved) {
      this.updateSelection(opts);
    }
    this._wrap.set(true);
  }
};
var TreeItemPattern = class _TreeItemPattern {
  inputs;
  id = () => this.inputs.id();
  value = () => this.inputs.value();
  element = () => this.inputs.element();
  disabled = () => this.inputs.disabled();
  searchTerm = () => this.inputs.searchTerm();
  tree = () => this.inputs.tree();
  parent = computed2(() => {
    const parent = this.inputs.parent();
    return parent instanceof _TreeItemPattern ? parent : void 0;
  });
  children = () => this.inputs.children() ?? [];
  index = computed2(() => this.tree().inputs.items().indexOf(this));
  expandable = () => this.inputs.hasChildren();
  selectable = () => this.inputs.selectable();
  expanded;
  level = computed2(() => this.inputs.parent().level() + 1);
  visible = computed2(() => this.inputs.parent().expanded() && this.inputs.parent().visible());
  setsize = computed2(() => this.inputs.parent().children().length);
  posinset = computed2(() => this.inputs.parent().children().indexOf(this) + 1);
  active = computed2(() => this.tree().activeItem() === this);
  tabIndex = computed2(() => this.tree().treeBehavior.getItemTabindex(this));
  selected = computed2(() => {
    if (this.tree().nav()) {
      return void 0;
    }
    if (!this.selectable()) {
      return void 0;
    }
    return this.tree().values().includes(this.value());
  });
  current = computed2(() => {
    if (!this.tree().nav()) {
      return void 0;
    }
    if (!this.selectable()) {
      return void 0;
    }
    return this.tree().values().includes(this.value()) ? this.tree().currentType() : void 0;
  });
  constructor(inputs) {
    this.inputs = inputs;
    this.expanded = inputs.expanded;
  }
};
var TreePattern = class {
  inputs;
  treeBehavior;
  level = () => 0;
  expanded = () => true;
  visible = () => true;
  tabIndex = computed2(() => this.treeBehavior.tabIndex());
  activeDescendant = computed2(() => this.treeBehavior.activeDescendant());
  children = computed2(() => this.inputs.items().filter((item) => item.level() === this.level() + 1));
  followFocus = computed2(() => this.inputs.selectionMode() === "follow");
  isRtl = computed2(() => this.inputs.textDirection() === "rtl");
  prevKey = computed2(() => {
    if (this.inputs.orientation() === "vertical") {
      return "ArrowUp";
    }
    return this.isRtl() ? "ArrowRight" : "ArrowLeft";
  });
  nextKey = computed2(() => {
    if (this.inputs.orientation() === "vertical") {
      return "ArrowDown";
    }
    return this.isRtl() ? "ArrowLeft" : "ArrowRight";
  });
  collapseKey = computed2(() => {
    if (this.inputs.orientation() === "horizontal") {
      return "ArrowUp";
    }
    return this.isRtl() ? "ArrowRight" : "ArrowLeft";
  });
  expandKey = computed2(() => {
    if (this.inputs.orientation() === "horizontal") {
      return "ArrowDown";
    }
    return this.isRtl() ? "ArrowLeft" : "ArrowRight";
  });
  dynamicSpaceKey = computed2(() => this.treeBehavior.isTyping() ? "" : " ");
  typeaheadRegexp = /^.$/;
  keydown = computed2(() => {
    const manager = new KeyboardEventManager();
    const tree = this.treeBehavior;
    manager.on(this.prevKey, () => tree.prev({
      selectOne: this.followFocus()
    }), {
      ignoreRepeat: false
    }).on(this.nextKey, () => tree.next({
      selectOne: this.followFocus()
    }), {
      ignoreRepeat: false
    }).on("Home", () => tree.first({
      selectOne: this.followFocus()
    })).on("End", () => tree.last({
      selectOne: this.followFocus()
    })).on(this.typeaheadRegexp, (e) => tree.search(e.key, {
      selectOne: this.followFocus()
    })).on(Modifier.Shift, "*", () => tree.expandSiblings()).on(this.expandKey, () => this._expandOrFirstChild({
      selectOne: this.followFocus()
    })).on(this.collapseKey, () => this._collapseOrParent({
      selectOne: this.followFocus()
    }));
    if (this.inputs.multi()) {
      manager.on(Modifier.Any, "Shift", () => tree.anchor(this.treeBehavior.activeIndex())).on(Modifier.Shift, this.prevKey, () => tree.prev({
        selectRange: true
      }), {
        ignoreRepeat: false
      }).on(Modifier.Shift, this.nextKey, () => tree.next({
        selectRange: true
      }), {
        ignoreRepeat: false
      }).on([Modifier.Ctrl | Modifier.Shift, Modifier.Meta | Modifier.Shift], "Home", () => tree.first({
        selectRange: true,
        anchor: false
      })).on([Modifier.Ctrl | Modifier.Shift, Modifier.Meta | Modifier.Shift], "End", () => tree.last({
        selectRange: true,
        anchor: false
      })).on(Modifier.Shift, "Enter", () => tree.updateSelection({
        selectRange: true,
        anchor: false
      })).on(Modifier.Shift, this.dynamicSpaceKey, () => tree.updateSelection({
        selectRange: true,
        anchor: false
      }));
    }
    if (!this.followFocus() && this.inputs.multi()) {
      manager.on(this.dynamicSpaceKey, () => tree.toggle()).on("Enter", () => tree.toggle(), {
        preventDefault: !this.nav()
      }).on([Modifier.Ctrl, Modifier.Meta], "A", () => tree.toggleAll());
    }
    if (!this.followFocus() && !this.inputs.multi()) {
      manager.on(this.dynamicSpaceKey, () => tree.selectOne());
      manager.on("Enter", () => tree.selectOne(), {
        preventDefault: !this.nav()
      });
    }
    if (this.inputs.multi() && this.followFocus()) {
      manager.on([Modifier.Ctrl, Modifier.Meta], this.prevKey, () => tree.prev(), {
        ignoreRepeat: false
      }).on([Modifier.Ctrl, Modifier.Meta], this.nextKey, () => tree.next(), {
        ignoreRepeat: false
      }).on([Modifier.Ctrl, Modifier.Meta], this.expandKey, () => this._expandOrFirstChild()).on([Modifier.Ctrl, Modifier.Meta], this.collapseKey, () => this._collapseOrParent()).on([Modifier.Ctrl, Modifier.Meta], " ", () => tree.toggle()).on([Modifier.Ctrl, Modifier.Meta], "Enter", () => tree.toggle()).on([Modifier.Ctrl, Modifier.Meta], "Home", () => tree.first()).on([Modifier.Ctrl, Modifier.Meta], "End", () => tree.last()).on([Modifier.Ctrl, Modifier.Meta], "A", () => {
        tree.toggleAll();
        tree.select();
      });
    }
    return manager;
  });
  pointerdown = computed2(() => {
    const manager = new PointerEventManager();
    if (this.multi()) {
      manager.on(Modifier.Shift, (e) => this.goto(e, {
        selectRange: true
      }));
    }
    if (!this.multi()) {
      return manager.on((e) => this.goto(e, {
        selectOne: true
      }));
    }
    if (this.multi() && this.followFocus()) {
      return manager.on((e) => this.goto(e, {
        selectOne: true
      })).on(Modifier.Ctrl, (e) => this.goto(e, {
        toggle: true
      }));
    }
    if (this.multi() && !this.followFocus()) {
      return manager.on((e) => this.goto(e, {
        toggle: true
      }));
    }
    return manager;
  });
  id = () => this.inputs.id();
  element = () => this.inputs.element();
  nav = () => this.inputs.nav();
  currentType = () => this.inputs.currentType();
  items = () => this.inputs.items();
  focusMode = () => this.inputs.focusMode();
  disabled = () => this.inputs.disabled();
  activeItem;
  softDisabled = () => this.inputs.softDisabled();
  wrap = () => this.inputs.wrap();
  orientation = () => this.inputs.orientation();
  textDirection = () => this.textDirection();
  multi = computed2(() => this.nav() ? false : this.inputs.multi());
  selectionMode = () => this.inputs.selectionMode();
  typeaheadDelay = () => this.inputs.typeaheadDelay();
  values;
  constructor(inputs) {
    this.inputs = inputs;
    this.activeItem = inputs.activeItem;
    this.values = inputs.values;
    this.treeBehavior = new Tree(__spreadProps(__spreadValues({}, inputs), {
      multi: this.multi,
      multiExpandable: () => true
    }));
  }
  validate() {
    const violations = [];
    if (!this.inputs.multi() && this.inputs.values().length > 1) {
      violations.push(`A single-select tree should not have multiple selected options. Selected options: ${this.inputs.values().join(", ")}`);
    }
    return violations;
  }
  setDefaultState() {
    let firstItem;
    for (const item of this.inputs.items()) {
      if (!item.visible()) continue;
      if (!this.treeBehavior.isFocusable(item)) continue;
      if (firstItem === void 0) {
        firstItem = item;
      }
      if (item.selected()) {
        this.activeItem.set(item);
        return;
      }
    }
    if (firstItem !== void 0) {
      this.activeItem.set(firstItem);
    }
  }
  onKeydown(event) {
    if (!this.disabled()) {
      this.keydown().handle(event);
    }
  }
  onPointerdown(event) {
    if (!this.disabled()) {
      this.pointerdown().handle(event);
    }
  }
  goto(e, opts) {
    const item = this._getItem(e);
    if (!item) return;
    this.treeBehavior.goto(item, opts);
    this.treeBehavior.toggleExpansion(item);
  }
  _expandOrFirstChild(opts) {
    const item = this.treeBehavior.inputs.activeItem();
    if (item && this.treeBehavior.isExpandable(item) && !item.expanded()) {
      this.treeBehavior.expand(item);
    } else {
      this.treeBehavior.firstChild(opts);
    }
  }
  _collapseOrParent(opts) {
    const item = this.treeBehavior.inputs.activeItem();
    if (item && this.treeBehavior.isExpandable(item) && item.expanded()) {
      this.treeBehavior.collapse(item);
    } else {
      this.treeBehavior.parent(opts);
    }
  }
  _getItem(event) {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const element = event.target.closest('[role="treeitem"]');
    return this.inputs.items().find((i) => i.element() === element);
  }
};
var ComboboxTreePattern = class extends TreePattern {
  inputs;
  toggleExpansion = (item) => this.treeBehavior.toggleExpansion(item);
  isItemCollapsible = () => this.inputs.activeItem()?.parent() instanceof TreeItemPattern;
  role = () => "tree";
  activeId = computed2(() => this.treeBehavior.activeDescendant());
  getActiveItem = () => this.inputs.activeItem();
  items = computed2(() => this.inputs.items());
  tabIndex = () => -1;
  constructor(inputs) {
    if (inputs.combobox()) {
      inputs.multi = () => false;
      inputs.focusMode = () => "activedescendant";
      inputs.element = inputs.combobox().inputs.inputEl;
    }
    super(inputs);
    this.inputs = inputs;
  }
  onKeydown(_) {
  }
  onPointerdown(_) {
  }
  setDefaultState() {
  }
  focus = (item) => this.treeBehavior.goto(item);
  next = () => this.treeBehavior.next();
  prev = () => this.treeBehavior.prev();
  last = () => this.treeBehavior.last();
  first = () => this.treeBehavior.first();
  unfocus = () => this.treeBehavior.unfocus();
  select = (item) => this.treeBehavior.select(item);
  toggle = (item) => this.treeBehavior.toggle(item);
  clearSelection = () => this.treeBehavior.deselectAll();
  getItem = (e) => this._getItem(e);
  getSelectedItems = () => this.inputs.items().filter((item) => item.selected());
  setValue = (value) => this.inputs.values.set(value ? [value] : []);
  expandItem = () => this._expandOrFirstChild();
  collapseItem = () => this._collapseOrParent();
  isItemExpandable(item = this.inputs.activeItem()) {
    return item ? item.expandable() : false;
  }
  expandAll = () => this.treeBehavior.expandAll();
  collapseAll = () => this.treeBehavior.collapseAll();
  isItemSelectable = (item = this.inputs.activeItem()) => {
    return item ? item.selectable() : false;
  };
};

// node_modules/@angular/aria/fesm2022/tree.mjs
function sortDirectives(a, b) {
  return (a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_PRECEDING) > 0 ? 1 : -1;
}
var Tree2 = class _Tree {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _popup = inject(ComboboxPopup, {
    optional: true
  });
  _unorderedItems = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
    debugName: "_unorderedItems"
  }] : []);
  id = input(inject(_IdGenerator).getId("ng-tree-", true), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  orientation = input("vertical", ...ngDevMode ? [{
    debugName: "orientation"
  }] : []);
  multi = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "multi"
  } : {}), {
    transform: booleanAttribute
  }));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  selectionMode = input("explicit", ...ngDevMode ? [{
    debugName: "selectionMode"
  }] : []);
  focusMode = input("roving", ...ngDevMode ? [{
    debugName: "focusMode"
  }] : []);
  wrap = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "wrap"
  } : {}), {
    transform: booleanAttribute
  }));
  softDisabled = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "softDisabled"
  } : {}), {
    transform: booleanAttribute
  }));
  typeaheadDelay = input(500, ...ngDevMode ? [{
    debugName: "typeaheadDelay"
  }] : []);
  values = model([], ...ngDevMode ? [{
    debugName: "values"
  }] : []);
  textDirection = inject(Directionality).valueSignal;
  nav = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nav"
  } : {}), {
    transform: booleanAttribute
  }));
  currentType = input("page", ...ngDevMode ? [{
    debugName: "currentType"
  }] : []);
  _pattern;
  _hasFocused = signal(false, ...ngDevMode ? [{
    debugName: "_hasFocused"
  }] : []);
  constructor() {
    const inputs = __spreadProps(__spreadValues({}, this), {
      id: this.id,
      items: computed(() => [...this._unorderedItems()].sort(sortDirectives).map((item) => item._pattern)),
      activeItem: signal(void 0),
      combobox: () => this._popup?.combobox?._pattern,
      element: () => this.element
    });
    this._pattern = this._popup?.combobox ? new ComboboxTreePattern(inputs) : new TreePattern(inputs);
    if (this._popup?.combobox) {
      this._popup?._controls?.set(this._pattern);
    }
    afterRenderEffect(() => {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const violations = this._pattern.validate();
        for (const violation of violations) {
          console.error(violation);
        }
      }
    });
    afterRenderEffect(() => {
      if (!this._hasFocused()) {
        this._pattern.setDefaultState();
      }
    });
    afterRenderEffect(() => {
      const items = inputs.items();
      const activeItem = untracked(() => inputs.activeItem());
      if (!items.some((i) => i === activeItem) && activeItem) {
        this._pattern.treeBehavior.unfocus();
      }
    });
    afterRenderEffect(() => {
      if (!(this._pattern instanceof ComboboxTreePattern)) return;
      const items = inputs.items();
      const values = untracked(() => this.values());
      if (items && values.some((v) => !items.some((i) => i.value() === v))) {
        this.values.set(values.filter((v) => items.some((i) => i.value() === v)));
      }
    });
  }
  _onFocus() {
    this._hasFocused.set(true);
  }
  _register(child) {
    this._unorderedItems().add(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  _unregister(child) {
    this._unorderedItems().delete(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  scrollActiveItemIntoView(options = {
    block: "nearest"
  }) {
    this._pattern.inputs.activeItem()?.element()?.scrollIntoView(options);
  }
  static ɵfac = function Tree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tree)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tree,
    selectors: [["", "ngTree", ""]],
    hostAttrs: ["role", "tree"],
    hostVars: 6,
    hostBindings: function Tree_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function Tree_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("pointerdown", function Tree_pointerdown_HostBindingHandler($event) {
          return ctx._pattern.onPointerdown($event);
        })("focusin", function Tree_focusin_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        ɵɵdomProperty("tabIndex", ctx._pattern.tabIndex());
        ɵɵattribute("id", ctx.id())("aria-orientation", ctx._pattern.orientation())("aria-multiselectable", ctx._pattern.multi())("aria-disabled", ctx._pattern.disabled())("aria-activedescendant", ctx._pattern.activeDescendant());
      }
    },
    inputs: {
      id: [1, "id"],
      orientation: [1, "orientation"],
      multi: [1, "multi"],
      disabled: [1, "disabled"],
      selectionMode: [1, "selectionMode"],
      focusMode: [1, "focusMode"],
      wrap: [1, "wrap"],
      softDisabled: [1, "softDisabled"],
      typeaheadDelay: [1, "typeaheadDelay"],
      values: [1, "values"],
      nav: [1, "nav"],
      currentType: [1, "currentType"]
    },
    outputs: {
      values: "valuesChange"
    },
    exportAs: ["ngTree"],
    features: [ɵɵHostDirectivesFeature([ComboboxPopup])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tree2, [{
    type: Directive,
    args: [{
      selector: "[ngTree]",
      exportAs: "ngTree",
      host: {
        "role": "tree",
        "[attr.id]": "id()",
        "[attr.aria-orientation]": "_pattern.orientation()",
        "[attr.aria-multiselectable]": "_pattern.multi()",
        "[attr.aria-disabled]": "_pattern.disabled()",
        "[attr.aria-activedescendant]": "_pattern.activeDescendant()",
        "[tabindex]": "_pattern.tabIndex()",
        "(keydown)": "_pattern.onKeydown($event)",
        "(pointerdown)": "_pattern.onPointerdown($event)",
        "(focusin)": "_onFocus()"
      },
      hostDirectives: [ComboboxPopup]
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    orientation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "orientation",
        required: false
      }]
    }],
    multi: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "multi",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    selectionMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectionMode",
        required: false
      }]
    }],
    focusMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "focusMode",
        required: false
      }]
    }],
    wrap: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "wrap",
        required: false
      }]
    }],
    softDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "softDisabled",
        required: false
      }]
    }],
    typeaheadDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "typeaheadDelay",
        required: false
      }]
    }],
    values: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "values",
        required: false
      }]
    }, {
      type: Output,
      args: ["valuesChange"]
    }],
    nav: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nav",
        required: false
      }]
    }],
    currentType: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "currentType",
        required: false
      }]
    }]
  });
})();
var TreeItem = class _TreeItem extends DeferredContentAware {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _group = signal(void 0, ...ngDevMode ? [{
    debugName: "_group"
  }] : []);
  id = input(inject(_IdGenerator).getId("ng-tree-item-", true), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  value = input.required(...ngDevMode ? [{
    debugName: "value"
  }] : []);
  parent = input.required(...ngDevMode ? [{
    debugName: "parent"
  }] : []);
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  selectable = input(true, ...ngDevMode ? [{
    debugName: "selectable"
  }] : []);
  expanded = model(false, ...ngDevMode ? [{
    debugName: "expanded"
  }] : []);
  label = input(...ngDevMode ? [void 0, {
    debugName: "label"
  }] : []);
  searchTerm = computed(() => this.label() ?? this.element.textContent, ...ngDevMode ? [{
    debugName: "searchTerm"
  }] : []);
  tree = computed(() => {
    if (this.parent() instanceof Tree2) {
      return this.parent();
    }
    return this.parent().ownedBy().tree();
  }, ...ngDevMode ? [{
    debugName: "tree"
  }] : []);
  active = computed(() => this._pattern.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  level = computed(() => this._pattern.level(), ...ngDevMode ? [{
    debugName: "level"
  }] : []);
  selected = computed(() => this._pattern.selected(), ...ngDevMode ? [{
    debugName: "selected"
  }] : []);
  visible = computed(() => this._pattern.visible(), ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  _expanded = computed(() => this._pattern.expandable() ? this._pattern.expanded() : void 0, ...ngDevMode ? [{
    debugName: "_expanded"
  }] : []);
  _pattern;
  constructor() {
    super();
    afterNextRender(() => {
      if (this.tree()._pattern instanceof ComboboxTreePattern) {
        this.preserveContent.set(true);
      }
    });
    afterRenderEffect(() => {
      this.tree()._pattern instanceof ComboboxTreePattern ? this.contentVisible.set(true) : this.contentVisible.set(this._pattern.expanded());
    });
  }
  ngOnInit() {
    this.parent()._register(this);
    this.tree()._register(this);
    const treePattern = computed(() => this.tree()._pattern, ...ngDevMode ? [{
      debugName: "treePattern"
    }] : []);
    const parentPattern = computed(() => {
      if (this.parent() instanceof Tree2) {
        return treePattern();
      }
      return this.parent().ownedBy()._pattern;
    }, ...ngDevMode ? [{
      debugName: "parentPattern"
    }] : []);
    this._pattern = new TreeItemPattern(__spreadProps(__spreadValues({}, this), {
      tree: treePattern,
      parent: parentPattern,
      children: computed(() => this._group()?._childPatterns()),
      hasChildren: computed(() => !!this._group()),
      element: () => this.element,
      searchTerm: () => this.searchTerm() ?? ""
    }));
  }
  ngOnDestroy() {
    this.parent()._unregister(this);
    this.tree()._unregister(this);
  }
  _register(group) {
    this._group.set(group);
  }
  _unregister() {
    this._group.set(void 0);
  }
  static ɵfac = function TreeItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeItem)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TreeItem,
    selectors: [["", "ngTreeItem", ""]],
    hostAttrs: ["role", "treeitem"],
    hostVars: 10,
    hostBindings: function TreeItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx._pattern.id());
        ɵɵattribute("data-active", ctx.active())("aria-expanded", ctx._expanded())("aria-selected", ctx.selected())("aria-current", ctx._pattern.current())("aria-disabled", ctx._pattern.disabled())("aria-level", ctx.level())("aria-setsize", ctx._pattern.setsize())("aria-posinset", ctx._pattern.posinset())("tabindex", ctx._pattern.tabIndex());
      }
    },
    inputs: {
      id: [1, "id"],
      value: [1, "value"],
      parent: [1, "parent"],
      disabled: [1, "disabled"],
      selectable: [1, "selectable"],
      expanded: [1, "expanded"],
      label: [1, "label"]
    },
    outputs: {
      expanded: "expandedChange"
    },
    exportAs: ["ngTreeItem"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeItem, [{
    type: Directive,
    args: [{
      selector: "[ngTreeItem]",
      exportAs: "ngTreeItem",
      host: {
        "[attr.data-active]": "active()",
        "role": "treeitem",
        "[id]": "_pattern.id()",
        "[attr.aria-expanded]": "_expanded()",
        "[attr.aria-selected]": "selected()",
        "[attr.aria-current]": "_pattern.current()",
        "[attr.aria-disabled]": "_pattern.disabled()",
        "[attr.aria-level]": "level()",
        "[attr.aria-setsize]": "_pattern.setsize()",
        "[attr.aria-posinset]": "_pattern.posinset()",
        "[attr.tabindex]": "_pattern.tabIndex()"
      }
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: true
      }]
    }],
    parent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "parent",
        required: true
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    selectable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectable",
        required: false
      }]
    }],
    expanded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "expanded",
        required: false
      }]
    }, {
      type: Output,
      args: ["expandedChange"]
    }],
    label: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "label",
        required: false
      }]
    }]
  });
})();
var TreeItemGroup = class _TreeItemGroup {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _deferredContent = inject(DeferredContent);
  _unorderedItems = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
    debugName: "_unorderedItems"
  }] : []);
  _childPatterns = computed(() => [...this._unorderedItems()].sort(sortDirectives).map((c) => c._pattern), ...ngDevMode ? [{
    debugName: "_childPatterns"
  }] : []);
  ownedBy = input.required(...ngDevMode ? [{
    debugName: "ownedBy"
  }] : []);
  ngOnInit() {
    this._deferredContent.deferredContentAware.set(this.ownedBy());
    this.ownedBy()._register(this);
  }
  ngOnDestroy() {
    this.ownedBy()._unregister();
  }
  _register(child) {
    this._unorderedItems().add(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  _unregister(child) {
    this._unorderedItems().delete(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  static ɵfac = function TreeItemGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeItemGroup)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TreeItemGroup,
    selectors: [["ng-template", "ngTreeItemGroup", ""]],
    inputs: {
      ownedBy: [1, "ownedBy"]
    },
    exportAs: ["ngTreeItemGroup"],
    features: [ɵɵHostDirectivesFeature([DeferredContent])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeItemGroup, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngTreeItemGroup]",
      exportAs: "ngTreeItemGroup",
      hostDirectives: [DeferredContent]
    }]
  }], null, {
    ownedBy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ownedBy",
        required: true
      }]
    }]
  });
})();
export {
  Tree2 as Tree,
  TreeItem,
  TreeItemGroup,
  Combobox as ɵɵCombobox,
  ComboboxDialog as ɵɵComboboxDialog,
  ComboboxInput as ɵɵComboboxInput,
  ComboboxPopup as ɵɵComboboxPopup,
  ComboboxPopupContainer as ɵɵComboboxPopupContainer,
  DeferredContent as ɵɵDeferredContent
};
//# sourceMappingURL=@angular_aria_tree.js.map
