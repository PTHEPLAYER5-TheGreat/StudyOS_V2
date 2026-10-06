const ACCESS_CODE = "STUDY10";

const DATA = {
  "Mathematics": [
    ["Real Numbers","Euclid's division algorithm, HCF/LCM and irrationality.","Use the algorithm carefully; in proofs, state assumptions and reach a contradiction.",["Euclid's division lemma: a=bq+r, 0≤r<b.","HCF can be found by repeated division.","For two positive integers: HCF × LCM = product.","Irrationality proofs often assume rationality first."],"Number System"],
    ["Polynomials","Zeros, relationships between coefficients and graphical meaning.","Write the polynomial form first, then compare coefficients or use the zero relation.",["For ax²+bx+c, sum of zeroes = −b/a.","Product of zeroes = c/a.","A zero is an x-value where the graph meets the x-axis.","Division algorithm connects dividend, divisor, quotient and remainder."],"Algebra"],
    ["Pair of Linear Equations in Two Variables","Graphical and algebraic methods for solving simultaneous equations.","Check whether the pair has one solution, no solution or infinitely many before solving.",["Unique solution when a₁/a₂ ≠ b₁/b₂.","No solution when a₁/a₂ = b₁/b₂ ≠ c₁/c₂.","Infinitely many solutions when all three ratios are equal.","Substitution, elimination and cross-multiplication are standard methods."],"Algebra"],
    ["Quadratic Equations","Roots, discriminant and factorisation.","Identify a, b and c before applying the formula.",["Standard form: ax²+bx+c=0.","Discriminant D=b²−4ac.","D>0: two distinct real roots; D=0: equal roots; D<0: no real roots.","Roots: x=(−b±√D)/(2a)."],"Algebra"],
    ["Arithmetic Progressions","nth term and sum of an AP.","Write a, d and n explicitly before substituting.",["nth term: aₙ=a+(n−1)d.","Sum: Sₙ=n/2[2a+(n−1)d].","Also Sₙ=n/2(a+l).","A common difference is constant throughout an AP."],"Sequences"],
    ["Triangles","Similarity, proportional sides and theorem applications.","Draw the figure, mark equal angles/sides, then name the similarity criterion.",["AAA, SAS and SSS are key similarity criteria.","Basic proportionality theorem relates parallel lines and sides.","Similar triangles have proportional corresponding sides.","Areas of similar triangles are proportional to squares of corresponding sides."],"Geometry"],
    ["Circles","Tangents and properties of circles.","Name the radius and tangent point clearly in proofs.",["Tangent at a point is perpendicular to the radius through that point.","Tangents from an external point are equal.","Use right triangles when proving tangent properties.","A radius drawn to a tangent point gives a 90° angle."],"Geometry"],
    ["Coordinate Geometry","Distance, section formula and area of triangles.","Keep coordinates in ordered pairs and simplify square roots carefully.",["Distance = √[(x₂−x₁)²+(y₂−y₁)²].","Section formula internally: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)).","Midpoint is the special case m=n.","Collinear points give triangle area 0."],"Coordinate Geometry"],
    ["Introduction to Trigonometry","Ratios, identities and standard angles.","Make a right-triangle sketch and identify opposite, adjacent and hypotenuse.",["sin θ=P/H, cos θ=B/H, tan θ=P/B.","tan θ=sin θ/cos θ.","sin²θ+cos²θ=1.","Memorise values for 0°, 30°, 45°, 60°, 90°."],"Trigonometry"],
    ["Some Applications of Trigonometry","Heights and distances using angles of elevation/depression.","Draw a labelled diagram before writing an equation.",["Angle of elevation is measured upward from the horizontal.","Angle of depression is measured downward from the horizontal.","Choose tan when opposite and adjacent are convenient.","Keep units consistent."],"Trigonometry"],
    ["Areas Related to Circles","Circumference, sectors and segments.","Convert degrees to the correct fraction of a full circle.",["Circumference = 2πr.","Area = πr².","Sector area = θ/360 × πr².","Arc length = θ/360 × 2πr."],"Mensuration"],
    ["Surface Areas and Volumes","Solids, combinations and conversions.","Write the required quantity first: CSA, TSA or volume.",["Cylinder: V=πr²h.","Cone: V=1/3πr²h.","Sphere: V=4/3πr³.","Convert cm³ to litres only when required."],"Mensuration"],
    ["Statistics","Grouped data, mean, median and mode.","Make a clean frequency table before calculating.",["Mean uses frequency-weighted values.","Median uses cumulative frequency.","Mode is the most frequent value/class.","For grouped data, identify class boundaries and class width correctly."],"Data Handling"],
    ["Probability","Classical probability and basic events.","List favourable and total outcomes before simplifying.",["P(E)=favourable outcomes/total outcomes.","0≤P(E)≤1.","P(not E)=1−P(E).","For equally likely outcomes, counting is the key step."],"Probability"]
  ],
  "Science": [
    ["Light – Reflection and Refraction","Ray diagrams, mirrors, lenses and the mirror/lens formulae.","Draw the principal ray diagram first and keep the sign convention consistent.",["Mirror formula: 1/f=1/v+1/u.","Magnification for mirror: m=−v/u.","Lens formula: 1/f=1/v−1/u.","Power of lens P=1/f in metre, measured in dioptre."],"Physics"],
    ["The Human Eye and the Colourful World","Eye defects, accommodation, dispersion and atmospheric effects.","For defects, identify the problem and then the correcting lens.",["Myopia is corrected with a concave lens.","Hypermetropia is corrected with a convex lens.","Presbyopia relates to reduced accommodation with age.","Dispersion separates white light into colours."],"Physics"],
    ["Electricity","Current, potential difference, resistance, power and circuits.","Write the given values with units before selecting the formula.",["I=Q/t.","V=IR.","R=ρL/A.","P=VI=I²R=V²/R."],"Physics"],
    ["Magnetic Effects of Electric Current","Magnetic fields, solenoids, Fleming rules and electromagnetic induction.","Use the hand/rule diagrams instead of guessing directions.",["Current-carrying conductors create magnetic fields.","Right-hand thumb rule gives field direction around a straight conductor.","Fleming's left-hand rule gives force direction.","Electromagnetic induction produces current due to changing magnetic field."],"Physics"],
    ["Sources of Energy","Renewable and non-renewable sources; advantages and limitations.","Compare sources using pollution, renewability, efficiency and availability.",["Solar, wind, hydro and biomass are renewable.","Fossil fuels are exhaustible and polluting.","A good energy source should be economical and convenient.","No source is completely impact-free."],"Physics"],
    ["Chemical Reactions and Equations","Types of reactions, balancing and oxidation/reduction.","Balance atoms systematically and never change chemical formulae.",["Combination, decomposition, displacement and double displacement are common types.","Oxidation can involve gain of oxygen or loss of hydrogen/electrons.","Reduction is the complementary process.","Balanced equations obey conservation of mass."],"Chemistry"],
    ["Acids, Bases and Salts","Indicators, pH, reactions and important salts.","Write the reaction and identify the gas/compound formed.",["Acids release H+ in aqueous solution.","Bases release OH− in aqueous solution.","pH below 7 is acidic; above 7 is basic.","Baking soda, washing soda, bleaching powder and POP have important uses."],"Chemistry"],
    ["Metals and Non-metals","Properties, reactivity, extraction and corrosion.","Use the reactivity series to predict displacement/extraction behaviour.",["More reactive metals displace less reactive metals.","Ionic compounds generally have high melting points.","Corrosion can be controlled by painting, galvanising or alloying.","Extraction method depends on reactivity."],"Chemistry"],
    ["Carbon and its Compounds","Covalent bonding, homologous series, reactions and functional groups.","Draw structural formulae neatly and identify the functional group.",["Carbon shows tetravalency and catenation.","Homologous series members differ by CH₂.","Saturated compounds contain single bonds; unsaturated contain multiple bonds.","Ethanol and ethanoic acid have important reactions and uses."],"Chemistry"],
    ["Periodic Classification of Elements","Modern periodic table, trends and valency.","Use group and period position to infer properties.",["Modern periodic law is based on atomic number.","Valency is related to valence electrons.","Atomic size generally decreases across a period.","Metallic character generally decreases across a period."],"Chemistry"],
    ["Life Processes","Nutrition, respiration, transportation and excretion.","Use labelled diagrams for major biological systems.",["Photosynthesis converts light energy into chemical energy.","Aerobic respiration releases more energy than anaerobic respiration.","Xylem transports water; phloem transports food.","Nephron is the functional unit of kidney."],"Biology"],
    ["Control and Coordination","Nervous system, reflex action and plant hormones.","Distinguish stimulus, receptor, coordinator and effector.",["Neuron is the basic unit of nervous system.","Reflex action is rapid and often coordinated through spinal cord.","Auxin, gibberellin, cytokinin, ethylene and ABA are key plant hormones.","Endocrine glands release hormones into blood."],"Biology"],
    ["How do Organisms Reproduce?","Asexual/sexual reproduction, human reproduction and reproductive health.","Use labelled diagrams and distinguish processes precisely.",["Asexual reproduction involves one parent and generally produces similar offspring.","Sexual reproduction involves fusion of gametes.","Pollination and fertilisation are different events.","Reproductive health includes hygiene, awareness and responsible choices."],"Biology"],
    ["Heredity","Mendel, traits, variation and sex determination.","Use Punnett squares and write genotype/phenotype separately.",["Genes carry information for traits.","Dominant traits can mask recessive traits in heterozygotes.","Mendel's monohybrid cross gives a 3:1 phenotypic ratio in the classic case.","Human sex determination involves XX/XY chromosomes."],"Biology"],
    ["Our Environment","Food chains, trophic levels, ozone and waste.","Trace energy flow from producers upward.",["Energy decreases at successive trophic levels.","Food chains begin with producers.","Biodegradable waste is broken down by microorganisms.","Ozone protects against harmful ultraviolet radiation."],"Biology"],
    ["Sustainable Management of Natural Resources","Conservation, water harvesting, forests and sustainable use.","Frame answers around conservation, participation and long-term use.",["Sustainable development balances present and future needs.","Local communities can play an important role in conservation.","Rainwater harvesting improves groundwater availability.","Reduce, reuse and recycle conserve resources."],"Biology"]
  ],
  "Social Science": [
    ["The Rise of Nationalism in Europe","Nationalism, liberalism, unification and the nation-state.","Build a timeline and connect events to political ideas.",["French Revolution promoted ideas of nation and citizenship.","Germany unified under Prussian leadership.","Italy unified through several political and military developments.","Nationalism could unify states but also create conflict."],"History"],
    ["Nationalism in India","Gandhian movements, symbols, participation and limits.","Answer with causes, course and impact in separate points.",["Non-Cooperation Movement began in 1920.","Civil Disobedience Movement followed the Salt March.","Different social groups joined with different expectations.","National symbols helped create a shared identity."],"History"],
    ["The Making of a Global World","Trade, migration, technology and globalisation over time.","Use the three-phase structure: pre-modern, nineteenth century, post-war.",["Trade connected distant regions before modern times.","Indentured labour shaped migration patterns.","Technology reduced transport and communication barriers.","Globalisation has both opportunities and inequalities."],"History"],
    ["The Age of Industrialisation","Factories, workers, markets and industrial change.","Distinguish proto-industrialisation from factory production.",["Industrialisation did not immediately replace hand production.","Factories concentrated workers and machinery.","Colonial markets affected Indian industries.","Small producers and handloom workers adapted in different ways."],"History"],
    ["Print Culture and the Modern World","Printing, public opinion, reform and censorship.","Link print technology to social and political change.",["Printing expanded access to ideas.","Religious debates and reform movements used print.","Newspapers helped shape public opinion.","Colonial governments sometimes restricted printed material."],"History"],
    ["Resources and Development","Resource classification, planning, conservation and land use.","Use classification tables and examples in long answers.",["Resources can be biotic/abiotic and renewable/non-renewable.","Resource planning has multiple stages.","Land resources face degradation from several activities.","Sustainable development requires careful management."],"Geography"],
    ["Forest and Wildlife Resources","Biodiversity, conservation and community participation.","Use examples of protected areas and conservation approaches.",["Biodiversity includes plants, animals and microorganisms.","Habitat loss is a major threat.","National parks, wildlife sanctuaries and biosphere reserves protect biodiversity.","Community participation can strengthen conservation."],"Geography"],
    ["Water Resources","Dams, irrigation, scarcity and rainwater harvesting.","Give both benefits and criticisms of multipurpose projects.",["Water scarcity can result from overuse and unequal access.","Multipurpose projects support irrigation and power.","Large dams can displace people and alter ecosystems.","Rainwater harvesting supports local water security."],"Geography"],
    ["Agriculture","Farming systems, major crops and technological change.","For crops, remember climate, soil and producing regions.",["India has varied farming systems.","Rice needs high temperature and rainfall.","Wheat prefers cooler growing conditions.","Commercial crops include cotton, jute, sugarcane, tea and coffee."],"Geography"],
    ["Manufacturing Industries","Industrial location, sectors, pollution and sustainability.","Use industry → location factors → problems → solutions.",["Manufacturing adds value to raw materials.","Location depends on raw materials, labour, power, capital and markets.","Industrial pollution affects air, water and land.","Cleaner technology reduces environmental impact."],"Geography"],
    ["Lifelines of National Economy","Transport, communication, trade and tourism.","Use comparisons between transport modes.",["Roads provide door-to-door connectivity.","Railways carry bulk goods and passengers.","Ports support international trade.","Communication networks and tourism connect regions."],"Geography"],
    ["Power Sharing","Forms, reasons and Belgium/Sri Lanka case studies.","Always state why power sharing is desirable.",["Power sharing reduces conflict.","It is a prudential and moral reason for democracy.","Belgium used accommodation to manage diversity.","Majoritarianism created conflict in Sri Lanka."],"Political Science"],
    ["Federalism","Levels of government, features and Indian federal practice.","List features first, then give Indian examples.",["Federalism has multiple levels of government.","Constitutional division of powers is important.","India has Union, State and local levels.","Language policy and decentralisation strengthened federalism."],"Political Science"],
    ["Gender, Religion and Caste","Social differences, inequality and political expression.","Avoid treating social divisions as identical; explain their different effects.",["Gender division often reflects social expectations.","Communalism can become political when religion is used for domination.","Caste inequalities have historical roots.","Democracy can provide channels for addressing inequalities."],"Political Science"],
    ["Political Parties","Functions, challenges and reforms.","Structure answers as functions → challenges → reforms.",["Parties contest elections and form governments.","They shape public opinion and policies.","Challenges include lack of internal democracy and dynastic succession.","Reforms aim to increase transparency and participation."],"Political Science"],
    ["Outcomes of Democracy","Accountability, development, inequality and dignity.","Balance strengths and limitations rather than making absolute claims.",["Democracy promotes accountable government.","Decision-making can be slower because of consultation.","Economic inequality may persist.","Democracy can enhance dignity and freedom."],"Political Science"],
    ["Challenges to Democracy","Foundational, expansion and deepening challenges.","Name the challenge before giving examples or remedies.",["Foundational challenges involve establishing democratic institutions.","Expansion involves extending democratic principles.","Deepening focuses on participation and accountability.","Political reforms need citizen participation."],"Political Science"],
    ["Development","Income, public facilities, sustainability and comparisons.","Do not use income alone when comparing development.",["Different people have different development goals.","Per capita income is one measure, not the only one.","Public facilities such as health and education matter.","Sustainable development considers future generations."],"Economics"],
    ["Sectors of the Indian Economy","Primary, secondary, tertiary, organised/unorganised and employment.","Classify each example before explaining it.",["Primary sector uses natural resources.","Secondary sector transforms materials.","Tertiary sector provides services.","Organised and unorganised sectors differ in regulation and worker protection."],"Economics"],
    ["Money and Credit","Money, banks, formal/informal credit and SHGs.","Compare formal and informal sources using interest, regulation and access.",["Money removes the need for double coincidence of wants.","Banks accept deposits and provide loans.","Formal credit is supervised and generally has clearer terms.","Self-help groups can improve access to small loans."],"Economics"],
    ["Globalisation and the Indian Economy","MNCs, production networks, liberalisation and impacts.","Give both positive and negative effects with examples.",["MNCs organise production across countries.","Liberalisation reduced several trade barriers.","Consumers may get more choice and competition.","Benefits can be uneven across producers and workers."],"Economics"],
    ["Consumer Rights","Consumer awareness, quality marks, complaints and responsibilities.","Write the right, then explain how it protects consumers.",["Consumers have rights to safety and information.","Quality marks include ISI, Agmark and Hallmark for relevant products.","Bills and receipts help with complaints.","Consumer awareness reduces exploitation."],"Economics"]
  ],
  "English": [
    ["A Letter to God","Faith, irony, kindness and the contrast between expectation and reality.","For literature answers, use the event + character quality + textual implication structure.",["Lencho's faith drives the story.","The post office workers respond with kindness.","The ending uses irony.","The story contrasts human generosity with Lencho's suspicion."],"First Flight"],
    ["Nelson Mandela: Long Walk to Freedom","Freedom, courage, sacrifice and the inauguration.","Use the author's ideas about individual and collective freedom.",["Mandela links personal freedom with freedom of others.","Apartheid denied basic human dignity.","Courage is presented as triumph over fear.","The inauguration symbolises a new democratic South Africa."],"First Flight"],
    ["Two Stories about Flying","Fear, confidence, mystery and overcoming hesitation.","Separate the two stories and compare their central ideas.",["The young seagull overcomes fear through necessity.","The pilot in the second story experiences a mysterious encounter.","Both stories involve uncertainty and courage.","Setting contributes strongly to the mood."],"First Flight"],
    ["From the Diary of Anne Frank","Adolescence, loneliness, writing and self-reflection.","Use Anne's diary entries to show her personality and observations.",["Anne sees writing as a way to process thoughts.","She feels she lacks a true confidante.","Her classroom experiences reveal humour and intelligence.","The diary gives an intimate view of adolescence."],"First Flight"],
    ["Glimpses of India","Culture, food, landscapes and regional identity.","Remember the three parts separately and use specific details.",["Goa section focuses on bread-making traditions.","Coorg presents landscape, people and culture.","Assam section focuses on tea plantations and production.","The chapter celebrates India's diversity."],"First Flight"],
    ["Mijbil the Otter","Human-animal bond, curiosity and adaptation.","Use behaviour details to explain Mij's personality.",["Mij is playful and intelligent.","The narrator develops a strong bond with him.","Travel creates practical difficulties.","The narrative mixes affection with humour."],"First Flight"],
    ["Madam Rides the Bus","Curiosity, independence, maturity and observation.","Track Valli's plan, journey and changed understanding.",["Valli carefully saves money for the bus ride.","She observes adults and the town closely.","The journey gives her independence.","The dead cow changes the emotional tone of the return journey."],"First Flight"],
    ["The Sermon at Benares","Grief, impermanence and acceptance.","Explain Kisa Gotami's change in understanding.",["Kisa Gotami seeks a cure for her dead child.","The Buddha teaches through the mustard-seed task.","She realises death is universal.","Acceptance reduces attachment to personal grief."],"First Flight"],
    ["The Proposal","Comedy, marriage, greed and argument.","For drama answers, identify the comic trigger and escalation.",["Lomov visits to propose marriage.","Arguments about land and dogs interrupt the proposal.","The characters exaggerate petty disputes.","The play uses farce and irony."],"First Flight"],
    ["A Triumph of Surgery","Overfeeding, discipline, friendship and change.","Track the cause → treatment → recovery sequence.",["Tricki becomes ill because of overindulgence.","The vet changes his routine and diet.","Other dogs provide activity and social interaction.","Mrs Pumphrey learns that care is not the same as overfeeding."],"Footprints"],
    ["The Thief's Story","Trust, education and transformation.","Show how Anil's trust affects Hari Singh's choices.",["Hari Singh is an experienced young thief.","Anil offers trust and education.","Hari returns after taking money.","The story suggests trust and education can encourage change."],"Footprints"],
    ["The Midnight Visitor","Appearance, intelligence and presence of mind.","Explain how Ausable defeats Max without physical strength.",["Ausable appears unlike the stereotypical secret agent.","He invents a story about a balcony.","Max believes the invented threat.","Ausable's intelligence solves the danger."],"Footprints"],
    ["A Question of Trust","Crime, deception and irony.","Compare the thief's expectations with the actual deception.",["Horace Danby plans carefully but is still deceived.","The woman pretends to be the owner.","Horace's knowledge of locks does not save him.","Irony drives the ending."],"Footprints"],
    ["Footprints Without Feet","Invisibility, misuse of science and consequences.","Link Griffin's scientific ability to his irresponsible choices.",["Griffin discovers invisibility.","He uses science for theft and escape.","His isolation grows as he misuses his ability.","The story raises questions about responsibility."],"Footprints"],
    ["The Making of a Scientist","Curiosity, persistence, mentoring and scientific thinking.","Show the stages that turn interest into disciplined research.",["Richard Ebright develops curiosity through observation.","His mother encourages learning and discipline.","Experiments lead to deeper scientific questions.","Persistence matters more than instant success."],"Footprints"],
    ["The Necklace","Appearance, pride, consequences and irony.","Track the chain of decisions that causes the major reversal.",["Matilda is dissatisfied with her ordinary life.","The borrowed necklace appears to offer social status.","The replacement creates years of hardship.","The ending creates strong situational irony."],"Footprints"],
    ["Bholi","Education, confidence, dignity and rejection of exploitation.","Contrast Bholi at the beginning and end.",["Bholi initially lacks confidence because of her experiences.","Education helps her speak and think independently.","She rejects a disrespectful marriage proposal.","The story presents education as empowerment."],"Footprints"],
    ["The Book That Saved the Earth","Satire, misunderstanding and the power of books.","Use the play's comic misunderstandings to explain the message.",["Martians misunderstand a nursery rhyme book.","Think-Tank's assumptions drive the comic plot.","The title is deliberately ironic and humorous.","The play celebrates books and knowledge."],"Footprints"],
    ["Formal Letter","Format, tone, purpose and concise argument.","Use a clear subject, formal salutation, organised paragraphs and appropriate closing.",["State purpose early.","Use formal, respectful language.","Give evidence or reasons in logical order.","Keep within the required word limit and format."],"Writing"],
    ["Analytical Paragraph","Data interpretation, comparison and objective writing.","Start with an overview, then compare major features using evidence.",["Identify the overall trend first.","Use exact figures only when useful.","Compare rather than list every data point.","Avoid personal opinions unless the task requires interpretation."],"Writing"]
  ]
};

