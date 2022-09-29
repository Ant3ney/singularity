export default {
	title: 'Product',
	name: 'generalProductInfo',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: `generalInfo`,
				slugify: input => {
					return input ? input.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200) : '';
				},
			},
		},
		{
			title: 'Short Description',
			name: 'shortDescription',
			type: 'string',
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			title: 'Thumbnail',
			name: 'thumbnail',
			type: 'image',
		},
		//Download TODO: Add action type field that hides or shows either PluginMessage field or link field.
		//Download TODO: Add link field.
		{
			title: 'Action Type',
			name: 'actionType',
			type: 'string',
			options: ['pluginMessage', 'link'],
		},
		{
			title: 'Form Addon Message',
			name: 'pluginMessage',
			type: 'string',
		},
		{ title: 'Priority', name: 'priority', type: 'number' },
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			return {
				title: `Product - "${!selection.title ? 'Unset' : selection.title}"`,
			};
		},
	},
};
