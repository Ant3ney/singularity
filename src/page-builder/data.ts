import getBodyData from '@/api/getBodyData';
import { getAllPageIds } from '@/lib/page';
import formatBodyData from './body/formatData';

export function getStaticRouteParams() {
	return getAllPageIds().map(({ params }) => ({
		id: params.id,
	}));
}

export async function getFormattedBodyForParams(params?: { id?: string[] }): Promise<any> {
	const routeName = formatRouteName(params);

	return getBodyData(routeName).then(formatBodyData).catch(handleRejections);
}

function handleRejections(results: any): Promise<any> {
	return new Promise(resolve => {
		resolve(results);
	});
}

function formatRouteName(params?: { id?: string[] }) {
	let routeName: string | string[] = params && params.id ? params.id : '/';

	if (routeName !== '/') {
		routeName = `/${routeName}`;
	}
	if (routeName.indexOf(',') >= 0) {
		routeName = routeName.replace(',', '/');
	}

	return routeName;
}
