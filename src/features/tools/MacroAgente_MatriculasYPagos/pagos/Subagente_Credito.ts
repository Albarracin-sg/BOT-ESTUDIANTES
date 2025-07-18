import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_Credito(server: McpServer) {
  server.tool(
    "*Nombre de la tool*",
    `
        *Subagente_Credito*
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
