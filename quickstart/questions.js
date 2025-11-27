const AJAHS = {
  BLUE: 'Blue',
  GREEN: 'Green',
  YELLOW: 'Yellow',
  RED: 'Red',
  WHITE: 'White',
  GRAY: 'Gray',
  BROWN: 'Brown'
};

const AJAH_COLORS = {
  [AJAHS.BLUE]: '#4A90E2',
  [AJAHS.GREEN]: '#7ED321',
  [AJAHS.YELLOW]: '#F5A623',
  [AJAHS.RED]: '#D0021B',
  [AJAHS.WHITE]: '#F8F8F8',
  [AJAHS.GRAY]: '#9B9B9B',
  [AJAHS.BROWN]: '#8B4513'
};

const AJAH_DESCRIPTIONS = {
  [AJAHS.BLUE]: 'Dedicated to justice and righteousness, Blue sisters involve themselves in the affairs of nations and causes, believing the White Tower should actively guide the world.',
  [AJAHS.GREEN]: 'The Battle Ajah. Green sisters prepare for Tarmon Gai\'don, bonding multiple Warders and standing ready to face the Shadow in combat.',
  [AJAHS.YELLOW]: 'Devoted to the study of Healing above all else, Yellow sisters dedicate themselves to caring for the sick and injured, seeking to perfect their knowledge of the healing arts.',
  [AJAHS.RED]: 'Tasked with finding men who can channel and gentling them to prevent the madness of the taint. Red sisters are the only Ajah that traditionally does not bond Warders.',
  [AJAHS.WHITE]: 'Devoted to logic, philosophy, and the pursuit of truth through reason. White sisters seek to understand the nature of reality itself through pure contemplation.',
  [AJAHS.GRAY]: 'Masters of mediation and negotiation, Gray sisters serve as diplomats and treaty-makers, using their skills to resolve conflicts and maintain peace between nations.',
  [AJAHS.BROWN]: 'Scholars and historians who immerse themselves in knowledge and study. Brown sisters often become so absorbed in their research they lose track of the world around them.'
};

/**
 * STRICT MAPPING CRITERIA
 * 
 * These criteria define when a personality trait or answer should map to each Ajah.
 * Use these rules when creating questions and assigning weights.
 * 
 * TARGET DISTRIBUTION (when selecting 10 random questions):
 * Blue: 25% (Most common) | Brown: 20% (Most common) | Green: 20% (Most common)
 * Yellow: 15% (Common) | Red: 10% (Less common) | Gray: 7% (Rare) | White: 3% (Rarest)
 */

