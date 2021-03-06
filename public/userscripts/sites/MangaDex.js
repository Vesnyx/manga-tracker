/* global window.generateChapterList */
(function(sites) {
	/**
	 * MangaDex
	 * @type {SiteObject}
	 */
	sites['mangadex.com'] = {
		setObjVars : function() {
			let _this = this;

			this.title       = $('span[title="Title"] + a').attr('href').replace(/.*?\/([0-9]+)$/, '$1');
			let chapter      = this.segments[2];
			this.chapter     = chapter + ':--:' + $('#jump_chapter').find('> option:selected').text().replace(/^(?:Vol(?:ume|\.) ([0-9\.]+)?.*?)?Ch(?:apter|\.) ([0-9\.v]+)[\s\S]*$/, 'v$1/c$2').replace(/^v\//, '');

			this.title_url   = `${this.https}://mangadex.com/manga/${this.title}`;
			this.chapter_url = `${this.https}://mangadex.com/chapter/${chapter}`;

			let tempList     = window.generateChapterList($('#jump_chapter').find('> option'), 'value');
			this.chapterList = Object.keys(tempList).reduce(function(result, key) {
				result[`${_this.https}://mangadex.com/chapter/${key}`] = tempList[key];
				return result;
			}, {});
			this.chapterListCurrent = this.chapter_url;

			let pageSegments = $('#current_page').attr('src').split('/'),
			    imageHash    = $('script:contains("dataurl =")').text().match(/dataurl = '(.*?)'/),
			    page_match   = $('script:contains("page_array =")').text().match(/page_array = (\[[\s\S]*?\])/),
			    server       = $('script:contains("server =")').text().match(/server = '(.*?)'/),
			    pages        = JSON.parse(page_match[1].replace(/'/g, '"').replace(',]', ']'));
			this.viewerCustomImageList = pages.map(function(filename, i) {
					if(server == '/data/')
						return `${_this.https}://mangadex.com/data/${imageHash[1]}/${filename}`;
					else
						return `${server[1]}${imageHash[1]}/${filename}`;
			});
			this.page_count = this.viewerCustomImageList.length;
			this.viewerChapterName      = this.chapter.split(':')[2];
			this.viewerTitle            = $('span[title="Title"] + a').text();
		},
		stylize : function() {
			$('.info-top-chapter, .option_wrap').remove();
		},
		preSetupViewer : function(callback) {
			let newViewer = $('<div/>', {id: 'viewer'});

			//Add a notice about adblock.
			newViewer.prepend(
				$('<p/>', {style: 'background: white; border: 2px solid black; white-space: pre-line;', text: ``+
					`There are a few manga, ones that were uploaded very early on, that were stored on the original server, but have since been removed. This means that those images will not load at all until someone reuploads them.
					If this still occurs with new chapters, try disabling the script and verifying the image will display, and if it does, please submit a report.`
				})
			);

			$('#content').replaceWith(newViewer); //Set base viewer div

			callback(false, true);
		}
	};
})(window.trackerSites = (window.trackerSites || {}));
