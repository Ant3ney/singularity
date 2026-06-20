import { notFound } from 'next/navigation';
import Dynamic from '@/page-builder';
import { getFormattedBodyForParams, getStaticRouteParams } from '@/page-builder/data';

type DynamicPageProps = {
	params: Promise<{
		id?: string[];
	}>;
};

export function generateStaticParams() {
	return getStaticRouteParams();
}

export default async function DynamicPage({ params }: DynamicPageProps) {
	const resolvedParams = await params;
	const body = await getFormattedBodyForParams(resolvedParams);
	if (body?.hasFailed) {
		notFound();
	}

	return <Dynamic body={body} />;
}
