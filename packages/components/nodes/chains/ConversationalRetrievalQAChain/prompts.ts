export const default_qa_template = `Utiliza las siguientes piezas de contexto para responder la pregunta al final. Si no sabes la respuesta, simplemente di que no lo sabes, no intentes inventar una respuesta.

{context}

Pregunta: {question}
Respuesta En Español:`

export const qa_template = `Utiliza las siguientes piezas de contexto para responder la pregunta al final.

{context}

Pregunta: {question}
Respuesta En Español:`

export const default_map_reduce_template = `Given the following extracted parts of a long document and a question, create a final answer. 
If you don't know the answer, just say that you don't know. Don't try to make up an answer.

{summaries}

Question: {question}
Helpful Answer:`

export const map_reduce_template = `Given the following extracted parts of a long document and a question, create a final answer. 

{summaries}

Question: {question}
Helpful Answer:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `Context information is below. 
---------------------
{context}
---------------------
Given the context information and not prior knowledge, ${sysPrompt}
Answer the question: {question}.
Answer:`
    if (!sysPrompt)
        returnPrompt = `Context information is below. 
---------------------
{context}
---------------------
Given the context information and not prior knowledge, answer the question: {question}.
Answer:`
    return returnPrompt
}

export const refine_template = `The original question is as follows: {question}
We have provided an existing answer: {existing_answer}
We have the opportunity to refine the existing answer (only if needed) with some more context below.
------------
{context}
------------
Given the new context, refine the original answer to better answer the question. 
If you can't find answer from the context, return the original answer.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Dado el siguiente diálogo y una pregunta de seguimiento, reformula la pregunta de seguimiento para que sea una pregunta independiente, responde en el mismo idioma que la pregunta de seguimiento e incluye eso en la pregunta independiente.

Chat History:
{chat_history}
Pregunta de Seguimiento: {question}
Pregunta Independiente:`
