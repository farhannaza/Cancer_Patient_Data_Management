import {
  esm_exports,
  init_esm
} from "/build/_shared/chunk-VCX4JAPZ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@clerk/remix/dist/globalPolyfill.js
var require_globalPolyfill = __commonJS({
  "node_modules/@clerk/remix/dist/globalPolyfill.js"() {
    "use strict";
    if (typeof window !== "undefined" && typeof window.global === "undefined") {
      window.global = window;
    }
  }
});

// node_modules/@clerk/shared/dist/loadClerkJsScript.js
var require_loadClerkJsScript = __commonJS({
  "node_modules/@clerk/shared/dist/loadClerkJsScript.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var loadClerkJsScript_exports = {};
    __export2(loadClerkJsScript_exports, {
      buildClerkJsScriptAttributes: () => buildClerkJsScriptAttributes2,
      clerkJsScriptUrl: () => clerkJsScriptUrl2,
      loadClerkJsScript: () => loadClerkJsScript,
      setClerkJsLoadingErrorPackageName: () => setClerkJsLoadingErrorPackageName2
    });
    module.exports = __toCommonJS2(loadClerkJsScript_exports);
    var DefaultMessages = Object.freeze({
      InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
      InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
      MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
    });
    function buildErrorThrower({ packageName, customMessages }) {
      let pkg = packageName;
      const messages = {
        ...DefaultMessages,
        ...customMessages
      };
      function buildMessage(rawMessage, replacements) {
        if (!replacements) {
          return `${pkg}: ${rawMessage}`;
        }
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches) {
          const replacement = (replacements[match[1]] || "").toString();
          msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
      }
      return {
        setPackageName({ packageName: packageName2 }) {
          if (typeof packageName2 === "string") {
            pkg = packageName2;
          }
          return this;
        },
        setMessages({ customMessages: customMessages2 }) {
          Object.assign(messages, customMessages2 || {});
          return this;
        },
        throwInvalidPublishableKeyError(params) {
          throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl(params) {
          throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError() {
          throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError() {
          throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError(params) {
          throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw(message) {
          throw new Error(buildMessage(message));
        }
      };
    }
    var DEV_OR_STAGING_SUFFIXES = [
      ".lcl.dev",
      ".stg.dev",
      ".lclstage.dev",
      ".stgstage.dev",
      ".dev.lclclerk.com",
      ".stg.lclclerk.com",
      ".accounts.lclclerk.com",
      "accountsstage.dev",
      "accounts.dev"
    ];
    var isomorphicAtob = (data) => {
      if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
      } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data, "base64").toString();
      }
      return data;
    };
    var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
    var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
    function parsePublishableKey(key, options = {}) {
      key = key || "";
      if (!key || !isPublishableKey(key)) {
        if (options.fatal) {
          throw new Error("Publishable key not valid.");
        }
        return null;
      }
      const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
      let frontendApi = isomorphicAtob(key.split("_")[2]);
      frontendApi = frontendApi.slice(0, -1);
      if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
      } else if (instanceType !== "development" && options.domain) {
        frontendApi = `clerk.${options.domain}`;
      }
      return {
        instanceType,
        frontendApi
      };
    }
    function isPublishableKey(key) {
      key = key || "";
      const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
      const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
      return hasValidPrefix && hasValidFrontendApiPostfix;
    }
    function createDevOrStagingUrlCache() {
      const devOrStagingUrlCache = /* @__PURE__ */ new Map();
      return {
        isDevOrStagingUrl: (url) => {
          if (!url) {
            return false;
          }
          const hostname = typeof url === "string" ? url : url.hostname;
          let res = devOrStagingUrlCache.get(hostname);
          if (res === void 0) {
            res = DEV_OR_STAGING_SUFFIXES.some((s) => hostname.endsWith(s));
            devOrStagingUrlCache.set(hostname, res);
          }
          return res;
        }
      };
    }
    var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
    var NO_SRC_ERROR = "loadScript cannot be called without a src";
    async function loadScript(src = "", opts) {
      const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
      return new Promise((resolve, reject) => {
        if (!src) {
          reject(NO_SRC_ERROR);
        }
        if (!document || !document.body) {
          reject(NO_DOCUMENT_ERROR);
        }
        const script = document.createElement("script");
        crossOrigin && script.setAttribute("crossorigin", crossOrigin);
        script.async = async || false;
        script.defer = defer || false;
        script.addEventListener("load", () => {
          script.remove();
          resolve(script);
        });
        script.addEventListener("error", () => {
          script.remove();
          reject();
        });
        script.src = src;
        script.nonce = nonce;
        beforeLoad == null ? void 0 : beforeLoad(script);
        document.body.appendChild(script);
      });
    }
    function isValidProxyUrl(key) {
      if (!key) {
        return true;
      }
      return isHttpOrHttps(key) || isProxyUrlRelative(key);
    }
    function isHttpOrHttps(key) {
      return /^http(s)?:\/\//.test(key || "");
    }
    function isProxyUrlRelative(key) {
      return key.startsWith("/");
    }
    function proxyUrlToAbsoluteURL(url) {
      if (!url) {
        return "";
      }
      return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
    }
    function addClerkPrefix(str) {
      if (!str) {
        return "";
      }
      let regex;
      if (str.match(/^(clerk\.)+\w*$/)) {
        regex = /(clerk\.)*(?=clerk\.)/;
      } else if (str.match(/\.clerk.accounts/)) {
        return str;
      } else {
        regex = /^(clerk\.)*/gi;
      }
      const stripped = str.replace(regex, "");
      return `clerk.${stripped}`;
    }
    var versionSelector = (clerkJSVersion, packageVersion = "5.26.0") => {
      if (clerkJSVersion) {
        return clerkJSVersion;
      }
      const prereleaseTag = getPrereleaseTag(packageVersion);
      if (prereleaseTag) {
        if (prereleaseTag === "snapshot") {
          return "5.26.0";
        }
        return prereleaseTag;
      }
      return getMajorVersion(packageVersion);
    };
    var getPrereleaseTag = (packageVersion) => {
      var _a;
      return (_a = packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)) == null ? void 0 : _a[1];
    };
    var getMajorVersion = (packageVersion) => packageVersion.trim().replace(/^v/, "").split(".")[0];
    var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
    var { isDevOrStagingUrl } = createDevOrStagingUrlCache();
    var errorThrower = buildErrorThrower({ packageName: "@clerk/shared" });
    function setClerkJsLoadingErrorPackageName2(packageName) {
      errorThrower.setPackageName({ packageName });
    }
    var loadClerkJsScript = async (opts) => {
      const existingScript = document.querySelector("script[data-clerk-js-script]");
      if (existingScript) {
        return new Promise((resolve, reject) => {
          existingScript.addEventListener("load", () => {
            resolve(existingScript);
          });
          existingScript.addEventListener("error", () => {
            reject(FAILED_TO_LOAD_ERROR);
          });
        });
      }
      if (!(opts == null ? void 0 : opts.publishableKey)) {
        errorThrower.throwMissingPublishableKeyError();
        return;
      }
      return loadScript(clerkJsScriptUrl2(opts), {
        async: true,
        crossOrigin: "anonymous",
        nonce: opts.nonce,
        beforeLoad: applyClerkJsScriptAttributes(opts)
      }).catch(() => {
        throw new Error(FAILED_TO_LOAD_ERROR);
      });
    };
    var clerkJsScriptUrl2 = (opts) => {
      var _a, _b;
      const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
      if (clerkJSUrl) {
        return clerkJSUrl;
      }
      let scriptHost = "";
      if (!!proxyUrl && isValidProxyUrl(proxyUrl)) {
        scriptHost = proxyUrlToAbsoluteURL(proxyUrl).replace(/http(s)?:\/\//, "");
      } else if (domain && !isDevOrStagingUrl(((_a = parsePublishableKey(publishableKey)) == null ? void 0 : _a.frontendApi) || "")) {
        scriptHost = addClerkPrefix(domain);
      } else {
        scriptHost = ((_b = parsePublishableKey(publishableKey)) == null ? void 0 : _b.frontendApi) || "";
      }
      const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
      const version = versionSelector(clerkJSVersion);
      return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
    };
    var buildClerkJsScriptAttributes2 = (options) => {
      const obj = {};
      if (options.publishableKey) {
        obj["data-clerk-publishable-key"] = options.publishableKey;
      }
      if (options.proxyUrl) {
        obj["data-clerk-proxy-url"] = options.proxyUrl;
      }
      if (options.domain) {
        obj["data-clerk-domain"] = options.domain;
      }
      if (options.nonce) {
        obj.nonce = options.nonce;
      }
      return obj;
    };
    var applyClerkJsScriptAttributes = (options) => (script) => {
      const attributes = buildClerkJsScriptAttributes2(options);
      for (const attribute in attributes) {
        script.setAttribute(attribute, attributes[attribute]);
      }
    };
  }
});

