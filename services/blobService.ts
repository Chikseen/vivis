import { BlobServiceClient } from '@azure/storage-blob';

async function getAllBlobsFromContainer() {
	const maxPageSize: number = 999;

	const blobServiceClient = new BlobServiceClient("https://vivisgallerystorage.blob.core.windows.net/");

	const container = blobServiceClient.getContainerClient("images");

	let allItems: string[] = [];

	for await (const response of container
		.listBlobsFlat()
		.byPage({ maxPageSize })) {
		if (response.segment.blobItems) {
			for (const blob of response.segment.blobItems) {
				if (blob.name.includes("/"))
					allItems.push(blob.name);
			}
		}
	}

	let result = {} as any;
	allItems.forEach(item => {
		const speratedString: string[] = item.split("/");
		const cat: string = speratedString[0];
		const image: string = speratedString[1];

		if (!result[cat])
			result[cat] = []

		result[cat] = [...result[cat], (image)];
	});
	return result;
}

export { getAllBlobsFromContainer };