import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f631663db3294ace$export$b39126d51d94e6f3,
  ChevronDown,
  _extends,
  cn,
  require_ssr
} from "/build/_shared/chunk-NIYZ4CXV.js";
import {
  require_dist
} from "/build/_shared/chunk-TLFI53YJ.js";
import "/build/_shared/chunk-VCX4JAPZ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-4NV6D6BP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.tsx
init_remix_hmr();
var import_ssr = __toESM(require_ssr(), 1);
var import_node = __toESM(require_node(), 1);
var import_remix = __toESM(require_dist(), 1);

// app/components/ui/accordion.tsx
init_remix_hmr();
var React = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $409067139f391064$var$COLLAPSIBLE_NAME = "Collapsible";
var [$409067139f391064$var$createCollapsibleContext, $409067139f391064$export$952b32dcbe73087a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($409067139f391064$var$COLLAPSIBLE_NAME);
var [$409067139f391064$var$CollapsibleProvider, $409067139f391064$var$useCollapsibleContext] = $409067139f391064$var$createCollapsibleContext($409067139f391064$var$COLLAPSIBLE_NAME);
var $409067139f391064$export$6eb0f7ddcda6131f = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react.createElement)($409067139f391064$var$CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenToggle: (0, import_react.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    )
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(open),
    "data-disabled": disabled ? "" : void 0
  }, collapsibleProps, {
    ref: forwardedRef
  })));
});
var $409067139f391064$var$TRIGGER_NAME = "CollapsibleTrigger";
var $409067139f391064$export$c135dce7b15bbbdc = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, ...triggerProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$TRIGGER_NAME, __scopeCollapsible);
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-controls": context.contentId,
    "aria-expanded": context.open || false,
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    disabled: context.disabled
  }, triggerProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $409067139f391064$var$CONTENT_NAME = "CollapsibleContent";
