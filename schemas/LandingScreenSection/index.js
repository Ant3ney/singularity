export default {
	title: 'landing Screen',
	name: 'landingScreen',
	type: 'document',
	fields: [
		{
			title: 'Display Image',
			name: 'displayImage',
			type: 'image',
		},
		{
			title: 'Title',
			name: 'title',
			type: 'boldsBreaksAndSpans',
		},
		{
			title: 'Subtitle',
			name: 'subtitle',
			type: 'boldsBreaksAndSpans',
		},
	],
	preview: {
		prepare() {
			return {
				title: `Landing Screen`,
			};
		},
	},
};
