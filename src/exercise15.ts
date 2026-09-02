import fs from 'fs/promises';

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,);
  const rawComments = (await response.json()) as any[];
  const summaries: CommentSummary[] = rawComments.map((comment: any) => {
    return {
      postId: comment.postId,
      id: comment.id,
      commenterEmail: comment.email,
    };
  });

  const filteredSummaries = summaries.filter((comment) => !comment.commenterEmail.endsWith('.org'),);
  const jsonString = JSON.stringify(filteredSummaries, null, 2);
  await fs.writeFile(outputPath, jsonString, 'utf-8');
  return filteredSummaries.length;
}