const AJAH_MAPPING_CRITERIA = {
  
  [AJAHS.BLUE]: {
    targetPercentage: 25,
    coreTraits: [
      "Passionate about causes and justice",
      "Believes in active intervention to fix problems",
      "Politically engaged or cause-driven",
      "Cannot stand injustice without acting",
      "Idealistic - believes change is possible and necessary"
    ],
    mapWhen: [
      "Taking action based on strong beliefs about right/wrong",
      "Advocating for others or a cause",
      "Speaking up when witnessing injustice",
      "Getting involved in problems that 'aren't your business'",
      "Prioritizing principles over comfort or convenience"
    ],
    doNotMapWhen: [
      "Just being opinionated (that's not the same as justice-driven)",
      "General helping (unless specifically cause-based)",
      "Compromise or diplomacy (that's Gray)",
      "Following rules (that's Red)"
    ],
    weight: {
      high: "Primary motivation is justice/cause",
      medium: "Justice is secondary factor",
      low: "Tangentially related to principles"
    }
  },

  [AJAHS.GREEN]: {
    targetPercentage: 20,
    coreTraits: [
      "Action-oriented over deliberation",
      "Physical and confrontational when needed",
      "Brave and protective",
      "Competitive and direct",
      "Doesn't overthink - acts on instinct"
    ],
    mapWhen: [
      "Choosing immediate action over planning",
      "Physical responses (movement, activity, confrontation)",
      "Direct/blunt communication",
      "Protective instincts ('I'll handle this')",
      "Competitive scenarios",
      "Confronting problems head-on",
      "Taking risks or shortcuts"
    ],
    doNotMapWhen: [
      "Violence for its own sake (Green fights for a reason)",
      "Thoughtless impulsivity (Green is brave, not reckless)",
      "Passive aggression (Green is direct)"
    ],
    weight: {
      high: "Physical action or direct confrontation",
      medium: "Bold action without extensive deliberation",
      low: "Generally active/energetic approach"
    }
  },

  [AJAHS.YELLOW]: {
    targetPercentage: 15,
    coreTraits: [
      "Actively helps and heals others",
      "Nurturing and caretaking",
      "Patient with others' struggles",
      "Prioritizes others' wellbeing",
      "Empathetic and emotionally supportive"
    ],
    mapWhen: [
      "Active caretaking behaviors",
      "Checking on someone's wellbeing",
      "Patient helping, especially when others struggle",
      "Putting others' needs first",
      "Providing emotional or physical support",
      "Being gentle/kind in correcting others",
      "Listening without judgment"
    ],
    doNotMapWhen: [
      "Just being nice or polite (not the same as healing)",
      "Helping out of duty (that's Red)",
      "Helping to fix a problem you care about (that's Blue)"
    ],
    weight: {
      high: "Direct caretaking or healing behavior",
      medium: "Consideration for others' feelings/needs",
      low: "General kindness or empathy"
    }
  },

  [AJAHS.RED]: {
    targetPercentage: 10,
    coreTraits: [
      "Rule-focused and disciplined",
      "Values structure and order",
      "Traditional over innovative",
      "Vigilant and suspicious of rule-breakers",
      "Duty over personal desire",
      "Maintains boundaries strictly"
    ],
    mapWhen: [
      "Following rules even when inconvenient",
      "Enforcing rules or calling out violations",
      "Maintaining discipline or structure",
      "Duty/obligation over personal preference",
      "Suspicion or wariness of disorder",
      "Judging others for breaking rules",
      "Rigid adherence to commitments"
    ],
    doNotMapWhen: [
      "Just being organized (that's not the same as discipline)",
      "Being judgmental in general (Red specifically about rules/order)",
      "Personal boundaries (Red is about societal order)"
    ],
    weight: {
      high: "Explicit rule-following or duty",
      medium: "Preference for structure/tradition",
      low: "Discomfort with chaos"
    }
  },

  [AJAHS.BROWN]: {
    targetPercentage: 20,
    coreTraits: [
      "Absorbed in ideas and learning",
      "Absent-minded about practical matters",
      "Curious for curiosity's sake",
      "Gets lost in thought",
      "Oblivious to social dynamics"
    ],
    mapWhen: [
      "Getting lost in research or learning",
      "Forgetting practical things due to distraction",
      "Knowledge-seeking for its own sake",
      "Missing social cues or obligations",
      "Preferring information/media over social interaction",
      "Correcting factual errors"
    ],
    doNotMapWhen: [
      "Using knowledge strategically (that's Blue or White)",
      "Research for a practical purpose (that's just being prepared)",
      "Being socially awkward (Brown is oblivious, not awkward)"
    ],
    weight: {
      high: "Lost in knowledge/thought to exclusion of surroundings",
      medium: "Prioritizing learning or ideas",
      low: "General intellectual interest"
    }
  },

  [AJAHS.WHITE]: {
    targetPercentage: 3,
    coreTraits: [
      "Purely theoretical/philosophical thinking",
      "Logic as an end in itself",
      "Emotionally detached from outcomes",
      "Questions fundamental assumptions",
      "Abstract over concrete"
    ],
    mapWhen: [
      "Pure philosophical questions ('What is the nature of X?')",
      "Treating situations as logical puzzles divorced from emotion",
      "Questioning the fundamental premise rather than engaging",
      "Choosing abstract conceptual answers over practical ones",
      "Explicitly preferring theory over application"
    ],
    doNotMapWhen: [
      "Being logical or rational (everyone does this sometimes)",
      "Analyzing situations (that's just thinking)",
      "Correcting someone (that's Brown)",
      "Unemotional communication (that could be Red or Green)"
    ],
    weight: {
      high: "Explicit philosophical/abstract reasoning detached from emotion",
      medium: "RARELY USED",
      low: "ALMOST NEVER USE - White should be extremely rare"
    },
    note: "White should appear in <5% of questions and only specific answers"
  },

  [AJAHS.GRAY]: {
    targetPercentage: 7,
    coreTraits: [
      "Mediates between OTHER parties",
      "Diplomatic negotiator",
      "Sees all perspectives equally",
      "Skilled at finding middle ground",
      "Treaty-maker mindset"
    ],
    mapWhen: [
      "Actively mediating between two other people",
      "Bringing conflicting parties together",
      "Facilitating communication between others",
      "Finding diplomatic solutions to others' conflicts",
      "Professional/formal mediation instinct"
    ],
    doNotMapWhen: [
      "Personal compromise (everyone compromises)",
      "Seeing both sides of an issue (that's just being reasonable)",
      "Being flexible (that's not the same as mediating)",
      "Avoiding conflict (Gray engages with conflict to resolve it)"
    ],
    weight: {
      high: "Explicitly mediating between other parties",
      medium: "Facilitating dialogue/understanding between others",
      low: "RARELY USE - Gray should be rare, only in specific mediation scenarios"
    },
    note: "Gray should only appear when specifically mediating others' conflicts"
  }
};

