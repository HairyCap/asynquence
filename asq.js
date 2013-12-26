/*! asynquence
    v0.2.0-a (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function n(e,t,r){if(typeof module!=="undefined"&&module.exports)module.exports=r();else if(typeof define==="function"&&define.amd)define(r);else t[e]=r(e,t)})("ASQ",this,function e(n,t){var r,u=(t||{})[n],l=Array.prototype.slice,f="__ASQ__";function i(n){return typeof setImmediate!=="undefined"?setImmediate(n):setTimeout(n,0)}function a(){function n(){clearTimeout(q);q=null;k.length=0;S.length=0;T.length=0;j.length=0}function e(){if(E)return t();if(!q){q=i(t)}}function t(){var t,r;q=null;if(E){n()}else if(A){while(S.length){t=S.shift();try{t.apply(t,j)}catch(l){if(s(l)){j=j.concat(l)}else{j.push(l);if(l.stack)j.push(l.stack)}if(S.length===0){console.error.apply(console,j)}}}}else if(_&&k.length>0){_=false;t=k.shift();r=T.slice();T.length=0;r.unshift(u());try{t.apply(t,r)}catch(l){if(s(l)){j=j.concat(l)}else{j.push(l)}A=true;e()}}}function u(){function n(){if(A||E||_)return;_=true;T.push.apply(T,arguments);j.length=0;e()}n.fail=function t(){if(A||E||_)return;A=true;T.length=0;j.push.apply(j,arguments);e()};n.abort=function r(){if(A||E)return;_=false;E=true;T.length=0;j.length=0;e()};return n}function f(n,e,t){function u(){clearTimeout(_);_=d=v=b=null}function f(){if(g)return a();if(!_){_=i(a)}}function a(){if(A||E||h)return;var e=[];_=null;if(p){n.fail.apply(n,b);u()}else if(g){n.abort();u()}else if(c()){h=true;d.forEach(function t(n,r){e.push(v["s"+r])});n.apply(n,e);u()}}function c(){if(A||E||p||g||h||d.length===0)return;var n=true;d.some(function e(t){if(t===null){n=false;return true}});return n}function o(){function n(){if(A||E||p||g||h||d[e]){return}var n=r.messages.apply(null,arguments);v["s"+e]=n.length>1?n:n[0];d[e]=true;f()}var e=d.length;n.fail=function t(){if(A||E||p||g||h||d[e]){return}p=true;b=l.call(arguments);f()};n.abort=function u(){if(A||E||p||g||h)return;g=true;a()};d[e]=null;return n}var p=false,g=false,h=false,m,y,d=[],v={},b,_;e.some(function k(n){if(p||g)return true;m=t.slice();m.unshift(o());try{n.apply(n,m)}catch(e){y=e;p=true;return true}});if(y){if(s(y)){n.fail.apply(null,y)}else{n.fail(y)}}}function a(){if(A||E||arguments.length===0)return x;k.push.apply(k,h(arguments,g));e();return x}function o(){if(E||arguments.length===0)return x;S.push.apply(S,arguments);e();return x}function m(){if(A||E||arguments.length===0)return x;var n=l.call(arguments);a(function e(t){var r=l.call(arguments,1);f(t,n,r)});return x}function y(){if(E||arguments.length===0)return x;l.call(arguments).forEach(function n(e){a(function t(n){e.apply(e,l.call(arguments,1));n()}).or(e.fail)});return x}function d(){if(A||E||arguments.length===0)return x;l.call(arguments).forEach(function n(e){a(function t(n){if(!s(e)){e=e.apply(e,l.call(arguments,1))}e.pipe(n)})});return x}function v(){if(A||E||arguments.length===0)return x;l.call(h(arguments,p)).forEach(function n(e){a(function t(n){var t=e.apply(e,l.call(arguments,1));if(!s(t)){t=r.messages(t)}n.apply(n,t)})});return x}function b(){if(A)return x;E=true;t();return x}var A=false,E=false,_=true,k=[],S=[],T=[],j=[],q,x=c({then:a,or:o,gate:m,pipe:y,seq:d,val:v,abort:b});x.then.apply(x,h(arguments,g));return x}function c(n){Object.defineProperty(n,f,{enumerable:false,value:true});return n}function s(n){return n!=null&&typeof n==="object"&&n[f]}function o(n,e){return l.call(e).slice(1,n+1)}function p(n){return r.messages.apply(null,o(n,arguments))}function g(n){arguments[n+1].apply(null,o(n,arguments))}function h(n,e){var t,r;n=l.call(n);for(t=0;t<n.length;t++){if(Array.isArray(n[t])&&s(n[t])){n[t]=e.bind.apply(e,[null,n[t].length].concat(n[t]))}else if(typeof n[t]!=="function"){for(r=t+1;r<n.length;r++){if(typeof n[r]==="function"||s(n[r])){break}}n.splice(t,r-t,e.bind.apply(e,[null,r-t].concat(n.slice(t,r))))}}return n}r=a;r.messages=function m(){var n=l.call(arguments);c(n);return n};r.isMessageWrapper=r.isSequence=s;r.noConflict=function y(){if(t){t[n]=u}return r};return r});
