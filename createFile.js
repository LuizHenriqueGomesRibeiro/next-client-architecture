import fs from 'fs';
import path from 'path';

const projectRoot = path.resolve(require.main?.path || process.cwd(), '..', '..');
const dirPath = path.join(projectRoot, 'src', 'api');
const filePath = path.join(dirPath, 'index.ts');

const content = `
import { ApiEndpoint } from "@caucolum/next-client-architecture";

export const BASE_URL = "";

export const api = {
    
} as const satisfies Record<string, ApiEndpoint>;
`;

// Garante que o diretório existe antes de criar o arquivo
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

// Cria ou sobrescreve o arquivo index.ts
fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');

console.log('Arquivo criado com sucesso!');
