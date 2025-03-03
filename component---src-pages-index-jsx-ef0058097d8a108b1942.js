"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[279],{2169:function(e,t,n){var o=n(758);let a,i;"undefined"!=typeof window&&(a=window.innerHeight,i=window.innerWidth);t.A=()=>{const{0:e,1:t}=(0,o.useState)({windowHeight:a,windowWidth:i});return(0,o.useEffect)((()=>{const e=()=>t({windowHeight:window.innerHeight,windowWidth:window.innerWidth});return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}},6191:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var o=n(758),a=n(7446),i=n(1923),r=n(8491),s=n(2169),c=n(2292),l=n(7095),d=n(53);const m=["Dream.","Code.","","Sleep.","Repeat."],p=a.AH`
  display: grid;
  place-items: center;
  color: ${c.M.gold};
  opacity: 1;
  animation: ${l.W.fadeIn} ${2}s ease-in-out;
  @media (max-width: 888px) {
    height: 100vh;
  }
`,u=a.AH`
  display: grid;
  grid-template-columns: repeat(5, minmax(10rem, max-content));
  margin-left: 1.5rem;
  font-family: "Audiowide";
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5rem;
  @media (max-width: 888px) {
    grid-template-rows: repeat(5, max-content);
    grid-template-columns: none;
    grid-gap: .5rem;
    justify-items: center;
    .slogan__part--sleep {
      margin-left: 1.5rem;
    }
    .slogan__part--repeat{
      margin-left: 2rem;
    }
  }
`,h=a.AH`
  margin-top: 0;
  height: 5rem;
  line-height: 5rem;
  transition: text-shadow ${2}s ease-out;
  .slogan__letter, .slogan__letter--flickering {
    display: inline-block;
    width: 3rem;
    text-align: center;
  }
  /* dots */
  .slogan__letter:last-of-type {
    text-align: left;
  }
  /* first dot */
  &:first-of-type .slogan__letter:last-of-type {
    padding-left: .5rem;
  }
`,f=a.AH`
  position: relative;
  opacity: 0;
  width: 10rem;
  animation: ${l.W.fadeIn} ${2}s ease-in-out both;
  &::after, &::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 43%;
    width: 1.5rem;
    height: 1.5rem;
    border: 1rem solid ${c.M.red};
    border-radius: 0 50% 50% 50%;
    transform: rotate(-45deg);
    transition: box-shadow ${2}s ease-out;
  }
  &::before {
    top: 15%;
    left: 3%;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-135deg);
  }
`,g=a.i7`
  0%, 8.999%, 16%, 31.999%, 47%, 69.999%, 73%, 74.999%, 76%, 83.999%, 85%, 100% {
    opacity: 1;
    text-shadow:
      0 0 .8rem ${c.M.gold},
      0 0 4.4rem ${c.M.gold},
      0 0 6.6rem ${c.M.white};
  }
  9%, 15.999%, 32%, 46.999%, 70%, 72.999%, 75%, 75.999%, 84%, 84.999% {
    opacity: .55;
    text-shadow: none;
  }
`,b=a.AH`
  [class^=slogan__part] {
    text-shadow:
      0 0 .8rem ${c.M.gold},
      0 0 4.4rem ${c.M.gold},
      0 0 7.7rem ${c.M.white};
  }
  .infinity {
    &::before, &::after {
      box-shadow:
        inset 0 0 .5rem ${c.M.red},
        0 0 3.3rem ${c.M.red},
        0 0 7.7rem ${c.M.red};
    }
  }
  .slogan__letter--flickering {
    animation: ${g} 15s linear ${2}s infinite;
  }