// node_modules/@clerk/shared/dist/error.js
var require_error = __commonJS({
  "node_modules/@clerk/shared/dist/error.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var error_exports = {};
    __export2(error_exports, {
      ClerkAPIResponseError: () => ClerkAPIResponseError,
      ClerkRuntimeError: () => ClerkRuntimeError,
      EmailLinkError: () => EmailLinkError,
      EmailLinkErrorCode: () => EmailLinkErrorCode,
      buildErrorThrower: () => buildErrorThrower,
      is4xxError: () => is4xxError,
      isClerkAPIResponseError: () => isClerkAPIResponseError,
      isClerkRuntimeError: () => isClerkRuntimeError,
      isEmailLinkError: () => isEmailLinkError,
      isKnownError: () => isKnownError,
      isMetamaskError: () => isMetamaskError,
      isNetworkError: () => isNetworkError,
      isPasswordPwnedError: () => isPasswordPwnedError,
      isUnauthorizedError: () => isUnauthorizedError,
      isUserLockedError: () => isUserLockedError,
      parseError: () => parseError,
      parseErrors: () => parseErrors
    });
    module.exports = __toCommonJS2(error_exports);
    function isUnauthorizedError(e) {
      var _a, _b;
      const status = e == null ? void 0 : e.status;
      const code = (_b = (_a = e == null ? void 0 : e.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code;
      return code === "authentication_invalid" && status === 401;
    }
    function is4xxError(e) {
      const status = e == null ? void 0 : e.status;
      return !!status && status >= 400 && status < 500;
    }
    function isNetworkError(e) {
      const message = (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "");
      return message.includes("networkerror");
    }
    function isKnownError(error) {
      return isClerkAPIResponseError(error) || isMetamaskError(error) || isClerkRuntimeError(error);
    }
    function isClerkAPIResponseError(err) {
      return "clerkError" in err;
    }
    function isClerkRuntimeError(err) {
      return "clerkRuntimeError" in err;
    }
    function isMetamaskError(err) {
      return "code" in err && [4001, 32602, 32603].includes(err.code) && "message" in err;
    }
    function isUserLockedError(err) {
      var _a, _b;
      return isClerkAPIResponseError(err) && ((_b = (_a = err.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code) === "user_locked";
    }
    function isPasswordPwnedError(err) {
      var _a, _b;
      return isClerkAPIResponseError(err) && ((_b = (_a = err.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code) === "form_password_pwned";
    }
    function parseErrors(data = []) {
      return data.length > 0 ? data.map(parseError) : [];
    }
    function parseError(error) {
      var _a, _b, _c, _d, _e;
      return {
        code: error.code,
        message: error.message,
        longMessage: error.long_message,
        meta: {
          paramName: (_a = error == null ? void 0 : error.meta) == null ? void 0 : _a.param_name,
          sessionId: (_b = error == null ? void 0 : error.meta) == null ? void 0 : _b.session_id,
          emailAddresses: (_c = error == null ? void 0 : error.meta) == null ? void 0 : _c.email_addresses,
          identifiers: (_d = error == null ? void 0 : error.meta) == null ? void 0 : _d.identifiers,
          zxcvbn: (_e = error == null ? void 0 : error.meta) == null ? void 0 : _e.zxcvbn
        }
      };
    }
    var ClerkAPIResponseError = class _ClerkAPIResponseError extends Error {
      constructor(message, { data, status, clerkTraceId }) {
        super(message);
        this.toString = () => {
          let message2 = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map(
            (e) => JSON.stringify(e)
          )}`;
          if (this.clerkTraceId) {
            message2 += `
Clerk Trace ID: ${this.clerkTraceId}`;
          }
          return message2;
        };
        Object.setPrototypeOf(this, _ClerkAPIResponseError.prototype);
        this.status = status;
        this.message = message;
        this.clerkTraceId = clerkTraceId;
        this.clerkError = true;
        this.errors = parseErrors(data);
      }
    };
    var ClerkRuntimeError = class _ClerkRuntimeError extends Error {
      constructor(message, { code }) {
        super(message);
        this.toString = () => {
          return `[${this.name}]
Message:${this.message}`;
        };
        Object.setPrototypeOf(this, _ClerkRuntimeError.prototype);
        this.code = code;
        this.message = message;
        this.clerkRuntimeError = true;
      }
    };
    var EmailLinkError = class _EmailLinkError extends Error {
      constructor(code) {
        super(code);
        this.code = code;
        Object.setPrototypeOf(this, _EmailLinkError.prototype);
      }
    };
    function isEmailLinkError(err) {
      return err instanceof EmailLinkError;
    }
    var EmailLinkErrorCode = {
      Expired: "expired",
      Failed: "failed",
      ClientMismatch: "client_mismatch"
    };
    var DefaultMessages = Object.freeze({
      InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
      InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
      MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
    });
    function buildErrorThrower({ packageName, customMessages }) {
      let pkg = packageName;
      const messages = {
        ...DefaultMessages,
        ...customMessages
      };
      function buildMessage(rawMessage, replacements) {
        if (!replacements) {
          return `${pkg}: ${rawMessage}`;
        }
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches) {
          const replacement = (replacements[match[1]] || "").toString();
          msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
      }
      return {
        setPackageName({ packageName: packageName2 }) {
          if (typeof packageName2 === "string") {
            pkg = packageName2;
          }
          return this;
        },
        setMessages({ customMessages: customMessages2 }) {
          Object.assign(messages, customMessages2 || {});
          return this;
        },
        throwInvalidPublishableKeyError(params) {
          throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl(params) {
          throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError() {
          throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError() {
          throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError(params) {
          throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw(message) {
          throw new Error(buildMessage(message));
        }
      };
    }
  }
});

// node_modules/@clerk/shared/dist/index.js
var require_dist = __commonJS({
  "node_modules/@clerk/shared/dist/index.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CURRENT_DEV_INSTANCE_SUFFIXES: () => CURRENT_DEV_INSTANCE_SUFFIXES,
      ClerkAPIResponseError: () => ClerkAPIResponseError,
      ClerkRuntimeError: () => ClerkRuntimeError,
      DEV_BROWSER_JWT_KEY: () => DEV_BROWSER_JWT_KEY,
      DEV_OR_STAGING_SUFFIXES: () => DEV_OR_STAGING_SUFFIXES,
      EmailLinkError: () => EmailLinkError,
      EmailLinkErrorCode: () => EmailLinkErrorCode,
      LEGACY_DEV_INSTANCE_SUFFIXES: () => LEGACY_DEV_INSTANCE_SUFFIXES,
      LOCAL_API_URL: () => LOCAL_API_URL,
      LOCAL_ENV_SUFFIXES: () => LOCAL_ENV_SUFFIXES,
      LocalStorageBroadcastChannel: () => LocalStorageBroadcastChannel,
      PROD_API_URL: () => PROD_API_URL,
      Poller: () => Poller,
      STAGING_API_URL: () => STAGING_API_URL,
      STAGING_ENV_SUFFIXES: () => STAGING_ENV_SUFFIXES,
      addClerkPrefix: () => addClerkPrefix,
      addYears: () => addYears,
      apiUrlFromPublishableKey: () => apiUrlFromPublishableKey,
      applyFunctionToObj: () => applyFunctionToObj,
      buildClerkJsScriptAttributes: () => buildClerkJsScriptAttributes2,
      buildErrorThrower: () => buildErrorThrower,
      buildPublishableKey: () => buildPublishableKey,
      callWithRetry: () => callWithRetry,
      camelToSnake: () => camelToSnake,
      cleanDoubleSlashes: () => cleanDoubleSlashes,
      clerkJsScriptUrl: () => clerkJsScriptUrl2,
      colorToSameTypeString: () => colorToSameTypeString,
      createDeferredPromise: () => createDeferredPromise,
      createDevOrStagingUrlCache: () => createDevOrStagingUrlCache,
      createWorkerTimers: () => createWorkerTimers,
      dateTo12HourTime: () => dateTo12HourTime,
      deepCamelToSnake: () => deepCamelToSnake,
      deepSnakeToCamel: () => deepSnakeToCamel,
      deprecated: () => deprecated,
      deprecatedObjectProperty: () => deprecatedObjectProperty,
      deprecatedProperty: () => deprecatedProperty,
      deriveState: () => deriveState,
      differenceInCalendarDays: () => differenceInCalendarDays,
      extension: () => extension,
      extractDevBrowserJWTFromURL: () => extractDevBrowserJWTFromURL,
      fastDeepMergeAndKeep: () => fastDeepMergeAndKeep,
      fastDeepMergeAndReplace: () => fastDeepMergeAndReplace,
      filterProps: () => filterProps,
      formatRelative: () => formatRelative,
      getClerkJsMajorVersionOrTag: () => getClerkJsMajorVersionOrTag,
      getCookieSuffix: () => getCookieSuffix,
      getNonUndefinedValues: () => getNonUndefinedValues,
      getScriptUrl: () => getScriptUrl,
      getSuffixedCookieName: () => getSuffixedCookieName,
      handleValueOrFn: () => handleValueOrFn,
      hasAlpha: () => hasAlpha,
      hasLeadingSlash: () => hasLeadingSlash,
      hasTrailingSlash: () => hasTrailingSlash,
      hexStringToRgbaColor: () => hexStringToRgbaColor,
      iconImageUrl: () => iconImageUrl,
      inBrowser: () => inBrowser,
      is4xxError: () => is4xxError,
      isAbsoluteUrl: () => isAbsoluteUrl,
      isBrowserOnline: () => isBrowserOnline,
      isClerkAPIResponseError: () => isClerkAPIResponseError,
      isClerkRuntimeError: () => isClerkRuntimeError,
      isCurrentDevAccountPortalOrigin: () => isCurrentDevAccountPortalOrigin,
      isDevelopmentEnvironment: () => isDevelopmentEnvironment,
      isDevelopmentFromPublishableKey: () => isDevelopmentFromPublishableKey,
      isDevelopmentFromSecretKey: () => isDevelopmentFromSecretKey,
      isEmailLinkError: () => isEmailLinkError,
      isHSLColor: () => isHSLColor,
      isHttpOrHttps: () => isHttpOrHttps,
      isIPV4Address: () => isIPV4Address,
      isKnownError: () => isKnownError,
      isLegacyDevAccountPortalOrigin: () => isLegacyDevAccountPortalOrigin,
      isMetamaskError: () => isMetamaskError,
      isNetworkError: () => isNetworkError,
      isNonEmptyURL: () => isNonEmptyURL,
      isPasswordPwnedError: () => isPasswordPwnedError,
      isProductionEnvironment: () => isProductionEnvironment,
      isProductionFromPublishableKey: () => isProductionFromPublishableKey,
      isProductionFromSecretKey: () => isProductionFromSecretKey,
      isProxyUrlRelative: () => isProxyUrlRelative,
      isPublishableKey: () => isPublishableKey,
      isRGBColor: () => isRGBColor,
      isStaging: () => isStaging,
      isTestEnvironment: () => isTestEnvironment,
      isTransparent: () => isTransparent,
      isTruthy: () => isTruthy,
      isUnauthorizedError: () => isUnauthorizedError,
      isUserLockedError: () => isUserLockedError,
      isValidBrowser: () => isValidBrowser,
      isValidBrowserOnline: () => isValidBrowserOnline,
      isValidHexString: () => isValidHexString,
      isValidHslaString: () => isValidHslaString,
      isValidProxyUrl: () => isValidProxyUrl,
      isValidRgbaString: () => isValidRgbaString,
      isomorphicAtob: () => isomorphicAtob,
      isomorphicBtoa: () => isomorphicBtoa,
      joinURL: () => joinURL,
      loadClerkJsScript: () => loadClerkJsScript,
      loadScript: () => loadScript,
      logErrorInDevMode: () => logErrorInDevMode,
      logger: () => logger,
      noop: () => noop2,
      normalizeDate: () => normalizeDate,
      parseError: () => parseError,
      parseErrors: () => parseErrors,
      parsePublishableKey: () => parsePublishableKey,
      parseSearchParams: () => parseSearchParams,
      proxyUrlToAbsoluteURL: () => proxyUrlToAbsoluteURL,
      readJSONFile: () => readJSONFile,
      removeUndefined: () => removeUndefined,
      runWithExponentialBackOff: () => runWithExponentialBackOff,
      setClerkJsLoadingErrorPackageName: () => setClerkJsLoadingErrorPackageName2,
      setDevBrowserJWTInURL: () => setDevBrowserJWTInURL,
      snakeToCamel: () => snakeToCamel,
      stringToHslaColor: () => stringToHslaColor,
      stringToSameTypeColor: () => stringToSameTypeColor,
      stripScheme: () => stripScheme,
      titleize: () => titleize,
      toSentence: () => toSentence,
      userAgentIsRobot: () => userAgentIsRobot,
      versionSelector: () => versionSelector,
      withLeadingSlash: () => withLeadingSlash,
      withTrailingSlash: () => withTrailingSlash,
      without: () => without,
      withoutLeadingSlash: () => withoutLeadingSlash,
      withoutTrailingSlash: () => withoutTrailingSlash
    });
    module.exports = __toCommonJS2(src_exports);
    var noop2 = (..._args) => {
    };
    var createDeferredPromise = () => {
      let resolve = noop2;
      let reject = noop2;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
    function isStaging(frontendApi) {
      return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
    }
    var isDevelopmentEnvironment = () => {
      try {
        return true;
      } catch (err) {
      }
      return false;
    };
    var isTestEnvironment = () => {
      try {
        return false;
      } catch (err) {
      }
      return false;
    };
    var isProductionEnvironment = () => {
      try {
        return false;
      } catch (err) {
      }
      return false;
    };
    var logErrorInDevMode = (message) => {
      if (isDevelopmentEnvironment()) {
        console.error(`Clerk: ${message}`);
      }
    };
    var defaultOptions = {
      firstDelay: 125,
      maxDelay: 0,
      timeMultiple: 2,
      shouldRetry: () => true
    };
    var sleep = async (ms) => new Promise((s) => setTimeout(s, ms));
    var createExponentialDelayAsyncFn = (opts) => {
      let timesCalled = 0;
      const calculateDelayInMs = () => {
        const constant = opts.firstDelay;
        const base = opts.timeMultiple;
        const delay = constant * Math.pow(base, timesCalled);
        return Math.min(opts.maxDelay || delay, delay);
      };
      return async () => {
        await sleep(calculateDelayInMs());
        timesCalled++;
      };
    };
    var runWithExponentialBackOff = async (callback, options = {}) => {
      let iterationsCount = 0;
      const { shouldRetry, firstDelay, maxDelay, timeMultiple } = {
        ...defaultOptions,
        ...options
      };
      const delay = createExponentialDelayAsyncFn({ firstDelay, maxDelay, timeMultiple });
      while (true) {
        try {
          return await callback();
        } catch (e) {
          iterationsCount++;
          if (!shouldRetry(e, iterationsCount)) {
            throw e;
          }
          await delay();
        }
      }
    };
    var LEGACY_DEV_INSTANCE_SUFFIXES = [".lcl.dev", ".lclstage.dev", ".lclclerk.com"];
    var CURRENT_DEV_INSTANCE_SUFFIXES = [".accounts.dev", ".accountsstage.dev", ".accounts.lclclerk.com"];
    var DEV_OR_STAGING_SUFFIXES = [
      ".lcl.dev",
      ".stg.dev",
      ".lclstage.dev",
      ".stgstage.dev",
      ".dev.lclclerk.com",
      ".stg.lclclerk.com",
      ".accounts.lclclerk.com",
      "accountsstage.dev",
      "accounts.dev"
    ];
    var LOCAL_ENV_SUFFIXES = [".lcl.dev", "lclstage.dev", ".lclclerk.com", ".accounts.lclclerk.com"];
    var STAGING_ENV_SUFFIXES = [".accountsstage.dev"];
    var LOCAL_API_URL = "https://api.lclclerk.com";
    var STAGING_API_URL = "https://api.clerkstage.dev";
    var PROD_API_URL = "https://api.clerk.com";
    function iconImageUrl(id, format = "svg") {
      return `https://img.clerk.com/static/${id}.${format}`;
    }
    var isomorphicAtob = (data) => {
      if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
      } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data, "base64").toString();
      }
      return data;
    };
    var isomorphicBtoa = (data) => {
      if (typeof btoa !== "undefined" && typeof btoa === "function") {
        return btoa(data);
      } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data).toString("base64");
      }
      return data;
    };
    var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
    var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
    var PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
    function buildPublishableKey(frontendApi) {
      const isDevKey = PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && LEGACY_DEV_INSTANCE_SUFFIXES.some((s) => frontendApi.endsWith(s));
      const keyPrefix = isDevKey ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX;
      return `${keyPrefix}${isomorphicBtoa(`${frontendApi}$`)}`;
    }
    function parsePublishableKey(key, options = {}) {
      key = key || "";
      if (!key || !isPublishableKey(key)) {
        if (options.fatal) {
          throw new Error("Publishable key not valid.");
        }
        return null;
      }
      const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
      let frontendApi = isomorphicAtob(key.split("_")[2]);
      frontendApi = frontendApi.slice(0, -1);
      if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
      } else if (instanceType !== "development" && options.domain) {
        frontendApi = `clerk.${options.domain}`;
      }
      return {
        instanceType,
        frontendApi
      };
    }
    function isPublishableKey(key) {
      key = key || "";
      const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
      const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
      return hasValidPrefix && hasValidFrontendApiPostfix;
    }
    function createDevOrStagingUrlCache() {
      const devOrStagingUrlCache = /* @__PURE__ */ new Map();
      return {
        isDevOrStagingUrl: (url) => {
          if (!url) {
            return false;
          }
          const hostname = typeof url === "string" ? url : url.hostname;
          let res = devOrStagingUrlCache.get(hostname);
          if (res === void 0) {
            res = DEV_OR_STAGING_SUFFIXES.some((s) => hostname.endsWith(s));
            devOrStagingUrlCache.set(hostname, res);
          }
          return res;
        }
      };
    }
    function isDevelopmentFromPublishableKey(apiKey) {
      return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
    }
    function isProductionFromPublishableKey(apiKey) {
      return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
    }
    function isDevelopmentFromSecretKey(apiKey) {
      return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
    }
    function isProductionFromSecretKey(apiKey) {
      return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
    }
    async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
      const data = new TextEncoder().encode(publishableKey);
      const digest = await subtle.digest("sha-1", data);
      const stringDigest = String.fromCharCode(...new Uint8Array(digest));
      return isomorphicBtoa(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
    }
    var getSuffixedCookieName = (cookieName, cookieSuffix) => {
      return `${cookieName}_${cookieSuffix}`;
    };
    var apiUrlFromPublishableKey = (publishableKey) => {
      var _a;
      const frontendApi = (_a = parsePublishableKey(publishableKey)) == null ? void 0 : _a.frontendApi;
      if ((frontendApi == null ? void 0 : frontendApi.startsWith("clerk.")) && LEGACY_DEV_INSTANCE_SUFFIXES.some((suffix) => frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return PROD_API_URL;
      }
      if (LOCAL_ENV_SUFFIXES.some((suffix) => frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return LOCAL_API_URL;
      }
      if (STAGING_ENV_SUFFIXES.some((suffix) => frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return STAGING_API_URL;
      }
      return PROD_API_URL;
    };
    function inBrowser() {
      return typeof window !== "undefined";
    }
    var botAgents = [
      "bot",
      "spider",
      "crawl",
      "APIs-Google",
      "AdsBot",
      "Googlebot",
      "mediapartners",
      "Google Favicon",
      "FeedFetcher",
      "Google-Read-Aloud",
      "DuplexWeb-Google",
      "googleweblight",
      "bing",
      "yandex",
      "baidu",
      "duckduck",
      "yahoo",
      "ecosia",
      "ia_archiver",
      "facebook",
      "instagram",
      "pinterest",
      "reddit",
      "slack",
      "twitter",
      "whatsapp",
      "youtube",
      "semrush"
    ];
    var botAgentRegex = new RegExp(botAgents.join("|"), "i");
    function userAgentIsRobot(userAgent) {
      return !userAgent ? false : botAgentRegex.test(userAgent);
    }
    function isValidBrowser() {
      const navigator2 = inBrowser() ? window == null ? void 0 : window.navigator : null;
      if (!navigator2) {
        return false;
      }
      return !userAgentIsRobot(navigator2 == null ? void 0 : navigator2.userAgent) && !(navigator2 == null ? void 0 : navigator2.webdriver);
    }
    function isBrowserOnline() {
      var _a, _b;
      const navigator2 = inBrowser() ? window == null ? void 0 : window.navigator : null;
      if (!navigator2) {
        return false;
      }
      const isNavigatorOnline = navigator2 == null ? void 0 : navigator2.onLine;
      const isExperimentalConnectionOnline = ((_a = navigator2 == null ? void 0 : navigator2.connection) == null ? void 0 : _a.rtt) !== 0 && ((_b = navigator2 == null ? void 0 : navigator2.connection) == null ? void 0 : _b.downlink) !== 0;
      return isExperimentalConnectionOnline && isNavigatorOnline;
    }
    function isValidBrowserOnline() {
      return isBrowserOnline() && isValidBrowser();
    }
    function wait(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }
    var MAX_NUMBER_OF_RETRIES = 5;
    async function callWithRetry(fn, attempt = 1, maxAttempts = MAX_NUMBER_OF_RETRIES) {
      try {
        return await fn();
      } catch (e) {
        if (attempt >= maxAttempts) {
          throw e;
        }
        await wait(2 ** attempt * 100);
        return callWithRetry(fn, attempt + 1, maxAttempts);
      }
    }
    var IS_HEX_COLOR_REGEX = /^#?([A-F0-9]{6}|[A-F0-9]{3})$/i;
    var IS_RGB_COLOR_REGEX = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;
    var IS_RGBA_COLOR_REGEX = /^rgba\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+(\.\d+)?)\)$/i;
    var IS_HSL_COLOR_REGEX = /^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/i;
    var IS_HSLA_COLOR_REGEX = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(,\s*\d+(\.\d+)?)*\)$/i;
    var isValidHexString = (s) => {
      return !!s.match(IS_HEX_COLOR_REGEX);
    };
    var isValidRgbaString = (s) => {
      return !!(s.match(IS_RGB_COLOR_REGEX) || s.match(IS_RGBA_COLOR_REGEX));
    };
    var isValidHslaString = (s) => {
      return !!s.match(IS_HSL_COLOR_REGEX) || !!s.match(IS_HSLA_COLOR_REGEX);
    };
    var isRGBColor = (c) => {
      return typeof c !== "string" && "r" in c;
    };
    var isHSLColor = (c) => {
      return typeof c !== "string" && "h" in c;
    };
    var isTransparent = (c) => {
      return c === "transparent";
    };
    var hasAlpha = (color) => {
      return typeof color !== "string" && color.a != void 0 && color.a < 1;
    };
    var CLEAN_HSLA_REGEX = /[hsla()]/g;
    var CLEAN_RGBA_REGEX = /[rgba()]/g;
    var stringToHslaColor = (value) => {
      if (value === "transparent") {
        return { h: 0, s: 0, l: 0, a: 0 };
      }
      if (isValidHexString(value)) {
        return hexStringToHslaColor(value);
      }
      if (isValidHslaString(value)) {
        return parseHslaString(value);
      }
      if (isValidRgbaString(value)) {
        return rgbaStringToHslaColor(value);
      }
      return null;
    };
    var stringToSameTypeColor = (value) => {
      value = value.trim();
      if (isValidHexString(value)) {
        return value.startsWith("#") ? value : `#${value}`;
      }
      if (isValidRgbaString(value)) {
        return parseRgbaString(value);
      }
      if (isValidHslaString(value)) {
        return parseHslaString(value);
      }
      if (isTransparent(value)) {
        return value;
      }
      return "";
    };
    var colorToSameTypeString = (color) => {
      if (typeof color === "string" && (isValidHexString(color) || isTransparent(color))) {
        return color;
      }
      if (isRGBColor(color)) {
        return rgbaColorToRgbaString(color);
      }
      if (isHSLColor(color)) {
        return hslaColorToHslaString(color);
      }
      return "";
    };
    var hexStringToRgbaColor = (hex) => {
      hex = hex.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b };
    };
    var rgbaColorToRgbaString = (color) => {
      const { a, b, g, r } = color;
      return color.a === 0 ? "transparent" : color.a != void 0 ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
    };
    var hslaColorToHslaString = (color) => {
      const { h, s, l, a } = color;
      const sPerc = Math.round(s * 100);
      const lPerc = Math.round(l * 100);
      return color.a === 0 ? "transparent" : color.a != void 0 ? `hsla(${h},${sPerc}%,${lPerc}%,${a})` : `hsl(${h},${sPerc}%,${lPerc}%)`;
    };
    var hexStringToHslaColor = (hex) => {
      const rgbaString = colorToSameTypeString(hexStringToRgbaColor(hex));
      return rgbaStringToHslaColor(rgbaString);
    };
    var rgbaStringToHslaColor = (rgba) => {
      const rgbaColor = parseRgbaString(rgba);
      const r = rgbaColor.r / 255;
      const g = rgbaColor.g / 255;
      const b = rgbaColor.b / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s;
      const l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l >= 0.5 ? d / (2 - (max + min)) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d * 60;
            break;
          case g:
            h = ((b - r) / d + 2) * 60;
            break;
          default:
            h = ((r - g) / d + 4) * 60;
            break;
        }
      }
      const res = { h: Math.round(h), s, l };
      const a = rgbaColor.a;
      if (a != void 0) {
        res.a = a;
      }
      return res;
    };
    var parseRgbaString = (str) => {
      const [r, g, b, a] = str.replace(CLEAN_RGBA_REGEX, "").split(",").map((c) => Number.parseFloat(c));
      return { r, g, b, a };
    };
    var parseHslaString = (str) => {
      const [h, s, l, a] = str.replace(CLEAN_HSLA_REGEX, "").split(",").map((c) => Number.parseFloat(c));
      return { h, s: s / 100, l: l / 100, a };
    };
    var MILLISECONDS_IN_DAY = 864e5;
    function dateTo12HourTime(date) {
      if (!date) {
        return "";
      }
      return date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "numeric",
        hour12: true
      });
    }
    function differenceInCalendarDays(a, b, { absolute = true } = {}) {
      if (!a || !b) {
        return 0;
      }
      const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      const diff = Math.floor((utcB - utcA) / MILLISECONDS_IN_DAY);
      return absolute ? Math.abs(diff) : diff;
    }
    function normalizeDate(d) {
      try {
        return new Date(d || /* @__PURE__ */ new Date());
      } catch (e) {
        return /* @__PURE__ */ new Date();
      }
    }
    function formatRelative(props) {
      const { date, relativeTo } = props;
      if (!date || !relativeTo) {
        return null;
      }
      const a = normalizeDate(date);
      const b = normalizeDate(relativeTo);
      const differenceInDays = differenceInCalendarDays(b, a, { absolute: false });
      if (differenceInDays < -6) {
        return { relativeDateCase: "other", date: a };
      }
      if (differenceInDays < -1) {
        return { relativeDateCase: "previous6Days", date: a };
      }
      if (differenceInDays === -1) {
        return { relativeDateCase: "lastDay", date: a };
      }
      if (differenceInDays === 0) {
        return { relativeDateCase: "sameDay", date: a };
      }
      if (differenceInDays === 1) {
        return { relativeDateCase: "nextDay", date: a };
      }
      if (differenceInDays < 7) {
        return { relativeDateCase: "next6Days", date: a };
      }
      return { relativeDateCase: "other", date: a };
    }
    function addYears(initialDate, yearsToAdd) {
      const date = normalizeDate(initialDate);
      date.setFullYear(date.getFullYear() + yearsToAdd);
      return date;
    }
    var displayedWarnings = /* @__PURE__ */ new Set();
    var deprecated = (fnName, warning, key) => {
      const hideWarning = isTestEnvironment() || isProductionEnvironment();
      const messageId = key != null ? key : fnName;
      if (displayedWarnings.has(messageId) || hideWarning) {
        return;
      }
      displayedWarnings.add(messageId);
      console.warn(
        `Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`
      );
    };
    var deprecatedProperty = (cls, propName, warning, isStatic = false) => {
      const target = isStatic ? cls : cls.prototype;
      let value = target[propName];
      Object.defineProperty(target, propName, {
        get() {
          deprecated(propName, warning, `${cls.name}:${propName}`);
          return value;
        },
        set(v) {
          value = v;
        }
      });
    };
    var deprecatedObjectProperty = (obj, propName, warning, key) => {
      let value = obj[propName];
      Object.defineProperty(obj, propName, {
        get() {
          deprecated(propName, warning, key);
          return value;
        },
        set(v) {
          value = v;
        }
      });
    };
    var deriveState = (clerkLoaded, state, initialState) => {
      if (!clerkLoaded && initialState) {
        return deriveFromSsrInitialState(initialState);
      }
      return deriveFromClientSideState(state);
    };
    var deriveFromSsrInitialState = (initialState) => {
      const userId = initialState.userId;
      const user = initialState.user;
      const sessionId = initialState.sessionId;
      const session = initialState.session;
      const organization = initialState.organization;
      const orgId = initialState.orgId;
      const orgRole = initialState.orgRole;
      const orgPermissions = initialState.orgPermissions;
      const orgSlug = initialState.orgSlug;
      const actor = initialState.actor;
      return {
        userId,
        user,
        sessionId,
        session,
        organization,
        orgId,
        orgRole,
        orgPermissions,
        orgSlug,
        actor
      };
    };
    var deriveFromClientSideState = (state) => {
      var _a;
      const userId = state.user ? state.user.id : state.user;
      const user = state.user;
      const sessionId = state.session ? state.session.id : state.session;
      const session = state.session;
      const actor = session == null ? void 0 : session.actor;
      const organization = state.organization;
      const orgId = state.organization ? state.organization.id : state.organization;
      const orgSlug = organization == null ? void 0 : organization.slug;
      const membership = organization ? (_a = user == null ? void 0 : user.organizationMemberships) == null ? void 0 : _a.find((om) => om.organization.id === orgId) : organization;
      const orgPermissions = membership ? membership.permissions : membership;
      const orgRole = membership ? membership.role : membership;
      return {
        userId,
        user,
        sessionId,
        session,
        organization,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        actor
      };
    };
    function isUnauthorizedError(e) {
      var _a, _b;
      const status = e == null ? void 0 : e.status;
      const code = (_b = (_a = e == null ? void 0 : e.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code;
      return code === "authentication_invalid" && status === 401;
    }
    function is4xxError(e) {
      const status = e == null ? void 0 : e.status;
      return !!status && status >= 400 && status < 500;
    }
    function isNetworkError(e) {
      const message = (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "");
      return message.includes("networkerror");
    }
    function isKnownError(error) {
      return isClerkAPIResponseError(error) || isMetamaskError(error) || isClerkRuntimeError(error);
    }
    function isClerkAPIResponseError(err) {
      return "clerkError" in err;
    }
    function isClerkRuntimeError(err) {
      return "clerkRuntimeError" in err;
    }
    function isMetamaskError(err) {
      return "code" in err && [4001, 32602, 32603].includes(err.code) && "message" in err;
    }
    function isUserLockedError(err) {
      var _a, _b;
      return isClerkAPIResponseError(err) && ((_b = (_a = err.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code) === "user_locked";
    }
    function isPasswordPwnedError(err) {
      var _a, _b;
      return isClerkAPIResponseError(err) && ((_b = (_a = err.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code) === "form_password_pwned";
    }
    function parseErrors(data = []) {
      return data.length > 0 ? data.map(parseError) : [];
    }
    function parseError(error) {
      var _a, _b, _c, _d, _e;
      return {
        code: error.code,
        message: error.message,
        longMessage: error.long_message,
        meta: {
          paramName: (_a = error == null ? void 0 : error.meta) == null ? void 0 : _a.param_name,
          sessionId: (_b = error == null ? void 0 : error.meta) == null ? void 0 : _b.session_id,
          emailAddresses: (_c = error == null ? void 0 : error.meta) == null ? void 0 : _c.email_addresses,
          identifiers: (_d = error == null ? void 0 : error.meta) == null ? void 0 : _d.identifiers,
          zxcvbn: (_e = error == null ? void 0 : error.meta) == null ? void 0 : _e.zxcvbn
        }
      };
    }
    var ClerkAPIResponseError = class _ClerkAPIResponseError extends Error {
      constructor(message, { data, status, clerkTraceId }) {
        super(message);
        this.toString = () => {
          let message2 = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map(
            (e) => JSON.stringify(e)
          )}`;
          if (this.clerkTraceId) {
            message2 += `
Clerk Trace ID: ${this.clerkTraceId}`;
          }
          return message2;
        };
        Object.setPrototypeOf(this, _ClerkAPIResponseError.prototype);
        this.status = status;
        this.message = message;
        this.clerkTraceId = clerkTraceId;
        this.clerkError = true;
        this.errors = parseErrors(data);
      }
    };
    var ClerkRuntimeError = class _ClerkRuntimeError extends Error {
      constructor(message, { code }) {
        super(message);
        this.toString = () => {
          return `[${this.name}]
Message:${this.message}`;
        };
        Object.setPrototypeOf(this, _ClerkRuntimeError.prototype);
        this.code = code;
        this.message = message;
        this.clerkRuntimeError = true;
      }
    };
    var EmailLinkError = class _EmailLinkError extends Error {
      constructor(code) {
        super(code);
        this.code = code;
        Object.setPrototypeOf(this, _EmailLinkError.prototype);
      }
    };
    function isEmailLinkError(err) {
      return err instanceof EmailLinkError;
    }
    var EmailLinkErrorCode = {
      Expired: "expired",
      Failed: "failed",
      ClientMismatch: "client_mismatch"
    };
    var DefaultMessages = Object.freeze({
      InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
      InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
      MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
    });
    function buildErrorThrower({ packageName, customMessages }) {
      let pkg = packageName;
      const messages = {
        ...DefaultMessages,
        ...customMessages
      };
      function buildMessage(rawMessage, replacements) {
        if (!replacements) {
          return `${pkg}: ${rawMessage}`;
        }
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches) {
          const replacement = (replacements[match[1]] || "").toString();
          msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
      }
      return {
        setPackageName({ packageName: packageName2 }) {
          if (typeof packageName2 === "string") {
            pkg = packageName2;
          }
          return this;
        },
        setMessages({ customMessages: customMessages2 }) {
          Object.assign(messages, customMessages2 || {});
          return this;
        },
        throwInvalidPublishableKeyError(params) {
          throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl(params) {
          throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError() {
          throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError() {
          throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError(params) {
          throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw(message) {
          throw new Error(buildMessage(message));
        }
      };
    }
    function readJSONFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", function() {
          const result = JSON.parse(reader.result);
          resolve(result);
        });
        reader.addEventListener("error", reject);
        reader.readAsText(file);
      });
    }
    var MimeTypeToExtensionMap = Object.freeze({
      "image/png": "png",
      "image/jpeg": "jpg",
      "image/gif": "gif",
      "image/webp": "webp",
      "image/x-icon": "ico",
      "image/vnd.microsoft.icon": "ico"
    });
    var extension = (mimeType) => {
      return MimeTypeToExtensionMap[mimeType];
    };
    function handleValueOrFn(value, url, defaultValue) {
      if (typeof value === "function") {
        return value(url);
      }
      if (typeof value !== "undefined") {
        return value;
      }
      if (typeof defaultValue !== "undefined") {
        return defaultValue;
      }
      return void 0;
    }
    var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
    var NO_SRC_ERROR = "loadScript cannot be called without a src";
    async function loadScript(src = "", opts) {
      const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
      return new Promise((resolve, reject) => {
        if (!src) {
          reject(NO_SRC_ERROR);
        }
        if (!document || !document.body) {
          reject(NO_DOCUMENT_ERROR);
        }
        const script = document.createElement("script");
        crossOrigin && script.setAttribute("crossorigin", crossOrigin);
        script.async = async || false;
        script.defer = defer || false;
        script.addEventListener("load", () => {
          script.remove();
          resolve(script);
        });
        script.addEventListener("error", () => {
          script.remove();
          reject();
        });
        script.src = src;
        script.nonce = nonce;
        beforeLoad == null ? void 0 : beforeLoad(script);
        document.body.appendChild(script);
      });
    }
    function isValidProxyUrl(key) {
      if (!key) {
        return true;
      }
      return isHttpOrHttps(key) || isProxyUrlRelative(key);
    }
    function isHttpOrHttps(key) {
      return /^http(s)?:\/\//.test(key || "");
    }
    function isProxyUrlRelative(key) {
      return key.startsWith("/");
    }
    function proxyUrlToAbsoluteURL(url) {
      if (!url) {
        return "";
      }
      return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
    }
    function parseSearchParams(queryString = "") {
      if (queryString.startsWith("?")) {
        queryString = queryString.slice(1);
      }
      return new URLSearchParams(queryString);
    }
    function stripScheme(url = "") {
      return (url || "").replace(/^.+:\/\//, "");
    }
    function addClerkPrefix(str) {
      if (!str) {
        return "";
      }
      let regex;
      if (str.match(/^(clerk\.)+\w*$/)) {
        regex = /(clerk\.)*(?=clerk\.)/;
      } else if (str.match(/\.clerk.accounts/)) {
        return str;
      } else {
        regex = /^(clerk\.)*/gi;
      }
      const stripped = str.replace(regex, "");
      return `clerk.${stripped}`;
    }
    var getClerkJsMajorVersionOrTag = (frontendApi, version) => {
      if (!version && isStaging(frontendApi)) {
        return "canary";
      }
      if (!version) {
        return "latest";
      }
      return version.split(".")[0] || "latest";
    };
    var getScriptUrl = (frontendApi, { clerkJSVersion }) => {
      const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
      const major = getClerkJsMajorVersionOrTag(frontendApi, clerkJSVersion);
      return `https://${noSchemeFrontendApi}/npm/@clerk/clerk-js@${clerkJSVersion || major}/dist/clerk.browser.js`;
    };
    function isLegacyDevAccountPortalOrigin(host) {
      return LEGACY_DEV_INSTANCE_SUFFIXES.some((legacyDevSuffix) => {
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
      });
    }
    function isCurrentDevAccountPortalOrigin(host) {
      return CURRENT_DEV_INSTANCE_SUFFIXES.some((currentDevSuffix) => {
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
      });
    }
    var TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
    function hasTrailingSlash(input = "", respectQueryAndFragment) {
      if (!respectQueryAndFragment) {
        return input.endsWith("/");
      }
      return TRAILING_SLASH_RE.test(input);
    }
    function withTrailingSlash(input = "", respectQueryAndFragment) {
      if (!respectQueryAndFragment) {
        return input.endsWith("/") ? input : input + "/";
      }
      if (hasTrailingSlash(input, true)) {
        return input || "/";
      }
      let path = input;
      let fragment = "";
      const fragmentIndex = input.indexOf("#");
      if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
        if (!path) {
          return fragment;
        }
      }
      const [s0, ...s] = path.split("?");
      return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
    }
    function withoutTrailingSlash(input = "", respectQueryAndFragment) {
      if (!respectQueryAndFragment) {
        return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
      }
      if (!hasTrailingSlash(input, true)) {
        return input || "/";
      }
      let path = input;
      let fragment = "";
      const fragmentIndex = input.indexOf("#");
      if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
      }
      const [s0, ...s] = path.split("?");
      return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
    }
    function hasLeadingSlash(input = "") {
      return input.startsWith("/");
    }
    function withoutLeadingSlash(input = "") {
      return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
    }
    function withLeadingSlash(input = "") {
      return hasLeadingSlash(input) ? input : "/" + input;
    }
    function cleanDoubleSlashes(input = "") {
      return input.split("://").map((string_) => string_.replace(/\/{2,}/g, "/")).join("://");
    }
    function isNonEmptyURL(url) {
      return url && url !== "/";
    }
    var JOIN_LEADING_SLASH_RE = /^\.?\//;
    function joinURL(base, ...input) {
      let url = base || "";
      for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
        if (url) {
          const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
          url = withTrailingSlash(url) + _segment;
        } else {
          url = segment;
        }
      }
      return url;
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    var versionSelector = (clerkJSVersion, packageVersion = "5.26.0") => {
      if (clerkJSVersion) {
        return clerkJSVersion;
      }
      const prereleaseTag = getPrereleaseTag(packageVersion);
      if (prereleaseTag) {
        if (prereleaseTag === "snapshot") {
          return "5.26.0";
        }
        return prereleaseTag;
      }
      return getMajorVersion(packageVersion);
    };
    var getPrereleaseTag = (packageVersion) => {
      var _a;
      return (_a = packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)) == null ? void 0 : _a[1];
    };
    var getMajorVersion = (packageVersion) => packageVersion.trim().replace(/^v/, "").split(".")[0];
    var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
    var { isDevOrStagingUrl } = createDevOrStagingUrlCache();
    var errorThrower = buildErrorThrower({ packageName: "@clerk/shared" });
    function setClerkJsLoadingErrorPackageName2(packageName) {
      errorThrower.setPackageName({ packageName });
    }
    var loadClerkJsScript = async (opts) => {
      const existingScript = document.querySelector("script[data-clerk-js-script]");
      if (existingScript) {
        return new Promise((resolve, reject) => {
          existingScript.addEventListener("load", () => {
            resolve(existingScript);
          });
          existingScript.addEventListener("error", () => {
            reject(FAILED_TO_LOAD_ERROR);
          });
        });
      }
      if (!(opts == null ? void 0 : opts.publishableKey)) {
        errorThrower.throwMissingPublishableKeyError();
        return;
      }
      return loadScript(clerkJsScriptUrl2(opts), {
        async: true,
        crossOrigin: "anonymous",
        nonce: opts.nonce,
        beforeLoad: applyClerkJsScriptAttributes(opts)
      }).catch(() => {
        throw new Error(FAILED_TO_LOAD_ERROR);
      });
    };
    var clerkJsScriptUrl2 = (opts) => {
      var _a, _b;
      const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
      if (clerkJSUrl) {
        return clerkJSUrl;
      }
      let scriptHost = "";
      if (!!proxyUrl && isValidProxyUrl(proxyUrl)) {
        scriptHost = proxyUrlToAbsoluteURL(proxyUrl).replace(/http(s)?:\/\//, "");
      } else if (domain && !isDevOrStagingUrl(((_a = parsePublishableKey(publishableKey)) == null ? void 0 : _a.frontendApi) || "")) {
        scriptHost = addClerkPrefix(domain);
      } else {
        scriptHost = ((_b = parsePublishableKey(publishableKey)) == null ? void 0 : _b.frontendApi) || "";
      }
      const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
      const version = versionSelector(clerkJSVersion);
      return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
    };
    var buildClerkJsScriptAttributes2 = (options) => {
      const obj = {};
      if (options.publishableKey) {
        obj["data-clerk-publishable-key"] = options.publishableKey;
      }
      if (options.proxyUrl) {
        obj["data-clerk-proxy-url"] = options.proxyUrl;
      }
      if (options.domain) {
        obj["data-clerk-domain"] = options.domain;
      }
      if (options.nonce) {
        obj.nonce = options.nonce;
      }
      return obj;
    };
    var applyClerkJsScriptAttributes = (options) => (script) => {
      const attributes = buildClerkJsScriptAttributes2(options);
      for (const attribute in attributes) {
        script.setAttribute(attribute, attributes[attribute]);
      }
    };
    var KEY_PREFIX = "__lsbc__";
    var LocalStorageBroadcastChannel = class {
      constructor(name) {
        this.eventTarget = window;
        this.postMessage = (data) => {
          if (typeof window === "undefined") {
            return;
          }
          try {
            window.localStorage.setItem(this.channelKey, JSON.stringify(data));
            window.localStorage.removeItem(this.channelKey);
          } catch (e) {
          }
        };
        this.addEventListener = (eventName, listener) => {
          this.eventTarget.addEventListener(this.prefixEventName(eventName), (e) => {
            listener(e);
          });
        };
        this.setupLocalStorageListener = () => {
          const notifyListeners = (e) => {
            if (e.key !== this.channelKey || !e.newValue) {
              return;
            }
            try {
              const data = JSON.parse(e.newValue || "");
              const event = new MessageEvent(this.prefixEventName("message"), {
                data
              });
              this.eventTarget.dispatchEvent(event);
            } catch (e2) {
            }
          };
          window.addEventListener("storage", notifyListeners);
        };
        this.channelKey = KEY_PREFIX + name;
        this.setupLocalStorageListener();
      }
      prefixEventName(eventName) {
        return this.channelKey + eventName;
      }
    };
    var workerTimers_worker_default = 'const respond=r=>{self.postMessage(r)},workerToTabIds={};self.addEventListener("message",r=>{const e=r.data;switch(e.type){case"setTimeout":workerToTabIds[e.id]=setTimeout(()=>{respond({id:e.id})},e.ms);break;case"clearTimeout":workerToTabIds[e.id]&&(clearTimeout(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break;case"setInterval":workerToTabIds[e.id]=setInterval(()=>{respond({id:e.id})},e.ms);break;case"clearInterval":workerToTabIds[e.id]&&(clearInterval(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break}});\n';
    var createWebWorker = (source, opts = {}) => {
      if (typeof Worker === "undefined") {
        return null;
      }
      try {
        const blob = new Blob([source], { type: "application/javascript; charset=utf-8" });
        const workerScript = globalThis.URL.createObjectURL(blob);
        return new Worker(workerScript, opts);
      } catch (e) {
        console.warn("Clerk: Cannot create worker from blob. Consider adding worker-src blob:; to your CSP");
        return null;
      }
    };
    var fallbackTimers = () => {
      const setTimeout2 = globalThis.setTimeout.bind(globalThis);
      const setInterval = globalThis.setInterval.bind(globalThis);
      const clearTimeout2 = globalThis.clearTimeout.bind(globalThis);
      const clearInterval = globalThis.clearInterval.bind(globalThis);
      return { setTimeout: setTimeout2, setInterval, clearTimeout: clearTimeout2, clearInterval, cleanup: noop2 };
    };
    var createWorkerTimers = () => {
      let id = 0;
      const generateId = () => id++;
      const callbacks = /* @__PURE__ */ new Map();
      const post = (w, p) => w == null ? void 0 : w.postMessage(p);
      const handleMessage = (e) => {
        var _a;
        (_a = callbacks.get(e.data.id)) == null ? void 0 : _a();
      };
      let worker = createWebWorker(workerTimers_worker_default, { name: "clerk-timers" });
      worker == null ? void 0 : worker.addEventListener("message", handleMessage);
      if (!worker) {
        return fallbackTimers();
      }
      const init = () => {
        if (!worker) {
          worker = createWebWorker(workerTimers_worker_default, { name: "clerk-timers" });
          worker == null ? void 0 : worker.addEventListener("message", handleMessage);
        }
      };
      const cleanup = () => {
        if (worker) {
          worker.terminate();
          worker = null;
          callbacks.clear();
        }
      };
      const setTimeout2 = (cb, ms) => {
        init();
        const id2 = generateId();
        callbacks.set(id2, cb);
        post(worker, { type: "setTimeout", id: id2, ms });
        return id2;
      };
      const setInterval = (cb, ms) => {
        init();
        const id2 = generateId();
        callbacks.set(id2, cb);
        post(worker, { type: "setInterval", id: id2, ms });
        return id2;
      };
      const clearTimeout2 = (id2) => {
        init();
        callbacks.delete(id2);
        post(worker, { type: "clearTimeout", id: id2 });
      };
      const clearInterval = (id2) => {
        init();
        callbacks.delete(id2);
        post(worker, { type: "clearInterval", id: id2 });
      };
      return { setTimeout: setTimeout2, setInterval, clearTimeout: clearTimeout2, clearInterval, cleanup };
    };
    function Poller({ delayInMs } = { delayInMs: 1e3 }) {
      const workerTimers = createWorkerTimers();
      let timerId;
      let stopped = false;
      const stop = () => {
        if (timerId) {
          workerTimers.clearTimeout(timerId);
          workerTimers.cleanup();
        }
        stopped = true;
      };
      const run = async (cb) => {
        stopped = false;
        await cb(stop);
        if (stopped) {
          return;
        }
        timerId = workerTimers.setTimeout(() => {
          void run(cb);
        }, delayInMs);
      };
      return { run, stop };
    }
    var toSentence = (items) => {
      if (items.length == 0) {
        return "";
      }
      if (items.length == 1) {
        return items[0];
      }
      let sentence = items.slice(0, -1).join(", ");
      sentence += `, or ${items.slice(-1)}`;
      return sentence;
    };
    var IP_V4_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    function isIPV4Address(str) {
      return IP_V4_ADDRESS_REGEX.test(str || "");
    }
    function titleize(str) {
      const s = str || "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    function snakeToCamel(str) {
      return str ? str.replace(/([-_][a-z])/g, (match) => match.toUpperCase().replace(/-|_/, "")) : "";
    }
    function camelToSnake(str) {
      return str ? str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`) : "";
    }
    var createDeepObjectTransformer = (transform) => {
      const deepTransform = (obj) => {
        if (!obj) {
          return obj;
        }
        if (Array.isArray(obj)) {
          return obj.map((el) => {
            if (typeof el === "object" || Array.isArray(el)) {
              return deepTransform(el);
            }
            return el;
          });
        }
        const copy = { ...obj };
        const keys = Object.keys(copy);
        for (const oldName of keys) {
          const newName = transform(oldName.toString());
          if (newName !== oldName) {
            copy[newName] = copy[oldName];
            delete copy[oldName];
          }
          if (typeof copy[newName] === "object") {
            copy[newName] = deepTransform(copy[newName]);
          }
        }
        return copy;
      };
      return deepTransform;
    };
    var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
    var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
    function isTruthy(value) {
      if (typeof value === `boolean`) {
        return value;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (typeof value === `string`) {
        if (value.toLowerCase() === `true`) {
          return true;
        }
        if (value.toLowerCase() === `false`) {
          return false;
        }
      }
      const number = parseInt(value, 10);
      if (isNaN(number)) {
        return false;
      }
      if (number > 0) {
        return true;
      }
      return false;
    }
    function getNonUndefinedValues(obj) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== void 0) {
          acc[key] = value;
        }
        return acc;
      }, {});
    }
    var without = (obj, ...props) => {
      const copy = { ...obj };
      for (const prop of props) {
        delete copy[prop];
      }
      return copy;
    };
    var removeUndefined = (obj) => {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== void 0 && value !== null) {
          acc[key] = value;
        }
        return acc;
      }, {});
    };
    var applyFunctionToObj = (obj, fn) => {
      const result = {};
      for (const key in obj) {
        result[key] = fn(obj[key], key);
      }
      return result;
    };
    var filterProps = (obj, filter) => {
      const result = {};
      for (const key in obj) {
        if (obj[key] && filter(obj[key])) {
          result[key] = obj[key];
        }
      }
      return result;
    };
    var loggedMessages = /* @__PURE__ */ new Set();
    var logger = {
      /**
       * A custom logger that ensures messages are logged only once.
       * Reduces noise and duplicated messages when logs are in a hot codepath.
       */
      warnOnce: (msg) => {
        if (loggedMessages.has(msg)) {
          return;
        }
        loggedMessages.add(msg);
        console.warn(msg);
      },
      logOnce: (msg) => {
        if (loggedMessages.has(msg)) {
          return;
        }
        console.log(msg);
        loggedMessages.add(msg);
      }
    };
    var DEV_BROWSER_JWT_KEY = "__clerk_db_jwt";
    function setDevBrowserJWTInURL(url, jwt) {
      const resultURL = new URL(url);
      const jwtFromSearch = resultURL.searchParams.get(DEV_BROWSER_JWT_KEY);
      resultURL.searchParams.delete(DEV_BROWSER_JWT_KEY);
      const jwtToSet = jwtFromSearch || jwt;
      if (jwtToSet) {
        resultURL.searchParams.set(DEV_BROWSER_JWT_KEY, jwtToSet);
      }
      return resultURL;
    }
    function extractDevBrowserJWTFromURL(url) {
      const jwt = readDevBrowserJwtFromSearchParams(url);
      const cleanUrl = removeDevBrowserJwt(url);
      if (cleanUrl.href !== url.href && typeof globalThis.history !== "undefined") {
        globalThis.history.replaceState(null, "", removeDevBrowserJwt(url));
      }
      return jwt;
    }
    var readDevBrowserJwtFromSearchParams = (url) => {
      return url.searchParams.get(DEV_BROWSER_JWT_KEY) || "";
    };
    var removeDevBrowserJwt = (url) => {
      return removeDevBrowserJwtFromURLSearchParams(removeLegacyDevBrowserJwt(url));
    };
    var removeDevBrowserJwtFromURLSearchParams = (_url) => {
      const url = new URL(_url);
      url.searchParams.delete(DEV_BROWSER_JWT_KEY);
      return url;
    };
    var removeLegacyDevBrowserJwt = (_url) => {
      const DEV_BROWSER_JWT_MARKER_REGEXP = /__clerk_db_jwt\[(.*)\]/;
      const DEV_BROWSER_JWT_LEGACY_KEY = "__dev_session";
      const url = new URL(_url);
      url.searchParams.delete(DEV_BROWSER_JWT_LEGACY_KEY);
      url.hash = decodeURI(url.hash).replace(DEV_BROWSER_JWT_MARKER_REGEXP, "");
      if (url.href.endsWith("#")) {
        url.hash = "";
      }
      return url;
    };
    var fastDeepMergeAndReplace = (source, target) => {
      if (!source || !target) {
        return;
      }
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
          if (target[key] === void 0) {
            target[key] = new (Object.getPrototypeOf(source[key])).constructor();
          }
          fastDeepMergeAndReplace(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    };
    var fastDeepMergeAndKeep = (source, target) => {
      if (!source || !target) {
        return;
      }
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
          if (target[key] === void 0) {
            target[key] = new (Object.getPrototypeOf(source[key])).constructor();
          }
          fastDeepMergeAndKeep(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key) && target[key] === void 0) {
          target[key] = source[key];
        }
      }
    };
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React2 = require_react();
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState = React2.useState, useEffect2 = React2.useEffect, useLayoutEffect2 = React2.useLayoutEffect, useDebugValue3 = React2.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore3(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React2.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect2(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue3(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore3;
        var useSyncExternalStore$2 = React2.useSyncExternalStore !== void 0 ? React2.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/swr/dist/_internal/index.mjs
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === "boolean" ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (const key of it) {
      if (
        // Skip the special useSWRInfinite and useSWRSubscription keys.
        !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
      ) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key)
      return;
    const [get, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
    const startRevalidate = () => {
      const revalidators = EVENT_REVALIDATORS[key];
      const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
      if (revalidate) {
        delete FETCH[key];
        delete PRELOAD[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get().data);
        }
      }
      return get().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [
      beforeMutationTs,
      0
    ];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isPromiseLike(data)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error)
          throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        set({
          data: committedData,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          const populateCachedData = populateCache(data, committedData);
          set({
            data: populateCachedData,
            error: UNDEFINED,
            _c: UNDEFINED
          });
        } else {
          set({
            data,
            error: UNDEFINED,
            _c: UNDEFINED
          });
        }
      }
    }
    MUTATION[key][1] = getTimestamp();
    Promise.resolve(startRevalidate()).then(() => {
      set({
        _c: UNDEFINED
      });
    });
    if (error) {
      if (throwOnError)
        throw error;
      return;
    }
    return data;
  }
}
var import_react, noop, UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike, table, counter, stableHash, SWRGlobalState, EMPTY_CACHE, INITIAL_CACHE, STR_UNDEFINED, isWindowDefined, isDocumentDefined, hasRequestAnimationFrame, createCacheHelper, online, isOnline, onWindowEvent, offWindowEvent, isVisible, initFocus, initReconnect, preset, defaultConfigOptions, IS_REACT_LEGACY, IS_SERVER, rAF, useIsomorphicLayoutEffect, navigatorConnection, slowConnection, serialize, __timestamp, getTimestamp, FOCUS_EVENT, RECONNECT_EVENT, MUTATE_EVENT, ERROR_REVALIDATE_EVENT, events, revalidateAllKeys, initCache, onErrorRetry, compare, cache, mutate, defaultConfig, mergeConfigs, SWRConfigContext, SWRConfig, INFINITE_PREFIX, enableDevtools, use, setupDevTools, normalize, useSWRConfig, preload, middleware, BUILT_IN_MIDDLEWARE, withArgs, subscribeCallback, withMiddleware;
var init_internal = __esm({
  "node_modules/swr/dist/_internal/index.mjs"() {
    import_react = __toESM(require_react(), 1);
    noop = () => {
    };
    UNDEFINED = /*#__NOINLINE__*/
    noop();
    OBJECT = Object;
    isUndefined = (v) => v === UNDEFINED;
    isFunction = (v) => typeof v == "function";
    mergeObjects = (a, b) => ({
      ...a,
      ...b
    });
    isPromiseLike = (x) => isFunction(x.then);
    table = /* @__PURE__ */ new WeakMap();
    counter = 0;
    stableHash = (arg) => {
      const type = typeof arg;
      const constructor = arg && arg.constructor;
      const isDate = constructor == Date;
      let result;
      let index;
      if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        result = table.get(arg);
        if (result)
          return result;
        result = ++counter + "~";
        table.set(arg, result);
        if (constructor == Array) {
          result = "@";
          for (index = 0; index < arg.length; index++) {
            result += stableHash(arg[index]) + ",";
          }
          table.set(arg, result);
        }
        if (constructor == OBJECT) {
          result = "#";
          const keys = OBJECT.keys(arg).sort();
          while (!isUndefined(index = keys.pop())) {
            if (!isUndefined(arg[index])) {
              result += index + ":" + stableHash(arg[index]) + ",";
            }
          }
          table.set(arg, result);
        }
      } else {
        result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
      }
      return result;
    };
    SWRGlobalState = /* @__PURE__ */ new WeakMap();
    EMPTY_CACHE = {};
    INITIAL_CACHE = {};
    STR_UNDEFINED = "undefined";
    isWindowDefined = typeof window != STR_UNDEFINED;
    isDocumentDefined = typeof document != STR_UNDEFINED;
    hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
    createCacheHelper = (cache2, key) => {
      const state = SWRGlobalState.get(cache2);
      return [
        // Getter
        () => !isUndefined(key) && cache2.get(key) || EMPTY_CACHE,
        // Setter
        (info) => {
          if (!isUndefined(key)) {
            const prev = cache2.get(key);
            if (!(key in INITIAL_CACHE)) {
              INITIAL_CACHE[key] = prev;
            }
            state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
          }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        () => {
          if (!isUndefined(key)) {
            if (key in INITIAL_CACHE)
              return INITIAL_CACHE[key];
          }
          return !isUndefined(key) && cache2.get(key) || EMPTY_CACHE;
        }
      ];
    };
    online = true;
    isOnline = () => online;
    [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
      window.addEventListener.bind(window),
      window.removeEventListener.bind(window)
    ] : [
      noop,
      noop
    ];
    isVisible = () => {
      const visibilityState = isDocumentDefined && document.visibilityState;
      return isUndefined(visibilityState) || visibilityState !== "hidden";
    };
    initFocus = (callback) => {
      if (isDocumentDefined) {
        document.addEventListener("visibilitychange", callback);
      }
      onWindowEvent("focus", callback);
      return () => {
        if (isDocumentDefined) {
          document.removeEventListener("visibilitychange", callback);
        }
        offWindowEvent("focus", callback);
      };
    };
    initReconnect = (callback) => {
      const onOnline = () => {
        online = true;
        callback();
      };
      const onOffline = () => {
        online = false;
      };
      onWindowEvent("online", onOnline);
      onWindowEvent("offline", onOffline);
      return () => {
        offWindowEvent("online", onOnline);
        offWindowEvent("offline", onOffline);
      };
    };
    preset = {
      isOnline,
      isVisible
    };
    defaultConfigOptions = {
      initFocus,
      initReconnect
    };
    IS_REACT_LEGACY = !import_react.default.useId;
    IS_SERVER = !isWindowDefined || "Deno" in window;
    rAF = (f) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
    useIsomorphicLayoutEffect = IS_SERVER ? import_react.useEffect : import_react.useLayoutEffect;
    navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
    slowConnection = !IS_SERVER && navigatorConnection && ([
      "slow-2g",
      "2g"
    ].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
    serialize = (key) => {
      if (isFunction(key)) {
        try {
          key = key();
        } catch (err) {
          key = "";
        }
      }
      const args = key;
      key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
      return [
        key,
        args
      ];
    };
    __timestamp = 0;
    getTimestamp = () => ++__timestamp;
    FOCUS_EVENT = 0;
    RECONNECT_EVENT = 1;
    MUTATE_EVENT = 2;
    ERROR_REVALIDATE_EVENT = 3;
    events = {
      __proto__: null,
      ERROR_REVALIDATE_EVENT,
      FOCUS_EVENT,
      MUTATE_EVENT,
      RECONNECT_EVENT
    };
    revalidateAllKeys = (revalidators, type) => {
      for (const key in revalidators) {
        if (revalidators[key][0])
          revalidators[key][0](type);
      }
    };
    initCache = (provider, options) => {
      if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        const EVENT_REVALIDATORS = {};
        const mutate2 = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = {};
        const subscribe = (key, callback) => {
          const subs = subscriptions[key] || [];
          subscriptions[key] = subs;
          subs.push(callback);
          return () => subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev) => {
          provider.set(key, value);
          const subs = subscriptions[key];
          if (subs) {
            for (const fn of subs) {
              fn(value, prev);
            }
          }
        };
        const initProvider = () => {
          if (!SWRGlobalState.has(provider)) {
            SWRGlobalState.set(provider, [
              EVENT_REVALIDATORS,
              {},
              {},
              {},
              mutate2,
              setter,
              subscribe
            ]);
            if (!IS_SERVER) {
              const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
              const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
              unmount = () => {
                releaseFocus && releaseFocus();
                releaseReconnect && releaseReconnect();
                SWRGlobalState.delete(provider);
              };
            }
          }
        };
        initProvider();
        return [
          provider,
          mutate2,
          initProvider,
          unmount
        ];
      }
      return [
        provider,
        SWRGlobalState.get(provider)[4]
      ];
    };
    onErrorRetry = (_, __, config, revalidate, opts) => {
      const maxRetryCount = config.errorRetryCount;
      const currentRetryCount = opts.retryCount;
      const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
      if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
      }
      setTimeout(revalidate, timeout, opts);
    };
    compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
    [cache, mutate] = initCache(/* @__PURE__ */ new Map());
    defaultConfig = mergeObjects(
      {
        // events
        onLoadingSlow: noop,
        onSuccess: noop,
        onError: noop,
        onErrorRetry,
        onDiscarded: noop,
        // switches
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        revalidateIfStale: true,
        shouldRetryOnError: true,
        // timeouts
        errorRetryInterval: slowConnection ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: slowConnection ? 5e3 : 3e3,
        // providers
        compare,
        isPaused: () => false,
        cache,
        mutate,
        fallback: {}
      },
      // use web preset by default
      preset
    );
    mergeConfigs = (a, b) => {
      const v = mergeObjects(a, b);
      if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
          v.use = u1.concat(u2);
        }
        if (f1 && f2) {
          v.fallback = mergeObjects(f1, f2);
        }
      }
      return v;
    };
    SWRConfigContext = (0, import_react.createContext)({});
    SWRConfig = (props) => {
      const { value } = props;
      const parentConfig = (0, import_react.useContext)(SWRConfigContext);
      const isFunctionalConfig = isFunction(value);
      const config = (0, import_react.useMemo)(() => isFunctionalConfig ? value(parentConfig) : value, [
        isFunctionalConfig,
        parentConfig,
        value
      ]);
      const extendedConfig = (0, import_react.useMemo)(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
        isFunctionalConfig,
        parentConfig,
        config
      ]);
      const provider = config && config.provider;
      const cacheContextRef = (0, import_react.useRef)(UNDEFINED);
      if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
      }
      const cacheContext = cacheContextRef.current;
      if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
      }
      useIsomorphicLayoutEffect(() => {
        if (cacheContext) {
          cacheContext[2] && cacheContext[2]();
          return cacheContext[3];
        }
      }, []);
      return (0, import_react.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
      }));
    };
    INFINITE_PREFIX = "$inf$";
    enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
    use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
    setupDevTools = () => {
      if (enableDevtools) {
        window.__SWR_DEVTOOLS_REACT__ = import_react.default;
      }
    };
    normalize = (args) => {
      return isFunction(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
      ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
      ];
    };
    useSWRConfig = () => {
      return mergeObjects(defaultConfig, (0, import_react.useContext)(SWRConfigContext));
    };
    preload = (key_, fetcher) => {
      const [key, fnArg] = serialize(key_);
      const [, , , PRELOAD] = SWRGlobalState.get(cache);
      if (PRELOAD[key])
        return PRELOAD[key];
      const req = fetcher(fnArg);
      PRELOAD[key] = req;
      return req;
    };
    middleware = (useSWRNext) => (key_, fetcher_, config) => {
      const fetcher = fetcher_ && ((...args) => {
        const [key] = serialize(key_);
        const [, , , PRELOAD] = SWRGlobalState.get(cache);
        if (key.startsWith(INFINITE_PREFIX)) {
          return fetcher_(...args);
        }
        const req = PRELOAD[key];
        if (isUndefined(req))
          return fetcher_(...args);
        delete PRELOAD[key];
        return req;
      });
      return useSWRNext(key_, fetcher, config);
    };
    BUILT_IN_MIDDLEWARE = use.concat(middleware);
    withArgs = (hook) => {
      return function useSWRArgs(...args) {
        const fallbackConfig = useSWRConfig();
        const [key, fn, _config] = normalize(args);
        const config = mergeConfigs(fallbackConfig, _config);
        let next = hook;
        const { use: use4 } = config;
        const middleware2 = (use4 || []).concat(BUILT_IN_MIDDLEWARE);
        for (let i = middleware2.length; i--; ) {
          next = middleware2[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
      };
    };
    subscribeCallback = (key, callbacks, callback) => {
      const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
      keyedRevalidators.push(callback);
      return () => {
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
          keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
          keyedRevalidators.pop();
        }
      };
    };
    withMiddleware = (useSWR3, middleware2) => {
      return (...args) => {
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware2);
        return useSWR3(key, fn, {
          ...config,
          use: uses
        });
      };
    };
    setupDevTools();
  }
});

// node_modules/swr/dist/core/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  SWRConfig: () => SWRConfig2,
  default: () => useSWR,
  mutate: () => mutate,
  preload: () => preload,
  unstable_serialize: () => unstable_serialize,
  useSWRConfig: () => useSWRConfig
});
var import_react2, import_shim, unstable_serialize, use2, WITH_DEDUPE, useSWRHandler, SWRConfig2, useSWR;
var init_index_esm = __esm({
  "node_modules/swr/dist/core/index.esm.js"() {
    import_react2 = __toESM(require_react());
    import_shim = __toESM(require_shim());
    init_internal();
    init_internal();
    unstable_serialize = (key) => serialize(key)[0];
    use2 = import_react2.default.use || ((promise) => {
      if (promise.status === "pending") {
        throw promise;
      } else if (promise.status === "fulfilled") {
        return promise.value;
      } else if (promise.status === "rejected") {
        throw promise.reason;
      } else {
        promise.status = "pending";
        promise.then((v) => {
          promise.status = "fulfilled";
          promise.value = v;
        }, (e) => {
          promise.status = "rejected";
          promise.reason = e;
        });
        throw promise;
      }
    });
    WITH_DEDUPE = {
      dedupe: true
    };
    useSWRHandler = (_key, fetcher, config) => {
      const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
      const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
      const [key, fnArg] = serialize(_key);
      const initialMountedRef = (0, import_react2.useRef)(false);
      const unmountedRef = (0, import_react2.useRef)(false);
      const keyRef = (0, import_react2.useRef)(key);
      const fetcherRef = (0, import_react2.useRef)(fetcher);
      const configRef = (0, import_react2.useRef)(config);
      const getConfig = () => configRef.current;
      const isActive = () => getConfig().isVisible() && getConfig().isOnline();
      const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
      const stateDependencies = (0, import_react2.useRef)({}).current;
      const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
      const isEqual = (prev, current) => {
        for (const _ in stateDependencies) {
          const t = _;
          if (t === "data") {
            if (!compare2(prev[t], current[t])) {
              if (!isUndefined(prev[t])) {
                return false;
              }
              if (!compare2(returnedData, current[t])) {
                return false;
              }
            }
          } else {
            if (current[t] !== prev[t]) {
              return false;
            }
          }
        }
        return true;
      };
      const getSnapshot = (0, import_react2.useMemo)(() => {
        const shouldStartRequest = (() => {
          if (!key)
            return false;
          if (!fetcher)
            return false;
          if (!isUndefined(revalidateOnMount))
            return revalidateOnMount;
          if (getConfig().isPaused())
            return false;
          if (suspense)
            return false;
          if (!isUndefined(revalidateIfStale))
            return revalidateIfStale;
          return true;
        })();
        const getSelectedCache = (state) => {
          const snapshot = mergeObjects(state);
          delete snapshot._k;
          if (!shouldStartRequest) {
            return snapshot;
          }
          return {
            isValidating: true,
            isLoading: true,
            ...snapshot
          };
        };
        const cachedData2 = getCache();
        const initialData = getInitialCache();
        const clientSnapshot = getSelectedCache(cachedData2);
        const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
        let memorizedSnapshot = clientSnapshot;
        return [
          () => {
            const newSnapshot = getSelectedCache(getCache());
            const compareResult = isEqual(newSnapshot, memorizedSnapshot);
            if (compareResult) {
              memorizedSnapshot.data = newSnapshot.data;
              memorizedSnapshot.isLoading = newSnapshot.isLoading;
              memorizedSnapshot.isValidating = newSnapshot.isValidating;
              memorizedSnapshot.error = newSnapshot.error;
              return memorizedSnapshot;
            } else {
              memorizedSnapshot = newSnapshot;
              return newSnapshot;
            }
          },
          () => serverSnapshot
        ];
      }, [
        cache2,
        key
      ]);
      const cached = (0, import_shim.useSyncExternalStore)((0, import_react2.useCallback)(
        (callback) => subscribeCache(key, (current, prev) => {
          if (!isEqual(prev, current))
            callback();
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          cache2,
          key
        ]
      ), getSnapshot[0], getSnapshot[1]);
      const isInitialMount = !initialMountedRef.current;
      const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
      const cachedData = cached.data;
      const data = isUndefined(cachedData) ? fallback : cachedData;
      const error = cached.error;
      const laggyDataRef = (0, import_react2.useRef)(data);
      const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
      const shouldDoInitialRevalidation = (() => {
        if (hasRevalidator && !isUndefined(error))
          return false;
        if (isInitialMount && !isUndefined(revalidateOnMount))
          return revalidateOnMount;
        if (getConfig().isPaused())
          return false;
        if (suspense)
          return isUndefined(data) ? false : revalidateIfStale;
        return isUndefined(data) || revalidateIfStale;
      })();
      const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
      const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
      const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
      const revalidate = (0, import_react2.useCallback)(
        async (revalidateOpts) => {
          const currentFetcher = fetcherRef.current;
          if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
          }
          let newData;
          let startAt;
          let loading = true;
          const opts = revalidateOpts || {};
          const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
          const callbackSafeguard = () => {
            if (IS_REACT_LEGACY) {
              return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
          };
          const finalState = {
            isValidating: false,
            isLoading: false
          };
          const finishRequestAndUpdateState = () => {
            setCache(finalState);
          };
          const cleanupState = () => {
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
              delete FETCH[key];
            }
          };
          const initialState = {
            isValidating: true
          };
          if (isUndefined(getCache().data)) {
            initialState.isLoading = true;
          }
          try {
            if (shouldStartNewRequest) {
              setCache(initialState);
              if (config.loadingTimeout && isUndefined(getCache().data)) {
                setTimeout(() => {
                  if (loading && callbackSafeguard()) {
                    getConfig().onLoadingSlow(key, config);
                  }
                }, config.loadingTimeout);
              }
              FETCH[key] = [
                currentFetcher(fnArg),
                getTimestamp()
              ];
            }
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
              setTimeout(cleanupState, config.dedupingInterval);
            }
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
              if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                  getConfig().onDiscarded(key);
                }
              }
              return false;
            }
            finalState.error = UNDEFINED;
            const mutationInfo = MUTATION[key];
            if (!isUndefined(mutationInfo) && // case 1
            (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
              finishRequestAndUpdateState();
              if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                  getConfig().onDiscarded(key);
                }
              }
              return false;
            }
            const cacheData = getCache().data;
            finalState.data = compare2(cacheData, newData) ? cacheData : newData;
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onSuccess(newData, key, config);
              }
            }
          } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            if (!currentConfig.isPaused()) {
              finalState.error = err;
              if (shouldStartNewRequest && callbackSafeguard()) {
                currentConfig.onError(err, key, currentConfig);
                if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
                  if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                    currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                      const revalidators = EVENT_REVALIDATORS[key];
                      if (revalidators && revalidators[0]) {
                        revalidators[0](events.ERROR_REVALIDATE_EVENT, _opts);
                      }
                    }, {
                      retryCount: (opts.retryCount || 0) + 1,
                      dedupe: true
                    });
                  }
                }
              }
            }
          }
          loading = false;
          finishRequestAndUpdateState();
          return true;
        },
        // `setState` is immutable, and `eventsCallback`, `fnArg`, and
        // `keyValidating` are depending on `key`, so we can exclude them from
        // the deps array.
        //
        // FIXME:
        // `fn` and `config` might be changed during the lifecycle,
        // but they might be changed every render like this.
        // `useSWR('key', () => fetch('/api/'), { suspense: true })`
        // So we omit the values from the deps array
        // even though it might cause unexpected behaviors.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          key,
          cache2
        ]
      );
      const boundMutate = (0, import_react2.useCallback)(
        // Use callback to make sure `keyRef.current` returns latest result every time
        (...args) => {
          return internalMutate(cache2, keyRef.current, ...args);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      useIsomorphicLayoutEffect(() => {
        fetcherRef.current = fetcher;
        configRef.current = config;
        if (!isUndefined(cachedData)) {
          laggyDataRef.current = cachedData;
        }
      });
      useIsomorphicLayoutEffect(() => {
        if (!key)
          return;
        const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        let nextFocusRevalidatedAt = 0;
        const onRevalidate = (type, opts = {}) => {
          if (type == events.FOCUS_EVENT) {
            const now = Date.now();
            if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
              nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
              softRevalidate();
            }
          } else if (type == events.RECONNECT_EVENT) {
            if (getConfig().revalidateOnReconnect && isActive()) {
              softRevalidate();
            }
          } else if (type == events.MUTATE_EVENT) {
            return revalidate();
          } else if (type == events.ERROR_REVALIDATE_EVENT) {
            return revalidate(opts);
          }
          return;
        };
        const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        setCache({
          _k: fnArg
        });
        if (shouldDoInitialRevalidation) {
          if (isUndefined(data) || IS_SERVER) {
            softRevalidate();
          } else {
            rAF(softRevalidate);
          }
        }
        return () => {
          unmountedRef.current = true;
          unsubEvents();
        };
      }, [
        key
      ]);
      useIsomorphicLayoutEffect(() => {
        let timer;
        function next() {
          const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
          if (interval && timer !== -1) {
            timer = setTimeout(execute, interval);
          }
        }
        function execute() {
          if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
            revalidate(WITH_DEDUPE).then(next);
          } else {
            next();
          }
        }
        next();
        return () => {
          if (timer) {
            clearTimeout(timer);
            timer = -1;
          }
        };
      }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
      ]);
      (0, import_react2.useDebugValue)(returnedData);
      if (suspense && isUndefined(data) && key) {
        if (!IS_REACT_LEGACY && IS_SERVER) {
          throw new Error("Fallback data is required when using suspense in SSR.");
        }
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!isUndefined(req)) {
          const promise = boundMutate(req);
          use2(promise);
        }
        if (isUndefined(error)) {
          const promise = revalidate(WITH_DEDUPE);
          if (!isUndefined(returnedData)) {
            promise.status = "fulfilled";
            promise.value = true;
          }
          use2(promise);
        } else {
          throw error;
        }
      }
      return {
        mutate: boundMutate,
        get data() {
          stateDependencies.data = true;
          return returnedData;
        },
        get error() {
          stateDependencies.error = true;
          return error;
        },
        get isValidating() {
          stateDependencies.isValidating = true;
          return isValidating;
        },
        get isLoading() {
          stateDependencies.isLoading = true;
          return isLoading;
        }
      };
    };
    SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
      value: defaultConfig
    });
    useSWR = withArgs(useSWRHandler);
  }
});

// node_modules/swr/dist/infinite/index.esm.js
var index_esm_exports2 = {};
__export(index_esm_exports2, {
  default: () => useSWRInfinite,
  infinite: () => infinite,
  unstable_serialize: () => unstable_serialize2
});
var import_react3, import_shim2, use3, WITH_DEDUPE2, useSWRHandler2, useSWR2, getFirstPageKey, unstable_serialize2, EMPTY_PROMISE, infinite, useSWRInfinite;
var init_index_esm2 = __esm({
  "node_modules/swr/dist/infinite/index.esm.js"() {
    import_react3 = __toESM(require_react());
    import_shim2 = __toESM(require_shim());
    init_internal();
    use3 = import_react3.default.use || ((promise) => {
      if (promise.status === "pending") {
        throw promise;
      } else if (promise.status === "fulfilled") {
        return promise.value;
      } else if (promise.status === "rejected") {
        throw promise.reason;
      } else {
        promise.status = "pending";
        promise.then((v) => {
          promise.status = "fulfilled";
          promise.value = v;
        }, (e) => {
          promise.status = "rejected";
          promise.reason = e;
        });
        throw promise;
      }
    });
    WITH_DEDUPE2 = {
      dedupe: true
    };
    useSWRHandler2 = (_key, fetcher, config) => {
      const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
      const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
      const [key, fnArg] = serialize(_key);
      const initialMountedRef = (0, import_react3.useRef)(false);
      const unmountedRef = (0, import_react3.useRef)(false);
      const keyRef = (0, import_react3.useRef)(key);
      const fetcherRef = (0, import_react3.useRef)(fetcher);
      const configRef = (0, import_react3.useRef)(config);
      const getConfig = () => configRef.current;
      const isActive = () => getConfig().isVisible() && getConfig().isOnline();
      const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
      const stateDependencies = (0, import_react3.useRef)({}).current;
      const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
      const isEqual = (prev, current) => {
        for (const _ in stateDependencies) {
          const t = _;
          if (t === "data") {
            if (!compare2(prev[t], current[t])) {
              if (!isUndefined(prev[t])) {
                return false;
              }
              if (!compare2(returnedData, current[t])) {
                return false;
              }
            }
          } else {
            if (current[t] !== prev[t]) {
              return false;
            }
          }
        }
        return true;
      };
      const getSnapshot = (0, import_react3.useMemo)(() => {
        const shouldStartRequest = (() => {
          if (!key)
            return false;
          if (!fetcher)
            return false;
          if (!isUndefined(revalidateOnMount))
            return revalidateOnMount;
          if (getConfig().isPaused())
            return false;
          if (suspense)
            return false;
          if (!isUndefined(revalidateIfStale))
            return revalidateIfStale;
          return true;
        })();
        const getSelectedCache = (state) => {
          const snapshot = mergeObjects(state);
          delete snapshot._k;
          if (!shouldStartRequest) {
            return snapshot;
          }
          return {
            isValidating: true,
            isLoading: true,
            ...snapshot
          };
        };
        const cachedData2 = getCache();
        const initialData = getInitialCache();
        const clientSnapshot = getSelectedCache(cachedData2);
        const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
        let memorizedSnapshot = clientSnapshot;
        return [
          () => {
            const newSnapshot = getSelectedCache(getCache());
            const compareResult = isEqual(newSnapshot, memorizedSnapshot);
            if (compareResult) {
              memorizedSnapshot.data = newSnapshot.data;
              memorizedSnapshot.isLoading = newSnapshot.isLoading;
              memorizedSnapshot.isValidating = newSnapshot.isValidating;
              memorizedSnapshot.error = newSnapshot.error;
              return memorizedSnapshot;
            } else {
              memorizedSnapshot = newSnapshot;
              return newSnapshot;
            }
          },
          () => serverSnapshot
        ];
      }, [
        cache2,
        key
      ]);
      const cached = (0, import_shim2.useSyncExternalStore)((0, import_react3.useCallback)(
        (callback) => subscribeCache(key, (current, prev) => {
          if (!isEqual(prev, current))
            callback();
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          cache2,
          key
        ]
      ), getSnapshot[0], getSnapshot[1]);
      const isInitialMount = !initialMountedRef.current;
      const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
      const cachedData = cached.data;
      const data = isUndefined(cachedData) ? fallback : cachedData;
      const error = cached.error;
      const laggyDataRef = (0, import_react3.useRef)(data);
      const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
      const shouldDoInitialRevalidation = (() => {
        if (hasRevalidator && !isUndefined(error))
          return false;
        if (isInitialMount && !isUndefined(revalidateOnMount))
          return revalidateOnMount;
        if (getConfig().isPaused())
          return false;
        if (suspense)
          return isUndefined(data) ? false : revalidateIfStale;
        return isUndefined(data) || revalidateIfStale;
      })();
      const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
      const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
      const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
      const revalidate = (0, import_react3.useCallback)(
        async (revalidateOpts) => {
          const currentFetcher = fetcherRef.current;
          if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
          }
          let newData;
          let startAt;
          let loading = true;
          const opts = revalidateOpts || {};
          const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
          const callbackSafeguard = () => {
            if (IS_REACT_LEGACY) {
              return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
          };
          const finalState = {
            isValidating: false,
            isLoading: false
          };
          const finishRequestAndUpdateState = () => {
            setCache(finalState);
          };
          const cleanupState = () => {
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
              delete FETCH[key];
            }
          };
          const initialState = {
            isValidating: true
          };
          if (isUndefined(getCache().data)) {
            initialState.isLoading = true;
          }
          try {
            if (shouldStartNewRequest) {
              setCache(initialState);
              if (config.loadingTimeout && isUndefined(getCache().data)) {
                setTimeout(() => {
                  if (loading && callbackSafeguard()) {
                    getConfig().onLoadingSlow(key, config);
                  }
                }, config.loadingTimeout);
              }
              FETCH[key] = [
                currentFetcher(fnArg),
                getTimestamp()
              ];
            }
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
              setTimeout(cleanupState, config.dedupingInterval);
            }
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
              if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                  getConfig().onDiscarded(key);
                }
              }
              return false;
            }
            finalState.error = UNDEFINED;
            const mutationInfo = MUTATION[key];
            if (!isUndefined(mutationInfo) && // case 1
            (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
              finishRequestAndUpdateState();
              if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                  getConfig().onDiscarded(key);
                }
              }
              return false;
            }
            const cacheData = getCache().data;
            finalState.data = compare2(cacheData, newData) ? cacheData : newData;
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onSuccess(newData, key, config);
              }
            }
          } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            if (!currentConfig.isPaused()) {
              finalState.error = err;
              if (shouldStartNewRequest && callbackSafeguard()) {
                currentConfig.onError(err, key, currentConfig);
                if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
                  if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                    currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                      const revalidators = EVENT_REVALIDATORS[key];
                      if (revalidators && revalidators[0]) {
                        revalidators[0](events.ERROR_REVALIDATE_EVENT, _opts);
                      }
                    }, {
                      retryCount: (opts.retryCount || 0) + 1,
                      dedupe: true
                    });
                  }
                }
              }
            }
          }
          loading = false;
          finishRequestAndUpdateState();
          return true;
        },
        // `setState` is immutable, and `eventsCallback`, `fnArg`, and
        // `keyValidating` are depending on `key`, so we can exclude them from
        // the deps array.
        //
        // FIXME:
        // `fn` and `config` might be changed during the lifecycle,
        // but they might be changed every render like this.
        // `useSWR('key', () => fetch('/api/'), { suspense: true })`
        // So we omit the values from the deps array
        // even though it might cause unexpected behaviors.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          key,
          cache2
        ]
      );
      const boundMutate = (0, import_react3.useCallback)(
        // Use callback to make sure `keyRef.current` returns latest result every time
        (...args) => {
          return internalMutate(cache2, keyRef.current, ...args);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      useIsomorphicLayoutEffect(() => {
        fetcherRef.current = fetcher;
        configRef.current = config;
        if (!isUndefined(cachedData)) {
          laggyDataRef.current = cachedData;
        }
      });
      useIsomorphicLayoutEffect(() => {
        if (!key)
          return;
        const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE2);
        let nextFocusRevalidatedAt = 0;
        const onRevalidate = (type, opts = {}) => {
          if (type == events.FOCUS_EVENT) {
            const now = Date.now();
            if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
              nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
              softRevalidate();
            }
          } else if (type == events.RECONNECT_EVENT) {
            if (getConfig().revalidateOnReconnect && isActive()) {
              softRevalidate();
            }
          } else if (type == events.MUTATE_EVENT) {
            return revalidate();
          } else if (type == events.ERROR_REVALIDATE_EVENT) {
            return revalidate(opts);
          }
          return;
        };
        const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        setCache({
          _k: fnArg
        });
        if (shouldDoInitialRevalidation) {
          if (isUndefined(data) || IS_SERVER) {
            softRevalidate();
          } else {
            rAF(softRevalidate);
          }
        }
        return () => {
          unmountedRef.current = true;
          unsubEvents();
        };
      }, [
        key
      ]);
      useIsomorphicLayoutEffect(() => {
        let timer;
        function next() {
          const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
          if (interval && timer !== -1) {
            timer = setTimeout(execute, interval);
          }
        }
        function execute() {
          if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
            revalidate(WITH_DEDUPE2).then(next);
          } else {
            next();
          }
        }
        next();
        return () => {
          if (timer) {
            clearTimeout(timer);
            timer = -1;
          }
        };
      }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
      ]);
      (0, import_react3.useDebugValue)(returnedData);
      if (suspense && isUndefined(data) && key) {
        if (!IS_REACT_LEGACY && IS_SERVER) {
          throw new Error("Fallback data is required when using suspense in SSR.");
        }
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!isUndefined(req)) {
          const promise = boundMutate(req);
          use3(promise);
        }
        if (isUndefined(error)) {
          const promise = revalidate(WITH_DEDUPE2);
          if (!isUndefined(returnedData)) {
            promise.status = "fulfilled";
            promise.value = true;
          }
          use3(promise);
        } else {
          throw error;
        }
      }
      return {
        mutate: boundMutate,
        get data() {
          stateDependencies.data = true;
          return returnedData;
        },
        get error() {
          stateDependencies.error = true;
          return error;
        },
        get isValidating() {
          stateDependencies.isValidating = true;
          return isValidating;
        },
        get isLoading() {
          stateDependencies.isLoading = true;
          return isLoading;
        }
      };
    };
    OBJECT.defineProperty(SWRConfig, "defaultValue", {
      value: defaultConfig
    });
    useSWR2 = withArgs(useSWRHandler2);
    getFirstPageKey = (getKey) => {
      return serialize(getKey ? getKey(0, null) : null)[0];
    };
    unstable_serialize2 = (getKey) => {
      return INFINITE_PREFIX + getFirstPageKey(getKey);
    };
    EMPTY_PROMISE = Promise.resolve();
    infinite = (useSWRNext) => (getKey, fn, config) => {
      const didMountRef = (0, import_react3.useRef)(false);
      const { cache: cache$1, initialSize = 1, revalidateAll = false, persistSize = false, revalidateFirstPage = true, revalidateOnMount = false, parallel = false } = config;
      const [, , , PRELOAD] = SWRGlobalState.get(cache);
      let infiniteKey;
      try {
        infiniteKey = getFirstPageKey(getKey);
        if (infiniteKey)
          infiniteKey = INFINITE_PREFIX + infiniteKey;
      } catch (err) {
      }
      const [get, set, subscribeCache] = createCacheHelper(cache$1, infiniteKey);
      const getSnapshot = (0, import_react3.useCallback)(() => {
        const size = isUndefined(get()._l) ? initialSize : get()._l;
        return size;
      }, [
        cache$1,
        infiniteKey,
        initialSize
      ]);
      (0, import_shim2.useSyncExternalStore)((0, import_react3.useCallback)(
        (callback) => {
          if (infiniteKey)
            return subscribeCache(infiniteKey, () => {
              callback();
            });
          return () => {
          };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          cache$1,
          infiniteKey
        ]
      ), getSnapshot, getSnapshot);
      const resolvePageSize = (0, import_react3.useCallback)(() => {
        const cachedPageSize = get()._l;
        return isUndefined(cachedPageSize) ? initialSize : cachedPageSize;
      }, [
        infiniteKey,
        initialSize
      ]);
      const lastPageSizeRef = (0, import_react3.useRef)(resolvePageSize());
      useIsomorphicLayoutEffect(() => {
        if (!didMountRef.current) {
          didMountRef.current = true;
          return;
        }
        if (infiniteKey) {
          set({
            _l: persistSize ? lastPageSizeRef.current : resolvePageSize()
          });
        }
      }, [
        infiniteKey,
        cache$1
      ]);
      const shouldRevalidateOnMount = revalidateOnMount && !didMountRef.current;
      const swr = useSWRNext(infiniteKey, async (key) => {
        const forceRevalidateAll = get()._i;
        const shouldRevalidatePage = get()._r;
        set({
          _r: UNDEFINED
        });
        const data = [];
        const pageSize = resolvePageSize();
        const [getCache] = createCacheHelper(cache$1, key);
        const cacheData = getCache().data;
        const revalidators = [];
        let previousPageData = null;
        for (let i = 0; i < pageSize; ++i) {
          const [pageKey, pageArg] = serialize(getKey(i, parallel ? null : previousPageData));
          if (!pageKey) {
            break;
          }
          const [getSWRCache, setSWRCache] = createCacheHelper(cache$1, pageKey);
          let pageData = getSWRCache().data;
          const shouldFetchPage = revalidateAll || forceRevalidateAll || isUndefined(pageData) || revalidateFirstPage && !i && !isUndefined(cacheData) || shouldRevalidateOnMount || cacheData && !isUndefined(cacheData[i]) && !config.compare(cacheData[i], pageData);
          if (fn && (typeof shouldRevalidatePage === "function" ? shouldRevalidatePage(pageData, pageArg) : shouldFetchPage)) {
            const revalidate = async () => {
              const hasPreloadedRequest = pageKey in PRELOAD;
              if (!hasPreloadedRequest) {
                pageData = await fn(pageArg);
              } else {
                const req = PRELOAD[pageKey];
                delete PRELOAD[pageKey];
                pageData = await req;
              }
              setSWRCache({
                data: pageData,
                _k: pageArg
              });
              data[i] = pageData;
            };
            if (parallel) {
              revalidators.push(revalidate);
            } else {
              await revalidate();
            }
          } else {
            data[i] = pageData;
          }
          if (!parallel) {
            previousPageData = pageData;
          }
        }
        if (parallel) {
          await Promise.all(revalidators.map((r) => r()));
        }
        set({
          _i: UNDEFINED
        });
        return data;
      }, config);
      const mutate2 = (0, import_react3.useCallback)(
        // eslint-disable-next-line func-names
        function(data, opts) {
          const options = typeof opts === "boolean" ? {
            revalidate: opts
          } : opts || {};
          const shouldRevalidate = options.revalidate !== false;
          if (!infiniteKey)
            return EMPTY_PROMISE;
          if (shouldRevalidate) {
            if (!isUndefined(data)) {
              set({
                _i: false,
                _r: options.revalidate
              });
            } else {
              set({
                _i: true,
                _r: options.revalidate
              });
            }
          }
          return arguments.length ? swr.mutate(data, {
            ...options,
            revalidate: shouldRevalidate
          }) : swr.mutate();
        },
        // swr.mutate is always the same reference
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          infiniteKey,
          cache$1
        ]
      );
      const setSize = (0, import_react3.useCallback)(
        (arg) => {
          if (!infiniteKey)
            return EMPTY_PROMISE;
          const [, changeSize] = createCacheHelper(cache$1, infiniteKey);
          let size;
          if (isFunction(arg)) {
            size = arg(resolvePageSize());
          } else if (typeof arg == "number") {
            size = arg;
          }
          if (typeof size != "number")
            return EMPTY_PROMISE;
          changeSize({
            _l: size
          });
          lastPageSizeRef.current = size;
          const data = [];
          const [getInfiniteCache] = createCacheHelper(cache$1, infiniteKey);
          let previousPageData = null;
          for (let i = 0; i < size; ++i) {
            const [pageKey] = serialize(getKey(i, previousPageData));
            const [getCache] = createCacheHelper(cache$1, pageKey);
            const pageData = pageKey ? getCache().data : UNDEFINED;
            if (isUndefined(pageData)) {
              return mutate2(getInfiniteCache().data);
            }
            data.push(pageData);
            previousPageData = pageData;
          }
          return mutate2(data);
        },
        // exclude getKey from the dependencies, which isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          infiniteKey,
          cache$1,
          mutate2,
          resolvePageSize
        ]
      );
      return {
        size: resolvePageSize(),
        setSize,
        mutate: mutate2,
        get data() {
          return swr.data;
        },
        get error() {
          return swr.error;
        },
        get isValidating() {
          return swr.isValidating;
        },
        get isLoading() {
          return swr.isLoading;
        }
      };
    };
    useSWRInfinite = withMiddleware(useSWR2, infinite);
  }
});

// node_modules/@clerk/shared/dist/react/index.js
var require_react2 = __commonJS({
  "node_modules/@clerk/shared/dist/react/index.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var react_exports = {};
    __export2(react_exports, {
      ClerkInstanceContext: () => ClerkInstanceContext,
      ClientContext: () => ClientContext,
      OptionsContext: () => OptionsContext,
      OrganizationProvider: () => OrganizationProvider,
      SessionContext: () => SessionContext,
      UserContext: () => UserContext,
      assertContextExists: () => assertContextExists,
      createContextAndHook: () => createContextAndHook,
      isDeeplyEqual: () => isDeeplyEqual,
      useAssertWrappedByClerkProvider: () => useAssertWrappedByClerkProvider,
      useClerk: () => useClerk2,
      useClerkInstanceContext: () => useClerkInstanceContext,
      useClientContext: () => useClientContext,
      useDeepEqualMemo: () => useDeepEqualMemo,
      useOptionsContext: () => useOptionsContext,
      useOrganization: () => useOrganization2,
      useOrganizationContext: () => useOrganizationContext,
      useOrganizationList: () => useOrganizationList2,
      useSafeLayoutEffect: () => useSafeLayoutEffect,
      useSession: () => useSession2,
      useSessionContext: () => useSessionContext,
      useSessionList: () => useSessionList2,
      useUser: () => useUser2,
      useUserContext: () => useUserContext
    });
    module.exports = __toCommonJS2(react_exports);
    var import_react4 = __toESM2(require_react());
    function assertContextExists(contextVal, msgOrCtx) {
      if (!contextVal) {
        throw typeof msgOrCtx === "string" ? new Error(msgOrCtx) : new Error(`${msgOrCtx.displayName} not found`);
      }
    }
    var createContextAndHook = (displayName, options) => {
      const { assertCtxFn = assertContextExists } = options || {};
      const Ctx = import_react4.default.createContext(void 0);
      Ctx.displayName = displayName;
      const useCtx = () => {
        const ctx = import_react4.default.useContext(Ctx);
        assertCtxFn(ctx, `${displayName} not found`);
        return ctx.value;
      };
      const useCtxWithoutGuarantee = () => {
        const ctx = import_react4.default.useContext(Ctx);
        return ctx ? ctx.value : {};
      };
      return [Ctx, useCtx, useCtxWithoutGuarantee];
    };
    var EVENT_METHOD_CALLED = "METHOD_CALLED";
    function eventMethodCalled(method, payload) {
      return {
        event: EVENT_METHOD_CALLED,
        payload: {
          method,
          ...payload
        }
      };
    }
    var import_react22 = __toESM2(require_react());
    var clerk_swr_exports = {};
    __export2(clerk_swr_exports, {
      SWRConfig: () => import_swr.SWRConfig,
      useSWR: () => import_swr.default,
      useSWRInfinite: () => import_infinite.default
    });
    __reExport(clerk_swr_exports, (init_index_esm(), __toCommonJS(index_esm_exports)));
    var import_swr = __toESM2((init_index_esm(), __toCommonJS(index_esm_exports)));
    var import_infinite = __toESM2((init_index_esm2(), __toCommonJS(index_esm_exports2)));
    var [ClerkInstanceContext, useClerkInstanceContext] = createContextAndHook("ClerkInstanceContext");
    var [UserContext, useUserContext] = createContextAndHook("UserContext");
    var [ClientContext, useClientContext] = createContextAndHook("ClientContext");
    var [SessionContext, useSessionContext] = createContextAndHook(
      "SessionContext"
    );
    var OptionsContext = import_react22.default.createContext({});
    function useOptionsContext() {
      const context = import_react22.default.useContext(OptionsContext);
      if (context === void 0) {
        throw new Error("useOptions must be used within an OptionsContext");
      }
      return context;
    }
    var [OrganizationContextInternal, useOrganizationContext] = createContextAndHook("OrganizationContext");
    var OrganizationProvider = ({
      children,
      organization,
      swrConfig
    }) => {
      return /* @__PURE__ */ import_react22.default.createElement(import_swr.SWRConfig, { value: swrConfig }, /* @__PURE__ */ import_react22.default.createElement(
        OrganizationContextInternal.Provider,
        {
          value: {
            value: { organization }
          }
        },
        children
      ));
    };
    function useAssertWrappedByClerkProvider(displayNameOrFn) {
      const ctx = import_react22.default.useContext(ClerkInstanceContext);
      if (!ctx) {
        if (typeof displayNameOrFn === "function") {
          displayNameOrFn();
          return;
        }
        throw new Error(
          `${displayNameOrFn} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
        );
      }
    }
    var import_react32 = require_react();
    function getDifferentKeys(obj1, obj2) {
      const keysSet = new Set(Object.keys(obj2));
      const differentKeysObject = {};
      for (const key1 of Object.keys(obj1)) {
        if (!keysSet.has(key1)) {
          differentKeysObject[key1] = obj1[key1];
        }
      }
      return differentKeysObject;
    }
    var useWithSafeValues = (params, defaultValues) => {
      var _a, _b, _c;
      const shouldUseDefaults = typeof params === "boolean" && params;
      const initialPageRef = (0, import_react32.useRef)(
        shouldUseDefaults ? defaultValues.initialPage : (_a = params == null ? void 0 : params.initialPage) != null ? _a : defaultValues.initialPage
      );
      const pageSizeRef = (0, import_react32.useRef)(shouldUseDefaults ? defaultValues.pageSize : (_b = params == null ? void 0 : params.pageSize) != null ? _b : defaultValues.pageSize);
      const newObj = {};
      for (const key of Object.keys(defaultValues)) {
        newObj[key] = shouldUseDefaults ? defaultValues[key] : (_c = params == null ? void 0 : params[key]) != null ? _c : defaultValues[key];
      }
      return {
        ...newObj,
        initialPage: initialPageRef.current,
        pageSize: pageSizeRef.current
      };
    };
    var cachingSWROptions = {
      dedupingInterval: 1e3 * 60,
      focusThrottleInterval: 1e3 * 60 * 2
    };
    var usePagesOrInfinite = (params, fetcher, config, cacheKeys) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const [paginatedPage, setPaginatedPage] = (0, import_react32.useState)((_a = params.initialPage) != null ? _a : 1);
      const initialPageRef = (0, import_react32.useRef)((_b = params.initialPage) != null ? _b : 1);
      const pageSizeRef = (0, import_react32.useRef)((_c = params.pageSize) != null ? _c : 10);
      const enabled = (_d = config.enabled) != null ? _d : true;
      const triggerInfinite = (_e = config.infinite) != null ? _e : false;
      const keepPreviousData = (_f = config.keepPreviousData) != null ? _f : false;
      const pagesCacheKey = {
        ...cacheKeys,
        ...params,
        initialPage: paginatedPage,
        pageSize: pageSizeRef.current
      };
      const {
        data: swrData,
        isValidating: swrIsValidating,
        isLoading: swrIsLoading,
        error: swrError,
        mutate: swrMutate
      } = (0, import_swr.default)(
        !triggerInfinite && !!fetcher && enabled ? pagesCacheKey : null,
        (cacheKeyParams) => {
          const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
          return fetcher == null ? void 0 : fetcher(requestParams);
        },
        { keepPreviousData, ...cachingSWROptions }
      );
      const {
        data: swrInfiniteData,
        isLoading: swrInfiniteIsLoading,
        isValidating: swrInfiniteIsValidating,
        error: swrInfiniteError,
        size,
        setSize,
        mutate: swrInfiniteMutate
      } = (0, import_infinite.default)(
        (pageIndex) => {
          if (!triggerInfinite || !enabled) {
            return null;
          }
          return {
            ...params,
            ...cacheKeys,
            initialPage: initialPageRef.current + pageIndex,
            pageSize: pageSizeRef.current
          };
        },
        (cacheKeyParams) => {
          const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
          return fetcher == null ? void 0 : fetcher(requestParams);
        },
        cachingSWROptions
      );
      const page = (0, import_react32.useMemo)(() => {
        if (triggerInfinite) {
          return size;
        }
        return paginatedPage;
      }, [triggerInfinite, size, paginatedPage]);
      const fetchPage = (0, import_react32.useCallback)(
        (numberOrgFn) => {
          if (triggerInfinite) {
            void setSize(numberOrgFn);
            return;
          }
          return setPaginatedPage(numberOrgFn);
        },
        [setSize]
      );
      const data = (0, import_react32.useMemo)(() => {
        var _a2, _b2;
        if (triggerInfinite) {
          return (_a2 = swrInfiniteData == null ? void 0 : swrInfiniteData.map((a) => a == null ? void 0 : a.data).flat()) != null ? _a2 : [];
        }
        return (_b2 = swrData == null ? void 0 : swrData.data) != null ? _b2 : [];
      }, [triggerInfinite, swrData, swrInfiniteData]);
      const count = (0, import_react32.useMemo)(() => {
        var _a2, _b2;
        if (triggerInfinite) {
          return ((_a2 = swrInfiniteData == null ? void 0 : swrInfiniteData[(swrInfiniteData == null ? void 0 : swrInfiniteData.length) - 1]) == null ? void 0 : _a2.total_count) || 0;
        }
        return (_b2 = swrData == null ? void 0 : swrData.total_count) != null ? _b2 : 0;
      }, [triggerInfinite, swrData, swrInfiniteData]);
      const isLoading = triggerInfinite ? swrInfiniteIsLoading : swrIsLoading;
      const isFetching = triggerInfinite ? swrInfiniteIsValidating : swrIsValidating;
      const error = (_g = triggerInfinite ? swrInfiniteError : swrError) != null ? _g : null;
      const isError = !!error;
      const fetchNext = (0, import_react32.useCallback)(() => {
        fetchPage((n) => Math.max(0, n + 1));
      }, [fetchPage]);
      const fetchPrevious = (0, import_react32.useCallback)(() => {
        fetchPage((n) => Math.max(0, n - 1));
      }, [fetchPage]);
      const offsetCount = (initialPageRef.current - 1) * pageSizeRef.current;
      const pageCount = Math.ceil((count - offsetCount) / pageSizeRef.current);
      const hasNextPage = count - offsetCount * pageSizeRef.current > page * pageSizeRef.current;
      const hasPreviousPage = (page - 1) * pageSizeRef.current > offsetCount * pageSizeRef.current;
      const setData = triggerInfinite ? (value) => swrInfiniteMutate(value, {
        revalidate: false
      }) : (value) => swrMutate(value, {
        revalidate: false
      });
      const revalidate = triggerInfinite ? () => swrInfiniteMutate() : () => swrMutate();
      return {
        data,
        count,
        error,
        isLoading,
        isFetching,
        isError,
        page,
        pageCount,
        fetchPage,
        fetchNext,
        fetchPrevious,
        hasNextPage,
        hasPreviousPage,
        // Let the hook return type define this type
        revalidate,
        // Let the hook return type define this type
        setData
      };
    };
    var undefinedPaginatedResource = {
      data: void 0,
      count: void 0,
      error: void 0,
      isLoading: false,
      isFetching: false,
      isError: false,
      page: void 0,
      pageCount: void 0,
      fetchPage: void 0,
      fetchNext: void 0,
      fetchPrevious: void 0,
      hasNextPage: false,
      hasPreviousPage: false,
      revalidate: void 0,
      setData: void 0
    };
    var useOrganization2 = (params) => {
      var _a;
      const {
        domains: domainListParams,
        membershipRequests: membershipRequestsListParams,
        memberships: membersListParams,
        invitations: invitationsListParams
      } = params || {};
      useAssertWrappedByClerkProvider("useOrganization");
      const { organization } = useOrganizationContext();
      const session = useSessionContext();
      const domainSafeValues = useWithSafeValues(domainListParams, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false,
        enrollmentMode: void 0
      });
      const membershipRequestSafeValues = useWithSafeValues(membershipRequestsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
      });
      const membersSafeValues = useWithSafeValues(membersListParams, {
        initialPage: 1,
        pageSize: 10,
        role: void 0,
        keepPreviousData: false,
        infinite: false
      });
      const invitationsSafeValues = useWithSafeValues(invitationsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: ["pending"],
        keepPreviousData: false,
        infinite: false
      });
      const clerk = useClerkInstanceContext();
      (_a = clerk.telemetry) == null ? void 0 : _a.record(eventMethodCalled("useOrganization"));
      const domainParams = typeof domainListParams === "undefined" ? void 0 : {
        initialPage: domainSafeValues.initialPage,
        pageSize: domainSafeValues.pageSize,
        enrollmentMode: domainSafeValues.enrollmentMode
      };
      const membershipRequestParams = typeof membershipRequestsListParams === "undefined" ? void 0 : {
        initialPage: membershipRequestSafeValues.initialPage,
        pageSize: membershipRequestSafeValues.pageSize,
        status: membershipRequestSafeValues.status
      };
      const membersParams = typeof membersListParams === "undefined" ? void 0 : {
        initialPage: membersSafeValues.initialPage,
        pageSize: membersSafeValues.pageSize,
        role: membersSafeValues.role
      };
      const invitationsParams = typeof invitationsListParams === "undefined" ? void 0 : {
        initialPage: invitationsSafeValues.initialPage,
        pageSize: invitationsSafeValues.pageSize,
        status: invitationsSafeValues.status
      };
      const domains = usePagesOrInfinite(
        {
          ...domainParams
        },
        organization == null ? void 0 : organization.getDomains,
        {
          keepPreviousData: domainSafeValues.keepPreviousData,
          infinite: domainSafeValues.infinite,
          enabled: !!domainParams
        },
        {
          type: "domains",
          organizationId: organization == null ? void 0 : organization.id
        }
      );
      const membershipRequests = usePagesOrInfinite(
        {
          ...membershipRequestParams
        },
        organization == null ? void 0 : organization.getMembershipRequests,
        {
          keepPreviousData: membershipRequestSafeValues.keepPreviousData,
          infinite: membershipRequestSafeValues.infinite,
          enabled: !!membershipRequestParams
        },
        {
          type: "membershipRequests",
          organizationId: organization == null ? void 0 : organization.id
        }
      );
      const memberships = usePagesOrInfinite(
        membersParams || {},
        organization == null ? void 0 : organization.getMemberships,
        {
          keepPreviousData: membersSafeValues.keepPreviousData,
          infinite: membersSafeValues.infinite,
          enabled: !!membersParams
        },
        {
          type: "members",
          organizationId: organization == null ? void 0 : organization.id
        }
      );
      const invitations = usePagesOrInfinite(
        {
          ...invitationsParams
        },
        organization == null ? void 0 : organization.getInvitations,
        {
          keepPreviousData: invitationsSafeValues.keepPreviousData,
          infinite: invitationsSafeValues.infinite,
          enabled: !!invitationsParams
        },
        {
          type: "invitations",
          organizationId: organization == null ? void 0 : organization.id
        }
      );
      if (organization === void 0) {
        return {
          isLoaded: false,
          organization: void 0,
          membership: void 0,
          domains: undefinedPaginatedResource,
          membershipRequests: undefinedPaginatedResource,
          memberships: undefinedPaginatedResource,
          invitations: undefinedPaginatedResource
        };
      }
      if (organization === null) {
        return {
          isLoaded: true,
          organization: null,
          membership: null,
          domains: null,
          membershipRequests: null,
          memberships: null,
          invitations: null
        };
      }
      if (!clerk.loaded && organization) {
        return {
          isLoaded: true,
          organization,
          membership: void 0,
          domains: undefinedPaginatedResource,
          membershipRequests: undefinedPaginatedResource,
          memberships: undefinedPaginatedResource,
          invitations: undefinedPaginatedResource
        };
      }
      return {
        isLoaded: clerk.loaded,
        organization,
        membership: getCurrentOrganizationMembership(session.user.organizationMemberships, organization.id),
        // your membership in the current org
        domains,
        membershipRequests,
        memberships,
        invitations
      };
    };
    function getCurrentOrganizationMembership(organizationMemberships, activeOrganizationId) {
      return organizationMemberships.find(
        (organizationMembership) => organizationMembership.organization.id === activeOrganizationId
      );
    }
    var undefinedPaginatedResource2 = {
      data: void 0,
      count: void 0,
      error: void 0,
      isLoading: false,
      isFetching: false,
      isError: false,
      page: void 0,
      pageCount: void 0,
      fetchPage: void 0,
      fetchNext: void 0,
      fetchPrevious: void 0,
      hasNextPage: false,
      hasPreviousPage: false,
      revalidate: void 0,
      setData: void 0
    };
    var useOrganizationList2 = (params) => {
      var _a;
      const { userMemberships, userInvitations, userSuggestions } = params || {};
      useAssertWrappedByClerkProvider("useOrganizationList");
      const userMembershipsSafeValues = useWithSafeValues(userMemberships, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false
      });
      const userInvitationsSafeValues = useWithSafeValues(userInvitations, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
      });
      const userSuggestionsSafeValues = useWithSafeValues(userSuggestions, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
      });
      const clerk = useClerkInstanceContext();
      const user = useUserContext();
      (_a = clerk.telemetry) == null ? void 0 : _a.record(eventMethodCalled("useOrganizationList"));
      const userMembershipsParams = typeof userMemberships === "undefined" ? void 0 : {
        initialPage: userMembershipsSafeValues.initialPage,
        pageSize: userMembershipsSafeValues.pageSize
      };
      const userInvitationsParams = typeof userInvitations === "undefined" ? void 0 : {
        initialPage: userInvitationsSafeValues.initialPage,
        pageSize: userInvitationsSafeValues.pageSize,
        status: userInvitationsSafeValues.status
      };
      const userSuggestionsParams = typeof userSuggestions === "undefined" ? void 0 : {
        initialPage: userSuggestionsSafeValues.initialPage,
        pageSize: userSuggestionsSafeValues.pageSize,
        status: userSuggestionsSafeValues.status
      };
      const isClerkLoaded = !!(clerk.loaded && user);
      const memberships = usePagesOrInfinite(
        userMembershipsParams || {},
        user == null ? void 0 : user.getOrganizationMemberships,
        {
          keepPreviousData: userMembershipsSafeValues.keepPreviousData,
          infinite: userMembershipsSafeValues.infinite,
          enabled: !!userMembershipsParams
        },
        {
          type: "userMemberships",
          userId: user == null ? void 0 : user.id
        }
      );
      const invitations = usePagesOrInfinite(
        {
          ...userInvitationsParams
        },
        user == null ? void 0 : user.getOrganizationInvitations,
        {
          keepPreviousData: userInvitationsSafeValues.keepPreviousData,
          infinite: userInvitationsSafeValues.infinite,
          enabled: !!userInvitationsParams
        },
        {
          type: "userInvitations",
          userId: user == null ? void 0 : user.id
        }
      );
      const suggestions = usePagesOrInfinite(
        {
          ...userSuggestionsParams
        },
        user == null ? void 0 : user.getOrganizationSuggestions,
        {
          keepPreviousData: userSuggestionsSafeValues.keepPreviousData,
          infinite: userSuggestionsSafeValues.infinite,
          enabled: !!userSuggestionsParams
        },
        {
          type: "userSuggestions",
          userId: user == null ? void 0 : user.id
        }
      );
      if (!isClerkLoaded) {
        return {
          isLoaded: false,
          createOrganization: void 0,
          setActive: void 0,
          userMemberships: undefinedPaginatedResource2,
          userInvitations: undefinedPaginatedResource2,
          userSuggestions: undefinedPaginatedResource2
        };
      }
      return {
        isLoaded: isClerkLoaded,
        setActive: clerk.setActive,
        createOrganization: clerk.createOrganization,
        userMemberships: memberships,
        userInvitations: invitations,
        userSuggestions: suggestions
      };
    };
    var import_react42 = __toESM2(require_react());
    var useSafeLayoutEffect = typeof window !== "undefined" ? import_react42.default.useLayoutEffect : import_react42.default.useEffect;
    var useSession2 = () => {
      useAssertWrappedByClerkProvider("useSession");
      const session = useSessionContext();
      if (session === void 0) {
        return { isLoaded: false, isSignedIn: void 0, session: void 0 };
      }
      if (session === null) {
        return { isLoaded: true, isSignedIn: false, session: null };
      }
      return { isLoaded: true, isSignedIn: true, session };
    };
    var useSessionList2 = () => {
      useAssertWrappedByClerkProvider("useSessionList");
      const isomorphicClerk = useClerkInstanceContext();
      const client = useClientContext();
      if (!client) {
        return { isLoaded: false, sessions: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        sessions: client.sessions,
        setActive: isomorphicClerk.setActive
      };
    };
    function useUser2() {
      useAssertWrappedByClerkProvider("useUser");
      const user = useUserContext();
      if (user === void 0) {
        return { isLoaded: false, isSignedIn: void 0, user: void 0 };
      }
      if (user === null) {
        return { isLoaded: true, isSignedIn: false, user: null };
      }
      return { isLoaded: true, isSignedIn: true, user };
    }
    var useClerk2 = () => {
      useAssertWrappedByClerkProvider("useClerk");
      return useClerkInstanceContext();
    };
    var has = Object.prototype.hasOwnProperty;
    function find(iter, tar, key) {
      for (key of iter.keys()) {
        if (dequal(key, tar))
          return key;
      }
    }
    function dequal(foo, bar) {
      var ctor, len, tmp;
      if (foo === bar)
        return true;
      if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date)
          return foo.getTime() === bar.getTime();
        if (ctor === RegExp)
          return foo.toString() === bar.toString();
        if (ctor === Array) {
          if ((len = foo.length) === bar.length) {
            while (len-- && dequal(foo[len], bar[len]))
              ;
          }
          return len === -1;
        }
        if (ctor === Set) {
          if (foo.size !== bar.size) {
            return false;
          }
          for (len of foo) {
            tmp = len;
            if (tmp && typeof tmp === "object") {
              tmp = find(bar, tmp);
              if (!tmp)
                return false;
            }
            if (!bar.has(tmp))
              return false;
          }
          return true;
        }
        if (ctor === Map) {
          if (foo.size !== bar.size) {
            return false;
          }
          for (len of foo) {
            tmp = len[0];
            if (tmp && typeof tmp === "object") {
              tmp = find(bar, tmp);
              if (!tmp)
                return false;
            }
            if (!dequal(len[1], bar.get(tmp))) {
              return false;
            }
          }
          return true;
        }
        if (ctor === ArrayBuffer) {
          foo = new Uint8Array(foo);
          bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
          if ((len = foo.byteLength) === bar.byteLength) {
            while (len-- && foo.getInt8(len) === bar.getInt8(len))
              ;
          }
          return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
          if ((len = foo.byteLength) === bar.byteLength) {
            while (len-- && foo[len] === bar[len])
              ;
          }
          return len === -1;
        }
        if (!ctor || typeof foo === "object") {
          len = 0;
          for (ctor in foo) {
            if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
              return false;
            if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
              return false;
          }
          return Object.keys(bar).length === len;
        }
      }
      return foo !== foo && bar !== bar;
    }
    var import_react5 = __toESM2(require_react());
    var useDeepEqualMemoize = (value) => {
      const ref = import_react5.default.useRef(value);
      if (!dequal(value, ref.current)) {
        ref.current = value;
      }
      return import_react5.default.useMemo(() => ref.current, [ref.current]);
    };
    var useDeepEqualMemo = (factory, dependencyArray) => {
      return import_react5.default.useMemo(factory, useDeepEqualMemoize(dependencyArray));
    };
    var isDeeplyEqual = dequal;
  }
});

