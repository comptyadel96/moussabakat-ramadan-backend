const questions = [
  {
    question: {
      fr: "Question numéro 1",
      ar: "السؤال رقم 1",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 1,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 1,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 1,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 2",
      ar: "السؤال رقم 2",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 2,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 3",
      ar: "السؤال رقم 3",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 3,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 4",
      ar: "السؤال رقم 4",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 4,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 5",
      ar: "السؤال رقم 5",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 5,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 6",
      ar: "السؤال رقم 6",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 6,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 7",
      ar: "السؤال رقم 7",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 7,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 8",
      ar: "السؤال رقم 8",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 8,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 9",
      ar: "السؤال رقم 9",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 9,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 10",
      ar: "السؤال رقم 10",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 10,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 11",
      ar: "السؤال رقم 11",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 11,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 12",
      ar: "السؤال رقم 12",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 12,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 13",
      ar: "السؤال رقم 13",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 13,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 14",
      ar: "السؤال رقم 14",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 14,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 15",
      ar: "السؤال رقم 15",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 15,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 16",
      ar: "السؤال رقم 16",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 16,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 17",
      ar: "السؤال رقم 17",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 17,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 18",
      ar: "السؤال رقم 18",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 18,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 19",
      ar: "السؤال رقم 19",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 19,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 20",
      ar: "السؤال رقم 20",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 20,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 21",
      ar: "السؤال رقم 21",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 21,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 22",
      ar: "السؤال رقم 22",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 22,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 23",
      ar: "السؤال رقم 23",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 23,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 24",
      ar: "السؤال رقم 24",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 24,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 25",
      ar: "السؤال رقم 25",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 25,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 26",
      ar: "السؤال رقم 26",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 26,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 27",
      ar: "السؤال رقم 27",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 27,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
  {
    question: {
      fr: "Question numéro 28",
      ar: "السؤال رقم 1",
    },
    propositions: [
      { isTrue: true, text: { fr: "La bonne réponse", ar: "الإجابة الصحيحة" } },
      { text: { fr: "Suggestion 1", ar: "اقتراح 1" } },
      { text: { fr: "Suggestion 2", ar: "اقتراح 2" } },
      { text: { fr: "Suggestion 3", ar: "اقتراح 3" } },
    ],
    id: 28,
    questionsSecondaires: [
      {
        id: 1,
        question: "Question secondaire 1",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 2,
        question: "Question secondaire 2",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
      {
        id: 3,
        question: "Question secondaire 3",
        propositions: [
          { isTrue: true, text: "La bonne réponse" },
          { text: "suggestion 1" },
          { text: "suggestion 2" },
        ],
      },
    ],
  },
]
module.exports = questions
