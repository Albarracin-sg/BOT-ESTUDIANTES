import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Semilleros(server: McpServer) {
  server.tool(
    "Agente_Semilleros",
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