// node_modules/@clerk/shared/dist/authorization.js
var require_authorization = __commonJS({
  "node_modules/@clerk/shared/dist/authorization.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var authorization_exports = {};
    __export2(authorization_exports, {
      createCheckAuthorization: () => createCheckAuthorization
    });
    module.exports = __toCommonJS2(authorization_exports);
    var TYPES_TO_OBJECTS = {
      veryStrict: {
        afterMinutes: 10,
        level: "multiFactor"
      },
      strict: {
        afterMinutes: 10,
        level: "secondFactor"
      },
      moderate: {
        afterMinutes: 60,
        level: "secondFactor"
      },
      lax: {
        afterMinutes: 1440,
        level: "secondFactor"
      }
    };
    var ALLOWED_LEVELS = /* @__PURE__ */ new Set(["firstFactor", "secondFactor", "multiFactor"]);
    var ALLOWED_TYPES = /* @__PURE__ */ new Set(["veryStrict", "strict", "moderate", "lax"]);
    var isValidMaxAge = (maxAge) => typeof maxAge === "number" && maxAge > 0;
    var isValidLevel = (level) => ALLOWED_LEVELS.has(level);
    var isValidVerificationType = (type) => ALLOWED_TYPES.has(type);
    var checkOrgAuthorization = (params, options) => {
      const { orgId, orgRole, orgPermissions } = options;
      if (!params.role && !params.permission) {
        return null;
      }
      if (!orgId || !orgRole || !orgPermissions) {
        return null;
      }
      if (params.permission) {
        return orgPermissions.includes(params.permission);
      }
      if (params.role) {
        return orgRole === params.role;
      }
      return null;
    };
    var validateReverificationConfig = (config) => {
      const convertConfigToObject = (config2) => {
        if (typeof config2 === "string") {
          return TYPES_TO_OBJECTS[config2];
        }
        return config2;
      };
      if (typeof config === "string" && isValidVerificationType(config)) {
        return convertConfigToObject.bind(null, config);
      }
      if (typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes)) {
        return convertConfigToObject.bind(null, config);
      }
      return false;
    };
    var checkStepUpAuthorization = (params, { __experimental_factorVerificationAge }) => {
      if (!params.__experimental_reverification || !__experimental_factorVerificationAge) {
        return null;
      }
      const isValidReverification = validateReverificationConfig(params.__experimental_reverification);
      if (!isValidReverification) {
        return null;
      }
      const { level, afterMinutes } = isValidReverification();
      const [factor1Age, factor2Age] = __experimental_factorVerificationAge;
      const isValidFactor1 = factor1Age !== -1 ? afterMinutes > factor1Age : null;
      const isValidFactor2 = factor2Age !== -1 ? afterMinutes > factor2Age : null;
      switch (level) {
        case "firstFactor":
          return isValidFactor1;
        case "secondFactor":
          return factor2Age !== -1 ? isValidFactor2 : isValidFactor1;
        case "multiFactor":
          return factor2Age === -1 ? isValidFactor1 : isValidFactor1 && isValidFactor2;
      }
    };
    var createCheckAuthorization = (options) => {
      return (params) => {
        if (!options.userId) {
          return false;
        }
        const orgAuthorization = checkOrgAuthorization(params, options);
        const stepUpAuthorization = checkStepUpAuthorization(params, options);
        if ([orgAuthorization, stepUpAuthorization].some((a) => a === null)) {
          return [orgAuthorization, stepUpAuthorization].some((a) => a === true);
        }
        return [orgAuthorization, stepUpAuthorization].every((a) => a === true);
      };
    };
  }
});

