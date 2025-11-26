// breeds-data.js
const dogBreeds = [
  {
  name: "Alaskan Malamute",
  origin: "Alaska, thousands of years ago",
  history: "Developed by the Mahlemut Inuit tribe as powerful sled dogs...",
  temperament: "Affectionate, loyal, strong-willed, pack-oriented.",
  lifespan: "10–14 years",
  size: "Large, 75–100 lbs",
  exercise: "High energy; requires 2+ hours daily...",
  grooming: "Thick double coat; heavy seasonal shedding...",
  health: "Hip dysplasia, cataracts, hypothyroidism.",
  training: "Independent thinkers; consistent, firm training required.",
  funFacts: [
    "Known as one of the oldest sled dog breeds.",
    "Can pull loads up to several times their own weight.",
    "Often confused with Huskies but are larger and stronger."
  ],
  image: "images/alaskanmalamute.jpg"
},
{
  name: "Australian Shepherd",
  origin: "United States (despite the name)",
  history: "Developed in the western US in the 19th century...",
  temperament: "Energetic, intelligent, loyal, protective.",
  lifespan: "12–15 years",
  size: "Medium, 40–65 lbs",
  exercise: "Very high energy; needs 2+ hours daily...",
  grooming: "Moderate shedding; weekly brushing.",
  health: "Hip dysplasia, epilepsy, eye issues.",
  training: "Highly trainable; thrives on mental stimulation.",
  funFacts: [
    "Despite the name, they were bred in America.",
    "Known for striking merle coats and bright eyes.",
    "Excel in dog sports like agility and frisbee."
  ],
  image: "images/australianshepherd.jpg"
},
{
  name: "Bernese Mountain Dog",
  origin: "Switzerland",
  history: "One of four Swiss mountain dogs, bred as draft animals and farm guardians in the Bern region. Used to pull carts of milk and cheese.",
  temperament: "Gentle, affectionate, calm, loyal.",
  lifespan: "7–10 years",
  size: "Large, 70–115 lbs",
  exercise: "Moderate; enjoys long walks and pulling carts.",
  grooming: "Thick tri-color coat; heavy shedding, regular brushing.",
  health: "Cancer, hip dysplasia, bloat.",
  training: "Gentle and responsive; thrives on positive reinforcement.",
  funFacts: [
    "Can pull carts weighing several hundred pounds.",
    "Known for their distinctive tri-color coat.",
    "Excellent therapy dogs due to gentle nature."
  ],
  image: "images/bernese.jpg"
},
{
  name: "Blue Merle Collie",
  origin: "Scotland",
  history: "Collies originated as herding dogs in Scotland...",
  temperament: "Gentle, intelligent, loyal, sensitive.",
  lifespan: "12–14 years",
  size: "Medium-large, 50–70 lbs",
  exercise: "Moderate; enjoys herding and agility.",
  grooming: "Long coat; requires regular brushing.",
  health: "Collie eye anomaly, hip dysplasia.",
  training: "Responsive and eager to please.",
  funFacts: [
    "Made famous by Lassie.",
    "Merle pattern is caused by a genetic trait.",
    "Excellent family dogs with gentle temperaments."
  ],
  image: "images/bluemerlecollie.jpg"
},
{
  name: "Border Collie",
  origin: "Scotland/England border",
  history: "Developed for herding sheep in the rugged borderlands...",
  temperament: "Energetic, intelligent, workaholic.",
  lifespan: "12–15 years",
  size: "Medium, 30–45 lbs",
  exercise: "Extremely high energy; needs 3+ hours daily.",
  grooming: "Moderate; regular brushing.",
  health: "Hip dysplasia, epilepsy, eye issues.",
  training: "Highly trainable; excels in obedience and agility.",
  funFacts: [
    "Can learn hundreds of words and commands.",
    "Dominate dog sports worldwide.",
    "Still widely used as working sheepdogs."
  ],
  image: "images/bordercollie.jpg"
},
{
  name: "Bloodhound",
  origin: "France/Belgium, medieval period",
  history: "Developed by monks at St. Hubert’s Monastery...",
  temperament: "Gentle, affectionate, determined, stubborn.",
  lifespan: "10–12 years",
  size: "Large, 80–110 lbs",
  exercise: "Moderate; loves scent work.",
  grooming: "Short coat; minimal grooming.",
  health: "Ear infections, hip dysplasia, bloat.",
  training: "Independent; requires patience.",
  funFacts: [
    "Can follow a scent trail over 100 miles.",
    "Used in law enforcement worldwide.",
    "Their droopy skin helps trap scent particles."
  ],
  image: "images/bloodhound.jpg"
},
{
  name: "King Charles Cavalier",
  origin: "England, 17th century",
  history: "Bred as lapdogs for nobility, especially King Charles II. Descended from toy spaniels.",
  temperament: "Affectionate, gentle, friendly.",
  lifespan: "12–15 years",
  size: "Small, 13–18 lbs",
  exercise: "Moderate; enjoys play and short walks.",
  grooming: "Silky coat; regular brushing.",
  health: "Heart disease (mitral valve), syringomyelia.",
  training: "Responsive and eager to please.",
  funFacts: [
    "Favored by King Charles II.",
    "Known for expressive, soulful eyes.",
    "Excellent companion dogs."
  ],
  image: "images/cavalier.jpg"
},
{
  name: "Chow Chow",
  origin: "China, ancient breed",
  history: "One of the oldest dog breeds, dating back thousands of years...",
  temperament: "Independent, aloof, loyal.",
  lifespan: "9–15 years",
  size: "Medium-large, 45–70 lbs",
  exercise: "Moderate; enjoys daily walks.",
  grooming: "Thick lion-like mane; heavy shedding.",
  health: "Hip dysplasia, entropion, thyroid issues.",
  training: "Independent; requires firm, consistent training.",
  funFacts: [
    "Has a distinctive blue-black tongue.",
    "Resembles a lion with its mane.",
    "Ancient breed depicted in Chinese art."
  ],
  image: "images/chowchow.jpg"
},
{
  name: "Corgi",
  origin: "Wales, 12th century",
  history: "Used as cattle herders, nipping at heels...",
  temperament: "Alert, affectionate, bold.",
  lifespan: "12–15 years",
  size: "Small, 25–30 lbs",
  exercise: "Moderate; loves herding games.",
  grooming: "Heavy shedding; frequent brushing.",
  health: "Back problems, hip dysplasia.",
  training: "Smart and eager; responds well to positive reinforcement.",
  funFacts: [
    "Queen Elizabeth II owned over 30 Corgis.",
    "Folklore says fairies rode them into battle.",
    "Pembrokes often have naturally short tails."
  ],
  image: "images/corgi.jpg"
},
{
  name: "Cocker Spaniel",
  origin: "England, 19th century",
  history: "Developed as hunting dogs for woodcock birds...",
  temperament: "Gentle, affectionate, playful.",
  lifespan: "12–15 years",
  size: "Medium, 20–30 lbs",
  exercise: "Moderate; enjoys play and walks.",
  grooming: "Long silky coat; requires regular grooming.",
  health: "Ear infections, eye issues, hip dysplasia.",
  training: "Responsive and eager to please.",
  funFacts: [
    "Lady from Disney’s Lady and the Tramp is a Cocker Spaniel.",
    "Excellent family dogs.",
    "Known for their long, floppy ears."
  ],
  image: "images/cockerspaniel.jpg"
},
{
  name: "Dalmatian",
  origin: "Croatia (Dalmatia region), 16th century",
  history: "Dalmatians have a long history as carriage dogs, guarding horses and coaches...",
  temperament: "Energetic, intelligent, loyal, sometimes aloof.",
  lifespan: "11–13 years",
  size: "Medium-large, 45–70 lbs",
  exercise: "High energy; requires 1–2 hours daily.",
  grooming: "Short coat; minimal grooming but sheds year-round.",
  health: "Deafness, urinary stones, hip dysplasia.",
  training: "Smart but independent; needs consistent training.",
  funFacts: [
    "Famous for their role in firehouses.",
    "Known for their unique spotted coats.",
    "Featured in Disney’s 101 Dalmatians."
  ],
  image: "images/dalmatian.jpg"
},
{
  name: "Dachshund",
  origin: "Germany, 15th century",
  history: "Bred to hunt badgers and burrowing animals. Their name means 'badger dog' in German...",
  temperament: "Curious, lively, brave, sometimes stubborn.",
  lifespan: "12–16 years",
  size: "Small, 16–32 lbs (standard); 11 lbs (miniature).",
  exercise: "Moderate; enjoys play and short walks.",
  grooming: "Comes in smooth, long-haired, and wire-haired varieties.",
  health: "Back problems (IVDD), obesity.",
  training: "Independent; requires patience and consistency.",
  funFacts: [
    "Nicknamed 'wiener dogs'.",
    "Originally bred for hunting badgers.",
    "Popular in both standard and miniature sizes."
  ],
  image: "images/dachshund.jpg"
},
{
  name: "German Shepherd",
  origin: "Germany, 1899",
  history: "Created by Captain Max von Stephanitz, who standardized the breed...",
  temperament: "Confident, courageous, loyal, protective.",
  lifespan: "9–13 years",
  size: "Large, 65–90 lbs",
  exercise: "High energy; requires 2+ hours daily.",
  grooming: "Double coat; moderate shedding, regular brushing.",
  health: "Hip/elbow dysplasia, degenerative myelopathy.",
  training: "Highly trainable; excels in obedience, protection, and service work.",
  funFacts: [
    "Known as Alsatians in Britain after WWI.",
    "One of the most popular police dogs worldwide.",
    "Used extensively in WWII as messenger and guard dogs."
  ],
  image: "images/germanshepherd.jpg"
},
{
  name: "Great Dane",
  origin: "Germany, 16th century",
  history: "Originally bred to hunt wild boar. Later refined into a gentle giant companion...",
  temperament: "Gentle, affectionate, loyal, protective.",
  lifespan: "7–10 years",
  size: "Giant, 110–175 lbs",
  exercise: "Moderate; needs daily walks but not excessive exercise.",
  grooming: "Short coat; minimal grooming.",
  health: "Bloat, heart disease, hip dysplasia.",
  training: "Gentle and responsive; needs early socialization.",
  funFacts: [
    "Scooby-Doo is a Great Dane.",
    "Despite size, they are gentle and affectionate.",
    "Known as gentle giants."
  ],
  image: "images/greatdane.jpg"
},
{
  name: "Goldendoodle",
  origin: "United States, 1990s",
  history: "Crossbreed between Golden Retriever and Poodle...",
  temperament: "Friendly, intelligent, affectionate.",
  lifespan: "10–15 years",
  size: "Varies (miniature to large, 15–90 lbs).",
  exercise: "Moderate to high; enjoys play and walks.",
  grooming: "Curly coat; requires regular grooming.",
  health: "Hip dysplasia, allergies, ear infections.",
  training: "Highly trainable; eager to please.",
  funFacts: [
    "Popular designer breed.",
    "Known for hypoallergenic coats.",
    "Excellent therapy and assistance dogs."
  ],
  image: "images/goldendoodle.jpg"
},
{
  name: "Golden Retriever",
  origin: "Scotland, late 19th century",
  history: "Developed by Lord Tweedmouth by crossing Flat-Coated Retrievers...",
  temperament: "Gentle, affectionate, intelligent, eager to please.",
  lifespan: "10–12 years",
  size: "Medium-large, 55–75 lbs",
  exercise: "Needs 1–2 hours daily; loves swimming and retrieving.",
  grooming: "Heavy shedding; weekly brushing.",
  health: "Hip dysplasia, cancer, heart issues.",
  training: "Highly trainable; excels in obedience, therapy, and assistance work.",
  funFacts: [
    "One of the most popular family dogs worldwide.",
    "Known for their love of water.",
    "Often used as guide dogs."
  ],
  image: "images/goldenretriever.jpg"
},
{
  name: "Greater Swiss Mountain Dog",
  origin: "Switzerland",
  history: "One of four Swiss mountain breeds. Used as draft dogs, herders, and farm guardians. Larger and shorter-haired than the Bernese Mountain Dog.",
  temperament: "Gentle, loyal, protective, calm.",
  lifespan: "8–11 years",
  size: "Large, 85–140 lbs",
  exercise: "Moderate; enjoys pulling carts and long walks.",
  grooming: "Short coat; minimal grooming.",
  health: "Hip dysplasia, bloat, epilepsy.",
  training: "Responsive; needs consistent training.",
  funFacts: [
    "Known as 'Swissy'.",
    "Excellent draft dogs.",
    "Distinctive tri-color coat."
  ],
  image: "images/greatswissmountaindog.jpg"
},
{
  name: "Siberian Husky",
  origin: "Siberia, Russia",
  history: "Developed by the Chukchi people thousands of years ago to pull sleds over vast Arctic terrain. Brought to Alaska in 1909 for sled racing, they became famous during the 1925 serum run to Nome.",
  temperament: "Friendly, energetic, mischievous, pack-oriented.",
  lifespan: "12–15 years",
  size: "Medium, 35–60 lbs",
  exercise: "Extremely high energy; needs 2+ hours daily, thrives on running.",
  grooming: "Thick double coat; heavy seasonal shedding.",
  health: "Hip dysplasia, eye issues, hypothyroidism.",
  training: "Independent and stubborn; requires patience and consistency.",
  funFacts: [
    "Known for their wolf-like appearance and striking blue eyes.",
    "Can run over 100 miles in a day.",
    "Famous for the 1925 serum run to Nome."
  ],
  image: "images/husky.jpg"
},
{
  name: "Leonberger",
  origin: "Germany, 19th century",
  history: "Bred in Leonberg, Germany by crossing Newfoundland, St. Bernard, and Great Pyrenees...",
  temperament: "Gentle, affectionate, loyal, protective.",
  lifespan: "8–10 years",
  size: "Giant, 90–170 lbs",
  exercise: "Moderate; enjoys swimming and long walks.",
  grooming: "Thick double coat; heavy shedding, regular brushing.",
  health: "Hip dysplasia, heart disease, cancer.",
  training: "Responsive and eager to please; needs early socialization.",
  funFacts: [
    "Nicknamed 'gentle lions'.",
    "Favored by Napoleon III and King Edward VII.",
    "Excellent water rescue dogs."
  ],
  image: "images/leonberger.jpg"
},
{
  name: "Newfoundland",
  origin: "Canada, Newfoundland island",
  history: "Developed by fishermen in Newfoundland as working dogs to haul nets...",
  temperament: "Gentle, patient, affectionate, protective.",
  lifespan: "9–10 years",
  size: "Giant, 100–150 lbs",
  exercise: "Moderate; enjoys swimming and pulling.",
  grooming: "Thick water-resistant coat; heavy shedding.",
  health: "Hip dysplasia, heart disease, cystinuria.",
  training: "Gentle and responsive; thrives on positive reinforcement.",
  funFacts: [
    "Known as 'Newfies'.",
    "Excellent swimmers with webbed feet.",
    "Famous for saving lives in water rescues."
  ],
  image: "images/newfoundland.jpg"
},
{
  name: "Pomeranian",
  origin: "Pomerania region (Poland/Germany), 18th century",
  history: "Descended from large sled dogs of the Spitz family. Bred down in size to become companion dogs. Popularized by Queen Victoria, who owned several and helped establish the modern small Pomeranian.",
  temperament: "Alert, lively, bold, affectionate.",
  lifespan: "12–16 years",
  size: "Toy, 3–7 lbs",
  exercise: "Low to moderate; enjoys play and short walks.",
  grooming: "Thick fluffy coat; requires regular grooming.",
  health: "Dental issues, luxating patella, tracheal collapse.",
  training: "Smart but stubborn; responds well to positive reinforcement.",
  funFacts: [
    "Queen Victoria helped popularize the breed.",
    "Despite size, they have big personalities.",
    "Descended from large sled dogs."
  ],
  image: "images/pomeranian.jpg"
},
{
  name: "Rottweiler",
  origin: "Germany, Roman era origins",
  history: "Descended from Roman drover dogs used to herd cattle. In Rottweil, Germany, they became known as 'butcher’s dogs' for pulling carts of meat and guarding livestock. Modern Rottweilers are used as police, guard, and rescue dogs.",
  temperament: "Confident, loyal, protective, intelligent.",
  lifespan: "8–10 years",
  size: "Large, 80–135 lbs",
  exercise: "High energy; needs 1–2 hours daily.",
  grooming: "Short coat; minimal grooming.",
  health: "Hip dysplasia, heart disease, cancer.",
  training: "Highly trainable; needs firm, consistent leadership.",
  funFacts: [
    "Known as 'Rottweil Butcher’s Dogs'.",
    "Excellent guard and working dogs.",
    "Descended from Roman drover dogs."
  ],
  image: "images/rottweiler.jpg"
},
{
  name: "Schnauzer",
  origin: "Germany, 15th century",
  history: "Developed in Bavaria as farm dogs, rat catchers, and guards. The name comes from the German word for 'snout' or 'mustache,' referencing their distinctive facial hair. Three sizes exist: Miniature, Standard, and Giant.",
  temperament: "Alert, spirited, intelligent, protective.",
  lifespan: "12–16 years",
  size: "Varies: Miniature (11–20 lbs), Standard (30–50 lbs), Giant (55–85 lbs).",
  exercise: "Moderate to high; enjoys play, walks, and agility.",
  grooming: "Distinctive wiry coat; requires regular grooming and trimming.",
  health: "Hip dysplasia, eye issues, pancreatitis.",
  training: "Smart and eager; responds well to consistent training.",
  funFacts: [
    "Recognized by their bushy eyebrows and beard.",
    "Originally bred as rat catchers.",
    "Come in three distinct sizes."
  ],
  image: "images/schnauzer.jpg"
},
{
  name: "Shetland Sheepdog",
  origin: "Scotland, Shetland Islands",
  history: "...",
  temperament: "...",
  lifespan: "12–14 years",
  size: "Small-medium, 15–25 lbs",
  exercise: "Moderate; enjoys herding and agility.",
  grooming: "Long double coat; heavy shedding, regular brushing.",
  health: "Collie eye anomaly, hip dysplasia.",
  training: "Highly trainable; excels in obedience and agility.",
  funFacts: [
    "Resemble miniature Rough Collies.",
    "Excellent herding dogs despite small size.",
    "Known for their agility and obedience skills."
  ],
  image: "images/shetland.jpg"
},
{
  name: "Shih Tzu",
  origin: "China, ancient breed",
  history: "Bred as lapdogs for Chinese royalty, particularly during the Ming and Qing dynasties. Their name means 'lion dog' in Mandarin.",
  temperament: "Affectionate, playful, outgoing, stubborn.",
  lifespan: "10–16 years",
  size: "Toy, 9–16 lbs",
  exercise: "Low; enjoys short walks and play.",
  grooming: "Long flowing coat; requires daily grooming.",
  health: "Eye issues, breathing problems, dental disease.",
  training: "Independent; requires patience.",
  funFacts: [
    "Favored by Chinese emperors.",
    "Name means 'lion dog'.",
    "Known for their luxurious coats."
  ],
  image: "images/shihtzu.jpg"
},
{
  name: "Skye Terrier",
  origin: "Scotland, Isle of Skye",
  history: "Developed in the 16th century to hunt foxes and otters. Known for their long bodies and flowing coats.",
  temperament: "Loyal, affectionate, dignified, reserved.",
  lifespan: "12–14 years",
  size: "Medium, 25–40 lbs",
  exercise: "Moderate; enjoys walks and play.",
  grooming: "Long coat; requires regular grooming.",
  health: "Back problems, hip dysplasia.",
  training: "Responsive but can be stubborn.",
  funFacts: [
    "One of the oldest terrier breeds.",
    "Favored by Queen Victoria.",
    "Known for their long, elegant coats."
  ],
  image: "images/skyeterrier.jpg"
},
{
  name: "Scottish Terrier",
  origin: "Scotland, 18th century",
  history: "Developed as vermin hunters in the Scottish Highlands. Known as 'Scotties,' they became popular companions and show dogs.",
  temperament: "Independent, confident, loyal, dignified.",
  lifespan: "11–13 years",
  size: "Small, 18–22 lbs",
  exercise: "Moderate; enjoys play and walks.",
  grooming: "Distinctive wiry coat; requires regular grooming.",
  health: "Scottie cramp, bladder cancer, hip dysplasia.",
  training: "Independent; requires firm, consistent training.",
  funFacts: [
    "Famous for their silhouette in Monopoly pieces.",
    "Known as 'Diehard' for their determination.",
    "Popular with US presidents like FDR."
  ],
  image: "images/scottishterrier.jpg"
},
{
  name: "Springer Spaniel",
  origin: "England, 19th century",
  history: "Developed as hunting dogs to flush game birds from cover. Two types exist: English Springer Spaniel and Welsh Springer Spaniel.",
  temperament: "Friendly, energetic, affectionate, eager to please.",
  lifespan: "12–14 years",
  size: "Medium, 40–50 lbs",
  exercise: "High energy; needs 1–2 hours daily.",
  grooming: "Medium-length coat; requires regular grooming.",
  health: "Hip dysplasia, ear infections, eye issues.",
  training: "Highly trainable; excels in obedience and field work.",
  funFacts: [
    "Name comes from their ability to 'spring' game from cover.",
    "Excellent hunting companions.",
    "Known for their cheerful personalities."
  ],
  image: "images/springerspaniel.jpg"
},
{
  name: "St Bernard",
  origin: "Switzerland, 17th century",
  history: "Developed by monks at the Great St. Bernard Hospice in the Alps to rescue travelers...",
  temperament: "Gentle, patient, affectionate, protective.",
  lifespan: "8–10 years",
  size: "Giant, 120–180 lbs",
  exercise: "Moderate; enjoys walks and play.",
  grooming: "Thick coat; heavy shedding, regular brushing.",
  health: "Hip dysplasia, bloat, heart disease.",
  training: "Gentle and responsive; needs early socialization.",
  funFacts: [
    "Famous for rescue work in the Alps.",
    "Often depicted with brandy barrels around their necks.",
    "Known as gentle giants."
  ],
  image: "images/stbernard.jpg"
},
{
  name: "Tibetan Mastiff",
  origin: "Tibet, ancient breed",
  history: "One of the oldest and most powerful guardian breeds. Used by nomadic tribes to protect flocks and monasteries. Revered in Tibetan culture.",
  temperament: "Independent, protective, loyal, aloof.",
  lifespan: "10–12 years",
  size: "Large, 90–150 lbs",
  exercise: "Moderate; enjoys guarding and patrol.",
  grooming: "Thick double coat; heavy seasonal shedding.",
  health: "Hip dysplasia, thyroid issues.",
  training: "Independent; requires firm, experienced handling.",
  funFacts: [
    "Known as fierce guardians in Tibet.",
    "Can withstand extreme cold.",
    "One of the most ancient dog breeds."
  ],
  image: "images/tibetanmastiff.jpg"
}
]; // <-- closes the array and the const dogBreeds declaration
