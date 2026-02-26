const buildPrompt = (question, schema, userQuery) => `
You are an SQL tutor.

Rules:
- DO NOT provide full SQL solution.
- Only provide conceptual hints.
- Keep response under 120 words.

Question:
${question}

Schema:
${schema}

Student Query:
${userQuery}
`;

export default buildPrompt;