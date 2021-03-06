// ==UserScript==
// @name         Manga Tracker
// @namespace    https://github.com/DakuTree/userscripts
// @author       Daku (admin@codeanimu.net)
// @description  A cross-site manga tracker.
// @homepageURL  https://trackr.moe
// @supportURL   https://github.com/DakuTree/manga-tracker/issues
// @icon         https://trackr.moe/favicon.production.png
// @include      /^https:\/\/(?:(?:dev|test)\.)?trackr\.moe(\/.*$|$)/
// @include      /^https?:\/\/mangafox\.(?:me|la)\/manga\/.+\/(?:.*\/)?.*\/.*$/
// @include      /^https?:\/\/(?:www\.)?mangahere\.c[o|c]\/manga\/.+\/.*\/?.*\/.*$/
// @include      /^https?:\/\/bato\.to\/reader.*$/
// @include      /^https:/\/dynasty-scans\.com\/chapters\/.+$/
// @include      /^http:\/\/www\.mangapanda\.com\/(?!(?:search|privacy|latest|alphabetical|popular|random)).+\/.+$/
// @include      /^https?:\/\/readms\.net\/r\/.+\/.+\/[0-9]+(?:\/[0-9]+)?(?:\?.+)?$/
// @include      /^https?:\/\/mangastream\.com\/r(ead)?\/.+\/.+\/[0-9]+(?:\/[0-9]+)?(?:\?.+)?$/
// @include      /^http:\/\/www\.webtoons\.com\/(?:en|zh-hant|zh-hans|th|id)\/[a-z0-9A-Z-_]+\/[a-z0-9A-Z-_]+\/[a-z0-9A-Z-_]+\/viewer\?title_no=[0-9]+&episode_no=[0-9]+$/
// @include      /^http:\/\/kissmanga\.com\/Manga\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_%]+\?id=[0-9]+$/
// @include      /^https?:\/\/reader\.kireicake\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.whiteoutscans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.seaotterscans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/(reader\.)?sensescans\.com\/(reader\/)?read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/helveticascans\.com\/r(?:eader)?\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https:\/\/gameofscanlation\.moe\/projects\/[a-z0-9-]+\/[a-z0-9\.-]+\/.*$/
// @include      /^http:\/\/mngcow\.co\/[a-zA-Z0-9_-]+\/[0-9\.]+\/([0-9]+\/)?$/
// @include      /^https:\/\/jaiminisbox\.com\/reader\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https:\/\/kobato\.hologfx\.com\/reader\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/merakiscans\.com\/[a-zA-Z0-9_-]+\/[0-9\.]+\/([0-9]+\/)?$/
// @include      /^http:\/\/www\.demonicscans\.com\/FoOlSlide\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.deathtollscans\.net\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/read\.egscans\.com\/[A-Za-z0-9\-_\!,]+\/?(?:Chapter_[0-9]+(?:_extra)?(?:&display=(default|webtoon))?\/?)?$/
// @include      /^https:\/\/otscans\.com\/foolslide\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.s2smanga\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/(?:www\.)?(?:readmanga\.today|readmng\.com)\/[^\/]+(\/.*)?$/
// @include      /^https?:\/\/manga\.fascans\.com\/[a-z]+\/[a-zA-Z0-9_-]+\/[0-9\.]+[\/]*[0-9]*$/
// @include      /^http?:\/\/mangaichiscans\.mokkori\.fr\/fs\/read\/.*?\/[a-z]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/read\.lhtranslation\.com\/read-(.*?)-chapter-[0-9\.]+(?:-page-[0-9]+)?\.html$/
// @include      /^https?:\/\/(?:www\.)?whitecloudpavilion\.com\/manga\/free\/manga\/.*?\/[0-9\.]+(\/.*)?$/
// @include      /^http:\/\/www\.slide\.world-three\.org\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/hotchocolatescans\.com\/fs\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/mangazuki\.co\/[a-z]+\/[a-zA-Z0-9_-]+\/[0-9\.]+[\/]*[0-9]*$/
// @include      /^https?:\/\/(reader\.)?ygscans\.com\/(reader\/)?read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.championscans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/reader\.puremashiro\.moe\/read\/.*?\/[a-z\-]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/ravens-scans\.com\/(?:multi|lector)\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9\.]+(\/.*)?$/
// @include      /^https?:\/\/reader\.thecatscans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/hatigarmscans\.eu\/hs\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.serenade\.moe\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/forums\.lolscans\.com\/book\/page2\.php\?c=.*?&t=(manga|webcomic)&pF=projectFolderName$/
// @include      /^https?:\/\/mangarock\.com\/manga\/mrs-serie-[0-9]+\/chapter\/mrs-chapter-[0-9]+$/
// @include      /^http:\/\/reader\.evilflowers\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/shoujohearts\.com\/reader\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/www\.twistedhelscans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/www\.cmreader\.info\/[a-z]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9\.-]+[\/]*[0-9]*$/
// @include      /^https?:\/\/psychoplay\.co\/read\/[a-zA-Z0-9_-]+\/[0-9\.]+$/
// @include      /^http:\/\/mangakakalot\.com\/chapter\/[a-zA-Z_\-0-9]+\/chapter_[0-9\.]+$/
// @include      /^http:\/\/reader\.dkthias\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/reader\.fos-scans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/saikoscans\.ml\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/reader\.shoujosense\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/mangatopia\.net\/slide\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/reader\.vortex-scans\.com\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/dokusha\.info\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/elpsycongroo\.tk\/r\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/bangaqua\.com\/reader\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https?:\/\/damn-feels\.com\/reader\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/atelierdunoir\.org\/reader\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/reader\.holylolikingdom\.net\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^http:\/\/riceballicious\.info\/fs\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @include      /^https:\/\/mangadex\.com\/chapter\/[0-9]+(?:\/[0-9]+)?$/
// @include      /^https?:\/\/reader\.tukimoop\.pw\/read\/.*?\/[a-z]+\/[0-9]+\/[0-9]+(\/.*)?$/
// @updated      2018-01-25
// @version      1.9.17
// @downloadURL  https://trackr.moe/userscripts/manga-tracker.user.js
// @updateURL    https://trackr.moe/userscripts/manga-tracker.meta.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require      https://trackr.moe/userscripts/sites/_trackr.moe.3.js
// @require      https://trackr.moe/userscripts/sites/AtelierDuNoir.js
// @require      https://trackr.moe/userscripts/sites/Bangaqua.js
// @require      https://trackr.moe/userscripts/sites/Batoto.3.js
// @require      https://trackr.moe/userscripts/sites/CatScans.js
// @require      https://trackr.moe/userscripts/sites/ChampionScans.js
// @require      https://trackr.moe/userscripts/sites/ChibiManga.js
// @require      https://trackr.moe/userscripts/sites/DamnFeels.js
// @require      https://trackr.moe/userscripts/sites/DeathTollScans.js
// @require      https://trackr.moe/userscripts/sites/DemonicScans.js
// @require      https://trackr.moe/userscripts/sites/DKThiasScans.js
// @require      https://trackr.moe/userscripts/sites/DokiFansubs.js
// @require      https://trackr.moe/userscripts/sites/Dokusha.js
// @require      https://trackr.moe/userscripts/sites/DynastyScans.3.js
// @require      https://trackr.moe/userscripts/sites/EGScans.2.js
// @require      https://trackr.moe/userscripts/sites/ElPsyCongroo.js
// @require      https://trackr.moe/userscripts/sites/EvilFlowers.js
// @require      https://trackr.moe/userscripts/sites/FallenAngelsScans.js
// @require      https://trackr.moe/userscripts/sites/ForgottenScans.js
// @require      https://trackr.moe/userscripts/sites/GameOfScanlation.2.js
// @require      https://trackr.moe/userscripts/sites/HatigarmScans.js
// @require      https://trackr.moe/userscripts/sites/HelveticaScans.js
// @require      https://trackr.moe/userscripts/sites/HotChocolateScans.js
// @require      https://trackr.moe/userscripts/sites/JaiminisBox.js
// @require      https://trackr.moe/userscripts/sites/KireiCake.js
// @require      https://trackr.moe/userscripts/sites/KissManga.2.js
// @require      https://trackr.moe/userscripts/sites/LHTranslation.2.js
// @require      https://trackr.moe/userscripts/sites/Lolitannia.js
// @require      https://trackr.moe/userscripts/sites/LOLScans.js
// @require      https://trackr.moe/userscripts/sites/MangaCow.2.js
// @require      https://trackr.moe/userscripts/sites/MangaDex.6.js
// @require      https://trackr.moe/userscripts/sites/MangaFox.2.js
// @require      https://trackr.moe/userscripts/sites/MangaHere.3.js
// @require      https://trackr.moe/userscripts/sites/MangaichiScans.js
// @require      https://trackr.moe/userscripts/sites/MangaKakalot.2.js
// @require      https://trackr.moe/userscripts/sites/MangaPanda.2.js
// @require      https://trackr.moe/userscripts/sites/MangaRock.2.js
// @require      https://trackr.moe/userscripts/sites/MangaStream.2.js
// @require      https://trackr.moe/userscripts/sites/MangaTopia.js
// @require      https://trackr.moe/userscripts/sites/Mangazuki.js
// @require      https://trackr.moe/userscripts/sites/MerakiScans.2.js
// @require      https://trackr.moe/userscripts/sites/OneTimeScans.js
// @require      https://trackr.moe/userscripts/sites/PhoenixSerenade.js
// @require      https://trackr.moe/userscripts/sites/PsychoPlay.2.js
// @require      https://trackr.moe/userscripts/sites/PureMashiroScans.js
// @require      https://trackr.moe/userscripts/sites/RavensScans.js
// @require      https://trackr.moe/userscripts/sites/ReadMangaToday.2.js
// @require      https://trackr.moe/userscripts/sites/Riceballicious.js
// @require      https://trackr.moe/userscripts/sites/S2Scans.js
// @require      https://trackr.moe/userscripts/sites/SaikoScans.js
// @require      https://trackr.moe/userscripts/sites/SeaOtterScans.js
// @require      https://trackr.moe/userscripts/sites/SenseScans.js
// @require      https://trackr.moe/userscripts/sites/ShoujoHearts.js
// @require      https://trackr.moe/userscripts/sites/ShoujoSense.js
// @require      https://trackr.moe/userscripts/sites/TukiScans.1.js
// @require      https://trackr.moe/userscripts/sites/TwistedHelScans.js
// @require      https://trackr.moe/userscripts/sites/VortexScans.js
// @require      https://trackr.moe/userscripts/sites/WebToons.2.js
// @require      https://trackr.moe/userscripts/sites/WhiteCloudPavillion.2.js
// @require      https://trackr.moe/userscripts/sites/WhiteoutScans.js
// @require      https://trackr.moe/userscripts/sites/WorldThree.js
// @require      https://trackr.moe/userscripts/sites/YummyGummyScans.js
// @resource     fontAwesome   https://use.fontawesome.com/9533173d07.css
// @resource     userscriptCSS https://trackr.moe/userscripts/assets/main.5.css
// @resource     reload        https://trackr.moe/userscripts/reload.png
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        GM.getResourceUrl
// @grant        GM_getValue
// @grant        GM.getValue
// @grant        GM_setValue
// @grant        GM.setValue
// @grant        GM_addValueChangeListener
// @grant        GM.addValueChangeListener
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @noframes
// @connect      trackr.moe
// @connect      myanimelist.net
// @connect      m.mangafox.me
// @connect      m.mangafox.la
// @connect      m.mangahere.co
// @connect      m.mangahere.cc
// @run-at       document-start
// ==/UserScript==
/** jshint asi=false, bitwise=true, boss=false, browser=true, browserify=false, camelcase=false, couch=false, curly=true, debug=false, devel=true, dojo=false, elision=false, enforceall=false, eqeqeq=true, eqnull=false, es3=false, es5=false, esnext=false, esversion=6, evil=false, expr=false, forin=true, freeze=false, funcscope=false, futurehostile=false, gcl=true, globalstrict=false, immed=false, iterator=false, jasmine=false, jquery=true, lastsemic=false, latedef=false, laxbreak=false, laxcomma=false, loopfunc=false, maxerr=50, mocha=false, module=true, mootools=false, moz=false, multistr=false, newcap=false, noarg=true, nocomma=false, node=false, noempty=false, nomen=false, nonbsp=false, nonew=true, nonstandard=false, notypeof=false, noyield=false, onevar=false, passfail=false, phantom=false, plusplus=false, proto=false, prototypejs=false, qunit=false, quotmark=single, rhino=false, scripturl=false, shadow=false, shelljs=false, singleGroups=false, smarttabs=true, strict=true, sub=false, supernew=false, trailing=true, typed=false, undef=true, unused=true, validthis=false, varstmt=true, white=true, withstmt=false, worker=false, wsh=false, yui=false **/
/* global $, jQuery, GM_addStyle, GM_getResourceUrl, GM_getValue, GM_setValue, GM.xmlHttpRequest, mal_sync, GM_addValueChangeListener, unsafeWindow */
'use strict';

