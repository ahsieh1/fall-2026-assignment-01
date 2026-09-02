import fs from 'fs';

export type StudentGrades = {
    [subject: string]: number;
  };

  export type Gradebook = {
    [studentName: string]: StudentGrades;
  };

export function calculateSubjectAverage(subject: string): number {
  const fileContent = fs.readFileSync('data/gradebook.json', 'utf-8');
  const gradebook: Gradebook = JSON.parse(fileContent);

  let totalScore = 0;
  let studentCount = 0;

  for (const studentGrades of Object.values(gradebook)) {
    if (subject in studentGrades) {
      totalScore += studentGrades[subject];
      studentCount++;
    }
  }

  return studentCount === 0 ? 0 : totalScore / studentCount;
}
