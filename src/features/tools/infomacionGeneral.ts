import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function infomacionGeneral(server: McpServer) {
  server.tool(
    "infomacionGeneral",
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