const debug = false; //TODO: Move to a userscript option.

// Testing grounds for sites! Use this to test new sites, as well updates for existing sites. This will overwrite required files.
(function(sites) {
	//sites['example.com'] = {};
})(window.trackerSites = (window.trackerSites || {}));


/* * * * * * * * * * Site Functions * * * * * * * * * */
function main() {
	if(!$.isEmptyObject(config) || hostname === 'trackr.moe') {
		//Config exists OR site is trackr.moe.
		if(main_site === 'https://dev.trackr.moe' && hostname !== 'trackr.moe') { config['api-key'] = config['api-key-dev']; } //Use dev API-key if using dev site
		if(!config.options) { config.options = {}; } //We can't use the 'in' operator on this if options doesn't exist.

		//NOTE: Although we load the userscript at document-start, we can't actually start poking the DOM of "most" sites until it's actually ready.
		if(window.sites[hostname]) {
			$(function () {
				window.sites[hostname].init();
			});
		} else {
			console.error(`Hostname doesn't exist in sites object? | '${hostname}'`);
		}
	} else {
		alert('Tracker isn\'t setup! Go to trackr.moe/user/options to set things up.');
	}
}

/**
 * Base container model for relevant functions and variables.
 * @namespace
 */
const base_site = {
	/**
	 * This is the first thing that runs, and also calls also all relevant functions.
	 * This should never be overridden (with the exception of trackr.moe). Use other methods instead!
	 *
	 * @function
	 * @name base_site.init
	 * @alias sites.*.init
	 */
	init : function() {
		let _this = this;

		addStyleFromResource('fontAwesome');

		this.preInit(function() {
			_this.setObjVars();
			_this.page_count = parseInt(_this.page_count); //FIXME: Is there a better place to put this?

			_this.stylize();

			_this.setupTopBar(function() {
				//We should only load the viewer if we've been successful with loading the topbar.

				/** @namespace config.options.disable_viewer */
				if(config.options.disable_viewer) { return; }
				_this.setupViewer();
			});
		});
	},

	/**
	 * This is called AFTER init, but before we do everything else.
	 * It is often used to redirect to new domain URLs, or do additional waiting/checks.
	 *
	 * @function
	 * @name base_site.preInit
	 * @alias sites.*.preInit
	 *
	 * @param {function} callback
	 */
	preInit : function(callback) { callback(); }, //callback must always be called

	/**
	 * Used to set variables used by various other functions.
	 *
	 * @function
	 * @name  base_site.setObjVars
	 * @alias sites.*.setObjVars
	 *
	 * @abstract
	 */
	setObjVars : function() {},

	/**
	 * Used to do add/remove additional styles on the page.
	 * This is usually just removing ads and other various banners.
	 * preSetupTopBar/preSetupViewer handle removing the default site viewer.
	 *
	 * @function
	 * @name  base_site.stylize
	 * @alias sites.*.stylize
	 *
	 * @abstract
	 */
	stylize : function() {},

	/**
	 * Used to do things prior to adding our own topbar.
	 * This is usually getting data for our topbar (either via current, or via AJAX).
	 *
	 * @function
	 * @name  base_site.preSetupTopBar
	 * @alias sites.*.preSetupTopBar
	 *
	 * @param {function} callback
	 */
	preSetupTopBar  : function(callback) { callback(); }, //callback must always be called

	/**
	 * @callback postSetupTopBarCallback
	 * @param {bool} [useCustomHeader]
	 * @param {bool} [useCustomImageList]
	 */

	/**
	 * Used to do things after setting up the topbar. Usually used to remove old topbars if they exist.
	 *
	 * @function
	 * @name  base_site.postSetupTopBar
	 * @alias sites.*.postSetupTopBar
	 *
	 * @param {postSetupTopBarCallback} callback
	 */
	postSetupTopBar : function(callback) { callback(); }, //callback must always be called

	/**
	 * @callback preSetupViewerCallback
	 * @param {bool} [useCustomHeader]
	 * @param {bool} [useCustomImageList]
	 */

	/**
	 * Used to remove the old viewer, get pages (if we haven't already), and get ready to setup our own viewer.
	 *
	 * @function
	 * @name  base_site.preSetupViewer
	 * @alias sites.*.preSetupViewer
	 *
	 * @param {preSetupViewerCallback} callback
	 */
	preSetupViewer  : function(callback) { callback(); }, //callback must always be called

	/**
	 * This is currently just a stub and isn't used yet!
	 *
	 * @function
	 * @todo Add definition for postSetupViewer
	 * @alias sites.*.postSetupViewer
	 * @name  base_site.postSetupViewer
	 *
	 * @param {jQuery=} topbar
	 */
	postSetupViewer : function(topbar) {}, // jshint ignore:line

	//Fixed Functions

	/**
	 * Used to setup the topbar. This calls preSetupTopbar > this > postSetupBoar.
	 * This uses these variables: chapterList, chapterListCurrent, viewerTitle, searchURLFormat, page_count, pagesLoaded (this is changed by calling updatePagesLoaded)
	 * * chapterList is a key/value array (URL:CHAPTERNAME) & chapterListCurrent is a URL for the current chapter (which is formatted to work with chapterList). Both of these are used to generate
	 * * viewerTitle contains the title of the series. This shows on hover of the chapter list.
	 * * page_count contains the total number of pages. When using the default AJAX method this is used to make sure we check all the pages correctly.
	 * * (optional) searchURLFormat is a URL used for searching (Using {%SEARCH%} for search input). Will only show search icon if set.
	 *
	 * @function
	 * @alias sites.*.setupTopBar
	 * @name base_site.setupTopBar
	 *
	 * @abstract
	 * @final
	 */
	setupTopBar : function(callback) {
		let _this = this;

		this.preSetupTopBar(function() {
			addStyleFromResource('userscriptCSS');

			let previous = (Object.keys(_this.chapterList).indexOf(_this.chapterListCurrent) > 0 ? $('<a/>', {class: 'buttonTracker', href: Object.keys(_this.chapterList)[Object.keys(_this.chapterList).indexOf(_this.chapterListCurrent) - 1], text: 'Previous'}) : '');
			let next     = (Object.keys(_this.chapterList).indexOf(_this.chapterListCurrent) < (Object.keys(_this.chapterList).length - 1) ? $('<a/>', {class: 'buttonTracker', href: Object.keys(_this.chapterList)[Object.keys(_this.chapterList).indexOf(_this.chapterListCurrent) + 1], text: 'Next'}) : '');
			let options  = $.map(_this.chapterList, function(k, v) {let o = $('<option/>', {value: v, text: k}); if(_this.chapterListCurrent === v) {o.attr('selected', '1');} return o.get();});

			let topbar = $('<div/>', {id: 'TrackerBar'}).append(
				$('<div/>', {id: 'TrackerBarIn'}).append(
					$('<a/>', {href: main_site, target: '_blank'}).append(
						$('<i/>', {class: 'fa fa-home', 'aria-hidden': 'true'}))).append(
					$('<div/>', {id: 'TrackerBarLayout', style: 'display: inline-block'}).append(
						previous
					).append(
						$('<select/>', {style: 'float: none; max-width: 500px', title: _this.viewerTitle}).append(
							options
						)
					).append(
						next
					).append(
						$('<a/>', {href: main_site + '/report_issue?url='+encodeURIComponent(location.href), target: '_blank'}).append(
							$('<i/>', {id: 'report-issue', class: 'fa fa-bug', 'aria-hidden': 'true', title: 'Report an Issue'}))
					).append(
						_this.searchURLFormat !== '' ? $('<i/>', {id: 'trackerSearch', class: 'fa fa-search', 'aria-hidden': 'true', title: 'Search'}) : ''
					).append(
						$('<i/>', {id: 'toggleWebtoon', class: 'fa fa-file-image-o', 'aria-hidden': 'true', title: 'Toggle Webtoon Mode'})
					).append(
						$('<i/>', {id: 'favouriteChapter', class: 'fa fa-star', 'aria-hidden': 'true', title: 'Click to favourite this chapter (Requires series to be tracked first!)'})
					).append(
						$('<i/>', {id: 'trackCurrentChapter',  class: 'fa fa-book', 'aria-hidden': 'true', style: 'color: maroon', title: 'Mark this chapter as latest chapter read'})
					).append(
						$('<span/>', {id: 'TrackerStatus'})
					)
				)
			).append(
				$('<br/>')
			).append(
				(_this.page_count ? $('<div/>', {id: 'TrackerBarPages', text: `Pages loaded: ${_this.pagesLoaded}/${_this.page_count}`, style: 'display: none'}) : '')
			);

			$(topbar).appendTo('body');

			//Setup select chapter change event
			$(topbar).on('change', 'select', function() {
				location.href = this.value;
				if(this.value.indexOf('#') !== -1) {
					window.location.reload();
				}
			});

			//Setup prev/next events
			$(topbar).on('click', 'a.buttonTracker', function(e) {
				e.preventDefault();

				location.href = $(this).attr('href');
				if($(this).attr('href').indexOf('#') !== -1) {
					window.location.reload();
				}
			});
			//Setup tracking event.
			$(topbar).on('click', '#trackCurrentChapter', function(e) {
				e.preventDefault();

				_this.trackChapter(true);
				// $(this).css('color', '#00b232');
			});
			//Setup search.
			$(topbar).on('click', '#trackerSearch', function(e) {
				e.preventDefault();

				_this.search();
			});
			//Setup favourite event.
			$(topbar).on('click', '#toggleWebtoon', function(e) {
				e.preventDefault();

				$('#viewer').toggleClass('webtoon');
			});
			//Setup favourite event.
			$(topbar).on('click', '#favouriteChapter', function(e) {
				e.preventDefault();

				_this.favouriteChapter();
			});
			//Setup reload page failed pages event.
			$(topbar).on('click', '#reloadPages', function(e) {
				e.preventDefault();

				_this.reloadPages();
			});

			_this.postSetupTopBar(callback);
		});
	},

	/**
	 * Used to track the current chapter.
	 * This uses these variables: site, title, chapter.
	 *
	 * @function
	 * @name base_site.trackChapter
	 * @alias sites.*.trackChapter
	 *
	 * @param {bool} askForConfirmation This is only false if "Auto track series on page load" is enabled on page load.
	 *
	 * @final
	 */
	trackChapter : function(askForConfirmation) {
		let _this = this;
		askForConfirmation = (typeof askForConfirmation !== 'undefined' ? askForConfirmation : false);

		if(config['api-key']) {
			if(this.attemptingTrack === false) {
				if(!askForConfirmation || askForConfirmation && confirm('This action will reset your reading state for this manga and this chapter will be considered as the latest you have read.\nDo you confirm this action?')) {
					this.attemptingTrack = true;

					let params = {
						'api-key' : config['api-key'],
						'manga'   : {
							'site'    : this.site,

							//Both title and chapter can contain anything, as parsing is done on the backend.
							'title'   : this.title,
							'chapter' : this.chapter
						}
					};

					if(!hasEmptyValues(params.manga)) {
						let status = $('#TrackerStatus');

						GM.xmlHttpRequest({
							url     : main_site + '/ajax/userscript/update',
							method  : 'POST',
							data    : $.param(params),
							headers: {
								'Content-Type' : 'application/x-www-form-urlencoded'
							},
							onload  : function(e) {
								_this.attemptingTrack = false;

								if(e.status === 200) {
									let data = e.responseText,
									    json = JSON.parse(data);

									/** @param {{mal_sync:string, mal_id:int, chapter:string}} json **/

									GM.setValue('lastUpdatedSeries', JSON.stringify(Object.assign(params, json, {url: location.href, chapterNumber: (_this.chapterNumber !== '' ? _this.chapterNumber : _this.chapter)})));

									//TODO: We should really output this somewhere other than the topbar..
									status.text('Attempting update...');

									switch(json.mal_sync) {
										case 'disabled':
											status.text('Updated');
											break;

										case 'csrf':
											if(json.mal_id) {
												if(json.mal_id !== 'none') {
													status.text('Updated (Found MAL ID, attempting update...)');
													_this.syncMALCSRF(json.mal_id, json.chapter);
												} else {
													status.text('Updated (Not on MAL)');
												}
											} else {
												status.text('Updated (No MAL ID set)');
											}

											break;

										case 'api':
											//TODO: Not implemented yet.
											break;

										default:
											break;
									}
								} else {
									switch(e.status) {
										case 400:
											alert('ERROR: ' + e.statusText);
											break;
										case 429:
											alert('ERROR: Rate limit reached.');
											break;
										default:
											alert('ERROR: Something went wrong!\n'+e.statusText);
											break;
									}
								}
							},
							onerror : function(e) {
								switch(e.status) {
									case 400:
										alert('ERROR: ' + e.statusText);
										break;
									case 429:
										alert('ERROR: Rate limit reached.');
										break;
									default:
										alert('ERROR: Something went wrong!\n'+e.statusText);
										break;
								}
							}
						});
					} else {
						alert('Something went wrong when attempting to track');
						//TODO: Throw bug report
					}
				}
			} else {
				alert('Tracker is already attempting to track..');
			}
		} else {
			alert('Tracker isn\'t setup! Go to trackr.moe/user/options to set things up.');
		}
	},

	/**
	 * Used to update MAL via CSRF. Only runs if the MAL CSRF option is selected.
	 * This grabs the CSRF token required to update MAL. If successful it calls syncMALCSRF_continued
	 *
	 * @function
	 * @alias sites.*.syncMALCSRF
	 * @name base_site.syncMALCSRF
	 *
	 * @param {int}    malID
	 * @param {string} chapter
	 *
	 * @final
	 */
	syncMALCSRF : function(malID, chapter) {
		let _this = this;
		GM.xmlHttpRequest({
			method: 'GET',
			url: 'https://myanimelist.net/panel.php?go=export',
			onload: function(response) {
				if(/https:\/\/myanimelist.net\/logout.php/.exec(response.responseText)) {
					//user is logged in, export manga then sync
					let csrfToken = /<meta name='csrf_token' content='([A-Za-z0-9]+)'>/.exec(response.responseText)[1];

					_this.syncMALCSRF_continued(malID, chapter, csrfToken);
				} else {
					//user is not logged in, throw error
					$('#TrackerStatus').text('Updated (MAL Sync failed, are you logged in?)');
				}
			}
		});
	},

	/**
	 * Used to update MAL. Is called from syncMALCSRF after successfully grabbing CSRF token.
	 *
	 * @function
	 * @alias sites.*.syncMALCSRF_continued
	 * @name base_site.syncMALCSRF_continued
	 *
	 * @param {int}    malID
	 * @param {string} chapter
	 * @param {string} csrfToken
	 *
	 * @final
	 */
	syncMALCSRF_continued : function(malID, chapter, csrfToken) {
		let chapterArr = chapter.match(/^(?:(?:v(?:[0-9]+|TBD|TBA|NA|LMT))\/)?c([0-9]+)(?:\.[0-9]+)?$/) || [];

		if(chapterArr.length > 0) {
			let malIDI = parseInt(malID),
			    chapterN = parseInt(chapterArr[1]);

			let json = {
				'manga_id'          : malIDI,
				'status'            : 1, //force reading list
				'num_read_chapters' : chapterN,
				'csrf_token'        : csrfToken
			};
			if(chapterN < 1000) {
				let status = $('#TrackerStatus');

				GM.xmlHttpRequest({
					method: 'POST',
					url: 'https://myanimelist.net/ownlist/manga/edit.json',
					data: JSON.stringify(json),
					onload: function(response) {
						if(response.responseText !== '{"errors":[{"message":"failed to edit"}]}') {
							status.html(`Updated & <a href="https://myanimelist.net/manga/${malIDI}" class="mal-link">MAL Synced</a> (c${chapterN})`);
						} else {
							status.text('Updated (MAL missing from list, attempting to add...)');
							GM.xmlHttpRequest({
								method: 'POST',
								url: 'https://myanimelist.net/ownlist/manga/add.json',
								data: JSON.stringify(json),
								onload: function(response) {
									if(response.responseText !== '{"errors":[{"message":"The manga is already in your list."}]}') {
										status.html(`Updated & <a href="https://myanimelist.net/manga/${malIDI}" class="mal-link">MAL Synced</a> (c${chapterN})`);
									} else {
										status.text('Updated (Adding to MAL failed?)');
									}
								},
								onerror: function() {
									status.text('Updated (MAL Sync failed)');
								}
							});
						}
					},
					onerror: function() {
						status.text('Updated (MAL Sync failed)');
					}
				});
			} else {
				$('#TrackerStatus').text('Updated (Unable to MAL Sync due to chapter format)');
			}
		} else {
			$('#TrackerStatus').text('Updated (Unable to MAL Sync due to chapter format)');
		}
	},

	/**
	 * Used to setup the viewer.
	 * Calls preSetupViewer > setupViewer > postSetupViewer.
	 *
	 * @function
	 * @alias sites.*.setupViewer
	 * @name base_site.setupViewer
	 *
	 * @final
	 */
	setupViewer : function() {
		let _this = this;

		//FIXME: VIEWER: Is it possible to make sure the pages load in order without using async: false?
		//FIXME: VIEWER: Is it possible to set the size of the image element before it is loaded (to avoid pop-in)?
		//FIXME: Somehow handle the viewer header code here?

		this.preSetupViewer(function(useCustomHeader, useCustomImageList) {
			useCustomHeader    = (typeof useCustomHeader !== 'undefined' ? useCustomHeader : false);
			useCustomImageList = (typeof useCustomImageList !== 'undefined' ? useCustomImageList : false);

			let viewer = $('#viewer');
			if(_this.isWebtoon) {
				viewer.addClass('webtoon');
			}

			//Setup viewer header if enabled
			if(!useCustomHeader) {
				viewer.append(
					$('<div/>', {id: 'viewer_header'}).append(
						$('<a/>', {href: _this.chapter_url, text: _this.viewerChapterName})).append(
						'  ----  ').append(
						$('<a/>', {href: _this.title_url, text: _this.viewerTitle})
					)
				);
			}

			let TrackerBarPages = $('#TrackerBarPages');
			//Add page load counter IF it hasn't already been added (due to page_count being set lately) and if using our viewer
			if(!TrackerBarPages.length && _this.page_count) {
				TrackerBarPages = $('<div/>', {id: 'TrackerBarPages', text: `Pages loaded: ${_this.pagesLoaded}/${_this.page_count}`, style: 'display: none'}).appendTo('#TrackerBar');
			}
			TrackerBarPages.show('slow');

			//Generate the viewer using a loop & AJAX.
			$('<div/>', {class: 'read_img', style: 'display: none'}).appendTo(viewer.get()); //Add a dummy element

			let pagePromises = [];
			for(let pageN=1; pageN<=_this.page_count; pageN++) {
				pagePromises.push(new Promise((resolve, reject) => { // jshint ignore:line
					$('<div/>', {id: 'trackr-page-'+pageN, class: 'read_img'}).insertAfter(viewer.find('> .read_img:last'));

					if(!useCustomImageList) {
						let pageDelay = _this.delay + (_this.delay !== 0 ? (pageN * _this.delay) : 0);
						setTimeout(addToContainer, pageDelay, pageN, resolve, reject);
					} else {
						//Although we don't actually need a delay here, it would probably be good not to load every single page at once if possible
						let pageDelay = 100 + (pageN * 100);
						setTimeout(addToContainerCustom, pageDelay, pageN, resolve, reject);
					}
				}));
			}
			Promise.all(pagePromises).then(() => {
				console.log('trackr - All promises resolved.');

				//Auto-track chapter if enabled.
				/** @namespace config.auto_track */
				if(config.options.auto_track) {
					console.log('trackr - Auto-tracking chapter');
					_this.trackChapter();
				}

				//Setup zoom event
				if(viewer.length) {
					let changeZoom = function(action) {
						let images = $('#viewer').find('img'),
						    newZoom = images.get(0).clientWidth;

						switch(action) {
							case '+':
								//increase zoom
								images.css({'width': newZoom + 50});

								break;

							case '-':
								//decrease zoom
								images.css({'width': newZoom - 50});
								break;

							case '=':
								//reset
								images.css({'width': 'auto'});
								break;

							default:
								//do nothing
								break;
						}
					};
					$(document).keydown(function(event){
						changeZoom(event.key);
					});
				}

				_this.postSetupViewer();
			});

			function addToContainer(pageN, promiseResolve, promiseReject) {
				let url = _this.viewerChapterURLFormat.replace('%pageN%', pageN.toString());

				//FIXME: (TEMP HACK) Due to MH being weird with https redirects, we need to do this.
				//       When I get the time we should move this to the parent object so we can override it.
				if(url.includes('mangahere.cc', 0)) {
					url = url.replace('1.html', '');
				}

				$.ajax({
					       url    : url,
					       type   : 'GET',
					       page   : pageN,
					       // async: useASync,
					       success: function (data) {
						       if(data.length > 0) {
							       data = data.replace(_this.viewerRegex, '$1');
							       data = data.replace(' src=', ' data-trackr-src='); //This prevents jQuery from preloading images, which can cause issues.

							       let original_image = $(data).find('img:first').addBack('img:first');
							       _this.setupViewerContainer($(original_image).attr('data-trackr-src'), this.page);
						       } else {
							       _this.setupViewerContainerError(url, this.page, false);
						       }
						       promiseResolve();
					       },
					       error: function () {
						       _this.setupViewerContainerError(url, this.page, false);
						       promiseResolve(); // we probably should use promiseReject() here
					       }
				       });
			}
			function addToContainerCustom(pageN, promiseResolve, promiseReject) {
				_this.setupViewerContainer(_this.viewerCustomImageList[pageN-1], pageN);
				promiseResolve();
			}
		});
	},

	/**
	 * Used to setup the page container used by the viewer.
	 *
	 * @function
	 * @alias sites.*.setupViewerContainer
	 * @name base_site.setupViewerContainer
	 *
	 * @param {string} imgURL
	 * @param {int}    pageN
	 *
	 * @final
	 */
	setupViewerContainer : function(imgURL, pageN) {
		let _this = this;

		let image_container = $('<div/>', {id: `trackr-page-${pageN}`, class: 'read_img'}).append(
			//We want to completely recreate the image element to remove all additional attributes
			$('<img/>', {src: imgURL})
				.on('load', function() {
					_this.updatePagesLoaded(true);
				})
				.on('error', function() {
					_this.setupViewerContainerError(imgURL, pageN, true);
				})
		).append(
			//Add page number
			$('<div/>', {class: 'pageNumber'}).append(
				$('<div/>', {class: 'number', text: `${pageN} / ${_this.page_count}`}))
		);

		//Replace the placeholder image_container with the real one
		$(`#trackr-page-${pageN}`).replaceWith(image_container);
	},

	/**
	 * Used to setup the page container for errored pages.
	 *
	 * @function
	 * @alias sites.*.setupViewerContainerError
	 * @name base_site.setupViewerContainerError
	 *
	 * @param {string}  pageURL
	 * @param {int}     pageN
	 * @param {boolean} imgLoadFailed
	 *
	 * @final
	 */
	setupViewerContainerError : async function(pageURL, pageN, imgLoadFailed) {
		let _this = this;
		_this.updatePagesLoaded(false);

		let reloadUrl = await GM.getResourceUrl('reload');

		console.error('setupViewerContainerError called');
		let image_container = $('<div/>', {class: 'read_img', id: 'trackr-page-'+pageN}).append(
			$('<img/>', {style: 'cursor: pointer', src: reloadUrl}).click(function() {
			if(!imgLoadFailed) {
				//Page load failed
				$.ajax({
					       url    : pageURL,
					       type   : 'GET',
					       page   : pageN,
					       // async: useASync,
					       success: function (data) {
						       let original_image = $(data.replace(_this.viewerRegex, '$1')).find('img:first').addBack('img:first');
						       _this.setupViewerContainer($(original_image).attr('src'), this.page);
					       },
					       error: function () {
						       alert('Failed to load image again. Something may be wrong with the site.');
						       _this.setupViewerContainerError(pageURL, this.page, false);
					       }
				       });
			} else {
				//Image load failed
				_this.setupViewerContainer(`${pageURL}?` + new Date().getTime(), pageN);
			}
		})
	).append(
			//Add page number
			$('<div/>', {class: 'pageNumber'}).append(
				$('<div/>', {class: 'number', text: `${pageN} / ${_this.page_count}`}))
		);

		//Replace the placeholder image_container with the real one
		$('#trackr-page-'+pageN).replaceWith(image_container);
	},

	/**
	 * Used to update the page load counter.
	 *
	 * @function
	 * @alias sites.*.updatePagesLoaded
	 * @name base_site.updatePagesLoaded
	 *
	 * @param {boolean} loaded
	 *
	 * @final
	 */
	updatePagesLoaded : function(loaded) {
		let _this = this;
		this.pagesLoadedAttempts += 1;

		let ele = $('#TrackerBarPages');

		if(loaded) {
			this.pagesLoaded += 1;
			ele.text(`Pages loaded: ${this.pagesLoaded}/${this.page_count}`);
		}

		if(this.pagesLoadedAttempts >= this.page_count) {
			//This is last page to load, check if everything loaded correctly.
			if(this.pagesLoaded >= this.page_count) {
				//Everything was loaded correctly, hide the page count div.
				//FIXME: This doesn't always hide correctly?

				setTimeout(function() {
					ele.html('&nbsp;').hide('slow');
				}, 1500);

				//Auto-scroll to page if URL is a specific page URL
				//FIXME: Is there a better place to put this?
				if(_this.currentPage > 0) {
					_this.gotoPage(_this.currentPage);
				}
			} else {
				ele
					.html('') //remove everything from existing container
					.append($('<span/>', {text: 'ERROR: '+(this.page_count - this.pagesLoaded)+' pages failed to load | '}))
					.append($('<a/>', {href: '#', id: 'reloadPages'}).append(
						$('<i/>', {class: 'fa fa-refresh', 'aria-hidden': 'true'})
					));
			}

			console.log('trackr - higher than pc: '+this.pagesLoadedAttempts);
		} else {
			console.log('trackr - lower than pc: '+this.pagesLoadedAttempts);
		}
	},

	/**
	 * Used to reload all errored pages.
	 *
	 * @function
	 * @alias sites.*.reloadPages
	 * @name base_site.reloadPages
	 *
	 * @final
	 */
	reloadPages : function() {
		let _this = this;

		$('#TrackerBarPages').html('Attempting to load pages...');
		//FIXME: This is a really lazy way of doing this...
		$('.read_img[id] img').each(function(i, v) {
			setTimeout(function() {
				$(v).click();
			}, _this.delay + (_this.delay !== 0 ? (i * _this.delay) : 0));
		});
	},

	/**
	 * Used to search the current site. Requires searchURLFormat to be set to show.
	 *
	 * @function
	 * @alias sites.*.search
	 * @name base_site.search
	 *
	 * @final
	 */
	search : function() {
		let original_search_string = prompt('Search: ');

		if(original_search_string !== null) {
			let encoded_search_string  = encodeURIComponent(original_search_string);

			location.href = this.searchURLFormat.replace('{%SEARCH%}', encoded_search_string);
		}
	},

	/**
	 * Used to favourite the current chapter.
	 *
	 * @function
	 * @alias sites.*.favouriteChapter
	 * @name base_site.favouriteChapter
	 *
	 * @final
	 */
	favouriteChapter : function() {
		if(config['api-key']) {
			let params = {
				'api-key' : config['api-key'],
				'manga'   : {
					'site'    : this.site,

					//Both title and chapter can contain anything, as parsing is done on the backend.
					'title'   : this.title,
					'chapter' : this.chapter
				}
			};

			GM.xmlHttpRequest({
				url     : main_site + '/ajax/userscript/favourite',
				method  : 'POST',
				data    : $.param(params),
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				onload  : function(e) {
					if(e.status === 200) {
						$('#TrackerStatus').text(e.statusText);
					} else {
						switch(e.status) {
							case 400:
								alert('ERROR: ' + e.statusText);
								break;
							case 429:
								alert('ERROR: Rate limit reached.');
								break;
							default:
								alert('ERROR: Something went wrong!\n'+e.statusText);
								break;
						}
					}
				},
				onerror : function(e) {
					switch(e.status) {
						case 400:
							alert('ERROR: ' + e.statusText);
							break;
						case 429:
							alert('ERROR: Rate limit reached.');
							break;
						default:
							alert('ERROR: Something went wrong!\n'+e.statusText);
							break;
					}
				}
			});
		} else {
			alert('Tracker isn\'t setup! Go to trackr.moe/user/options to set things up.');
		}
	},

	/**
	 * Used to scroll to selected page.
	 *
	 * @function
	 * @alias sites.*.gotoPage
	 * @name base_site.gotoPage
	 *
	 * @final
	 */
	gotoPage : function(pageN) {
		console.log(`trackr - Scrolling to page "${pageN}"`);
		if(pageN > 1) {
			let page_ele = $(`#trackr-page-${pageN}`);
			if(page_ele.length) {
				$('html, body').animate({
					      scrollTop: page_ele.offset().top
				      }, 2000);
			}
		}
	},

	/**
	 * Used to setup (most) sites that use FoolSlide.
	 * Will most likely not work on sites that use very old versions of FoolSlide.
	 *
	 * @function
	 * @alias sites.*.setupFoolSlide
	 * @name base_site.setupFoolSlide
	 *
	 * @final
	 */
	setupFoolSlide : function() {
		this.segments = this.segments.slice(this.segments.indexOf('read') + 1);

		this.setObjVars = function() {
			this.title   = this.segments[0];
			this.chapter = this.segments[1] + '/' + this.segments[2] + '/' + this.segments[3] + (this.segments[4] && this.segments[4] !== 'page' ? '/' + this.segments[4] : '');

			let chapterArr     = this.chapter.split('/');
			this.chapterNumber = (chapterArr[1] !== '0' ? `v${chapterArr[1]}/` : '') + `c${chapterArr[2]}` + (chapterArr[3] ? `.${chapterArr[3]}` : '');

			//($chapter_parts[1] !== '0' ? "v{$chapter_parts[1]}/" : '') . "c{$chapter_parts[2]}" . (isset($chapter_parts[3]) ? ".{$chapter_parts[3]}" : '')/*)*/
			this.title_url   = this.foolSlideBaseURL+'/'+this.title;
			this.chapter_url = this.foolSlideBaseURL+'/read/'+this.title+'/'+this.chapter;

			//FIXME: The chapterList isn't properly ordered for series that have chapters in and outside volumes.
			//       SEE: - https://reader.seaotterscans.com/series/sss/
			this.chapterList        = generateChapterList($('.topbar_left > .tbtitle:eq(2) > ul > li > a').reverseObj(), 'href');
			this.chapterListCurrent = this.chapter_url+'/';

			this.viewerTitle = $('.topbar_left > .dropdown_parent > .text a').text();

			if(this.viewerCustomImageList.length === 0) {
				//FoolSlide has the list of images stored in an html tag we can use instead of having to AJAX each page.
				this.viewerCustomImageList = ($('#content, .isreaderc').find('> script:first, + script').first().html().match(/"url"\s*:\s*"(https?:\\\/\\\/[^"]+)"/g) || []).filter(function(value, index, self) {
					return self.indexOf(value) === index;
				}).map(function(e) {
					let val = e.replace(/"url"\s*:\s*"(https?:\\\/\\\/[^"]+)"/, '$1');
					return JSON.parse('"' + val.replace(/"/g, '\\"') + '"');
				});
			}
			this.page_count = this.viewerCustomImageList.length;

			let sPage = this.segments.indexOf('page');
			if((sPage !== -1) && this.segments[sPage + 1]) {
				this.currentPage = parseInt(this.segments[sPage + 1]);
			}

			this.isWebtoon = ($('#page').find('a img').length > 1);
		};

		this.postSetupTopBar = function(callback) {
			$('.topbar_left > .tbtitle:eq(2)').remove();
			$('.topbar_right').remove();
			$('#bottombar').remove();

			callback();
		};

		this.preSetupViewer = function(callback) {
			$('#page').replaceWith($('<div/>', {id: 'viewer'})); //Set base viewer div
			callback(true, true);
		};
	},

	/**
	 * Used to setup (most) sites that use My Manga Reader CMS.
	 *
	 * @function
	 * @alias sites.*.setupMyMangaReaderCMS
	 * @name base_site.setupMyMangaReaderCMS
	 *
	 * @final
	 */
	setupMyMangaReaderCMS : function() {
		this.segments = this.segments.slice(this.segments.lastIndexOf('manga') + 1);

		this.setObjVars = function() {
			this.title         = this.segments[0];
			this.chapter       = this.segments[1];

			this.title_url   = this.myMangaReaderCMSBaseURL+'/manga/'+this.title+'/';
			this.chapter_url = this.title_url + this.chapter;

			this.chapterList        = generateChapterList($('#chapter-list').find('> ul > li > a').reverseObj(), 'href');
			this.chapterListCurrent = this.chapter_url;

			this.viewerTitle            = $('ul[class="nav navbar-nav"] > li:first > a').text().slice(0,-6);
			this.viewerCustomImageList = $('#all').find('> img').map(function(i, e) {
				return $(e).attr('data-src');
			});
			this.page_count = this.viewerCustomImageList.length;
		};

		this.postSetupTopBar = function(callback) {
			let viewer = $('.viewer-cnt');

			//Remove extra unneeded elements.
			viewer.prevAll().remove();
			viewer.nextAll().remove();

			callback();
		};

		this.preSetupViewer = function(callback) {
			$('.viewer-cnt').replaceWith($('<div/>', {id: 'viewer'})); //Set base viewer div
			callback(true, true);
		};
	},

	//Variables

	/**
	 * Array of strings based on URL, separated by '/' limiter.
	 * @type {Array}
	 */
	segments : window.location.pathname.split('/'),

	/**
	 * Object of URL parameters.
	 * @type {Object}
	 */
	parameters : window.location.search.substring(1) ? JSON.parse('{"' + window.location.search.substring(1).replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key === "" ?  value : decodeURIComponent(value); }) : {},

	/**
	 * String containing protocol
	 * @type {string}
	 */
	https    : location.protocol.slice(0, -1),

	//Used for tracking.

	/**
	 * Name of site.
	 * @type {string}
	 */
	site    : location.hostname.replace(/^(?:dev|test)\./, ''),

	/**
	 * Title of chapter
	 * @type {String}
	 */
	title   : '',

	/**
	 * Chapter
	 * @type {String}
	 */
	chapter : '',

	/**
	 * Chapter number (Used when updating updating trackr.moe table on another window)
	 * @type {String}
	 */
	chapterNumber : '',

	//Used by everything for easy access

	/**
	 * URL of chapter
	 * @type {String}
	 */
	chapter_url : '',

	/**
	 * URL of title
	 * @type {String}
	 */
	title_url   : '',

	//Used for topbar.

	/**
	 * Current chapter in chapterList
	 * @type {String}
	 */
	chapterListCurrent : '',

	/**
	 * Container for list of chapters
	 * @type {Object}
	 */
	chapterList        : {},

	/**
	 * Initialization of number of pages
	 * @type {Number}
	 */
	page_count : 0,

	/**
	 * Marks if the viewer is a webtoon and handles it appropriately.
	 * @type {Boolean}
	 */
	isWebtoon : false,

	//Used for custom viewer header (if requested)

	/**
	 * Name of chapter for viewer.
	 * @type {String}
	 */
	viewerChapterName      : '',

	/**
	 * Title for viewer
	 * @type {String}
	 */
	viewerTitle            : '',

	/**
	 * Stores URL format for chapters.
	 * %pageN% is replaced by the page number on load.
	 * @type {String}
	 */
	viewerChapterURLFormat : '%pageN%',

	//Used for viewer AJAX (if used)

	/**
	 * Regex used to find tag
	 * First img tag MUST be the chapter page.
	 * @type {RegExp}
	 */
	viewerRegex            : /^$/,

	/**
	 * Image list that contains the list of images.
	 * This is is only used if useCustomImageList is true.
	 * @type {Array}
	 */
	viewerCustomImageList  : [],

	/**
	 * Delay each page load by x ms when not using custom image list
	 * @type {Number}
	 */
	delay: 0,

	//Used for search.

	/**
	 * URL string that allows for searches
	 * {%SEARCH%} is replaced with search string.
	 * @type {String}
	 */
	searchURLFormat : '',

	//Misc

	/**
	 * Checks if tracking is being attempted.
	 * This is only changed by trackChapter
	 * @type {Boolean}
	 */
	attemptingTrack     : false,

	/**
	 * Number of pages loaded.
	 * @type {Number}
	 */
	pagesLoaded         : 0,

	/**
	 * Number of times attempted to load the page.
	 * @type {Number}
	 */
	pagesLoadedAttempts : 0,

	/**
	 * Current page. Used to allow auto-scrolling to pages when directly linked to them.
	 * @type {Number}
	 */
	currentPage: 0,

	/**
	 * URL pointing to base FoolSlide location. Used by setupFoolSlide.
	 * Most of the time this is just location.origin, but sometimes it's also location.origin/foolslide and so on.
	 * @type {String}
	 */
	foolSlideBaseURL : /\/read\//.test(location.pathname) ? location.href.replace(/^(.*?)\/read\/.*$/, '$1') : location.origin,

	/**
	 * URL pointing to base myMangaReaderCMS location. Used by myMangaReaderCMS.
	 * @type {String}
	 */
	myMangaReaderCMSBaseURL : /\/manga\//.test(location.pathname) ? location.href.replace(/^(.*?)\/manga\/.*$/, '$1') : location.origin
};

