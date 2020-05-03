import { __decorate } from "tslib";
/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
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
    PendingRequestsInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function PendingRequestsInterceptor_Factory() { return new PendingRequestsInterceptor(); }, token: PendingRequestsInterceptor, providedIn: "root" });
    PendingRequestsInterceptor = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PendingRequestsInterceptor);
    return PendingRequestsInterceptor;
}());
export { PendingRequestsInterceptor };
export var PendingRequestsInterceptorProvider = [{
        provide: HTTP_INTERCEPTORS,
        useExisting: PendingRequestsInterceptor,
        multi: true
    }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy1yZXF1ZXN0cy1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaHR0cC1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGVuZGluZy1yZXF1ZXN0cy1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztHQU9HO0FBRUgsT0FBTyxFQUFFLGlCQUFpQixFQUF3RCxNQUFNLHNCQUFzQixDQUFDO0FBQy9HLE9BQU8sRUFBb0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUsxQztJQUFBO1FBRVkscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLDRCQUF1QixHQUFHLElBQUksYUFBYSxDQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hELHlCQUFvQixHQUFhLEVBQUUsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFDaEMscUJBQWdCLEdBQWEsRUFBRSxDQUFDO0tBMkUzQztJQXhFRyxzQkFBSSw4REFBc0I7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFlO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyREFBbUI7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFlO2FBQW5CLFVBQW9CLFdBQXFCO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1REFBZTthQUFuQixVQUFvQixLQUFlO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBVzthQUFmLFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFTyxvREFBZSxHQUF2QixVQUF3QixHQUFXO1FBQy9CLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDbkMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHVEQUFrQixHQUExQixVQUEyQixHQUFxQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sdURBQWtCLEdBQTFCLFVBQTJCLEdBQXFCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDL0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxpREFBWSxHQUFwQixVQUFxQixHQUFxQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxZQUFZO2VBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztlQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDO2VBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sOENBQVMsR0FBaEIsVUFBaUIsR0FBcUIsRUFBRSxJQUFpQjtRQUF6RCxpQkFzQkM7UUFyQkcsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFeEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN4QixRQUFRLENBQUM7WUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUV4QixJQUFJLENBQUMsS0FBSyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzdCLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVDO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzs7SUFoRlEsMEJBQTBCO1FBSHRDLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVywwQkFBMEIsQ0FpRnRDO3FDQWxHRDtDQWtHQyxBQWpGRCxJQWlGQztTQWpGWSwwQkFBMEI7QUFtRnZDLE1BQU0sQ0FBQyxJQUFNLGtDQUFrQyxHQUF1QixDQUFDO1FBQ25FLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXhpc3RpbmdQcm92aWRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgcHJpdmF0ZSBfcGVuZGluZ1JlcXVlc3RzID0gMDtcbiAgICBwcml2YXRlIF9wZW5kaW5nUmVxdWVzdHNTdGF0dXMkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRVcmxQYXR0ZXJuczogUmVnRXhwW10gPSBbXTtcbiAgICBwcml2YXRlIF9maWx0ZXJlZE1ldGhvZHM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRIZWFkZXJzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZvcmNlQnlQYXNzOiBib29sZWFuO1xuXG4gICAgZ2V0IHBlbmRpbmdSZXF1ZXN0c1N0YXR1cyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nUmVxdWVzdHNTdGF0dXMkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBwZW5kaW5nUmVxdWVzdHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cztcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVyZWRVcmxQYXR0ZXJucygpOiBSZWdFeHBbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZFVybFBhdHRlcm5zO1xuICAgIH1cblxuICAgIHNldCBmaWx0ZXJlZE1ldGhvZHMoaHR0cE1ldGhvZHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkTWV0aG9kcyA9IGh0dHBNZXRob2RzO1xuICAgIH1cblxuICAgIHNldCBmaWx0ZXJlZEhlYWRlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSGVhZGVycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBmb3JjZUJ5UGFzcyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9mb3JjZUJ5UGFzcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQnlwYXNzVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZFVybFBhdHRlcm5zLnNvbWUoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS50ZXN0KHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQnlwYXNzTWV0aG9kKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRNZXRob2RzLnNvbWUoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS50b1VwcGVyQ2FzZSgpID09PSByZXEubWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQnlwYXNzSGVhZGVyKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRIZWFkZXJzLnNvbWUoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVxLmhlYWRlcnMuaGFzKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzcyhyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvcmNlQnlQYXNzXG4gICAgICAgICAgICB8fCB0aGlzLnNob3VsZEJ5cGFzc1VybChyZXEudXJsV2l0aFBhcmFtcylcbiAgICAgICAgICAgIHx8IHRoaXMuc2hvdWxkQnlwYXNzTWV0aG9kKHJlcSlcbiAgICAgICAgICAgIHx8IHRoaXMuc2hvdWxkQnlwYXNzSGVhZGVyKHJlcSk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBjb25zdCBzaG91bGRCeXBhc3MgPSB0aGlzLnNob3VsZEJ5cGFzcyhyZXEpO1xuXG4gICAgICAgIGlmICghc2hvdWxkQnlwYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nUmVxdWVzdHMrKztcblxuICAgICAgICAgICAgaWYgKDEgPT09IHRoaXMuX3BlbmRpbmdSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1N0YXR1cyQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaG91bGRCeXBhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzLS07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHRoaXMuX3BlbmRpbmdSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzU3RhdHVzJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3JQcm92aWRlcjogRXhpc3RpbmdQcm92aWRlcltdID0gW3tcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VFeGlzdGluZzogUGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWVcbn1dO1xuIl19