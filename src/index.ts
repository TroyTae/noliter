import { Builder } from "./Type";
import { createObserver } from "./Observer";
import { createElement, removeChildren } from "./Element";

function createAnchor(builder?: Builder<"a">) {
  return createElement("a", builder);
}
function createAbbr(builder?: Builder<"abbr">) {
  return createElement("abbr", builder);
}
function createAddress(builder?: Builder<"address">) {
  return createElement("address", builder);
}
function createApplet(builder?: Builder<"applet">) {
  return createElement("applet", builder);
}
function createArea(builder?: Builder<"area">) {
  return createElement("area", builder);
}
function createArticle(builder?: Builder<"article">) {
  return createElement("article", builder);
}
function createAside(builder?: Builder<"aside">) {
  return createElement("aside", builder);
}
function createAudio(builder?: Builder<"audio">) {
  return createElement("audio", builder);
}
function createBold(builder?: Builder<"b">) {
  return createElement("b", builder);
}
function createBase(builder?: Builder<"base">) {
  return createElement("base", builder);
}
function createBdi(builder?: Builder<"bdi">) {
  return createElement("bdi", builder);
}
function createBdo(builder?: Builder<"bdo">) {
  return createElement("bdo", builder);
}
function createBlockQuote(builder?: Builder<"blockquote">) {
  return createElement("blockquote", builder);
}
function createBody(builder?: Builder<"body">) {
  return createElement("body", builder);
}
function createBr(builder?: Builder<"br">) {
  return createElement("br", builder);
}
function createButton(builder?: Builder<"button">) {
  return createElement("button", builder);
}
function createCanvas(builder?: Builder<"canvas">) {
  return createElement("canvas", builder);
}
function createCaption(builder?: Builder<"caption">) {
  return createElement("caption", builder);
}
function createCite(builder?: Builder<"cite">) {
  return createElement("cite", builder);
}
function createCode(builder?: Builder<"code">) {
  return createElement("code", builder);
}
function createCol(builder?: Builder<"col">) {
  return createElement("col", builder);
}
function createColGroup(builder?: Builder<"colgroup">) {
  return createElement("colgroup", builder);
}
function createData(builder?: Builder<"data">) {
  return createElement("data", builder);
}
function createDataList(builder?: Builder<"datalist">) {
  return createElement("datalist", builder);
}
function createDd(builder?: Builder<"dd">) {
  return createElement("dd", builder);
}
function createDel(builder?: Builder<"del">) {
  return createElement("del", builder);
}
function createDetails(builder?: Builder<"details">) {
  return createElement("details", builder);
}
function createDfn(builder?: Builder<"dfn">) {
  return createElement("dfn", builder);
}
function createDialog(builder?: Builder<"dialog">) {
  return createElement("dialog", builder);
}
function createDir(builder?: Builder<"dir">) {
  return createElement("dir", builder);
}
function createDiv(builder?: Builder<"div">) {
  return createElement("div", builder);
}
function createDl(builder?: Builder<"dl">) {
  return createElement("dl", builder);
}
function createDt(builder?: Builder<"dt">) {
  return createElement("dt", builder);
}
function createEm(builder?: Builder<"em">) {
  return createElement("em", builder);
}
function createEmbed(builder?: Builder<"embed">) {
  return createElement("embed", builder);
}
function createFieldSet(builder?: Builder<"fieldset">) {
  return createElement("fieldset", builder);
}
function createFigcaption(builder?: Builder<"figcaption">) {
  return createElement("figcaption", builder);
}

function createHeader(builder?: Builder<"header">) {
  return createElement("header", builder);
}

function createLink(builder?: Builder<"link">) {
  return createElement("link", builder);
}
function createMain(builder?: Builder<"main">) {
  return createElement("main", builder);
}

function createSection(builder?: Builder<"section">) {
  return createElement("section", builder);
}

function createSpan(builder?: Builder<"span">) {
  return createElement("span", builder);
}

export {
  createElement,
  removeChildren,
  createObserver,
  createAnchor,
  createAbbr,
  createAddress,
  createApplet,
  createArea,
  createArticle,
  createAside,
  createAudio,
  createBold,
  createBase,
  createBdi,
  createBdo,
  createBlockQuote,
  createBody,
  createBr,
  createButton,
  createCanvas,
  createCaption,
  createCite,
  createCode,
  createCol,
  createColGroup,
  createData,
  createDataList,
  createDd,
  createDel,
  createDetails,
  createDfn,
  createDialog,
  createDir,
  createDiv,
  createDl,
  createDt,
  createEm,
  createEmbed,
  createFieldSet,
  createFigcaption,
  createHeader,
  createLink,
  createMain,
  createSection,
  createSpan,
};
