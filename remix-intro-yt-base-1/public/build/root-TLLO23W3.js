import {
  Presence,
  createContextScope,
  useControllableState
} from "/build/_shared/chunk-RID6SA6X.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-XAESSOVX.js";
import {
  useToast
} from "/build/_shared/chunk-I33NTPQU.js";
import {
  Branch,
  ChevronDown,
  Portal,
  Primitive,
  Root,
  X,
  _extends,
  cn,
  composeEventHandlers,
  createCollection,
  cva,
  dispatchDiscreteCustomEvent,
  useCallbackRef,
  useComposedRefs,
  useLayoutEffect2
} from "/build/_shared/chunk-Q5MLNVT7.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-LS2LPRW5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-C7UWCFPG.css";

// app/components/ui/navigation-menu.tsx
var React = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-context/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react.createContext)(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = (0, import_react.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = (0, import_react.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [
      Provider2,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react2.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-slot/dist/index.mjs
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react3.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react3.Children.count(newElement) > 1)
          return import_react3.Children.only(null);
        return /* @__PURE__ */ (0, import_react3.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react3.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react3.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react3.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react3.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react3.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react3.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
  return import_react3.Children.count(children) > 1 ? import_react3.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react3.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ (0, import_react4.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react4.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react4.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react5.useRef)(callback);
  (0, import_react5.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react5.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react6.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react6.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react6.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react6.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ (0, import_react7.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react7.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react8 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react8.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-presence/dist/index.mjs
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react9.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react9.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react9.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react9.useState)();
  const stylesRef = (0, import_react9.useRef)({});
  const prevPresentRef = (0, import_react9.useRef)(present);
  const prevAnimationNameRef = (0, import_react9.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react9.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom2.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react9.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-id/dist/index.mjs
var $2AODx$react = __toESM(require_react(), 1);
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react10 = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME2 = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME2);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME2, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react10.default.useRef(null);
    const itemMap = import_react10.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ import_react10.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  /* @__PURE__ */ Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME2
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ import_react10.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ import_react10.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ import_react10.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react10.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react10.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ import_react10.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react10.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection2,
    createCollectionScope2
  ];
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react11 = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react11.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react12.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react12.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react12.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react12.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react12.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react12.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react12.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react12.useRef)(false);
  const handleClickRef = (0, import_react12.useRef)(() => {
  });
  (0, import_react12.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react13 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react13.useRef)({
    value,
    previous: value
  });
  return (0, import_react13.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react14 = __toESM(require_react(), 1);
var $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
var $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react15.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react15.useRef)(0);
  const closeTimerRef = (0, import_react15.useRef)(0);
  const skipDelayTimerRef = (0, import_react15.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react15.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react15.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react15.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react15.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react15.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react15.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react15.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react15.useState)(null);
  return /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react15.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react15.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react15.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react15.useRef)(false);
  const wasClickCloseRef = (0, import_react15.useRef)(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ (0, import_react15.createElement)(import_react15.Fragment, null, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && /* @__PURE__ */ (0, import_react15.createElement)(import_react15.Fragment, null, /* @__PURE__ */ (0, import_react15.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && /* @__PURE__ */ (0, import_react15.createElement)("span", {
    "aria-owns": contentId
  })));
});
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? /* @__PURE__ */ import_react_dom3.default.createPortal(/* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react15.useState)(null);
  const [position, setPosition] = (0, import_react15.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react15.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? /* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
var $322c88a641701f3b$var$ViewportContentMounter = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react15.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react15.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react15.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react15.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1)
          return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react15.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return /* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends({}, viewportProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = /* @__PURE__ */ (0, import_react15.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size, setSize] = (0, import_react15.useState)(null);
  const [content, setContent] = (0, import_react15.useState)(null);
  const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
  const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return /* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;
var $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
var $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
var $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;

// app/components/ui/navigation-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\navigation-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\navigation-menu.tsx"
  );
  import.meta.hot.lastModified = "1728403581908.3342";
}
var NavigationMenu = React.forwardRef(_c = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$be92b6f5f03c0fe9, { ref, className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenuViewport, {}, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c2 = NavigationMenu;
NavigationMenu.displayName = $322c88a641701f3b$export$be92b6f5f03c0fe9.displayName;
var NavigationMenuList = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$54c2e3dc7acea9f5, { ref, className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c4 = NavigationMenuList;
NavigationMenuList.displayName = $322c88a641701f3b$export$54c2e3dc7acea9f5.displayName;
var navigationMenuTriggerStyle = cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
var NavigationMenuTrigger = React.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$41fb9f06171c75f4, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  " ",
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" }, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c6 = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = $322c88a641701f3b$export$41fb9f06171c75f4.displayName;
var NavigationMenuContent = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$7c6e2c02157bb7d2, { ref, className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c8 = NavigationMenuContent;
NavigationMenuContent.displayName = $322c88a641701f3b$export$7c6e2c02157bb7d2.displayName;
var NavigationMenuLink = $322c88a641701f3b$export$a6c7ac8248d6e38a;
var NavigationMenuViewport = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$d5c6c08dc2d3ca7, { className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ref, ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 65,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c10 = NavigationMenuViewport;
NavigationMenuViewport.displayName = $322c88a641701f3b$export$d5c6c08dc2d3ca7.displayName;
var NavigationMenuIndicator = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$adb584737d712b70, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 73,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c12 = NavigationMenuIndicator;
NavigationMenuIndicator.displayName = $322c88a641701f3b$export$adb584737d712b70.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c, "NavigationMenu$React.forwardRef");
$RefreshReg$(_c2, "NavigationMenu");
$RefreshReg$(_c3, "NavigationMenuList$React.forwardRef");
$RefreshReg$(_c4, "NavigationMenuList");
$RefreshReg$(_c5, "NavigationMenuTrigger$React.forwardRef");
$RefreshReg$(_c6, "NavigationMenuTrigger");
$RefreshReg$(_c7, "NavigationMenuContent$React.forwardRef");
$RefreshReg$(_c8, "NavigationMenuContent");
$RefreshReg$(_c9, "NavigationMenuViewport$React.forwardRef");
$RefreshReg$(_c10, "NavigationMenuViewport");
$RefreshReg$(_c11, "NavigationMenuIndicator$React.forwardRef");
$RefreshReg$(_c12, "NavigationMenuIndicator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/custom/Navigation.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\custom\\\\Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\custom\\Navigation.tsx"
  );
  import.meta.hot.lastModified = "1729157529997.5266";
}
function Navigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col bg-white dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-4 py-6 flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "text-2xl font-bold text-gray-900 dark:text-gray-100", children: "OnchologyChain" }, void 0, false, {
      fileName: "app/components/custom/Navigation.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuList, { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100", children: "Home" }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100", to: "#", children: "Features" }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100", to: "form", children: "Update" }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100", to: "#", children: "Contact" }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100", to: "dashboard", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/custom/Navigation.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/custom/Navigation.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/custom/Navigation.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/custom/Navigation.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c13 = Navigation;
var _c13;
$RefreshReg$(_c13, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/custom/Footer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\custom\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\custom\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1728825981432.9348";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-20 flex items-center justify-center border-t text-gray-600 dark:border-gray-800 dark:text-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "\xA9 OnchologyChain. All rights reserved." }, void 0, false, {
    fileName: "app/components/custom/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/custom/Footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c14 = Footer;
var _c14;
$RefreshReg$(_c14, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/toast.tsx
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toast/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NAME = "VisuallyHidden";
var VisuallyHidden = React2.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;

// node_modules/@radix-ui/react-toast/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var PROVIDER_NAME = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = createCollection("Toast");
var [createToastContext, createToastScope] = createContextScope("Toast", [createCollectionScope]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
var ToastProvider = (props) => {
  const {
    __scopeToast,
    label = "Notification",
    duration = 5e3,
    swipeDirection = "right",
    swipeThreshold = 50,
    children
  } = props;
  const [viewport, setViewport] = React3.useState(null);
  const [toastCount, setToastCount] = React3.useState(0);
  const isFocusedToastEscapeKeyDownRef = React3.useRef(false);
  const isClosePausedRef = React3.useRef(false);
  if (!label.trim()) {
    console.error(
      `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection.Provider, { scope: __scopeToast, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ToastProviderProvider,
    {
      scope: __scopeToast,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange: setViewport,
      onToastAdd: React3.useCallback(() => setToastCount((prevCount) => prevCount + 1), []),
      onToastRemove: React3.useCallback(() => setToastCount((prevCount) => prevCount - 1), []),
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef,
      children
    }
  ) });
};
ToastProvider.displayName = PROVIDER_NAME;
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport = React3.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      hotkey = VIEWPORT_DEFAULT_HOTKEY,
      label = "Notifications ({hotkey})",
      ...viewportProps
    } = props;
    const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const wrapperRef = React3.useRef(null);
    const headFocusProxyRef = React3.useRef(null);
    const tailFocusProxyRef = React3.useRef(null);
    const ref = React3.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    React3.useEffect(() => {
      const handleKeyDown = (event) => {
        const isHotkeyPressed = hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key);
        if (isHotkeyPressed)
          ref.current?.focus();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);
    React3.useEffect(() => {
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = () => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        };
        const handleResume = () => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
          if (isFocusMovingOutside)
            handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside)
            handleResume();
        };
        wrapper.addEventListener("focusin", handlePause);
        wrapper.addEventListener("focusout", handleFocusOutResume);
        wrapper.addEventListener("pointermove", handlePause);
        wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
        window.addEventListener("blur", handlePause);
        window.addEventListener("focus", handleResume);
        return () => {
          wrapper.removeEventListener("focusin", handlePause);
          wrapper.removeEventListener("focusout", handleFocusOutResume);
          wrapper.removeEventListener("pointermove", handlePause);
          wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
          window.removeEventListener("blur", handlePause);
          window.removeEventListener("focus", handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef]);
    const getSortedTabbableCandidates = React3.useCallback(
      ({ tabbingDirection }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      },
      [getItems]
    );
    React3.useEffect(() => {
      const viewport = ref.current;
      if (viewport) {
        const handleKeyDown = (event) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.current?.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              isTabbingBackwards ? headFocusProxyRef.current?.focus() : tailFocusProxyRef.current?.focus();
            }
          }
        };
        viewport.addEventListener("keydown", handleKeyDown);
        return () => viewport.removeEventListener("keydown", handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      Branch,
      {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: { pointerEvents: hasToasts ? void 0 : "none" },
        children: [
          hasToasts && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            FocusProxy,
            {
              ref: headFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection.Slot, { scope: __scopeToast, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Primitive.ol, { tabIndex: -1, ...viewportProps, ref: composedRefs }) }),
          hasToasts && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            FocusProxy,
            {
              ref: tailFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          )
        ]
      }
    );
  }
);
ToastViewport.displayName = VIEWPORT_NAME;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      VisuallyHidden,
      {
        "aria-hidden": true,
        tabIndex: 0,
        ...proxyProps,
        ref: forwardedRef,
        style: { position: "fixed" },
        onFocus: (event) => {
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !context.viewport?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport)
            onFocusFromOutsideViewport();
        }
      }
    );
  }
);
FocusProxy.displayName = FOCUS_PROXY_NAME;
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast = React3.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
    const [open = true, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Presence, { present: forceMount || open, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ToastImpl,
      {
        open,
        ...toastProps,
        ref: forwardedRef,
        onClose: () => setOpen(false),
        onPause: useCallbackRef(props.onPause),
        onResume: useCallbackRef(props.onResume),
        onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
          event.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "move");
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
        }),
        onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
          event.currentTarget.setAttribute("data-swipe", "cancel");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "end");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
          setOpen(false);
        })
      }
    ) });
  }
);
Toast.displayName = TOAST_NAME;
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
  onClose() {
  }
});
var ToastImpl = React3.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      type = "foreground",
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd,
      ...toastProps
    } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [node, setNode] = React3.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const pointerStartRef = React3.useRef(null);
    const swipeDeltaRef = React3.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = React3.useRef(0);
    const closeTimerRemainingTimeRef = React3.useRef(duration);
    const closeTimerRef = React3.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = useCallbackRef(() => {
      const isFocusInToast = node?.contains(document.activeElement);
      if (isFocusInToast)
        context.viewport?.focus();
      onClose();
    });
    const startTimer = React3.useCallback(
      (duration2) => {
        if (!duration2 || duration2 === Infinity)
          return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
      },
      [handleClose]
    );
    React3.useEffect(() => {
      const viewport = context.viewport;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.current);
          onResume?.();
        };
        const handlePause = () => {
          const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
          closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
          window.clearTimeout(closeTimerRef.current);
          onPause?.();
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    }, [context.viewport, duration, onPause, onResume, startTimer]);
    React3.useEffect(() => {
      if (open && !context.isClosePausedRef.current)
        startTimer(duration);
    }, [open, duration, context.isClosePausedRef, startTimer]);
    React3.useEffect(() => {
      onToastAdd();
      return () => onToastRemove();
    }, [onToastAdd, onToastRemove]);
    const announceTextContent = React3.useMemo(() => {
      return node ? getAnnounceTextContent(node) : null;
    }, [node]);
    if (!context.viewport)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      announceTextContent && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        ToastAnnounce,
        {
          __scopeToast,
          role: "status",
          "aria-live": type === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: announceTextContent
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToastInteractiveProvider, { scope: __scopeToast, onClose: handleClose, children: ReactDOM.createPortal(
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection.ItemSlot, { scope: __scopeToast, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Root,
          {
            asChild: true,
            onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, () => {
              if (!context.isFocusedToastEscapeKeyDownRef.current)
                handleClose();
              context.isFocusedToastEscapeKeyDownRef.current = false;
            }),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              Primitive.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": open ? "open" : "closed",
                "data-swipe-direction": context.swipeDirection,
                ...toastProps,
                ref: composedRefs,
                style: { userSelect: "none", touchAction: "none", ...props.style },
                onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                  if (event.key !== "Escape")
                    return;
                  onEscapeKeyDown?.(event.nativeEvent);
                  if (!event.nativeEvent.defaultPrevented) {
                    context.isFocusedToastEscapeKeyDownRef.current = true;
                    handleClose();
                  }
                }),
                onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
                  if (event.button !== 0)
                    return;
                  pointerStartRef.current = { x: event.clientX, y: event.clientY };
                }),
                onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
                  if (!pointerStartRef.current)
                    return;
                  const x = event.clientX - pointerStartRef.current.x;
                  const y = event.clientY - pointerStartRef.current.y;
                  const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                  const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
                  const clamp = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
                  const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
                  const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
                  const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                  const delta = { x: clampedX, y: clampedY };
                  const eventDetail = { originalEvent: event, delta };
                  if (hasSwipeMoveStarted) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                      discrete: false
                    });
                  } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                      discrete: false
                    });
                    event.target.setPointerCapture(event.pointerId);
                  } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                    pointerStartRef.current = null;
                  }
                }),
                onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                  const delta = swipeDeltaRef.current;
                  const target = event.target;
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                  swipeDeltaRef.current = null;
                  pointerStartRef.current = null;
                  if (delta) {
                    const toast = event.currentTarget;
                    const eventDetail = { originalEvent: event, delta };
                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                      handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                        discrete: true
                      });
                    } else {
                      handleAndDispatchCustomEvent(
                        TOAST_SWIPE_CANCEL,
                        onSwipeCancel,
                        eventDetail,
                        {
                          discrete: true
                        }
                      );
                    }
                    toast.addEventListener("click", (event2) => event2.preventDefault(), {
                      once: true
                    });
                  }
                })
              }
            )
          }
        ) }),
        context.viewport
      ) })
    ] });
  }
);
var ToastAnnounce = (props) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = useToastProviderContext(TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = React3.useState(false);
  const [isAnnounced, setIsAnnounced] = React3.useState(false);
  useNextFrame(() => setRenderAnnounceText(true));
  React3.useEffect(() => {
    const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Portal, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisuallyHidden, { ...announceProps, children: renderAnnounceText && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    context.label,
    " ",
    children
  ] }) }) });
};
var TITLE_NAME = "ToastTitle";
var ToastTitle = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...titleProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Primitive.div, { ...titleProps, ref: forwardedRef });
  }
);
ToastTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "ToastDescription";
var ToastDescription = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...descriptionProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Primitive.div, { ...descriptionProps, ref: forwardedRef });
  }
);
ToastDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "ToastAction";
var ToastAction = React3.forwardRef(
  (props, forwardedRef) => {
    const { altText, ...actionProps } = props;
    if (!altText.trim()) {
      console.error(
        `Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`
      );
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToastAnnounceExclude, { altText, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToastClose, { ...actionProps, ref: forwardedRef }) });
  }
);
ToastAction.displayName = ACTION_NAME;
var CLOSE_NAME = "ToastClose";
var ToastClose = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToastAnnounceExclude, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
      }
    ) });
  }
);
ToastClose.displayName = CLOSE_NAME;
var ToastAnnounceExclude = React3.forwardRef((props, forwardedRef) => {
  const { __scopeToast, altText, ...announceExcludeProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Primitive.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": altText || void 0,
      ...announceExcludeProps,
      ref: forwardedRef
    }
  );
});
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent)
      textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText)
            textContent.push(altText);
        } else {
          textContent.push(...getAnnounceTextContent(node));
        }
      }
    }
  });
  return textContent;
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, { bubbles: true, cancelable: true, detail });
  if (handler)
    currentTarget.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}
var isDeltaInDirection = (delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
};
function useNextFrame(callback = () => {
}) {
  const fn = useCallbackRef(callback);
  useLayoutEffect2(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
var Provider = ToastProvider;
var Viewport = ToastViewport;
var Root2 = Toast;
var Title = ToastTitle;
var Description = ToastDescription;
var Action = ToastAction;
var Close = ToastClose;

// app/components/ui/toast.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\toast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\toast.tsx"
  );
  import.meta.hot.lastModified = "1729157212012.8518";
}
var ToastProvider2 = Provider;
var ToastViewport2 = React4.forwardRef(_c15 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Viewport, { ref, className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c22 = ToastViewport2;
ToastViewport2.displayName = Viewport.displayName;
var toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
    variant: {
      default: "border bg-background text-foreground",
      destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Toast2 = React4.forwardRef(_c32 = ({
  className,
  variant,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Root2, { ref, className: cn(toastVariants({
    variant
  }), className), ...props }, void 0, false, {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
});
_c42 = Toast2;
Toast2.displayName = Root2.displayName;
var ToastAction2 = React4.forwardRef(_c52 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Action, { ref, className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className), ...props }, void 0, false, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c62 = ToastAction2;
ToastAction2.displayName = Action.displayName;
var ToastClose2 = React4.forwardRef(_c72 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Close, { ref, className: cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "toast-close": "", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 65,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c82 = ToastClose2;
ToastClose2.displayName = Close.displayName;
var ToastTitle2 = React4.forwardRef(_c92 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title, { ref, className: cn("text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c102 = ToastTitle2;
ToastTitle2.displayName = Title.displayName;
var ToastDescription2 = React4.forwardRef(_c112 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Description, { ref, className: cn("text-sm opacity-90", className), ...props }, void 0, false, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this));
_c122 = ToastDescription2;
ToastDescription2.displayName = Description.displayName;
var _c15;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
var _c112;
var _c122;
$RefreshReg$(_c15, "ToastViewport$React.forwardRef");
$RefreshReg$(_c22, "ToastViewport");
$RefreshReg$(_c32, "Toast$React.forwardRef");
$RefreshReg$(_c42, "Toast");
$RefreshReg$(_c52, "ToastAction$React.forwardRef");
$RefreshReg$(_c62, "ToastAction");
$RefreshReg$(_c72, "ToastClose$React.forwardRef");
$RefreshReg$(_c82, "ToastClose");
$RefreshReg$(_c92, "ToastTitle$React.forwardRef");
$RefreshReg$(_c102, "ToastTitle");
$RefreshReg$(_c112, "ToastDescription$React.forwardRef");
$RefreshReg$(_c122, "ToastDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/toaster.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\toaster.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\toaster.tsx"
  );
  import.meta.hot.lastModified = "1729157332188.7576";
}
function Toaster() {
  _s();
  const {
    toasts
  } = useToast();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToastProvider2, { children: [
    toasts.map(function({
      id,
      title,
      description,
      action,
      ...props
    }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Toast2, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToastTitle2, { children: title }, void 0, false, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToastDescription2, { children: description }, void 0, false, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 40,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToastClose2, {}, void 0, false, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "app/components/ui/toaster.tsx",
        lineNumber: 37,
        columnNumber: 14
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToastViewport2, {}, void 0, false, {
      fileName: "app/components/ui/toaster.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/toaster.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c16 = Toaster;
var _c16;
$RefreshReg$(_c16, "Toaster");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "mx-auto min-w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Toaster, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Navigation, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c17 = App;
var _c17;
$RefreshReg$(_c17, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-TLLO23W3.js.map
