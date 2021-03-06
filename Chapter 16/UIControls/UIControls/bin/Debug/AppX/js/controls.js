﻿(function () {

WinJS.Namespace.define("App.Controls", {

    apptest: [
        { type: "select", id: "disabled", title: "Disabled", values: ["", "disabled"], labels: ["No", "Yes"] },
        { type: "select", id: "theme", title: "Theme", values: ["Small", "Big"], useProxy: true },
        { type: "input", id: "value", title: "Value", value: "Hello" },
        { type: "span", id: "value", value: "<Ready>", title: "Value" },
        { type: "buttons", title: "Buttons", labels: ["Add Item", "Delete Item"] },
        { type: "toggle", id: "disabled", title: "Disabled", value: false }],

    toggleSwitch: [
        { type: "toggle", id: "checked", title: "Value", value: true },
        { type: "toggle", id: "disabled", title: "Disabled", value: false }],

    rating: [
        { type: "toggle", id: "enableClear", title: "Enable Clear", value: true },
        { type: "toggle", id: "disabled", title: "Disabled", value: false },
        { type: "input", id: "userRating", title: "User Rating", value: 0 },
        { type: "input", id: "maxRating", title: "Max Rating", value: 6 },
        { type: "input", id: "averageRating", title: "Ave. Rating", value: 2.6 }],

    tooltip: [
        { type: "toggle", id: "infotip", title: "Infotip", value: false, labelOn: "Yes", labelOff: "No" },
        { type: "select", id: "placement", title: "Placement", values: ["top", "bottom", "left", "right"], labels: ["Top", "Bottom", "Left", "Right"]},
        { type: "buttons", labels: ["Open", "Close"] }],

    timePicker: [
        { type: "toggle", id: "showPeriod", title: "Show Period", value: true, useProxy: true, labelOn: "Yes", labelOff: "No" },
        { type: "toggle", id: "clock", title: "24 Hour Clock", value: false, useProxy: true, labelOn: "Yes", labelOff: "No" },
        { type: "input", id: "hourLength", title: "Hour Length", value: 2, useProxy: true },
        { type: "input", id: "minuteLength", title: "Min Length", value: 2, useProxy: true },
        { type: "span", id: "current", value: "Pick a Time", title: "Value" }],

    datePicker: [
        { type: "input", id: "dateLength", title: "Date Length", value: 2, useProxy: true },
        { type: "select", id: "monthPattern", title: "Month Style", values: ["{month.full}", "{month.abbreviated}"], labels: ["Full", "Abbreviated"]},
        { type: "select", id: "yearPattern", title: "Year Style", values: ["{year.full}", "{year.abbreviated}"], labels: ["Full", "Abbreviated"]},
        { type: "select", id: "calendar", title: "Calendar", values: ["GregorianCalendar", "HebrewCalendar", "ThaiCalendar"], labels: ["Gregorian", "Hebrew", "Thai"]},
        { type: "span", id: "current", value: "Pick a Date", title: "Value"}],

    flyout: [
        { type: "select", id: "placement", title: "Placement", values: ["top", "bottom", "left", "right"], labels: ["Top", "Bottom", "Left", "Right"]},
        { type: "select", id: "alignment", title: "Alignment", values: ["left", "center", "right"], labels: ["Left", "Center", "Right"]},
        { type: "buttons", labels: ["Show", "Hide"] }],

    menu: [{ type: "select", id: "placement", title: "Placement", values: ["top", "bottom", "left", "right"], labels: ["Top", "Bottom", "Left", "Right"], useProxy: true},
           { type: "select", id: "alignment", title: "Alignment", values: ["left", "center", "right"], labels: ["Left", "Center", "Right"], useProxy: true}],

    messagedialog: [
            { type: "toggle", id: "delay", title: "Ignore Input", value: false, labelOn: "Yes", labelOff: "No", useProxy: true },
            { type: "toggle", id: "title", title: "Title", value: true, labelOn: "Yes", labelOff: "No", useProxy: true },
            { type: "toggle", id: "addcommands", title: "Add Commands", value: true, labelOn: "Yes", labelOff: "No", useProxy: true },
            { type: "span", id: "commandSpan", value: "<Ready>", title: "Command" }],

    flipView: [
        { type: "select", id: "itemTemplate", title: "Template", values: ["HTML", "Function"], useProxy: true },
        { type: "select", id: "orientation", title: "Orientation", values: ["horizontal", "vertical"], labels: ["Horizontal", "Vertical"]},
        { type: "input", id: "itemSpacing", title: "Item Spacing", value: 10 },
        { type: "span", id: "currentPage", value: 0, title: "Current Page" },
        { type: "buttons", title: "Move", labels: ["Previous", "Next"] },
        { type: "span", id: "itemCount", value: 4, title: "Count" },
        { type: "buttons", title: "Change Data", labels: ["Add", "Remove"] },
        { type: "toggle", id: "customAnimations", title: "Custom Animations", value: false, useProxy: true, labelOn: "Yes", labelOff: "No" }],

    listView1: [
        { type: "select", id: "layout", title: "Layout", values: ["Grid", "List"], useProxy: true },
        { type: "toggle", id: "groups", title: "Groups", useProxy: true, value: false },
        { type: "select", id: "groupHeaderPosition", title: "Group Position", values: ["top", "left"], labels: ["Top", "Left"], useProxy: true },
        { type: "input", id: "maxRows", title: "Max Rows", value: 3, useProxy: true },
        { type: "span", id: "invoked", value: "Invoke an Item", title: "Invoked" },
        { type: "span", id: "selected", value: "Select an Item", title: "Selected" },

    ],

    listView2: [
        { type: "select", id: "tapBehavior", title: "tapBehavior", values: ["directSelect", "toggleSelect", "invokeOnly", "none"] },
        { type: "select", id: "selectionMode", title: "selectionMode", values: ["multi", "single", "none"] },
        { type: "input", id: "ensureVisible", title: "EnsureVisible", value: "", useProxy: true },
        { type: "input", id: "searchFor", title: "Search For", value: "", useProxy: true },
        { type: "span", id: "itemCount", value: 26, title: "Count" },
        { type: "buttons", labels: ["Add Item", "Delete Item"] },
    ],

semanticZoom: [
    { type: "toggle", id: "enableButton", title: "EnableButton", value: true },
    { type: "toggle", id: "locked", title: "Locked", value: false },
    { type: "toggle", id: "zoomedOut", title: "Zoomed Out", value: false },
    { type: "input", id: "zoomFactor", title: "Zoom Factor", value: 0.65 },
],

});



})();