var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function validateForm() {
    return __awaiter(this, void 0, void 0, function () {
        var emailElement, passwordElement, data;
        return __generator(this, function (_a) {
            emailElement = document.getElementById("exampleInputEmail1");
            passwordElement = document.getElementById("exampleInputPassword1");
            data = { email: emailElement === null || emailElement === void 0 ? void 0 : emailElement.value.trim(), password: passwordElement.value.trim() };
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    try {
                        var result = performAsyncOperation();
                        console.log(result);
                        if (!data.email || !data.password) {
                            reject(new Error("Invalid"));
                        }
                        else {
                            resolve();
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                })];
        });
    });
}
function performAsyncOperation() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        console.log('Async operation completed');
                        resolve('Async operation completed');
                    }, 2000); // Simulating a 2-second delay
                })];
        });
    });
}
validateForm();
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve('Data fetched successfully!');
                    }, 2000);
                })];
        });
    });
}
//async-await function with loader
function fetchDataWithLoader() {
    return __awaiter(this, void 0, void 0, function () {
        var loader, content, result, error_1, loader_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    loader = document.getElementById('loader');
                    content = document.getElementById('content');
                    // Display loader while fetching data
                    loader.style.display = 'flex';
                    console.log('Fetching data...');
                    return [4 /*yield*/, fetchData()];
                case 1:
                    result = _a.sent();
                    // Hide loader when data is fetched
                    loader.style.display = 'none';
                    // Display the fetched data
                    content.innerHTML = "<p>".concat(result, "</p>");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    loader_1 = document.getElementById('loader');
                    console.error('Error fetching data:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the async function with loader
fetchDataWithLoader();
// async function validateForm(): Promise<void> {
//     const emailElement: HTMLInputElement | null = document.getElementById("exampleInputEmail1") as HTMLInputElement;
//     const passwordElement: HTMLInputElement | null = document.getElementById("exampleInputPassword1") as HTMLInputElement;
//     const data = new FormData();
//     data.append('email', emailElement?.value.trim() || '');
//     data.append('password', passwordElement?.value.trim() || '');
//     return new Promise(async (resolve, reject) => {
//        try {
//           const result = await performAsyncOperation();
//           console.log(result);
//           if (!data.get('email') || !data.get('password')) {
//              console.log("reaction");
//              reject(new Error("Fields are required"));
//           } else {
//              resolve();
//           }
//        } catch (error) {
//           console.log(error);
//           reject(error);
//        }
//     });
//  }
//  async function fetchDataWithLoader(): Promise<void> {
//     try {
//        const loader = document.getElementById('loader') as HTMLElement;
//        const content = document.getElementById('content') as HTMLElement;
//        // Display loader while fetching data
//        loader.style.display = 'flex';
//        console.log('Fetching data...');
//        // Simulate an asynchronous operation (e.g., API call)
//        await validateForm();
//        // Simulate another asynchronous operation (e.g., additional processing)
//        const result = await fetchData();
//        // Hide loader when data is fetched
//        loader.style.display = 'none';
//        // Display the fetched data
//        content.innerHTML = `<p>${result}</p>`;
//     } catch (error) {
//        const loader = document.getElementById('loader') as HTMLElement;
//        console.error('Error fetching data:', error);
//        // Display error message
//        const content = document.getElementById('content') as HTMLElement;
//        content.innerHTML = `<p>Error: ${error.message}</p>`;
//        // Hide loader in case of an error
//        loader.style.display = 'none';
//     }
//  }
//  // Call the async function with loader
//  fetchDataWithLoader();
