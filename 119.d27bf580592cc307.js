"use strict";(self.webpackChunksenior=self.webpackChunksenior||[]).push([[119],{3119:(C,c,n)=>{n.r(c),n.d(c,{default:()=>y});var r=n(6814),a=n(4408),g=n(8645),d=n(4825),h=n(4716),x=n(9360),f=n(8251),v=n(9773),A=n(9397),t=n(5879),O=n(4855);function S(o,s){if(1&o&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&o){const i=t.oxw();t.xp6(1),t.hij(" Redirecting in ",t.xi3(2,1,i.countdown,i.countdownMapping)," ")}}function Z(o,s){1&o&&(t.ynx(0),t._uU(1," You are now being redirected! "),t.BQk())}const w=function(){return["/sign-in"]},y=[{path:"",component:(()=>{var o;class s{constructor(e,u){this._authService=e,this._router=u,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new g.x}ngOnInit(){this._authService.signOut(),(0,d.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["sign-in"])}),function p(o,s=!1){return(0,x.e)((i,e)=>{let u=0;i.subscribe((0,f.x)(e,l=>{const m=o(l,u++);(m||s)&&e.next(l),!m&&e.complete()}))})}(()=>this.countdown>0),(0,v.R)(this._unsubscribeAll),(0,A.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return(o=s).\u0275fac=function(e){return new(e||o)(t.Y36(O.e),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["auth-sign-out"]],standalone:!0,features:[t.jDz],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(e,u){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"You have signed out!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,S,3,4,"ng-container",7),t.YNc(9,Z,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8)(11,"span"),t._uU(12,"Go to"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"sign in "),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("ngIf",u.countdown>0),t.xp6(1),t.Q6J("ngIf",0===u.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,w)))},dependencies:[r.O5,a.rH,r.Gx],encapsulation:2}),s})()}]}}]);