// node_modules/@clerk/shared/dist/telemetry.js
var require_telemetry = __commonJS({
  "node_modules/@clerk/shared/dist/telemetry.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __typeError = (msg) => {
      throw TypeError(msg);
    };
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
    var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
    var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
    var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
    var telemetry_exports = {};
    __export2(telemetry_exports, {
      TelemetryCollector: () => TelemetryCollector,
      eventComponentMounted: () => eventComponentMounted,
      eventMethodCalled: () => eventMethodCalled,
      eventPrebuiltComponentMounted: () => eventPrebuiltComponentMounted
    });
    module.exports = __toCommonJS2(telemetry_exports);
    var isomorphicAtob = (data) => {
      if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
      } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data, "base64").toString();
      }
      return data;
    };
    var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
    var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
    function parsePublishableKey(key, options = {}) {
      key = key || "";
      if (!key || !isPublishableKey(key)) {
        if (options.fatal) {
          throw new Error("Publishable key not valid.");
        }
        return null;
      }
      const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
      let frontendApi = isomorphicAtob(key.split("_")[2]);
      frontendApi = frontendApi.slice(0, -1);
      if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
      } else if (instanceType !== "development" && options.domain) {
        frontendApi = `clerk.${options.domain}`;
      }
      return {
        instanceType,
        frontendApi
      };
    }
    function isPublishableKey(key) {
      key = key || "";
      const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
      const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
      return hasValidPrefix && hasValidFrontendApiPostfix;
    }
    function snakeToCamel(str) {
      return str ? str.replace(/([-_][a-z])/g, (match) => match.toUpperCase().replace(/-|_/, "")) : "";
    }
    function camelToSnake(str) {
      return str ? str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`) : "";
    }
    var createDeepObjectTransformer = (transform) => {
      const deepTransform = (obj) => {
        if (!obj) {
          return obj;
        }
        if (Array.isArray(obj)) {
          return obj.map((el) => {
            if (typeof el === "object" || Array.isArray(el)) {
              return deepTransform(el);
            }
            return el;
          });
        }
        const copy = { ...obj };
        const keys = Object.keys(copy);
        for (const oldName of keys) {
          const newName = transform(oldName.toString());
          if (newName !== oldName) {
            copy[newName] = copy[oldName];
            delete copy[oldName];
          }
          if (typeof copy[newName] === "object") {
            copy[newName] = deepTransform(copy[newName]);
          }
        }
        return copy;
      };
      return deepTransform;
    };
    var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
    var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
    function isTruthy(value) {
      if (typeof value === `boolean`) {
        return value;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (typeof value === `string`) {
        if (value.toLowerCase() === `true`) {
          return true;
        }
        if (value.toLowerCase() === `false`) {
          return false;
        }
      }
      const number = parseInt(value, 10);
      if (isNaN(number)) {
        return false;
      }
      if (number > 0) {
        return true;
      }
      return false;
    }
    var DEFAULT_CACHE_TTL_MS = 864e5;
    var _storageKey;
    var _cacheTtl;
    var _TelemetryEventThrottler_instances;
    var generateKey_fn;
    var cache_get;
    var isValidBrowser_get;
    var TelemetryEventThrottler = class {
      constructor() {
        __privateAdd(this, _TelemetryEventThrottler_instances);
        __privateAdd(this, _storageKey, "clerk_telemetry_throttler");
        __privateAdd(this, _cacheTtl, DEFAULT_CACHE_TTL_MS);
      }
      isEventThrottled(payload) {
        var _a;
        if (!__privateGet(this, _TelemetryEventThrottler_instances, isValidBrowser_get)) {
          return false;
        }
        const now = Date.now();
        const key = __privateMethod(this, _TelemetryEventThrottler_instances, generateKey_fn).call(this, payload);
        const entry = (_a = __privateGet(this, _TelemetryEventThrottler_instances, cache_get)) == null ? void 0 : _a[key];
        if (!entry) {
          const updatedCache = {
            ...__privateGet(this, _TelemetryEventThrottler_instances, cache_get),
            [key]: now
          };
          localStorage.setItem(__privateGet(this, _storageKey), JSON.stringify(updatedCache));
        }
        const shouldInvalidate = entry && now - entry > __privateGet(this, _cacheTtl);
        if (shouldInvalidate) {
          const updatedCache = __privateGet(this, _TelemetryEventThrottler_instances, cache_get);
          delete updatedCache[key];
          localStorage.setItem(__privateGet(this, _storageKey), JSON.stringify(updatedCache));
        }
        return !!entry;
      }
    };
    _storageKey = /* @__PURE__ */ new WeakMap();
    _cacheTtl = /* @__PURE__ */ new WeakMap();
    _TelemetryEventThrottler_instances = /* @__PURE__ */ new WeakSet();
    generateKey_fn = function(event) {
      const { sk: _sk, pk: _pk, payload, ...rest } = event;
      const sanitizedEvent = {
        ...payload,
        ...rest
      };
      return JSON.stringify(
        Object.keys({
          ...payload,
          ...rest
        }).sort().map((key) => sanitizedEvent[key])
      );
    };
    cache_get = function() {
      const cacheString = localStorage.getItem(__privateGet(this, _storageKey));
      if (!cacheString) {
        return {};
      }
      return JSON.parse(cacheString);
    };
    isValidBrowser_get = function() {
      if (typeof window === "undefined") {
        return false;
      }
      const storage = window.localStorage;
      if (!storage) {
        return false;
      }
      try {
        const testKey = "test";
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
      } catch (err) {
        const isQuotaExceededError = err instanceof DOMException && // Check error names for different browsers
        (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED");
        if (isQuotaExceededError && storage.length > 0) {
          storage.removeItem(__privateGet(this, _storageKey));
        }
        return false;
      }
    };
    var DEFAULT_CONFIG = {
      samplingRate: 1,
      maxBufferSize: 5,
      // Production endpoint: https://clerk-telemetry.com
      // Staging endpoint: https://staging.clerk-telemetry.com
      // Local: http://localhost:8787
      endpoint: "https://clerk-telemetry.com"
    };
    var _config;
    var _eventThrottler;
    var _metadata;
    var _buffer;
    var _pendingFlush;
    var _TelemetryCollector_instances;
    var shouldRecord_fn;
    var shouldBeSampled_fn;
    var scheduleFlush_fn;
    var flush_fn;
    var logEvent_fn;
    var getSDKMetadata_fn;
    var preparePayload_fn;
    var TelemetryCollector = class {
      constructor(options) {
        __privateAdd(this, _TelemetryCollector_instances);
        __privateAdd(this, _config);
        __privateAdd(this, _eventThrottler);
        __privateAdd(this, _metadata, {});
        __privateAdd(this, _buffer, []);
        __privateAdd(this, _pendingFlush);
        var _a, _b, _c, _d, _e, _f;
        __privateSet(this, _config, {
          maxBufferSize: (_a = options.maxBufferSize) != null ? _a : DEFAULT_CONFIG.maxBufferSize,
          samplingRate: (_b = options.samplingRate) != null ? _b : DEFAULT_CONFIG.samplingRate,
          disabled: (_c = options.disabled) != null ? _c : false,
          debug: (_d = options.debug) != null ? _d : false,
          endpoint: DEFAULT_CONFIG.endpoint
        });
        if (!options.clerkVersion && typeof window === "undefined") {
          __privateGet(this, _metadata).clerkVersion = "";
        } else {
          __privateGet(this, _metadata).clerkVersion = (_e = options.clerkVersion) != null ? _e : "";
        }
        __privateGet(this, _metadata).sdk = options.sdk;
        __privateGet(this, _metadata).sdkVersion = options.sdkVersion;
        __privateGet(this, _metadata).publishableKey = (_f = options.publishableKey) != null ? _f : "";
        const parsedKey = parsePublishableKey(options.publishableKey);
        if (parsedKey) {
          __privateGet(this, _metadata).instanceType = parsedKey.instanceType;
        }
        if (options.secretKey) {
          __privateGet(this, _metadata).secretKey = options.secretKey.substring(0, 16);
        }
        __privateSet(this, _eventThrottler, new TelemetryEventThrottler());
      }
      get isEnabled() {
        var _a;
        if (__privateGet(this, _metadata).instanceType !== "development") {
          return false;
        }
        if (__privateGet(this, _config).disabled || typeof process !== "undefined" && isTruthy(process.env.CLERK_TELEMETRY_DISABLED)) {
          return false;
        }
        if (typeof window !== "undefined" && !!((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.webdriver)) {
          return false;
        }
        return true;
      }
      get isDebug() {
        return __privateGet(this, _config).debug || typeof process !== "undefined" && isTruthy(process.env.CLERK_TELEMETRY_DEBUG);
      }
      record(event) {
        const preparedPayload = __privateMethod(this, _TelemetryCollector_instances, preparePayload_fn).call(this, event.event, event.payload);
        __privateMethod(this, _TelemetryCollector_instances, logEvent_fn).call(this, preparedPayload.event, preparedPayload);
        if (!__privateMethod(this, _TelemetryCollector_instances, shouldRecord_fn).call(this, preparedPayload, event.eventSamplingRate)) {
          return;
        }
        __privateGet(this, _buffer).push(preparedPayload);
        __privateMethod(this, _TelemetryCollector_instances, scheduleFlush_fn).call(this);
      }
    };
    _config = /* @__PURE__ */ new WeakMap();
    _eventThrottler = /* @__PURE__ */ new WeakMap();
    _metadata = /* @__PURE__ */ new WeakMap();
    _buffer = /* @__PURE__ */ new WeakMap();
    _pendingFlush = /* @__PURE__ */ new WeakMap();
    _TelemetryCollector_instances = /* @__PURE__ */ new WeakSet();
    shouldRecord_fn = function(preparedPayload, eventSamplingRate) {
      return this.isEnabled && !this.isDebug && __privateMethod(this, _TelemetryCollector_instances, shouldBeSampled_fn).call(this, preparedPayload, eventSamplingRate);
    };
    shouldBeSampled_fn = function(preparedPayload, eventSamplingRate) {
      const randomSeed = Math.random();
      if (__privateGet(this, _eventThrottler).isEventThrottled(preparedPayload)) {
        return false;
      }
      return randomSeed <= __privateGet(this, _config).samplingRate && (typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate);
    };
    scheduleFlush_fn = function() {
      if (typeof window === "undefined") {
        __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
      }
      const isBufferFull = __privateGet(this, _buffer).length >= __privateGet(this, _config).maxBufferSize;
      if (isBufferFull) {
        if (__privateGet(this, _pendingFlush)) {
          const cancel = typeof cancelIdleCallback !== "undefined" ? cancelIdleCallback : clearTimeout;
          cancel(__privateGet(this, _pendingFlush));
        }
        __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
      }
      if (__privateGet(this, _pendingFlush)) {
        return;
      }
      if ("requestIdleCallback" in window) {
        __privateSet(this, _pendingFlush, requestIdleCallback(() => {
          __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
        }));
      } else {
        __privateSet(this, _pendingFlush, setTimeout(() => {
          __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
        }, 0));
      }
    };
    flush_fn = function() {
      fetch(new URL("/v1/event", __privateGet(this, _config).endpoint), {
        method: "POST",
        // TODO: We send an array here with that idea that we can eventually send multiple events.
        body: JSON.stringify({
          events: __privateGet(this, _buffer)
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).catch(() => void 0).then(() => {
        __privateSet(this, _buffer, []);
      }).catch(() => void 0);
    };
    logEvent_fn = function(event, payload) {
      if (!this.isDebug) {
        return;
      }
      if (typeof console.groupCollapsed !== "undefined") {
        console.groupCollapsed("[clerk/telemetry]", event);
        console.log(payload);
        console.groupEnd();
      } else {
        console.log("[clerk/telemetry]", event, payload);
      }
    };
    getSDKMetadata_fn = function() {
      let sdkMetadata = {
        name: __privateGet(this, _metadata).sdk,
        version: __privateGet(this, _metadata).sdkVersion
      };
      if (typeof window !== "undefined" && window.Clerk) {
        sdkMetadata = { ...sdkMetadata, ...window.Clerk.constructor.sdkMetadata };
      }
      return sdkMetadata;
    };
    preparePayload_fn = function(event, payload) {
      var _a, _b;
      const sdkMetadata = __privateMethod(this, _TelemetryCollector_instances, getSDKMetadata_fn).call(this);
      return {
        event,
        cv: (_a = __privateGet(this, _metadata).clerkVersion) != null ? _a : "",
        it: (_b = __privateGet(this, _metadata).instanceType) != null ? _b : "",
        sdk: sdkMetadata.name,
        sdkv: sdkMetadata.version,
        ...__privateGet(this, _metadata).publishableKey ? { pk: __privateGet(this, _metadata).publishableKey } : {},
        ...__privateGet(this, _metadata).secretKey ? { sk: __privateGet(this, _metadata).secretKey } : {},
        payload
      };
    };
    var EVENT_COMPONENT_MOUNTED = "COMPONENT_MOUNTED";
    var EVENT_SAMPLING_RATE = 0.1;
    function eventPrebuiltComponentMounted(component, props) {
      var _a, _b, _c;
      return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: {
          component,
          appearanceProp: Boolean(props == null ? void 0 : props.appearance),
          baseTheme: Boolean((_a = props == null ? void 0 : props.appearance) == null ? void 0 : _a.baseTheme),
          elements: Boolean((_b = props == null ? void 0 : props.appearance) == null ? void 0 : _b.elements),
          variables: Boolean((_c = props == null ? void 0 : props.appearance) == null ? void 0 : _c.variables)
        }
      };
    }
    function eventComponentMounted(component, props = {}) {
      return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: {
          component,
          ...props
        }
      };
    }
    var EVENT_METHOD_CALLED = "METHOD_CALLED";
    function eventMethodCalled(method, payload) {
      return {
        event: EVENT_METHOD_CALLED,
        payload: {
          method,
          ...payload
        }
      };
    }
  }
});

// node_modules/@clerk/shared/dist/keys.js
var require_keys = __commonJS({
  "node_modules/@clerk/shared/dist/keys.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var keys_exports = {};
    __export2(keys_exports, {
      buildPublishableKey: () => buildPublishableKey,
      createDevOrStagingUrlCache: () => createDevOrStagingUrlCache,
      getCookieSuffix: () => getCookieSuffix,
      getSuffixedCookieName: () => getSuffixedCookieName,
      isDevelopmentFromPublishableKey: () => isDevelopmentFromPublishableKey,
      isDevelopmentFromSecretKey: () => isDevelopmentFromSecretKey,
      isProductionFromPublishableKey: () => isProductionFromPublishableKey,
      isProductionFromSecretKey: () => isProductionFromSecretKey,
      isPublishableKey: () => isPublishableKey,
      parsePublishableKey: () => parsePublishableKey
    });
    module.exports = __toCommonJS2(keys_exports);
    var LEGACY_DEV_INSTANCE_SUFFIXES = [".lcl.dev", ".lclstage.dev", ".lclclerk.com"];
    var DEV_OR_STAGING_SUFFIXES = [
      ".lcl.dev",
      ".stg.dev",
      ".lclstage.dev",
      ".stgstage.dev",
      ".dev.lclclerk.com",
      ".stg.lclclerk.com",
      ".accounts.lclclerk.com",
      "accountsstage.dev",
      "accounts.dev"
    ];
    var isomorphicAtob = (data) => {
      if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
      } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data, "base64").toString();
      }
      return data;
    };
    var isomorphicBtoa = (data) => {
      if (typeof btoa !== "undefined" && typeof btoa === "function") {
        return btoa(data);
      } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data).toString("base64");
      }
      return data;
    };
    var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
    var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
    var PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
    function buildPublishableKey(frontendApi) {
      const isDevKey = PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && LEGACY_DEV_INSTANCE_SUFFIXES.some((s) => frontendApi.endsWith(s));
      const keyPrefix = isDevKey ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX;
      return `${keyPrefix}${isomorphicBtoa(`${frontendApi}$`)}`;
    }
    function parsePublishableKey(key, options = {}) {
      key = key || "";
      if (!key || !isPublishableKey(key)) {
        if (options.fatal) {
          throw new Error("Publishable key not valid.");
        }
        return null;
      }
      const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
      let frontendApi = isomorphicAtob(key.split("_")[2]);
      frontendApi = frontendApi.slice(0, -1);
      if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
      } else if (instanceType !== "development" && options.domain) {
        frontendApi = `clerk.${options.domain}`;
      }
      return {
        instanceType,
        frontendApi
      };
    }
    function isPublishableKey(key) {
      key = key || "";
      const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
      const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
      return hasValidPrefix && hasValidFrontendApiPostfix;
    }
    function createDevOrStagingUrlCache() {
      const devOrStagingUrlCache = /* @__PURE__ */ new Map();
      return {
        isDevOrStagingUrl: (url) => {
          if (!url) {
            return false;
          }
          const hostname = typeof url === "string" ? url : url.hostname;
          let res = devOrStagingUrlCache.get(hostname);
          if (res === void 0) {
            res = DEV_OR_STAGING_SUFFIXES.some((s) => hostname.endsWith(s));
            devOrStagingUrlCache.set(hostname, res);
          }
          return res;
        }
      };
    }
    function isDevelopmentFromPublishableKey(apiKey) {
      return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
    }
    function isProductionFromPublishableKey(apiKey) {
      return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
    }
    function isDevelopmentFromSecretKey(apiKey) {
      return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
    }
    function isProductionFromSecretKey(apiKey) {
      return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
    }
    async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
      const data = new TextEncoder().encode(publishableKey);
      const digest = await subtle.digest("sha-1", data);
      const stringDigest = String.fromCharCode(...new Uint8Array(digest));
      return isomorphicBtoa(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
    }
    var getSuffixedCookieName = (cookieName, cookieSuffix) => {
      return `${cookieName}_${cookieSuffix}`;
    };
  }
});

// node_modules/@clerk/shared/dist/browser.js
var require_browser = __commonJS({
  "node_modules/@clerk/shared/dist/browser.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var browser_exports = {};
    __export2(browser_exports, {
      inBrowser: () => inBrowser,
      isBrowserOnline: () => isBrowserOnline,
      isValidBrowser: () => isValidBrowser,
      isValidBrowserOnline: () => isValidBrowserOnline,
      userAgentIsRobot: () => userAgentIsRobot
    });
    module.exports = __toCommonJS2(browser_exports);
    function inBrowser() {
      return typeof window !== "undefined";
    }
    var botAgents = [
      "bot",
      "spider",
      "crawl",
      "APIs-Google",
      "AdsBot",
      "Googlebot",
      "mediapartners",
      "Google Favicon",
      "FeedFetcher",
      "Google-Read-Aloud",
      "DuplexWeb-Google",
      "googleweblight",
      "bing",
      "yandex",
      "baidu",
      "duckduck",
      "yahoo",
      "ecosia",
      "ia_archiver",
      "facebook",
      "instagram",
      "pinterest",
      "reddit",
      "slack",
      "twitter",
      "whatsapp",
      "youtube",
      "semrush"
    ];
    var botAgentRegex = new RegExp(botAgents.join("|"), "i");
    function userAgentIsRobot(userAgent) {
      return !userAgent ? false : botAgentRegex.test(userAgent);
    }
    function isValidBrowser() {
      const navigator2 = inBrowser() ? window == null ? void 0 : window.navigator : null;
      if (!navigator2) {
        return false;
      }
      return !userAgentIsRobot(navigator2 == null ? void 0 : navigator2.userAgent) && !(navigator2 == null ? void 0 : navigator2.webdriver);
    }
    function isBrowserOnline() {
      var _a, _b;
      const navigator2 = inBrowser() ? window == null ? void 0 : window.navigator : null;
      if (!navigator2) {
        return false;
      }
      const isNavigatorOnline = navigator2 == null ? void 0 : navigator2.onLine;
      const isExperimentalConnectionOnline = ((_a = navigator2 == null ? void 0 : navigator2.connection) == null ? void 0 : _a.rtt) !== 0 && ((_b = navigator2 == null ? void 0 : navigator2.connection) == null ? void 0 : _b.downlink) !== 0;
      return isExperimentalConnectionOnline && isNavigatorOnline;
    }
    function isValidBrowserOnline() {
      return isBrowserOnline() && isValidBrowser();
    }
  }
});

// node_modules/@clerk/shared/dist/handleValueOrFn.js
var require_handleValueOrFn = __commonJS({
  "node_modules/@clerk/shared/dist/handleValueOrFn.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var handleValueOrFn_exports = {};
    __export2(handleValueOrFn_exports, {
      handleValueOrFn: () => handleValueOrFn
    });
    module.exports = __toCommonJS2(handleValueOrFn_exports);
    function handleValueOrFn(value, url, defaultValue) {
      if (typeof value === "function") {
        return value(url);
      }
      if (typeof value !== "undefined") {
        return value;
      }
      if (typeof defaultValue !== "undefined") {
        return defaultValue;
      }
      return void 0;
    }
  }
});

// node_modules/@clerk/clerk-react/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@clerk/clerk-react/dist/index.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __typeError = (msg) => {
      throw TypeError(msg);
    };
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
    var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
    var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
    var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
    var src_exports = {};
    __export2(src_exports, {
      AuthenticateWithRedirectCallback: () => AuthenticateWithRedirectCallback,
      ClerkLoaded: () => ClerkLoaded,
      ClerkLoading: () => ClerkLoading,
      ClerkProvider: () => ClerkProvider,
      CreateOrganization: () => CreateOrganization,
      GoogleOneTap: () => GoogleOneTap,
      OrganizationList: () => OrganizationList,
      OrganizationProfile: () => OrganizationProfile,
      OrganizationSwitcher: () => OrganizationSwitcher,
      Protect: () => Protect,
      RedirectToCreateOrganization: () => RedirectToCreateOrganization,
      RedirectToOrganizationProfile: () => RedirectToOrganizationProfile,
      RedirectToSignIn: () => RedirectToSignIn,
      RedirectToSignUp: () => RedirectToSignUp,
      RedirectToUserProfile: () => RedirectToUserProfile,
      SignIn: () => SignIn2,
      SignInButton: () => SignInButton,
      SignInWithMetamaskButton: () => SignInWithMetamaskButton,
      SignOutButton: () => SignOutButton,
      SignUp: () => SignUp2,
      SignUpButton: () => SignUpButton,
      SignedIn: () => SignedIn,
      SignedOut: () => SignedOut,
      UserButton: () => UserButton,
      UserProfile: () => UserProfile,
      useAuth: () => useAuth,
      useClerk: () => import_react18.useClerk,
      useEmailLink: () => useEmailLink,
      useOrganization: () => import_react18.useOrganization,
      useOrganizationList: () => import_react18.useOrganizationList,
      useSession: () => import_react18.useSession,
      useSessionList: () => import_react18.useSessionList,
      useSignIn: () => useSignIn,
      useSignUp: () => useSignUp,
      useUser: () => import_react18.useUser
    });
    module.exports = __toCommonJS2(src_exports);
    if (typeof window !== "undefined" && !window.global) {
      window.global = typeof globalThis === "undefined" ? window : globalThis;
    }
    var import_loadClerkJsScript2 = require_loadClerkJsScript();
    var import_error = require_error();
    var errorThrower = (0, import_error.buildErrorThrower)({ packageName: "@clerk/clerk-react" });
    function setErrorThrowerOptions(options) {
      errorThrower.setMessages(options).setPackageName(options);
    }
    var import_shared3 = require_dist();
    var import_react10 = require_react2();
    var import_react11 = __toESM2(require_react());
    var multipleClerkProvidersError = "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
    var multipleChildrenInButtonComponent = (name) => `You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
    var invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support";
    var unsupportedNonBrowserDomainOrProxyUrlFunction = "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.";
    var userProfilePageRenderedError = "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
    var userProfileLinkRenderedError = "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
    var organizationProfilePageRenderedError = "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
    var organizationProfileLinkRenderedError = "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
    var customPagesIgnoredComponent = (componentName) => `<${componentName} /> can only accept <${componentName}.Page /> and <${componentName}.Link /> as its children. Any other provided component will be ignored.`;
    var customPageWrongProps = (componentName) => `Missing props. <${componentName}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`;
    var customLinkWrongProps = (componentName) => `Missing props. <${componentName}.Link /> component requires the following props: url, label and labelIcon.`;
    var userButtonIgnoredComponent = `<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored.`;
    var customMenuItemsIgnoredComponent = "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.";
    var userButtonMenuItemsRenderedError = "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.";
    var userButtonMenuActionRenderedError = "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.";
    var userButtonMenuLinkRenderedError = "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.";
    var userButtonMenuItemLinkWrongProps = "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.";
    var userButtonMenuItemsActionWrongsProps = "Missing props. <UserButton.Action /> component requires the following props: label.";
    var import_react4 = __toESM2(require_react());
    var assertSingleChild = (children) => (name) => {
      try {
        return import_react4.default.Children.only(children);
      } catch (e) {
        return errorThrower.throw(multipleChildrenInButtonComponent(name));
      }
    };
    var normalizeWithDefaultValue = (children, defaultText) => {
      if (!children) {
        children = defaultText;
      }
      if (typeof children === "string") {
        children = /* @__PURE__ */ import_react4.default.createElement("button", null, children);
      }
      return children;
    };
    var safeExecute = (cb) => (...args) => {
      if (cb && typeof cb === "function") {
        return cb(...args);
      }
    };
    function isConstructor(f) {
      return typeof f === "function";
    }
    var import_react22 = __toESM2(require_react());
    var counts = /* @__PURE__ */ new Map();
    function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
      import_react22.default.useEffect(() => {
        const count = counts.get(name) || 0;
        if (count == maxCount) {
          return errorThrower.throw(error);
        }
        counts.set(name, count + 1);
        return () => {
          counts.set(name, (counts.get(name) || 1) - 1);
        };
      }, []);
    }
    function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
      const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
      const Hoc = (props) => {
        useMaxAllowedInstancesGuard(name, error);
        return /* @__PURE__ */ import_react22.default.createElement(WrappedComponent, { ...props });
      };
      Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
      return Hoc;
    }
    var import_react32 = __toESM2(require_react());
    var import_react_dom = require_react_dom();
    var useCustomElementPortal = (elements) => {
      const initialState = Array(elements.length).fill(null);
      const [nodes, setNodes] = (0, import_react32.useState)(initialState);
      return elements.map((el, index) => ({
        id: el.id,
        mount: (node) => setNodes((prevState) => prevState.map((n, i) => i === index ? node : n)),
        unmount: () => setNodes((prevState) => prevState.map((n, i) => i === index ? null : n)),
        portal: () => /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, nodes[index] ? (0, import_react_dom.createPortal)(el.component, nodes[index]) : null)
      }));
    };
    var import_shared = require_dist();
    var import_react5 = __toESM2(require_react());
    var import_react42 = __toESM2(require_react());
    var isThatComponent = (v, component) => {
      return !!v && import_react42.default.isValidElement(v) && (v == null ? void 0 : v.type) === component;
    };
    var useUserProfileCustomPages = (children) => {
      const reorderItemsLabels = ["account", "security"];
      return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: UserProfileLink,
        PageComponent: UserProfilePage,
        MenuItemsComponent: MenuItems,
        componentName: "UserProfile"
      });
    };
    var useOrganizationProfileCustomPages = (children) => {
      const reorderItemsLabels = ["general", "members"];
      return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: OrganizationProfileLink,
        PageComponent: OrganizationProfilePage,
        componentName: "OrganizationProfile"
      });
    };
    var useCustomPages = ({
      children,
      LinkComponent,
      PageComponent,
      MenuItemsComponent,
      reorderItemsLabels,
      componentName
    }) => {
      const validChildren = [];
      import_react5.default.Children.forEach(children, (child) => {
        if (!isThatComponent(child, PageComponent) && !isThatComponent(child, LinkComponent) && !isThatComponent(child, MenuItemsComponent)) {
          if (child) {
            (0, import_shared.logErrorInDevMode)(customPagesIgnoredComponent(componentName));
          }
          return;
        }
        const { props } = child;
        const { children: children2, label, url, labelIcon } = props;
        if (isThatComponent(child, PageComponent)) {
          if (isReorderItem(props, reorderItemsLabels)) {
            validChildren.push({ label });
          } else if (isCustomPage(props)) {
            validChildren.push({ label, labelIcon, children: children2, url });
          } else {
            (0, import_shared.logErrorInDevMode)(customPageWrongProps(componentName));
            return;
          }
        }
        if (isThatComponent(child, LinkComponent)) {
          if (isExternalLink(props)) {
            validChildren.push({ label, labelIcon, url });
          } else {
            (0, import_shared.logErrorInDevMode)(customLinkWrongProps(componentName));
            return;
          }
        }
      });
      const customPageContents = [];
      const customPageLabelIcons = [];
      const customLinkLabelIcons = [];
      validChildren.forEach((cp, index) => {
        if (isCustomPage(cp)) {
          customPageContents.push({ component: cp.children, id: index });
          customPageLabelIcons.push({ component: cp.labelIcon, id: index });
          return;
        }
        if (isExternalLink(cp)) {
          customLinkLabelIcons.push({ component: cp.labelIcon, id: index });
        }
      });
      const customPageContentsPortals = useCustomElementPortal(customPageContents);
      const customPageLabelIconsPortals = useCustomElementPortal(customPageLabelIcons);
      const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
      const customPages = [];
      const customPagesPortals = [];
      validChildren.forEach((cp, index) => {
        if (isReorderItem(cp, reorderItemsLabels)) {
          customPages.push({ label: cp.label });
          return;
        }
        if (isCustomPage(cp)) {
          const {
            portal: contentPortal,
            mount,
            unmount
          } = customPageContentsPortals.find((p) => p.id === index);
          const {
            portal: labelPortal,
            mount: mountIcon,
            unmount: unmountIcon
          } = customPageLabelIconsPortals.find((p) => p.id === index);
          customPages.push({ label: cp.label, url: cp.url, mount, unmount, mountIcon, unmountIcon });
          customPagesPortals.push(contentPortal);
          customPagesPortals.push(labelPortal);
          return;
        }
        if (isExternalLink(cp)) {
          const {
            portal: labelPortal,
            mount: mountIcon,
            unmount: unmountIcon
          } = customLinkLabelIconsPortals.find((p) => p.id === index);
          customPages.push({ label: cp.label, url: cp.url, mountIcon, unmountIcon });
          customPagesPortals.push(labelPortal);
          return;
        }
      });
      return { customPages, customPagesPortals };
    };
    var isReorderItem = (childProps, validItems) => {
      const { children, label, url, labelIcon } = childProps;
      return !children && !url && !labelIcon && validItems.some((v) => v === label);
    };
    var isCustomPage = (childProps) => {
      const { children, label, url, labelIcon } = childProps;
      return !!children && !!url && !!labelIcon && !!label;
    };
    var isExternalLink = (childProps) => {
      const { children, label, url, labelIcon } = childProps;
      return !children && !!url && !!labelIcon && !!label;
    };
    var import_shared2 = require_dist();
    var import_react6 = __toESM2(require_react());
    var useUserButtonCustomMenuItems = (children) => {
      const reorderItemsLabels = ["manageAccount", "signOut"];
      return useCustomMenuItems({
        children,
        reorderItemsLabels,
        MenuItemsComponent: MenuItems,
        MenuActionComponent: MenuAction,
        MenuLinkComponent: MenuLink,
        UserProfileLinkComponent: UserProfileLink,
        UserProfilePageComponent: UserProfilePage
      });
    };
    var useCustomMenuItems = ({
      children,
      MenuItemsComponent,
      MenuActionComponent,
      MenuLinkComponent,
      UserProfileLinkComponent,
      UserProfilePageComponent,
      reorderItemsLabels
    }) => {
      const validChildren = [];
      const customMenuItems = [];
      const customMenuItemsPortals = [];
      import_react6.default.Children.forEach(children, (child) => {
        if (!isThatComponent(child, MenuItemsComponent) && !isThatComponent(child, UserProfileLinkComponent) && !isThatComponent(child, UserProfilePageComponent)) {
          if (child) {
            (0, import_shared2.logErrorInDevMode)(userButtonIgnoredComponent);
          }
          return;
        }
        if (isThatComponent(child, UserProfileLinkComponent) || isThatComponent(child, UserProfilePageComponent)) {
          return;
        }
        const { props } = child;
        import_react6.default.Children.forEach(props.children, (child2) => {
          if (!isThatComponent(child2, MenuActionComponent) && !isThatComponent(child2, MenuLinkComponent)) {
            if (child2) {
              (0, import_shared2.logErrorInDevMode)(customMenuItemsIgnoredComponent);
            }
            return;
          }
          const { props: props2 } = child2;
          const { label, labelIcon, href, onClick, open } = props2;
          if (isThatComponent(child2, MenuActionComponent)) {
            if (isReorderItem2(props2, reorderItemsLabels)) {
              validChildren.push({ label });
            } else if (isCustomMenuItem(props2)) {
              const baseItem = {
                label,
                labelIcon
              };
              if (onClick !== void 0) {
                validChildren.push({
                  ...baseItem,
                  onClick
                });
              } else if (open !== void 0) {
                validChildren.push({
                  ...baseItem,
                  open: open.startsWith("/") ? open : `/${open}`
                });
              } else {
                (0, import_shared2.logErrorInDevMode)("Custom menu item must have either onClick or open property");
                return;
              }
            } else {
              (0, import_shared2.logErrorInDevMode)(userButtonMenuItemsActionWrongsProps);
              return;
            }
          }
          if (isThatComponent(child2, MenuLinkComponent)) {
            if (isExternalLink2(props2)) {
              validChildren.push({ label, labelIcon, href });
            } else {
              (0, import_shared2.logErrorInDevMode)(userButtonMenuItemLinkWrongProps);
              return;
            }
          }
        });
      });
      const customMenuItemLabelIcons = [];
      const customLinkLabelIcons = [];
      validChildren.forEach((mi, index) => {
        if (isCustomMenuItem(mi)) {
          customMenuItemLabelIcons.push({ component: mi.labelIcon, id: index });
        }
        if (isExternalLink2(mi)) {
          customLinkLabelIcons.push({ component: mi.labelIcon, id: index });
        }
      });
      const customMenuItemLabelIconsPortals = useCustomElementPortal(customMenuItemLabelIcons);
      const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
      validChildren.forEach((mi, index) => {
        if (isReorderItem2(mi, reorderItemsLabels)) {
          customMenuItems.push({
            label: mi.label
          });
        }
        if (isCustomMenuItem(mi)) {
          const {
            portal: iconPortal,
            mount: mountIcon,
            unmount: unmountIcon
          } = customMenuItemLabelIconsPortals.find((p) => p.id === index);
          const menuItem = {
            label: mi.label,
            mountIcon,
            unmountIcon
          };
          if ("onClick" in mi) {
            menuItem.onClick = mi.onClick;
          } else if ("open" in mi) {
            menuItem.open = mi.open;
          }
          customMenuItems.push(menuItem);
          customMenuItemsPortals.push(iconPortal);
        }
        if (isExternalLink2(mi)) {
          const {
            portal: iconPortal,
            mount: mountIcon,
            unmount: unmountIcon
          } = customLinkLabelIconsPortals.find((p) => p.id === index);
          customMenuItems.push({
            label: mi.label,
            href: mi.href,
            mountIcon,
            unmountIcon
          });
          customMenuItemsPortals.push(iconPortal);
        }
      });
      return { customMenuItems, customMenuItemsPortals };
    };
    var isReorderItem2 = (childProps, validItems) => {
      const { children, label, onClick, labelIcon } = childProps;
      return !children && !onClick && !labelIcon && validItems.some((v) => v === label);
    };
    var isCustomMenuItem = (childProps) => {
      const { label, labelIcon, onClick, open } = childProps;
      return !!labelIcon && !!label && (typeof onClick === "function" || typeof open === "string");
    };
    var isExternalLink2 = (childProps) => {
      const { label, href, labelIcon } = childProps;
      return !!href && !!labelIcon && !!label;
    };
    var import_react9 = __toESM2(require_react());
    var import_react7 = require_react2();
    var IsomorphicClerkContext = import_react7.ClerkInstanceContext;
    var useIsomorphicClerkContext = import_react7.useClerkInstanceContext;
    var import_react8 = require_react2();
    var useAssertWrappedByClerkProvider = (source) => {
      (0, import_react8.useAssertWrappedByClerkProvider)(() => {
        errorThrower.throwMissingClerkProviderError({ source });
      });
    };
    var withClerk = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        useAssertWrappedByClerkProvider(displayName || "withClerk");
        const clerk = useIsomorphicClerkContext();
        if (!clerk.loaded) {
          return null;
        }
        return /* @__PURE__ */ import_react9.default.createElement(
          Component,
          {
            ...props,
            clerk
          }
        );
      };
      HOC.displayName = `withClerk(${displayName})`;
      return HOC;
    };
    var isMountProps = (props) => {
      return "mount" in props;
    };
    var isOpenProps = (props) => {
      return "open" in props;
    };
    var Portal = class extends import_react11.default.PureComponent {
      constructor() {
        super(...arguments);
        this.portalRef = import_react11.default.createRef();
      }
      componentDidUpdate(_prevProps) {
        var _a, _b, _c, _d;
        if (!isMountProps(_prevProps) || !isMountProps(this.props)) {
          return;
        }
        const prevProps = (0, import_shared3.without)(_prevProps.props, "customPages", "customMenuItems", "children");
        const newProps = (0, import_shared3.without)(this.props.props, "customPages", "customMenuItems", "children");
        const customPagesChanged = ((_a = prevProps.customPages) == null ? void 0 : _a.length) !== ((_b = newProps.customPages) == null ? void 0 : _b.length);
        const customMenuItemsChanged = ((_c = prevProps.customMenuItems) == null ? void 0 : _c.length) !== ((_d = newProps.customMenuItems) == null ? void 0 : _d.length);
        if (!(0, import_react10.isDeeplyEqual)(prevProps, newProps) || customPagesChanged || customMenuItemsChanged) {
          this.props.updateProps({ node: this.portalRef.current, props: this.props.props });
        }
      }
      componentDidMount() {
        if (this.portalRef.current) {
          if (isMountProps(this.props)) {
            this.props.mount(this.portalRef.current, this.props.props);
          }
          if (isOpenProps(this.props)) {
            this.props.open(this.props.props);
          }
        }
      }
      componentWillUnmount() {
        if (this.portalRef.current) {
          if (isMountProps(this.props)) {
            this.props.unmount(this.portalRef.current);
          }
          if (isOpenProps(this.props)) {
            this.props.close();
          }
        }
      }
      render() {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("div", { ref: this.portalRef }), isMountProps(this.props) && ((_b = (_a = this.props) == null ? void 0 : _a.customPagesPortals) == null ? void 0 : _b.map((portal, index) => (0, import_react11.createElement)(portal, { key: index }))), isMountProps(this.props) && ((_d = (_c = this.props) == null ? void 0 : _c.customMenuItemsPortals) == null ? void 0 : _d.map((portal, index) => (0, import_react11.createElement)(portal, { key: index }))));
      }
    };
    var SignIn2 = withClerk(({ clerk, ...props }) => {
      return /* @__PURE__ */ import_react11.default.createElement(
        Portal,
        {
          mount: clerk.mountSignIn,
          unmount: clerk.unmountSignIn,
          updateProps: clerk.__unstable__updateProps,
          props
        }
      );
    }, "SignIn");
    var SignUp2 = withClerk(({ clerk, ...props }) => {
      return /* @__PURE__ */ import_react11.default.createElement(
        Portal,
        {
          mount: clerk.mountSignUp,
          unmount: clerk.unmountSignUp,
          updateProps: clerk.__unstable__updateProps,
          props
        }
      );
    }, "SignUp");
    function UserProfilePage({ children }) {
      (0, import_shared3.logErrorInDevMode)(userProfilePageRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    function UserProfileLink({ children }) {
      (0, import_shared3.logErrorInDevMode)(userProfileLinkRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    var _UserProfile = withClerk(
      ({ clerk, ...props }) => {
        const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children);
        return /* @__PURE__ */ import_react11.default.createElement(
          Portal,
          {
            mount: clerk.mountUserProfile,
            unmount: clerk.unmountUserProfile,
            updateProps: clerk.__unstable__updateProps,
            props: { ...props, customPages },
            customPagesPortals
          }
        );
      },
      "UserProfile"
    );
    var UserProfile = Object.assign(_UserProfile, {
      Page: UserProfilePage,
      Link: UserProfileLink
    });
    var _UserButton = withClerk(
      ({ clerk, ...props }) => {
        const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children);
        const userProfileProps = Object.assign(props.userProfileProps || {}, { customPages });
        const { customMenuItems, customMenuItemsPortals } = useUserButtonCustomMenuItems(props.children);
        return /* @__PURE__ */ import_react11.default.createElement(
          Portal,
          {
            mount: clerk.mountUserButton,
            unmount: clerk.unmountUserButton,
            updateProps: clerk.__unstable__updateProps,
            props: { ...props, userProfileProps, customMenuItems },
            customPagesPortals,
            customMenuItemsPortals
          }
        );
      },
      "UserButton"
    );
    function MenuItems({ children }) {
      (0, import_shared3.logErrorInDevMode)(userButtonMenuItemsRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    function MenuAction({ children }) {
      (0, import_shared3.logErrorInDevMode)(userButtonMenuActionRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    function MenuLink({ children }) {
      (0, import_shared3.logErrorInDevMode)(userButtonMenuLinkRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    var UserButton = Object.assign(_UserButton, {
      UserProfilePage,
      UserProfileLink,
      MenuItems,
      Action: MenuAction,
      Link: MenuLink
    });
    function OrganizationProfilePage({ children }) {
      (0, import_shared3.logErrorInDevMode)(organizationProfilePageRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    function OrganizationProfileLink({ children }) {
      (0, import_shared3.logErrorInDevMode)(organizationProfileLinkRenderedError);
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
    }
    var _OrganizationProfile = withClerk(
      ({ clerk, ...props }) => {
        const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children);
        return /* @__PURE__ */ import_react11.default.createElement(
          Portal,
          {
            mount: clerk.mountOrganizationProfile,
            unmount: clerk.unmountOrganizationProfile,
            updateProps: clerk.__unstable__updateProps,
            props: { ...props, customPages },
            customPagesPortals
          }
        );
      },
      "OrganizationProfile"
    );
    var OrganizationProfile = Object.assign(_OrganizationProfile, {
      Page: OrganizationProfilePage,
      Link: OrganizationProfileLink
    });
    var CreateOrganization = withClerk(({ clerk, ...props }) => {
      return /* @__PURE__ */ import_react11.default.createElement(
        Portal,
        {
          mount: clerk.mountCreateOrganization,
          unmount: clerk.unmountCreateOrganization,
          updateProps: clerk.__unstable__updateProps,
          props
        }
      );
    }, "CreateOrganization");
    var _OrganizationSwitcher = withClerk(
      ({ clerk, ...props }) => {
        const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children);
        const organizationProfileProps = Object.assign(props.organizationProfileProps || {}, { customPages });
        return /* @__PURE__ */ import_react11.default.createElement(
          Portal,
          {
            mount: clerk.mountOrganizationSwitcher,
            unmount: clerk.unmountOrganizationSwitcher,
            updateProps: clerk.__unstable__updateProps,
            props: { ...props, organizationProfileProps },
            customPagesPortals
          }
        );
      },
      "OrganizationSwitcher"
    );
    var OrganizationSwitcher = Object.assign(_OrganizationSwitcher, {
      OrganizationProfilePage,
      OrganizationProfileLink
    });
    var OrganizationList = withClerk(({ clerk, ...props }) => {
      return /* @__PURE__ */ import_react11.default.createElement(
        Portal,
        {
          mount: clerk.mountOrganizationList,
          unmount: clerk.unmountOrganizationList,
          updateProps: clerk.__unstable__updateProps,
          props
        }
      );
    }, "OrganizationList");
    var GoogleOneTap = withClerk(({ clerk, ...props }) => {
      return /* @__PURE__ */ import_react11.default.createElement(
        Portal,
        {
          open: clerk.openGoogleOneTap,
          close: clerk.closeGoogleOneTap,
          props
        }
      );
    }, "GoogleOneTap");
    var import_react19 = __toESM2(require_react());
    var import_react12 = require_react2();
    var [AuthContext, useAuthContext] = (0, import_react12.createContextAndHook)("AuthContext");
    var import_react13 = require_react2();
    var import_authorization = require_authorization();
    var import_react14 = require_react();
    var clerkLoaded = (isomorphicClerk) => {
      return new Promise((resolve) => {
        if (isomorphicClerk.loaded) {
          resolve();
        }
        isomorphicClerk.addOnLoaded(resolve);
      });
    };
    var createGetToken = (isomorphicClerk) => {
      return async (options) => {
        await clerkLoaded(isomorphicClerk);
        if (!isomorphicClerk.session) {
          return null;
        }
        return isomorphicClerk.session.getToken(options);
      };
    };
    var createSignOut = (isomorphicClerk) => {
      return async (...args) => {
        await clerkLoaded(isomorphicClerk);
        return isomorphicClerk.signOut(...args);
      };
    };
    var useAuth = () => {
      useAssertWrappedByClerkProvider("useAuth");
      const { sessionId, userId, actor, orgId, orgRole, orgSlug, orgPermissions, __experimental_factorVerificationAge } = useAuthContext();
      const isomorphicClerk = useIsomorphicClerkContext();
      const getToken = (0, import_react14.useCallback)(createGetToken(isomorphicClerk), [isomorphicClerk]);
      const signOut = (0, import_react14.useCallback)(createSignOut(isomorphicClerk), [isomorphicClerk]);
      const has = (0, import_react14.useCallback)(
        (params) => {
          return (0, import_authorization.createCheckAuthorization)({
            userId,
            orgId,
            orgRole,
            orgPermissions,
            __experimental_factorVerificationAge
          })(params);
        },
        [userId, __experimental_factorVerificationAge, orgId, orgRole, orgPermissions]
      );
      if (sessionId === void 0 && userId === void 0) {
        return {
          isLoaded: false,
          isSignedIn: void 0,
          sessionId,
          userId,
          actor: void 0,
          orgId: void 0,
          orgRole: void 0,
          orgSlug: void 0,
          has: void 0,
          signOut,
          getToken
        };
      }
      if (sessionId === null && userId === null) {
        return {
          isLoaded: true,
          isSignedIn: false,
          sessionId,
          userId,
          actor: null,
          orgId: null,
          orgRole: null,
          orgSlug: null,
          has: () => false,
          signOut,
          getToken
        };
      }
      if (!!sessionId && !!userId && !!orgId && !!orgRole) {
        return {
          isLoaded: true,
          isSignedIn: true,
          sessionId,
          userId,
          actor: actor || null,
          orgId,
          orgRole,
          orgSlug: orgSlug || null,
          has,
          signOut,
          getToken
        };
      }
      if (!!sessionId && !!userId && !orgId) {
        return {
          isLoaded: true,
          isSignedIn: true,
          sessionId,
          userId,
          actor: actor || null,
          orgId: null,
          orgRole: null,
          orgSlug: null,
          has,
          signOut,
          getToken
        };
      }
      return errorThrower.throw(invalidStateError);
    };
    var import_react15 = __toESM2(require_react());
    function useEmailLink(resource) {
      const { startEmailLinkFlow, cancelEmailLinkFlow } = import_react15.default.useMemo(() => resource.createEmailLinkFlow(), [resource]);
      import_react15.default.useEffect(() => {
        return cancelEmailLinkFlow;
      }, []);
      return {
        startEmailLinkFlow,
        cancelEmailLinkFlow
      };
    }
    var import_react16 = require_react2();
    var import_telemetry = require_telemetry();
    var useSignIn = () => {
      var _a;
      useAssertWrappedByClerkProvider("useSignIn");
      const isomorphicClerk = useIsomorphicClerkContext();
      const client = (0, import_react16.useClientContext)();
      (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, import_telemetry.eventMethodCalled)("useSignIn"));
      if (!client) {
        return { isLoaded: false, signIn: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        signIn: client.signIn,
        setActive: isomorphicClerk.setActive
      };
    };
    var import_react17 = require_react2();
    var import_telemetry2 = require_telemetry();
    var useSignUp = () => {
      var _a;
      useAssertWrappedByClerkProvider("useSignUp");
      const isomorphicClerk = useIsomorphicClerkContext();
      const client = (0, import_react17.useClientContext)();
      (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, import_telemetry2.eventMethodCalled)("useSignUp"));
      if (!client) {
        return { isLoaded: false, signUp: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        signUp: client.signUp,
        setActive: isomorphicClerk.setActive
      };
    };
    var import_react18 = require_react2();
    var SignedIn = ({ children }) => {
      useAssertWrappedByClerkProvider("SignedIn");
      const { userId } = useAuthContext();
      if (userId) {
        return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children);
      }
      return null;
    };
    var SignedOut = ({ children }) => {
      useAssertWrappedByClerkProvider("SignedOut");
      const { userId } = useAuthContext();
      if (userId === null) {
        return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children);
      }
      return null;
    };
    var ClerkLoaded = ({ children }) => {
      useAssertWrappedByClerkProvider("ClerkLoaded");
      const isomorphicClerk = useIsomorphicClerkContext();
      if (!isomorphicClerk.loaded) {
        return null;
      }
      return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children);
    };
    var ClerkLoading = ({ children }) => {
      useAssertWrappedByClerkProvider("ClerkLoading");
      const isomorphicClerk = useIsomorphicClerkContext();
      if (isomorphicClerk.loaded) {
        return null;
      }
      return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children);
    };
    var Protect = ({ children, fallback, ...restAuthorizedParams }) => {
      useAssertWrappedByClerkProvider("Protect");
      const { isLoaded, has, userId } = useAuth();
      if (!isLoaded) {
        return null;
      }
      const unauthorized = /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, fallback != null ? fallback : null);
      const authorized = /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children);
      if (!userId) {
        return unauthorized;
      }
      if (typeof restAuthorizedParams.condition === "function") {
        if (restAuthorizedParams.condition(has)) {
          return authorized;
        }
        return unauthorized;
      }
      if (restAuthorizedParams.role || restAuthorizedParams.permission) {
        if (has(restAuthorizedParams)) {
          return authorized;
        }
        return unauthorized;
      }
      return authorized;
    };
    var RedirectToSignIn = withClerk(({ clerk, ...props }) => {
      const { client, session } = clerk;
      const hasActiveSessions = client.activeSessions && client.activeSessions.length > 0;
      import_react19.default.useEffect(() => {
        if (session === null && hasActiveSessions) {
          void clerk.redirectToAfterSignOut();
        } else {
          void clerk.redirectToSignIn(props);
        }
      }, []);
      return null;
    }, "RedirectToSignIn");
    var RedirectToSignUp = withClerk(({ clerk, ...props }) => {
      import_react19.default.useEffect(() => {
        void clerk.redirectToSignUp(props);
      }, []);
      return null;
    }, "RedirectToSignUp");
    var RedirectToUserProfile = withClerk(({ clerk }) => {
      import_react19.default.useEffect(() => {
        void clerk.redirectToUserProfile();
      }, []);
      return null;
    }, "RedirectToUserProfile");
    var RedirectToOrganizationProfile = withClerk(({ clerk }) => {
      import_react19.default.useEffect(() => {
        void clerk.redirectToOrganizationProfile();
      }, []);
      return null;
    }, "RedirectToOrganizationProfile");
    var RedirectToCreateOrganization = withClerk(({ clerk }) => {
      import_react19.default.useEffect(() => {
        void clerk.redirectToCreateOrganization();
      }, []);
      return null;
    }, "RedirectToCreateOrganization");
    var AuthenticateWithRedirectCallback = withClerk(
      ({ clerk, ...handleRedirectCallbackParams }) => {
        import_react19.default.useEffect(() => {
          void clerk.handleRedirectCallback(handleRedirectCallbackParams);
        }, []);
        return null;
      },
      "AuthenticateWithRedirectCallback"
    );
    var import_react20 = __toESM2(require_react());
    var SignInButton = withClerk(({ clerk, children, ...props }) => {
      const { signUpFallbackRedirectUrl, forceRedirectUrl, fallbackRedirectUrl, signUpForceRedirectUrl, mode, ...rest } = props;
      children = normalizeWithDefaultValue(children, "Sign in");
      const child = assertSingleChild(children)("SignInButton");
      const clickHandler = () => {
        const opts = {
          forceRedirectUrl,
          fallbackRedirectUrl,
          signUpFallbackRedirectUrl,
          signUpForceRedirectUrl
        };
        if (mode === "modal") {
          return clerk.openSignIn(opts);
        }
        return clerk.redirectToSignIn({
          ...opts,
          signInFallbackRedirectUrl: fallbackRedirectUrl,
          signInForceRedirectUrl: forceRedirectUrl
        });
      };
      const wrappedChildClickHandler = async (e) => {
        if (child && typeof child === "object" && "props" in child) {
          await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
      };
      const childProps = { ...rest, onClick: wrappedChildClickHandler };
      return import_react20.default.cloneElement(child, childProps);
    }, "SignInButton");
    var import_react21 = __toESM2(require_react());
    var SignUpButton = withClerk(({ clerk, children, ...props }) => {
      const {
        fallbackRedirectUrl,
        forceRedirectUrl,
        signInFallbackRedirectUrl,
        signInForceRedirectUrl,
        mode,
        unsafeMetadata,
        ...rest
      } = props;
      children = normalizeWithDefaultValue(children, "Sign up");
      const child = assertSingleChild(children)("SignUpButton");
      const clickHandler = () => {
        const opts = {
          fallbackRedirectUrl,
          forceRedirectUrl,
          signInFallbackRedirectUrl,
          signInForceRedirectUrl,
          unsafeMetadata
        };
        if (mode === "modal") {
          return clerk.openSignUp(opts);
        }
        return clerk.redirectToSignUp({
          ...opts,
          signUpFallbackRedirectUrl: fallbackRedirectUrl,
          signUpForceRedirectUrl: forceRedirectUrl
        });
      };
      const wrappedChildClickHandler = async (e) => {
        if (child && typeof child === "object" && "props" in child) {
          await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
      };
      const childProps = { ...rest, onClick: wrappedChildClickHandler };
      return import_react21.default.cloneElement(child, childProps);
    }, "SignUpButton");
    var import_react222 = __toESM2(require_react());
    var SignOutButton = withClerk(
      ({ clerk, children, ...props }) => {
        const { redirectUrl = "/", signOutOptions, ...rest } = props;
        children = normalizeWithDefaultValue(children, "Sign out");
        const child = assertSingleChild(children)("SignOutButton");
        const clickHandler = () => clerk.signOut({ redirectUrl });
        const wrappedChildClickHandler = async (e) => {
          await safeExecute(child.props.onClick)(e);
          return clickHandler();
        };
        const childProps = { ...rest, onClick: wrappedChildClickHandler };
        return import_react222.default.cloneElement(child, childProps);
      },
      "SignOutButton"
    );
    var import_react23 = __toESM2(require_react());
    var SignInWithMetamaskButton = withClerk(
      ({ clerk, children, ...props }) => {
        const { redirectUrl, ...rest } = props;
        children = normalizeWithDefaultValue(children, "Sign in with Metamask");
        const child = assertSingleChild(children)("SignInWithMetamaskButton");
        const clickHandler = async () => {
          async function authenticate() {
            await clerk.authenticateWithMetamask({ redirectUrl: redirectUrl || void 0 });
          }
          void authenticate();
        };
        const wrappedChildClickHandler = async (e) => {
          await safeExecute(child.props.onClick)(e);
          return clickHandler();
        };
        const childProps = { ...rest, onClick: wrappedChildClickHandler };
        return import_react23.default.cloneElement(child, childProps);
      },
      "SignInWithMetamask"
    );
    var import_keys = require_keys();
    var import_react26 = __toESM2(require_react());
    var import_react24 = require_react2();
    var import_react25 = __toESM2(require_react());
    var import_browser = require_browser();
    var import_handleValueOrFn = require_handleValueOrFn();
    var import_loadClerkJsScript = require_loadClerkJsScript();
    var SDK_METADATA = {
      name: "@clerk/clerk-react",
      version: "5.11.0",
      environment: "development"
    };
    var _loaded;
    var _domain;
    var _proxyUrl;
    var _publishableKey;
    var _instance;
    var _IsomorphicClerk_instances;
    var waitForClerkJS_fn;
    var _IsomorphicClerk = class _IsomorphicClerk2 {
      constructor(options) {
        __privateAdd(this, _IsomorphicClerk_instances);
        this.clerkjs = null;
        this.preopenOneTap = null;
        this.preopenUserVerification = null;
        this.preopenSignIn = null;
        this.preopenSignUp = null;
        this.preopenUserProfile = null;
        this.preopenOrganizationProfile = null;
        this.preopenCreateOrganization = null;
        this.premountSignInNodes = /* @__PURE__ */ new Map();
        this.premountSignUpNodes = /* @__PURE__ */ new Map();
        this.premountUserProfileNodes = /* @__PURE__ */ new Map();
        this.premountUserButtonNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationProfileNodes = /* @__PURE__ */ new Map();
        this.premountCreateOrganizationNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationSwitcherNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationListNodes = /* @__PURE__ */ new Map();
        this.premountMethodCalls = /* @__PURE__ */ new Map();
        this.premountAddListenerCalls = /* @__PURE__ */ new Map();
        this.loadedListeners = [];
        __privateAdd(this, _loaded, false);
        __privateAdd(this, _domain);
        __privateAdd(this, _proxyUrl);
        __privateAdd(this, _publishableKey);
        this.buildSignInUrl = (opts) => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignInUrl(opts)) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildSignInUrl", callback);
          }
        };
        this.buildSignUpUrl = (opts) => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignUpUrl(opts)) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildSignUpUrl", callback);
          }
        };
        this.buildAfterSignInUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignInUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildAfterSignInUrl", callback);
          }
        };
        this.buildAfterSignUpUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignUpUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildAfterSignUpUrl", callback);
          }
        };
        this.buildAfterSignOutUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignOutUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildAfterSignOutUrl", callback);
          }
        };
        this.buildAfterMultiSessionSingleSignOutUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterMultiSessionSingleSignOutUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", callback);
          }
        };
        this.buildUserProfileUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildUserProfileUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildUserProfileUrl", callback);
          }
        };
        this.buildCreateOrganizationUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildCreateOrganizationUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildCreateOrganizationUrl", callback);
          }
        };
        this.buildOrganizationProfileUrl = () => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildOrganizationProfileUrl()) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildOrganizationProfileUrl", callback);
          }
        };
        this.buildUrlWithAuth = (to) => {
          const callback = () => {
            var _a;
            return ((_a = this.clerkjs) == null ? void 0 : _a.buildUrlWithAuth(to)) || "";
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("buildUrlWithAuth", callback);
          }
        };
        this.handleUnauthenticated = () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.handleUnauthenticated();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            void callback();
          } else {
            this.premountMethodCalls.set("handleUnauthenticated", callback);
          }
        };
        this.addOnLoaded = (cb) => {
          this.loadedListeners.push(cb);
          if (this.loaded) {
            this.emitLoaded();
          }
        };
        this.emitLoaded = () => {
          this.loadedListeners.forEach((cb) => cb());
          this.loadedListeners = [];
        };
        this.hydrateClerkJS = (clerkjs) => {
          if (!clerkjs) {
            throw new Error("Failed to hydrate latest Clerk JS");
          }
          this.clerkjs = clerkjs;
          this.premountMethodCalls.forEach((cb) => cb());
          this.premountAddListenerCalls.forEach((listenerHandlers, listener) => {
            listenerHandlers.nativeUnsubscribe = clerkjs.addListener(listener);
          });
          if (this.preopenSignIn !== null) {
            clerkjs.openSignIn(this.preopenSignIn);
          }
          if (this.preopenSignUp !== null) {
            clerkjs.openSignUp(this.preopenSignUp);
          }
          if (this.preopenUserProfile !== null) {
            clerkjs.openUserProfile(this.preopenUserProfile);
          }
          if (this.preopenUserVerification !== null) {
            clerkjs.__experimental_openUserVerification(this.preopenUserVerification);
          }
          if (this.preopenOneTap !== null) {
            clerkjs.openGoogleOneTap(this.preopenOneTap);
          }
          if (this.preopenOrganizationProfile !== null) {
            clerkjs.openOrganizationProfile(this.preopenOrganizationProfile);
          }
          if (this.preopenCreateOrganization !== null) {
            clerkjs.openCreateOrganization(this.preopenCreateOrganization);
          }
          this.premountSignInNodes.forEach((props, node) => {
            clerkjs.mountSignIn(node, props);
          });
          this.premountSignUpNodes.forEach((props, node) => {
            clerkjs.mountSignUp(node, props);
          });
          this.premountUserProfileNodes.forEach((props, node) => {
            clerkjs.mountUserProfile(node, props);
          });
          this.premountUserButtonNodes.forEach((props, node) => {
            clerkjs.mountUserButton(node, props);
          });
          this.premountOrganizationListNodes.forEach((props, node) => {
            clerkjs.mountOrganizationList(node, props);
          });
          __privateSet(this, _loaded, true);
          this.emitLoaded();
          return this.clerkjs;
        };
        this.__unstable__updateProps = async (props) => {
          const clerkjs = await __privateMethod(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
          if (clerkjs && "__unstable__updateProps" in clerkjs) {
            return clerkjs.__unstable__updateProps(props);
          }
        };
        this.setActive = ({ session, organization, beforeEmit }) => {
          if (this.clerkjs) {
            return this.clerkjs.setActive({ session, organization, beforeEmit });
          } else {
            return Promise.reject();
          }
        };
        this.openSignIn = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.openSignIn(props);
          } else {
            this.preopenSignIn = props;
          }
        };
        this.closeSignIn = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.closeSignIn();
          } else {
            this.preopenSignIn = null;
          }
        };
        this.__experimental_openUserVerification = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.__experimental_openUserVerification(props);
          } else {
            this.preopenUserVerification = props;
          }
        };
        this.__experimental_closeUserVerification = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.__experimental_closeUserVerification();
          } else {
            this.preopenUserVerification = null;
          }
        };
        this.openGoogleOneTap = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.openGoogleOneTap(props);
          } else {
            this.preopenOneTap = props;
          }
        };
        this.closeGoogleOneTap = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.closeGoogleOneTap();
          } else {
            this.preopenOneTap = null;
          }
        };
        this.openUserProfile = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.openUserProfile(props);
          } else {
            this.preopenUserProfile = props;
          }
        };
        this.closeUserProfile = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.closeUserProfile();
          } else {
            this.preopenUserProfile = null;
          }
        };
        this.openOrganizationProfile = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.openOrganizationProfile(props);
          } else {
            this.preopenOrganizationProfile = props;
          }
        };
        this.closeOrganizationProfile = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.closeOrganizationProfile();
          } else {
            this.preopenOrganizationProfile = null;
          }
        };
        this.openCreateOrganization = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.openCreateOrganization(props);
          } else {
            this.preopenCreateOrganization = props;
          }
        };
        this.closeCreateOrganization = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.closeCreateOrganization();
          } else {
            this.preopenCreateOrganization = null;
          }
        };
        this.openSignUp = (props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.openSignUp(props);
          } else {
            this.preopenSignUp = props;
          }
        };
        this.closeSignUp = () => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.closeSignUp();
          } else {
            this.preopenSignUp = null;
          }
        };
        this.mountSignIn = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountSignIn(node, props);
          } else {
            this.premountSignInNodes.set(node, props);
          }
        };
        this.unmountSignIn = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountSignIn(node);
          } else {
            this.premountSignInNodes.delete(node);
          }
        };
        this.mountSignUp = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountSignUp(node, props);
          } else {
            this.premountSignUpNodes.set(node, props);
          }
        };
        this.unmountSignUp = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountSignUp(node);
          } else {
            this.premountSignUpNodes.delete(node);
          }
        };
        this.mountUserProfile = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountUserProfile(node, props);
          } else {
            this.premountUserProfileNodes.set(node, props);
          }
        };
        this.unmountUserProfile = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountUserProfile(node);
          } else {
            this.premountUserProfileNodes.delete(node);
          }
        };
        this.mountOrganizationProfile = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountOrganizationProfile(node, props);
          } else {
            this.premountOrganizationProfileNodes.set(node, props);
          }
        };
        this.unmountOrganizationProfile = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountOrganizationProfile(node);
          } else {
            this.premountOrganizationProfileNodes.delete(node);
          }
        };
        this.mountCreateOrganization = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountCreateOrganization(node, props);
          } else {
            this.premountCreateOrganizationNodes.set(node, props);
          }
        };
        this.unmountCreateOrganization = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountCreateOrganization(node);
          } else {
            this.premountCreateOrganizationNodes.delete(node);
          }
        };
        this.mountOrganizationSwitcher = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountOrganizationSwitcher(node, props);
          } else {
            this.premountOrganizationSwitcherNodes.set(node, props);
          }
        };
        this.unmountOrganizationSwitcher = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountOrganizationSwitcher(node);
          } else {
            this.premountOrganizationSwitcherNodes.delete(node);
          }
        };
        this.mountOrganizationList = (node, props) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountOrganizationList(node, props);
          } else {
            this.premountOrganizationListNodes.set(node, props);
          }
        };
        this.unmountOrganizationList = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountOrganizationList(node);
          } else {
            this.premountOrganizationListNodes.delete(node);
          }
        };
        this.mountUserButton = (node, userButtonProps) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.mountUserButton(node, userButtonProps);
          } else {
            this.premountUserButtonNodes.set(node, userButtonProps);
          }
        };
        this.unmountUserButton = (node) => {
          if (this.clerkjs && __privateGet(this, _loaded)) {
            this.clerkjs.unmountUserButton(node);
          } else {
            this.premountUserButtonNodes.delete(node);
          }
        };
        this.addListener = (listener) => {
          if (this.clerkjs) {
            return this.clerkjs.addListener(listener);
          } else {
            const unsubscribe = () => {
              var _a;
              const listenerHandlers = this.premountAddListenerCalls.get(listener);
              if (listenerHandlers) {
                (_a = listenerHandlers.nativeUnsubscribe) == null ? void 0 : _a.call(listenerHandlers);
                this.premountAddListenerCalls.delete(listener);
              }
            };
            this.premountAddListenerCalls.set(listener, { unsubscribe, nativeUnsubscribe: void 0 });
            return unsubscribe;
          }
        };
        this.navigate = (to) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.navigate(to);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            void callback();
          } else {
            this.premountMethodCalls.set("navigate", callback);
          }
        };
        this.redirectWithAuth = async (...args) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectWithAuth(...args);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectWithAuth", callback);
            return;
          }
        };
        this.redirectToSignIn = async (opts) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignIn(opts);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectToSignIn", callback);
            return;
          }
        };
        this.redirectToSignUp = async (opts) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignUp(opts);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectToSignUp", callback);
            return;
          }
        };
        this.redirectToUserProfile = async () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToUserProfile();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectToUserProfile", callback);
            return;
          }
        };
        this.redirectToAfterSignUp = () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignUp();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectToAfterSignUp", callback);
          }
        };
        this.redirectToAfterSignIn = () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignIn();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToAfterSignIn", callback);
          }
        };
        this.redirectToAfterSignOut = () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignOut();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToAfterSignOut", callback);
          }
        };
        this.redirectToOrganizationProfile = async () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToOrganizationProfile();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectToOrganizationProfile", callback);
            return;
          }
        };
        this.redirectToCreateOrganization = async () => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.redirectToCreateOrganization();
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("redirectToCreateOrganization", callback);
            return;
          }
        };
        this.handleRedirectCallback = (params) => {
          var _a;
          const callback = () => {
            var _a2;
            return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleRedirectCallback(params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            void ((_a = callback()) == null ? void 0 : _a.catch(() => {
            }));
          } else {
            this.premountMethodCalls.set("handleRedirectCallback", callback);
          }
        };
        this.handleGoogleOneTapCallback = (signInOrUp, params) => {
          var _a;
          const callback = () => {
            var _a2;
            return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleGoogleOneTapCallback(signInOrUp, params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            void ((_a = callback()) == null ? void 0 : _a.catch(() => {
            }));
          } else {
            this.premountMethodCalls.set("handleGoogleOneTapCallback", callback);
          }
        };
        this.handleEmailLinkVerification = async (params) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.handleEmailLinkVerification(params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("handleEmailLinkVerification", callback);
          }
        };
        this.authenticateWithMetamask = async (params) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithMetamask(params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("authenticateWithMetamask", callback);
          }
        };
        this.authenticateWithCoinbaseWallet = async (params) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithCoinbaseWallet(params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("authenticateWithCoinbaseWallet", callback);
          }
        };
        this.authenticateWithWeb3 = async (params) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithWeb3(params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("authenticateWithWeb3", callback);
          }
        };
        this.authenticateWithGoogleOneTap = async (params) => {
          const clerkjs = await __privateMethod(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
          return clerkjs.authenticateWithGoogleOneTap(params);
        };
        this.createOrganization = async (params) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.createOrganization(params);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("createOrganization", callback);
          }
        };
        this.getOrganization = async (organizationId) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.getOrganization(organizationId);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("getOrganization", callback);
          }
        };
        this.signOut = async (signOutCallbackOrOptions, options2) => {
          const callback = () => {
            var _a;
            return (_a = this.clerkjs) == null ? void 0 : _a.signOut(signOutCallbackOrOptions, options2);
          };
          if (this.clerkjs && __privateGet(this, _loaded)) {
            return callback();
          } else {
            this.premountMethodCalls.set("signOut", callback);
          }
        };
        const { Clerk = null, publishableKey } = options || {};
        __privateSet(this, _publishableKey, publishableKey);
        __privateSet(this, _proxyUrl, options == null ? void 0 : options.proxyUrl);
        __privateSet(this, _domain, options == null ? void 0 : options.domain);
        this.options = options;
        this.Clerk = Clerk;
        this.mode = (0, import_browser.inBrowser)() ? "browser" : "server";
        if (!this.options.sdkMetadata) {
          this.options.sdkMetadata = SDK_METADATA;
        }
        void this.loadClerkJS();
      }
      get publishableKey() {
        return __privateGet(this, _publishableKey);
      }
      get loaded() {
        return __privateGet(this, _loaded);
      }
      static getOrCreateInstance(options) {
        if (!(0, import_browser.inBrowser)() || !__privateGet(this, _instance) || options.Clerk && __privateGet(this, _instance).Clerk !== options.Clerk) {
          __privateSet(this, _instance, new _IsomorphicClerk2(options));
        }
        return __privateGet(this, _instance);
      }
      static clearInstance() {
        __privateSet(this, _instance, null);
      }
      get domain() {
        if (typeof window !== "undefined" && window.location) {
          return (0, import_handleValueOrFn.handleValueOrFn)(__privateGet(this, _domain), new URL(window.location.href), "");
        }
        if (typeof __privateGet(this, _domain) === "function") {
          return errorThrower.throw(unsupportedNonBrowserDomainOrProxyUrlFunction);
        }
        return __privateGet(this, _domain) || "";
      }
      get proxyUrl() {
        if (typeof window !== "undefined" && window.location) {
          return (0, import_handleValueOrFn.handleValueOrFn)(__privateGet(this, _proxyUrl), new URL(window.location.href), "");
        }
        if (typeof __privateGet(this, _proxyUrl) === "function") {
          return errorThrower.throw(unsupportedNonBrowserDomainOrProxyUrlFunction);
        }
        return __privateGet(this, _proxyUrl) || "";
      }
      get sdkMetadata() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.sdkMetadata) || this.options.sdkMetadata || void 0;
      }
      get instanceType() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.instanceType;
      }
      get frontendApi() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.frontendApi) || "";
      }
      get isStandardBrowser() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.isStandardBrowser) || this.options.standardBrowser || false;
      }
      get isSatellite() {
        if (typeof window !== "undefined" && window.location) {
          return (0, import_handleValueOrFn.handleValueOrFn)(this.options.isSatellite, new URL(window.location.href), false);
        }
        if (typeof this.options.isSatellite === "function") {
          return errorThrower.throw(unsupportedNonBrowserDomainOrProxyUrlFunction);
        }
        return false;
      }
      async loadClerkJS() {
        var _a;
        if (this.mode !== "browser" || __privateGet(this, _loaded)) {
          return;
        }
        if (typeof window !== "undefined") {
          window.__clerk_publishable_key = __privateGet(this, _publishableKey);
          window.__clerk_proxy_url = this.proxyUrl;
          window.__clerk_domain = this.domain;
        }
        try {
          if (this.Clerk) {
            let c;
            if (isConstructor(this.Clerk)) {
              c = new this.Clerk(__privateGet(this, _publishableKey), {
                proxyUrl: this.proxyUrl,
                domain: this.domain
              });
              await c.load(this.options);
            } else {
              c = this.Clerk;
              if (!c.loaded) {
                await c.load(this.options);
              }
            }
            globalThis.Clerk = c;
          } else {
            if (!globalThis.Clerk) {
              await (0, import_loadClerkJsScript.loadClerkJsScript)({
                ...this.options,
                publishableKey: __privateGet(this, _publishableKey),
                proxyUrl: this.proxyUrl,
                domain: this.domain,
                nonce: this.options.nonce
              });
            }
            if (!globalThis.Clerk) {
              throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
            }
            await globalThis.Clerk.load(this.options);
          }
          if ((_a = globalThis.Clerk) == null ? void 0 : _a.loaded) {
            return this.hydrateClerkJS(globalThis.Clerk);
          }
          return;
        } catch (err) {
          const error = err;
          if (false) {
            console.error(error.stack || error.message || error);
          } else {
            throw err;
          }
          return;
        }
      }
      get version() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.version;
      }
      get client() {
        if (this.clerkjs) {
          return this.clerkjs.client;
        } else {
          return void 0;
        }
      }
      get session() {
        if (this.clerkjs) {
          return this.clerkjs.session;
        } else {
          return void 0;
        }
      }
      get user() {
        if (this.clerkjs) {
          return this.clerkjs.user;
        } else {
          return void 0;
        }
      }
      get organization() {
        if (this.clerkjs) {
          return this.clerkjs.organization;
        } else {
          return void 0;
        }
      }
      get telemetry() {
        if (this.clerkjs) {
          return this.clerkjs.telemetry;
        } else {
          return void 0;
        }
      }
      get __unstable__environment() {
        if (this.clerkjs) {
          return this.clerkjs.__unstable__environment;
        } else {
          return void 0;
        }
      }
      __unstable__setEnvironment(...args) {
        if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs) {
          this.clerkjs.__unstable__setEnvironment(args);
        } else {
          return void 0;
        }
      }
    };
    _loaded = /* @__PURE__ */ new WeakMap();
    _domain = /* @__PURE__ */ new WeakMap();
    _proxyUrl = /* @__PURE__ */ new WeakMap();
    _publishableKey = /* @__PURE__ */ new WeakMap();
    _instance = /* @__PURE__ */ new WeakMap();
    _IsomorphicClerk_instances = /* @__PURE__ */ new WeakSet();
    waitForClerkJS_fn = function() {
      return new Promise((resolve) => {
        this.addOnLoaded(() => resolve(this.clerkjs));
      });
    };
    __privateAdd(_IsomorphicClerk, _instance);
    var IsomorphicClerk = _IsomorphicClerk;
    var deriveState = (clerkLoaded2, state, initialState) => {
      if (!clerkLoaded2 && initialState) {
        return deriveFromSsrInitialState(initialState);
      }
      return deriveFromClientSideState(state);
    };
    var deriveFromSsrInitialState = (initialState) => {
      const userId = initialState.userId;
      const user = initialState.user;
      const sessionId = initialState.sessionId;
      const session = initialState.session;
      const organization = initialState.organization;
      const orgId = initialState.orgId;
      const orgRole = initialState.orgRole;
      const orgPermissions = initialState.orgPermissions;
      const orgSlug = initialState.orgSlug;
      const actor = initialState.actor;
      const __experimental_factorVerificationAge = initialState.__experimental_factorVerificationAge;
      return {
        userId,
        user,
        sessionId,
        session,
        organization,
        orgId,
        orgRole,
        orgPermissions,
        orgSlug,
        actor,
        __experimental_factorVerificationAge
      };
    };
    var deriveFromClientSideState = (state) => {
      var _a;
      const userId = state.user ? state.user.id : state.user;
      const user = state.user;
      const sessionId = state.session ? state.session.id : state.session;
      const session = state.session;
      const __experimental_factorVerificationAge = state.session ? state.session.__experimental_factorVerificationAge : null;
      const actor = session == null ? void 0 : session.actor;
      const organization = state.organization;
      const orgId = state.organization ? state.organization.id : state.organization;
      const orgSlug = organization == null ? void 0 : organization.slug;
      const membership = organization ? (_a = user == null ? void 0 : user.organizationMemberships) == null ? void 0 : _a.find((om) => om.organization.id === orgId) : organization;
      const orgPermissions = membership ? membership.permissions : membership;
      const orgRole = membership ? membership.role : membership;
      return {
        userId,
        user,
        sessionId,
        session,
        organization,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        actor,
        __experimental_factorVerificationAge
      };
    };
    function ClerkContextProvider(props) {
      const { isomorphicClerkOptions, initialState, children } = props;
      const { isomorphicClerk: clerk, loaded: clerkLoaded2 } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
      const [state, setState] = import_react25.default.useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
        organization: clerk.organization
      });
      import_react25.default.useEffect(() => {
        return clerk.addListener((e) => setState({ ...e }));
      }, []);
      const derivedState = deriveState(clerkLoaded2, state, initialState);
      const clerkCtx = import_react25.default.useMemo(() => ({ value: clerk }), [clerkLoaded2]);
      const clientCtx = import_react25.default.useMemo(() => ({ value: state.client }), [state.client]);
      const {
        sessionId,
        session,
        userId,
        user,
        orgId,
        actor,
        organization,
        orgRole,
        orgSlug,
        orgPermissions,
        __experimental_factorVerificationAge
      } = derivedState;
      const authCtx = import_react25.default.useMemo(() => {
        const value = {
          sessionId,
          userId,
          actor,
          orgId,
          orgRole,
          orgSlug,
          orgPermissions,
          __experimental_factorVerificationAge
        };
        return { value };
      }, [sessionId, userId, actor, orgId, orgRole, orgSlug, __experimental_factorVerificationAge]);
      const sessionCtx = import_react25.default.useMemo(() => ({ value: session }), [sessionId, session]);
      const userCtx = import_react25.default.useMemo(() => ({ value: user }), [userId, user]);
      const organizationCtx = import_react25.default.useMemo(() => {
        const value = {
          organization
        };
        return { value };
      }, [orgId, organization]);
      return (
        // @ts-expect-error value passed is of type IsomorphicClerk where the context expects LoadedClerk
        /* @__PURE__ */ import_react25.default.createElement(IsomorphicClerkContext.Provider, { value: clerkCtx }, /* @__PURE__ */ import_react25.default.createElement(import_react24.ClientContext.Provider, { value: clientCtx }, /* @__PURE__ */ import_react25.default.createElement(import_react24.SessionContext.Provider, { value: sessionCtx }, /* @__PURE__ */ import_react25.default.createElement(import_react24.OrganizationProvider, { ...organizationCtx.value }, /* @__PURE__ */ import_react25.default.createElement(AuthContext.Provider, { value: authCtx }, /* @__PURE__ */ import_react25.default.createElement(import_react24.UserContext.Provider, { value: userCtx }, children))))))
      );
    }
    var useLoadedIsomorphicClerk = (options) => {
      const [loaded, setLoaded] = import_react25.default.useState(false);
      const isomorphicClerk = import_react25.default.useMemo(() => IsomorphicClerk.getOrCreateInstance(options), []);
      import_react25.default.useEffect(() => {
        void isomorphicClerk.__unstable__updateProps({ appearance: options.appearance });
      }, [options.appearance]);
      import_react25.default.useEffect(() => {
        void isomorphicClerk.__unstable__updateProps({ options });
      }, [options.localization]);
      import_react25.default.useEffect(() => {
        isomorphicClerk.addOnLoaded(() => setLoaded(true));
      }, []);
      import_react25.default.useEffect(() => {
        return () => {
          IsomorphicClerk.clearInstance();
        };
      }, []);
      return { isomorphicClerk, loaded };
    };
    function ClerkProviderBase(props) {
      const { initialState, children, ...restIsomorphicClerkOptions } = props;
      const { publishableKey = "", Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;
      if (!userInitialisedClerk) {
        if (!publishableKey) {
          errorThrower.throwMissingPublishableKeyError();
        } else if (publishableKey && !(0, import_keys.isPublishableKey)(publishableKey)) {
          errorThrower.throwInvalidPublishableKeyError({ key: publishableKey });
        }
      }
      return /* @__PURE__ */ import_react26.default.createElement(
        ClerkContextProvider,
        {
          initialState,
          isomorphicClerkOptions: restIsomorphicClerkOptions
        },
        children
      );
    }
    var ClerkProvider = withMaxAllowedInstancesGuard(ClerkProviderBase, "ClerkProvider", multipleClerkProvidersError);
    ClerkProvider.displayName = "ClerkProvider";
    setErrorThrowerOptions({ packageName: "@clerk/clerk-react" });
    (0, import_loadClerkJsScript2.setClerkJsLoadingErrorPackageName)("@clerk/clerk-react");
  }
});

