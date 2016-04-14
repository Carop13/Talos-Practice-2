'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // para no requerir todos los plugins de gulp
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;
var series = require('stream-series');

