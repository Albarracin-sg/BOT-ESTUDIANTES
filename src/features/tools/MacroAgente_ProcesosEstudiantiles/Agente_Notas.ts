import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Notas(server: McpServer) {
	server.tool(
		"Corrección y Verificación de Notas Universitaria de Colombia",
		`
        Devuelve información sobre corrección y verificación de notas en la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo explica cómo solicitar la corrección o verificación de notas, detallando los procesos, responsabilidades y datos requeridos para cada trámite.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Explicar detalladamente el proceso para solicitar la corrección de una nota, incluyendo quién la puede cambiar y los pasos para el estudiante y el docente. Adicionalmente, describir el procedimiento para solicitar la verificación de una nota a través del Portal de Notas, especificando todos los datos personales y académicos requeridos para una solicitud exitosa.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <notas>
                            <correccion_de_notas>
                                <quien_cambia>Los únicos con potestad de cambiar notas son los docentes que dictaron la cátedra respectiva.</quien_cambia>
                                <proceso_estudiante>
                                    <paso>Ingresar al Aula Virtual: Acceda a https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php e inicie sesión.</paso>
                                    <paso>Descargar el Formato de Corrección de Nota:
                                        <sub_paso>Dar clic sobre el botón "INFORMACIÓN GENERAL".</sub_paso>
                                        <sub_paso>Dar clic sobre "NOTAS".</sub_paso>
                                        <sub_paso>Descargar el archivo en formato PDF llamado: "FORMATO CORRECCIÓN DE NOTA.pdf".</sub_paso>
                                    </paso>
                                    <paso>Enviar el Formato al Docente: El estudiante debe enviar dicho formato al correo electrónico del docente con sus datos, para que el docente lo diligencie.</paso>
                                </proceso_estudiante>
                                <proceso_docente>
                                    <paso>Envío del Formato Diligenciado a Registro y Control Académico: El docente debe enviar ese formato plenamente diligenciado al correo de Registro y Control Académico: registroycontrolacademico.iuc@gmail.com.</paso>
                                </proceso_docente>
                                <validaciones>Posterior a este proceso se validará la veracidad del documento y se llevará a cabo la modificación de la nota.</validaciones>
                                <tiempo_actualizacion>15 a 20 días hábiles.</tiempo_actualizacion>
                            </correccion_de_notas>
                            <solicitud_verificacion_de_nota>
                                <pasos>
                                    <paso>Ingresar al Portal de notas https://iudcportal.com/, seleccione el icono azul que dice Soporte Técnico ayuda.</paso>
                                    <paso>Diligencie sus datos:
                                        <dato>Nombre y Apellido</dato>
                                        <dato>Número de identificación</dato>
                                        <dato>Correo Electrónico</dato>
                                        <dato>Teléfono</dato>
                                        <dato>Facultad</dato>
                                        <dato>Semestre y Módulo Actual</dato>
                                        <dato>Jornada</dato>
                                        <dato>Homologado: (si o no) y a cuál periodo fue homologado</dato>
                                        <dato>Semestre Ingreso.</dato>
                                    </pasos>
                                    <paso>En mensaje a solicitar: Verificación de notas y diligenciar los datos de la materia o las materias. Para ambos casos se debe enviar la siguiente información por materia o nota faltante en el Portal de Notas:
                                        <dato_materia>Nombre de la materia</dato_materia>
                                        <dato_materia>Nombre del docente que la impartió</dato_materia>
                                        <dato_materia>Fecha en que cursó la materia (Mes y año exacto)</dato_materia>
                                        <dato_materia>Periodo y módulo al que pertenece la materia</dato_materia>
                                        <dato_materia>Grupo (aclaratoria: si su programa es un solo grupo, pertenece al curso A)</dato_materia>
                                        <dato_materia>Jornada en que cursó la materia.</dato_materia>
                                    </pasos>
                                </pasos>
                                <importancia_informacion>Dicha información es necesaria para poder realizar su proceso y que la respuesta sea satisfactoria.</importancia_informacion>
                            </solicitud_verificacion_de_nota>
                        </notas>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="correccion_notas_general">
                            <condicion>Si el usuario pregunta de forma general sobre la corrección de notas.</condicion>
                            <accion>Explicar que solo el docente puede cambiar la nota y el proceso general para solicitarlo.</accion>
                            <ejemplo_respuesta>"Solo los docentes que dictaron la materia pueden corregir una nota. Para iniciar el proceso, debes descargar un formato de corrección de nota desde el Aula Virtual y enviárselo a tu docente para que él lo diligencie y lo remita a Registro y Control Académico. ¿Deseas saber cómo descargar ese formato o tienes alguna otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="quien_cambia_nota">
                            <condicion>Si el usuario pregunta quién puede cambiar una nota.</condicion>
                            <accion>Especificar que solo los docentes pueden hacerlo.</accion>
                            <ejemplo_respuesta>"Los únicos que tienen la autoridad para cambiar una nota son los docentes que te dictaron esa materia específica. Espero que esta información te sea útil."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="proceso_correccion_nota">
                            <condicion>Si el usuario pregunta por los pasos para corregir una nota.</condicion>
                            <accion>Detallar el proceso completo para la corrección de notas.</accion>
                            <ejemplo_respuesta>"Para solicitar la corrección de una nota, ingresa a tu Aula Virtual en este enlace: https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php. Una vez dentro, dirígete a 'INFORMACIÓN GENERAL', luego a 'NOTAS' y descarga el 'FORMATO CORRECCIÓN DE NOTA.pdf'. Debes enviar este formato a tu docente con tus datos, para que él lo diligencie y lo remita a registroycontrolacademico.iuc@gmail.com. La actualización de la nota se reflejará en un plazo de 15 a 20 días hábiles."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="tiempo_actualizacion_nota">
                            <condicion>Si el usuario pregunta cuánto tiempo tarda en actualizarse una nota corregida.</condicion>
                            <accion>Indicar el tiempo de 15 a 20 días hábiles.</accion>
                            <ejemplo_respuesta>"La actualización de una nota después de que se ha realizado el proceso de corrección toma entre 15 y 20 días hábiles."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_verificacion_nota_general">
                            <condicion>Si el usuario pregunta de forma general sobre la verificación de notas.</condicion>
                            <accion>Explicar el proceso general de verificación a través del Portal de Notas.</accion>
                            <ejemplo_respuesta>"Si necesitas verificar una nota, puedes realizar la solicitud a través del Portal de Notas. Debes ingresar al portal, hacer clic en el ícono de 'Soporte Técnico ayuda' y diligenciar un formulario con tus datos personales y los de la materia que deseas verificar. ¿Te gustaría que te indique qué datos específicos se solicitan en el formulario?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="pasos_verificacion_nota">
                            <condicion>Si el usuario pregunta por los pasos para solicitar la verificación de una nota.</condicion>
                            <accion>Detallar el procedimiento paso a paso para la solicitud de verificación.</accion>
                            <ejemplo_respuesta>"Para solicitar la verificación de una nota, ingresa al Portal de notas en https://iudcportal.com/. Una vez allí, haz clic en el icono azul 'Soporte Técnico ayuda'. Luego, diligencia tus datos personales como nombre, identificación, correo electrónico, teléfono, facultad, semestre y módulo actual, jornada, si eres homologado (y a qué periodo), y semestre de ingreso. En el campo de mensaje, solicita 'Verificación de notas' y, por cada materia, incluye: nombre de la materia, nombre del docente que la impartió, fecha exacta en que la cursaste (mes y año), período y módulo al que pertenece, grupo (si tu programa es un solo grupo, pertenece al curso A), y jornada en que cursaste la materia. Toda esta información es clave para procesar tu solicitud adecuadamente."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="datos_verificacion_nota">
                            <condicion>Si el usuario pregunta qué datos se necesitan para la verificación de una nota.</condicion>
                            <accion>Listar todos los datos personales y académicos requeridos para la solicitud de verificación.</accion>
                            <ejemplo_respuesta>"Para la solicitud de verificación de una nota, necesitarás proporcionar tus datos personales (nombre completo, número de identificación, correo electrónico, teléfono, facultad, semestre y módulo actual, jornada, si eres homologado y a qué periodo ingresaste). Además, para la materia específica, debes indicar: su nombre, el nombre del docente que la impartió, la fecha exacta en que la cursaste (mes y año), el período y módulo al que pertenece, el grupo (si tu programa es un solo grupo, pertenece al curso A), y la jornada en que la cursaste."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como asistente, no tengo acceso a tus datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para obtener esa información."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con la corrección o verificación de notas.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la corrección o verificación de notas en la Universitaria de Colombia. ¿Hay algo más en lo que pueda colaborarte?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte cómo solicitar la corrección de una nota, incluyendo los pasos tanto para ti como para el docente, y también cómo pedir una verificación de nota a través del Portal de Notas, detallando toda la información requerida para cada caso. ¿Necesitas ayuda con algún otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}