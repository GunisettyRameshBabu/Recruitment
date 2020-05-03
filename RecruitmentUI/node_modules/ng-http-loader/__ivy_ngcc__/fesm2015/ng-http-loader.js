import { __decorate } from 'tslib';
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NgHttpLoaderComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgHttpLoaderComponent_div_0_sk_cube_grid_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-cube-grid", 4);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r2.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_chasing_dots_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-chasing-dots", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r3.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_double_bounce_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-double-bounce", 4);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r4.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_rotating_plane_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-rotating-plane", 4);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r5.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_spinner_pulse_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-spinner-pulse", 4);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r6.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_three_bounce_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-three-bounce", 4);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r7.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_wandering_cubes_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-wandering-cubes", 4);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r8.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_sk_wave_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sk-wave", 4);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("backgroundColor", ctx_r9.backgroundColor);
} }
function NgHttpLoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, NgHttpLoaderComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NgHttpLoaderComponent_div_0_sk_cube_grid_2_Template, 1, 1, "sk-cube-grid", 3);
    ɵngcc0.ɵɵtemplate(3, NgHttpLoaderComponent_div_0_sk_chasing_dots_3_Template, 1, 1, "sk-chasing-dots", 3);
    ɵngcc0.ɵɵtemplate(4, NgHttpLoaderComponent_div_0_sk_double_bounce_4_Template, 1, 1, "sk-double-bounce", 3);
    ɵngcc0.ɵɵtemplate(5, NgHttpLoaderComponent_div_0_sk_rotating_plane_5_Template, 1, 1, "sk-rotating-plane", 3);
    ɵngcc0.ɵɵtemplate(6, NgHttpLoaderComponent_div_0_sk_spinner_pulse_6_Template, 1, 1, "sk-spinner-pulse", 3);
    ɵngcc0.ɵɵtemplate(7, NgHttpLoaderComponent_div_0_sk_three_bounce_7_Template, 1, 1, "sk-three-bounce", 3);
    ɵngcc0.ɵɵtemplate(8, NgHttpLoaderComponent_div_0_sk_wandering_cubes_8_Template, 1, 1, "sk-wandering-cubes", 3);
    ɵngcc0.ɵɵtemplate(9, NgHttpLoaderComponent_div_0_sk_wave_9_Template, 1, 1, "sk-wave", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("opacity", ctx_r0.opacity);
    ɵngcc0.ɵɵclassProp("backdrop", ctx_r0.backdrop);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngComponentOutlet", ctx_r0.entryComponent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skCubeGrid);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skChasingDots);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skDoubleBounce);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skRotatingPlane);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skSpinnerPulse);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skThreeBounce);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skWanderingCubes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skWave);
} }
let AbstractLoaderDirective = class AbstractLoaderDirective {
};
AbstractLoaderDirective.ɵfac = function AbstractLoaderDirective_Factory(t) { return new (t || AbstractLoaderDirective)(); };
AbstractLoaderDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AbstractLoaderDirective, inputs: { backgroundColor: "backgroundColor" } });
__decorate([
    Input()
], AbstractLoaderDirective.prototype, "backgroundColor", void 0);

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkChasingDotsComponent = class SkChasingDotsComponent extends AbstractLoaderDirective {
};
SkChasingDotsComponent.ɵfac = function SkChasingDotsComponent_Factory(t) { return ɵSkChasingDotsComponent_BaseFactory(t || SkChasingDotsComponent); };
SkChasingDotsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkChasingDotsComponent, selectors: [["sk-chasing-dots"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 6, consts: [[1, "sk-chasing-dots"], [1, "sk-child", "sk-dot1"], [1, "sk-child", "sk-dot2"]], template: function SkChasingDotsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("colored", !ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-chasing-dots[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:2s linear infinite sk-chasingDotsRotate;animation:2s linear infinite sk-chasingDotsRotate}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDotsBounce;animation:2s ease-in-out infinite sk-chasingDotsBounce}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-dot2[_ngcontent-%COMP%]{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDotsRotate{100%{transform:rotate(360deg)}}@keyframes sk-chasingDotsRotate{100%{transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDotsBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-chasingDotsBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkCubeGridComponent = class SkCubeGridComponent extends AbstractLoaderDirective {
};
SkCubeGridComponent.ɵfac = function SkCubeGridComponent_Factory(t) { return ɵSkCubeGridComponent_BaseFactory(t || SkCubeGridComponent); };
SkCubeGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkCubeGridComponent, selectors: [["sk-cube-grid"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 20, consts: [[1, "sk-cube-grid"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"]], template: function SkCubeGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelement(4, "div", 4);
        ɵngcc0.ɵɵelement(5, "div", 5);
        ɵngcc0.ɵɵelement(6, "div", 6);
        ɵngcc0.ɵɵelement(7, "div", 7);
        ɵngcc0.ɵɵelement(8, "div", 8);
        ɵngcc0.ɵɵelement(9, "div", 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("colored", !ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-cube-grid[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:33.33%;height:33.33%;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay;animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%]{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]{-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%]{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%]{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%]{-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%]{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%]{-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}@keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkDoubleBounceComponent = class SkDoubleBounceComponent extends AbstractLoaderDirective {
};
SkDoubleBounceComponent.ɵfac = function SkDoubleBounceComponent_Factory(t) { return ɵSkDoubleBounceComponent_BaseFactory(t || SkDoubleBounceComponent); };
SkDoubleBounceComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkDoubleBounceComponent, selectors: [["sk-double-bounce"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 6, consts: [[1, "sk-double-bounce"], [1, "sk-child", "sk-double-bounce1"], [1, "sk-child", "sk-double-bounce2"]], template: function SkDoubleBounceComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("colored", !ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-double-bounce[_ngcontent-%COMP%]{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce;animation:2s ease-in-out infinite sk-doubleBounce}.sk-double-bounce[_ngcontent-%COMP%]   .sk-double-bounce2[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-doubleBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkRotatingPlaneComponent = class SkRotatingPlaneComponent extends AbstractLoaderDirective {
};
SkRotatingPlaneComponent.ɵfac = function SkRotatingPlaneComponent_Factory(t) { return ɵSkRotatingPlaneComponent_BaseFactory(t || SkRotatingPlaneComponent); };
SkRotatingPlaneComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkRotatingPlaneComponent, selectors: [["sk-rotating-plane"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 2, consts: [[1, "sk-rotating-plane", "colored-parent"]], template: function SkRotatingPlaneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-rotating-plane[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkSpinnerPulseComponent = class SkSpinnerPulseComponent extends AbstractLoaderDirective {
};
SkSpinnerPulseComponent.ɵfac = function SkSpinnerPulseComponent_Factory(t) { return ɵSkSpinnerPulseComponent_BaseFactory(t || SkSpinnerPulseComponent); };
SkSpinnerPulseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkSpinnerPulseComponent, selectors: [["sk-spinner-pulse"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 2, consts: [[1, "sk-spinner", "sk-spinner-pulse", "colored-parent"]], template: function SkSpinnerPulseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-spinner-pulse[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulseScaleOut;animation:1s ease-in-out infinite sk-pulseScaleOut}@-webkit-keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkThreeBounceComponent = class SkThreeBounceComponent extends AbstractLoaderDirective {
};
SkThreeBounceComponent.ɵfac = function SkThreeBounceComponent_Factory(t) { return ɵSkThreeBounceComponent_BaseFactory(t || SkThreeBounceComponent); };
SkThreeBounceComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkThreeBounceComponent, selectors: [["sk-three-bounce"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 8, consts: [[1, "sk-three-bounce"], [1, "sk-child", "sk-bounce1"], [1, "sk-child", "sk-bounce2"], [1, "sk-child", "sk-bounce3"]], template: function SkThreeBounceComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("colored", !ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-three-bounce[_ngcontent-%COMP%]{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-three-bounce;animation:1.4s ease-in-out infinite both sk-three-bounce}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce1[_ngcontent-%COMP%]{-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce2[_ngcontent-%COMP%]{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkWanderingCubesComponent = class SkWanderingCubesComponent extends AbstractLoaderDirective {
};
SkWanderingCubesComponent.ɵfac = function SkWanderingCubesComponent_Factory(t) { return ɵSkWanderingCubesComponent_BaseFactory(t || SkWanderingCubesComponent); };
SkWanderingCubesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkWanderingCubesComponent, selectors: [["sk-wandering-cubes"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 6, consts: [[1, "sk-wandering-cubes"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"]], template: function SkWanderingCubesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("colored", !ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-wandering-cubes[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:10px;height:10px;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube;animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}@keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}"] });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let SkWaveComponent = class SkWaveComponent extends AbstractLoaderDirective {
};
SkWaveComponent.ɵfac = function SkWaveComponent_Factory(t) { return ɵSkWaveComponent_BaseFactory(t || SkWaveComponent); };
SkWaveComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SkWaveComponent, selectors: [["sk-wave"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 6, vars: 12, consts: [[1, "sk-wave"], [1, "sk-rect", "sk-rect1"], [1, "sk-rect", "sk-rect2"], [1, "sk-rect", "sk-rect3"], [1, "sk-rect", "sk-rect4"], [1, "sk-rect", "sk-rect5"]], template: function SkWaveComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelement(4, "div", 4);
        ɵngcc0.ɵɵelement(5, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("colored", !ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, styles: [".sk-wave[_ngcontent-%COMP%]{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave[_ngcontent-%COMP%]   .sk-rect[_ngcontent-%COMP%]{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-waveStretchDelay;animation:1.2s ease-in-out infinite sk-waveStretchDelay}.sk-wave[_ngcontent-%COMP%]   .sk-rect1[_ngcontent-%COMP%]{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.sk-wave[_ngcontent-%COMP%]   .sk-rect2[_ngcontent-%COMP%]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect3[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect4[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-wave[_ngcontent-%COMP%]   .sk-rect5[_ngcontent-%COMP%]{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-waveStretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes sk-waveStretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}"] });

let PendingRequestsInterceptor = class PendingRequestsInterceptor {
    constructor() {
        this._pendingRequests = 0;
        this._pendingRequestsStatus$ = new ReplaySubject(1);
        this._filteredUrlPatterns = [];
        this._filteredMethods = [];
        this._filteredHeaders = [];
    }
    get pendingRequestsStatus$() {
        return this._pendingRequestsStatus$.asObservable();
    }
    get pendingRequests() {
        return this._pendingRequests;
    }
    get filteredUrlPatterns() {
        return this._filteredUrlPatterns;
    }
    set filteredMethods(httpMethods) {
        this._filteredMethods = httpMethods;
    }
    set filteredHeaders(value) {
        this._filteredHeaders = value;
    }
    set forceByPass(value) {
        this._forceByPass = value;
    }
    shouldBypassUrl(url) {
        return this._filteredUrlPatterns.some(e => {
            return e.test(url);
        });
    }
    shouldBypassMethod(req) {
        return this._filteredMethods.some(e => {
            return e.toUpperCase() === req.method.toUpperCase();
        });
    }
    shouldBypassHeader(req) {
        return this._filteredHeaders.some(e => {
            return req.headers.has(e);
        });
    }
    shouldBypass(req) {
        return this._forceByPass
            || this.shouldBypassUrl(req.urlWithParams)
            || this.shouldBypassMethod(req)
            || this.shouldBypassHeader(req);
    }
    intercept(req, next) {
        const shouldBypass = this.shouldBypass(req);
        if (!shouldBypass) {
            this._pendingRequests++;
            if (1 === this._pendingRequests) {
                this._pendingRequestsStatus$.next(true);
            }
        }
        return next.handle(req).pipe(finalize(() => {
            if (!shouldBypass) {
                this._pendingRequests--;
                if (0 === this._pendingRequests) {
                    this._pendingRequestsStatus$.next(false);
                }
            }
        }));
    }
};
PendingRequestsInterceptor.ɵfac = function PendingRequestsInterceptor_Factory(t) { return new (t || PendingRequestsInterceptor)(); };
PendingRequestsInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function PendingRequestsInterceptor_Factory() { return new PendingRequestsInterceptor(); }, token: PendingRequestsInterceptor, providedIn: "root" });
const PendingRequestsInterceptorProvider = [{
        provide: HTTP_INTERCEPTORS,
        useExisting: PendingRequestsInterceptor,
        multi: true
    }];

let SpinnerVisibilityService = class SpinnerVisibilityService {
    constructor(pendingRequestsInterceptor) {
        this.pendingRequestsInterceptor = pendingRequestsInterceptor;
        this._visibility$ = new ReplaySubject(1);
    }
    get visibility$() {
        return this._visibility$.asObservable();
    }
    show() {
        this.pendingRequestsInterceptor.forceByPass = true;
        this._visibility$.next(true);
    }
    hide() {
        this._visibility$.next(false);
        this.pendingRequestsInterceptor.forceByPass = false;
    }
};
SpinnerVisibilityService.ɵfac = function SpinnerVisibilityService_Factory(t) { return new (t || SpinnerVisibilityService)(ɵngcc0.ɵɵinject(PendingRequestsInterceptor)); };
SpinnerVisibilityService.ctorParameters = () => [
    { type: PendingRequestsInterceptor }
];
SpinnerVisibilityService.ɵprov = ɵɵdefineInjectable({ factory: function SpinnerVisibilityService_Factory() { return new SpinnerVisibilityService(ɵɵinject(PendingRequestsInterceptor)); }, token: SpinnerVisibilityService, providedIn: "root" });

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
};
const SPINKIT_COMPONENTS = [
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
let NgHttpLoaderComponent = class NgHttpLoaderComponent {
    constructor(pendingRequestsInterceptor, spinnerVisibility) {
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
    initIsvisibleObservable() {
        const [showSpinner$, hideSpinner$] = partition(this.pendingRequestsInterceptor.pendingRequestsStatus$, h => h);
        this.isVisible$ = merge(this.pendingRequestsInterceptor.pendingRequestsStatus$
            .pipe(switchMap(() => showSpinner$.pipe(debounce(() => timer(this.debounceDelay))))), showSpinner$
            .pipe(switchMap(() => hideSpinner$.pipe(debounce(() => this.getVisibilityTimer$())))), this.spinnerVisibility.visibility$).pipe(distinctUntilChanged(), tap(h => this.updateExpirationDelay(h)));
    }
    ngOnInit() {
        this.initIsvisibleObservable();
        this.nullifySpinnerIfEntryComponentIsDefined();
        this.initFilters();
    }
    nullifySpinnerIfEntryComponentIsDefined() {
        if (this.entryComponent) {
            this.spinner = null;
        }
    }
    initFilters() {
        this.initFilteredUrlPatterns();
        this.initFilteredMethods();
        this.initFilteredHeaders();
    }
    initFilteredUrlPatterns() {
        if (!(this.filteredUrlPatterns instanceof Array)) {
            throw new TypeError('`filteredUrlPatterns` must be an array.');
        }
        if (!!this.filteredUrlPatterns.length) {
            this.filteredUrlPatterns.forEach(e => this.pendingRequestsInterceptor.filteredUrlPatterns.push(new RegExp(e)));
        }
    }
    initFilteredMethods() {
        if (!(this.filteredMethods instanceof Array)) {
            throw new TypeError('`filteredMethods` must be an array.');
        }
        this.pendingRequestsInterceptor.filteredMethods = this.filteredMethods;
    }
    initFilteredHeaders() {
        if (!(this.filteredHeaders instanceof Array)) {
            throw new TypeError('`filteredHeaders` must be an array.');
        }
        this.pendingRequestsInterceptor.filteredHeaders = this.filteredHeaders;
    }
    updateExpirationDelay(showSpinner) {
        if (showSpinner) {
            this.visibleUntil = Date.now() + this.minDuration;
        }
    }
    getVisibilityTimer$() {
        return timer(Math.max(this.extraDuration, this.visibleUntil - Date.now()));
    }
};
NgHttpLoaderComponent.ɵfac = function NgHttpLoaderComponent_Factory(t) { return new (t || NgHttpLoaderComponent)(ɵngcc0.ɵɵdirectiveInject(PendingRequestsInterceptor), ɵngcc0.ɵɵdirectiveInject(SpinnerVisibilityService)); };
NgHttpLoaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgHttpLoaderComponent, selectors: [["ng-http-loader"]], inputs: { backdrop: "backdrop", debounceDelay: "debounceDelay", entryComponent: "entryComponent", extraDuration: "extraDuration", filteredHeaders: "filteredHeaders", filteredMethods: "filteredMethods", filteredUrlPatterns: "filteredUrlPatterns", minDuration: "minDuration", opacity: "opacity", spinner: "spinner", backgroundColor: "backgroundColor" }, decls: 2, vars: 3, consts: [["id", "spinner", 3, "backdrop", "opacity", 4, "ngIf"], ["id", "spinner"], [4, "ngComponentOutlet"], [3, "backgroundColor", 4, "ngIf"], [3, "backgroundColor"]], template: function NgHttpLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgHttpLoaderComponent_div_0_Template, 10, 13, "div", 0);
        ɵngcc0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 1, ctx.isVisible$));
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgComponentOutlet, SkCubeGridComponent,
        SkChasingDotsComponent,
        SkDoubleBounceComponent,
        SkRotatingPlaneComponent,
        SkSpinnerPulseComponent,
        SkThreeBounceComponent,
        SkWanderingCubesComponent,
        SkWaveComponent], pipes: [ɵngcc1.AsyncPipe], styles: ["#spinner[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop[_ngcontent-%COMP%]{top:0;left:0;height:100%;width:100%;background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;transform:none}  .colored-parent,   .colored>div{background-color:#333}"] });
NgHttpLoaderComponent.ctorParameters = () => [
    { type: PendingRequestsInterceptor },
    { type: SpinnerVisibilityService }
];
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

/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var NgHttpLoaderModule_1;
let NgHttpLoaderModule = NgHttpLoaderModule_1 = class NgHttpLoaderModule {
    static forRoot() {
        return {
            ngModule: NgHttpLoaderModule_1,
            providers: [
                PendingRequestsInterceptorProvider,
            ],
        };
    }
};
NgHttpLoaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgHttpLoaderModule });
NgHttpLoaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgHttpLoaderModule_Factory(t) { return new (t || NgHttpLoaderModule)(); }, imports: [[
            CommonModule,
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractLoaderDirective, [{
        type: Directive
    }], null, { backgroundColor: [{
            type: Input
        }] }); })();
const ɵSkChasingDotsComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkChasingDotsComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkChasingDotsComponent, [{
        type: Component,
        args: [{
                selector: 'sk-chasing-dots',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-chasing-dots{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:2s linear infinite sk-chasingDotsRotate;animation:2s linear infinite sk-chasingDotsRotate}.sk-chasing-dots .sk-child{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDotsBounce;animation:2s ease-in-out infinite sk-chasingDotsBounce}.sk-chasing-dots .sk-dot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDotsRotate{100%{transform:rotate(360deg)}}@keyframes sk-chasingDotsRotate{100%{transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDotsBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-chasingDotsBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}"]
            }]
    }], null, null); })();
const ɵSkCubeGridComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkCubeGridComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkCubeGridComponent, [{
        type: Component,
        args: [{
                selector: 'sk-cube-grid',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-cube-grid{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid .sk-cube{width:33.33%;height:33.33%;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay;animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay}.sk-cube-grid .sk-cube1{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube2{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube3{-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid .sk-cube4{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube5{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube6{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube7{-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid .sk-cube8{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube9{-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}@keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}"]
            }]
    }], null, null); })();
const ɵSkDoubleBounceComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkDoubleBounceComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkDoubleBounceComponent, [{
        type: Component,
        args: [{
                selector: 'sk-double-bounce',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-double-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-double-bounce2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-double-bounce{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce .sk-child{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce;animation:2s ease-in-out infinite sk-doubleBounce}.sk-double-bounce .sk-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-doubleBounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}"]
            }]
    }], null, null); })();
const ɵSkRotatingPlaneComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkRotatingPlaneComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkRotatingPlaneComponent, [{
        type: Component,
        args: [{
                selector: 'sk-rotating-plane',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-rotating-plane colored-parent\" [style.background-color]='backgroundColor'></div>\n",
                styles: [".sk-rotating-plane{position:relative;top:50%;width:40px;height:40px;margin:auto;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
            }]
    }], null, null); })();
const ɵSkSpinnerPulseComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkSpinnerPulseComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkSpinnerPulseComponent, [{
        type: Component,
        args: [{
                selector: 'sk-spinner-pulse',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-spinner sk-spinner-pulse colored-parent\" [style.background-color]='backgroundColor'></div>\n",
                styles: [".sk-spinner-pulse{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulseScaleOut;animation:1s ease-in-out infinite sk-pulseScaleOut}@-webkit-keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}"]
            }]
    }], null, null); })();
const ɵSkThreeBounceComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkThreeBounceComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkThreeBounceComponent, [{
        type: Component,
        args: [{
                selector: 'sk-three-bounce',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-three-bounce{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce .sk-child{width:20px;height:20px;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-three-bounce;animation:1.4s ease-in-out infinite both sk-three-bounce}.sk-three-bounce .sk-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce .sk-bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}"]
            }]
    }], null, null); })();
const ɵSkWanderingCubesComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkWanderingCubesComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkWanderingCubesComponent, [{
        type: Component,
        args: [{
                selector: 'sk-wandering-cubes',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-wandering-cubes{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes .sk-cube{width:10px;height:10px;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube;animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube}.sk-wandering-cubes .sk-cube2{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}@keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}"]
            }]
    }], null, null); })();
const ɵSkWaveComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SkWaveComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkWaveComponent, [{
        type: Component,
        args: [{
                selector: 'sk-wave',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-wave\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-wave{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave .sk-rect{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-waveStretchDelay;animation:1.2s ease-in-out infinite sk-waveStretchDelay}.sk-wave .sk-rect1{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.sk-wave .sk-rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-wave .sk-rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-wave .sk-rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-wave .sk-rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-waveStretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes sk-waveStretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}"]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PendingRequestsInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SpinnerVisibilityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: PendingRequestsInterceptor }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgHttpLoaderComponent, [{
        type: Component,
        args: [{
                selector: 'ng-http-loader',
                template: "<div id=\"spinner\"\n     *ngIf=\"isVisible$ | async\"\n     [class.backdrop]=\"backdrop\"\n     [style.opacity]=\"opacity\">\n\n    <ng-container *ngComponentOutlet=\"entryComponent\"></ng-container>\n\n    <sk-cube-grid\n        *ngIf=\"spinner === spinkit.skCubeGrid\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-cube-grid>\n\n    <sk-chasing-dots\n        *ngIf=\"spinner === spinkit.skChasingDots\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-chasing-dots>\n\n    <sk-double-bounce\n        *ngIf=\"spinner === spinkit.skDoubleBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-double-bounce>\n\n    <sk-rotating-plane\n        *ngIf=\"spinner === spinkit.skRotatingPlane\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-rotating-plane>\n\n    <sk-spinner-pulse\n        *ngIf=\"spinner === spinkit.skSpinnerPulse\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-spinner-pulse>\n\n    <sk-three-bounce\n        *ngIf=\"spinner === spinkit.skThreeBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-three-bounce>\n\n    <sk-wandering-cubes\n        *ngIf=\"spinner === spinkit.skWanderingCubes\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wandering-cubes>\n\n    <sk-wave\n        *ngIf=\"spinner === spinkit.skWave\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wave>\n\n</div>\n\n",
                styles: ["#spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop{top:0;left:0;height:100%;width:100%;background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;transform:none}::ng-deep .colored-parent,::ng-deep .colored>div{background-color:#333}"]
            }]
    }], function () { return [{ type: PendingRequestsInterceptor }, { type: SpinnerVisibilityService }]; }, { backdrop: [{
            type: Input
        }], debounceDelay: [{
            type: Input
        }], entryComponent: [{
            type: Input
        }], extraDuration: [{
            type: Input
        }], filteredHeaders: [{
            type: Input
        }], filteredMethods: [{
            type: Input
        }], filteredUrlPatterns: [{
            type: Input
        }], minDuration: [{
            type: Input
        }], opacity: [{
            type: Input
        }], spinner: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgHttpLoaderModule, { declarations: function () { return [NgHttpLoaderComponent,
        SkCubeGridComponent,
        SkChasingDotsComponent,
        SkDoubleBounceComponent,
        SkRotatingPlaneComponent,
        SkSpinnerPulseComponent,
        SkThreeBounceComponent,
        SkWanderingCubesComponent,
        SkWaveComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgHttpLoaderComponent,
        SkCubeGridComponent,
        SkChasingDotsComponent,
        SkDoubleBounceComponent,
        SkRotatingPlaneComponent,
        SkSpinnerPulseComponent,
        SkThreeBounceComponent,
        SkWanderingCubesComponent,
        SkWaveComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgHttpLoaderModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgHttpLoaderComponent,
                    ...SPINKIT_COMPONENTS,
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    NgHttpLoaderComponent,
                    ...SPINKIT_COMPONENTS,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-http-loader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractLoaderDirective, NgHttpLoaderComponent, NgHttpLoaderModule, PendingRequestsInterceptor, PendingRequestsInterceptorProvider, SPINKIT_COMPONENTS, SkChasingDotsComponent, SkCubeGridComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent, Spinkit, SpinnerVisibilityService };

//# sourceMappingURL=ng-http-loader.js.map