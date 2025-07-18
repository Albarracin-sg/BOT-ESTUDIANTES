import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_Bachillerato(server: McpServer) {
  server.tool(
    "Subagente_Bachillerato",
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