/**
 * QUESTION DESIGN GUIDELINES
 * 
 * 1. Each question should have answers that naturally map to different Ajahs
 * 2. The "most common" answer should favor Blue, Brown, or Green (our target 25%, 20%, 20%)
 * 3. Avoid forced scenarios - situations should feel realistic
 * 4. Use varied question formats (multiple choice, binary, image selection)
 * 5. Keep language casual and relatable
 * 
 * WEIGHT GUIDELINES:
 * - Weight 4-5: This is THE primary Ajah for this answer
 * - Weight 3: This clearly fits this Ajah
 * - Weight 2: This somewhat fits this Ajah
 * - Weight 1: This tangentially relates to this Ajah
 * 
 * An answer can map to multiple Ajahs if the personality trait genuinely fits both.
 * However, most answers should map to 1-3 Ajahs maximum to maintain distinction.
 */

const QUESTIONS = [
  {
    id: 1,
    type: 'binary',
    question: "Would you rather?",
    answers: [
      {
        text: "Go out",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1},
          {ajah: AJAHS.GREEN, weight: 1},
          {ajah: AJAHS.YELLOW, weight: 1},
          {ajah: AJAHS.GRAY, weight: 1}
        ]
      },
      {
        text: "Stay in",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1},
          {ajah: AJAHS.RED, weight: 1},
          {ajah: AJAHS.WHITE, weight: 1}
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: "Which do you enjoy most out of these?",
    answers: [
      {
        text: "Trying something new",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1},
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      },
      {
        text: "Talking to new people",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1},
          {ajah: AJAHS.YELLOW, weight: 1}
        ]
      },
      {
        text: "Learning a new interest",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1},
          {ajah: AJAHS.WHITE, weight: 1}
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'multiple_choice',
    question: "Which of these is your biggest flaw?",
    answers: [
      {
        text: "I have a short temper",
        weights: [
          {ajah: AJAHS.RED, weight: 1}
        ]
      },
      {
        text: "I rarely leave my comfort zone",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      },
      {
        text: "I have a low attention span",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "I tend to use cold logic to ignore feelings",
        weights: [
          {ajah: AJAHS.WHITE, weight: 1}
        ]
      },
      {
        text: "I enjoy meddling or gossiping",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1},
          {ajah: AJAHS.YELLOW, weight: 1}
        ]
      },
      {
        text: "I can be very stubborn",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1},
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'multiple_choice',
    question: "Which of these is your greatest strength?",
    answers: [
      {
        text: "I am proactive and fiery",
        weights: [
          {ajah: AJAHS.RED, weight: 1},
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      },
      {
        text: "I am empathetic and caring",
        weights: [
          {ajah: AJAHS.YELLOW, weight: 1}
        ]
      },
      {
        text: "I am calm and thoughtful",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      },
      {
        text: "I am easy to get along with",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1},
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "I am helpful and friendly",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "I am logical and analytical",
        weights: [
          {ajah: AJAHS.WHITE, weight: 1}
        ]
      }
    ]
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: "Which would be your role in a book?",
    answers: [
      {
        text: "The hero",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1},
          {ajah: AJAHS.BLUE, weight: 1},
          {ajah: AJAHS.RED, weight: 1}
        ]
      },
      {
        text: "The mysterious side character",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      },
      {
        text: "The morally grey character",
        weights: [
          {ajah: AJAHS.WHITE, weight: 1},
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      },
      {
        text: "The supporting character",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1},
          {ajah: AJAHS.YELLOW, weight: 1},
          {ajah: AJAHS.GRAY, weight: 1}
        ]
      },
      {
        text: "I don't fit a specific role",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1}
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: "What is your weapon of choice?",
    answers: [
      {
        text: "A Sword",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "A Pen",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1},
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      },
      {
        text: "An Army",
        weights: [
          {ajah: AJAHS.RED, weight: 1}
        ]
      },
      {
        text: "Strategy",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1},
        ]
      },
      {
        text: "Avoidance",
        weights: [
          {ajah: AJAHS.YELLOW, weight: 1},
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      }
    ]
  },
  {
    id: 7,
    type: 'multiple_choice',
    question: "What trait do you most admire in others?",
    answers: [
      {
        text: "Determination",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      },
      {
        text: "Adaptability",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1},
          {ajah: AJAHS.GRAY, weight: 1}
        ]
      },
      {
        text: "Honesty",
        weights: [
          {ajah: AJAHS.RED, weight: 1}
        ]
      },
      {
        text: "Reliability",
        weights: [
          {ajah: AJAHS.YELLOW, weight: 1}
        ]
      },
	  {
        text: "Rationality",
        weights: [
          {ajah: AJAHS.WHITE, weight: 1}
        ]
      },
      {
        text: "Thoughtfulness",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      }
    ]
  },
  {
    id: 8,
    type: 'multiple_choice',
    question: "If you could rid the world of one of the following, which would it be?",
    answers: [
      {
        text: "Illness",
        weights: [
          {ajah: AJAHS.YELLOW, weight: 1}
        ]
      },
      {
        text: "Injustice",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1},
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      },
      {
        text: "Men with too much power",
        weights: [
          {ajah: AJAHS.RED, weight: 1}
        ]
      },
      {
        text: "War",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "Stupidity",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1},
          {ajah: AJAHS.WHITE, weight: 1}
        ]
      }
    ]
  },
  {
    id: 9,
    type: 'multiple_choice',
    question: "If you have to do something, how do you go about it?",
    answers: [
      {
        text: "I do it immediately",
        weights: [
          {ajah: AJAHS.RED, weight: 1},
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "That depends on who asked me to do it",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      },
      {
        text: "I like to think about it first",
        weights: [
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      },
      {
        text: "I'll do more important tasks then get to it later",
        weights: [
          {ajah: AJAHS.YELLOW, weight: 1}
        ]
      }
    ]
  },
  {
    id: 10,
    type: 'multiple_choice',
    question: "How do you handle authority?",
    answers: [
      {
        text: "Rules exist for a reason",
        weights: [
          {ajah: AJAHS.GRAY, weight: 1},
          {ajah: AJAHS.YELLOW, weight: 1},
          {ajah: AJAHS.RED, weight: 1}
        ]
      },
      {
        text: "I have 'issues' with authority",
        weights: [
          {ajah: AJAHS.GREEN, weight: 1}
        ]
      },
      {
        text: "I live to serve... if they are stronger than I am",
        weights: [
          {ajah: AJAHS.WHITE, weight: 1},
          {ajah: AJAHS.BROWN, weight: 1}
        ]
      },
      {
        text: "I try to find a way to become the authority",
        weights: [
          {ajah: AJAHS.BLUE, weight: 1}
        ]
      }
    ]
  }
];

const CONFIG = {
  randomizeQuestions: true,
  testMode: false,
  testQuestionCount: 3,
  quizLength: 10
};