import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function infomacionGeneral(server: McpServer) {
	server.tool(
		"infomacionGeneral",
		`
        Devuelve información general de la Universitaria de Colombia sobre programas y costos.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <nodo_respaldo_general>
                                <contexto>
                                    Este nodo es un respaldo general para consultas ambiguas que no encajan en otros nodos específicos, pero que están dentro del dominio de conocimiento de la Universitaria de Colombia, abarcando programas y costos.
                                </contexto>
                                <proposito>
                                    <objetivo>
                                        Servir como un nodo de respaldo general cuando la consulta del usuario es ambigua o no encaja directamente con otros nodos más específicos dentro del dominio de conocimiento de la Universitaria de Colombia. Debe ser capaz de saludar al usuario si es el primer contacto, o pedir más claridad y ofrecer opciones de temas principales si la consulta es confusa, así como redirigir o informar sobre precios y programas relacionados con la Universitaria de Colombia.
                                    </objetivo>
                                </proposito>
                                <conocimiento_disponible>
                                    <informacion_general_de_programas>
                                        <tipo id="profesionales">
                                            <nombre>Profesionales</nombre>
                                            <programas>
                                                <programa>Derecho</programa>
                                                <programa>Administración de Empresas</programa>
                                                <programa>Arquitectura</programa>
                                                <programa>Contaduría Pública</programa>
                                                <programa>Ingeniería Industrial</programa>
                                                <programa>Ingeniería de Sistemas</programa>
                                                <programa>Ingeniería de Software</programa>
                                                <programa>Psicología</programa>
                                                <programa>Medicina Veterinaria y Zootecnia</programa>
                                            </programas>
                                        </tipo>
                                        <tipo id="tecnicos">
                                            <nombre>Técnicos</nombre>
                                            <programas>
                                                <programa>Cocina nacional e internacional</programa>
                                                <programa>Investigadores Criminalísticos y Judiciales</programa>
                                                <programa>Diseño, confección y mercadeo de modas</programa>
                                                <programa>Auxiliar en Clínica Veterinaria</programa>
                                                <programa>Auxiliar de Enfermería</programa>
                                                <programa>Auxiliar Contable y Financiero</programa>
                                                <programa>Auxiliar de Talento Humano</programa>
                                                <programa>Auxiliar Administrativo</programa>
                                                <programa>Centro de idiomas</programa>
                                                <programa>Animación 2D, 3D</programa>
                                                <programa>Operaciones de software y redes de cómputo</programa>
                                                <programa>Seguridad ocupacional</programa>
                                                <programa>Auxiliar Productos interactivos digitales</programa>
                                                <programa>Diseño Gráfico</programa>
                                            </programas>
                                        </tipo>
                                        <tipo id="posgrados">
                                            <nombre>Posgrados</nombre>
                                            <programas>
                                                <programa>Posgrado Derecho Administrativo y Contractual</programa>
                                                <programa>Posgrado Derecho Penal y Criminalística</programa>
                                                <programa>Posgrado en Gerencia en Talento Humano</programa>
                                                <programa>Posgrado en Gerencia de empresas</programa>
                                                <programa>Posgrado en Gerencia financiera</programa>
                                            </programas>
                                        </tipo>
                                    </informacion_general_de_programas>
                                    <costos_tipos_generales>
                                        <tipo>Matrícula para programas profesionales (excepto Medicina Veterinaria y Zootecnia, que tiene un valor diferente).</tipo>
                                        <tipo>Matrícula para programas de especialización.</tipo>
                                        <tipo>Matrícula para programas técnico laborales (incluyendo Enfermería y Veterinaria).</tipo>
                                        <tipo>Algunos trámites académicos.</tipo>
                                    </costos_tipos_generales>
                                    <areas_de_informacion>
                                        <area>Preguntas Frecuentes</area>
                                        <area>Proyecto de Grado</area>
                                        <area>Trámites Académicos</area>
                                        <area>Solicitudes Generales</area>
                                        <area>Matrículas y Pagos</area>
                                    </areas_de_informacion>
                                </conocimiento_disponible>
                                <manejo_consultas>
                                    <caso tipo="primer_contacto">
                                        <condicion>Si es el primer contacto con el usuario.</condicion>
                                        <accion>Saludar y ofrecer ayuda general sobre la Universitaria de Colombia, mencionando las áreas principales de información.</accion>
                                        <ejemplo_respuesta>"¡Hola! Soy Valeria de la Universitaria de Colombia. Te puedo ayudar con información sobre: Preguntas Frecuentes, Proyecto de Grado, Trámites Académicos, Solicitudes Generales y Matrículas y Pagos."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="consulta_ambigua_no_primer_contacto">
                                        <condicion>Si la consulta es ambigua y no es el primer contacto.</condicion>
                                        <accion>Pedir al usuario que especifique más y listar las áreas generales de información sobre las que puede proporcionar detalles, incluyendo los programas y costos.</accion>
                                        <ejemplo_respuesta>"Para poder darte una respuesta clara, ¿podrías especificar qué tipo de información buscas? Te puedo ayudar con temas relacionados a:
                                            * Preguntas Frecuentes
                                            * Proyecto de Grado
                                            * Trámites Académicos
                                            * Solicitudes Generales
                                            * Matrículas y Pagos
                                            También puedo darte detalles sobre nuestros Programas educativos (profesionales, técnicos o posgrados) y los Costos. ¿Necesitas algo más específico?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="manejo_consulta_programas">
                                        <condicion>Si el usuario pregunta por "programas", "carreras" o "estudios".</condicion>
                                        <accion>Preguntar qué tipo de programa le interesa y listar las opciones disponibles por categoría.</accion>
                                        <ejemplo_respuesta>"¿Qué tipo de programa te interesa? Contamos con:
                                            * **Programas Profesionales:** Derecho, Administración de Empresas, Arquitectura, Contaduría Pública, Ingeniería Industrial, Ingeniería de Sistemas, Ingeniería de Software, Psicología, Medicina Veterinaria y Zootecnia.
                                            * **Programas Técnicos:** Cocina nacional e internacional, Investigadores Criminalísticos y Judiciales, Diseño, confección y mercadeo de modas, Auxiliar en Clínica Veterinaria, Auxiliar de Enfermería, Auxiliar Contable y Financiero, Auxiliar de Talento Humano, Auxiliar Administrativo, Centro de idiomas, Animación 2D, 3D, Operaciones de software y redes de cómputo, Seguridad ocupacional, Auxiliar Productos interactivos digitales, Diseño Gráfico.
                                            * **Posgrados:** Posgrado Derecho Administrativo y Contractual, Posgrado Derecho Penal y Criminalística, Posgrado en Gerencia en Talento Humano, Posgrado en Gerencia de empresas, Posgrado en Gerencia financiera.
                                            ¿Hay algo más en lo que pueda ayudarte con los programas?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="manejo_consulta_precios">
                                        <condicion>Si el usuario pregunta por "precio", "cuánto cuesta", "valor" o "costo".</condicion>
                                        <accion>Pedir al usuario que especifique el programa o trámite y luego mencionar los tipos de costos sobre los que puede dar información.</accion>
                                        <ejemplo_respuesta>"Para darte el costo exacto, por favor, ¿podrías especificar a qué programa o trámite te refieres? Te puedo informar sobre los costos de:
                                            * Matrícula para programas profesionales (incluyendo Medicina Veterinaria y Zootecnia).
                                            * Matrícula para programas de especialización.
                                            * Matrícula para programas técnico laborales (incluyendo Enfermería y Veterinaria).
                                            * Algunos trámites académicos.
                                            Una vez me digas, te doy el dato preciso."</ejemplo_respuesta>
                                    </caso>
                                </manejo_consultas>
                            </nodo_respaldo_general>
                        `,
					},
				],
			};
		}
	);
}