// node_modules/@clerk/remix/dist/utils/errors.js
var require_errors = __commonJS({
  "node_modules/@clerk/remix/dist/utils/errors.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var errors_exports = {};
    __export2(errors_exports, {
      invalidClerkStatePropError: () => invalidClerkStatePropError,
      invalidRootLoaderCallbackReturn: () => invalidRootLoaderCallbackReturn,
      noClerkStateError: () => noClerkStateError,
      noLoaderArgsPassedInGetAuth: () => noLoaderArgsPassedInGetAuth,
      noSecretKeyError: () => noSecretKeyError,
      publishableKeyMissingErrorInSpaMode: () => publishableKeyMissingErrorInSpaMode,
      satelliteAndMissingProxyUrlAndDomain: () => satelliteAndMissingProxyUrlAndDomain,
      satelliteAndMissingSignInUrl: () => satelliteAndMissingSignInUrl
    });
    module.exports = __toCommonJS2(errors_exports);
    var createErrorMessage = (msg) => {
      return `\u{1F512} Clerk: ${msg.trim()}

For more info, check out the docs: https://clerk.com/docs,
or come say hi in our discord server: https://clerk.com/discord

`;
    };
    var ssrExample = `Use 'rootAuthLoader' as your root loader. Then, simply wrap the App component with ClerkApp and make it the default export.
Example:

import { ClerkApp } from '@clerk/remix';
import { rootAuthLoader } from '@clerk/remix/ssr.server';

export const loader: LoaderFunction = args => rootAuthLoader(args)

function App() {
  return (
    <html lang='en'>
      ...
    </html>
  );
}

export default ClerkApp(App, { publishableKey: '...' });
`;
    var invalidClerkStatePropError = createErrorMessage(`
You're trying to pass an invalid object in "<ClerkProvider clerkState={...}>".

${ssrExample}
`);
    var noClerkStateError = createErrorMessage(`
Looks like you didn't pass 'clerkState' to "<ClerkProvider clerkState={...}>".

${ssrExample}
`);
    var noLoaderArgsPassedInGetAuth = createErrorMessage(`
You're calling 'getAuth()' from a loader, without providing the loader args object.
Example:

export const loader: LoaderFunction = async (args) => {
  const { sessionId } = await getAuth(args);
  ...
};
`);
    var invalidRootLoaderCallbackReturn = createErrorMessage(`
You're returning an invalid response from the 'rootAuthLoader' called from the loader in root.tsx.
You can only return plain objects, responses created using the Remix 'json()' and 'redirect()' helpers,
custom redirect 'Response' instances (status codes in the range of 300 to 400),
or custom json 'Response' instances (containing a body that is a valid json string).
If you want to return a primitive value or an array, you can always wrap the response with an object.

Example:

export const loader: LoaderFunction = args => rootAuthLoader(args, ({ auth }) => {
    const { userId } = auth;
    const posts: Post[] = database.getPostsByUserId(userId);

    return json({ data: posts })
    // or
    return new Response(JSON.stringify({ data: posts }), { headers: { 'Content-Type': 'application/json' } });
    // or
    return { data: posts };
})
`);
    var noSecretKeyError = createErrorMessage(`
A secretKey must be provided in order to use SSR and the exports from @clerk/remix/api.');
If your runtime supports environment variables, you can add a CLERK_SECRET_KEY variable to your config.
Otherwise, you can pass a secretKey parameter to rootAuthLoader or getAuth.
`);
    var satelliteAndMissingProxyUrlAndDomain = createErrorMessage(
      `Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`
    );
    var satelliteAndMissingSignInUrl = createErrorMessage(`
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL.`);
    var publishableKeyMissingErrorInSpaMode = createErrorMessage(`
You're trying to use Clerk in Remix SPA Mode without providing a Publishable Key.
Please provide the publishableKey option on the ClerkApp component.

Example:

export default ClerkApp(App, {
  publishableKey: 'pk_test_XXX'
});
`);
  }
});

