"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){this.dom=document.createElement(e)}return e.prototype.add=function(){for(var t,o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];return(t=this.dom).append.apply(t,o.map((function(t){return t instanceof e?t.dom:t}))),this},e.prototype.get=function(e){return this.dom[e]},e.prototype.set=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o=0;o<e.length;)this.dom[e[o++]]=e[o++];return this},e.prototype.on=function(e,t,o){return this.dom.addEventListener(e,t,o),this},e}();exports.$=function(t){return new e(t)},exports.ABBR="abbr",exports.ADDRESS="address",exports.ANCHOR="a",exports.AREA="area",exports.ARTICLE="article",exports.ASIDE="aside",exports.AUDIO="audio",exports.BDI="bdi",exports.BDO="bdo",exports.BLOCKQUOTE="blockquote",exports.BLUR="blur",exports.BOLD="b",exports.BR="br",exports.BUTTON="button",exports.CANVAS="canvas",exports.CAPTION="caption",exports.CHANGE="change",exports.CHECKBOX="checkbox",exports.CHECKED="checked",exports.CITE="cite",exports.CLASS_NAME="className",exports.CLICK="click",exports.CODE="code",exports.COL="col",exports.COLGROUP="colgroup",exports.DATA="data",exports.DATALIST="datalist",exports.DBLCLICK="dblclick",exports.DD="dd",exports.DEL="del",exports.DETAILS="details",exports.DFN="dfn",exports.DIALOG="dialog",exports.DISABLED="disabled",exports.DIV="div",exports.DL="dl",exports.DRAG="drag",exports.DRAGEND="dragend",exports.DRAGENTER="dragenter",exports.DRAGEXIT="dragexit",exports.DRAGLEAVE="dragleave",exports.DRAGOVER="dragover",exports.DRAGSTART="dragstart",exports.DROP="drop",exports.DT="dt",exports.EM="em",exports.EMBED="embed",exports.FIELDSET="fieldset",exports.FIGCAPTION="figcaption",exports.FIGURE="figure",exports.FOCUS="focus",exports.FOOTER="footer",exports.FORM="form",exports.H1="h1",exports.H2="h2",exports.H3="h3",exports.H4="h4",exports.H5="h5",exports.H6="h6",exports.HEADER="header",exports.HR="hr",exports.HREF="href",exports.ID="id",exports.IFRAME="iframe",exports.IMG="img",exports.INNER_HTML="innerHTML",exports.INNER_TEXT="innerText",exports.INPUT="input",exports.INS="ins",exports.ITALIC="i",exports.KBD="kbd",exports.KEYDOWN="keydown",exports.KEYPRESS="keypress",exports.KEYUP="keyup",exports.LABEL="label",exports.LEGEND="legend",exports.LI="li",exports.LINK="link",exports.LOAD="load",exports.MAIN="main",exports.MAP="map",exports.MARK="mark",exports.METER="meter",exports.MOUSEDOWN="mousedown",exports.MOUSEENTER="mouseenter",exports.MOUSELEAVE="mouseleave",exports.MOUSEMOVE="mousemove",exports.MOUSEOVER="mouseover",exports.MOUSEUP="mouseup",exports.NAV="nav",exports.NOSCRIPT="noscript",exports.OBJECT="object",exports.OL="ol",exports.OPTGROUP="optgroup",exports.OPTION="option",exports.OUTER_HTML="outerHTML",exports.OUTPUT="output",exports.PARAGRAPH="p",exports.PARAM="param",exports.PAUSE="pause",exports.PICTURE="picture",exports.PLAY="play",exports.PRE="pre",exports.PROGRESS="progress",exports.QUOTE="q",exports.RADIO="radio",exports.RESIZE="resize",exports.SAMP="samp",exports.SCROLL="scroll",exports.SECTION="section",exports.SELECT="select",exports.SMALL="small",exports.SOURCE="source",exports.SPAN="span",exports.STRONG="strong",exports.SUB="sub",exports.TABLE="table",exports.TBODY="tbody",exports.TD="td",exports.TEXT="text",exports.TEXTAREA="textarea",exports.TEXT_CONTENT="textContent",exports.TFOOT="tfoot",exports.TH="th",exports.THEAD="thead",exports.TIME="time",exports.TOUCHCANCEL="touchcancel",exports.TOUCHEND="touchend",exports.TOUCHMOVE="touchmove",exports.TOUCHSTART="touchstart",exports.TR="tr",exports.TRACK="track",exports.TRANSITIONCANCEL="transitioncancel",exports.TRANSITIONEND="transitionend",exports.TRANSITIONRUN="transitionrun",exports.TRANSITIONSTART="transitionstart",exports.TYPE="type",exports.UL="ul",exports.VALUE="value",exports.VAR="var",exports.VIDEO="video",exports.WHEEL="wheel",exports.notifier=function(){var e=0,t={};return[function(e){for(var o in t)t[o](e)},function(o){return t[e]=o,e++},function(e){delete t[e]}]};
