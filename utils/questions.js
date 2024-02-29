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
        question: {
          fr: "De quel pays la tortilla est-elle le plat typique ?",
          ar: "من أي بلد تعتبر الطورتيلا الطبق التقليدي؟",
        },
        propositions: [
          { text: { fr: "Angleterre", ar: "انجلترا" } },
          { isTrue: true, text: { fr: "Espagne", ar: "إسبانيا" } },
          { text: { fr: "Portugal", ar: "البرتغال" } },
        ],
      },
      {
        id: 2,
        question: {
          fr: "La création du premier gouvernement algérien était en :",
          ar: "تأسيس أول حكومة جزائرية كان في:",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "29 Septembre 1962", ar: "29 سبتمبر 1962" },
          },
          { text: { fr: "25 Septembre 1962", ar: "25 سبتمبر 1962" } },
          { text: { fr: "20 Septembre 1962", ar: "20 سبتمبر 1962" } },
        ],
      },
      {
        id: 3,
        question: {
          fr: "Quelle chaîne de montagnes se situe en Algérie ?",
          ar: "في أي سلسلة جبلية تقع الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Atlas", ar: "أطلس" } },
          { text: { fr: "Dolomites", ar: "الدولوميت" } },
          { text: { fr: "Oural", ar: "الأورال" } },
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
        id: 4,
        question: {
          fr: "Quelle est la troisième plus grande ville d’Algérie après Alger et Oran ?",
          ar: "ما هي ثالث أكبر مدينة في الجزائر بعد الجزائر العاصمة ووهران؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Constantine", ar: "قسنطينة" } },
          { text: { fr: "Blida", ar: "البليدة" } },
          { text: { fr: "Tebessa", ar: "تبسة" } },
        ],
      },
      {
        id: 5,
        question: {
          fr: "Quel est le nom du fort qui surplombe la ville d’Oran ?",
          ar: "ما هو اسم القلعة التي تطل على مدينة وهران؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Fort de SantaCruz", ar: "قلعة سانتا كروز" },
          },
          { text: { fr: "Fort Tamenfoust", ar: "قلعة تامنفوست" } },
          { text: { fr: "Fort Abdelkader", ar: "قلعة عبد القادر" } },
        ],
      },
      {
        id: 6,
        question: {
          fr: "Je suis un combattant Algérien, né à El-quettana le 6 septembre 1808, et mort le 26 mai 1883, j'étais chef religieux et militaire algérien, je suis :",
          ar: "أنا مقاتل جزائري، ولدت في القطانة في 6 سبتمبر 1808، وتوفيت في 26 مايو 1883، كنت قائدًا دينيًا وعسكريًا جزائريًا، من أنا؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "El-amir abdelkader", ar: "الأمير عبد القادر" },
          },
          { text: { fr: "Cheikh bouamama", ar: "الشيخ بوعمامة" } },
          { text: { fr: "Messali el-hadj", ar: "مسعي الحاج" } },
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
        id: 7,
        question: {
          fr: "Qui est le réalisateur du film Titanic ?",
          ar: "من هو مخرج فيلم تيتانيك؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "James Cameron", ar: "جيمس كاميرون" } },
          { text: { fr: "Martin Scorsese", ar: "مارتن سكورسيزي" } },
          { text: { fr: "Steven Spielberg", ar: "ستيفن سبيلبرغ" } },
        ],
      },
      {
        id: 8,
        question: {
          fr: "أنا سمّيت قُرية بأن يكون لي إسم...؟",
          ar: "أنا سمّيت قُرية بأن يكون لي إسم...؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "على بصلة", ar: "على بصلة" } },
          { text: { fr: "على طماطم", ar: "على طماطم" } },
          { text: { fr: "على خيار", ar: "على خيار" } },
        ],
      },
      {
        id: 9,
        question: {
          fr: "Le Film 'el Harik dar sbitar' de Mustapha Badie est sortie en ...",
          ar: "فيلم 'الحارق دار صبيتر' لمصطفى بادي صدر في ...",
        },
        propositions: [
          { isTrue: true, text: { fr: "1974", ar: "1974" } },
          { text: { fr: "1973", ar: "1973" } },
          { text: { fr: "1980", ar: "1980" } },
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
        id: 10,
        question: {
          fr: "Quel le vrai nom de 'Rouiched'?",
          ar: "ما هو الاسم الحقيقي لـ 'رويشد'؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Yahia Benmabrouk", ar: "يحيى بن مبروك" },
          },
          { text: { fr: "Ahmed Ayed", ar: "أحمد عايد" } },
          { text: { fr: "Mohamed Zinet", ar: "محمد زينات" } },
        ],
      },
      {
        id: 11,
        question: {
          fr: "Le plat « SAKRAN TAYEH FI DROUDJ » est préparé à base de…",
          ar: "طبق 'سكران تايه في درودج' محضر من...",
        },
        propositions: [
          { isTrue: true, text: { fr: "Viande de mouton", ar: "لحم الغنم" } },
          { text: { fr: "Viande de poulet", ar: "لحم الدجاج" } },
          { text: { fr: "Merlan", ar: "سمك مرلان" } },
        ],
      },
      {
        id: 12,
        question: {
          fr: "الشيء الذي ينحدر...؟",
          ar: "الشيء الذي ينحدر...؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "الملح", ar: "الملح" } },
          { text: { fr: "الورد", ar: "الورد" } },
          { text: { fr: "السكر", ar: "السكر" } },
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
        id: 13,
        question: {
          fr: "Dans quel océan se trouve le triangle de Bermudes ?",
          ar: "في أي محيط يقع مثلث برمودا؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "L'océan Atlantique", ar: "المحيط الأطلسي" },
          },
          { text: { fr: "L'océan Indien", ar: "المحيط الهندي" } },
          { text: { fr: "L'océan Pacifique", ar: "المحيط الهادي" } },
        ],
      },
      {
        id: 14,
        question: {
          fr: "Le mot tajine est d’origine…",
          ar: "كلمة طاجين مشتقة من...",
        },
        propositions: [
          { isTrue: true, text: { fr: "Berbère", ar: "بربري" } },
          { text: { fr: "Arabe", ar: "عربي" } },
          { text: { fr: "Espagnole", ar: "إسباني" } },
        ],
      },
      {
        id: 15,
        question: {
          fr: "Le curry est…",
          ar: "الكاري هو...",
        },
        propositions: [
          {
            isTrue: true,
            text: {
              fr: "Un mélange d’épices originaire d’Inde",
              ar: "خليط من التوابل من الهند",
            },
          },
          { text: { fr: "Le nom d'une graine indienne", ar: "اسم حبة هندية" } },
          {
            text: {
              fr: "Une plante indienne réduite en poudre",
              ar: "نبات هندي يُطحن إلى مسحوق",
            },
          },
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
        id: 16,
        question: {
          fr: "De quelle région est originaire la Djouzia aux noix ?",
          ar: "من أي منطقة تأتي الجوزية؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Constantine", ar: "قسنطينة" } },
          { text: { fr: "Annaba", ar: "عنابة" } },
          { text: { fr: "Tlemcen", ar: "تلمسان" } },
        ],
      },
      {
        id: 17,
        question: {
          fr: "En quelle année Walt Disney est-il né ?",
          ar: "في أي عام ولد والت ديزني؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "1901", ar: "1901" } },
          { text: { fr: "1885", ar: "1885" } },
          { text: { fr: "1900", ar: "1900" } },
        ],
      },
      {
        id: 18,
        question: {
          fr: "Selon les enseignements du Prophète Muhammad SWS, quelle est la meilleure forme de jihad ?",
          ar: "بحسب تعاليم النبي محمد صلى الله عليه وسلم، ما هو أفضل شكل من أشكال الجهاد؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Jihad intérieur", ar: "الجهاد الداخلي" },
          },
          { text: { fr: "Jihad militaire", ar: "الجهاد العسكري" } },
          { text: { fr: "Jihad social", ar: "الجهاد الاجتماعي" } },
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
        id: 18,
        question: {
          fr: "Quel ingrédient ne figure pas dans la recette traditionnelle des « makrout aux dattes » ?",
          ar: "ما هو المكون الذي لا يوجد في وصفة المقروط بالتمر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Sel", ar: "الملح" } },
          { text: { fr: "Sucre", ar: "السكر" } },
          { text: { fr: "Fleur d'oranger", ar: "زهر البرتقال" } },
        ],
      },
      {
        id: 19,
        question: {
          fr: "Quel pays propose un plat spécifique à base de Dôner aux légumes ?",
          ar: "أي بلد يقدم طبقًا خاصًا من الدونر بالخضار؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Turquie", ar: "تركيا" } },
          { text: { fr: "Grèce", ar: "اليونان" } },
          { text: { fr: "Chine", ar: "الصين" } },
        ],
      },
      {
        id: 20,
        question: {
          fr: "Le « Tlitli » est un plat à base de ...",
          ar: "التليتلي هو طبق من...",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Pâte de langue d'oiseau", ar: "عجينة من لسان الطائر" },
          },
          { text: { fr: "Pâte de semoule", ar: "عجينة من السميد" } },
          { text: { fr: "Pâte de Kessra", ar: "عجينة من الكسرة" } },
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
        id: 21,
        question: {
          fr: "Quel est le nom de la série dont l'histoire tourne autour d'une fille issue d'une famille conservatrice qui tombe amoureuse d'un riche homme et déménage pour vivre dans une autre ville et se retrouve dans des situations inattendues ?",
          ar: "ما هو اسم المسلسل الذي تدور قصته حول فتاة تنتمي إلى عائلة محافظة تقع في حب رجل ثري وتنتقل للعيش في مدينة أخرى وتجد نفسها في مواقف غير متوقعة؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Nas mlah city", ar: "ناس ملاح سيتي" } },
          { text: { fr: "Chafika", ar: "شفيقة" } },
          { text: { fr: "El badra", ar: "البدرة" } },
        ],
      },
      {
        id: 22,
        question: {
          fr: "Dans quel pays peut-on trouver la Catalogne, l’Andalousie et la Castille?",
          ar: "في أي بلد يمكن العثور على كتالونيا وأندلوسيا وكاستيا؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "ESPAGNE", ar: "إسبانيا" } },
          { text: { fr: "PORTUGAL", ar: "البرتغال" } },
          { text: { fr: "ITALIE", ar: "إيطاليا" } },
        ],
      },
      {
        id: 23,
        question: {
          fr: "Quel pays a remporté la coupe du monde de football en 2014 ?",
          ar: "أي بلد فاز بكأس العالم لكرة القدم في عام 2014؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "ALLEMAGNE", ar: "ألمانيا" } },
          { text: { fr: "ITALIE", ar: "إيطاليا" } },
          { text: { fr: "ARGENTINE", ar: "الأرجنتين" } },
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
        id: 24,
        question: {
          fr: "Dans quel pays s’est déroulé la toute première Coupe du Monde de football en1930?",
          ar: "في أي بلد أقيمت أول كأس العالم لكرة القدم في عام 1930؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "URUGUAY", ar: "أوروغواي" } },
          { text: { fr: "ETATS UNIS", ar: "الولايات المتحدة" } },
          { text: { fr: "FRANCE", ar: "فرنسا" } },
        ],
      },
      {
        id: 25,
        question: {
          fr: "Combien de fois le Brésil a-t-il remporté la Coupe du Monde de foot ?",
          ar: "كم مرة فاز المنتخب البرازيلي بكأس العالم؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "5 FOIS", ar: "5 مرات" } },
          { text: { fr: "6 FOIS", ar: "6 مرات" } },
          { text: { fr: "3 FOIS", ar: "3 مرات" } },
        ],
      },
      {
        id: 26,
        question: {
          fr: "شيء يتحدث عنه القرآن ويغنى له",
          ar: "شيء يتحدث عنه القرآن ويغنى له",
        },
        propositions: [
          { isTrue: true, text: { fr: "قرين", ar: "قرين" } },
          { text: { fr: "داري", ar: "داري" } },
          { text: { fr: "ولدي", ar: "ولدي" } },
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
        id: 27,
        question: {
          fr: "بات مع العمر يكبر و بالأيام ...",
          ar: "بات مع العمر يكبر و بالأيام ...",
        },
        propositions: [
          { isTrue: true, text: { fr: "يقل", ar: "يقل" } },
          { text: { fr: "يكثر", ar: "يكثر" } },
          { text: { fr: "يصفر", ar: "يصفر" } },
        ],
      },
      {
        id: 28,
        question: {
          fr: "الله جعل شيء في الصدر، قل...",
          ar: "الله جعل شيء في الصدر، قل...",
        },
        propositions: [
          { isTrue: true, text: { fr: "ينبض", ar: "ينبض" } },
          { text: { fr: "يمل", ar: "يمل" } },
          { text: { fr: "ينوض", ar: "ينوض" } },
        ],
      },
      {
        id: 29,
        question: {
          fr: "Au Judo, quelle ceinture est réservée aux débutants ?",
          ar: "في الجودو، ما هو لون الحزام المخصص للمبتدئين؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Blanche", ar: "أبيض" } },
          { text: { fr: "Jaune", ar: "أصفر" } },
          { text: { fr: "Rouge", ar: "أحمر" } },
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
        id: 30,
        question: {
          fr: "En quelle année l'équipe nationale a gagné le match contre l'Allemagne lors d’une coupe du monde ?",
          ar: "في أي سنة فاز المنتخب الوطني بالمباراة ضد ألمانيا في كأس العالم؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "1982", ar: "1982" } },
          { text: { fr: "1980", ar: "1980" } },
          { text: { fr: "2014", ar: "2014" } },
        ],
      },
      {
        id: 31,
        question: {
          fr: "El harira est un plat populaire dans laquelle de ces régions ?",
          ar: "الحريرة هو طبق شعبي في أي من هذه المناطق؟",
        },
        propositions: [
          { text: { fr: "Tlemcen", ar: "تلمسان" } },
          { isTrue: true, text: { fr: "Oran", ar: "وهران" } },
          { text: { fr: "Alger", ar: "الجزائر" } },
        ],
      },
      {
        id: 32,
        question: {
          fr: "Quel est le surnom de l’équipe nationale de football algérienne ?",
          ar: "ما هو لقب المنتخب الوطني لكرة القدم الجزائري؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Les Fennecs", ar: "الفهود" } },
          { text: { fr: "Les lions", ar: "الأسود" } },
          { text: { fr: "Les coqs", ar: "الديكة" } },
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
        id: 33,
        question: {
          fr: "Quel pays organisera les jeux olympiques 2024 ?",
          ar: "أي بلد سينظم دورة الألعاب الأولمبية 2024؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "France", ar: "فرنسا" } },
          { text: { fr: "Espagne", ar: "إسبانيا" } },
          { text: { fr: "Suède", ar: "السويد" } },
        ],
      },
      {
        id: 34,
        question: {
          fr: "Quel jour est né le prophète SWS ?",
          ar: "أي يوم ولد النبي؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Lundi", ar: "الإثنين" } },
          { text: { fr: "Vendredi", ar: "الجمعة" } },
          { text: { fr: "Mercredi", ar: "الأربعاء" } },
        ],
      },
      {
        id: 35,
        question: {
          fr: "A quel âge est mort le prophète SWS ?",
          ar: "في أي سنة توفي النبي؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "73 ans", ar: "73 سنة" } },
          { text: { fr: "63 ans", ar: "63 سنة" } },
          { text: { fr: "53 ans", ar: "53 سنة" } },
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
        id: 36,
        question: {
          fr: "Comment s'appelle le père du prophète SWS ?",
          ar: "ما اسم والد النبي؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Abdellah", ar: "عبد الله" } },
          { text: { fr: "Abdelrahman", ar: "عبد الرحمن" } },
          { text: { fr: "Aboulahab", ar: "أبو لهب" } },
        ],
      },
      {
        id: 37,
        question: {
          fr: "Combien de porte y a-t- il en enfer ?",
          ar: "كم باب في النار؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "7", ar: "7" } },
          { text: { fr: "3", ar: "3" } },
          { text: { fr: "5", ar: "5" } },
        ],
      },
      {
        id: 38,
        question: {
          fr: "Quel est le mois le plus sacré de l'année pour les musulmans ?",
          ar: "ما هو أقدس شهر في السنة بالنسبة للمسلمين؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Dou el hidja", ar: "ذو الحجة" } },
          { text: { fr: "Ramadhan", ar: "رمضان" } },
          { text: { fr: "Chouwal", ar: "شوال" } },
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
        id: 39,
        question: {
          fr: "Quelle est la sourat la plus Courte ?",
          ar: "ما هي أقصر سورة؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Al ikhlas", ar: "الإخلاص" } },
          { text: { fr: "Al kawtar", ar: "الكوثر" } },
          { text: { fr: "Al fatiha", ar: "الفاتحة" } },
        ],
      },
      {
        id: 40,
        question: {
          fr: "Comment s'appelle le premier musulman à avoir fait l'appel à la prière ?",
          ar: "ما اسم أول مؤذن؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Bilal", ar: "بلال" } },
          { text: { fr: "Sofiane", ar: "سفيان" } },
          { text: { fr: "Hamza", ar: "حمزة" } },
        ],
      },
      {
        id: 41,
        question: {
          fr: "Combien de sourat y a-t-il dans le saint coran ?",
          ar: "كم سورة في القرآن الكريم؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "114", ar: "114" } },
          { text: { fr: "203", ar: "203" } },
          { text: { fr: "120", ar: "120" } },
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
        id: 42,
        question: {
          fr: "En quelle année la 2eme guerre mondial a pris fin ?",
          ar: "في أي سنة انتهت الحرب العالمية الثانية؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "1945", ar: "1945" } },
          { text: { fr: "1918", ar: "1918" } },
          { text: { fr: "1939", ar: "1939" } },
        ],
      },
      {
        id: 43,
        question: {
          fr: "Dans quel pays est né Adolf HITLER ?",
          ar: "في أي بلد ولد أدولف هتلر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Autriche", ar: "النمسا" } },
          { text: { fr: "Allemagne", ar: "ألمانيا" } },
          { text: { fr: "France", ar: "فرنسا" } },
        ],
      },
      {
        id: 44,
        question: {
          fr: "En quelle année a débuté la guerre d'Algérie ?",
          ar: "في أي سنة بدأت حرب الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "1954", ar: "1954" } },
          { text: { fr: "1956", ar: "1956" } },
          { text: { fr: "1962", ar: "1962" } },
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
        id: 45,
        question: {
          fr: "Quel General commande l'armée française pendant la bataille d’Alger ?",
          ar: "أي جنرال قاد الجيش الفرنسي خلال معركة الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Massu", ar: "ماسو" } },
          { text: { fr: "Charles de Gaulle", ar: "شارل ديغول" } },
          { text: { fr: "Le Pen", ar: "لو بان" } },
        ],
      },
      {
        id: 46,
        question: {
          fr: "Quel est le nom de l'accord qui met fin à la guerre d'Algérie ?",
          ar: "ما هو اسم الاتفاق الذي أنهى حرب الجزائر؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Accords d'Évian", ar: "اتفاقيات إيفيان" },
          },
          { text: { fr: "Accords de la Soummam", ar: "اتفاقيات السومام" } },
          { text: { fr: "Accords de la paix", ar: "اتفاقيات السلام" } },
        ],
      },
      {
        id: 47,
        question: {
          fr: "Quel est le nom du mouvement de résistance français qui s'oppose à l'indépendance de l'Algérie ?",
          ar: "ما هو اسم الحركة الفرنسية المقاومة التي تعارض استقلال الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "OAS", ar: "OAS" } },
          { text: { fr: "FLN", ar: "جبهة التحرير الوطني" } },
          { text: { fr: "MNA", ar: "المنظمة الوطنية للجزائريين" } },
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
        id: 48,
        question: {
          fr: "Quel est le nom du mouvement indépendantiste algérien qui a mené la guerre d'Algérie ?",
          ar: "ما هو اسم الحركة الجزائرية المستقلة التي قادت حرب الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "FLN", ar: "جبهة التحرير الوطني" } },
          { text: { fr: "MNA", ar: "المنظمة الوطنية للجزائريين" } },
          { text: { fr: "OAS", ar: "OAS" } },
        ],
      },
      {
        id: 49,
        question: {
          fr: "Quel est le nom de l'organisation terroriste algérienne qui a mené la guerre civile algérienne des années 1990 ?",
          ar: "ما هو اسم المنظمة الإرهابية الجزائرية التي قادت الحرب الأهلية الجزائرية في التسعينيات؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "GIA", ar: "المجموعة الإسلامية المسلحة" },
          },
          { text: { fr: "FIS", ar: "الجبهة الإسلامية للإنقاذ" } },
          { text: { fr: "AIS", ar: "الجماعة الإسلامية السلفية" } },
        ],
      },
      {
        id: 50,
        question: {
          fr: "Quel est le pays qui a lancé l'attaque de Pearl Harbor en 1941 ?",
          ar: "ما هي البلد التي شنت هجوم بيرل هاربر في عام 1941؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Le Japon", ar: "اليابان" } },
          { text: { fr: "L'Allemagne", ar: "ألمانيا" } },
          { text: { fr: "L'Italie", ar: "إيطاليا" } },
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
        id: 51,
        question: {
          fr: "Quel est le nom du traité qui a mis fin à la Première Guerre mondiale ?",
          ar: "ما هو اسم المعاهدة التي أنهت الحرب العالمية الأولى؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Le traité de Versailles", ar: "معاهدة فيرساي" },
          },
          { text: { fr: "Le traité de Berlin", ar: "معاهدة برلين" } },
          { text: { fr: "Le traité de Yalta", ar: "معاهدة يالطا" } },
        ],
      },
      {
        id: 52,
        question: {
          fr: "Quel âge auront les habitants du paradis ?",
          ar: "ما هو عمر سكان الجنة؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "33 ans", ar: "33 سنة" } },
          { text: { fr: "30 ans", ar: "30 سنة" } },
          { text: { fr: "44 ans", ar: "44 سنة" } },
        ],
      },
      {
        id: 53,
        question: {
          fr: "Quel prophète a herité de la moitié de la beauté sur terre ?",
          ar: "أي نبي ورث نصف جمال الأرض؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Youcef", ar: "يوسف" } },
          { text: { fr: "Ishak", ar: "إسحاق" } },
          { text: { fr: "Younes", ar: "يونس" } },
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
        id: 54,
        question: {
          fr: "Combien de prophètes sont cités dans le coran ?",
          ar: "كم عدد الأنبياء الذين ذكروا في القرآن؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "25", ar: "25" } },
          { text: { fr: "18", ar: "18" } },
          { text: { fr: "20", ar: "20" } },
        ],
      },
      {
        id: 55,
        question: {
          fr: "Quelle est la capitale de la Thaïlande ?",
          ar: "ما هي عاصمة تايلاند؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "BANGKOK", ar: "بانكوك" } },
          { text: { fr: "KUALA LAMPUR", ar: "كوالالمبور" } },
          { text: { fr: "PEKIN", ar: "بكين" } },
        ],
      },
      {
        id: 56,
        question: {
          fr: "Quelle est la hauteur à la pointe de l’Everest ?",
          ar: "ما هو ارتفاع قمة إفرست؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "8849 m", ar: "8849 متر" } },
          { text: { fr: "9349 m", ar: "9349 متر" } },
          { text: { fr: "8249 m", ar: "8249 متر" } },
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
        id: 57,
        question: {
          fr: "كل شيء يتعلق بالرأس، تصل إلى الرأس",
          ar: "كل شيء يتعلق بالرأس، تصل إلى الرأس",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﻏﻨﻲ", ar: "ﻏﻨﻲ" } },
          { text: { fr: "أرﻗﺪ", ar: "أرﻗﺪ" } },
          { text: { fr: "أﺣﺴﺐ", ar: "أﺣﺴﺐ" } },
        ],
      },
      {
        id: 58,
        question: {
          fr: "Quel pays a accueilli les premiers Jeux Olympiques modernes en 1896 ?",
          ar: "أي بلد استضاف أولمبياد العصر الحديث في 1896؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "GRECE(Athènes)", ar: "اليونان (أثينا)" },
          },
          { text: { fr: "ANGLETERRE(Londres)", ar: "إنجلترا (لندن)" } },
          { text: { fr: "ALLEMAGNE(Berlin)", ar: "ألمانيا (برلين)" } },
        ],
      },
      {
        id: 59,
        question: {
          fr: "ذكاء يسعى دائمًا ...",
          ar: "ذكاء يسعى دائمًا ...",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﺿﯿﻊ ﺗﺴﻌﺔ", ar: "ﺿﯿﻊ ﺗﺴﻌﺔ" } },
          { text: { fr: "ﺿﯿﻊ ﻋﺸﺮة", ar: "ﺿﯿﻊ ﻋﺸﺮة" } },
          { text: { fr: "ﺿﯿﻊ ﺗﻤﺎﻧﯿﺔ", ar: "ﺿﯿﻊ ﺗﻤﺎﻧﯿﺔ" } },
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
        id: 60,
        question: {
          fr: "En quelle année Nelson Mandela devient-il le premier président noir d’Afrique du Sud ?",
          ar: "في أي سنة أصبح نيلسون مانديلا أول رئيس أسود لجنوب أفريقيا؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "1994", ar: "1994" } },
          { text: { fr: "1998", ar: "1998" } },
          { text: { fr: "1990", ar: "1990" } },
        ],
      },
      {
        id: 61,
        question: {
          fr: "« 3ssidat zgougou » est un dessert tunisien à base de quel ingrédient principal ?",
          ar: "« 3ssidat zgougou » هو حلوى تونسية مصنوعة من أي مكون رئيسي؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Graines de pin", ar: "بذور الصنوبر" } },
          { text: { fr: "Amandes", ar: "لوز" } },
          { text: { fr: "Pistaches", ar: "فستق" } },
        ],
      },
      {
        id: 62,
        question: {
          fr: "Quel est le plus grand océan sur terre ?",
          ar: "ما هو أكبر محيط على الأرض؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "Océan Pacifique", ar: "المحيط الهادئ" },
          },
          { text: { fr: "Océan Indien", ar: "المحيط الهندي" } },
          { text: { fr: "Océan Atlantique", ar: "المحيط الأطلسي" } },
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
        id: 63,
        question: {
          fr: "La majorité de l’eau présente sur terre est de l’eau salée, quel est le pourcentage d’eau douce sur terre ?",
          ar: "معظم المياه الموجودة على الأرض هي مياه مالحة، ما هو نسبة المياه العذبة على الأرض؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "0.025", ar: "0.025" } },
          { text: { fr: "0.05", ar: "0.05" } },
          { text: { fr: "0.2", ar: "0.2" } },
        ],
      },
      {
        id: 64,
        question: {
          fr: "Quel nom donne-t-on aujourd'hui à l'ancienne ville de Constantinople ?",
          ar: "ما هو الاسم الذي يطلق اليوم على مدينة القسطنطينية القديمة؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Istanbul", ar: "استانبول" } },
          { text: { fr: "Ankara", ar: "أنقرة" } },
          { text: { fr: "Constantine", ar: "قسنطينة" } },
        ],
      },
      {
        id: 65,
        question: {
          fr: "Quelle est la superficie de l'Algérie ?",
          ar: "ما هي مساحة الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "2 381 741 km²", ar: "2 381 741 كم²" } },
          { text: { fr: "2 381 761 km²", ar: "2 381 761 كم²" } },
          { text: { fr: "1 392 741 km²", ar: "1 392 741 كم²" } },
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
        id: 66,
        question: {
          fr: "La longueur de la côte algérienne est de :",
          ar: "طول الساحل الجزائري هو:",
        },
        propositions: [
          { isTrue: true, text: { fr: "1200 km", ar: "1200 كم" } },
          { text: { fr: "1250 km", ar: "1250 كم" } },
          { text: { fr: "1350 km", ar: "1350 كم" } },
        ],
      },
      {
        id: 67,
        question: {
          fr: "En dehors du café, quel autre ingrédient compose le cappuccino ?",
          ar: "بخلاف القهوة، ما هو المكون الآخر الذي يشكل الكابتشينو؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Lait", ar: "حليب" } },
          { text: { fr: "Sirop", ar: "شراب" } },
          { text: { fr: "Eau", ar: "ماء" } },
        ],
      },
      {
        id: 68,
        question: {
          fr: "Dans quelle ville italienne la pizza a-t-elle été inventée ?",
          ar: "في أي مدينة إيطالية تم اختراع البيتزا؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Naples", ar: "نابولي" } },
          { text: { fr: "Rome", ar: "روما" } },
          { text: { fr: "Venise", ar: "البندقية" } },
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
        id: 69,
        question: {
          fr: "La tomate est considérée comme un ...",
          ar: "تعتبر الطماطم ...",
        },
        propositions: [
          { isTrue: true, text: { fr: "Fruit", ar: "فاكهة" } },
          { text: { fr: "Légume", ar: "خضرة" } },
          { text: { fr: "Boisson", ar: "مشروب" } },
        ],
      },
      {
        id: 70,
        question: {
          fr: "Le couscous est un plat traditionnel d'origine ...",
          ar: "الكسكس طبق تقليدي من ...",
        },
        propositions: [
          { isTrue: true, text: { fr: "Berbère", ar: "بربري" } },
          { text: { fr: "Chinoise", ar: "صيني" } },
          { text: { fr: "Arabe", ar: "عربي" } },
        ],
      },
      {
        id: 71,
        question: {
          fr: "Laquelle de ces sauces ne contient pas de viande ?",
          ar: "أي من هذه الصلصات لا يحتوي على لحم؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Napolitaine", ar: "نابوليتان" } },
          { text: { fr: "Bolognaise", ar: "بولونيز" } },
          { text: { fr: "Carbonara", ar: "كاربونارا" } },
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
        id: 72,
        question: {
          fr: "Quel est le nom du pain que l’on sert souvent dans les restaurants indiens ?",
          ar: "ما هو اسم الخبز الذي غالبًا ما يتم تقديمه في المطاعم الهندية؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Naan", ar: "نان" } },
          { text: { fr: "Faan", ar: "فان" } },
          { text: { fr: "Kaan", ar: "كان" } },
        ],
      },
      {
        id: 73,
        question: {
          fr: "واش ﻣﻦ ﻣﺮﻗﺔ ﺣﺮﻗﺘﻠﻚ ...",
          ar: "من من مرق حرقتلك؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﺷﻮارﺑﻚ", ar: "شواربك" } },
          { text: { fr: "ﻓﻤﻚ", ar: "فمك" } },
          { text: { fr: "ﯾﺪك", ar: "يدك" } },
        ],
      },
      {
        id: 74,
        question: {
          fr: "… ﺿﺮﺑﻨﻲ و ﺑﻜﻰ، ﺳﺒﻘﻨﻲ و",
          ar: "شعربي و بكل، صبقني و",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﺷﻜﻰ", ar: "شكيلي" } },
          { text: { fr: "ﺷﻄﺢ", ar: "شطح" } },
          { text: { fr: "ﺿﺤﻚ", ar: "ضحكك" } },
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
        id: 75,
        question: {
          fr: " ... اﻟﺠﺪﯾﺪ ﺣﺒّﻮ و اﻟﻘﺪﯾﻢ ﻣﺎ",
          ar: "اللي يحبّك حبو و القديم ما",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﺗفرّط ﻓﯿﻪ", ar: "تفرّط فيه" } },
          { text: { fr: "ﺗﺒﻜﻲ ﻋﻠﯿﻪ", ar: "تبكي عليه" } },
          { text: { fr: "تحوّس ﻋﻠﯿﻪ", ar: "تحوّس عليه" } },
        ],
      },
      {
        id: 76,
        question: {
          fr: " ..  ﺑّﺪل ﻣﺮاح",
          ar: "بديل مراح",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﺗﺴﺘﺮاح", ar: "تستراح" } },
          { text: { fr: "ﺗﺘﻬﻨﻰ", ar: "تتهنى" } },
          { text: { fr: "ﺗﺘﻌﺸﻰ", ar: "تتعبى" } },
        ],
      },
      {
        id: 77,
        question: {
          fr: "اﻟﻠﻲ ﯾﺤﺐ اﻟﺰﯾﻦ، ﯾﺼﺒﺮ ... ",
          ar: "اللي يحب الزين، يصبر ...",
        },
        propositions: [
          { isTrue: true, text: { fr: "ﻟﻌﺬاﺑﻮ", ar: "لأجله" } },
          { text: { fr: "ﻟﺰﯾﻨﻮ", ar: "لزينه" } },
          { text: { fr: "ﻟﻄﯿﺎﺑﻮ", ar: "لتعبه" } },
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
        id: 78,
        question: {
          fr: "اﻟﻔﻢ اﻟﻤﺰﻣﻮم، ﻣﺎ ﺗﺪﺧﻠﻮ...",
          ar: "الفم المزموم، ما تدخلو...",
        },
        propositions: [
          { isTrue: true, text: { fr: "ذﺑﺎﻧﺔ", ar: "ذبانة" } },
          { text: { fr: "ﻏﺒﺮة", ar: "غبارة" } },
          { text: { fr: "ﻣﺎﻛﻠﺔ", ar: "ماكلة" } },
        ],
      },
      {
        id: 79,
        question: {
          fr: "Combien de portes y a-t-il à Alger ?",
          ar: "كم بابا هناك في الجزائر؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "7", ar: "7" } },
          { text: { fr: "6", ar: "6" } },
          { text: { fr: "5", ar: "5" } },
        ],
      },
      {
        id: 80,
        question: {
          fr: "Quel est le nom du premier président des États-Unis ?",
          ar: "ما هو اسم أول رئيس للولايات المتحدة؟",
        },
        propositions: [
          {
            isTrue: true,
            text: { fr: "George Washington", ar: "جورج واشنطن" },
          },
          { text: { fr: "Thomas Jefferson", ar: "توماس جيفرسون" } },
          { text: { fr: "Benjamin Franklin", ar: "بنجامين فرانكلين" } },
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
        id: 81,
        question: {
          fr: "Quel est le nom du premier président de l'Algérie indépendante ?",
          ar: "ما هو اسم أول رئيس للجزائر المستقلة؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Ahmed BenBella", ar: "أحمد بن بلة" } },
          { text: { fr: "Houari Boumediene", ar: "هواري بومدين" } },
          { text: { fr: "Chadli Bendjedid", ar: "شاذلي بن جديد" } },
        ],
      },
      {
        id: 82,
        question: {
          fr: "Quel est le nom du premier roi de France ?",
          ar: "ما هو اسم أول ملك لفرنسا؟",
        },
        propositions: [
          { isTrue: true, text: { fr: "Clovis 1er", ar: "كلوفيس الأول" } },
          { text: { fr: "Charlemagne", ar: "شارلمان" } },
          { text: { fr: "Louis XIV", ar: "لويس الرابع عشر" } },
        ],
      },
      {
        id: 83,
        question: {
          fr: "Quel est le nom de l'événement qui a marqué la fin de la Seconde Guerre mondiale ?",
          ar: "ما هو اسم الحدث الذي شهد نهاية الحرب العالمية الثانية؟",
        },
        propositions: [
          {
            isTrue: true,
            text: {
              fr: "La capitulation de l'Allemagne",
              ar: "استسلام ألمانيا",
            },
          },
          {
            text: {
              fr: "La bombe atomique sur Hiroshima",
              ar: "القنبلة الذرية على هيروشيما",
            },
          },
          { text: { fr: "La capitulation du Japon", ar: "استسلام اليابان" } },
        ],
      },
    ],
  },
]
module.exports = questions
