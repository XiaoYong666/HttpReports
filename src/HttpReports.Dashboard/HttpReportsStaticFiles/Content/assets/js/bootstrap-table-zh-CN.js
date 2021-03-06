﻿(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableZhCN = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Chinese translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        $.fn.bootstrapTable.locales['zh-CN'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {  

                if (lang.LanguageFormat == "en-us") {
                    return ' ' + pageNumber + '  ';
                }

                if (lang.LanguageFormat == "zh-cn") {
                    return '\u6BCF\u9875\u663E\u793A ' + pageNumber + ' \u6761\u8BB0\u5F55';
                }  
               
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {

                if (lang.LanguageFormat == "en-us") {
                    return 'from ' + pageFrom + ' to ' + pageTo + ' , total ' + totalRows + ' ';
                }

                if (lang.LanguageFormat == "zh-cn") {
                    return '\u663E\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
                } 
              
            },
            formatDetailPagination: function formatDetailPagination(totalRows) {
                return '\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
            },
            formatSearch: function formatSearch() {
                return '搜索';
            },
            formatNoMatches: function formatNoMatches() {
                return '';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return '隐藏/显示分页';
            },
            formatRefresh: function formatRefresh() {
                return '刷新';
            },
            formatToggle: function formatToggle() {
                return '切换';
            },
            formatColumns: function formatColumns() {
                return '列';
            },
            formatFullscreen: function formatFullscreen() {
                return '全屏';
            },
            formatAllRows: function formatAllRows() {
                return '所有';
            },
            formatAutoRefresh: function formatAutoRefresh() {
                return '自动刷新';
            },
            formatExport: function formatExport() {
                return '导出数据';
            },
            formatClearFilters: function formatClearFilters() {
                return '清空过滤';
            },
            formatJumpto: function formatJumpto() {
                return '跳转';
            },
            formatAdvancedSearch: function formatAdvancedSearch() {
                return '高级搜索';
            },
            formatAdvancedCloseButton: function formatAdvancedCloseButton() {
                return '关闭';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
    })(jQuery);
});