/**
 * @typedef {Object} SiteObject Object containing all necessary variables for site.
 */

/**
 * [extendSite description]
 * @param  {SiteObject} o Object containing all necessary variables for site.
 * @return {Object}   Returns base_site extension of intended site.
 */
function extendSite(o) { return Object.assign({}, base_site, o); }

/**
 * Generates list of chapters
 * @param  {jQuery} target  Target jQuery object containing list of chapters.
 * @param  {string} attrURL The inner tag containing each chapter URL.
 * @return {Object}         Contains URL and names.
 */
window.generateChapterList = function(target, attrURL) {
	let chapterList = {};
	if(target instanceof jQuery) {
		$(target).each(function() {
			chapterList[$(this).attr(attrURL)] = $(this).text().trim();
		});
	} else {
		//TODO: Throw error
	}
	return chapterList;
};

function initializeSites() {
	let siteKeys = Object.keys(window.trackerSites);
	for (let i = 0, l = siteKeys.length; i < l; i++) {
		let domain = siteKeys[i],
		    siteC  = window.trackerSites[domain];
		if(!window.sites[domain]) { window.sites[domain] = extendSite(siteC); } //Don't add if in testing area.
	}
}

/* * * * * * * * * * General Functions * * * * * * * * * */

async function addStyleFromResource(resourceName) {
	//Userscript extensions don't seem to handle GM_getResourceUrl the same, so we need to fix that.
	let GMblob = await GM.getResourceUrl(resourceName);

	let cssEle = null;
	if(GMblob.substr(0, 5) === 'blob:') {
		//ViolentMonkey
		//This is kind of a hack, but these blob: URLs don't work with css containing // includes, which means we need to convert it to base64 somehow.

		let xhr = new XMLHttpRequest();
		xhr.open('GET', GMblob, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function(e) {
			if (this.status === 200) {
				let uInt8Array   = new Uint8Array(this.response),
				    i            = uInt8Array.length,
				    binaryString = new Array(i);

				while (i--) {
					binaryString[i] = String.fromCharCode(uInt8Array[i]);
				}

				let data   = binaryString.join('');
				cssEle = $('<style/>', {type: 'text/css', text: data});
				$('head').append(cssEle);
			}
		};
		xhr.send();
	} else {
		//Other
		cssEle = $('<style/>', {type: 'text/css', text: atob(GMblob.substr(21))});
		$('head').append(cssEle);
	}
}

window.getCookie = function(k){return(document.cookie.match(new RegExp('(^|; )'+k+'=([^;]*)'))||0)[2];};

function hasEmptyValues(o) {
	return Object.keys(o).some(function(x) {
		return o[x]===''||o[x]===null;  // or just "return o[x];" for falsy values
	});
}

jQuery.fn.reverseObj = function() {
	return $(this.get().reverse());
};

/* * * * * * * * * * Main Script * * * * * * * * * */
/* jshint ignore:start*/
(async function() {
	//FIXME: ViolentMonkey is require with @require scripts and needs us to use window to allow global variables...
	//       We should really look into tweaking/rewriting this stuff..
	window.main_site = 'https://trackr.moe';
	window.hostname  = location.hostname.replace(/^(?:dev)\./, '');
	let pConfig = await GM.getValue('config');
	window.config    = JSON.parse(pConfig || '{}');
	if(debug) { console.log(window.config); }

	window.sites = {};
	initializeSites();

	main();
})();
/* jshint ignore:end*/