`;var w=()=>{const{0:e,1:t}=(0,o.useState)(["††††††","∑∑∑∑∑","","ΩΩΩΩΩΩ","ßßßßßßß"]),{0:n,1:a}=(0,o.useState)(!1),{windowWidth:i}=(0,s.A)();return(0,o.useEffect)((()=>{if(!n){const n=setTimeout((()=>{const n=e.map(((e,t)=>e.split("").map(((e,n)=>{const o=m[t][n];if(e===o)return e;const a="!@#$%^&*()+-_=~<>,.?/{}[]|;:"+o,i=a[(0,r.l)(a)];return i===e?o:i})).join("")));t(n)}),50);return e.every(((e,t)=>e===m[t]))&&a(!0),()=>clearTimeout(n)}}),[n,e]),(0,d.Y)("header",{css:p},(0,d.Y)("ul",{css:[u,n&&i>=1024&&b,"",""]},e.map(((e,t)=>{const n=2===t,o=m[t].toLowerCase().replace(".","");return(0,d.Y)("li",{css:[h,n&&f,"",""],className:n?"infinity":`slogan__part--${o}`,key:e},e.split("").map((e=>{const n="d"===e.toLowerCase()||"m"===e.toLowerCase();return(0,d.Y)("span",{className:n&&0===t?"slogan__letter--flickering":"slogan__letter",key:(0,r.X)()},e)})))}))))},y=n(2277),E=n(5219);const x="25rem",P="20rem",_=a.AH`
  @media (max-width: 375px) {
    transform: scale(.55);
  }
  @media (min-width: 375px) and (max-width: 525px) {
    transform: scale(.7);
  }
  @media (min-width: 525px) and (max-width: 768px) {
    transform: scale(.9);
  }
`,v=a.i7`
  from, to {
    transform: rotate3d(1, 1, 0, 55deg);
  }

  25% {
    transform:
      rotate3d(1.1, 0.95, 0.05, 57deg)
      scale3d(1.02, 1.02, 1.02)
      translate3d(10px, 20px, -10px);
  }

  60% {
    transform:
      rotate3d(1, 0.85, 0.1, 55deg)
      scale3d(1.04, 1.04, 1.04)
      translate3d(-10px, 20px, 10px);
  }
`,A=a.AH`
  width: ${x};
  height: ${x};
  transform-style: preserve-3d;
  animation: ${v} 15s linear infinite;
  .cube__front, .cube__back, .cube__left,
  .cube__right, .cube__bottom, .cube__top {
    background-color: ${c.M.purple};
    box-shadow: 0 0 10rem 1.5rem ${c.M.lightPurple};
    transition: transform .5s ease-out;
  }
  .cube__front {
    transform: translateZ(calc(${x} / 2));
    &:hover ~ .cube__back {
      box-shadow: 0 0 8rem 3rem ${c.M.lightPurple};
      transform: rotateY(180deg) rotateZ(90deg) translateZ(${P});
    }
  }
  .cube__back {
    transform: rotateY(180deg) translateZ(calc(${x} / 2));
  }
  .cube__left {
    transform: rotateY(270deg) translateZ(calc(${x} / 2));
    &:hover ~ .cube__right {
      box-shadow: 0 0 8rem 3rem ${c.M.lightPurple};
      transform: rotateY(90deg) translateZ(${P});
    }
  }
  .cube__right {
    transform: rotateY(90deg) translateZ(calc(${x} / 2));
  }
  .cube__bottom {
    transform: rotateX(270deg) translateZ(calc(${x} / 2));
    &:hover ~ .cube__top {
      box-shadow: 0 0 8rem 3rem ${c.M.lightPurple};
      transform: rotateX(90deg) rotateZ(-90deg) translateZ(${P});
    }
  }
  .cube__top {
    transform: rotateX(90deg) translateZ(calc(${x} / 2));
  }
`,T=a.AH`
  position: absolute;
  height: ${x};
  line-height: ${x};
  width: ${x};
  margin: 0;
  border: 1px solid ${c.M.beige};
  text-transform: uppercase;
  font-size: 3.3rem;
  text-align: center;
`,M=a.AH`
  color: ${c.M.beige};
  display: inline-block;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
    background-color: ${c.M.teal};
  }
