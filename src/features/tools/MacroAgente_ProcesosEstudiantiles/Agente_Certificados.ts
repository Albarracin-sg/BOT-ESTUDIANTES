import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Certificados(server: McpServer) {
  server.tool(
    "Agente_Certificados",
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
