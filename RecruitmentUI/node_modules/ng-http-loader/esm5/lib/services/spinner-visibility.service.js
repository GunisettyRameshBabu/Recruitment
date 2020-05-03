import { __decorate } from "tslib";
/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PendingRequestsInterceptor } from './pending-requests-interceptor.service';
import * as i0 from "@angular/core";
import * as i1 from "./pending-requests-interceptor.service";
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
    SpinnerVisibilityService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SpinnerVisibilityService_Factory() { return new SpinnerVisibilityService(i0.ɵɵinject(i1.PendingRequestsInterceptor)); }, token: SpinnerVisibilityService, providedIn: "root" });
    SpinnerVisibilityService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SpinnerVisibilityService);
    return SpinnerVisibilityService;
}());
export { SpinnerVisibilityService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci12aXNpYmlsaXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1odHRwLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zcGlubmVyLXZpc2liaWxpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBS3BGO0lBSUksa0NBQW9CLDBCQUFzRDtRQUF0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBRmxFLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7SUFHckQsQ0FBQztJQUVELHNCQUFJLGlEQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFTSx1Q0FBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLHVDQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUN4RCxDQUFDOztnQkFmK0MsMEJBQTBCOzs7SUFKakUsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyx3QkFBd0IsQ0FvQnBDO21DQXBDRDtDQW9DQyxBQXBCRCxJQW9CQztTQXBCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQZW5kaW5nUmVxdWVzdHNJbnRlcmNlcHRvciB9IGZyb20gJy4vcGVuZGluZy1yZXF1ZXN0cy1pbnRlcmNlcHRvci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyVmlzaWJpbGl0eVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfdmlzaWJpbGl0eSQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3I6IFBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yKSB7XG4gICAgfVxuXG4gICAgZ2V0IHZpc2liaWxpdHkkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJpbGl0eSQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IuZm9yY2VCeVBhc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5JC5uZXh0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5JC5uZXh0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHNJbnRlcmNlcHRvci5mb3JjZUJ5UGFzcyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==