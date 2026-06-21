import addContactFormEntry from "../../../API/addContactFormEntry";

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!email || !message) {
    return Response.json({ fail: true }, { status: 400 });
  }

  try {
    const entry = await addContactFormEntry(name, email, message);
    return Response.json({ ok: true, entryId: entry?._id });
  } catch (error) {
    console.error("Failed to record contact form entry", error);
    return Response.json({ fail: true }, { status: 500 });
  }
}
