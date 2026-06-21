import DynamicPage from "../DynamicPage";
import getBodyData from "../../API/getBodyData";
import formatBodyData from "../../page-builder/body/formatData";

export const revalidate = 60;
export const dynamicParams = true;

export function generateStaticParams() {
  return [{ id: [] }, { id: ["id"] }];
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const routeName = formatRouteName(resolvedParams?.id);
  const body = await getBodyData(routeName).then(formatBodyData).catch(handleRejections);

  return <DynamicPage body={body} />;
}

function handleRejections(results) {
  console.log("rejection:", results);
  return results;
}

function formatRouteName(id) {
  if (!id || id.length === 0) return "/";
  return `/${id.join("/")}`;
}
