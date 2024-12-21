// Flashcards data (30 cards)
let flashCards = [
  { question: "What is taxonomy?", answer: "The science of classifying organisms." },
  { question: "Define binomial nomenclature.", answer: "A two-word naming system for species." },
  { question: "What does 'monophyletic group' mean?", answer: "A group sharing a single common ancestor." },
  { question: "What is a holotype?", answer: "The specimen used as the standard for a species." },
  { question: "What is a paratype?", answer: "Specimens showing variations within a species." },
  { question: "Define synapomorphy.", answer: "A shared derived character found in all members of a group." },
  { question: "What is an outgroup?", answer: "A related taxon not included in the group being studied." },
  { question: "What is a species?", answer: "The smallest distinctive grouping of organisms." },
  { question: "What is bilateral symmetry?", answer: "A body plan where organisms have mirror-image halves." },
  { question: "What are the three major body symmetries?", answer: "Asymmetry, radial symmetry, and bilateral symmetry." },
  { question: "What is diploblastic organization?", answer: "Body layers derived from two embryonic tissues." },
  { question: "Name the layers in diploblastic organisms.", answer: "Ectoderm, mesoglea, and endoderm." },
  { question: "Define triploblastic organization.", answer: "Organisms with three layers: ectoderm, mesoderm, and endoderm." },
  { question: "What are Eumetazoa?", answer: "Animals with true tissues." },
  { question: "Define paraphyletic group.", answer: "A group excluding some descendants of a common ancestor." },
  { question: "What is the significance of mesoderm?", answer: "It gives rise to muscles, bones, and connective tissues." },
  { question: "What is the largest taxonomic rank?", answer: "Kingdom." },
  { question: "What is the smallest taxonomic rank?", answer: "Species." },
  { question: "Define numerical taxonomy.", answer: "Statistical methods used to classify organisms." },
  { question: "What is the role of comparative morphology?", answer: "Studying structural similarities to determine relatedness." },
  { question: "What is the fossil record?", answer: "Preserved remains of organisms used for phylogenetic studies." },
  { question: "What is the significance of the genus?", answer: "It groups closely related species." },
  { question: "What does 'phylogeny' mean?", answer: "The evolutionary history of a species or group." },
  { question: "What is a derived character?", answer: "A trait that has arisen since the common ancestor." },
  { question: "What is a cladogram?", answer: "A diagram showing evolutionary relationships." },
  { question: "What is asymmetry?", answer: "The absence of a central axis or point." },
  { question: "What is radial symmetry?", answer: "Body parts arranged around a central axis." },
  { question: "What is the advantage of bilateral symmetry?", answer: "Allows directional movement and cephalization." },
  { question: "Name an example of a monophyletic group.", answer: "Mammals." },
  { question: "Name an example of a polyphyletic group.", answer: "Marine mammals (e.g., whales and seals)." },
];

// Function to start Flashcards
function startFlashCards() {
  const content = document.getElementById("content");
  currentCardIndex = 0;
  showFlashCard(content);
}

function showFlashCard(content) {
  if (currentCardIndex < flashCards.length) {
    const card = flashCards[currentCardIndex];
    content.innerHTML = `
      <h2>Flashcards</h2>
      <p>${card.question}</p>
      <button onclick="showAnswer()">Show Answer</button>
    `;
  } else {
    content.innerHTML = "<p>All questions are completed!</p>";
  }
}

function showAnswer() {
  const content = document.getElementById("content");
  const card = flashCards[currentCardIndex];
  content.innerHTML += `<p><strong>Answer:</strong> ${card.answer}</p>`;
  currentCardIndex++;
  content.innerHTML += `<button onclick="nextFlashCard()">Next Question</button>`;
}

function nextFlashCard() {
  const content = document.getElementById("content");
  showFlashCard(content);
}


