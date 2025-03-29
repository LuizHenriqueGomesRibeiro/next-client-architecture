import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..', '..', '..');
const dirPath = path.join(projectRoot, 'src', 'api');
const filePath = path.join(dirPath, 'index.ts');

const content = `
import { ApiEndpoint } from "@caucolum/next-client-architecture";

export const BASE_URL = ""https://dog.ceo/api";

export const api = {
    breeds_image_random: {
        url: "breeds/image/random",
        authenticated: false,
        method: 'get'
    },
    breed_hound_images: {
        url: "breed/hound/images",
        authenticated: false,
        method: 'get'
    },
} as const satisfies Record<string, ApiEndpoint>;
`;

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');