var $409067139f391064$export$aadde00976f34151 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, props.__scopeCollapsible);
  return /* @__PURE__ */ (0, import_react.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || context.open
    },
    ({ present }) => /* @__PURE__ */ (0, import_react.createElement)($409067139f391064$var$CollapsibleContentImpl, _extends({}, contentProps, {
      ref: forwardedRef,
      present
    }))
  );
});
var $409067139f391064$var$CollapsibleContentImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = (0, import_react.useState)(present);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const heightRef = (0, import_react.useRef)(0);
  const height = heightRef.current;
  const widthRef = (0, import_react.useRef)(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = (0, import_react.useRef)(isOpen);
  const originalStylesRef = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [
    context.open,
    present
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    id: context.contentId,
    hidden: !isOpen
  }, contentProps, {
    ref: composedRefs,
    style: {
      [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
      [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
      ...props.style
    }
  }), isOpen && children);
});
function $409067139f391064$var$getState(open) {
  return open ? "open" : "closed";
}
var $409067139f391064$export$be92b6f5f03c0fe9 = $409067139f391064$export$6eb0f7ddcda6131f;
var $409067139f391064$export$41fb9f06171c75f4 = $409067139f391064$export$c135dce7b15bbbdc;
var $409067139f391064$export$7c6e2c02157bb7d2 = $409067139f391064$export$aadde00976f34151;

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var $1bf158f521e1b1b4$var$ACCORDION_NAME = "Accordion";
var $1bf158f521e1b1b4$var$ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var [$1bf158f521e1b1b4$var$Collection, $1bf158f521e1b1b4$var$useCollection, $1bf158f521e1b1b4$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$createAccordionContext, $1bf158f521e1b1b4$export$9748edc328a73be1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($1bf158f521e1b1b4$var$ACCORDION_NAME, [
  $1bf158f521e1b1b4$var$createCollectionScope,
  $409067139f391064$export$952b32dcbe73087a
]);
var $1bf158f521e1b1b4$var$useCollapsibleScope = $409067139f391064$export$952b32dcbe73087a();
var $1bf158f521e1b1b4$export$a766cd26d0d69044 = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { type, ...accordionProps } = props;
  const singleProps = accordionProps;
  const multipleProps = accordionProps;
  return /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$Collection.Provider, {
    scope: props.__scopeAccordion
  }, type === "multiple" ? /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionImplMultiple, _extends({}, multipleProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionImplSingle, _extends({}, singleProps, {
    ref: forwardedRef
  })));
});
$1bf158f521e1b1b4$export$a766cd26d0d69044.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue;
    if (props.type && ![
      "single",
      "multiple"
    ].includes(props.type))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.");
    if (props.type === "multiple" && typeof value === "string")
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.");
    if (props.type === "single" && Array.isArray(value))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.");
    return null;
  }
};
var [$1bf158f521e1b1b4$var$AccordionValueProvider, $1bf158f521e1b1b4$var$useAccordionValueContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$AccordionCollapsibleProvider, $1bf158f521e1b1b4$var$useAccordionCollapsibleContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, {
  collapsible: false
});
var $1bf158f521e1b1b4$var$AccordionImplSingle = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, collapsible = false, ...accordionSingleProps } = props;
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value ? [
      value
    ] : [],
    onItemOpen: setValue,
    onItemClose: import_react2.default.useCallback(
      () => collapsible && setValue(""),
      [
        collapsible,
        setValue
      ]
    )
  }, /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible
  }, /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionSingleProps, {
    ref: forwardedRef
  }))));
});
var $1bf158f521e1b1b4$var$AccordionImplMultiple = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...accordionMultipleProps } = props;
  const [value1 = [], setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleItemOpen = import_react2.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => [
        ...prevValue,
        itemValue
      ]
    ),
    [
      setValue
    ]
  );
  const handleItemClose = import_react2.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => prevValue.filter(
        (value) => value !== itemValue
      )
    ),
    [
      setValue
    ]
  );
  return /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value1,
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose
  }, /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible: true
  }, /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionMultipleProps, {
    ref: forwardedRef
  }))));
});
var [$1bf158f521e1b1b4$var$AccordionImplProvider, $1bf158f521e1b1b4$var$useAccordionContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var $1bf158f521e1b1b4$var$AccordionImpl = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
  const accordionRef = import_react2.default.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(accordionRef, forwardedRef);
  const getItems = $1bf158f521e1b1b4$var$useCollection(__scopeAccordion);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const handleKeyDown = $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
    var _triggerCollection$cl;
    if (!$1bf158f521e1b1b4$var$ACCORDION_KEYS.includes(event.key))
      return;
    const target = event.target;
    const triggerCollection = getItems().filter((item) => {
      var _item$ref$current;
      return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
    });
    const triggerIndex = triggerCollection.findIndex(
      (item) => item.ref.current === target
    );
    const triggerCount = triggerCollection.length;
    if (triggerIndex === -1)
      return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;
    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex)
        nextIndex = homeIndex;
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex)
        nextIndex = endIndex;
    };
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            moveNext();
          else
            movePrev();
        }
        break;
      case "ArrowDown":
        if (orientation === "vertical")
          moveNext();
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            movePrev();
          else
            moveNext();
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical")
          movePrev();
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
  });
  return /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation
  }, /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$Collection.Slot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react2.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, accordionProps, {
    "data-orientation": orientation,
    ref: composedRefs,
    onKeyDown: disabled ? void 0 : handleKeyDown
  }))));
});
var $1bf158f521e1b1b4$var$ITEM_NAME = "AccordionItem";
var [$1bf158f521e1b1b4$var$AccordionItemProvider, $1bf158f521e1b1b4$var$useAccordionItemContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME);
var $1bf158f521e1b1b4$export$d99097c13d4dac9f = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, value, ...accordionItemProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const valueContext = $1bf158f521e1b1b4$var$useAccordionValueContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  const triggerId = $1746a345f3d73bb7$export$f680877a34711e37();
  const open1 = value && valueContext.value.includes(value) || false;
  const disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$AccordionItemProvider, {
    scope: __scopeAccordion,
    open: open1,
    disabled,
    triggerId
  }, /* @__PURE__ */ import_react2.default.createElement($409067139f391064$export$be92b6f5f03c0fe9, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(open1)
  }, collapsibleScope, accordionItemProps, {
    ref: forwardedRef,
    disabled,
    open: open1,
    onOpenChange: (open) => {
      if (open)
        valueContext.onItemOpen(value);
      else
        valueContext.onItemClose(value);
    }
  })));
});
var $1bf158f521e1b1b4$var$HEADER_NAME = "AccordionHeader";
var $1bf158f521e1b1b4$export$5e3e5deaaf81ee41 = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...headerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$HEADER_NAME, __scopeAccordion);
  return /* @__PURE__ */ import_react2.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h3, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : void 0
  }, headerProps, {
    ref: forwardedRef
  }));
});
var $1bf158f521e1b1b4$var$TRIGGER_NAME = "AccordionTrigger";
var $1bf158f521e1b1b4$export$94e939b1f85bdd73 = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...triggerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleContext = $1bf158f521e1b1b4$var$useAccordionCollapsibleContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react2.default.createElement($1bf158f521e1b1b4$var$Collection.ItemSlot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react2.default.createElement($409067139f391064$export$41fb9f06171c75f4, _extends({
    "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
    "data-orientation": accordionContext.orientation,
    id: itemContext.triggerId
  }, collapsibleScope, triggerProps, {
    ref: forwardedRef
  })));
});
var $1bf158f521e1b1b4$var$CONTENT_NAME = "AccordionContent";
var $1bf158f521e1b1b4$export$985b9a77379b54a0 = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...contentProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$CONTENT_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react2.default.createElement($409067139f391064$export$7c6e2c02157bb7d2, _extends({
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation
  }, collapsibleScope, contentProps, {
    ref: forwardedRef,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...props.style
    }
  }));
});
function $1bf158f521e1b1b4$var$getState(open) {
  return open ? "open" : "closed";
}
var $1bf158f521e1b1b4$export$be92b6f5f03c0fe9 = $1bf158f521e1b1b4$export$a766cd26d0d69044;
var $1bf158f521e1b1b4$export$6d08773d2e66f8f2 = $1bf158f521e1b1b4$export$d99097c13d4dac9f;
var $1bf158f521e1b1b4$export$8b251419efc915eb = $1bf158f521e1b1b4$export$5e3e5deaaf81ee41;
var $1bf158f521e1b1b4$export$41fb9f06171c75f4 = $1bf158f521e1b1b4$export$94e939b1f85bdd73;
var $1bf158f521e1b1b4$export$7c6e2c02157bb7d2 = $1bf158f521e1b1b4$export$985b9a77379b54a0;