// node_modules/@clerk/remix/dist/utils/utils.js
var require_utils = __commonJS({
  "node_modules/@clerk/remix/dist/utils/utils.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var utils_exports = {};
    __export2(utils_exports, {
      assertEnvVar: () => assertEnvVar,
      assertPublishableKeyInSpaMode: () => assertPublishableKeyInSpaMode,
      assertValidClerkState: () => assertValidClerkState,
      getEnvVariable: () => getEnvVariable,
      inSpaMode: () => inSpaMode,
      warnForSsr: () => warnForSsr
    });
    module.exports = __toCommonJS2(utils_exports);
    var import_errors = require_errors();
    function warnForSsr(val) {
      if (!val || !val.__internal_clerk_state) {
        console.warn(import_errors.noClerkStateError);
      }
    }
    function assertEnvVar(name, errorMessage) {
      if (!name || typeof name !== "string") {
        throw new Error(errorMessage);
      }
    }
    function assertValidClerkState(val) {
      if (!val) {
        throw new Error(import_errors.noClerkStateError);
      }
      if (!!val && !val.__internal_clerk_state) {
        throw new Error(import_errors.invalidClerkStatePropError);
      }
    }
    function assertPublishableKeyInSpaMode(key) {
      if (!key || typeof key !== "string") {
        throw new Error(import_errors.publishableKeyMissingErrorInSpaMode);
      }
    }
    var hasCloudflareProxyContext = (context) => {
      var _a;
      return !!((_a = context == null ? void 0 : context.cloudflare) == null ? void 0 : _a.env);
    };
    var hasCloudflareContext = (context) => {
      return !!(context == null ? void 0 : context.env);
    };
    var getEnvVariable = (name, context) => {
      if (typeof process !== "undefined" && process.env && typeof process.env[name] === "string") {
        return process.env[name];
      }
      if (hasCloudflareProxyContext(context)) {
        return context.cloudflare.env[name] || "";
      }
      if (hasCloudflareContext(context)) {
        return context.env[name] || "";
      }
      if (context && typeof context[name] === "string") {
        return context[name];
      }
      try {
        return globalThis[name];
      } catch (_) {
      }
      return "";
    };
    var inSpaMode = () => {
      var _a;
      if (typeof window !== "undefined" && typeof ((_a = window.__remixContext) == null ? void 0 : _a.isSpaMode) !== "undefined") {
        return window.__remixContext.isSpaMode;
      }
      return false;
    };
  }
});