const METHODS = {
  Mathematics:"State the formula/theorem, substitute clearly, show working and box the final answer with units where applicable.",
  Science:"Use the correct law/definition, write equations neatly, label diagrams and include units. For long answers, use point form.",
  "Social Science":"Use headings and 3–6 precise points. Add dates, examples, places or keywords where they strengthen the answer.",
  English:"Answer the exact question, support with events/ideas from the text, and keep the response within the requested word limit."
};

let subject = "Overview";
let activeFilter = "all";
let savedOnly = false;
let currentIndex = 0;
let currentList = [];

const revised = new Set(JSON.parse(localStorage.getItem("sos2-revised") || "[]"));
const bookmarks = new Set(JSON.parse(localStorage.getItem("sos2-bookmarks") || "[]"));

const $ = id => document.getElementById(id);
const keyFor = (s, i) => `${s}::${i}`;

function allItems(){
  return Object.entries(DATA).flatMap(([s, arr]) => arr.map((x,i)=>({subject:s,index:i,data:x,key:keyFor(s,i)})));
}
function save(){
  localStorage.setItem("sos2-revised", JSON.stringify([...revised]));
  localStorage.setItem("sos2-bookmarks", JSON.stringify([...bookmarks]));
  updateStats();
}
function updateStats(){
  const total=allItems().length, done=[...revised].length, saved=[...bookmarks].length;
  const pct=total?Math.round(done/total*100):0;
  $("statChapters").textContent=total;
  $("statDone").textContent=pct+"%";
  $("statSaved").textContent=saved;
  $("progressLabel").textContent=pct+"%";
  $("progressBar").style.width=pct+"%";
  $("revisedCount").textContent=done;
  $("remainingCount").textContent=Math.max(0,total-done);
}
function matches(item, query){
  if(!query) return true;
  const hay=[item.subject,...item.data].join(" ").toLowerCase();
  return hay.includes(query.toLowerCase());
}
function passes(item){
  if(savedOnly && !bookmarks.has(item.key)) return false;
  if(activeFilter==="revised" && !revised.has(item.key)) return false;
  if(activeFilter==="unrevised" && revised.has(item.key)) return false;
  if(activeFilter==="important" && !item.data[3].some(p=>/formula|theorem|ratio|law|key|rights|causes|functions/i.test(p))) return false;
  return true;
}
function card(item){
  const [title,desc,unit]=item.data;
  const done=revised.has(item.key), saved=bookmarks.has(item.key);
  return `<article class="chapter-card">
    <div class="chapter-top"><span class="pill">${unit}</span>
      <button class="bookmark" data-bookmark="${item.key}" title="Save">${saved?"★":"☆"}</button>
    </div>
    <h3>${title}</h3><p>${desc}</p>
    <div class="chapter-bottom">
      <span class="status"><span class="done-dot ${done?"done":""}"></span>${done?"Revised":"Needs revision"}</span>
      <button class="text-button" data-open="${item.key}">Open →</button>
    </div>
  </article>`;
}
function renderLibrary(){
  const q=$("searchInput").value.trim();
  const items=DATA[subject].map((data,index)=>({subject,index,data,key:keyFor(subject,index)})).filter(x=>matches(x,q)&&passes(x));
  $("libraryTitle").textContent=subject;
  $("libraryEyebrow").textContent=subject.toUpperCase();
  $("resultCount").textContent=`${items.length} result${items.length===1?"":"s"}`;
  $("chapterGrid").innerHTML=items.map(card).join("");
  $("emptyState").classList.toggle("hidden",items.length!==0);
  bindCards();
}
function renderOverview(){
  const items=allItems().filter(x=>passes(x)).slice(0,6);
  $("quickGrid").innerHTML=items.map(card).join("");
  bindCards();
}
function bindCards(){
  document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openByKey(b.dataset.open));
  document.querySelectorAll("[data-bookmark]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.bookmark;
    bookmarks.has(k)?bookmarks.delete(k):bookmarks.add(k);
    save(); renderCurrent();
  });
}
function renderCurrent(){
  updateStats();
  if(subject==="Overview"){ $("overview").classList.remove("hidden"); $("library").classList.add("hidden"); renderOverview(); }
  else { $("overview").classList.add("hidden"); $("library").classList.remove("hidden"); renderLibrary(); }
}
function openByKey(k){
  const item=allItems().find(x=>x.key===k); if(!item)return;
  currentList=subject==="Overview"?allItems():DATA[subject].map((data,index)=>({subject,index,data,key:keyFor(subject,index)}));
  currentIndex=Math.max(0,currentList.findIndex(x=>x.key===k));
  showModal(currentList[currentIndex]);
}
function showModal(item){
  const [title,desc,unit,points]=item.data;
  $("modalSubject").textContent=item.subject;
  $("modalUnit").textContent=unit;
  $("modalTitle").textContent=title;
  $("modalDescription").textContent=desc;
  $("modalPoints").innerHTML=points.map(p=>`<li>${p}</li>`).join("");
  $("modalMethod").textContent=METHODS[item.subject] || "Revise the key points, practise a few questions, then mark the chapter as revised.";
  $("bookmarkBtn").textContent=bookmarks.has(item.key)?"★ Saved":"☆ Save";
  $("doneBtn").textContent=revised.has(item.key)?"✓ Revised":"Mark revised";
  $("modal").classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeModal(){ $("modal").classList.add("hidden"); document.body.style.overflow=""; renderCurrent(); }
function navigate(dir){
  if(!currentList.length)return;
  currentIndex=(currentIndex+dir+currentList.length)%currentList.length;
  showModal(currentList[currentIndex]);
}
function setSubject(s){
  subject=s; savedOnly=false; $("savedOnlyBtn").textContent="☆ Saved";
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.subject===s));
  renderCurrent();
}
function randomChapter(){
  const list=allItems().filter(x=>passes(x));
  if(!list.length)return;
  openByKey(list[Math.floor(Math.random()*list.length)].key);
}
function lock(){
  sessionStorage.removeItem("sos2");
  $("app").classList.add("hidden"); $("gate").classList.remove("hidden");
  $("accessCode").value=""; $("accessCode").focus();
}

