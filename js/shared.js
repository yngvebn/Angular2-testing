webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);


/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var GreetingService_1 = __webpack_require__(30);
	var SharedModule = (function () {
	    function SharedModule() {
	    }
	    return SharedModule;
	}());
	SharedModule = __decorate([
	    core_1.NgModule({
	        providers: [GreetingService_1.GreetingService],
	        exports: [GreetingService_1.GreetingService]
	    }),
	    __metadata("design:paramtypes", [])
	], SharedModule);
	exports.SharedModule = SharedModule;


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var GreetingService = (function () {
	    function GreetingService() {
	        this.greeting = "What";
	    }
	    GreetingService.prototype.setGreeting = function (greeting) {
	        this.greeting = greeting;
	    };
	    return GreetingService;
	}());
	GreetingService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], GreetingService);
	exports.GreetingService = GreetingService;


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mZWF0dXJlcy9zaGFyZWQvc2hhcmVkLnRzIiwid2VicGFjazovLy8uL2ZlYXR1cmVzL3NoYXJlZC9HcmVldGluZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBeUM7QUFDekMsaURBQW9EO0FBTXBELEtBQWEsWUFBWTtLQUF6QjtLQUE0QixDQUFDO0tBQUQsbUJBQUM7QUFBRCxFQUFDO0FBQWhCLGFBQVk7S0FKeEIsZUFBUSxDQUFDO1NBQ04sU0FBUyxFQUFFLENBQUMsaUNBQWUsQ0FBQztTQUM1QixPQUFPLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDO01BQzdCLENBQUM7O0lBQ1csWUFBWSxDQUFJO0FBQWhCLHFDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQekIscUNBQXlDO0FBR3pDLEtBQWEsZUFBZTtLQUQ1QjtTQUVJLGFBQVEsR0FBRyxNQUFNLENBQUM7S0FJdEIsQ0FBQztLQUhHLHFDQUFXLEdBQVgsVUFBWSxRQUFnQjtTQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUM3QixDQUFDO0tBQ0wsc0JBQUM7QUFBRCxFQUFDO0FBTFksZ0JBQWU7S0FEM0IsaUJBQVUsRUFBRTs7SUFDQSxlQUFlLENBSzNCO0FBTFksMkNBQWUiLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3JlZXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9HcmVldGluZ1NlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIHByb3ZpZGVyczogW0dyZWV0aW5nU2VydmljZV0sXHJcbiAgICBleHBvcnRzOiBbR3JlZXRpbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2ZlYXR1cmVzL3NoYXJlZC9zaGFyZWQudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JlZXRpbmdTZXJ2aWNle1xyXG4gICAgZ3JlZXRpbmcgPSBcIldoYXRcIjtcclxuICAgIHNldEdyZWV0aW5nKGdyZWV0aW5nOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBncmVldGluZztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2ZlYXR1cmVzL3NoYXJlZC9HcmVldGluZ1NlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9