// node_modules/@clerk/remix/dist/utils/index.js
var require_utils2 = __commonJS({
  "node_modules/@clerk/remix/dist/utils/index.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var utils_exports = {};
    module.exports = __toCommonJS2(utils_exports);
    __reExport(utils_exports, require_utils(), module.exports);
  }
});

// node_modules/@clerk/remix/dist/client/RemixOptionsContext.js
var require_RemixOptionsContext = __commonJS({
  "node_modules/@clerk/remix/dist/client/RemixOptionsContext.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var RemixOptionsContext_exports = {};
    __export2(RemixOptionsContext_exports, {
      ClerkRemixOptionsProvider: () => ClerkRemixOptionsProvider,
      useClerkRemixOptions: () => useClerkRemixOptions
    });
    module.exports = __toCommonJS2(RemixOptionsContext_exports);
    var import_react4 = __toESM2(require_react());
    var ClerkRemixOptionsCtx = import_react4.default.createContext(void 0);
    ClerkRemixOptionsCtx.displayName = "ClerkRemixOptionsCtx";
    var useClerkRemixOptions = () => {
      const ctx = import_react4.default.useContext(ClerkRemixOptionsCtx);
      return ctx.value;
    };
    var ClerkRemixOptionsProvider = (props) => {
      const { children, options } = props;
      return /* @__PURE__ */ import_react4.default.createElement(ClerkRemixOptionsCtx.Provider, { value: { value: options } }, children);
    };
  }
});

