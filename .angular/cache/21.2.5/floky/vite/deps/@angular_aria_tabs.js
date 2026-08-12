import {
  DeferredContent,
  DeferredContentAware,
  KeyboardEventManager,
  ListExpansion,
  ListFocus,
  ListNavigation,
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
  Directive,
  ElementRef,
  Input,
  Output,
  afterRenderEffect,
  booleanAttribute,
  input,
  model,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-FVDQIGLM.js";
import {
  InjectionToken,
  computed,
  inject,
  signal
} from "./chunk-SAVM66CY.js";
import "./chunk-RSS3ODKE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/aria/fesm2022/_tabs-chunk.mjs
var LabelControl = class {
  inputs;
  label = computed2(() => this.inputs.label?.());
  labelledBy = computed2(() => {
    const label = this.label();
    const labelledBy = this.inputs.labelledBy?.();
    const defaultLabelledBy = this.inputs.defaultLabelledBy();
    if (labelledBy && labelledBy.length > 0) {
      return labelledBy;
    }
    if (label) {
      return [];
    }
    return defaultLabelledBy;
  });
  constructor(inputs) {
    this.inputs = inputs;
  }
};
var TabPattern = class {
  inputs;
  id = () => this.inputs.id();
  index = computed2(() => this.inputs.tablist().inputs.items().indexOf(this));
  value = () => this.inputs.value();
  disabled = () => this.inputs.disabled();
  element = () => this.inputs.element();
  expandable = () => true;
  expanded;
  active = computed2(() => this.inputs.tablist().inputs.activeItem() === this);
  selected = computed2(() => this.inputs.tablist().selectedTab() === this);
  tabIndex = computed2(() => this.inputs.tablist().focusBehavior.getItemTabIndex(this));
  controls = computed2(() => this.inputs.tabpanel()?.id());
  constructor(inputs) {
    this.inputs = inputs;
    this.expanded = inputs.expanded;
  }
  open() {
    return this.inputs.tablist().open(this);
  }
};
var TabPanelPattern = class {
  inputs;
  id = () => this.inputs.id();
  value = () => this.inputs.value();
  labelManager;
  hidden = computed2(() => this.inputs.tab()?.expanded() === false);
  tabIndex = computed2(() => this.hidden() ? -1 : 0);
  labelledBy = computed2(() => this.labelManager.labelledBy().length > 0 ? this.labelManager.labelledBy().join(" ") : void 0);
  constructor(inputs) {
    this.inputs = inputs;
    this.labelManager = new LabelControl(__spreadProps(__spreadValues({}, inputs), {
      defaultLabelledBy: computed2(() => this.inputs.tab() ? [this.inputs.tab().id()] : [])
    }));
  }
};
var TabListPattern = class {
  inputs;
  focusBehavior;
  navigationBehavior;
  expansionBehavior;
  activeTab = () => this.inputs.activeItem();
  selectedTab = signal2(void 0);
  orientation = () => this.inputs.orientation();
  disabled = () => this.inputs.disabled();
  tabIndex = computed2(() => this.focusBehavior.getListTabIndex());
  activeDescendant = computed2(() => this.focusBehavior.getActiveDescendant());
  followFocus = computed2(() => this.inputs.selectionMode() === "follow");
  prevKey = computed2(() => {
    if (this.inputs.orientation() === "vertical") {
      return "ArrowUp";
    }
    return this.inputs.textDirection() === "rtl" ? "ArrowRight" : "ArrowLeft";
  });
  nextKey = computed2(() => {
    if (this.inputs.orientation() === "vertical") {
      return "ArrowDown";
    }
    return this.inputs.textDirection() === "rtl" ? "ArrowLeft" : "ArrowRight";
  });
  keydown = computed2(() => {
    return new KeyboardEventManager().on(this.prevKey, () => this._navigate(() => this.navigationBehavior.prev(), this.followFocus()), {
      ignoreRepeat: false
    }).on(this.nextKey, () => this._navigate(() => this.navigationBehavior.next(), this.followFocus()), {
      ignoreRepeat: false
    }).on("Home", () => this._navigate(() => this.navigationBehavior.first(), this.followFocus())).on("End", () => this._navigate(() => this.navigationBehavior.last(), this.followFocus())).on(" ", () => this.open()).on("Enter", () => this.open());
  });
  pointerdown = computed2(() => {
    return new PointerEventManager().on((e) => this._navigate(() => this.navigationBehavior.goto(this._getItem(e)), true));
  });
  constructor(inputs) {
    this.inputs = inputs;
    this.focusBehavior = new ListFocus(inputs);
    this.navigationBehavior = new ListNavigation(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior
    }));
    this.expansionBehavior = new ListExpansion(__spreadProps(__spreadValues({}, inputs), {
      multiExpandable: () => false
    }));
  }
  setDefaultState() {
    let firstItem;
    for (const item of this.inputs.items()) {
      if (!this.focusBehavior.isFocusable(item)) continue;
      if (firstItem === void 0) {
        firstItem = item;
      }
      if (item.selected()) {
        this.inputs.activeItem.set(item);
        return;
      }
    }
    if (firstItem !== void 0) {
      this.inputs.activeItem.set(firstItem);
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
  open(tab) {
    tab ??= this.activeTab();
    if (typeof tab === "string") {
      tab = this.inputs.items().find((t) => t.value() === tab);
    }
    if (tab === void 0) return false;
    const success = this.expansionBehavior.open(tab);
    if (success) {
      this.selectedTab.set(tab);
    }
    return success;
  }
  _navigate(op, shouldExpand = false) {
    const success = op();
    if (success && shouldExpand) {
      this.open();
    }
  }
  _getItem(e) {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const element = e.target.closest('[role="tab"]');
    return this.inputs.items().find((i) => i.element() === element);
  }
};

// node_modules/@angular/aria/fesm2022/tabs.mjs
var TABS = new InjectionToken("TABS");
function sortDirectives(a, b) {
  return (a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_PRECEDING) > 0 ? 1 : -1;
}
var TabList = class _TabList {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _tabs = inject(TABS);
  _unorderedTabs = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
    debugName: "_unorderedTabs"
  }] : []);
  textDirection = inject(Directionality).valueSignal;
  _tabPatterns = computed(() => [...this._unorderedTabs()].sort(sortDirectives).map((tab) => tab._pattern), ...ngDevMode ? [{
    debugName: "_tabPatterns"
  }] : []);
  orientation = input("horizontal", ...ngDevMode ? [{
    debugName: "orientation"
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
  focusMode = input("roving", ...ngDevMode ? [{
    debugName: "focusMode"
  }] : []);
  selectionMode = input("follow", ...ngDevMode ? [{
    debugName: "selectionMode"
  }] : []);
  selectedTab = model(...ngDevMode ? [void 0, {
    debugName: "selectedTab"
  }] : []);
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  _pattern = new TabListPattern(__spreadProps(__spreadValues({}, this), {
    items: this._tabPatterns,
    activeItem: signal(void 0),
    element: () => this._elementRef.nativeElement
  }));
  _hasFocused = signal(false, ...ngDevMode ? [{
    debugName: "_hasFocused"
  }] : []);
  constructor() {
    afterRenderEffect(() => {
      if (!this._hasFocused()) {
        this._pattern.setDefaultState();
      }
    });
    afterRenderEffect(() => {
      const tab = this._pattern.selectedTab();
      if (tab) {
        this.selectedTab.set(tab.value());
      }
    });
    afterRenderEffect(() => {
      const value = this.selectedTab();
      if (value) {
        this._tabPatterns().forEach((tab2) => tab2.expanded.set(false));
        const tab = this._tabPatterns().find((t) => t.value() === value);
        this._pattern.selectedTab.set(tab);
        tab?.expanded.set(true);
      }
    });
  }
  _onFocus() {
    this._hasFocused.set(true);
  }
  ngOnInit() {
    this._tabs._register(this);
  }
  ngOnDestroy() {
    this._tabs._unregister(this);
  }
  _register(child) {
    this._unorderedTabs().add(child);
    this._unorderedTabs.set(new Set(this._unorderedTabs()));
  }
  _unregister(child) {
    this._unorderedTabs().delete(child);
    this._unorderedTabs.set(new Set(this._unorderedTabs()));
  }
  open(value) {
    return this._pattern.open(value);
  }
  static ɵfac = function TabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabList)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TabList,
    selectors: [["", "ngTabList", ""]],
    hostAttrs: ["role", "tablist"],
    hostVars: 4,
    hostBindings: function TabList_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function TabList_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("pointerdown", function TabList_pointerdown_HostBindingHandler($event) {
          return ctx._pattern.onPointerdown($event);
        })("focusin", function TabList_focusin_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx._pattern.tabIndex())("aria-disabled", ctx._pattern.disabled())("aria-orientation", ctx._pattern.orientation())("aria-activedescendant", ctx._pattern.activeDescendant());
      }
    },
    inputs: {
      orientation: [1, "orientation"],
      wrap: [1, "wrap"],
      softDisabled: [1, "softDisabled"],
      focusMode: [1, "focusMode"],
      selectionMode: [1, "selectionMode"],
      selectedTab: [1, "selectedTab"],
      disabled: [1, "disabled"]
    },
    outputs: {
      selectedTab: "selectedTabChange"
    },
    exportAs: ["ngTabList"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabList, [{
    type: Directive,
    args: [{
      selector: "[ngTabList]",
      exportAs: "ngTabList",
      host: {
        "role": "tablist",
        "[attr.tabindex]": "_pattern.tabIndex()",
        "[attr.aria-disabled]": "_pattern.disabled()",
        "[attr.aria-orientation]": "_pattern.orientation()",
        "[attr.aria-activedescendant]": "_pattern.activeDescendant()",
        "(keydown)": "_pattern.onKeydown($event)",
        "(pointerdown)": "_pattern.onPointerdown($event)",
        "(focusin)": "_onFocus()"
      }
    }]
  }], () => [], {
    orientation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "orientation",
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
    focusMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "focusMode",
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
    selectedTab: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectedTab",
        required: false
      }]
    }, {
      type: Output,
      args: ["selectedTabChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }]
  });
})();
var TabPanel = class _TabPanel {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _deferredContentAware = inject(DeferredContentAware);
  _tabs = inject(TABS);
  id = input(inject(_IdGenerator).getId("ng-tabpanel-", true), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _tabPattern = computed(() => this._tabs._tabPatterns()?.find((tab) => tab.value() === this.value()), ...ngDevMode ? [{
    debugName: "_tabPattern"
  }] : []);
  value = input.required(...ngDevMode ? [{
    debugName: "value"
  }] : []);
  visible = computed(() => !this._pattern.hidden(), ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  _pattern = new TabPanelPattern(__spreadProps(__spreadValues({}, this), {
    tab: this._tabPattern
  }));
  constructor() {
    afterRenderEffect(() => this._deferredContentAware.contentVisible.set(this.visible()));
  }
  ngOnInit() {
    this._tabs._register(this);
  }
  ngOnDestroy() {
    this._tabs._unregister(this);
  }
  static ɵfac = function TabPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabPanel)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TabPanel,
    selectors: [["", "ngTabPanel", ""]],
    hostAttrs: ["role", "tabpanel"],
    hostVars: 4,
    hostBindings: function TabPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("id", ctx._pattern.id())("tabindex", ctx._pattern.tabIndex())("inert", !ctx.visible() ? true : null)("aria-labelledby", ctx._pattern.labelledBy());
      }
    },
    inputs: {
      id: [1, "id"],
      value: [1, "value"]
    },
    exportAs: ["ngTabPanel"],
    features: [ɵɵHostDirectivesFeature([{
      directive: DeferredContentAware,
      inputs: ["preserveContent", "preserveContent"]
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanel, [{
    type: Directive,
    args: [{
      selector: "[ngTabPanel]",
      exportAs: "ngTabPanel",
      host: {
        "role": "tabpanel",
        "[attr.id]": "_pattern.id()",
        "[attr.tabindex]": "_pattern.tabIndex()",
        "[attr.inert]": "!visible() ? true : null",
        "[attr.aria-labelledby]": "_pattern.labelledBy()"
      },
      hostDirectives: [{
        directive: DeferredContentAware,
        inputs: ["preserveContent"]
      }]
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
    }]
  });
})();
var Tabs = class _Tabs {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _tablist = signal(void 0, ...ngDevMode ? [{
    debugName: "_tablist"
  }] : []);
  _unorderedPanels = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
    debugName: "_unorderedPanels"
  }] : []);
  _tabPatterns = computed(() => this._tablist()?._tabPatterns(), ...ngDevMode ? [{
    debugName: "_tabPatterns"
  }] : []);
  _unorderedTabpanelPatterns = computed(() => [...this._unorderedPanels()].map((tabpanel) => tabpanel._pattern), ...ngDevMode ? [{
    debugName: "_unorderedTabpanelPatterns"
  }] : []);
  _register(child) {
    if (child instanceof TabList) {
      this._tablist.set(child);
    }
    if (child instanceof TabPanel) {
      this._unorderedPanels().add(child);
      this._unorderedPanels.set(new Set(this._unorderedPanels()));
    }
  }
  _unregister(child) {
    if (child instanceof TabList) {
      this._tablist.set(void 0);
    }
    if (child instanceof TabPanel) {
      this._unorderedPanels().delete(child);
      this._unorderedPanels.set(new Set(this._unorderedPanels()));
    }
  }
  static ɵfac = function Tabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tabs)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tabs,
    selectors: [["", "ngTabs", ""]],
    exportAs: ["ngTabs"],
    features: [ɵɵProvidersFeature([{
      provide: TABS,
      useExisting: _Tabs
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tabs, [{
    type: Directive,
    args: [{
      selector: "[ngTabs]",
      exportAs: "ngTabs",
      providers: [{
        provide: TABS,
        useExisting: Tabs
      }]
    }]
  }], null, null);
})();
var Tab = class _Tab {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _tabs = inject(TABS);
  _tabList = inject(TabList);
  id = input(inject(_IdGenerator).getId("ng-tab-", true), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _tablistPattern = computed(() => this._tabList._pattern, ...ngDevMode ? [{
    debugName: "_tablistPattern"
  }] : []);
  _tabpanelPattern = computed(() => this._tabs._unorderedTabpanelPatterns().find((tabpanel) => tabpanel.value() === this.value()), ...ngDevMode ? [{
    debugName: "_tabpanelPattern"
  }] : []);
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  value = input.required(...ngDevMode ? [{
    debugName: "value"
  }] : []);
  active = computed(() => this._pattern.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  selected = computed(() => this._pattern.selected(), ...ngDevMode ? [{
    debugName: "selected"
  }] : []);
  _pattern = new TabPattern(__spreadProps(__spreadValues({}, this), {
    tablist: this._tablistPattern,
    tabpanel: this._tabpanelPattern,
    expanded: signal(false),
    element: () => this.element
  }));
  open() {
    this._pattern.open();
  }
  ngOnInit() {
    this._tabList._register(this);
  }
  ngOnDestroy() {
    this._tabList._unregister(this);
  }
  static ɵfac = function Tab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tab)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tab,
    selectors: [["", "ngTab", ""]],
    hostAttrs: ["role", "tab"],
    hostVars: 6,
    hostBindings: function Tab_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-active", ctx.active())("id", ctx._pattern.id())("tabindex", ctx._pattern.tabIndex())("aria-selected", ctx.selected())("aria-disabled", ctx._pattern.disabled())("aria-controls", ctx._pattern.controls());
      }
    },
    inputs: {
      id: [1, "id"],
      disabled: [1, "disabled"],
      value: [1, "value"]
    },
    exportAs: ["ngTab"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab, [{
    type: Directive,
    args: [{
      selector: "[ngTab]",
      exportAs: "ngTab",
      host: {
        "role": "tab",
        "[attr.data-active]": "active()",
        "[attr.id]": "_pattern.id()",
        "[attr.tabindex]": "_pattern.tabIndex()",
        "[attr.aria-selected]": "selected()",
        "[attr.aria-disabled]": "_pattern.disabled()",
        "[attr.aria-controls]": "_pattern.controls()"
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
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
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: true
      }]
    }]
  });
})();
var TabContent = class _TabContent {
  static ɵfac = function TabContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TabContent,
    selectors: [["ng-template", "ngTabContent", ""]],
    exportAs: ["ngTabContent"],
    features: [ɵɵHostDirectivesFeature([DeferredContent])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngTabContent]",
      exportAs: "ngTabContent",
      hostDirectives: [DeferredContent]
    }]
  }], null, null);
})();
export {
  Tab,
  TabContent,
  TabList,
  TabPanel,
  Tabs,
  DeferredContent as ɵɵDeferredContent,
  DeferredContentAware as ɵɵDeferredContentAware
};
//# sourceMappingURL=@angular_aria_tabs.js.map
