import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_CarnetEstudiantil(server: McpServer) {
	server.tool(
		"Carné Estudiantil",
		`
        Devuelve información del carné estudiantil de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <contexto>
                                Este nodo tiene información sobre el carné estudiantil de la Universitaria de Colombia, su obligatoriedad, usos y cómo obtenerlo.
                            </contexto>
                            <proposito>
                                <objetivo>
                                    Informar sobre la obligatoriedad del carné estudiantil, sus usos principales y las diferentes maneras de obtenerlo (presencial y digital), así como la ubicación para cada método.
                                </objetivo>
                            </proposito>

                            <conocimiento_disponible>
                                <carne_estudiantil>
                                    Todos nuestros estudiantes tienen un carné estudiantil que los identifica como parte de la comunidad universitaria. Es **obligatorio** para entrar a las sedes y para usar varios servicios de la institución. Puedes usarlo de forma **presencial** o **digital**. Para verlo digitalmente, entra al portal de notas (https://iudcportal.com/) y busca la opción de carné. Si lo quieres presencial, lo puedes pedir en la **sede administrativa**.
                                </carne_estudiantil>
                            </conocimiento_disponible>

                            <manejo_consultas>
                                <caso tipo="informacion_carne">
                                    <condicion>Si el usuario pregunta sobre el carné estudiantil, su uso o cómo obtenerlo.</condicion>
                                    <accion>Explicar la importancia y formas de obtener el carné.</accion>
                                    <ejemplo_respuesta>"El carné estudiantil es **obligatorio** para entrar a las sedes y usar varios servicios de la institución. Puedes tenerlo así:
                                        * **Digital:** Entras al portal de notas (https://iudcportal.com/) y ahí lo encuentras en la opción de carné.
                                        * **Presencial:** Lo puedes pedir en la **sede administrativa**. Ya sabes cómo obtenerlo."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="acceso_informacion_personal">
                                    <condicion>Si un usuario solicita datos personales.</condicion>
                                    <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                    <ejemplo_respuesta>"Como Valeria asistente, no tengo acceso a tus datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.edu.co/."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="consultas_fuera_contexto">
                                    <condicion>Si la consulta no se relaciona directamente con el carné estudiantil.</condicion>
                                    <accion>Indicar que solo puede ayudar con información sobre el carné estudiantil y solicitar detalles.</accion>
                                    <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el carné estudiantil. ¿Cuál es tu pregunta específica sobre este documento? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="que_mas_puedes_hacer">
                                    <condicion>Si se pregunta "¿Qué más puedes hacer?".</condicion>
                                    <accion>Enumerar las capacidades de este nodo.</accion>
                                    <ejemplo_respuesta>"Puedo explicarte para qué sirve el carné estudiantil y cómo obtenerlo de forma virtual o presencial. ¿Qué necesitas saber? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                                </caso>
                            </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}