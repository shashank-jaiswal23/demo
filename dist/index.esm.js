import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
classnames.exports;

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames));
	return classnames.exports;
}

var classnamesExports = requireClassnames();
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function RichText(_a) {
    var text = _a.text, className = _a.className;
    if (!text)
        return null;
    return (jsx("div", { className: className ? "rich-text ".concat(className) : "rich-text", dangerouslySetInnerHTML: { __html: text.replace(/\n/g, "<br />") } }));
}

// SVG Components
var SvgArrow = function () { return (jsx("svg", { className: "inline ml-1", width: "15", height: "8", viewBox: "0 0 15 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.2787 0.159095L14.3583 3.61591C14.5472 3.82804 14.5472 4.17196 14.3583 4.38409L11.2787 7.8409C11.0897 8.05303 10.7833 8.05303 10.5943 7.8409C10.4054 7.62878 10.4054 7.28485 10.5943 7.07272L12.8478 4.54319H0.5V3.45681H12.8478L10.5943 0.927276C10.4054 0.715149 10.4054 0.371223 10.5943 0.159095C10.7833 -0.0530318 11.0897 -0.0530318 11.2787 0.159095Z", fill: "currentColor" }) })); };
var SvgArrowDown = function () { return (jsx("svg", { className: "inline ml-1 mb-1", width: "13", height: "14", viewBox: "0 0 15 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8409 8.27869L4.38409 11.3583C4.17196 11.5472 3.82804 11.5472 3.61591 11.3583L0.159095 8.27869C-0.0530323 8.08971 -0.0530322 7.78331 0.159095 7.59433C0.371223 7.40536 0.71515 7.40536 0.927277 7.59433L3.45681 9.84783L3.45681 0.5L4.54319 0.5L4.54319 9.84783L7.07272 7.59433C7.28485 7.40536 7.62878 7.40536 7.8409 7.59433C8.05303 7.78331 8.05303 8.08971 7.8409 8.27869Z", fill: "currentColor", fillOpacity: "0.8" }) })); };
// Text Variants
function LinkWithPlus(_a) {
    var title = _a.title;
    return (jsx("span", { className: "flex items-center font-label leading-none px-2 pt-2 pb-2 border hover:opacity-50 transition-opacity duration-300", children: title }));
}
function LinkWithDownArrow(_a) {
    var title = _a.title;
    return (jsxs("span", { className: "flex items-center font-label leading-none px-2 pt-2 pb-2 border hover:opacity-50 transition-opacity duration-300", children: [title, " ", jsx(SvgArrowDown, {})] }));
}
function LinkWithArrow(_a) {
    var title = _a.title;
    return (jsxs("span", { className: "flex items-center font-label leading-none px-2 pt-2 pb-2 border mt-2 hover:opacity-50 transition-opacity duration-300", children: [title, " ", jsx(SvgArrow, {})] }));
}
function InternalLink(props) {
    var _a = props.href, href = _a === void 0 ? "/" : _a, children = props.children, title = props.title, className = props.className, onClick = props.onClick;
    var safeTitle = typeof title === "string" ? title : title === null || title === void 0 ? void 0 : title.value;
    return (jsx("a", { href: href, className: classNames("", className), onClick: onClick, children: children ? children : jsx(LinkWithArrow, { title: safeTitle || "" }) }));
}
function ExternalLink(props) {
    var href = props.href, _a = props.target, target = _a === void 0 ? "_blank" : _a, children = props.children, title = props.title, className = props.className;
    return (jsx("a", { className: classNames("", className), href: href, rel: "noopener noreferrer", target: target, children: children ? children : jsx(LinkWithArrow, { title: title || "" }) }));
}
function Link(props) {
    var targetIsExternal = useMemo(function () { var _a; return (_a = props.href) === null || _a === void 0 ? void 0 : _a.includes("http"); }, [props.href]);
    var relativeHref = useMemo(function () {
        var _a;
        var regex = /https?:\/\/(?:www\.)?condenast\.com\/(.*)/g;
        return ((_a = props.href) === null || _a === void 0 ? void 0 : _a.replace(regex, "$1")) || props.href || "/";
    }, [props.href]);
    if ((props === null || props === void 0 ? void 0 : props.title) && typeof props.title === "object" && props.title.value) {
        return (jsxs("div", { children: [jsx("a", { href: relativeHref, target: "_blank", rel: "noopener noreferrer", className: "inline-block", children: jsx(LinkWithArrow, { title: props.title.value }) }), jsx("span", { className: "ml-2 text-xs cursor-pointer editable", onClick: function () {
                        if (props.title && typeof props.title === "object" && props.title.sheetUrl) {
                            window.open(props.title.sheetUrl, "sheet");
                        }
                    }, children: "Translate" })] }));
    }
    return jsx(Fragment, { children: targetIsExternal ? jsx(ExternalLink, __assign({}, props)) : jsx(InternalLink, __assign({}, props)) });
}

function Section(_a) {
    var id = _a.id, className = _a.className, children = _a.children;
    return (jsxs("section", { id: id, className: classNames(className, "mx-auto relative"), children: [jsx("div", { children: children }), jsx("span", { className: "checker absolute" })] }));
}

