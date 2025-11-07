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

const QUESTIONS = [
  {
    id: 1,
    question: "A great war is approaching. How do you prepare?",
    answers: [
      { text: "Train with weapons and prepare for battle", ajahs: [AJAHS.GREEN] },
      { text: "Study healing so I can save lives", ajahs: [AJAHS.YELLOW] },
      { text: "Build alliances and rally forces to the cause", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Research ancient texts for tactical knowledge", ajahs: [AJAHS.BROWN] }
    ]
  },
  {
    id: 2,
    question: "You discover a man who can channel. What do you do?",
    answers: [
      { text: "He must be gentled immediately for everyone's safety", ajahs: [AJAHS.RED] },
      { text: "Seek to understand why this happens through study", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Help him while there's still time, ease his suffering", ajahs: [AJAHS.YELLOW] },
      { text: "Report to the proper authorities and let them handle it", ajahs: [AJAHS.GRAY, AJAHS.RED] }
    ]
  },
  {
    id: 3,
    question: "Two nations are on the brink of war. What is your role?",
    answers: [
      { text: "Negotiate a treaty and find common ground", ajahs: [AJAHS.GRAY] },
      { text: "Determine which side serves the greater good", ajahs: [AJAHS.BLUE] },
      { text: "Stand ready to defend the innocent", ajahs: [AJAHS.GREEN] },
      { text: "Study the historical causes of their conflict", ajahs: [AJAHS.BROWN, AJAHS.WHITE] }
    ]
  },
  {
    id: 4,
    question: "What draws you most to the White Tower?",
    answers: [
      { text: "Access to the greatest library in the world", ajahs: [AJAHS.BROWN] },
      { text: "Learning to heal with the One Power", ajahs: [AJAHS.YELLOW] },
      { text: "The chance to shape the fate of nations", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Protecting the world from the Dark One", ajahs: [AJAHS.GREEN, AJAHS.RED] }
    ]
  },
  {
    id: 5,
    question: "A philosophical debate arises in the Tower. You...",
    answers: [
      { text: "Engage deeply, seeking truth through logic", ajahs: [AJAHS.WHITE] },
      { text: "Find a compromise that satisfies all parties", ajahs: [AJAHS.GRAY] },
      { text: "Consult historical texts for precedent", ajahs: [AJAHS.BROWN] },
      { text: "Focus on practical matters instead", ajahs: [AJAHS.GREEN, AJAHS.YELLOW] }
    ]
  },
  {
    id: 6,
    question: "How do you view the role of Warders?",
    answers: [
      { text: "Essential partners in battle - I'd bond several", ajahs: [AJAHS.GREEN] },
      { text: "A useful tool but not necessary for my work", ajahs: [AJAHS.RED] },
      { text: "A deep bond that enhances both Aes Sedai and Warder", ajahs: [AJAHS.BLUE, AJAHS.YELLOW, AJAHS.GRAY] },
      { text: "An interesting subject for contemplation", ajahs: [AJAHS.WHITE, AJAHS.BROWN] }
    ]
  },
  {
    id: 7,
    question: "The Amyrlin Seat asks for your counsel. You focus on...",
    answers: [
      { text: "Political strategy and international relations", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "The Tower's military readiness", ajahs: [AJAHS.GREEN] },
      { text: "The philosophical implications of her decision", ajahs: [AJAHS.WHITE] },
      { text: "Historical precedent for similar situations", ajahs: [AJAHS.BROWN] }
    ]
  },
  {
    id: 8,
    question: "A village suffers from a mysterious illness. You...",
    answers: [
      { text: "Immediately begin healing the afflicted", ajahs: [AJAHS.YELLOW] },
      { text: "Investigate the logical cause of the disease", ajahs: [AJAHS.WHITE, AJAHS.YELLOW] },
      { text: "Check historical records for similar outbreaks", ajahs: [AJAHS.BROWN] },
      { text: "Organize aid and coordinate with local leaders", ajahs: [AJAHS.GRAY, AJAHS.BLUE] }
    ]
  },
  {
    id: 9,
    question: "What is your greatest strength?",
    answers: [
      { text: "My dedication to a righteous cause", ajahs: [AJAHS.BLUE] },
      { text: "My courage and martial skill", ajahs: [AJAHS.GREEN] },
      { text: "My compassion and healing abilities", ajahs: [AJAHS.YELLOW] },
      { text: "My ability to find common ground", ajahs: [AJAHS.GRAY] }
    ]
  },
  {
    id: 10,
    question: "In your free time, you prefer to...",
    answers: [
      { text: "Read extensively in the Tower library", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Practice sword forms and battle weaves", ajahs: [AJAHS.GREEN] },
      { text: "Study new healing techniques", ajahs: [AJAHS.YELLOW] },
      { text: "Engage in discussion and debate", ajahs: [AJAHS.GRAY, AJAHS.WHITE, AJAHS.BLUE] }
    ]
  },
  {
    id: 11,
    question: "What is your view on the Three Oaths?",
    answers: [
      { text: "Essential to maintaining Aes Sedai credibility", ajahs: [AJAHS.GRAY, AJAHS.WHITE] },
      { text: "A burden that limits our effectiveness in battle", ajahs: [AJAHS.GREEN] },
      { text: "A necessary compromise with the world", ajahs: [AJAHS.BLUE] },
      { text: "Irrelevant to my work", ajahs: [AJAHS.BROWN, AJAHS.YELLOW] }
    ]
  },
  {
    id: 12,
    question: "A False Dragon has declared himself. Your response?",
    answers: [
      { text: "Lead the force to capture and gentle him", ajahs: [AJAHS.RED, AJAHS.GREEN] },
      { text: "Negotiate with his followers to minimize bloodshed", ajahs: [AJAHS.GRAY] },
      { text: "Study the prophecies to understand the implications", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Work to ensure stability and prevent chaos", ajahs: [AJAHS.BLUE] }
    ]
  },
  {
    id: 13,
    question: "The Hall of the Tower is deeply divided. You...",
    answers: [
      { text: "Push forcefully for what you believe is right", ajahs: [AJAHS.BLUE, AJAHS.RED] },
      { text: "Seek middle ground through careful negotiation", ajahs: [AJAHS.GRAY] },
      { text: "Analyze the situation logically before acting", ajahs: [AJAHS.WHITE] },
      { text: "Focus on your own work rather than politics", ajahs: [AJAHS.BROWN, AJAHS.YELLOW] }
    ]
  },
  {
    id: 14,
    question: "An Accepted asks for your guidance. You emphasize...",
    answers: [
      { text: "The importance of serving a greater cause", ajahs: [AJAHS.BLUE] },
      { text: "Readiness and preparation for any threat", ajahs: [AJAHS.GREEN] },
      { text: "Compassion and the healing arts", ajahs: [AJAHS.YELLOW] },
      { text: "The pursuit of knowledge above all", ajahs: [AJAHS.BROWN, AJAHS.WHITE] }
    ]
  },
  {
    id: 15,
    question: "Darkfriends have infiltrated a city. How do you proceed?",
    answers: [
      { text: "Root them out swiftly and decisively", ajahs: [AJAHS.GREEN, AJAHS.RED] },
      { text: "Gather intelligence before making a move", ajahs: [AJAHS.GRAY, AJAHS.BLUE] },
      { text: "Research historical patterns of Shadow activity", ajahs: [AJAHS.BROWN] },
      { text: "Prepare to heal those harmed by the Shadow", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 16,
    question: "What quality do you most admire in others?",
    answers: [
      { text: "Dedication to justice and righteousness", ajahs: [AJAHS.BLUE] },
      { text: "Courage and strength in adversity", ajahs: [AJAHS.GREEN] },
      { text: "Wisdom and scholarly achievement", ajahs: [AJAHS.BROWN] },
      { text: "Diplomatic skill and tact", ajahs: [AJAHS.GRAY] }
    ]
  },
  {
    id: 17,
    question: "A ter'angreal of unknown purpose is discovered. You...",
    answers: [
      { text: "Study it exhaustively to understand its function", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Test it carefully to determine if it's useful in battle", ajahs: [AJAHS.GREEN] },
      { text: "Examine if it has healing applications", ajahs: [AJAHS.YELLOW] },
      { text: "Secure it and report to proper channels", ajahs: [AJAHS.RED, AJAHS.GRAY] }
    ]
  },
  {
    id: 18,
    question: "The Dragon Reborn has been found. What is your priority?",
    answers: [
      { text: "Guide him toward the Last Battle", ajahs: [AJAHS.BLUE, AJAHS.GREEN] },
      { text: "Prevent him from going mad and destroying everything", ajahs: [AJAHS.RED] },
      { text: "Study the prophecies to understand what must happen", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Negotiate alliances needed for Tarmon Gai'don", ajahs: [AJAHS.GRAY] }
    ]
  },
  {
    id: 19,
    question: "Your greatest fear is...",
    answers: [
      { text: "Being unable to make a difference when it matters", ajahs: [AJAHS.BLUE, AJAHS.GREEN] },
      { text: "Losing control of dangerous channelers", ajahs: [AJAHS.RED] },
      { text: "Making an illogical or incorrect decision", ajahs: [AJAHS.WHITE] },
      { text: "Important knowledge being lost forever", ajahs: [AJAHS.BROWN] }
    ]
  },
  {
    id: 20,
    question: "A sister from another Ajah criticizes your methods. You...",
    answers: [
      { text: "Defend your approach if you believe you're right", ajahs: [AJAHS.BLUE, AJAHS.RED] },
      { text: "Seek to understand their perspective and find compromise", ajahs: [AJAHS.GRAY, AJAHS.YELLOW] },
      { text: "Explain your reasoning logically and dispassionately", ajahs: [AJAHS.WHITE] },
      { text: "Ignore the criticism and continue your work", ajahs: [AJAHS.BROWN, AJAHS.GREEN] }
    ]
  },
  {
    id: 21,
    question: "What environment do you thrive in?",
    answers: [
      { text: "The councils of kings and queens", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "The training grounds and field of battle", ajahs: [AJAHS.GREEN] },
      { text: "The sick rooms and healing halls", ajahs: [AJAHS.YELLOW] },
      { text: "The quiet of libraries and archives", ajahs: [AJAHS.BROWN, AJAHS.WHITE] }
    ]
  },
  {
    id: 22,
    question: "An ancient evil stirs in the Blight. Your role is...",
    answers: [
      { text: "Stand at the front lines with sword and Power", ajahs: [AJAHS.GREEN] },
      { text: "Organize the defense and rally forces", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Research what this evil is and how to fight it", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Prepare to save those who will be wounded", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 23,
    question: "How do you view the Kin (wilders who left the Tower)?",
    answers: [
      { text: "They must be brought back under Tower authority", ajahs: [AJAHS.RED] },
      { text: "They could be valuable allies if approached correctly", ajahs: [AJAHS.GRAY, AJAHS.BLUE] },
      { text: "An interesting case study in channeling without training", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Potential helpers in the healing arts", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 24,
    question: "A monarch refuses to heed Tower guidance. You...",
    answers: [
      { text: "Find ways to work around their stubbornness", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Make them understand the consequences of defiance", ajahs: [AJAHS.RED] },
      { text: "Study what motivates them and adjust approach", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Focus on helping their people instead", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 25,
    question: "What is the greatest strength of the White Tower?",
    answers: [
      { text: "Its ability to influence world events", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Its military power and readiness", ajahs: [AJAHS.GREEN] },
      { text: "Its accumulated knowledge and wisdom", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Its traditions and established order", ajahs: [AJAHS.RED] }
    ]
  },
  {
    id: 26,
    question: "A new weave has been discovered. Your interest is...",
    answers: [
      { text: "Whether it can be used in combat", ajahs: [AJAHS.GREEN] },
      { text: "Whether it has healing applications", ajahs: [AJAHS.YELLOW] },
      { text: "Understanding the theory behind how it works", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Whether it could be dangerous in wrong hands", ajahs: [AJAHS.RED] }
    ]
  },
  {
    id: 27,
    question: "The Seanchan have landed on western shores. You...",
    answers: [
      { text: "Prepare for war and defend against the invasion", ajahs: [AJAHS.GREEN] },
      { text: "Seek to negotiate and understand their culture", ajahs: [AJAHS.GRAY] },
      { text: "Research their history and methods", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Work to free the damane (enslaved channelers)", ajahs: [AJAHS.BLUE, AJAHS.YELLOW] }
    ]
  },
  {
    id: 28,
    question: "What makes a good Aes Sedai?",
    answers: [
      { text: "Unwavering commitment to a righteous cause", ajahs: [AJAHS.BLUE] },
      { text: "Strength, skill, and readiness for battle", ajahs: [AJAHS.GREEN] },
      { text: "Compassion and dedication to healing", ajahs: [AJAHS.YELLOW] },
      { text: "Wisdom gained through study and reflection", ajahs: [AJAHS.WHITE, AJAHS.BROWN] }
    ]
  },
  {
    id: 29,
    question: "A village has been destroyed by Trollocs. You...",
    answers: [
      { text: "Hunt down the Trollocs before they strike again", ajahs: [AJAHS.GREEN] },
      { text: "Heal survivors and help them rebuild", ajahs: [AJAHS.YELLOW] },
      { text: "Investigate why Trollocs attacked here specifically", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Organize aid from neighboring regions", ajahs: [AJAHS.GRAY, AJAHS.BLUE] }
    ]
  },
  {
    id: 30,
    question: "What is your opinion on bonding Warders?",
    answers: [
      { text: "Every sister should bond multiple Warders", ajahs: [AJAHS.GREEN] },
      { text: "Unnecessary and potentially compromising", ajahs: [AJAHS.RED] },
      { text: "A personal choice with pros and cons", ajahs: [AJAHS.GRAY, AJAHS.WHITE] },
      { text: "Valuable for protection while doing important work", ajahs: [AJAHS.BLUE, AJAHS.YELLOW, AJAHS.BROWN] }
    ]
  },
  {
    id: 31,
    question: "The Borderlands need aid against Shadowspawn. You...",
    answers: [
      { text: "Go personally to fight at their side", ajahs: [AJAHS.GREEN] },
      { text: "Convince other nations to send support", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Study Shadowspawn weaknesses to advise them", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Establish healing stations near the Blight", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 32,
    question: "What frustrates you most about the White Tower?",
    answers: [
      { text: "Too much debate, not enough action", ajahs: [AJAHS.GREEN, AJAHS.BLUE] },
      { text: "Excessive restrictions on what we can do", ajahs: [AJAHS.RED] },
      { text: "Not enough emphasis on study and learning", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Internal politics distracting from real work", ajahs: [AJAHS.YELLOW, AJAHS.GRAY] }
    ]
  },
  {
    id: 33,
    question: "A powerful sa'angreal is found. Who should control it?",
    answers: [
      { text: "Those who will use it to fight the Shadow", ajahs: [AJAHS.GREEN] },
      { text: "The Red Ajah to prevent misuse", ajahs: [AJAHS.RED] },
      { text: "Scholars who can study it properly", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "It should be locked away for safety", ajahs: [AJAHS.GRAY] }
    ]
  },
  {
    id: 34,
    question: "You witness a sister breaking Tower law. You...",
    answers: [
      { text: "Report it immediately to proper authorities", ajahs: [AJAHS.RED, AJAHS.WHITE] },
      { text: "Speak with her privately to understand why", ajahs: [AJAHS.GRAY, AJAHS.YELLOW] },
      { text: "Consider whether the law itself is just", ajahs: [AJAHS.BLUE] },
      { text: "Mind your own business unless it affects your work", ajahs: [AJAHS.BROWN, AJAHS.GREEN] }
    ]
  },
  {
    id: 35,
    question: "What legacy do you hope to leave?",
    answers: [
      { text: "A world saved from the Shadow", ajahs: [AJAHS.GREEN, AJAHS.BLUE] },
      { text: "Important discoveries or knowledge preserved", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Countless lives healed and saved", ajahs: [AJAHS.YELLOW] },
      { text: "Peace and stability between nations", ajahs: [AJAHS.GRAY] }
    ]
  },
  {
    id: 36,
    question: "The Aiel cross the Dragonwall. Your response?",
    answers: [
      { text: "Prepare defenses against potential invasion", ajahs: [AJAHS.GREEN] },
      { text: "Seek to understand their purpose and negotiate", ajahs: [AJAHS.GRAY] },
      { text: "Study their culture and the prophecies", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Work to prevent bloodshed on both sides", ajahs: [AJAHS.YELLOW, AJAHS.BLUE] }
    ]
  },
  {
    id: 37,
    question: "A sister asks you to break your Oaths temporarily. You...",
    answers: [
      { text: "Refuse absolutely, the Oaths are inviolable", ajahs: [AJAHS.WHITE, AJAHS.GRAY] },
      { text: "Consider it if the cause is just enough", ajahs: [AJAHS.BLUE, AJAHS.GREEN] },
      { text: "Report this dangerous suggestion", ajahs: [AJAHS.RED] },
      { text: "Examine the philosophical implications", ajahs: [AJAHS.BROWN] }
    ]
  },
  {
    id: 38,
    question: "What draws you to the One Power?",
    answers: [
      { text: "The ability to change the world", ajahs: [AJAHS.BLUE, AJAHS.GREEN] },
      { text: "The ability to heal and preserve life", ajahs: [AJAHS.YELLOW] },
      { text: "Its fascinating complexity and mysteries", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "The responsibility to control its dangers", ajahs: [AJAHS.RED, AJAHS.GRAY] }
    ]
  },
  {
    id: 39,
    question: "The Amyrlin's eyes-and-ears report disturbing news. You...",
    answers: [
      { text: "Investigate personally if it involves the Shadow", ajahs: [AJAHS.GREEN, AJAHS.BLUE] },
      { text: "Analyze the information for patterns and truth", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Coordinate with other sisters to respond appropriately", ajahs: [AJAHS.GRAY] },
      { text: "Prepare for potential casualties", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 40,
    question: "What is your view on Novices and Accepted?",
    answers: [
      { text: "They must be molded for the battles ahead", ajahs: [AJAHS.GREEN] },
      { text: "They need firm guidance and discipline", ajahs: [AJAHS.RED] },
      { text: "They should be encouraged to pursue knowledge", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "They need compassion as they learn difficult lessons", ajahs: [AJAHS.YELLOW, AJAHS.GRAY] }
    ]
  },
  {
    id: 41,
    question: "A nation's queen dies mysteriously. You...",
    answers: [
      { text: "Investigate thoroughly for signs of Shadow work", ajahs: [AJAHS.BLUE, AJAHS.GREEN] },
      { text: "Help ensure smooth succession to prevent chaos", ajahs: [AJAHS.GRAY] },
      { text: "Study similar historical cases for insight", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Focus on helping her family through grief", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 42,
    question: "The Pattern weaves strangely. Ta'veren walk the world. You...",
    answers: [
      { text: "Seek to guide them toward necessary ends", ajahs: [AJAHS.BLUE] },
      { text: "Prepare for the chaos they inevitably bring", ajahs: [AJAHS.GREEN, AJAHS.RED] },
      { text: "Study the nature of ta'veren and the Pattern", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Try to mediate the disruptions they cause", ajahs: [AJAHS.GRAY] }
    ]
  },
  {
    id: 43,
    question: "What aspect of Aes Sedai history interests you most?",
    answers: [
      { text: "Great battles against the Shadow", ajahs: [AJAHS.GREEN] },
      { text: "The Breaking and the male Aes Sedai", ajahs: [AJAHS.RED, AJAHS.BROWN] },
      { text: "The Age of Legends and lost knowledge", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Famous sisters who shaped nations", ajahs: [AJAHS.BLUE, AJAHS.GRAY] }
    ]
  },
  {
    id: 44,
    question: "A Forsaken has been freed from imprisonment. You...",
    answers: [
      { text: "Hunt them down with overwhelming force", ajahs: [AJAHS.GREEN] },
      { text: "Warn those in positions of power", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Research their weaknesses from the Age of Legends", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Prepare to deal with victims of their evil", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 45,
    question: "What is your opinion on Accepted testing in the Arches?",
    answers: [
      { text: "A necessary trial to prove dedication", ajahs: [AJAHS.RED, AJAHS.WHITE] },
      { text: "A harsh but effective test of character", ajahs: [AJAHS.GREEN, AJAHS.BLUE] },
      { text: "An interesting psychological phenomenon to study", ajahs: [AJAHS.BROWN] },
      { text: "A traumatic experience that should be gentler", ajahs: [AJAHS.YELLOW, AJAHS.GRAY] }
    ]
  },
  {
    id: 46,
    question: "The Tower's influence in the world is waning. You...",
    answers: [
      { text: "Work actively to rebuild that influence", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Focus on maintaining military readiness instead", ajahs: [AJAHS.GREEN] },
      { text: "Analyze why this happened and how to fix it", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "Concentrate on helping people directly", ajahs: [AJAHS.YELLOW] }
    ]
  },
  {
    id: 47,
    question: "A sister is stilled (cut off from the Source). Your reaction?",
    answers: [
      { text: "Help her find purpose and meaning again", ajahs: [AJAHS.YELLOW, AJAHS.GRAY] },
      { text: "Research if there's any way to Heal stilling", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "Accept it as just punishment if she broke laws", ajahs: [AJAHS.RED] },
      { text: "Find ways she can still serve the Light", ajahs: [AJAHS.BLUE, AJAHS.GREEN] }
    ]
  },
  {
    id: 48,
    question: "How do you feel about Aes Sedai agelessness?",
    answers: [
      { text: "A useful tool for commanding respect", ajahs: [AJAHS.BLUE, AJAHS.GRAY] },
      { text: "Irrelevant to my work and studies", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "A reminder of the Oaths' price on longevity", ajahs: [AJAHS.YELLOW] },
      { text: "A mark of power and authority", ajahs: [AJAHS.RED, AJAHS.GREEN] }
    ]
  },
  {
    id: 49,
    question: "Tel'aran'rhiod (the World of Dreams) is discovered. You...",
    answers: [
      { text: "Learn to use it for gathering intelligence", ajahs: [AJAHS.GRAY, AJAHS.BLUE] },
      { text: "Study its properties and rules extensively", ajahs: [AJAHS.WHITE, AJAHS.BROWN] },
      { text: "See if it can be used to reach or heal people", ajahs: [AJAHS.YELLOW] },
      { text: "Warn others about its dangers", ajahs: [AJAHS.RED] }
    ]
  },
  {
    id: 50,
    question: "The Last Battle approaches. Your final thought is...",
    answers: [
      { text: "I will stand against the Shadow until the end", ajahs: [AJAHS.GREEN] },
      { text: "I have served my cause with everything I have", ajahs: [AJAHS.BLUE] },
      { text: "I hope the knowledge I preserved will help", ajahs: [AJAHS.BROWN, AJAHS.WHITE] },
      { text: "I hope I saved enough lives to make a difference", ajahs: [AJAHS.YELLOW] }
    ]
  }
];

const CONFIG = {
  randomizeQuestions: true,
  testMode: false,
  testQuestionCount: 3
};
