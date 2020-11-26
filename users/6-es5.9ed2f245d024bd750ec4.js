!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pJrd:function(e,n,o){"use strict";o.r(n),o.d(n,"AuthModule",function(){return K});var i,a,c=o("PCNd"),u=o("tyNb"),s=o("fXoL"),l=o("AytR"),b=o("lJxs"),f=o("tk/3"),p=l.a.baseUrl,m=function(t){return t.pipe(Object(b.a)(function(t){return t.result.token}))},g=((i=function(){function e(r){t(this,e),this.http=r}return r(e,[{key:"login",value:function(t){return this.http.post(p+"/v1/user/login",t).pipe(m)}},{key:"register",value:function(t){return this.http.post(p+"/v1/user/register",t).pipe(m)}}]),e}()).\u0275fac=function(t){return new(t||i)(s.Sb(f.b))},i.\u0275prov=s.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),h=o("1/+G"),d=o("3Pt+"),v=((a=function(){function e(r){t(this,e),this.fb=r}return r(e,[{key:"getLoginRegisterForm",value:function(){return this.fb.group({email:[null,[d.k.required,d.k.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],password:[null,[d.k.required,d.k.minLength(6)]]})}}]),e}()).\u0275fac=function(t){return new(t||a)(s.Sb(d.b))},a.\u0275prov=s.Fb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),y=o("kmnG"),w=o("qFsG"),k=o("ofXK"),O=o("bTqV");function N(t,e){1&t&&(s.Ob(0,"mat-error"),s.pc(1,"Required"),s.Nb())}function I(t,e){1&t&&(s.Ob(0,"mat-error"),s.pc(1,"Incorrect email"),s.Nb())}function F(t,e){1&t&&(s.Ob(0,"mat-error"),s.pc(1,"Required"),s.Nb())}function D(t,e){1&t&&(s.Ob(0,"mat-error"),s.pc(1,"Minimum 6 characters"),s.Nb())}function S(t,e){1&t&&(s.Ob(0,"a",10),s.pc(1,"Register here"),s.Nb())}function L(t,e){1&t&&(s.Ob(0,"a",11),s.pc(1,"Log in here"),s.Nb())}var E,R,J,q,z,C,G=((J=function(){function e(r){t(this,e),this.authFormsService=r,this.submitData=new s.n}return r(e,[{key:"ngOnInit",value:function(){this.loginForm=this.authFormsService.getLoginRegisterForm()}},{key:"submitForm",value:function(){this.submitData.emit(this.loginForm.value)}},{key:"emailErrors",get:function(){return this.loginForm.controls.email.errors}},{key:"passwordErrors",get:function(){return this.loginForm.controls.password.errors}}]),e}()).\u0275fac=function(t){return new(t||J)(s.Jb(v))},J.\u0275cmp=s.Db({type:J,selectors:[["app-auth-form"]],inputs:{title:"title"},outputs:{submitData:"submitData"},decls:20,vars:9,consts:[[1,"flex","flex-column","login-form",3,"formGroup","ngSubmit"],["appearance","standard",1,"mb-16"],["type","email","matInput","","formControlName","email"],[4,"ngIf"],["floatLabel","auto","appearance","standard",1,"mb-24"],["type","password","matInput","","formControlName","password"],["type","submit","mat-flat-button","","color","primary",1,"mb-24",3,"disabled"],[1,"pt-20"],["routerLink","/auth/register",4,"ngIf"],["routerLink","/auth/login",4,"ngIf"],["routerLink","/auth/register"],["routerLink","/auth/login"]],template:function(t,e){1&t&&(s.Ob(0,"form",0),s.Vb("ngSubmit",function(){return e.submitForm()}),s.Ob(1,"h2"),s.pc(2),s.Nb(),s.Ob(3,"mat-form-field",1),s.Ob(4,"mat-label"),s.pc(5,"Email"),s.Nb(),s.Kb(6,"input",2),s.oc(7,N,2,0,"mat-error",3),s.oc(8,I,2,0,"mat-error",3),s.Nb(),s.Ob(9,"mat-form-field",4),s.Ob(10,"mat-label"),s.pc(11,"Password"),s.Nb(),s.Kb(12,"input",5),s.oc(13,F,2,0,"mat-error",3),s.oc(14,D,2,0,"mat-error",3),s.Nb(),s.Ob(15,"button",6),s.pc(16,"Submit"),s.Nb(),s.Ob(17,"div",7),s.oc(18,S,2,0,"a",8),s.oc(19,L,2,0,"a",9),s.Nb(),s.Nb()),2&t&&(s.cc("formGroup",e.loginForm),s.zb(2),s.qc(e.title),s.zb(5),s.cc("ngIf",null==e.emailErrors?null:e.emailErrors.required),s.zb(1),s.cc("ngIf",null==e.emailErrors?null:e.emailErrors.pattern),s.zb(5),s.cc("ngIf",null==e.passwordErrors?null:e.passwordErrors.required),s.zb(1),s.cc("ngIf",null==e.passwordErrors?null:e.passwordErrors.minLength),s.zb(1),s.cc("disabled",e.loginForm.invalid),s.zb(3),s.cc("ngIf","Login"===e.title),s.zb(1),s.cc("ngIf","Register"===e.title))},directives:[d.l,d.h,d.d,y.c,y.f,w.a,d.a,d.g,d.c,k.j,O.a,y.b,u.e],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px;margin:auto}"],changeDetection:0}),J),x=((R=function(){function e(r,n,o){t(this,e),this.loginRegisterService=r,this.storageService=n,this.router=o}return r(e,[{key:"logIn",value:function(t){var e=this;this.loginRegisterService.login(t).subscribe(function(t){e.storageService.set("token",t),e.router.navigate([""])},function(t){return console.log(t)})}}]),e}()).\u0275fac=function(t){return new(t||R)(s.Jb(g),s.Jb(h.a),s.Jb(u.b))},R.\u0275cmp=s.Db({type:R,selectors:[["app-login"]],decls:1,vars:0,consts:[["title","Login",3,"submitData"]],template:function(t,e){1&t&&(s.Ob(0,"app-auth-form",0),s.Vb("submitData",function(t){return e.logIn(t)}),s.Nb())},directives:[G],styles:[""],changeDetection:0}),R),P=((E=function(){function e(r,n,o){t(this,e),this.loginRegisterService=r,this.storageService=n,this.router=o}return r(e,[{key:"register",value:function(t){var e=this;this.loginRegisterService.register(t).subscribe(function(t){e.storageService.set("token",t),e.router.navigate(["/profile"])})}}]),e}()).\u0275fac=function(t){return new(t||E)(s.Jb(g),s.Jb(h.a),s.Jb(u.b))},E.\u0275cmp=s.Db({type:E,selectors:[["app-registration"]],decls:1,vars:0,consts:[["title","Register",3,"submitData"]],template:function(t,e){1&t&&(s.Ob(0,"app-auth-form",0),s.Vb("submitData",function(t){return e.register(t)}),s.Nb())},directives:[G],styles:[""],changeDetection:0}),E),j=[{path:"",component:(q=function e(){t(this,e)},q.\u0275fac=function(t){return new(t||q)},q.\u0275cmp=s.Db({type:q,selectors:[["app-auth-layout"]],decls:7,vars:0,consts:[[1,"login-layout"],[1,"header","p-24"],["routerLink","/"],[1,"cursor-pointer"],[1,"flex-column","mt-100"]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Ob(1,"header",1),s.Ob(2,"h1",2),s.Ob(3,"span",3),s.pc(4,"Find friends app"),s.Nb(),s.Nb(),s.Nb(),s.Ob(5,"section",4),s.Kb(6,"router-outlet"),s.Nb(),s.Nb())},directives:[u.c,u.g],styles:[".header[_ngcontent-%COMP%]{background-color:#fafafa}"]}),q),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:x},{path:"register",component:P}]}],M=((C=function e(){t(this,e)}).\u0275mod=s.Hb({type:C}),C.\u0275inj=s.Gb({factory:function(t){return new(t||C)},imports:[[u.f.forChild(j)],u.f]}),C),K=((z=function e(){t(this,e)}).\u0275mod=s.Hb({type:z}),z.\u0275inj=s.Gb({factory:function(t){return new(t||z)},providers:[v],imports:[[M,c.a]]}),z)}}])}();