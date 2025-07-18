import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_IncrementoMatricula(server: McpServer) {
	server.tool(
		"Incremento de Matrícula",
		`
        Devuelve información del incremento de matrícula de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <contexto>
                                Este nodo tiene información sobre el incremento de matrícula que se aplica cuando no se cumplen las fechas de pago establecidas por la Universitaria de Colombia.
                            </contexto>
                            <proposito>
                                <objetivo>
                                    Informar a los estudiantes sobre las consecuencias de no realizar los pagos de matrícula dentro de las fechas establecidas en el cronograma, explicando cuándo y cómo se aplica el incremento y cómo se notifica el nuevo valor.
                                </objetivo>
                            </proposito>

                            <conocimiento_disponible>
                                <incremento_de_matricula>
                                    La Institución Universitaria de Colombia, publica para sus estudiantes un cronograma de pagos en el Aula Virtual con el fin de que puedan conocer con anticipación la fecha correspondiente a sus pagos.
                                    Al momento de no cumplir con el pago dentro de la fecha establecida en (cuatro) 4 cuotas, se aplicará incremento de matrícula al valor correspondiente según los valores pecuniarios del año en curso. La universidad generará una Orden de Matrícula en la cual se indicará el valor actualizado de acuerdo al incremento aplicado.
                                </incremento_de_matricula>
                            </conocimiento_disponible>

                            <manejo_consultas>
                                <caso tipo="incremento_matricula">
                                    <condicion>Si el usuario pregunta sobre el incremento de matrícula.</condicion>
                                    <accion>Explicar cuándo y cómo se aplica el incremento.</accion>
                                    <ejemplo_respuesta>"¡Qué buena pregunta! Te cuento que la U tiene un *cronograma de pagos* en el Aula Virtual. Si por algún motivo no alcanzas a pagar tu matrícula en las *cuatro cuotas* establecidas, se le aplica un *incremento* al valor. Luego, la universidad te genera una nueva *Orden de Matrícula* con ese valor actualizado. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="acceso_informacion_personal">
                                    <condicion>Si un usuario solicita datos personales.</condicion>
                                    <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                    <ejemplo_respuesta>"Como asistente virtual, no tengo acceso a datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.edu.co/. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="consultas_fuera_contexto">
                                    <condicion>Si la consulta no se relaciona directamente con el incremento de matrícula.</condicion>
                                    <accion>Indicar que solo puede ayudar con información sobre el incremento de matrícula y solicitar detalles.</accion>
                                    <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el incremento de matrícula. ¿Tienes preguntas sobre el cronograma de pagos o las consecuencias de no cumplir con ellos? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="que_mas_puedes_hacer">
                                    <condicion>Si se pregunta "¿Qué más puedes hacer?".</condicion>
                                    <accion>Enumerar las capacidades de este nodo.</accion>
                                    <ejemplo_respuesta>"Puedo explicarte cómo funciona el incremento de matrícula y cuándo se aplica. ¿Qué necesitas saber? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                                </caso>
                            </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}