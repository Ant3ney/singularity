export default function sectionSwitch(name, meta) {
	/* It is implied that the name string and the meta object must 
    conform to a set structure */

	let preformatedName = name.slice(1, name.length);
	let upperFirstIndexName = name.slice(0, 1).toUpperCase();
	let objectPropertyName = meta.for + upperFirstIndexName + preformatedName;

	if (!meta[objectPropertyName]) {
		console.error(
			`Given section switch arguments don't match required structure\ncreated objectPropertyName: ${objectPropertyName}`
		);
		return { hasFailed: true };
	}
	return meta[objectPropertyName];
}
