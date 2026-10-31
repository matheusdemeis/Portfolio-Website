import type { StudyDecision } from '../components/CaseStudyParts';
// Source snapshot and attribution boundaries: docs/portfolio-phase-3b-report.md.
export const tandemChapters: [string, string][] = [
  ['problem', 'The problem'], ['discovery', 'Discovery'], ['solution', 'The product'],
  ['contribution', 'My contribution'], ['decisions', 'Decisions'], ['teamwork', 'Teamwork'], ['reflection', 'Reflection'],
];
export const tandemJourney = [
  ['Capture the work week', 'Upload a PDF, record a voice description, or enter a schedule manually. Different starting points feed the scheduling workflow.'],
  ['Review the details', 'The schedule overview exposes working days, daily hours, location, and notes for review and editing. The voice path currently saves before opening this overview.'],
  ['Plan care around work', 'Saved schedules feed calendar views. The caregiver booking interface includes daily care needs and an option to make a booking available for nanny sharing.'],
];
export const tandemDecisions: StudyDecision[] = [
  { title: 'Two inputs, one scheduling vocabulary', problem: 'A PDF and a spoken description carry the same information in very different forms.', decision: 'Extract PDF text with pdf-parse; transcribe audio with Groq Whisper. Ask a language model to return weekday codes and per-day time ranges as JSON.', value: 'The interface can work with structured schedule fields instead of interpreting each original input format.' },
  { title: 'Check the output, acknowledge the defaults', problem: 'Model output can omit days, misread hours, or fail to produce usable JSON.', decision: 'The PDF path checks missing, malformed, equal, and reversed time ranges. The voice path normalizes day names and checks its resulting schedule; it also contains presentation fallback data.', value: 'These are prototype safeguards. Default hours and fallback schedules still require review; stronger schema validation and explicit uncertainty would be the next step.' },
  { title: 'Keep extraction separate from saving', problem: 'An extracted schedule is not yet a confirmed work week.', decision: 'Parsing routes return schedule data. A separate save route checks required schedule fields, resolves the week, and writes per-day times through Drizzle.', value: 'The database retains different hours for different days. The voice client currently calls save before review; consistently requiring confirmation and strengthening save validation remain improvements.' },
];
