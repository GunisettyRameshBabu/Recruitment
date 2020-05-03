/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { merge, partition, timer } from 'rxjs';
import { debounce, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { PendingRequestsInterceptor } from '../services/pending-requests-interceptor.service';
import { SpinnerVisibilityService } from '../services/spinner-visibility.service';
import { Spinkit } from '../spinkits';
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
NgHttpLoaderComponent = __decorate([
    Component({
        selector: 'ng-http-loader',
        template: "<div id=\"spinner\"\n     *ngIf=\"isVisible$ | async\"\n     [class.backdrop]=\"backdrop\"\n     [style.opacity]=\"opacity\">\n\n    <ng-container *ngComponentOutlet=\"entryComponent\"></ng-container>\n\n    <sk-cube-grid\n        *ngIf=\"spinner === spinkit.skCubeGrid\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-cube-grid>\n\n    <sk-chasing-dots\n        *ngIf=\"spinner === spinkit.skChasingDots\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-chasing-dots>\n\n    <sk-double-bounce\n        *ngIf=\"spinner === spinkit.skDoubleBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-double-bounce>\n\n    <sk-rotating-plane\n        *ngIf=\"spinner === spinkit.skRotatingPlane\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-rotating-plane>\n\n    <sk-spinner-pulse\n        *ngIf=\"spinner === spinkit.skSpinnerPulse\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-spinner-pulse>\n\n    <sk-three-bounce\n        *ngIf=\"spinner === spinkit.skThreeBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-three-bounce>\n\n    <sk-wandering-cubes\n        *ngIf=\"spinner === spinkit.skWanderingCubes\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wandering-cubes>\n\n    <sk-wave\n        *ngIf=\"spinner === spinkit.skWave\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wave>\n\n</div>\n\n",
        styles: ["#spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop{top:0;left:0;height:100%;width:100%;background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;transform:none}::ng-deep .colored-parent,::ng-deep .colored>div{background-color:#333}"]
    })
], NgHttpLoaderComponent);
export { NgHttpLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaHR0cC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaHR0cC1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZy1odHRwLWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFjLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU90QyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWtCOUIsWUFBb0IsMEJBQXNELEVBQVUsaUJBQTJDO1FBQTNHLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBaEJ4SCxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBRWpCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFDM0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0Isb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0Isd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBQ25DLGdCQUFX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SUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFTyxtQkFBbUI7UUFDdkIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBQ0osQ0FBQTs7WUF2RW1ELDBCQUEwQjtZQUE2Qix3QkFBd0I7O0FBWnRIO0lBQVIsS0FBSyxFQUFFO3VEQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTs4REFBZ0M7QUFDL0I7SUFBUixLQUFLLEVBQUU7NERBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOzZEQUFtQztBQUNsQztJQUFSLEtBQUssRUFBRTs0REFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7OERBQXVDO0FBQ3RDO0lBQVIsS0FBSyxFQUFFOzhEQUF1QztBQUN0QztJQUFSLEtBQUssRUFBRTtrRUFBMkM7QUFDMUM7SUFBUixLQUFLLEVBQUU7MERBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO3NEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtzREFBaUM7QUFoQmhDLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLCszQ0FBOEM7O0tBRWpELENBQUM7R0FDVyxxQkFBcUIsQ0F5RmpDO1NBekZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIHBhcnRpdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQZW5kaW5nUmVxdWVzdHNJbnRlcmNlcHRvciB9IGZyb20gJy4uL3NlcnZpY2VzL3BlbmRpbmctcmVxdWVzdHMtaW50ZXJjZXB0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyVmlzaWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zcGlubmVyLXZpc2liaWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlua2l0IH0gZnJvbSAnLi4vc3BpbmtpdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nLWh0dHAtbG9hZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmctaHR0cC1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLWh0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdIdHRwTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzcGlua2l0ID0gU3BpbmtpdDtcbiAgICBwdWJsaWMgaXNWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIHZpc2libGVVbnRpbCA9IERhdGUubm93KCk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgYmFja2Ryb3AgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVib3VuY2VEZWxheSA9IDA7XG4gICAgQElucHV0KCkgcHVibGljIGVudHJ5Q29tcG9uZW50OiBhbnkgPSBudWxsO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBleHRyYUR1cmF0aW9uID0gMDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyZWRIZWFkZXJzOiBzdHJpbmdbXSA9IFtdO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXJlZE1ldGhvZHM6IHN0cmluZ1tdID0gW107XG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlcmVkVXJsUGF0dGVybnM6IHN0cmluZ1tdID0gW107XG4gICAgQElucHV0KCkgcHVibGljIG1pbkR1cmF0aW9uID0gMDtcbiAgICBASW5wdXQoKSBwdWJsaWMgb3BhY2l0eSA9ICcuNyc7XG4gICAgQElucHV0KCkgcHVibGljIHNwaW5uZXIgPSBTcGlua2l0LnNrV2F2ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3I6IFBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yLCBwcml2YXRlIHNwaW5uZXJWaXNpYmlsaXR5OiBTcGlubmVyVmlzaWJpbGl0eVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRJc3Zpc2libGVPYnNlcnZhYmxlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBbc2hvd1NwaW5uZXIkLCBoaWRlU3Bpbm5lciRdID0gcGFydGl0aW9uKHRoaXMucGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IucGVuZGluZ1JlcXVlc3RzU3RhdHVzJCwgaCA9PiBoKTtcblxuICAgICAgICB0aGlzLmlzVmlzaWJsZSQgPSBtZXJnZShcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IucGVuZGluZ1JlcXVlc3RzU3RhdHVzJFxuICAgICAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoKSA9PiBzaG93U3Bpbm5lciQucGlwZShkZWJvdW5jZSgoKSA9PiB0aW1lcih0aGlzLmRlYm91bmNlRGVsYXkpKSkpKSxcbiAgICAgICAgICAgIHNob3dTcGlubmVyJFxuICAgICAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoKSA9PiBoaWRlU3Bpbm5lciQucGlwZShkZWJvdW5jZSgoKSA9PiB0aGlzLmdldFZpc2liaWxpdHlUaW1lciQoKSkpKSksXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJWaXNpYmlsaXR5LnZpc2liaWxpdHkkLFxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgdGFwKGggPT4gdGhpcy51cGRhdGVFeHBpcmF0aW9uRGVsYXkoaCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRJc3Zpc2libGVPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMubnVsbGlmeVNwaW5uZXJJZkVudHJ5Q29tcG9uZW50SXNEZWZpbmVkKCk7XG4gICAgICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG51bGxpZnlTcGlubmVySWZFbnRyeUNvbXBvbmVudElzRGVmaW5lZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZW50cnlDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGaWx0ZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJlZFVybFBhdHRlcm5zKCk7XG4gICAgICAgIHRoaXMuaW5pdEZpbHRlcmVkTWV0aG9kcygpO1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJlZEhlYWRlcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGaWx0ZXJlZFVybFBhdHRlcm5zKCk6IHZvaWQge1xuICAgICAgICBpZiAoISh0aGlzLmZpbHRlcmVkVXJsUGF0dGVybnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BmaWx0ZXJlZFVybFBhdHRlcm5zYCBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEhdGhpcy5maWx0ZXJlZFVybFBhdHRlcm5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFVybFBhdHRlcm5zLmZvckVhY2goZSA9PlxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IuZmlsdGVyZWRVcmxQYXR0ZXJucy5wdXNoKG5ldyBSZWdFeHAoZSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RmlsdGVyZWRNZXRob2RzKCk6IHZvaWQge1xuICAgICAgICBpZiAoISh0aGlzLmZpbHRlcmVkTWV0aG9kcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYGZpbHRlcmVkTWV0aG9kc2AgbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yLmZpbHRlcmVkTWV0aG9kcyA9IHRoaXMuZmlsdGVyZWRNZXRob2RzO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEZpbHRlcmVkSGVhZGVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCEodGhpcy5maWx0ZXJlZEhlYWRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BmaWx0ZXJlZEhlYWRlcnNgIG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHNJbnRlcmNlcHRvci5maWx0ZXJlZEhlYWRlcnMgPSB0aGlzLmZpbHRlcmVkSGVhZGVycztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUV4cGlyYXRpb25EZWxheShzaG93U3Bpbm5lcjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoc2hvd1NwaW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZVVudGlsID0gRGF0ZS5ub3coKSArIHRoaXMubWluRHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFZpc2liaWxpdHlUaW1lciQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRpbWVyKE1hdGgubWF4KHRoaXMuZXh0cmFEdXJhdGlvbiwgdGhpcy52aXNpYmxlVW50aWwgLSBEYXRlLm5vdygpKSk7XG4gICAgfVxufVxuIl19