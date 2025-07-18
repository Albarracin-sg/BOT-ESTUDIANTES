import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { infomacionGeneral } from "./features/tools/infomacionGeneral.js";

// Importing the tool templates for the MacroAgente_Grado
import { Agente_VerificarCarpetasGrado, Agente_ProyectoGrado, Agente_Semilleros, Agente_ProyectosRechazo, Agente_TIS } from "./features/tools/MacroAgente_Grado/index.js";

// importing the tool templates for the MacroAgente_Infomativo
import { Agente_Contacto, Agente_PreguntasFrecuentes } from "./features/tools/MacroAgente_Informativo/index.js";

// Importing the tool templates for the MacroAgente_MatriculasYPagos
import { Subagente_CarnetEstudiantil, Subagente_Documentacion, Subagente_IncrementoMatricula, Subagente_Bachillerato, Subagente_Especializaciones, Subagente_Profesionales, Subagente_Tecnicos, Subagente_Credito, Subagente_EstadoFinanciero, Subagente_FechasPago, Subagente_MetodosPago, Subagente_RadicacionPagos } from "./features/tools/MacroAgente_MatriculasYPagos/index.js";

// importing the tool templates for the MacroAgente_ProcesosEstudiantiles
import { Agente_SolicitudesGenerales, Agente_Certificados, Agente_Examenes, Agente_Notas } from "./features/tools/MacroAgente_ProcesosEstudiantiles/index.js";

// Importing the tool templates for the MacroAgente_TramitesAcademicos
import { Agente_Aplazamiento, Agente_CambioJornada, Agente_Homologaciones, Agente_Incapacidades, Agente_Reintegro, Agente_RepetirAsignatura } from "./features/tools/MacroAgente_TramitesAcademicos/index.js";

import { TransportManager } from "./configs/transports/transportManager.js";
import { handleStreamableHttpRequest } from "./configs/transports/streamableHttpTransport.js";
import { handleSseRequest, handleSsePostRequest } from "./configs/transports/sseTransport.js";
import express, { type Request, type Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;


const mcpServer = (() => {
  const server = new McpServer(
    {
      name: "servidor-compatible-mcp",
      version: "1.0.0",
    },
    { capabilities: { logging: {} } }
  );

  // fallback
  infomacionGeneral(server);

  // Registering the tools for the MacroAgente_Grado 5
  Agente_VerificarCarpetasGrado(server);
  Agente_ProyectoGrado(server);
  Agente_Semilleros(server);
  Agente_ProyectosRechazo(server);
  Agente_TIS(server);

  // Registering the tools for the MacroAgente_Informativo 2
  Agente_Contacto(server);
  Agente_PreguntasFrecuentes(server);

  // Registering the tools for the MacroAgente_MatriculasYPagos 12
  Subagente_CarnetEstudiantil(server);
  Subagente_Documentacion(server);
  Subagente_IncrementoMatricula(server);
  Subagente_Bachillerato(server);
  Subagente_Especializaciones(server);
  Subagente_Profesionales(server);
  Subagente_Tecnicos(server);
  Subagente_Credito(server);
  Subagente_EstadoFinanciero(server);
  Subagente_FechasPago(server);
  Subagente_MetodosPago(server);
  Subagente_RadicacionPagos(server);

  // Registering the tools for the MacroAgente_ProcesosEstudiantiles
  Agente_SolicitudesGenerales(server);
  Agente_Certificados(server);
  Agente_Examenes(server);
  Agente_Notas(server);

  // Registering the tools for the MacroAgente_TramitesAcademicos
  Agente_Aplazamiento(server);
  Agente_CambioJornada(server);
  Agente_Homologaciones(server);
  Agente_Incapacidades(server);
  Agente_Reintegro(server);
  Agente_RepetirAsignatura(server);

  console.log("🔧 Servidor MCP compatible configurado con herramientas de compatibilidad");
  return server;
})();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    exposedHeaders: ["Mcp-Session-Id"],
  })
);

const transportManager = new TransportManager();

app.all("/mcp", (req: Request, res: Response) => {
  // Ahora pasamos una función que simplemente devuelve la instancia ya inicializada de mcpServer.
  // Esto asegura que la inicialización y el registro de herramientas no se repitan.
  handleStreamableHttpRequest(req, res, transportManager, () => mcpServer);
});

app.get("/sse", (req: Request, res: Response) => {
  // Igual para el handler SSE
  handleSseRequest(req, res, transportManager, () => mcpServer);
});

app.post("/messages", (req: Request, res: Response) => {
  handleSsePostRequest(req, res, transportManager);
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    server: "servidor-compatible-mcp",
    version: "1.o.o",
    protocols: [
      {
        name: "Streamable HTTP",
        version: "2025-03-26",
        endpoint: `http://localhost:${PORT}/mcp`,
      },
      {
        name: "HTTP+SSE (deprecated)",
        version: "2024-11-05",
        endpoints: ["/sse", "/messages"],
      },
    ],
    activeSessions: transportManager.getActiveSessions(),
    uptime: process.uptime(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor MCP compatible ejecutándose en puerto ${PORT}`);
  console.log(`
==============================================
🔧 OPCIONES DE TRANSPORTE SOPORTADAS:

1. 🆕 Streamable HTTP (Protocolo versión: 2025-03-26)
    Endpoint: /mcp
    Métodos: GET, POST, DELETE
    Uso:
      - Inicializar con POST a /mcp
      - Establecer stream SSE con GET a /mcp
      - Enviar peticiones con POST a /mcp
      - Terminar sesión con DELETE a /mcp

2. 🔙 HTTP + SSE (Protocolo versión: 2024-11-05)
    Endpoints: /sse (GET) y /messages (POST)
    Uso:
      - Establecer stream SSE con GET a /sse
      - Enviar peticiones con POST a /messages?sessionId=<id>

📊 Información del servidor: GET /
🧪 Herramientas disponibles:
    - start-notification-stream
    - send-immediate-notification
    - test-protocol-connectivity
    - get-server-info
    - test-compatibility
==============================================
`);
});

process.on("SIGINT", async () => {
  console.log("🔄 Apagando servidor...");
  await transportManager.closeAll();
  console.log("✅ Apagado del servidor completado");
  process.exit(0);
});
