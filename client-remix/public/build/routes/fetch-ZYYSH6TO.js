import {
  CancerPatientData_default,
  esm_default
} from "/build/_shared/chunk-WNK5G7XI.js";
import {
  createHotContext
} from "/build/_shared/chunk-W3ZAYFKA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/fetch.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\fetch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\fetch.tsx"
  );
  import.meta.hot.lastModified = "1729600025536.3506";
}
var PatientData = () => {
  _s();
  const [web3, setWeb3] = (0, import_react.useState)(null);
  const [contract, setContract] = (0, import_react.useState)(null);
  const [account, setAccount] = (0, import_react.useState)("");
  const [patientIndex, setPatientIndex] = (0, import_react.useState)(0);
  const [patientData, setPatientData] = (0, import_react.useState)(null);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new esm_default(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (error2) {
        alert("User denied account access.");
      }
    } else {
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };
  const loadBlockchainData = async () => {
    const web32 = new esm_default(window.ethereum);
    const accounts = await web32.eth.getAccounts();
    if (accounts.length === 0) {
      alert("No accounts found. Please ensure your wallet is connected.");
      return;
    }
    setAccount(accounts[0]);
    const networkId = await web32.eth.net.getId();
    const networkData = CancerPatientData_default.networks[networkId];
    if (networkData) {
      const contractInstance = new web32.eth.Contract(CancerPatientData_default.abi, networkData.address);
      setContract(contractInstance);
    } else {
      alert("The smart contract is not deployed to the current network");
    }
  };
  const fetchPatientData = async () => {
    if (!contract) {
      setError("Contract is not initialized");
      return;
    }
    try {
      const data = await contract.methods.getPatient(patientIndex).call();
      setPatientData(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching patient data:", err);
      setError("Error fetching patient data");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "patient-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Fetch Patient Data" }, void 0, false, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", value: patientIndex, onChange: (e) => setPatientIndex(Number(e.target.value)), placeholder: "Enter patient index" }, void 0, false, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: fetchPatientData, children: "Fetch Patient" }, void 0, false, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      color: "red"
    }, children: error }, void 0, false, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    patientData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Patient Details" }, void 0, false, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "First Name: ",
        patientData[0]
      ] }, void 0, true, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Last Name: ",
        patientData[1]
      ] }, void 0, true, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Contact Number: ",
        patientData[2]
      ] }, void 0, true, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Gender: ",
        patientData[3]
      ] }, void 0, true, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Cancer Type: ",
        patientData[4]
      ] }, void 0, true, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 89,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fetch.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
};
_s(PatientData, "+mQKFAV+qaTcQr7T7owi6ZifISA=");
_c = PatientData;
var fetch_default = PatientData;
var _c;
$RefreshReg$(_c, "PatientData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  fetch_default as default
};
//# sourceMappingURL=/build/routes/fetch-ZYYSH6TO.js.map
