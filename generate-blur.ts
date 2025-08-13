import getPlaiceholder from "lqip-modern";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

async function fetchImageBuffer(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
          return;
        }
        const data: Uint8Array[] = [];
        res.on("data", (chunk) => data.push(chunk));
        res.on("end", () => resolve(Buffer.concat(data)));
      })
      .on("error", reject);
  });
}

async function main() {
  const imagePath = process.argv[2];
  if (!imagePath) {
    console.error("Usage: ts-node generate-blur.ts <image-path-or-url>");
    process.exit(1);
  }

try {
  let buffer: Buffer;

  if (imagePath.startsWith("http")) {
    console.log("Downloading image from URL...");
    buffer = await fetchImageBuffer(imagePath);
  } else {
    const absPath = path.resolve(imagePath);
    buffer = fs.readFileSync(absPath);
  }

  const result = await getPlaiceholder(buffer);
  const base64 = result.metadata.dataURIBase64;
  console.log("\n✅ BlurDataURL Generated:\n", base64);
} catch (err) {
  console.error("❌ Error:", err instanceof Error ? err.message : err);
}
}

main();
