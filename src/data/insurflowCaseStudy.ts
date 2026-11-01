import type { StudyDecision } from '../components/CaseStudyParts';
// Current repository evidence describes team implementation, not individual authorship.
export const insurflowChapters: [string, string][] = [
  ['context', 'Business context'], ['workflow', 'Product workflow'], ['role', 'My role'],
  ['architecture', 'Architecture'], ['lessons', 'Lessons'],
];
export const insurflowArchitecture = [
  ['01 · Interface', 'Capture the context', 'Next.js and React provide the application UI. Household, income, and coverage information become inputs to a structured workflow.', 'Next.js · React · TypeScript'],
  ['02 · Application logic', 'Work with explicit assumptions', 'Route handlers load client records and related assets, debts, and policies. Financial modules calculate needs and return results with a trace of the calculation.', 'Route handlers · Financial modules'],
  ['03 · Persistence', 'Keep the domain connected', 'Drizzle schemas map clients and related financial records to PostgreSQL. The client model includes income, coverage, and replacement-duration fields.', 'Drizzle ORM · PostgreSQL'],
];
export const insurflowDecisions: StudyDecision[] = [
  { title: 'Model the information behind the estimate', problem: 'Income, existing coverage, assets, and debts represent different parts of a household’s financial picture.', decision: 'Use explicit client fields and related records, then assemble the inputs in the calculation route.', value: 'The workflow has a defined data model to build on. Changes to assumptions still need careful handling across forms, calculations, and documentation.' },
  { title: 'Separate calculation from generated prose', problem: 'A financial estimate and an explanation of it have different responsibilities.', decision: 'The calculation route calls financial logic. The letter endpoint gathers client data and calculated needs before requesting a generated “Reasons Why” letter.', value: 'The numerical result has an explicit calculation path. Generated documentation remains a draft requiring review; its existence does not establish regulatory approval.' },
];
