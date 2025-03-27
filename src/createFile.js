const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), 'api/index.ts');

const content = `
    import { ApiEndpoint } from "@caucolum/next-client-architecture";

    export const BASE_URL = "";

    export const api = {
        
    } as const satisfies Record<string, ApiEndpoint>;
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('Arquivo criado com sucesso!');
