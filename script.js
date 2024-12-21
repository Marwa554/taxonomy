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

// MCQ data (40 questions)
let mcqQuestions = [
  { question: "Who is the father of modern taxonomy?", options: ["Charles Darwin", "Carolus Linnaeus", "Gregor Mendel", "Jean-Baptiste Lamarck"], correct: "Carolus Linnaeus" },
  { question: "Which rank is broader than genus?", options: ["Species", "Family", "Class", "Order"], correct: "Family" },
  { question: "What does 'monophyletic group' mean?", options: ["Single ancestor", "No ancestor", "Multiple ancestors", "Excluding descendants"], correct: "Single ancestor" },
  { question: "What is a holotype?", options: ["A specimen representing a group", "A typical specimen for a species", "A name for extinct organisms", "An outlier specimen"], correct: "A typical specimen for a species" },
  { question: "What is radial symmetry?", options: ["Body parts around a central axis", "Mirror-image halves", "Asymmetry", "Centralized structure"], correct: "Body parts around a central axis" },
  // Add more questions here (total 40)
];

let currentMCQIndex = 0;

// Function to start MCQs
function startMCQ() {
  const content = document.getElementById("content");
  currentMCQIndex = 0;
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