`,k=[{text:"About",to:"/about",side:"front"},{text:"Get to know me",side:"back"},{text:"Blog",to:"/blog",side:"left"},{text:"Something to read",side:"right"},{text:"Terminal",to:"/cmd",side:"bottom"},{text:"Switch to cmd",side:"top"}];var j=()=>(0,d.Y)("div",{css:_},(0,d.Y)("div",{css:A},k.map((e=>{let{text:t,to:n,side:o}=e;return(0,d.Y)("figure",{key:Math.random(),className:`cube__${o}`,css:T},n&&(0,d.Y)(E.A,{to:n,css:M},t))})))),Y=n(196);const O={type:"change"},L={type:"start"},R={type:"end"},N=new Y.RlV,C=new Y.Zcv,I=Math.cos(70*Y.cj9.DEG2RAD);class S extends Y.Qev{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y.Pq0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Y.kBv.ROTATE,MIDDLE:Y.kBv.DOLLY,RIGHT:Y.kBv.PAN},this.touches={ONE:Y.wtR.ROTATE,TWO:Y.wtR.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",Q),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Q),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(O),n.update(),a=o.NONE},this.update=function(){const t=new Y.Pq0,d=(new Y.PTz).setFromUnitVectors(e.up,new Y.Pq0(0,1,0)),m=d.clone().invert(),p=new Y.Pq0,u=new Y.PTz,h=new Y.Pq0,f=2*Math.PI;return function(){const g=n.object.position;t.copy(g).sub(n.target),t.applyQuaternion(d),r.setFromVector3(t),n.autoRotate&&a===o.NONE&&A(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(r.theta+=s.theta*n.dampingFactor,r.phi+=s.phi*n.dampingFactor):(r.theta+=s.theta,r.phi+=s.phi);let b=n.minAzimuthAngle,w=n.maxAzimuthAngle;isFinite(b)&&isFinite(w)&&(b<-Math.PI?b+=f:b>Math.PI&&(b-=f),w<-Math.PI?w+=f:w>Math.PI&&(w-=f),r.theta=b<=w?Math.max(b,Math.min(w,r.theta)):r.theta>(b+w)/2?Math.max(b,r.theta):Math.min(w,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),n.zoomToCursor&&x||n.object.isOrthographicCamera?r.radius=Z(r.radius):r.radius=Z(r.radius*c),t.setFromSpherical(r),t.applyQuaternion(m),g.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(s.theta*=1-n.dampingFactor,s.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(s.set(0,0,0),l.set(0,0,0));let P=!1;if(n.zoomToCursor&&x){let o=null;if(n.object.isPerspectiveCamera){const e=t.length();o=Z(e*c);const a=e-o;n.object.position.addScaledVector(y,a),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const e=new Y.Pq0(E.x,E.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),P=!0;const a=new Y.Pq0(E.x,E.y,0);a.unproject(n.object),n.object.position.sub(a).add(e),n.object.updateMatrixWorld(),o=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==o&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(o).add(n.object.position):(N.origin.copy(n.object.position),N.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(N.direction))<I?e.lookAt(n.target):(C.setFromNormalAndCoplanarPoint(n.object.up,n.target),N.intersectPlane(C,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),P=!0);return c=1,x=!1,!!(P||p.distanceToSquared(n.object.position)>i||8*(1-u.dot(n.object.quaternion))>i||h.distanceToSquared(n.target)>0)&&(n.dispatchEvent(O),p.copy(n.object.position),u.copy(n.object.quaternion),h.copy(n.target),P=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",B),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",G),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",Q),n._domElementKeyEvents=null)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const i=1e-6,r=new Y.YHV,s=new Y.YHV;let c=1;const l=new Y.Pq0,d=new Y.I9Y,m=new Y.I9Y,p=new Y.I9Y,u=new Y.I9Y,h=new Y.I9Y,f=new Y.I9Y,g=new Y.I9Y,b=new Y.I9Y,w=new Y.I9Y,y=new Y.Pq0,E=new Y.I9Y;let x=!1;const P=[],_={};function v(){return Math.pow(.95,n.zoomSpeed)}function A(e){s.theta-=e}function T(e){s.phi-=e}const M=function(){const e=new Y.Pq0;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),l.add(e)}}(),k=function(){const e=new Y.Pq0;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),l.add(e)}}(),j=function(){const e=new Y.Pq0;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),M(2*t*r/a.clientHeight,n.object.matrix),k(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(M(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function S(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(t){if(!n.zoomToCursor)return;x=!0;const o=n.domElement.getBoundingClientRect(),a=t.clientX-o.left,i=t.clientY-o.top,r=o.width,s=o.height;E.x=a/r*2-1,E.y=-i/s*2+1,y.set(E.x,E.y,1).unproject(e).sub(e.position).normalize()}function Z(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function D(e){d.set(e.clientX,e.clientY)}function z(e){u.set(e.clientX,e.clientY)}function F(){if(1===P.length)d.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);d.set(e,t)}}function K(){if(1===P.length)u.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);u.set(e,t)}}function X(){const e=P[0].pageX-P[1].pageX,t=P[0].pageY-P[1].pageY,n=Math.sqrt(e*e+t*t);g.set(0,n)}function W(e){if(1==P.length)m.set(e.pageX,e.pageY);else{const t=ne(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);m.set(n,o)}p.subVectors(m,d).multiplyScalar(n.rotateSpeed);const t=n.domElement;A(2*Math.PI*p.x/t.clientHeight),T(2*Math.PI*p.y/t.clientHeight),d.copy(m)}function q(e){if(1===P.length)h.set(e.pageX,e.pageY);else{const t=ne(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);h.set(n,o)}f.subVectors(h,u).multiplyScalar(n.panSpeed),j(f.x,f.y),u.copy(h)}function U(e){const t=ne(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);b.set(0,i),w.set(0,Math.pow(b.y/g.y,n.zoomSpeed)),S(w.y),g.copy(b)}function B(e){!1!==n.enabled&&(0===P.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",V),n.domElement.addEventListener("pointerup",G)),function(e){P.push(e)}(e),"touch"===e.pointerType?function(e){switch(te(e),P.length){case 1:switch(n.touches.ONE){case Y.wtR.ROTATE:if(!1===n.enableRotate)return;F(),a=o.TOUCH_ROTATE;break;case Y.wtR.PAN:if(!1===n.enablePan)return;K(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case Y.wtR.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&X(),n.enablePan&&K(),a=o.TOUCH_DOLLY_PAN;break;case Y.wtR.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&X(),n.enableRotate&&F(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(L)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Y.kBv.DOLLY:if(!1===n.enableZoom)return;!function(e){H(e),g.set(e.clientX,e.clientY)}(e),a=o.DOLLY;break;case Y.kBv.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;z(e),a=o.PAN}else{if(!1===n.enableRotate)return;D(e),a=o.ROTATE}break;case Y.kBv.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;D(e),a=o.ROTATE}else{if(!1===n.enablePan)return;z(e),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(L)}(e))}function V(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(te(e),a){case o.TOUCH_ROTATE:if(!1===n.enableRotate)return;W(e),n.update();break;case o.TOUCH_PAN:if(!1===n.enablePan)return;q(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&U(e),n.enablePan&&q(e)}(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&U(e),n.enableRotate&&W(e)}(e),n.update();break;default:a=o.NONE}}(e):function(e){switch(a){case o.ROTATE:if(!1===n.enableRotate)return;!function(e){m.set(e.clientX,e.clientY),p.subVectors(m,d).multiplyScalar(n.rotateSpeed);const t=n.domElement;A(2*Math.PI*p.x/t.clientHeight),T(2*Math.PI*p.y/t.clientHeight),d.copy(m),n.update()}(e);break;case o.DOLLY:if(!1===n.enableZoom)return;!function(e){b.set(e.clientX,e.clientY),w.subVectors(b,g),w.y>0?S(v()):w.y<0&&$(v()),g.copy(b),n.update()}(e);break;case o.PAN:if(!1===n.enablePan)return;!function(e){h.set(e.clientX,e.clientY),f.subVectors(h,u).multiplyScalar(n.panSpeed),j(f.x,f.y),u.copy(h),n.update()}(e)}}(e))}function G(e){!function(e){delete _[e.pointerId];for(let t=0;t<P.length;t++)if(P[t].pointerId==e.pointerId)return void P.splice(t,1)}(e),0===P.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(R),a=o.NONE}function J(e){!1!==n.enabled&&!1!==n.enableZoom&&a===o.NONE&&(e.preventDefault(),n.dispatchEvent(L),function(e){H(e),e.deltaY<0?$(v()):e.deltaY>0&&S(v()),n.update()}(e),n.dispatchEvent(R))}function Q(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function ee(e){!1!==n.enabled&&e.preventDefault()}function te(e){let t=_[e.pointerId];void 0===t&&(t=new Y.I9Y,_[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ne(e){const t=e.pointerId===P[0].pointerId?P[1]:P[0];return _[t.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}}let $=1024,H=1024,Z=1;"undefined"!=typeof window&&(Z=window.devicePixelRatio,$=window.innerWidth,H=window.innerHeight);const D=!0;const z=new Y.zD7,F=new Y.Z58,K=new Y.ubm(36,$/H,1,25);K.position.set(0,5,0);const X=new Y.ZyN(16777215,3);X.position.set(5,10,7.5),F.add(X);const W=new Y.Zcv(new Y.Pq0(0,-1,0),-.1),q=new Y.ZM4(W,2,16777215);q.visible=!1,F.add(q);const U=new Y.UPV(.55,.15,220,60),B=new Y.YJl;F.add(B);const V=function(e,t){const n=new Y.YJl,o=new Y.V9B;o.depthWrite=!1,o.depthTest=!1,o.colorWrite=!1,o.stencilWrite=!0,o.stencilFunc=Y.sKt;const a=o.clone();a.side=Y.hsX,a.clippingPlanes=[t],a.stencilFail=Y.Ru$,a.stencilZFail=Y.Ru$,a.stencilZPass=Y.Ru$;const i=new Y.eaF(e,a);n.add(i);const r=o.clone();r.side=Y.hB5,r.clippingPlanes=[t],r.stencilFail=Y.fJr,r.stencilZFail=Y.fJr,r.stencilZPass=Y.fJr;const s=new Y.eaF(e,r);return n.add(s),n}(U,W);B.add(V);const G=new Y.bdM(8,8),J=new Y._4j({color:1537418,stencilWrite:!0,stencilRef:0,stencilFunc:Y.klZ,stencilFail:Y.kG0,stencilZFail:Y.kG0,stencilZPass:Y.kG0}),Q=new Y.eaF(G,J);let ee;if(Q.onAfterRender=e=>{e.clearStencil()},F.add(Q),"undefined"!=typeof document){ee=new Y.JeP({antialias:!0}),ee.setPixelRatio(Z),ee.setSize($,H),ee.setClearColor(655376),ee.localClippingEnabled=!0,document.body.appendChild(ee.domElement);const e=new S(K,ee.domElement);e.minDistance=3,e.maxDistance=20,e.update()}function te(){const e=z.getDelta(),t=z.getElapsedTime();if(requestAnimationFrame(te),D){B.rotation.x+=.5*e,B.rotation.y+=.2*e;const n=1.75*Math.sin(.05*t);B.position.x=n,B.position.y=Math.cos(.45*t)}W.coplanarPoint(Q.position),Q.lookAt(Q.position.x-W.normal.x,Q.position.y-W.normal.y,Q.position.z-W.normal.z),ee&&ee.render(F,K)}function ne(){return o.useEffect((()=>(ee&&"none"===ee.domElement.style.display&&(ee.domElement.style.display="block"),te(),()=>{ee&&(ee.domElement.style.display="none")})),[]),null}"undefined"!=typeof window&&window.addEventListener("resize",(function(){K.aspect=$/H,K.updateProjectionMatrix(),ee&&ee.setSize($,H)}));const oe=a.AH`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr 7fr;
  @media (max-width: 888px) {
    display: block;
  }
`,ae=a.AH`
  display: grid;
  place-items: center;
  overflow-y: hidden;
  @media (max-width: 888px) {
    height: 100vh;
  }
`;"undefined"!=typeof window&&i.Ay.init("phc_4wjIUZsHhbZJNUjHPTBTd5inK2ykTorxoYReXN2VGmy",{api_host:"https://app.posthog.com"});var ie=()=>(0,d.Y)(o.Fragment,null,(0,d.Y)(y.A,{title:"Root"}),(0,d.Y)("div",{css:oe},(0,d.Y)(w,null),(0,d.Y)("main",{css:ae},(0,d.Y)(j,null)),(0,d.Y)(ne,null)))},8491:function(e,t,n){n.d(t,{X:function(){return a},l:function(){return o}});const o=e=>{let{length:t}=e;return Math.floor(Math.random()*t)},a=()=>1e5*Math.random()}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ef0058097d8a108b1942.js.map