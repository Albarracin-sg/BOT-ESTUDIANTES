import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Certificados(server: McpServer) {
  server.tool(
    "*Nombre de la tool*",
    `
        *Descripción de la tool*
        `,
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `

                    `,
          },
        ],
      };
    }
  );
}