function Image(props) {
    var _a = props.alt, alt = _a === void 0 ? "" : _a, url = props.url, className = props.className, height = props.height, width = props.width, lazy = props.lazy, caption = props.caption;
    if (!url)
        return null;
    return (jsxs("picture", { children: [jsx("img", { src: url, alt: alt, className: classNames(className), loading: lazy === "eager" ? "eager" : "lazy", height: height, width: width }), caption && jsx("sub", { className: "mt-2", children: caption })] }));
}

function Video(props) {
    var url = props.url, className = props.className, displayVideoPlayer = props.displayVideoPlayer;
    if (!url)
        return null;
    return (jsx("video", { className: classNames(className), src: url, controls: displayVideoPlayer, autoPlay: !displayVideoPlayer, playsInline: true, muted: true, loop: true }));
}

function File(_a) {
    var _b, _c;
    var className = _a.className, displayVideoPlayer = _a.displayVideoPlayer, data = _a.data, type = _a.type;
    if (!(data === null || data === void 0 ? void 0 : data.attributes))
        return null;
    return (jsxs(Fragment, { children: [(type === null || type === void 0 ? void 0 : type.toUpperCase()) === "IMAGE" && jsx(Image, __assign({ alt: "", className: className }, data.attributes)), (type === null || type === void 0 ? void 0 : type.toUpperCase()) === "VIDEO" && jsx(Video, __assign({ displayVideoPlayer: displayVideoPlayer, className: className }, data.attributes)), ((_b = data.attributes.mime) === null || _b === void 0 ? void 0 : _b.includes("video")) && jsx(Video, __assign({ displayVideoPlayer: displayVideoPlayer, className: className }, data.attributes)), ((_c = data.attributes.mime) === null || _c === void 0 ? void 0 : _c.includes("image")) && jsx(Image, __assign({ alt: "", className: className }, data.attributes))] }));
}

function MediaTextCard(props) {
    var media = props.media, title = props.title, text = props.text, link = props.link, _a = props.layout, layout = _a === void 0 ? 'Left' : _a, _b = props.size, size = _b === void 0 ? 'Medium' : _b, _c = props.margin, margin = _c === void 0 ? 'Regular' : _c; props.displaySeperator; var navSlug = props.navSlug, _d = props.colorTheme, colorTheme = _d === void 0 ? 'Default' : _d, className = props.className;
    return (jsxs(Fragment, { children: [size === "Medium" && jsx("div", { className: "hr" }), jsx(Section, { id: navSlug, className: classNames("relative overflow-hidden", margin !== "None" && "my-8 md:my-16", colorTheme === "Grey" && "bg-dark-grey text-white", colorTheme === "Black" && "bg-black text-white", colorTheme === "Blur" && "bg-black text-white", size === "Padding" && "md:px-6", className), children: jsxs("div", { className: classNames("flex flex-wrap items-center mx-auto", size === "Medium" && "max-w-md px-4 md:px-6"), children: [colorTheme === "Blur" && media && (jsx(File, __assign({ className: "hidden md:block h-full w-full filter blur-lg opacity-50 absolute top-0 left-0 object-top transform-gpu object-cover scale-max" }, media))), media && (jsx("div", { className: classNames("relative mb-8 md:mb-0", size === "Medium" ? "w-full md:w-7/12" : "w-full md:w-6/12", size === "Padding" && "py-0", layout === "Right" && "mb-8 md:mb-0"), children: jsx(File, __assign({}, media)) })), jsxs("div", { className: classNames("relative max-w-sm", layout === "Right" ? "md:order-first md:pr-16" : "md:pl-16", size === "Medium" ? "md:w-5/12" : "md:w-6/12", size === "Padding" && "px-4 pb-12 md:pb-0", size === "Full" && "px-4 pb-12 pt-12 md:pb-12", size !== "Medium" && "max-w-titles", layout !== "Right" && size !== "Medium" && "md:pr-16"), children: [typeof title === "string" && jsx("h2", { children: title }), title && typeof title === "object" && title.value && (jsx("a", { className: "editable block relative", onClick: function () { return title.sheetUrl && window.open(title.sheetUrl, "sheet"); }, target: "_blank", rel: "noopener noreferrer", children: jsx("h2", { children: title.value }) })), typeof text === "string" && jsx(RichText, { text: text }), text && typeof text === "object" && text.value && (jsx("a", { className: "editable block relative", onClick: function () { return text.sheetUrl && window.open(text.sheetUrl, "sheet"); }, target: "_blank", rel: "noopener noreferrer", children: jsx(RichText, { text: text.value }) })), link && (jsx("div", { className: "inline-block", children: jsx(Link, { title: link.Title, href: link.URL }) }))] })] }) })] }));
}

export { ExternalLink, File, Image, InternalLink, Link, LinkWithArrow, LinkWithDownArrow, LinkWithPlus, MediaTextCard, RichText, Section, Video };
//# sourceMappingURL=index.esm.js.map
