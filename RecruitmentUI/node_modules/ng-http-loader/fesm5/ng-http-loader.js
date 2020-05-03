import { __decorate, __extends, __read, __spread } from 'tslib';
import { Input, Directive, Component, ɵɵdefineInjectable, Injectable, ɵɵinject, NgModule } from '@angular/core';
import { ReplaySubject, partition, merge, timer } from 'rxjs';
import { finalize, switchMap, debounce, distinctUntilChanged, tap } from 'rxjs/operators';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
        Input()
    ], AbstractLoaderDirective.prototype, "backgroundColor", void 0);
    AbstractLoaderDirective = __decorate([
        Directive()
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
        Component({
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
        Component({
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
        Component({
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
        Component({
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
        Component({
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
        Component({
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
        Component({
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
        Component({
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
        this._pendingRequestsStatus$ = new ReplaySubject(1);
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
        return next.handle(req).pipe(finalize(function () {
            if (!shouldBypass) {
                _this._pendingRequests--;
                if (0 === _this._pendingRequests) {
                    _this._pendingRequestsStatus$.next(false);
                }
            }
        }));
    };
    PendingRequestsInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function PendingRequestsInterceptor_Factory() { return new PendingRequestsInterceptor(); }, token: PendingRequestsInterceptor, providedIn: "root" });
    PendingRequestsInterceptor = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PendingRequestsInterceptor);
    return PendingRequestsInterceptor;
}());
var PendingRequestsInterceptorProvider = [{
        provide: HTTP_INTERCEPTORS,
        useExisting: PendingRequestsInterceptor,
        multi: true
    }];

var SpinnerVisibilityService = /** @class */ (function () {
    function SpinnerVisibilityService(pendingRequestsInterceptor) {
        this.pendingRequestsInterceptor = pendingRequestsInterceptor;
        this._visibility$ = new ReplaySubject(1);
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
    SpinnerVisibilityService.ɵprov = ɵɵdefineInjectable({ factory: function SpinnerVisibilityService_Factory() { return new SpinnerVisibilityService(ɵɵinject(PendingRequestsInterceptor)); }, token: SpinnerVisibilityService, providedIn: "root" });
    SpinnerVisibilityService = __decorate([
        Injectable({
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
        var _a = __read(partition(this.pendingRequestsInterceptor.pendingRequestsStatus$, function (h) { return h; }), 2), showSpinner$ = _a[0], hideSpinner$ = _a[1];
        this.isVisible$ = merge(this.pendingRequestsInterceptor.pendingRequestsStatus$
            .pipe(switchMap(function () { return showSpinner$.pipe(debounce(function () { return timer(_this.debounceDelay); })); })), showSpinner$
            .pipe(switchMap(function () { return hideSpinner$.pipe(debounce(function () { return _this.getVisibilityTimer$(); })); })), this.spinnerVisibility.visibility$).pipe(distinctUntilChanged(), tap(function (h) { return _this.updateExpirationDelay(h); }));
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
        return timer(Math.max(this.extraDuration, this.visibleUntil - Date.now()));
    };
    NgHttpLoaderComponent.ctorParameters = function () { return [
        { type: PendingRequestsInterceptor },
        { type: SpinnerVisibilityService }
    ]; };
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "backdrop", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "debounceDelay", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "entryComponent", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "extraDuration", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "filteredHeaders", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "filteredMethods", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "filteredUrlPatterns", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "minDuration", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], NgHttpLoaderComponent.prototype, "spinner", void 0);
    NgHttpLoaderComponent = __decorate([
        Component({
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
        NgModule({
            declarations: __spread([
                NgHttpLoaderComponent
            ], SPINKIT_COMPONENTS),
            imports: [
                CommonModule,
            ],
            exports: __spread([
                NgHttpLoaderComponent
            ], SPINKIT_COMPONENTS),
        })
    ], NgHttpLoaderModule);
    return NgHttpLoaderModule;
}());

/*
 * Public API Surface of ng-http-loader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractLoaderDirective, NgHttpLoaderComponent, NgHttpLoaderModule, PendingRequestsInterceptor, PendingRequestsInterceptorProvider, SPINKIT_COMPONENTS, SkChasingDotsComponent, SkCubeGridComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent, Spinkit, SpinnerVisibilityService };
//# sourceMappingURL=ng-http-loader.js.map
