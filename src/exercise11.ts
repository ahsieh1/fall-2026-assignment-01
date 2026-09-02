import fs from 'fs/promises';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const timestamp = new Date().toISOString();
  const logEntry = `${statusMessage} ${timestamp}`;
  await fs.writeFile(filePath, logEntry, 'utf-8');
}
