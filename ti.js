var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function $id(id) {
    return document.getElementById(id);
}
function $name(name) {
    var elements = document.getElementsByName(name);
    return elements.length == 0 ? null : elements[0];
}
function $names(name) {
    var result = [];
    var elements = document.getElementsByName(name);
    for (var i = 0; i < elements.length; i++) {
        result.push(elements[i]);
    }
    return result;
}
function $class(name) {
    var elements = document.getElementsByClassName(name);
    return elements.length == 0 ? null : elements[0];
}
function $classes(name) {
    var result = [];
    var elements = document.getElementsByClassName(name);
    for (var i = 0; i < elements.length; i++) {
        result.push(elements[i]);
    }
    return result;
}
function $first(list, f, errorMessage) {
    if (errorMessage === void 0) { errorMessage = undefined; }
    for (var i in list) {
        var currentItem = list[i];
        if (f(currentItem)) {
            return currentItem;
        }
    }
    throw errorMessage === undefined ? 'Could not find the item.' : errorMessage;
}
function $firstOrNull(list, f) {
    for (var i in list) {
        var currentItem = list[i];
        if (f(currentItem)) {
            return currentItem;
        }
    }
    return null;
}
function $count(list, f) {
    var result = 0;
    for (var i in list) {
        var currentItem = list[i];
        if (f(currentItem)) {
            result++;
        }
    }
    return result;
}
function $any(list, f) {
    for (var i in list) {
        var currentItem = list[i];
        if (f(currentItem)) {
            return true;
        }
    }
    return false;
}
function $all(list, f) {
    for (var i in list) {
        var currentItem = list[i];
        if (!f(currentItem)) {
            return false;
        }
    }
    return true;
}
function $where(list, f) {
    var result = [];
    for (var i in list) {
        var currentItem = list[i];
        if (f(currentItem)) {
            result.push(currentItem);
        }
    }
    return result;
}
function $min(list, f) {
    var first = true;
    var result = 0;
    for (var i in list) {
        var currentItem = list[i];
        if (first) {
            result = f(currentItem);
            first = false;
        }
        else {
            result = Math.min(result, f(currentItem));
        }
    }
    return result;
}
function $max(list, f) {
    var first = true;
    var result = 0;
    for (var i in list) {
        var currentItem = list[i];
        if (first) {
            result = f(currentItem);
            first = false;
        }
        else {
            result = Math.max(result, f(currentItem));
        }
    }
    return result;
}
function $sum(list, f) {
    var result = 0;
    for (var i in list) {
        var currentItem = list[i];
        result += f(currentItem);
    }
    return result;
}
function $select(list, f) {
    var result = [];
    for (var i in list) {
        var currentItem = list[i];
        var selection = f(currentItem);
        result.push(selection);
    }
    return result;
}
function $selectMany(list, f) {
    var result = [];
    for (var i in list) {
        var currentItem = list[i];
        var childList = f(currentItem);
        for (var j in childList) {
            var childListItem = childList[j];
            result.push(childListItem);
        }
    }
    return result;
}
function $orderBy(list, f) {
    return list.sort(function (a, b) {
        var valueA = f(a);
        var valueB = f(b);
        if (valueA == valueB) {
            return 0;
        }
        else if (valueA > valueB) {
            return 1;
        }
        else {
            return -1;
        }
    });
}
function $orderByDescending(list, f) {
    return list.sort(function (a, b) {
        var valueA = f(a);
        var valueB = f(b);
        if (valueA == valueB) {
            return 0;
        }
        else if (valueA < valueB) {
            return 1;
        }
        else {
            return -1;
        }
    });
}
function $distinct(list, f) {
    var result = [];
    for (var i in list) {
        var currentItem = list[i];
        var currentValue = f(currentItem);
        if (result.indexOf(currentValue) == -1) {
            result.push(currentValue);
        }
    }
    return result;
}
function $notNullIf(item, f) {
    return f(item) ? item : null;
}
function $arrayToObject(list, keyName, valueName) {
    var result = [];
    for (var itemKey in list) {
        var itemValue = list[itemKey];
        var convertedItem = {};
        convertedItem[keyName] = itemKey;
        convertedItem[valueName] = itemValue;
        result.push(convertedItem);
    }
    return result;
}
var $Node = /** @class */ (function () {
    function $Node(node) {
        this.node = node;
        this.$isWrapper = true;
    }
    return $Node;
}());
/// <reference path="Node.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var $Element = /** @class */ (function (_super) {
    __extends($Element, _super);
    function $Element(what) {
        var _this = _super.call(this, typeof what === 'string' ? document.createElement(what) : what) || this;
        _this.element = null;
        _this.element = _this.node;
        return _this;
    }
    $Element.prototype.id = function (id) {
        this.element.id = id;
        return this;
    };
    $Element.prototype.className = function (className) {
        this.element.className = className;
        return this;
    };
    $Element.prototype.style = function (f) {
        f(this.element.style);
        return this;
    };
    $Element.prototype.parent = function (container) {
        if (container['$isWrapper'] !== undefined) {
            container.node.appendChild(this.element);
        }
        else {
            container.appendChild(this.element);
        }
        return this;
    };
    $Element.prototype.then = function (f) {
        f(this);
        return this;
    };
    $Element.prototype.thenCustom = function (f) {
        f(this.element);
        return this;
    };
    return $Element;
}($Node));
/// <reference path="Element.ts" />
var $Anchor = /** @class */ (function (_super) {
    __extends($Anchor, _super);
    function $Anchor(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'a') || this;
    }
    $Anchor.prototype.href = function (href) {
        this.element.href = href;
        return this;
    };
    $Anchor.prototype.js = function (onclick) {
        this.element.addEventListener('click', onclick, false);
        this.element.href = 'javascript:void(0);';
        return this;
    };
    $Anchor.prototype.content = function (text) {
        this.element.textContent = text;
        return this;
    };
    return $Anchor;
}($Element));
/// <reference path="Element.ts" />
var $Button = /** @class */ (function (_super) {
    __extends($Button, _super);
    function $Button(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'button') || this;
    }
    $Button.prototype.text = function (text) {
        this.element.textContent = text;
        return this;
    };
    $Button.prototype.lines = function (lines) {
        for (var i = 0; i < lines.length; i++) {
            var span = document.createElement('span');
            span.innerText = lines[i];
            this.element.appendChild(span);
            if (i < lines.length - 1) {
                this.element.appendChild(document.createElement('br'));
            }
        }
        return this;
    };
    $Button.prototype.onClick = function (handler) {
        this.element.addEventListener('click', handler, false);
        return this;
    };
    return $Button;
}($Element));
/// <reference path="Element.ts" />
var $Canvas = /** @class */ (function (_super) {
    __extends($Canvas, _super);
    function $Canvas(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'canvas') || this;
    }
    $Canvas.prototype.size = function (width, height) {
        this.element.width = width;
        this.element.height = height;
        return this;
    };
    $Canvas.prototype.with2D = function (f) {
        var context = this.element.getContext('2d');
        f(context);
        return this;
    };
    $Canvas.prototype.onClick = function (handler) {
        this.element.addEventListener('click', handler, false);
        return this;
    };
    return $Canvas;
}($Element));
/// <reference path="Element.ts" />
var $Container = /** @class */ (function (_super) {
    __extends($Container, _super);
    function $Container(what) {
        return _super.call(this, what) || this;
    }
    $Container.prototype.append = function (element) {
        if (element['$isWrapper'] !== undefined) {
            this.element.appendChild(element.node);
        }
        else {
            this.element.appendChild(element);
        }
        return this;
    };
    $Container.prototype.elements = function (elements) {
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            if (element['$isWrapper'] !== undefined) {
                this.element.appendChild(element.node);
            }
            else {
                this.element.appendChild(element);
            }
        }
        return this;
    };
    $Container.prototype.onClick = function (handler) {
        this.element.addEventListener('click', handler, false);
        return this;
    };
    return $Container;
}($Element));
/// <reference path="Container.ts" />
var $CheckBox = /** @class */ (function (_super) {
    __extends($CheckBox, _super);
    function $CheckBox() {
        var _this = _super.call(this, 'div') || this;
        _this.checkBoxElement = null;
        _this.labelElement = null;
        _this.checkBoxElement = $new().input('checkbox').element;
        _this.labelElement = $new().label().element;
        _this.append(_this.checkBoxElement);
        _this.append(_this.labelElement);
        return _this;
    }
    $CheckBox.prototype.containerID = function (id) {
        this.element.id = id;
        return this;
    };
    $CheckBox.prototype.id = function (id) {
        this.checkBoxElement.id = id;
        this.labelElement.htmlFor = id;
        return this;
    };
    $CheckBox.prototype.label = function (text) {
        this.labelElement.textContent = text;
        return this;
    };
    return $CheckBox;
}($Container));
var $Div = /** @class */ (function (_super) {
    __extends($Div, _super);
    function $Div(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'div') || this;
    }
    $Div.prototype.clear = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        return this;
    };
    $Div.prototype.hide = function () {
        if (this.element.style.display != 'none') {
            this.element['$oldDisplay'] = this.element.style.display;
            this.element.style.display = 'none';
        }
        return this;
    };
    $Div.prototype.show = function () {
        if (this.element.style.display == 'none') {
            var oldDisplay = this.element['$oldDisplay'];
            if (oldDisplay !== undefined) {
                this.element.style.display = oldDisplay;
                delete this.element['$oldDisplay'];
            }
            else {
                this.element.style.display = 'inline';
            }
        }
        return this;
    };
    return $Div;
}($Container));
function $new() {
    return new $New();
}
function $newBuilder(f, parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    var builder = f();
    if (parent != null) {
        builder.parent(parent);
    }
    if (id != null) {
        builder.id(id);
    }
    return builder;
}
function $newAnchor(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().anchor(); }, parent, id);
}
function $newButton(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().button(); }, parent, id);
}
function $newCanvas(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().canvas(); }, parent, id);
}
function $newDiv(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().div(); }, parent, id);
}
function $newHR(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().hr(); }, parent, id);
}
function $newImage(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().image(); }, parent, id);
}
function $newLabel(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().label(); }, parent, id);
}
function $newParagraph(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().paragraph(); }, parent, id);
}
function $newSpan(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().span(); }, parent, id);
}
function $newSelect(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().select(); }, parent, id);
}
function $newTable(parent, id) {
    if (parent === void 0) { parent = null; }
    if (id === void 0) { id = null; }
    return $newBuilder(function () { return $new().table(); }, parent, id);
}
function $asAnchor(id) {
    var element = document.getElementById(id);
    return new $Anchor(element);
}
function $asButton(id) {
    var element = document.getElementById(id);
    return new $Button(element);
}
function $asDiv(id) {
    var element = document.getElementById(id);
    return new $Div(element);
}
function $asImage(id) {
    var element = document.getElementById(id);
    return new $Image(element);
}
function $asInput(id) {
    var element = document.getElementById(id);
    return new $Input(element);
}
function $asLabel(id) {
    var element = document.getElementById(id);
    return new $Label(element);
}
function $asPanels(ids) {
    return new $Panels(ids);
}
function $asPanelsAuto(id) {
    var panels = new $Panels([]);
    var element = document.getElementById(id);
    for (var i = 0; i < element.childNodes.length; i++) {
        var childElement = element.childNodes[i];
        if (childElement.id !== undefined) {
            panels.ids.push(childElement.id);
        }
    }
    return panels;
}
function $asParagraph(id) {
    var element = document.getElementById(id);
    return new $Paragraph(element);
}
function $asRepeater(id) {
    var element = document.getElementById(id);
    return new $Repeater(element);
}
function $asSelect(id) {
    var element = document.getElementById(id);
    return new $Select(element);
}
function asTable(id) {
    var element = document.getElementById(id);
    return new $Table(element);
}
var $Paragraph = /** @class */ (function (_super) {
    __extends($Paragraph, _super);
    function $Paragraph(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'p') || this;
    }
    $Paragraph.prototype.content = function (text) {
        this.element.textContent = text;
        return this;
    };
    return $Paragraph;
}($Container));
var $Image = /** @class */ (function (_super) {
    __extends($Image, _super);
    function $Image(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'img') || this;
    }
    $Image.prototype.title = function (title) {
        this.element.title = title;
        return this;
    };
    $Image.prototype.source = function (fileName) {
        this.element.src = fileName;
        return this;
    };
    return $Image;
}($Element));
var $Input = /** @class */ (function (_super) {
    __extends($Input, _super);
    function $Input(existing, type) {
        if (existing === void 0) { existing = null; }
        if (type === void 0) { type = null; }
        var _this = _super.call(this, existing != null ? existing : 'input') || this;
        if (type != null) {
            _this.element.type = type;
        }
        return _this;
    }
    $Input.prototype.name = function (name) {
        this.element.name = name;
        return this;
    };
    $Input.prototype.getValue = function () {
        return this.element.value;
    };
    $Input.prototype.value = function (value) {
        this.element.value = value;
        return this;
    };
    $Input.prototype.placeholder = function (placeholder) {
        this.element.placeholder = placeholder;
        return this;
    };
    $Input.prototype.maxLength = function (maxLength) {
        this.element.maxLength = maxLength;
        return this;
    };
    return $Input;
}($Element));
var $Label = /** @class */ (function (_super) {
    __extends($Label, _super);
    function $Label(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'label') || this;
    }
    $Label.prototype.content = function (text) {
        this.element.textContent = text;
        return this;
    };
    return $Label;
}($Element));
var $New = /** @class */ (function () {
    function $New() {
    }
    $New.prototype.element = function (name) {
        return new $Element(name);
    };
    $New.prototype.anchor = function () {
        return new $Anchor();
    };
    $New.prototype.button = function () {
        return new $Button();
    };
    $New.prototype.canvas = function () {
        return new $Canvas();
    };
    $New.prototype.checkBox = function () {
        return new $CheckBox();
    };
    $New.prototype.div = function () {
        return new $Div();
    };
    $New.prototype.hr = function () {
        return new $HR();
    };
    $New.prototype.image = function () {
        return new $Image();
    };
    $New.prototype.input = function (type) {
        return new $Input(null, type);
    };
    $New.prototype.label = function () {
        return new $Label();
    };
    $New.prototype.paragraph = function () {
        return new $Paragraph();
    };
    $New.prototype.span = function () {
        return new $Span();
    };
    $New.prototype.textBox = function () {
        return this.input('text');
    };
    $New.prototype.select = function () {
        return new $Select();
    };
    $New.prototype.table = function () {
        return new $Table();
    };
    return $New;
}());
var $Panels = /** @class */ (function () {
    function $Panels(ids) {
        this.ids = [];
        this.ids = ids;
    }
    $Panels.prototype.hide = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        for (var _a = 0, ids_1 = ids; _a < ids_1.length; _a++) {
            var id = ids_1[_a];
            var element = document.getElementById(id);
            if (element.style.display != 'none') {
                element['$oldDisplay'] = element.style.display;
                element.style.display = 'none';
            }
        }
    };
    $Panels.prototype.hideAll = function () {
        for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
            var id = _a[_i];
            this.hide(id);
        }
    };
    $Panels.prototype.show = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        for (var _a = 0, ids_2 = ids; _a < ids_2.length; _a++) {
            var id = ids_2[_a];
            var element = document.getElementById(id);
            if (element.style.display == 'none') {
                var oldDisplay = element['$oldDisplay'];
                if (oldDisplay !== undefined) {
                    element.style.display = oldDisplay;
                    delete element['$oldDisplay'];
                }
                else {
                    element.style.display = 'inline';
                }
            }
        }
    };
    $Panels.prototype.showAll = function () {
        for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
            var id = _a[_i];
            this.show(id);
        }
    };
    $Panels.prototype.showOnly = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.hideAll();
        for (var _a = 0, ids_3 = ids; _a < ids_3.length; _a++) {
            var id = ids_3[_a];
            this.show(id);
        }
    };
    return $Panels;
}());
var $Span = /** @class */ (function (_super) {
    __extends($Span, _super);
    function $Span(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'span') || this;
    }
    $Span.prototype.content = function (text) {
        this.element.textContent = text;
        return this;
    };
    return $Span;
}($Container));
var $Repeater = /** @class */ (function () {
    function $Repeater(element) {
        this.element = null;
        this.template = null;
        this.element = element;
    }
    $Repeater.prototype.clear = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    };
    $Repeater.prototype.appendFromTemplate = function () {
        var currentLength = this.element.childNodes.length;
        var element = this.template(currentLength);
        this.element.appendChild(element);
        return element;
    };
    $Repeater.prototype.removeAt = function (index) {
        var child = this.element.childNodes[index];
        this.element.removeChild(child);
    };
    $Repeater.prototype.remove = function (element) {
        this.element.removeChild(element);
    };
    return $Repeater;
}());
/// <reference path="Element.ts" />
var $Select = /** @class */ (function (_super) {
    __extends($Select, _super);
    function $Select(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'select') || this;
    }
    $Select.prototype.name = function (name) {
        this.element.name = name;
        return this;
    };
    $Select.prototype.value = function (value) {
        this.element.value = value;
        return this;
    };
    $Select.prototype.multiple = function (multiple) {
        this.element.multiple = multiple;
        return this;
    };
    $Select.prototype.size = function (size) {
        this.element.size = size;
        return this;
    };
    $Select.prototype.options = function (options) {
        $Select.setOptions(this.element, options);
        return this;
    };
    $Select.prototype.clear = function () {
        this.element.options.length = 0;
        return this;
    };
    $Select.prototype.getSelectedValue = function () {
        var option = this.element.options[this.element.selectedIndex];
        return option.value;
    };
    $Select.prototype.addItem = function (value, text) {
        var option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        this.element.appendChild(option);
        return this;
    };
    $Select.prototype.setItem = function (value, text) {
        for (var i = 0; i < this.element.length; i++) {
            var option = this.element.options[i];
            if (option.value == value) {
                option.textContent = text;
                return this;
            }
        }
        throw 'Could not set value of item "' + value + '" in the select element.';
    };
    $Select.prototype.removeItem = function (value) {
        for (var i = 0; i < this.element.length; i++) {
            if (this.element.options[i].value == value) {
                this.element.remove(i);
                return this;
            }
        }
        throw 'Could not remove item "' + value + '" from the select element.';
    };
    $Select.prototype.values = function (values) {
        var oldValue = this.element.value;
        this.clear();
        this.appendValues(values);
        if (values.indexOf(oldValue) != -1) {
            this.element.value = oldValue;
        }
        return this;
    };
    $Select.prototype.appendValues = function (values) {
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            this.addItem(value, value);
        }
        return this;
    };
    $Select.prototype.sortByText = function () {
        var options = this.element.options;
        var optionsArray = [];
        for (var i = 0; i < options.length; i++) {
            optionsArray.push(options[i]);
        }
        optionsArray = optionsArray.sort(function (a, b) {
            var left = a.textContent.toLowerCase();
            var right = b.textContent.toLowerCase();
            if (left < right) {
                return -1;
            }
            if (left > right) {
                return 1;
            }
            return 0;
        });
        for (var i = 0; i <= options.length; i++) {
            options[i] = optionsArray[i];
        }
        return this;
    };
    $Select.prototype.onChange = function (handler) {
        this.element.addEventListener('change', handler, false);
        return this;
    };
    $Select.setOptions = function (element, options) {
        for (var key in options) {
            var option = document.createElement('option');
            option.value = key;
            option.textContent = options[key];
            element.appendChild(option);
        }
    };
    return $Select;
}($Element));
var $HR = /** @class */ (function (_super) {
    __extends($HR, _super);
    function $HR(existing) {
        if (existing === void 0) { existing = null; }
        return _super.call(this, existing != null ? existing : 'hr') || this;
    }
    return $HR;
}($Container));
var $Table = /** @class */ (function (_super) {
    __extends($Table, _super);
    function $Table(existing) {
        if (existing === void 0) { existing = null; }
        var _this = _super.call(this, existing != null ? existing : 'table') || this;
        _this.activeRow = null;
        return _this;
    }
    $Table.prototype.newRow = function () {
        this.activeRow = document.createElement('tr');
        this.element.appendChild(this.activeRow);
        return this.activeRow;
    };
    $Table.prototype.newCell = function (content) {
        if (content === void 0) { content = undefined; }
        return new $TableRow(this.activeRow).newCell(content);
    };
    $Table.prototype.addRowStrings = function (values) {
        this.newRow();
        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
            var value = values_2[_i];
            this.newCell(value);
        }
    };
    return $Table;
}($Element));
var $TableRow = /** @class */ (function () {
    function $TableRow(element) {
        this.element = null;
        this.activeCell = null;
        this.element = element;
    }
    $TableRow.prototype.newCell = function (content) {
        if (content === void 0) { content = undefined; }
        this.activeCell = document.createElement('td');
        if (content != undefined) {
            if (typeof content == 'string') {
                this.activeCell.textContent = content;
            }
            else {
                for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
                    var child = content_1[_i];
                    this.activeCell.appendChild(child);
                }
            }
        }
        this.element.appendChild(this.activeCell);
        return this.activeCell;
    };
    return $TableRow;
}());
var topPanels = null;
var actionPanels = null;
var tacticalActionPanels = null;
window.onload = function () {
    topPanels = $asPanelsAuto('topPanels');
    actionPanels = $asPanelsAuto('actionPanels');
    tacticalActionPanels = $asPanelsAuto('tacticalActionPanels');
    hideAllPanels();
    var titleButton = $id('title');
    titleButton.addEventListener('click', function () {
        hideAllPanels();
        document.body.style.backgroundColor = '#fff';
    }, false);
    var strategyButton = $id('strategyPhase');
    strategyButton.addEventListener('click', function () {
        topPanels.showOnly('strategyPhasePanel');
        actionPanels.hideAll();
        document.body.style.backgroundColor = 'rgb(104, 18, 18)';
    }, false);
    var actionButton = $id('actionPhase');
    actionButton.addEventListener('click', function () {
        $id('tradeHints').style.display = 'none';
        topPanels.showOnly('actionPhasePanel');
        actionPanels.showOnly('defaultActionPanel');
        document.body.style.backgroundColor = 'rgb(2, 72, 105)';
    }, false);
    var statusButton = $id('statusPhase');
    statusButton.addEventListener('click', function () {
        topPanels.showOnly('statusPhasePanel');
        actionPanels.hideAll();
        document.body.style.backgroundColor = 'rgb(87, 105, 8)';
    }, false);
    var agendaButton = $id('agendaPhase');
    agendaButton.addEventListener('click', function () {
        topPanels.showOnly('agendaPhasePanel');
        actionPanels.hideAll();
        document.body.style.backgroundColor = 'rgb(18, 112, 30)';
    }, false);
    var tradeActionButton = $id('tradeAction');
    tradeActionButton.addEventListener('click', function () {
        $id('tradeHints').style.display = 'block';
    }, false);
    var tacticalActionButton = $id('tacticalAction');
    tacticalActionButton.addEventListener('click', function () {
        actionPanels.showOnly('tacticalActionPanel');
        tacticalActionPanels.hideAll();
    }, false);
    var strategicActionButton = $id('strategicAction');
    strategicActionButton.addEventListener('click', function () {
        actionPanels.showOnly('strategicActionPanel');
        tacticalActionPanels.hideAll();
    }, false);
    var componentActionButton = $id('componentAction');
    componentActionButton.addEventListener('click', function () {
        actionPanels.showOnly('componentActionPanel');
        tacticalActionPanels.hideAll();
    }, false);
    var passActionButton = $id('passAction');
    passActionButton.addEventListener('click', function () {
        actionPanels.showOnly('passActionPanel');
        tacticalActionPanels.hideAll();
    }, false);
    var activationTacticButton = $id('activationTactic');
    activationTacticButton.addEventListener('click', function () {
        tacticalActionPanels.showOnly('activationTacticPanel');
    }, false);
    var movementTacticButton = $id('movementTactic');
    movementTacticButton.addEventListener('click', function () {
        tacticalActionPanels.showOnly('movementTacticPanel');
    }, false);
    var spaceCombatTacticButton = $id('spaceCombatTactic');
    spaceCombatTacticButton.addEventListener('click', function () {
        tacticalActionPanels.showOnly('spaceCombatTacticPanel');
    }, false);
    var invasionTacticButton = $id('invasionTactic');
    invasionTacticButton.addEventListener('click', function () {
        tacticalActionPanels.showOnly('invasionTacticPanel');
    }, false);
    var productionTacticButton = $id('productionTactic');
    productionTacticButton.addEventListener('click', function () {
        tacticalActionPanels.showOnly('productionTacticPanel');
    }, false);
    var tooltips = document.querySelectorAll('[data-tooltip]');
    var _loop_1 = function (i) {
        var span = tooltips.item(i);
        span.addEventListener('click', function () {
            alert(span.dataset['tooltip']);
        }, false);
    };
    for (var i = 0; i < tooltips.length; i++) {
        _loop_1(i);
    }
};
function hideAllPanels() {
    topPanels.hideAll();
    actionPanels.hideAll();
    tacticalActionPanels.hideAll();
    $id('tradeHints').style.display = 'none';
}
