/**
 * WebController
 *
 * @description :: Server-side logic for managing webs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	indexIO: function(req, res) {
		return res.view('blank', {
			layout: 'index'
		})
	},

	actionIO: function(req, res) {
		action = req.param('action');
		switch(action) {
			case 'index':
				return res.view('blank', {
					layout: 'index',
				})
			case 'resume':
				return res.view('blank', {
					layout: 'resume',
				})
			case 'research':
				return res.view('blank', {
					layout: 'research',
				})
			case 'business':
				return res.view('blank', {
					layout: 'business',
				})
			case 'code':
				return res.view('blank', {
					layout: 'code',
				})
			case 'award':
				return res.view('blank', {
					layout: 'award',
				})
		}
	},

	researchIO: function(req, res) {
		action = req.param('action');
		switch(action) {
			case 'publication':
				return res.view('blank', {
					layout: 'publication',
				})
			case 'conference':
				return res.view('blank', {
					layout: 'conference',
				})
		}
	},
};