// MCQ data (20 questions)
let mcqQuestions = [
  { question: "Who is the father of modern taxonomy?", options: ["Charles Darwin", "Carolus Linnaeus", "Gregor Mendel", "Jean-Baptiste Lamarck"], correct: "Carolus Linnaeus" },
  { question: "Which rank is broader than genus?", options: ["Species", "Family", "Class", "Order"], correct: "Family" },
  { question: "What does 'monophyletic group' mean?", options: ["Single ancestor", "No ancestor", "Multiple ancestors", "Excluding descendants"], correct: "Single ancestor" },
  { question: "What is a holotype?", options: ["A specimen representing a group", "A typical specimen for a species", "A name for extinct organisms", "An outlier specimen"], correct: "A typical specimen for a species" },
  { question: "What is radial symmetry?", options: ["Body parts around a central axis", "Mirror-image halves", "Asymmetry", "Centralized structure"], correct: "Body parts around a central axis" },
  { question: "What is the significance of the genus?", options: ["It groups closely related species.", "It indicates fossil ancestry.", "It replaces species-level classification.", "It contains only one organism."], correct: "It groups closely related species." },
  { question: "What does phylogeny mean?", options: ["Evolutionary history of a species", "The name of a fossil", "A geological term", "A genetic mutation"], correct: "Evolutionary history of a species" },
  { question: "What is a derived character?", options: ["A trait that arises after a common ancestor", "An ancestral trait", "An unrelated trait", "A non-genetic characteristic"], correct: "A trait that arises after a common ancestor" },
  { question: "What is a cladogram?", options: ["A diagram of evolutionary relationships", "A fossil record", "A genetic sequence", "A type of organism"], correct: "A diagram of evolutionary relationships" },
  { question: "What is the largest taxonomic rank?", options: ["Genus", "Kingdom", "Order", "Family"], correct: "Kingdom" },
  { question: "What is the smallest taxonomic rank?", options: ["Species", "Class", "Family", "Phylum"], correct: "Species" },
  { question: "Define synapomorphy.", options: ["A shared derived character", "An ancestral trait", "A unique mutation", "A non-genetic characteristic"], correct: "A shared derived character" },
  { question: "What is diploblastic organization?", options: ["Body with two tissue layers", "Body with three tissue layers", "Body with one tissue layer", "No tissue layers"], correct: "Body with two tissue layers" },
  { question: "What is triploblastic organization?", options: ["Body with three layers", "Body with two layers", "Body with one layer", "No layers"], correct: "Body with three layers" },
  { question: "What does radial symmetry mean?", options: ["Symmetry around a central axis", "Mirror-image halves", "No symmetry", "Symmetry along the head-tail axis"], correct: "Symmetry around a central axis" },
  { question: "What is asymmetry?", options: ["Absence of a central axis", "Mirror-image halves", "Symmetry around a central point", "Directional symmetry"], correct: "Absence of a central axis" },
  { question: "What is bilateral symmetry?", options: ["Mirror-image halves", "No symmetry", "Symmetry along a central axis", "Symmetry in all directions"], correct: "Mirror-image halves" },
  { question: "What is the purpose of a phylogenetic tree?", options: ["Show evolutionary lineages", "Display genetic mutations", "Classify fossils", "Identify environmental factors"], correct: "Show evolutionary lineages" },
  { question: "What is the advantage of bilateral symmetry?", options: ["Directional movement", "Random movement", "Floating ability", "Nutrient absorption"], correct: "Directional movement" },
  { question: "What is the function of the mesoderm?", options: ["Forms muscles and bones", "Forms skin only", "Forms brain tissue", "No function"], correct: "Forms muscles and bones" },
];

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentMCQIndex = 0;

// Function to start MCQs
function startMCQ() {
  const content = document.getElementById("content");
  currentMCQIndex = 0;
  mcqQuestions = shuffleArray(mcqQuestions); // Shuffle the questions
  showMCQ(content);
}

// Function to display a single MCQ
function showMCQ(content) {
  if (currentMCQIndex < mcqQuestions.length) {
    const question = mcqQuestions[currentMCQIndex];
    const optionsHTML = question.options
      .map((option) => `<button onclick="checkAnswer('${option}')">${option}</button>`)
      .join("");
    content.innerHTML = `
      <h2>Multiple Choice Questions (MCQ)</h2>
      <p>${question.question}</p>
      ${optionsHTML}
    `;
  } else {
    content.innerHTML = "<p>All questions are completed!</p>";
  }
}

// Function to check the answer
function checkAnswer(selected) {
  const question = mcqQuestions[currentMCQIndex];
  const content = document.getElementById("content");

  // Display feedback for the selected answer
  if (selected === question.correct) {
    content.innerHTML += `<p style="color:green;">Correct Answer!</p>`;
  } else {
    content.innerHTML += `<p style="color:red;">Wrong Answer. The correct answer is: ${question.correct}</p>`;
  }

  // Move to the next question
  currentMCQIndex++;
  content.innerHTML += `<button onclick="showMCQ(document.getElementById('content'))">Next Question</button>`;
}

// Function to return to the home page
function backToHome() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <p>Choose an activity to start learning:</p>
    <button onclick="startFlashCards()">Flashcards</button>
    <button onclick="startMCQ()">Multiple Choice Questions</button>
    <br><br>
    <button onclick="openPDF()">Open Taxonomy PDF</button>
  `;
}

// Function to open the PDF
function openPDF() {
  window.open('https://drive.google.com/file/d/1A4SmXY8evuLtBHWhMImeiGhKnJNb5J_8/view?usp=drive_link', '_blank');
}