$("gateForm").onsubmit=e=>{
  e.preventDefault();
  if($("accessCode").value===ACCESS_CODE){
    sessionStorage.setItem("sos2","1"); $("gate").classList.add("hidden"); $("app").classList.remove("hidden"); updateStats();
  } else $("gateError").textContent="That code isn't correct.";
};
$("themeBtn").onclick=()=>{
  const dark=document.documentElement.dataset.theme!=="dark";
  document.documentElement.dataset.theme=dark?"dark":"light";
  localStorage.setItem("sos2theme",dark?"dark":"light");
  $("themeBtn").textContent=dark?"☾":"☼";
};
$("lockBtn").onclick=lock; $("footerLock").onclick=lock;
$("homeBtn").onclick=()=>setSubject("Overview");
$("revisionBtn").onclick=()=>{subject="Mathematics";activeFilter="unrevised";$("searchInput").value="";document.querySelector('[data-subject="Mathematics"]').click();};
$("randomBtn").onclick=randomChapter;
$("focusOpen").onclick=()=>openByKey("Mathematics::5");
$("savedOnlyBtn").onclick=()=>{
  savedOnly=!savedOnly; $("savedOnlyBtn").textContent=savedOnly?"★ Saved":"☆ Saved";
  if(subject==="Overview") renderOverview(); else renderLibrary();
};
$("filterBtn").onclick=()=>$("filterPanel").classList.toggle("hidden");
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{
  activeFilter=b.dataset.filter;
  document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));
  renderCurrent();
});
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>setSubject(b.dataset.subject));
$("searchInput").oninput=()=>renderCurrent();
$("modalClose").onclick=closeModal; $("modalX").onclick=closeModal;
$("modalPrev").onclick=()=>navigate(-1); $("modalNext").onclick=()=>navigate(1);
$("bookmarkBtn").onclick=()=>{
  const item=currentList[currentIndex]; bookmarks.has(item.key)?bookmarks.delete(item.key):bookmarks.add(item.key); save(); showModal(item);
};
$("doneBtn").onclick=()=>{
  const item=currentList[currentIndex];
  revised.has(item.key)?revised.delete(item.key):revised.add(item.key);
  save(); showModal(item);
};
$("resetBtn").onclick=()=>{
  if(confirm("Reset all revision and saved progress?")){
    revised.clear(); bookmarks.clear(); save(); renderCurrent();
  }
};
document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("searchInput").focus();}
  if(e.key==="Escape"&&!$("modal").classList.contains("hidden"))closeModal();
  if(!$("modal").classList.contains("hidden")){
    if(e.key==="ArrowLeft")navigate(-1);
    if(e.key==="ArrowRight")navigate(1);
  }
});

const savedTheme=localStorage.getItem("sos2theme");
if(savedTheme){document.documentElement.dataset.theme=savedTheme;$("themeBtn").textContent=savedTheme==="dark"?"☾":"☼";}
if(sessionStorage.getItem("sos2")==="1"){$("gate").classList.add("hidden");$("app").classList.remove("hidden");}
updateStats();
