(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-http-loader', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-http-loader'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common.http, global.ng.common));
}(this, (function (exports, core, rxjs, operators, http, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var AbstractLoaderDirective = /** @class */ (function () {
        function AbstractLoaderDirective() {
        }
        __decorate([
            core.Input()
        ], AbstractLoaderDirective.prototype, "backgroundColor", void 0);
        AbstractLoaderDirective = __decorate([
            core.Directive()
        ], AbstractLoaderDirective);
        return AbstractLoaderDirective;
    }());

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkChasingDotsComponent = /** @class */ (function (_super) {
        __extends(SkChasingDotsComponent, _super);
        function SkChasingDotsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkChasingDotsComponent = __decorate([
            core.Component({
                selector: 'sk-chasing-dots',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-chasing-dots{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:2s linear infinite sk-chasingDotsRotate;animation:2s linear infinite sk-chasingDotsRotate}.sk-chasing-dots .sk-child{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDotsBounce;animation:2s ease-in-out infinite sk-chasingDotsBounce}.sk-chasing-dots .sk-dot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDotsRotate{100%{transform:rotate(360deg)}}@keyframes sk-chasingDotsRotate{100%{transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDotsBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-chasingDotsBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}"]
            })
        ], SkChasingDotsComponent);
        return SkChasingDotsComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkCubeGridComponent = /** @class */ (function (_super) {
        __extends(SkCubeGridComponent, _super);
        function SkCubeGridComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkCubeGridComponent = __decorate([
            core.Component({
                selector: 'sk-cube-grid',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-cube-grid{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid .sk-cube{width:33.33%;height:33.33%;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay;animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay}.sk-cube-grid .sk-cube1{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube2{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube3{-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid .sk-cube4{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube5{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube6{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube7{-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid .sk-cube8{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube9{-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}@keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}"]
            })
        ], SkCubeGridComponent);
        return SkCubeGridComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkDoubleBounceComponent = /** @class */ (function (_super) {
        __extends(SkDoubleBounceComponent, _super);
        function SkDoubleBounceComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkDoubleBounceComponent = __decorate([
            core.Component({
                selector: 'sk-double-bounce',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-double-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-double-bounce2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-double-bounce{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce .sk-child{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce;animation:2s ease-in-out infinite sk-doubleBounce}.sk-double-bounce .sk-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-doubleBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}"]
            })
        ], SkDoubleBounceComponent);
        return SkDoubleBounceComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkRotatingPlaneComponent = /** @class */ (function (_super) {
        __extends(SkRotatingPlaneComponent, _super);
        function SkRotatingPlaneComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkRotatingPlaneComponent = __decorate([
            core.Component({
                selector: 'sk-rotating-plane',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-rotating-plane colored-parent\" [style.background-color]='backgroundColor'></div>\n",
                styles: [".sk-rotating-plane{position:relative;top:50%;width:40px;height:40px;margin:auto;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
            })
        ], SkRotatingPlaneComponent);
        return SkRotatingPlaneComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkSpinnerPulseComponent = /** @class */ (function (_super) {
        __extends(SkSpinnerPulseComponent, _super);
        function SkSpinnerPulseComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkSpinnerPulseComponent = __decorate([
            core.Component({
                selector: 'sk-spinner-pulse',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-spinner sk-spinner-pulse colored-parent\" [style.background-color]='backgroundColor'></div>\n",
                styles: [".sk-spinner-pulse{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulseScaleOut;animation:1s ease-in-out infinite sk-pulseScaleOut}@-webkit-keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}"]
            })
        ], SkSpinnerPulseComponent);
        return SkSpinnerPulseComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkThreeBounceComponent = /** @class */ (function (_super) {
        __extends(SkThreeBounceComponent, _super);
        function SkThreeBounceComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkThreeBounceComponent = __decorate([
            core.Component({
                selector: 'sk-three-bounce',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-three-bounce{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce .sk-child{width:20px;height:20px;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-three-bounce;animation:1.4s ease-in-out infinite both sk-three-bounce}.sk-three-bounce .sk-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce .sk-bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}"]
            })
        ], SkThreeBounceComponent);
        return SkThreeBounceComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkWanderingCubesComponent = /** @class */ (function (_super) {
        __extends(SkWanderingCubesComponent, _super);
        function SkWanderingCubesComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkWanderingCubesComponent = __decorate([
            core.Component({
                selector: 'sk-wandering-cubes',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-wandering-cubes{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes .sk-cube{width:10px;height:10px;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube;animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube}.sk-wandering-cubes .sk-cube2{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}@keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}"]
            })
        ], SkWanderingCubesComponent);
        return SkWanderingCubesComponent;
    }(AbstractLoaderDirective));

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var SkWaveComponent = /** @class */ (function (_super) {
        __extends(SkWaveComponent, _super);
        function SkWaveComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkWaveComponent = __decorate([
            core.Component({
                selector: 'sk-wave',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-wave\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-wave{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave .sk-rect{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-waveStretchDelay;animation:1.2s ease-in-out infinite sk-waveStretchDelay}.sk-wave .sk-rect1{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.sk-wave .sk-rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-wave .sk-rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-wave .sk-rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-wave .sk-rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-waveStretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes sk-waveStretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}"]
            })
        ], SkWaveComponent);
        return SkWaveComponent;
    }(AbstractLoaderDirective));

    var PendingRequestsInterceptor = /** @class */ (function () {
        function PendingRequestsInterceptor() {
            this._pendingRequests = 0;
            this._pendingRequestsStatus$ = new rxjs.ReplaySubject(1);
            this._filteredUrlPatterns = [];
            this._filteredMethods = [];
            this._filteredHeaders = [];
        }
        Object.defineProperty(PendingRequestsInterceptor.prototype, "pendingRequestsStatus$", {
            get: function () {
                return this._pendingRequestsStatus$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PendingRequestsInterceptor.prototype, "pendingRequests", {
            get: function () {
                return this._pendingRequests;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PendingRequestsInterceptor.prototype, "filteredUrlPatterns", {
            get: function () {
                return this._filteredUrlPatterns;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PendingRequestsInterceptor.prototype, "filteredMethods", {
            set: function (httpMethods) {
                this._filteredMethods = httpMethods;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PendingRequestsInterceptor.prototype, "filteredHeaders", {
            set: function (value) {
                this._filteredHeaders = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PendingRequestsInterceptor.prototype, "forceByPass", {
            set: function (value) {
                this._forceByPass = value;
            },
            enumerable: true,
            configurable: true
        });
        PendingRequestsInterceptor.prototype.shouldBypassUrl = function (url) {
            return this._filteredUrlPatterns.some(function (e) {
                return e.test(url);
            });
        };
        PendingRequestsInterceptor.prototype.shouldBypassMethod = function (req) {
            return this._filteredMethods.some(function (e) {
                return e.toUpperCase() === req.method.toUpperCase();
            });
        };
        PendingRequestsInterceptor.prototype.shouldBypassHeader = function (req) {
            return this._filteredHeaders.some(function (e) {
                return req.headers.has(e);
            });
        };
        PendingRequestsInterceptor.prototype.shouldBypass = function (req) {
            return this._forceByPass
                || this.shouldBypassUrl(req.urlWithParams)
                || this.shouldBypassMethod(req)
                || this.shouldBypassHeader(req);
        };
        PendingRequestsInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            var shouldBypass = this.shouldBypass(req);
            if (!shouldBypass) {
                this._pendingRequests++;
                if (1 === this._pendingRequests) {
                    this._pendingRequestsStatus$.next(true);
                }
            }
            return next.handle(req).pipe(operators.finalize(function () {
                if (!shouldBypass) {
                    _this._pendingRequests--;
                    if (0 === _this._pendingRequests) {
                        _this._pendingRequestsStatus$.next(false);
                    }
                }
            }));
        };
        PendingRequestsInterceptor.ɵprov = core["ɵɵdefineInjectable"]({ factory: function PendingRequestsInterceptor_Factory() { return new PendingRequestsInterceptor(); }, token: PendingRequestsInterceptor, providedIn: "root" });
        PendingRequestsInterceptor = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PendingRequestsInterceptor);
        return PendingRequestsInterceptor;
    }());
    var PendingRequestsInterceptorProvider = [{
            provide: http.HTTP_INTERCEPTORS,
            useExisting: PendingRequestsInterceptor,
            multi: true
        }];

    var SpinnerVisibilityService = /** @class */ (function () {
        function SpinnerVisibilityService(pendingRequestsInterceptor) {
            this.pendingRequestsInterceptor = pendingRequestsInterceptor;
            this._visibility$ = new rxjs.ReplaySubject(1);
        }
        Object.defineProperty(SpinnerVisibilityService.prototype, "visibility$", {
            get: function () {
                return this._visibility$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        SpinnerVisibilityService.prototype.show = function () {
            this.pendingRequestsInterceptor.forceByPass = true;
            this._visibility$.next(true);
        };
        SpinnerVisibilityService.prototype.hide = function () {
            this._visibility$.next(false);
            this.pendingRequestsInterceptor.forceByPass = false;
        };
        SpinnerVisibilityService.ctorParameters = function () { return [
            { type: PendingRequestsInterceptor }
        ]; };
        SpinnerVisibilityService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function SpinnerVisibilityService_Factory() { return new SpinnerVisibilityService(core["ɵɵinject"](PendingRequestsInterceptor)); }, token: SpinnerVisibilityService, providedIn: "root" });
        SpinnerVisibilityService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], SpinnerVisibilityService);
        return SpinnerVisibilityService;
    }());

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var Spinkit = {
        skChasingDots: 'sk-chasing-dots',
        skCubeGrid: 'sk-cube-grid',
        skDoubleBounce: 'sk-double-bounce',
        skRotatingPlane: 'sk-rotationg-plane',
        skSpinnerPulse: 'sk-spinner-pulse',
        skThreeBounce: 'sk-three-bounce',
        skWanderingCubes: 'sk-wandering-cubes',
        skWave: 'sk-wave',
    };
    var SPINKIT_COMPONENTS = [
        SkCubeGridComponent,
        SkChasingDotsComponent,
        SkDoubleBounceComponent,
        SkRotatingPlaneComponent,
        SkSpinnerPulseComponent,
        SkThreeBounceComponent,
        SkWanderingCubesComponent,
        SkWaveComponent,
    ];

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var NgHttpLoaderComponent = /** @class */ (function () {
        function NgHttpLoaderComponent(pendingRequestsInterceptor, spinnerVisibility) {
            this.pendingRequestsInterceptor = pendingRequestsInterceptor;
            this.spinnerVisibility = spinnerVisibility;
            this.spinkit = Spinkit;
            this.visibleUntil = Date.now();
            this.backdrop = true;
            this.debounceDelay = 0;
            this.entryComponent = null;
            this.extraDuration = 0;
            this.filteredHeaders = [];
            this.filteredMethods = [];
            this.filteredUrlPatterns = [];
            this.minDuration = 0;
            this.opacity = '.7';
            this.spinner = Spinkit.skWave;
        }
        NgHttpLoaderComponent.prototype.initIsvisibleObservable = function () {
            var _this = this;
            var _a = __read(rxjs.partition(this.pendingRequestsInterceptor.pendingRequestsStatus$, function (h) { return h; }), 2), showSpinner$ = _a[0], hideSpinner$ = _a[1];
            this.isVisible$ = rxjs.merge(this.pendingRequestsInterceptor.pendingRequestsStatus$
                .pipe(operators.switchMap(function () { return showSpinner$.pipe(operators.debounce(function () { return rxjs.timer(_this.debounceDelay); })); })), showSpinner$
                .pipe(operators.switchMap(function () { return hideSpinner$.pipe(operators.debounce(function () { return _this.getVisibilityTimer$(); })); })), this.spinnerVisibility.visibility$).pipe(operators.distinctUntilChanged(), operators.tap(function (h) { return _this.updateExpirationDelay(h); }));
        };
        NgHttpLoaderComponent.prototype.ngOnInit = function () {
            this.initIsvisibleObservable();
            this.nullifySpinnerIfEntryComponentIsDefined();
            this.initFilters();
        };
        NgHttpLoaderComponent.prototype.nullifySpinnerIfEntryComponentIsDefined = function () {
            if (this.entryComponent) {
                this.spinner = null;
            }
        };
        NgHttpLoaderComponent.prototype.initFilters = function () {
            this.initFilteredUrlPatterns();
            this.initFilteredMethods();
            this.initFilteredHeaders();
        };
        NgHttpLoaderComponent.prototype.initFilteredUrlPatterns = function () {
            var _this = this;
            if (!(this.filteredUrlPatterns instanceof Array)) {
                throw new TypeError('`filteredUrlPatterns` must be an array.');
            }
            if (!!this.filteredUrlPatterns.length) {
                this.filteredUrlPatterns.forEach(function (e) {
                    return _this.pendingRequestsInterceptor.filteredUrlPatterns.push(new RegExp(e));
                });
            }
        };
        NgHttpLoaderComponent.prototype.initFilteredMethods = function () {
            if (!(this.filteredMethods instanceof Array)) {
                throw new TypeError('`filteredMethods` must be an array.');
            }
            this.pendingRequestsInterceptor.filteredMethods = this.filteredMethods;
        };
        NgHttpLoaderComponent.prototype.initFilteredHeaders = function () {
            if (!(this.filteredHeaders instanceof Array)) {
                throw new TypeError('`filteredHeaders` must be an array.');
            }
            this.pendingRequestsInterceptor.filteredHeaders = this.filteredHeaders;
        };
        NgHttpLoaderComponent.prototype.updateExpirationDelay = function (showSpinner) {
            if (showSpinner) {
                this.visibleUntil = Date.now() + this.minDuration;
            }
        };
        NgHttpLoaderComponent.prototype.getVisibilityTimer$ = function () {
            return rxjs.timer(Math.max(this.extraDuration, this.visibleUntil - Date.now()));
        };
        NgHttpLoaderComponent.ctorParameters = function () { return [
            { type: PendingRequestsInterceptor },
            { type: SpinnerVisibilityService }
        ]; };
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "backdrop", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "backgroundColor", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "debounceDelay", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "entryComponent", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "extraDuration", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "filteredHeaders", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "filteredMethods", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "filteredUrlPatterns", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "minDuration", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "opacity", void 0);
        __decorate([
            core.Input()
        ], NgHttpLoaderComponent.prototype, "spinner", void 0);
        NgHttpLoaderComponent = __decorate([
            core.Component({
                selector: 'ng-http-loader',
                template: "<div id=\"spinner\"\n     *ngIf=\"isVisible$ | async\"\n     [class.backdrop]=\"backdrop\"\n     [style.opacity]=\"opacity\">\n\n    <ng-container *ngComponentOutlet=\"entryComponent\"></ng-container>\n\n    <sk-cube-grid\n        *ngIf=\"spinner === spinkit.skCubeGrid\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-cube-grid>\n\n    <sk-chasing-dots\n        *ngIf=\"spinner === spinkit.skChasingDots\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-chasing-dots>\n\n    <sk-double-bounce\n        *ngIf=\"spinner === spinkit.skDoubleBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-double-bounce>\n\n    <sk-rotating-plane\n        *ngIf=\"spinner === spinkit.skRotatingPlane\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-rotating-plane>\n\n    <sk-spinner-pulse\n        *ngIf=\"spinner === spinkit.skSpinnerPulse\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-spinner-pulse>\n\n    <sk-three-bounce\n        *ngIf=\"spinner === spinkit.skThreeBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-three-bounce>\n\n    <sk-wandering-cubes\n        *ngIf=\"spinner === spinkit.skWanderingCubes\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wandering-cubes>\n\n    <sk-wave\n        *ngIf=\"spinner === spinkit.skWave\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wave>\n\n</div>\n\n",
                styles: ["#spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop{top:0;left:0;height:100%;width:100%;background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;transform:none}::ng-deep .colored-parent,::ng-deep .colored>div{background-color:#333}"]
            })
        ], NgHttpLoaderComponent);
        return NgHttpLoaderComponent;
    }());

    /*
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    var NgHttpLoaderModule = /** @class */ (function () {
        function NgHttpLoaderModule() {
        }
        NgHttpLoaderModule_1 = NgHttpLoaderModule;
        NgHttpLoaderModule.forRoot = function () {
            return {
                ngModule: NgHttpLoaderModule_1,
                providers: [
                    PendingRequestsInterceptorProvider,
                ],
            };
        };
        var NgHttpLoaderModule_1;
        NgHttpLoaderModule = NgHttpLoaderModule_1 = __decorate([
            core.NgModule({
                declarations: __spread([
                    NgHttpLoaderComponent
                ], SPINKIT_COMPONENTS),
                imports: [
                    common.CommonModule,
                ],
                exports: __spread([
                    NgHttpLoaderComponent
                ], SPINKIT_COMPONENTS),
            })
        ], NgHttpLoaderModule);
        return NgHttpLoaderModule;
    }());

    exports.AbstractLoaderDirective = AbstractLoaderDirective;
    exports.NgHttpLoaderComponent = NgHttpLoaderComponent;
    exports.NgHttpLoaderModule = NgHttpLoaderModule;
    exports.PendingRequestsInterceptor = PendingRequestsInterceptor;
    exports.PendingRequestsInterceptorProvider = PendingRequestsInterceptorProvider;
    exports.SPINKIT_COMPONENTS = SPINKIT_COMPONENTS;
    exports.SkChasingDotsComponent = SkChasingDotsComponent;
    exports.SkCubeGridComponent = SkCubeGridComponent;
    exports.SkDoubleBounceComponent = SkDoubleBounceComponent;
    exports.SkRotatingPlaneComponent = SkRotatingPlaneComponent;
    exports.SkSpinnerPulseComponent = SkSpinnerPulseComponent;
    exports.SkThreeBounceComponent = SkThreeBounceComponent;
    exports.SkWanderingCubesComponent = SkWanderingCubesComponent;
    exports.SkWaveComponent = SkWaveComponent;
    exports.Spinkit = Spinkit;
    exports.SpinnerVisibilityService = SpinnerVisibilityService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-http-loader.umd.js.map
