export function transcribeDNA(dna: string): string {
  let rna = '';

  for (const letter of dna) {
    if (letter === "A") {
      rna += "U";
    }
    else if (letter === "T") {
      rna += "A";
    }
    else if (letter === "C") {
      rna += "G";
    }
    else if (letter === "G") {
      rna += "C";
    }
  }
  
  return rna;
}

/* A -> U
T -> A
C -> G
G -> C */