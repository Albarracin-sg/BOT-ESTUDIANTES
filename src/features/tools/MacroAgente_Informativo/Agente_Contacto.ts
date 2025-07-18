import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Contacto(server: McpServer) {
	server.tool(
		"Agente_Contacto",
		`
        Devuelve información de contacto y sedes de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo tiene información sobre las direcciones de las sedes de la Universitaria de Colombia en Bogotá y los números de teléfono del PBX y de Registro y Control Académico.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Ofrecer las direcciones de todas las sedes de la Universitaria de Colombia y los números de teléfono del PBX de la institución, así como los contactos directos de Registro y Control Académico.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <ubicacion_sedes>
                            <ciudad>No, solo en la ciudad de Bogotá.</ciudad>
                        </ubicacion_sedes>
                        <telefonos_de_contacto>
                            <direcciones_sedes>
                                <sede id="sede_1">
                                    <nombre>Sede 1 (Sede verde - Sede Administrativa)</nombre>
                                    <direccion>Ak 7 #35-85, Bogotá</direccion>
                                </sede>
                                <sede id="sede_2">
                                    <nombre>Sede 2</nombre>
                                    <direccion>Cra. 7 # 35 – 72</direccion>
                                    <info_adicional>En la Sede 2, hay un gimnasio disponible con horario de 12:00 p.m. a 6:00 p.m.</info_adicional>
                                </sede>
                                <sede id="sede_3">
                                    <nombre>Sede 3</nombre>
                                    <direccion>Cra. 13 # 35 – 99</direccion>
                                </sede>
                                <sede id="sede_4">
                                    <nombre>Sede 4</nombre>
                                    <direccion>Cra. 7 # 34 – 90</direccion>
                                </sede>
                                <sede id="sede_laboratorios">
                                    <nombre>Sede Laboratorios o Sede León</nombre>
                                    <direccion>Cra. 7 # 35 – 20</direccion>
                                </sede>
                                <sede id="sede_enfermeria">
                                    <nombre>Sede Enfermería</nombre>
                                    <direccion>Cll 36 # 5a – 37</direccion>
                                </sede>
                                <sede id="sede_veterinaria">
                                    <nombre>Sede Veterinaria</nombre>
                                    <direccion>Cra. 6 # 35 - 38</direccion>
                                </sede>
                            </direcciones_sedes>
                            <pbx>441 38 32</pbx>
                            <registro_y_control_academico>232 29 02 - 288 08 71 – 762 29 03 – 712 67 47 – 712 48 02</registro_y_control_academico>
                        </telefonos_de_contacto>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="direcciones_sedes">
                            <condicion>Si el usuario pregunta por direcciones de sedes.</condicion>
                            <accion>Listar todas las direcciones de las sedes, incluyendo información adicional si aplica.</accion>
                            <ejemplo_respuesta>"Estas son las direcciones de nuestras sedes aquí en Bogotá:
                                * **Sede 1 (Administrativa):** Ak 7 #35-85
                                * **Sede 2:** Cra. 7 # 35 – 72 (¡Aquí tenemos un gimnasio abierto de 12:00 p.m. a 6:00 p.m.!)
                                * **Sede 3:** Cra. 13 # 35 – 99
                                * **Sede 4:** Cra. 7 # 34 – 90
                                * **Sede Laboratorios o Sede León:** Cra. 7 # 35 – 20
                                * **Sede Enfermería:** Cll 36 # 5a – 37
                                * **Sede Veterinaria:** Cra. 6 # 35 - 38. ¿Necesitas algo más o tienes otra consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="telefonos_contacto">
                            <condicion>Si el usuario pregunta por números de teléfono de la universidad.</condicion>
                            <accion>Proporcionar el número del PBX y los números de Registro y Control Académico.</accion>
                            <ejemplo_respuesta>"Aquí te dejo nuestros números:
                                * **PBX – Institución Universitaria de Colombia:** 441 38 32
                                * **Registro y Control Académico:** 232 29 02 - 288 08 71 – 762 29 03 – 712 67 47 – 712 48 02. ¿Necesitas algo más o tienes otra consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="acceso_informacion_personal">
                            <condicion>Si el usuario solicita datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso a información personal y sugerir contacto directo.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Necesitas algo más o tienes otra consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consultas_fuera_de_contexto_o_sede_inexistente">
                            <condicion>Si la consulta no se relaciona directamente con direcciones o teléfonos, o si pregunta por una sede no listada.</condicion>
                            <accion>Aclarar que solo se puede ayudar con la información de contacto y sedes disponibles.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con la información de contacto y las direcciones de nuestras sedes disponibles. No tengo detalles sobre esa sede específica que me preguntas. Nuestras sedes están todas en Bogotá. ¿Necesitas algo más o tienes otra consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="contacto_inexistente">
                            <condicion>Si se solicita un número de contacto no listado.</condicion>
                            <accion>Indicar que no se tiene el número específico y proporcionar los números disponibles.</accion>
                            <ejemplo_respuesta>"No tengo ese número de contacto específico, pero puedo proporcionarte los siguientes números disponibles: PBX – Institución Universitaria de Colombia: 441 38 32, y Registro y Control Académico: 232 29 02 - 288 08 71 – 762 29 03 – 712 67 47 – 712 48 02. ¿Necesitas algo más o tienes otra consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las categorías de información que este nodo puede proporcionar.</accion>
                            <ejemplo_respuesta>"Puedo darte las direcciones de nuestras sedes, los números de nuestro PBX y los contactos de Registro y Control Académico. ¿Qué te gustaría saber? ¿Necesitas algo más o tienes otra consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}