// node_modules/@clerk/remix/dist/client/useAwaitableNavigate.js
var require_useAwaitableNavigate = __commonJS({
  "node_modules/@clerk/remix/dist/client/useAwaitableNavigate.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var useAwaitableNavigate_exports = {};
    __export2(useAwaitableNavigate_exports, {
      useAwaitableNavigate: () => useAwaitableNavigate
    });
    module.exports = __toCommonJS2(useAwaitableNavigate_exports);
    var import_react4 = (init_esm(), __toCommonJS(esm_exports));
    var import_react22 = __toESM2(require_react());
    var useAwaitableNavigate = () => {
      const navigate = (0, import_react4.useNavigate)();
      const location = (0, import_react4.useLocation)();
      const resolveFunctionsRef = import_react22.default.useRef([]);
      const resolveAll = () => {
        resolveFunctionsRef.current.forEach((resolve) => resolve());
        resolveFunctionsRef.current.splice(0, resolveFunctionsRef.current.length);
      };
      import_react22.default.useEffect(() => {
        resolveAll();
      }, [location]);
      return (to, opts) => {
        return new Promise((res) => {
          resolveFunctionsRef.current.push(res);
          navigate(to, opts);
        });
      };
    };
  }
});

// node_modules/@clerk/remix/dist/client/RemixClerkProvider.js
var require_RemixClerkProvider = __commonJS({
  "node_modules/@clerk/remix/dist/client/RemixClerkProvider.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var RemixClerkProvider_exports = {};
    __export2(RemixClerkProvider_exports, {
      ClerkProvider: () => ClerkProvider
    });
    module.exports = __toCommonJS2(RemixClerkProvider_exports);
    var import_clerk_react = require_dist2();
    var import_react4 = __toESM2(require_react());
    var import_utils = require_utils2();
    var import_RemixOptionsContext = require_RemixOptionsContext();
    var import_useAwaitableNavigate = require_useAwaitableNavigate();
    __reExport(RemixClerkProvider_exports, require_dist2(), module.exports);
    var SDK_METADATA = {
      name: "@clerk/remix",
      version: "4.2.35"
    };
    var awaitableNavigateRef = { current: void 0 };
    function ClerkProvider({ children, ...rest }) {
      const awaitableNavigate = (0, import_useAwaitableNavigate.useAwaitableNavigate)();
      const isSpaMode = (0, import_utils.inSpaMode)();
      import_react4.default.useEffect(() => {
        awaitableNavigateRef.current = awaitableNavigate;
      }, [awaitableNavigate]);
      const { clerkState, ...restProps } = rest;
      import_clerk_react.ClerkProvider.displayName = "ReactClerkProvider";
      if (!isSpaMode) {
        (0, import_utils.assertValidClerkState)(clerkState);
      }
      const {
        __clerk_ssr_state,
        __publishableKey,
        __proxyUrl,
        __domain,
        __isSatellite,
        __clerk_debug,
        __signInUrl,
        __signUpUrl,
        __afterSignInUrl,
        __afterSignUpUrl,
        __signInForceRedirectUrl,
        __signUpForceRedirectUrl,
        __signInFallbackRedirectUrl,
        __signUpFallbackRedirectUrl,
        __clerkJSUrl,
        __clerkJSVersion,
        __telemetryDisabled,
        __telemetryDebug
      } = (clerkState == null ? void 0 : clerkState.__internal_clerk_state) || {};
      import_react4.default.useEffect(() => {
        if (!isSpaMode) {
          (0, import_utils.warnForSsr)(clerkState);
        }
      }, []);
      import_react4.default.useEffect(() => {
        window.__clerk_debug = __clerk_debug;
      }, []);
      const mergedProps = {
        publishableKey: __publishableKey,
        proxyUrl: __proxyUrl,
        domain: __domain,
        isSatellite: __isSatellite,
        signInUrl: __signInUrl,
        signUpUrl: __signUpUrl,
        afterSignInUrl: __afterSignInUrl,
        afterSignUpUrl: __afterSignUpUrl,
        signInForceRedirectUrl: __signInForceRedirectUrl,
        signUpForceRedirectUrl: __signUpForceRedirectUrl,
        signInFallbackRedirectUrl: __signInFallbackRedirectUrl,
        signUpFallbackRedirectUrl: __signUpFallbackRedirectUrl,
        clerkJSUrl: __clerkJSUrl,
        clerkJSVersion: __clerkJSVersion,
        telemetry: {
          disabled: __telemetryDisabled,
          debug: __telemetryDebug
        }
      };
      return /* @__PURE__ */ import_react4.default.createElement(import_RemixOptionsContext.ClerkRemixOptionsProvider, { options: mergedProps }, /* @__PURE__ */ import_react4.default.createElement(
        import_clerk_react.ClerkProvider,
        {
          routerPush: (to) => {
            var _a;
            return (_a = awaitableNavigateRef.current) == null ? void 0 : _a.call(awaitableNavigateRef, to);
          },
          routerReplace: (to) => {
            var _a;
            return (_a = awaitableNavigateRef.current) == null ? void 0 : _a.call(awaitableNavigateRef, to, { replace: true });
          },
          initialState: __clerk_ssr_state,
          sdkMetadata: SDK_METADATA,
          ...mergedProps,
          ...restProps
        },
        children
      ));
    }
  }
});

// node_modules/@clerk/remix/dist/client/ClerkApp.js
var require_ClerkApp = __commonJS({
  "node_modules/@clerk/remix/dist/client/ClerkApp.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var ClerkApp_exports = {};
    __export2(ClerkApp_exports, {
      ClerkApp: () => ClerkApp2
    });
    module.exports = __toCommonJS2(ClerkApp_exports);
    var import_react4 = (init_esm(), __toCommonJS(esm_exports));
    var import_react22 = __toESM2(require_react());
    var import_utils = require_utils2();
    var import_RemixClerkProvider = require_RemixClerkProvider();
    function ClerkApp2(App, opts = {}) {
      return () => {
        let clerkState;
        const isSpaMode = (0, import_utils.inSpaMode)();
        if (!isSpaMode) {
          const loaderData = (0, import_react4.useLoaderData)();
          clerkState = loaderData.clerkState;
        }
        if (isSpaMode) {
          (0, import_utils.assertPublishableKeyInSpaMode)(opts.publishableKey);
        }
        return /* @__PURE__ */ import_react22.default.createElement(
          import_RemixClerkProvider.ClerkProvider,
          {
            ...opts,
            clerkState
          },
          /* @__PURE__ */ import_react22.default.createElement(App, null)
        );
      };
    }
  }
});

// node_modules/@clerk/remix/dist/client/types.js
var require_types = __commonJS({
  "node_modules/@clerk/remix/dist/client/types.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var types_exports = {};
    module.exports = __toCommonJS2(types_exports);
  }
});

// node_modules/@clerk/clerk-react/dist/internal.js
var require_internal = __commonJS({
  "node_modules/@clerk/clerk-react/dist/internal.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var internal_exports = {};
    __export2(internal_exports, {
      MultisessionAppSupport: () => MultisessionAppSupport,
      buildClerkJsScriptAttributes: () => import_loadClerkJsScript.buildClerkJsScriptAttributes,
      clerkJsScriptUrl: () => import_loadClerkJsScript.clerkJsScriptUrl,
      setClerkJsLoadingErrorPackageName: () => import_loadClerkJsScript.setClerkJsLoadingErrorPackageName,
      setErrorThrowerOptions: () => setErrorThrowerOptions,
      useRoutingProps: () => useRoutingProps
    });
    module.exports = __toCommonJS2(internal_exports);
    var import_error = require_error();
    var errorThrower = (0, import_error.buildErrorThrower)({ packageName: "@clerk/clerk-react" });
    function setErrorThrowerOptions(options) {
      errorThrower.setMessages(options).setPackageName(options);
    }
    var import_react11 = __toESM2(require_react());
    var import_react4 = require_react2();
    var [AuthContext, useAuthContext] = (0, import_react4.createContextAndHook)("AuthContext");
    var import_react22 = require_react2();
    var useIsomorphicClerkContext = import_react22.useClerkInstanceContext;
    var import_react32 = require_react2();
    var import_authorization = require_authorization();
    var import_react5 = require_react();
    var noPathProvidedError = (componentName) => `The <${componentName}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${componentName} path={'/my-path'} />`;
    var incompatibleRoutingWithPathProvidedError = (componentName) => `The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${componentName}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`;
    var import_react42 = require_react2();
    var useAssertWrappedByClerkProvider = (source) => {
      (0, import_react42.useAssertWrappedByClerkProvider)(() => {
        errorThrower.throwMissingClerkProviderError({ source });
      });
    };
    var import_react6 = __toESM2(require_react());
    var import_react7 = require_react2();
    var import_telemetry = require_telemetry();
    var import_react8 = require_react2();
    var import_telemetry2 = require_telemetry();
    var import_react9 = require_react2();
    var import_react10 = __toESM2(require_react());
    var withClerk = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        useAssertWrappedByClerkProvider(displayName || "withClerk");
        const clerk = useIsomorphicClerkContext();
        if (!clerk.loaded) {
          return null;
        }
        return /* @__PURE__ */ import_react10.default.createElement(
          Component,
          {
            ...props,
            clerk
          }
        );
      };
      HOC.displayName = `withClerk(${displayName})`;
      return HOC;
    };
    var RedirectToSignIn = withClerk(({ clerk, ...props }) => {
      const { client, session } = clerk;
      const hasActiveSessions = client.activeSessions && client.activeSessions.length > 0;
      import_react11.default.useEffect(() => {
        if (session === null && hasActiveSessions) {
          void clerk.redirectToAfterSignOut();
        } else {
          void clerk.redirectToSignIn(props);
        }
      }, []);
      return null;
    }, "RedirectToSignIn");
    var RedirectToSignUp = withClerk(({ clerk, ...props }) => {
      import_react11.default.useEffect(() => {
        void clerk.redirectToSignUp(props);
      }, []);
      return null;
    }, "RedirectToSignUp");
    var RedirectToUserProfile = withClerk(({ clerk }) => {
      import_react11.default.useEffect(() => {
        void clerk.redirectToUserProfile();
      }, []);
      return null;
    }, "RedirectToUserProfile");
    var RedirectToOrganizationProfile = withClerk(({ clerk }) => {
      import_react11.default.useEffect(() => {
        void clerk.redirectToOrganizationProfile();
      }, []);
      return null;
    }, "RedirectToOrganizationProfile");
    var RedirectToCreateOrganization = withClerk(({ clerk }) => {
      import_react11.default.useEffect(() => {
        void clerk.redirectToCreateOrganization();
      }, []);
      return null;
    }, "RedirectToCreateOrganization");
    var AuthenticateWithRedirectCallback = withClerk(
      ({ clerk, ...handleRedirectCallbackParams }) => {
        import_react11.default.useEffect(() => {
          void clerk.handleRedirectCallback(handleRedirectCallbackParams);
        }, []);
        return null;
      },
      "AuthenticateWithRedirectCallback"
    );
    var MultisessionAppSupport = ({ children }) => {
      useAssertWrappedByClerkProvider("MultisessionAppSupport");
      const session = (0, import_react32.useSessionContext)();
      return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, { key: session ? session.id : "no-users" }, children);
    };
    function useRoutingProps(componentName, props, routingOptions) {
      const path = props.path || (routingOptions == null ? void 0 : routingOptions.path);
      const routing = props.routing || (routingOptions == null ? void 0 : routingOptions.routing) || "path";
      if (routing === "path") {
        if (!path) {
          return errorThrower.throw(noPathProvidedError(componentName));
        }
        return {
          ...routingOptions,
          ...props,
          routing: "path"
        };
      }
      if (props.path) {
        return errorThrower.throw(incompatibleRoutingWithPathProvidedError(componentName));
      }
      return {
        ...routingOptions,
        ...props,
        path: void 0
      };
    }
    var import_loadClerkJsScript = require_loadClerkJsScript();
  }
});

// node_modules/@clerk/remix/dist/client/usePathnameWithoutSplatRouteParams.js
var require_usePathnameWithoutSplatRouteParams = __commonJS({
  "node_modules/@clerk/remix/dist/client/usePathnameWithoutSplatRouteParams.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var usePathnameWithoutSplatRouteParams_exports = {};
    __export2(usePathnameWithoutSplatRouteParams_exports, {
      usePathnameWithoutSplatRouteParams: () => usePathnameWithoutSplatRouteParams
    });
    module.exports = __toCommonJS2(usePathnameWithoutSplatRouteParams_exports);
    var import_react4 = (init_esm(), __toCommonJS(esm_exports));
    var usePathnameWithoutSplatRouteParams = () => {
      const params = (0, import_react4.useParams)();
      const { pathname } = (0, import_react4.useLocation)();
      const splatRouteParam = params["*"] || "";
      const path = pathname.replace(splatRouteParam, "").replace(/\/$/, "").replace(/^\//, "").trim();
      return `/${path}`;
    };
  }
});

// node_modules/@clerk/remix/dist/client/uiComponents.js
var require_uiComponents = __commonJS({
  "node_modules/@clerk/remix/dist/client/uiComponents.js"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var uiComponents_exports = {};
    __export2(uiComponents_exports, {
      CreateOrganization: () => CreateOrganization,
      OrganizationProfile: () => OrganizationProfile,
      SignIn: () => SignIn2,
      SignUp: () => SignUp2,
      UserProfile: () => UserProfile
    });
    module.exports = __toCommonJS2(uiComponents_exports);
    var import_clerk_react = require_dist2();
    var import_internal4 = require_internal();
    var import_react4 = __toESM2(require_react());
    var import_usePathnameWithoutSplatRouteParams = require_usePathnameWithoutSplatRouteParams();
    var UserProfile = Object.assign(
      (props) => {
        const path = (0, import_usePathnameWithoutSplatRouteParams.usePathnameWithoutSplatRouteParams)();
        return /* @__PURE__ */ import_react4.default.createElement(import_clerk_react.UserProfile, { ...(0, import_internal4.useRoutingProps)("UserProfile", props, { path }) });
      },
      { ...import_clerk_react.UserProfile }
    );
    var CreateOrganization = (props) => {
      const path = (0, import_usePathnameWithoutSplatRouteParams.usePathnameWithoutSplatRouteParams)();
      return /* @__PURE__ */ import_react4.default.createElement(import_clerk_react.CreateOrganization, { ...(0, import_internal4.useRoutingProps)("CreateOrganization", props, { path }) });
    };
    var OrganizationProfile = Object.assign(
      (props) => {
        const path = (0, import_usePathnameWithoutSplatRouteParams.usePathnameWithoutSplatRouteParams)();
        return /* @__PURE__ */ import_react4.default.createElement(import_clerk_react.OrganizationProfile, { ...(0, import_internal4.useRoutingProps)("OrganizationProfile", props, { path }) });
      },
      { ...import_clerk_react.OrganizationProfile }
    );
    var SignIn2 = (props) => {
      const path = (0, import_usePathnameWithoutSplatRouteParams.usePathnameWithoutSplatRouteParams)();
      return /* @__PURE__ */ import_react4.default.createElement(import_clerk_react.SignIn, { ...(0, import_internal4.useRoutingProps)("SignIn", props, { path }) });
    };
    var SignUp2 = (props) => {
      const path = (0, import_usePathnameWithoutSplatRouteParams.usePathnameWithoutSplatRouteParams)();
      return /* @__PURE__ */ import_react4.default.createElement(import_clerk_react.SignUp, { ...(0, import_internal4.useRoutingProps)("SignUp", props, { path }) });
    };
  }
});

// node_modules/@clerk/remix/dist/client/index.js
var require_client = __commonJS({
  "node_modules/@clerk/remix/dist/client/index.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var client_exports = {};
    __export2(client_exports, {
      ClerkApp: () => import_ClerkApp.ClerkApp,
      SignIn: () => import_uiComponents.SignIn,
      SignUp: () => import_uiComponents.SignUp,
      WithClerkState: () => import_types.WithClerkState
    });
    module.exports = __toCommonJS2(client_exports);
    __reExport(client_exports, require_RemixClerkProvider(), module.exports);
    var import_ClerkApp = require_ClerkApp();
    var import_types = require_types();
    var import_uiComponents = require_uiComponents();
  }
});

// node_modules/@clerk/remix/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@clerk/remix/dist/index.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    module.exports = __toCommonJS2(src_exports);
    var import_globalPolyfill = require_globalPolyfill();
    __reExport(src_exports, require_client(), module.exports);
    var import_internal4 = require_internal();
    (0, import_internal4.setErrorThrowerOptions)({ packageName: "@clerk/remix" });
  }
});

export {
  require_dist3 as require_dist
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-TLFI53YJ.js.map