// app/components/ui/accordion.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\accordion.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\accordion.tsx"
  );
  import.meta.hot.lastModified = "1727265355963.339";
}
var Accordion = $1bf158f521e1b1b4$export$be92b6f5f03c0fe9;
var AccordionItem = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($1bf158f521e1b1b4$export$6d08773d2e66f8f2, { ref, className: cn("border-b", className), ...props }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c2 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(_c3 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($1bf158f521e1b1b4$export$8b251419efc915eb, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($1bf158f521e1b1b4$export$41fb9f06171c75f4, { ref, className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" }, void 0, false, {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 37,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 36,
  columnNumber: 12
}, this));
_c4 = AccordionTrigger;
AccordionTrigger.displayName = $1bf158f521e1b1b4$export$41fb9f06171c75f4.displayName;
var AccordionContent = React.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($1bf158f521e1b1b4$export$7c6e2c02157bb7d2, { ref, className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("pb-4 pt-0", className), children }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 49,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c6 = AccordionContent;
AccordionContent.displayName = $1bf158f521e1b1b4$export$7c6e2c02157bb7d2.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "AccordionItem$React.forwardRef");
$RefreshReg$(_c2, "AccordionItem");
$RefreshReg$(_c3, "AccordionTrigger$React.forwardRef");
$RefreshReg$(_c4, "AccordionTrigger");
$RefreshReg$(_c5, "AccordionContent$React.forwardRef");
$RefreshReg$(_c6, "AccordionContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1728490894108.3584";
}
var meta = () => {
  return [{
    title: "OnchologyChain"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function DashboardAndAccordion() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "For those cutie pie\u2764" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, { afterSignOutUrl: "/" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionDemo, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c7 = DashboardAndAccordion;
function AccordionDemo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionItem, { value: "item-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionTrigger, { children: "Why Syafika so Comel??" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionContent, { children: "Because no one more Comel in the whole world!!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionItem, { value: "item-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionTrigger, { children: "Is it True?" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionContent, { children: "Yes, no one can prove otherwise." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionItem, { value: "item-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionTrigger, { children: "Can Anyone Challenge her cutenes?" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccordionContent, { children: "Yes. But actually No." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c22 = AccordionDemo;
var _c7;
var _c22;
$RefreshReg$(_c7, "DashboardAndAccordion");
$RefreshReg$(_c22, "AccordionDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardAndAccordion as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-FS3Y2GWH.js.map
