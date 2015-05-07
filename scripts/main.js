/**
* mchandleraz Module
*
* Description
*/
var app = angular.module('mchandleraz', []);

app.controller('PortfolioCtrl', function($scope) {

	var imgBasePath = 'images/portfolio/';

	$scope.projects = [
		{
			title:'Ksport',
			images:{
				thumbnail: 'images/portfolio/ksport.jpg',
				desktop: 'images/portfolio/ksport-desktop.png'
			},
			body:'Ksport was looking for an updated look and lots of new functionality from their website. Through knowledge of their target demographic, I was able to deliver a feature-rich website that was more aligned with their brand and gave Ksport staff the tools needed to succesfully maintain their website.',
			tags:['WordPress', 'CSS3', 'HTML5', 'jQuery'],
			projectUrl: 'http://ksportusa.com',
			detailUrl: '/portfolio_ksport.html'
		},
		{
			title:'PRSS',
			images:{
				thumbnail: 'images/portfolio/gilbert-news-blog.jpg',
				desktop: 'images/portfolio/gilbert-news-blog.jpg'
			},
			body:'I helped DiscoverMINE customize a WordPress theme they were using for their Gilbert Daily PRSS blog. I modified the theme to suit their needs, as well as improved user experience on mobile devices and tablets.',
			tags:['WordPress', 'CSS3', 'HTML5', 'jQuery', 'Responsive Web Design'],
			projectUrl: 'http://gilbert-news-blog.dailyprss.com/',
			detailUrl: '/portfolio_prss.html'
		},
		{
			title:'AZ Rattlers',
			images:{
				thumbnail: 'images/portfolio/rattlers.jpg',
				desktop: 'images/portfolio/rattlers-desktop.png',
				mobile: 'images/portfolio/rattlers-mobile.png',
				tablet: 'images/portfolio/rattlers-tablet.png'
			},
			body:'The Arizona Rattlers needed a new web presence for the 2013 season, and had specific functionality goals in mind. We worked together to achieve the functionality, refresh the look, and incorporate the Rattlers 2013 season branding strategy into their online efforts.',
			tags:['WordPress', 'CSS3', 'HTML5', 'jQuery', 'Responsive Web Design'],
			projectUrl: 'http://azrattlers.com',
			detailUrl: '/portfolio_rattlers.html'
		},
		{
			title:'Voskos',
			images:{
				thumbnail: 'images/portfolio/voskos.jpg',
				desktop: 'images/portfolio/voskos-desktop.png',
				mobile: 'images/portfolio/voskos-mobile.png',
				tablet: 'images/portfolio/voskos-tablet.png'
			},
			body:'<span class="uppercase">Voskos</span><sup>&reg;</sup> came to <a href="http://www.riester.com/">RIESTER</a> looking for a more comprehensive CMS solution and a complete front-end makeover. As lead developer for this project, I used WordPress backed by custom post types to implement an easier-to-manager CMS.',
			tags:['WordPress', 'CSS3', 'HTML5', 'JavaScript', 'Responsive Web Design'],
			projectUrl: 'http://voskos.com',
			detailUrl: '/portfolio_voskos.html'
		},
		{
			title:'Release Pool Parties',
			images:{
				thumbnail: 'images/portfolio/release.jpg',
				desktop: 'images/portfolio/release-desktop.png',
				mobile: 'images/portfolio/release-mobile.png',
				mobileLandscape: 'images/portfolio/release-mobile-landscape.png',
				tablet: 'images/portfolio/release-tablet.png'
			},
			body:'The RIESTER C#/.NET team and I partnered up to develop a microsite to promote one of the “Best Valley Pool Parties.” Using a combination of proprietary and third-party APIs, JavaScript, and HTML5 client-side storage I was able to deliver a highly performant, mobile-first responsive experience.',
			tags:['.NET', 'C#', 'CSS3', 'HTML5', 'JavaScript', 'Geolocation', 'Responsive Web Design', 'API Design & Consumption'],
			projectUrl: 'http://releasevip.com',
			detailUrl: '/portfolio_tsr-release.html'
		}
	];

});