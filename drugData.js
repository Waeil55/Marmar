const drugData = [
  {
    question: "Acetaminophen",
    answer: "Brand: Tylenol\nIndication: pain\nClass: Analgesic\nCounseling Points:\n- Do not exceed recommended daily dose of 3g OTC (max of 4g if prescribed)\n- Avoid 3 or more alcoholic drinks/day",
    category: "pain"
  },
  {
    question: "Acyclovir",
    answer: "Brand: Zovirax\nIndication: herpes\nClass: Viral DNA polymerase inhibitor\nCounseling Points:\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days; if they don't or worsen, seek medical attention\n- Take at first signs of symptoms for best efficacy",
    category: "herpes"
  },
  {
    question: "Adalimumab",
    answer: "Brand: Humira\nIndication: Crohn's disease\nClass: Antirheumatic biologic DMARD\nCounseling Points:\n- Store in refrigerator; may be stored at room temp for up to 14 days\n- Rotate injection sites\n- Notify provider if develop SOB or infection\n- Ensure vaccinations are up-to-date BEFORE starting therapy",
    category: "Crohn's disease"
  },
  {
    question: "Albuterol",
    answer: "Brand: ProAir HFA, Proventil HFA, Ventolin HFA, ProAir RespiClick\nIndication: COPD\nClass: Selective B2-adrenergic agonist\nCounseling Points:\n- Instruct patient on proper inhaler technique\n- Wash the mouthpiece and thoroughly dry once a week\n- Do not use more frequently than prescribed\n- DPI does not require shaking or priming but does require deep inhalation\n- When inhaling, hold breath for 10 seconds, if able",
    category: "COPD"
  },
  {
    question: "Alendronate",
    answer: "Brand: Fosamax\nIndication: osteoporosis\nClass: Biphosphonate\nCounseling Points:\n- Remain upright at least 30 minutes after you swallow the tablet\n- Do not eat or drink anything or take other medications for at least 30 minutes after taking alendronate\n- Swallow the non-effervescent tablet whole with a large glass of water",
    category: "osteoporosis"
  },
  {
    question: "Allopurinol",
    answer: "Brand: Zyloprim\nIndication: gout\nClass: Xanthine oxidase inhibitor; antigout\nCounseling Points:\n- Take after meals to lessen gastric irritation\n- Maintain adequate hydration to prevent kidney stones\n- Avoid alcohol and caffeine\n- Seek medical attention if you experience flulike symptoms, spreading red rash, skin blistering",
    category: "gout"
  },
  {
    question: "Alprazolam",
    answer: "Brand: Xanax\nIndication: anxiety\nClass: Benzodiazepine, short or intermediate acting, C-IV\nCounseling Points:\n- May cause drowsiness\n- Avoid alcohol\n- Do not crush or break extended release product\n- Allow ODT to dissolve on your tongue\n- Do not abruptly discontinue use or self-increase dose",
    category: "anxiety"
  },
  {
    question: "Amiodarone",
    answer: "Brand: Pacerone\nIndication: arrhythmias\nClass: antiarrhythmic\nCounseling Points:\n- avoid prolonged sun exposure/tanning beds and use sunscreen\n- take consistently with regard to meals\n- avoid grapefruit\n- multiple drug interactions",
    category: "arrhythmias"
  },
  {
    question: "Amitriptyline",
    answer: "Brand: Elavil\nIndication: depression\nClass: Tricyclic antidepressant\nCounseling Points:\n- May cause drowsiness\n- Avoid alcohol\n- Improvement in symptoms may take a few weeks\n- Avoid sudden discontinuation",
    category: "depression"
  },
  {
    question: "Amlodipine",
    answer: "Brand: Norvasc\nIndication: hypertension\nClass: calcium channel blocker\nCounseling Points:\n- avoid alcohol\n- this medicine may cause dizziness\n- report peripheral edema, fatigue, hypotension",
    category: "hypertension"
  },
  {
    question: "Amoxicillin",
    answer: "Brand: N/A (Amoxil, Moxatag)\nIndication: infection\nClass: B-lactam antiobiotic\nCounseling Points:\n- Complete full course of therapy\n- Store the suspension in the refrigerator, shake well before use\n- Can take with food if stomach upset\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- May decrease effectiveness of oral contraceptives; use backup contraceptive",
    category: "infection"
  },
  {
    question: "Amoxicillin/Clavulanate",
    answer: "Brand: Augmentin\nIndication: infection\nClass: B-lactam antibiotic\nCounseling Points:\n- Complete full course of therapy\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- Take dose with food\n- For suspension, store in refrigerator and shake well\n- May decrease effectiveness of oral contraceptives; use backup contraceptive\n- May cause diarrhea",
    category: "infection"
  },
  {
    question: "Anastrazole",
    answer: "Brand: Arimidex\nIndication: cancer\nClass: aromatase inhibitor\nCounseling Points:\n- seek medical attention if you experience shortness of breath, swelling, chest pain, vaginal bleeding, blistering rash, rapid weight gain, severe nausea and vomiting, yellowing of the eyes or skin\n- take with or without food\n- can cause loss of bone mass density and increased fracture risk",
    category: "cancer"
  },
  {
    question: "Apixaban",
    answer: "Brand: Eliquis\nIndication: anticoagulation\nClass: factor Xa inhibitor\nCounseling Points:\n- take with or without food\n- seek medical attention if having bleeding or trouble breathing\n- do not stop without talking with your doctor\n- avoid NSAIDs and high-dose aspirin\n- do not abruptly stop this medication due to increased risk of thrombotic events (stroke or clots)",
    category: "anticoagulation"
  },
  {
    question: "Aripiprazole",
    answer: "Brand: Abilify\nIndication: schizophrenia\nClass: Second generation antipsychotic\nCounseling Points:\n- May impair heat regulation\n- May lower seizure threshold\n- Report worsening depression, suicidal ideation, or unusual changes in behavior, especially at initiation of therapy or with dose changes\n- Avoid sudden discontinuation\n- Avoid alcohol",
    category: "schizophrenia"
  },
  {
    question: "Aspirin",
    answer: "Brand: N/A (Bayer, Ecotrin)\nIndication: cardiovascular protection, pain\nClass: Salicylate\nCounseling Points:\n- Avoid additional aspirin/NSAID products\n- Avoid 3 or more alcoholic drinks/day\n- Not recommended for children <18 years of age",
    category: "cardiovascular protection, pain"
  },
  {
    question: "Atenolol",
    answer: "Brand: Tenormin\nIndication: hypertension\nClass: B-adrenergic blocker, cardioselective\nCounseling Points:\n- take on an empty stomach\n- avoid abrupt discontinuation\n- may cause dizziness or drowsiness\n- may mask symptoms of hypoglycemia\n- may cause sexual side effects, fatigue, and depression",
    category: "hypertension"
  },
  {
    question: "Atorvastatin",
    answer: "Brand: Lipitor\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- avoid excessive alcohol and grapefruit\n- notify prescriber if having unexplained muscle tenderness or weakness\n- this medication does not replace lifestyle changes (diet, exercise)",
    category: "dyslipidemia"
  },
  {
    question: "Azelastine",
    answer: "Brand: Astelin\nIndication: allergic rhinitis\nClass: Nasal antihistamine\nCounseling Points:\n- Priming required with initial use and if not used for 3 days or longer\n- Blow nose prior to use\n- Do not spray into septum\n- Keep tip of nose spray clean",
    category: "allergic rhinitis"
  },
  {
    question: "Azithromycin",
    answer: "Brand: Zithromax, Z-Pak\nIndication: infection\nClass: Macrolide antibiotic\nCounseling Points:\n- Continue full course of therapy\n- May cause Gl upset\n- Take with or without food\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider",
    category: "infection"
  },
  {
    question: "Baclofen",
    answer: "Brand: N/A (Lioresal)\nIndication: pain, spasticity\nClass: Centrally acting skeletal muscle relaxant\nCounseling Points:\n- Caution that sedation is possible\n- CNS effects may be additive to those of alcohol",
    category: "pain"
  },
  {
    question: "Benazepril",
    answer: "Brand: N/A (Lotensin)\nIndication: hypertension\nClass: ACE-inhibitor, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- seek medical attention if you experience any facial swelling\n- dry cough is common\n- dizziness may worsen if dehydrated\n- take at the same time each day",
    category: "hypertension"
  },
  {
    question: "Benzonatate",
    answer: "Brand: Tessalon, Perles\nIndication: cough\nClass: Antitussive\nCounseling Points:\n- Do not crush or chew capsules\n- Take with food or milk if Gl upset occurs\n- Keep out of reach of children",
    category: "cough"
  },
  {
    question: "Bisoprolol",
    answer: "Brand: N/A\nIndication: hypertension\nClass: cardioselective B-adrenergic blocker\nCounseling Points:\n- may cause drowsiness, depression, or sexual dysfunction\n- may mask signs of low blood sugar\n- may cause orthostatic hypotension\n- do not abruptly discontinue",
    category: "hypertension"
  },
  {
    question: "Budesonide/Formoterol",
    answer: "Brand: Symbicort\nIndication: asthma\nClass: Inhaled corticosteroid/bronchodilator combination\nCounseling Points:\n- Wait 1 minute after initial inhalation and shake inhaler again before next inhalation, if more than 1 inhalation required\n- After inhalation, rinse mouth with water and spit\n- Wash mouthpiece and air-dry once weekly",
    category: "asthma"
  },
  {
    question: "Buprenorphine/naloxone",
    answer: "Brand: Suboxone, Zubsolv\nIndication: opioid dependence\nClass: Opioid partial agonist and antagonist combination, C-III\nCounseling Points:\n- Use a stool softener/laxative for preventing constipation\n- May cause drowsiness\n- Do not crush or swallow SL tablet\n- Do not chew, swallow, or move film after placing it under tongue",
    category: "opioid dependence"
  },
  {
    question: "Bupropion",
    answer: "Brand: Aplenzin, Wellbutrin SR, Wellbutrin XL Zyban\nIndication: depression, smoking cessation\nClass: Monocyclic antidepressant\nCounseling Points:\n- Avoid alcohol and activities requiring mental alertness\n- Take at the same time each day\n- If taking the ER tablet, shell may remain intact and be visible in the stool\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior, or unusual bleeding",
    category: "depression"
  },
  {
    question: "Buspirone",
    answer: "Brand: BuSpar\nIndication: anxiety\nClass: Antianxiety\nCounseling Points:\n- Avoid activities requiring mental alertness until effects are realized\n- Symptomatic improvement might not be seen for a few weeks\n- Do not suddenly discontinue\n- May take with or without food, but be consistent\n- Avoid alcohol and grapefruit",
    category: "anxiety"
  },
  {
    question: "Canagliflozin",
    answer: "Brand: Invokana\nIndication: diabetes\nClass: Antidiabetic agent, sodium glucose cotransporter 2 (SGLT 2) inhibitor\nCounseling Points:\n- Take before the first meal of the day\n- Can cause vaginal infections",
    category: "diabetes"
  },
  {
    question: "Carbamazepine",
    answer: "Brand: Tegretol\nIndication: seizures\nClass: Anticonvulsant\nCounseling Points:\n- May decrease effectiveness of oral contraceptives; use an alternative form of birth control\n- Take with food\n- Avoid alcohol and grapefruit\n- Avoid abrupt discontinuation",
    category: "seizures"
  },
  {
    question: "Carvedilol",
    answer: "Brand: Coreg, Coreg CR\nIndication: hypertension\nClass: a/B-adrenergic blocker\nCounseling Points:\n- take with food or milk\n- avoid abrupt discontinuation\n- can mask symptoms of hypoglycemia",
    category: "hypertension"
  },
  {
    question: "Cefdinir",
    answer: "Brand: Omnicef\nIndication: infection\nClass: Third-generation cephalosporin\nCounseling Points:\n- Complete full course of therapy\n- Shake suspension well, must store at room temperature\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- Separate administration of antacids, iron, and vitamins by 2 hours",
    category: "infection"
  },
  {
    question: "Celecoxib",
    answer: "Brand: Celebrex\nIndication: pain, arthritis\nClass: Cyclooxygenase-2 inhibitor\nCounseling Points:\n- May take with food or milk to decrease Gl upset",
    category: "pain"
  },
  {
    question: "Cephalexin",
    answer: "Brand: Keflex\nIndication: infection\nClass: First-generation cephalosporin\nCounseling Points:\n- Seek medical attentions if rash develops\n- Complete full course of therapy\n- For suspension, shake well and store in the refrigerator\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider",
    category: "infection"
  },
  {
    question: "Cetirizine",
    answer: "Brand: Zyrtec\nIndication: allergies\nClass: Antihistamine\nCounseling Points:\n- Avoid activities requiring mental alertness until drug effects known\n- May cause dizziness or sedative effects",
    category: "allergies"
  },
  {
    question: "Chlorthalidone",
    answer: "Brand: N/A\nIndication: hypertension\nClass: thiazide diuretic\nCounseling Points:\n- take in the morning with food\n- avoid alcohol and NSAIDs\n- may cause dizziness or blurred vision",
    category: "hypertension"
  },
  {
    question: "Cholecalciferol",
    answer: "Brand: Vitamin D3, D-Vi-Sol\nIndication: vitamin deficiency\nClass: dietary supplement\nCounseling Points:\n- some formulations contain sodium or glucose",
    category: "vitamin deficiency"
  },
  {
    question: "Ciprofloxacin",
    answer: "Brand: Cipro, Cipro XR\nIndication: infection\nClass: Fluoroquinolone antibiotic\nCounseling Points:\n- May cause tendon pain\n- Take 2 hours before or 6 hours after milk, antacids, sucralfate or mineral supplements/multivitamins with calcium/iron/zinc",
    category: "infection"
  },
  {
    question: "Citalopram",
    answer: "Brand: Celexa\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Avoid activities requiring mental alertness or coordination until drug effects known\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior, or unusual bleeding\n- Avoid abrupt discontinuation\n- Do not drink alcohol or use NSAIDs or aspirin",
    category: "depression"
  },
  {
    question: "Clindamycin",
    answer: "Brand: Cleocin\nIndication: infection\nClass: Lincosamide antibiotic\nCounseling Points:\n- Complete full course of therapy\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- Take with full glass of water\n- Remain upright for 30 minutes after dose to minimize Gl ulceration",
    category: "infection"
  },
  {
    question: "Clobetasol",
    answer: "Brand: Temovate\nIndication: rash\nClass: topical corticosteroid\nCounseling Points:\n- apply thin layer to affected skin\n- wash hands after administration\n- apply to clean, intact skin\n- avoid contact with eyes and mouth\n- avoid tight fitting clothes/dressing over affected site",
    category: "rash"
  },
  {
    question: "Clonazepam",
    answer: "Brand: Klonopin\nIndication: anxiety\nClass: Benzodiazepine, C-IV\nCounseling Points:\n- May cause drowsiness; avoid driving\n- Avoid concomitant administration with opioids\n- Avoid alcohol",
    category: "anxiety"
  },
  {
    question: "Clonidine",
    answer: "Brand: Catapres, Kapvay\nIndication: hypertension\nClass: a2-adrenergic agonist\nCounseling Points:\n- avoid alcohol\n- may cause nausea, vomiting, insomnia, constipation, fatigue, or dry mouth\n- apply patch to hairless area of intact skin on upper outer arm or chest\n- rotate patch location\n- avoid abrupt discontinuation",
    category: "hypertension"
  },
  {
    question: "Clopidogrel",
    answer: "Brand: Plavix\nIndication: antiplatelet\nClass: platelet aggregation inhibitor\nCounseling Points:\n- report signs/symptoms of bleeding\n- do not abruptly stop therapy",
    category: "antiplatelet"
  },
  {
    question: "Codeine",
    answer: "Brand: N/A (Tylenol with Codeine)\nIndication: pain\nClass: Opioid, C-II (when in combination with acetaminophen, C-III for tablets, C-V for liquid)\nCounseling Points:\n- If using chronically, use laxative for preventing constipation\n- May cause drowsiness; avoid driving\n- Avoid alcohol",
    category: "pain"
  },
  {
    question: "Cyanocobalamin",
    answer: "Brand: (Vitamin B12)\nIndication: vitamin deficiency\nClass: essential B vitamin (B12)\nCounseling Points:\n- may require several weeks for maximum effect\n- take ER products with food\n- avoid alcohol",
    category: "vitamin deficiency"
  },
  {
    question: "Cyclobenzaprine",
    answer: "Brand: Flexeril\nIndication: pain\nClass: Centrally acting skeletal muscle relaxant\nCounseling Points:\n- May cause drowsiness and/or dizziness\n- Take ER capsule same time each day",
    category: "pain"
  },
  {
    question: "Cyclosporine",
    answer: "Brand: Restasis\nIndication: ocular issues\nClass: Calcineurin inhibitor\nCounseling Points:\n- Comes in single-use package\n- Remove contact lenses before using\n- Wait at least 15 minutes before inserting contact lenses after use\n- May be used with artificial tears, 15 minutes before/after use",
    category: "ocular issues"
  },
  {
    question: "Dabigatran",
    answer: "Brand: Pradaxa\nIndication: anticoagulation\nClass: direct oral anticoagulant (DOAC)\nCounseling Points:\n- may be given with or without food\n- do not open capsules\n- increased risk of stroke on discontinuation",
    category: "anticoagulation"
  },
  {
    question: "Dapagliflozin",
    answer: "Brand: Farxiga\nIndication: diabetes\nClass: Antidiabetic agent, sodium-glucose cotransporter 2 (SGLT2) inhibitor\nCounseling Points:\n- Rake before the first meal of the day\n- Can cause UTIs",
    category: "diabetes"
  },
  {
    question: "Desvenlafaxine",
    answer: "Brand: Pristiq\nIndication: depression\nClass: Serotonin/norepinephrine reuptake inhibitor\nCounseling Points:\n- Take with or without food\n- Avoid alcohol\n- Symptomatic improvement may not be seen for a few weeks\n- Do not discontinue abruptly\n- Avoid activities requiring mental alertness until drug effects seen",
    category: "depression"
  },
  {
    question: "Dexmethylphenidate",
    answer: "Brand: Focalin\nIndication: ADHD\nClass: CNS stimulant, C-II\nCounseling Points:\n- Avoid late evening doses due to insomnia\n- May open ER capsule and pour into small amount of food such as applesauce; swallow without chewing",
    category: "ADHD"
  },
  {
    question: "Diazepam",
    answer: "Brand: Valium\nIndication: anxiety\nClass: Benzodiazepine, C-IV\nCounseling Points:\n- May cause drowsiness\n- Avoid driving until effects known\n- Avoid alcohol",
    category: "anxiety"
  },
  {
    question: "Diclofenac",
    answer: "Brand: Voltaren\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset",
    category: "pain"
  },
  {
    question: "Dicyclomine",
    answer: "Brand: Bentyl\nIndication: irritable bowel syndrome\nClass: Antimuscarinic\nCounseling Points:\n- May cause drowsiness\n- Heat exhaustion/stroke can occur due to decreased sweating",
    category: "irritable bowel syndrome"
  },
  {
    question: "Diltiazem",
    answer: "Brand: Cardizem, Cartia XT, Dilacor XR, Dilt-XR, Taztia XT, Tiazac\nIndication: hypertension\nClass: calcium channel blocker\nCounseling Points:\n- do not drink alcohol\n- some products may be opened and sprinkled in applesauce; do not chew; follow with a glass of water\n- administer at the same time of day, either morning or evening\n- follow specific product administration instructions with regards to meals and timing",
    category: "hypertension"
  },
  {
    question: "Docusate",
    answer: "Brand: Colace\nIndication: constipation\nClass: Stool softener\nCounseling Points:\n- May require several days of treatment before effects seen\n- May take in single dose or divided doses\n- Discontinue and notify provider if rectal bleeding occurs",
    category: "constipation"
  },
  {
    question: "Donepezil",
    answer: "Brand: Aricept\nIndication: dementia\nClass: Central cholinesterase inhibitor\nCounseling Points:\n- Take at bedtime with or without food\n- Allow ODT tablet to dissolve on tongue and follow with a glass of water\n- Adverse effects seen more commonly at dose escalation but resolve with continued use",
    category: "dementia"
  },
  {
    question: "Doxazosin",
    answer: "Brand: Cardura, Cardura XL\nIndication: BPH (benign prostatic hyperplasia,) HTN (hypertension)\nClass: al-adreneric blocker\nCounseling Points:\n- may cause dizziness or vertigo\n- rise slowly from sitting or lying position (causes orthostatic hypotension)\n- may cause priapism\n- initial dose should be taken with breakfast",
    category: "BPH"
  },
  {
    question: "Doxycycline",
    answer: "Brand: Vibramycin, Doxy 100\nIndication: infection\nClass: Tetracycline antibiotic\nCounseling Points:\n- May take with food that does not contain calcium\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days\n- May cause photosensitivity, wear sunscreen and avoid prolonged sun exposure/UV light",
    category: "infection"
  },
  {
    question: "Dulaglutide",
    answer: "Brand: Trulicity\nIndication: diabetes\nClass: Antidiabetic agent, glucagon-like peptide-1-receptor agonist\nCounseling Points:\n- Inject subcutaneously into arm, thigh, or abdomen; rotate injection sites\n- Administer once weekly on the same day each week without regard to meals or time of day\n- Do not mix with insulin\n- Keep refrigerated, stable at room temperature for 14 days\n- May cause decreased urination, blood in urine",
    category: "diabetes"
  },
  {
    question: "Duloxetine",
    answer: "Brand: Cymbalta\nIndication: depression, (anxiety)\nClass: Serotonin/norepinephrine reuptake inhibitor\nCounseling Points:\n- Do not abruptly discontinue\n- May cause increased risk of bleeding\n- Symptomatic improvement may not be seen for 1-4 weeks\n- Report worsening depression, suicidal ideation, or unusual changes in behavior",
    category: "depression"
  },
  {
    question: "Enalapril",
    answer: "Brand: N/A (Vasotec)\nIndication: hypertension\nClass: ACEI, antihypertensive\nCounseling Points:\n- may cause angioedema (facial, throat, genital swelling)\n- may cause dizziness, especially if dehydrated\n- use cation when rising from sitting or lying position\n- hyperkalemia is possible",
    category: "hypertension"
  },
  {
    question: "Epinephrine (autoinjector)",
    answer: "Brand: Auvi-Q, EpiPen, EpiPen Jr\nIndication: anaphylaxis\nClass: alpha/beta agonist, anaphylaxis agent\nCounseling Points:\n- must seek medical attention after use, even if you feel better\n- inject into thigh\n- IM or SQ only; do not administer IV",
    category: "anaphylaxis"
  },
  {
    question: "Escitalopram",
    answer: "Brand: Lexapro\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Contact provider if you experience worsening depression, suicidality, or unusual changes in behavior\n- Contact provider if you experience unusual bleeding\n- Symptomatic improvement may not be seen for 4-6 weeks\n- Avoid abrupt discontinuation\n- Do not drink alcohol or use NSAIDs or aspirin",
    category: "depression"
  },
  {
    question: "Esomeprazole",
    answer: "Brand: Nexium\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Take 1 hour before meals",
    category: "GERD"
  },
  {
    question: "Estradiol",
    answer: "Brand: Estrace\nIndication: menopause\nClass: Estrogen\nCounseling Points:\n- Report abnormal vaginal bleeding\n- Do not smoke as this could cause a blood clot",
    category: "menopause"
  },
  {
    question: "Ethinyl estradiol and etonogestrel ring",
    answer: "Brand: NuvaRing\nIndication: contraception\nClass: Contraceptive\nCounseling Points:\n- If vaginal ring is expelled may rinse with lukewarm water and reinsert as soon as possible but within 3 hours\n- If the ring-free interval has been extended beyond 7 days or if the vaginal ring has been left in place for >4 weeks, an additional form of contraception must be used until ring has been used continuously for 7 days",
    category: "contraception"
  },
  {
    question: "Ezetimibe",
    answer: "Brand: Zetia\nIndication: dyslipidemia\nClass: antihyperlipidemic, cholesterol absorption inhibitor\nCounseling Points:\n- take with or without food\n- may take at the same time as a statin\n- take 2 hours before or 4 hours after taking a bile acid sequestrant",
    category: "dyslipidemia"
  },
  {
    question: "Famotidine",
    answer: "Brand: Pepcid\nIndication: GERD\nClass: Histamine H2 antagonist\nCounseling Points:\n- May take with food or antacids, if needed\n- Shake suspension well before use",
    category: "GERD"
  },
  {
    question: "Fenofibrate",
    answer: "Brand: Tricor\nIndication: dyslipidemia\nClass: antihyperlipidemic\nCounseling Points:\n- may be taken with or without food depending on the brand\n- take 1 hour before or 4-6 hours after a bile acid binding resin\n- do not use if you have severe kidney or liver disease",
    category: "dyslipidemia"
  },
  {
    question: "Ferrous Sulfate",
    answer: "Brand: N/A\nIndication: iron deficiency\nClass: mineral supplement\nCounseling Points:\n- may require several weeks for maximal effectiveness\n- vitamin C enhances absorption\n- black stools are common\n- take on empty stomach if possible; may take with food if unable to tolerate nausea\n- avoid calcium containing foods",
    category: "iron deficiency"
  },
  {
    question: "Finasteride",
    answer: "Brand: Proscar, Propecia\nIndication: BPH (benign prostatic hyperplasia)\nClass: 5a-reductase inhibitor\nCounseling Points:\n- you may need to take up to 6 months to see full effect\n- women who are pregnant or may become pregnant should avoid touching this medicine\n- this drug can get into the body through skin and may prevent development of genitalia in an unborn male baby\n- report shortness of breath, breast swelling, or breast mass to provider",
    category: "BPH"
  },
  {
    question: "Fluconazole",
    answer: "Brand: Diflucan\nIndication: fungal infection\nClass: Imidazole antifungal\nCounseling Points:\n- Do not take any new medications without consulting your doctor or pharmacist\n- If taking a weekly dose, take on same day and time each week",
    category: "fungal infection"
  },
  {
    question: "Fluoxetine",
    answer: "Brand: Prozac\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Take with or without meals and in the morning\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior or unusual bleeding\n- Do not drink or use NSAIDs or aspirin",
    category: "depression"
  },
  {
    question: "Fluticasone (nasal)",
    answer: "Brand: Flonase\nIndication: rhinitis, (asthma)\nClass: Intranasal adrenal glucocorticosteroid\nCounseling Points:\n- Relief and/or adverse effects may not occur for several days after initiation\n- Advise patient on proper administration technique",
    category: "rhinitis"
  },
  {
    question: "Fluticasone (oral inhalation)",
    answer: "Brand: Arnuity Ellipta, Flovent Diskus\nIndication: asthma\nClass: Inhaled adrenal corticosteroid\nCounseling Points:\n- Instruct patient on proper inhaler technique\n- Rinse mouth with water after each use to prevent oral infections",
    category: "asthma"
  },
  {
    question: "Fluticasone/Salmeterol",
    answer: "Brand: Advair Diskus, Advair HFA, AirDuo RespiClick, Wixela Inhub\nIndication: asthma\nClass: Inhaled corticosteroid and long-acting B2-adrenergic agonist combination\nCounseling Points:\n- Instruct patient on proper inhaler technique\n- Rinse mouth with water after each use to prevent oral infections",
    category: "asthma"
  },
  {
    question: "Folic Acid",
    answer: "Brand: N/A\nIndication: folic acid deficiency\nClass: essential B vitamin\nCounseling Points:\n- may require several weeks for maximum effect\n- avoid alcohol as it inhibits absorption of folic acid",
    category: "folic acid deficiency"
  },
  {
    question: "Furosemide",
    answer: "Brand: Lasix\nIndication: edema\nClass: loop diuretic\nCounseling Points:\n- avoid alcohol and NSAIDs\n- take in the morning or last dose before 4pm\n- increased risk of sun sensitivity; use sunscreen and avoid tanning\n- may cause dizziness, vertigo, or blurred vision\n- report low blood pressure, decreased urine output, vision problems, and severe skin reactions",
    category: "edema"
  },
  {
    question: "Gabapentin",
    answer: "Brand: Neurontin, Gralise\nIndication: seizures\nClass: Gamma aminobutyric acid analog, anticonvulsant\nCounseling Points:\n- First dose on first day should be taken at bedtime\n- ER formulation taken with evening meal\n- May cause dizziness and somnolence; avoid activities requiring mental alertness until effects known\n- Report worsening depression, suicidal ideation, or unusual changes in behavior\n- Avoid sudden discontinuation of drug\n- Wait 2 hours after antacid before taking",
    category: "seizures"
  },
  {
    question: "Glimepiride",
    answer: "Brand: Amaryl\nIndication: diabetes\nClass: Second-generation sulfonylurea, antidiabetic\nCounseling Points:\n- Monitor blood glucose 2-4 times per day\n- If blood glucose <70 mg/dL, eat candy/sugar and contact prescriber\n- Use sunscreen and avoid sunlamps/tanning beds\n- Do not drink alcohol; may cause disulfram reaction\n- Take with food or milk in the morning",
    category: "diabetes"
  },
  {
    question: "Glipizide",
    answer: "Brand: Glucotrol\nIndication: diabetes\nClass: Second-generation sulfonylurea, antidiabetic\nCounseling Points:\n- Monitor blood glucose 2-4 times per day\n- If blood glucose <70 mg/dL, eat candy/sugar and contact prescriber\n- Use sunscreen and avoid sunlamps/tanning beds\n- Do not drink alcohol; may cause disulfram reaction\n- Take 30 minutes before morning meal\n- Do not crush or chew ER formulation",
    category: "diabetes"
  },
  {
    question: "Guanfacine",
    answer: "Brand: Intuniv\nIndication: ADHD\nClass: a2-adrenergic agonist\nCounseling Points:\n- Avoid alcohol\n- Avoid driving until effects are known\n- Swallow ER tablet whole; may be taken with or without food\n- Report low blood pressure, edema, fatigue\n- Avoid abrupt discontinuation",
    category: "ADHD"
  },
  {
    question: "Hydralazine",
    answer: "Brand: N/A\nIndication: hypertension\nClass: peripheral vasodilator\nCounseling Points:\n- do not drink alcohol\n- may cause dizziness\n- do not abruptly discontinue\n- report chest pain, palpitations, low blood pressure, and fast heart rate",
    category: "hypertension"
  },
  {
    question: "Hydrochlorothiazide",
    answer: "Brand: N/A\nIndication: hypertension\nClass: thiazide diuretic, antihypertensive\nCounseling Points:\n- may be taken with or without food\n- take early in the day to avoid nocturia (last dose early afternoon if taking BID)\n- may cause dizziness\n- avoid alcohol and using NSAIDs",
    category: "hypertension"
  },
  {
    question: "Hydrocodone (+/- acetaminophen)",
    answer: "Brand: Norco, Vicodin, Hysingla ER\nIndication: pain\nClass: Opioid analgesic, C-II\nCounseling Points:\n- Use a stool softener/laxative for preventing constipation with chronic use\n- May cause drowsiness\n- Avoid alcohol",
    category: "pain"
  },
  {
    question: "Hydrocortisone",
    answer: "Brand: N/A\nIndication: skin disorders\nClass: topical corticosteroid\nCounseling Points:\n- apply a thin layer to affected skin\n- wash hands after administration\n- apply to clean, intact skin\n- avoid contact with eyes and mouth\n- avoid tight fitting clothes/dressings over affected site",
    category: "skin disorders"
  },
  {
    question: "Hydroxychloroquine",
    answer: "Brand: Plaquenil\nIndication: rheumatoid arthritis, lupus\nClass: aminoquinoline\nCounseling Points:\n- take with food or milk\n- if taking weekly, take on the same day each week",
    category: "rheumatoid arthritis, lupus"
  },
  {
    question: "Hydroxyzine",
    answer: "Brand: Atarax, Vistaril\nIndication: itching\nClass: Histamine H1 antagonist, first generation piperazine derivative\nCounseling Points:\n- May cause dizziness or sedative effects; limit activity until effects known",
    category: "itching"
  },
  {
    question: "Ibuprofen",
    answer: "Brand: Motrin, Advil\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset",
    category: "pain"
  },
  {
    question: "Indomethacin",
    answer: "Brand: Indocin\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset",
    category: "pain"
  },
  {
    question: "Insulin Aspart",
    answer: "Brand: NovoLOG, (various)\nIndication: diabetes\nClass: Antidiabetic, insulin, rapid-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    category: "diabetes"
  },
  {
    question: "Insulin Degludec",
    answer: "Brand: Tresiba\nIndication: diabetes\nClass: Insulin analogs, long-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    category: "diabetes"
  },
  {
    question: "Insulin Glargine",
    answer: "Brand: Lantus, Basaglar, Toujeo\nIndication: diabetes\nClass: Insulin analogs, long-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    category: "diabetes"
  },
  {
    question: "Insulin Lispro",
    answer: "Brand: Humalog, Admelog, (various)\nIndication: diabetes\nClass: Insulin analogs, rapid-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    category: "diabetes"
  },
  {
    question: "Ipratropium/Albuterol",
    answer: "Brand: Combivent Respimat\nIndication: COPD\nClass: Anticholinergic/selective B2-agonist combination\nCounseling Points:\n- Instruct patient on appropriate inhaler technique\n- Wash mouthpiece in warm water and air dry daily\n- Store at room temperature\n- Nebulizer: use entire contents immediately after opening to avoid contamination; deliver over 5-15 minutes",
    category: "COPD"
  },
  {
    question: "Irbesartan",
    answer: "Brand: Avapro\nIndication: hypertension\nClass: angiotensin II receptor antagonist\nCounseling Points:\n- may cause swelling of the face, eyes, lips, tongue, or throat\n- can cause excessive fluid loss, reduction in urine output, yellowing of skin, or skin rash\n- may cause dizziness\n- avoid pregnancy\n- do not abruptly discontinue",
    category: "hypertension"
  },
  {
    question: "Isosorbide Mononitrate",
    answer: "Brand: Imdur\nIndication: angina\nClass: long-acting nitrate, antianginal\nCounseling Points:\n- take on an empty stomach with half a glass of water\n- swallow ER tablet whole; do not break, crush, or chew\n- can cause headaches; may use acetaminophen\n- can cause dizziness; stand slowly from sitting or lying position",
    category: "angina"
  },
  {
    question: "Ketoconazole",
    answer: "Brand: Nizoral\nIndication: fungal infection\nClass: Imidazole antifungal\nCounseling Points:\n- Apply a thin layer to the affected skin\n- Do not wash areas for at least 3 hours after application\n- Wait 20 minutes after application to apply cosmetics\n- Apply to clean, intact skin\n- Avoid contact with eyes, nose, mouth, and vagina\n- Flammable",
    category: "fungal infection"
  },
  {
    question: "Labetalol",
    answer: "Brand: N/A\nIndication: hypertension\nClass: α/β-adrenergic blocker\nCounseling Points:\n- may cause low blood pressure\n- may cause dizziness; rise slowly from sitting or lying position\n- avoid alcohol\n- may mask symptoms of low blood sugar\n- do not suddenly discontinue",
    category: "hypertension"
  },
  {
    question: "Lamotrigine",
    answer: "Brand: Lamictal\nIndication: seizures\nClass: Phenyltriazine anticonvulsant\nCounseling Points:\n- May cause blistering rash, yellowing of eyes or skin, unusual bruising/bleeding, shortness of breath, or suicidal thoughts; report to provider\n- Estrogen containing birth controls increase metabolism, need higher dose of lamotrigine\n- Avoid alcohol\n- Talk to provider if you plan to become pregnant\n- Allow ODT tablet to dissolve on tongue",
    category: "seizures"
  },
  {
    question: "Lansoprazole",
    answer: "Brand: Prevacid\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Take on empty stomach 1 hour before eating\n- More effective if taken scheduled instead of PRN\n- Capsules may be opened and sprinkled on 1 tablespoon of applesauce\n- Separate administration by 1 hour with concurrent antacid administration",
    category: "GERD"
  },
  {
    question: "Latanoprost",
    answer: "Brand: Xalatan\nIndication: glaucoma\nClass: Postaglandin, antiglaucoma agent\nCounseling Points:\n- Wash hands and remove contact lenses before using this medication\n- Lie down or tilt head back for administration; pull down lower lid of eye to form a pocket and with other hand hold dropper close to eye and administer directed number of drops into pocket; close eyes and hold index finger over inner corner of eye for 1 minute\n- Do not rinse or wipe the dropper or allow anything to touch it including your eye; put the cap on the bottle when not in use",
    category: "glaucoma"
  },
  {
    question: "Levetiracetam",
    answer: "Brand: Keppra, Keppra XR\nIndication: seizures\nClass: Anticonvulsant\nCounseling Points:\n- Swallow ER tablet whole\n- Do not chew, break, or crush\n- Avoid activities requiring mental alertness until effects known\n- Report mood swings, agitation, hostile behavior, suicidal ideation, or unusual changes in behavior\n- Avoid sudden discontinuation",
    category: "seizures"
  },
  {
    question: "Levocetirizine",
    answer: "Brand: Xyzal\nIndication: allergic rhinitis\nClass: Antihistamine\nCounseling Points:\n- May cause dizziness or sedative effects; limit activity until effects known",
    category: "allergic rhinitis"
  },
  {
    question: "Levofloxacin",
    answer: "Brand: Levaquin\nIndication: infection\nClass: Fluoroquinolone antibiotic\nCounseling Points:\n- May cause decreased urination, yellowing of eyes, blistering skin rash, extreme fatigue, unusual bruising/bleeding, tendon pain, muscle weakness\n- Take with or without food but not with milk or other dairy products\n- Take 2 hours before or 6 hours after antacids, sucralfate, or mineral supplements/multivitamins with calcium/iron/zinc",
    category: "infection"
  },
  {
    question: "Levothyroxine",
    answer: "Brand: Synthroid\nIndication: hypothyroidism\nClass: Thyroid supplement\nCounseling Points:\n- May require 6-8 weeks for symptomatic improvement\n- Avoid abrupt discontinuation\n- Take on an empty stomach with water at least 30 minutes before food\n- Avoid antacids and iron within 4 hours of dose",
    category: "hypothyroidism"
  },
  {
    question: "Lidocaine",
    answer: "Brand: Lidoderm\nIndication: pain\nClass: Local anesthetic\nCounseling Points:\n- Don't leave patches on for longer than 12 hours within a 24 hour period\n- Apply to intact skin\n- Don't cover with tight clothing",
    category: "pain"
  },
  {
    question: "Linagliptin",
    answer: "Brand: Tradjenta\nIndication: diabetes\nClass: Dipeptidyl peptidase IV inhibitor\nCounseling Points:\n- Monitor glucose at least daily\n- Take with or without food but at same time daily\n- Medication guide must be dispensed with this medication\n- Counsel on hypoglycemia",
    category: "diabetes"
  },
  {
    question: "Liraglutide",
    answer: "Brand: Victoza, Saxenda\nIndication: diabetes\nClass: Glucagon-like peptide-1-receptor agonist\nCounseling Points:\n- Inject subcutaneously into arm, thigh, or abdomen; rotate injection sites\n- Administer once weekly on the same day each week without regard to meals or time of day\n- Do not mix with insulin\n- Keep refrigerated, stable at room temperature for 14 days\n- May cause decreased urination, blood in urine",
    category: "diabetes"
  },
  {
    question: "Lisdexamfetamine",
    answer: "Brand: Vyvanse\nIndication: ADHD\nClass: Amphetamine, CNS stimulant, C-II\nCounseling Points:\n- Take dose in the morning with or without food\n- May open capsule and dissolve in water, yogurt, or orange juice and consume immediately\n- Monitor growth rate and weight in children\n- Report new or worsening psychiatric problems\n- Report chest pain, palpitations, dyspnea",
    category: "ADHD"
  },
  {
    question: "Lisinopril",
    answer: "Brand: Prinivil, Zestril\nIndication: hypertension\nClass: ACEI, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- seek medical attention if you experience any facial swelling\n- dry cough is common\n- dizziness may worsen if dehydrated",
    category: "hypertension"
  },
  {
    question: "Loratidine",
    answer: "Brand: Claritin, Alavert\nIndication: allergies\nClass: Antihistamine\nCounseling Points:\n- Avoid allergic triggers\n- Use scheduled dosed instead of PRN; symptom improvement seen in 2-3 days but maximal benefit in 14 days\n- May cause dizziness or sedative effects; avoid driving until effects are known",
    category: "allergies"
  },
  {
    question: "Lorazepam",
    answer: "Brand: Ativan\nIndication: anxiety\nClass: Benzodiazepine, short or intermediate acting, C-IV\nCounseling Points:\n- May cause drowsiness; avoid driving until effects known\n- Should not be given with opioids\n- Avoid alcohol",
    category: "anxiety"
  },
  {
    question: "Losartan",
    answer: "Brand: Cozaar\nIndication: hypertension\nClass: angiotensin II receptor antagonist, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- avoid abrupt discontinuation\n- may cause dizziness that may worsen if dehydrated\n- report facial swelling, edema, reduced urination or yellowing of skin/eyes",
    category: "hypertension"
  },
  {
    question: "Lovastatin",
    answer: "Brand: N/A\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- take in the evening or at bedtime\n- swallow ER tablets whole; do not crush, break, or chew\n- avoid alcohol and grapefruit\n- consult provider before starting new prescription or OTC medications\n- does not take the place of lifestyle changes",
    category: "dyslipidemia"
  },
  {
    question: "Meclizine",
    answer: "Brand: Antivert, Bonine, Dramamine\nIndication: antiemetic\nClass: Antihistamine, antiemetic\nCounseling Points:\n- May cause drowsiness; avoid driving until effects known\n- Avoid alcohol\n- Take with food to decrease Gl symptoms\n- Do not crush or chew unless identified as chewable",
    category: "antiemetic"
  },
  {
    question: "Meloxicam",
    answer: "Brand: Mobic\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset\n- For suspension, shake gently before using\n- Pregnant women should consult provider before using",
    category: "pain"
  },
  {
    question: "Metformin",
    answer: "Brand: Glucophage\nIndication: diabetes\nClass: Biguanide, hypoglycemic\nCounseling Points:\n- Take with meals\n- Drink plenty of liquids\n- Avoid alcohol\n- Will cause diarrhea",
    category: "diabetes"
  },
  {
    question: "Methocarbamol",
    answer: "Brand: Robaxin\nIndication: pain\nClass: Centrally acting skeletal muscle relaxant\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- May cause dizziness or sedative effects",
    category: "pain"
  },
  {
    question: "Methotrexate",
    answer: "Brand: Trexall\nIndication: cancer\nClass: antimetabolite\nCounseling Points:\n- emphasize appropriate dosing scheduling (weekly vs daily)\n- avoid pregnancy\n- may cause nausea and vomiting\n- avoid sun exposure\n- may take with food",
    category: "cancer"
  },
  {
    question: "Methylphenidate",
    answer: "Brand: Ritalin, Concerta\nIndication: ADHD\nClass: CNS stimulant, C-II\nCounseling Points:\n- May cause insomnia; avoid late evening doses\n- Swallow ER capsule whole; do not break, chew or crush\n- May open and pour into small amount of food like yogurt; swallow without chewing\n- Avoid abrupt discontinuation\n- For patch, apply same time each day, alternating hips, remove after 9 hours",
    category: "ADHD"
  },
  {
    question: "Methylprednisolone",
    answer: "Brand: Medrol\nIndication: inflammatory reactions\nClass: adrenal corticosteroid\nCounseling Points:\n- take doses with meals to minimize Gl upset\n- may cause psychiatric disturbances including mood swings, insomnia, and severe depression\n- for high dose or chronic treatment, monitor for high blood sugar, osteoporosis, and infection",
    category: "inflammatory reactions"
  },
  {
    question: "Metoprolol",
    answer: "Brand: Lopressor, Toprol XL\nIndication: hypertension\nClass: β-adrenergic blocker, cardioselective\nCounseling Points:\n- take on empty stomach\n- bradycardia can occur\n- avoid alcohol\n- avoid abrupt discontinuation\n- may mask signs of hypoglycemia",
    category: "hypertension"
  },
  {
    question: "Metronidazole",
    answer: "Brand: Flagyl\nIndication: infection\nClass: Nitroimidazole antibiotic, antiprotozoal\nCounseling Points:\n- Avoid alcohol while taking and for 3 days after\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days; if worsen follow-up with healthcare provider\n- May be administered with food to minimize Gl upset",
    category: "infection"
  },
  {
    question: "Mirabegron",
    answer: "Brand: Myrbetriq\nIndication: overactive bladder\nClass: beta-3 agonist\nCounseling Points:\n- monitor blood pressure and heart rate\n- contact provider for fast heartbeat, elevated blood pressure, or difficulty urinating",
    category: "overactive bladder"
  },
  {
    question: "Mirtazapine",
    answer: "Brand: Remeron\nIndication: depression\nClass: Antidepressant, a2-antagonist\nCounseling Points:\n- Let ODT dissolve on tongue without water\n- Use immediately after removed from package; do not store\n- Avoid activities requiring mental alertness until effects known\n- Report worsening depression, suicidal ideation, or unusual changes in behavior\n- Do not drink alcohol\n- Take in the evening prior to sleep",
    category: "depression"
  },
  {
    question: "Mometasone",
    answer: "Brand: Nasonex\nIndication: rhinitis\nClass: Intranasal corticosteroid\nCounseling Points:\n- Advise patients on proper administration techniques for product\n- Needs to be primed before 1st use or if not used for 1 week",
    category: "rhinitis"
  },
  {
    question: "Montelukast",
    answer: "Brand: Singulair\nIndication: asthma\nClass: Leukotriene receptor antagonist\nCounseling Points:\n- Not indicated for acute asthma attacks\n- Take dose in the evening\n- Do not change dose or frequency of other asthma inhalers without provider instruction",
    category: "asthma"
  },
  {
    question: "Morphine",
    answer: "Brand: MS Contin, Avinza, Kadian\nIndication: pain\nClass: Opioid analgesic, C-II\nCounseling Points:\n- Use a stimulant laxative to prevent opioid-induced constipation\n- Do not use with benzodiazepines\n- May cause drowsiness\n- Avoid alcohol\n- Do not crush or chew ER tablet; may be opened and sprinkled on soft food but must be swallowed whole, not chewed",
    category: "pain"
  },
  {
    question: "Mupirocin",
    answer: "Brand: Bactroban\nIndication: skin disorders\nClass: topical antibacterial\nCounseling Points:\n- avoid exposure to open wounds, burns, or eyes",
    category: "skin disorders"
  },
  {
    question: "Naproxen",
    answer: "Brand: Naprosyn\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease GI upset",
    category: "pain"
  },
  {
    question: "Nebivolol",
    answer: "Brand: Bystolic\nIndication: hypertension\nClass: β-adrenergic blocker, cardioselective, B1 selective\nCounseling Points:\n- may mask symptoms of hypoglycemia\n- do not discontinue abruptly, may cause rebound angina",
    category: "hypertension"
  },
  {
    question: "Nifedipine",
    answer: "Brand: Adalat CC, Procardia XL\nIndication: hypertension\nClass: dihydropyridine calcium channel blocker\nCounseling Points:\n- take Adalat CC on an empty stomach\n- avoid sudden discontinuation, may cause rebound hypertension\n- may cause dizziness\n- avoid grapefruit\n- may find tablet or shell in stool",
    category: "hypertension"
  },
  {
    question: "Nitrofurantoin",
    answer: "Brand: Macrodantin, Macrobid\nIndication: urinary infection\nClass: Nitrofuran antibiotic\nCounseling Points:\n- May make urine brown\n- Complete full course of therapy\n- For suspension, shake well and store at room temperature\n- Avoid mixing suspension with food or beverages\n- Symptoms should improve within 2-3 days, if worsen follow-up with healthcare provider",
    category: "urinary infection"
  },
  {
    question: "Nitroglycerin",
    answer: "Brand: Nitro-Dur, Nitrostat\nIndication: angina\nClass: nitrate, antianginal\nCounseling Points:\n- sit prior to using sublingual tablets, lingual aerosol, or spray\n- use at first sign of angina\n- headaches are common\n- do not swallow or chew\n- do not eat or drink\n- spray under tongue; do not inhale; do not spit or rinse mouth",
    category: "angina"
  },
  {
    question: "Nortriptyline",
    answer: "Brand: Pamelor\nIndication: depression\nClass: Tricyclic antidepressant\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- May cause dizziness or somnolence\n- Report worsening depression, suicidal ideation, unusual changes in behavior or unusual bleeding\n- Avoid abrupt discontinuation\n- Do not drink alcohol",
    category: "depression"
  },
  {
    question: "Nystatin",
    answer: "Brand: Mycostatin, Nystop\nIndication: fungal infection\nClass: Polyene antifungal\nCounseling Points:\n- Apply to affected area of skin\n- Apply to intact skin\n- Do not get in eyes, nose or mouth\n- Avoid tight dressings",
    category: "fungal infection"
  },
  {
    question: "Olanzapine",
    answer: "Brand: Zyprexa\nIndication: schizophrenia\nClass: Thienobenzodiazepine, atypical antipsychotic\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- May impair heat regulation\n- Rise slowly from a sitting/laying position\n- Diabetic patients should monitor for hyperglycemia\n- Avoid alcohol",
    category: "schizophrenia"
  },
  {
    question: "Olmesartan",
    answer: "Brand: Benicar\nIndication: hypertension\nClass: angiotensin II receptor antagonist\nCounseling Points:\n- avoid pregnancy\n- may cause dizziness that is worsened by dehydration\n- seek care if swelling of face, reduced urine output, or yellowing of skin/eyes",
    category: "hypertension"
  },
  {
    question: "Omeprazole",
    answer: "Brand: Prilosec\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Should be taken 1 hour before meals",
    category: "GERD"
  },
  {
    question: "Ondansetron",
    answer: "Brand: Zofran\nIndication: antiemetic\nClass: Antiemetic\nCounseling Points:\n- Dry hands before handing ODT\n- Do not open blister pack until ready to use; do not push ODT through foil",
    category: "antiemetic"
  },
  {
    question: "Oseltamivir",
    answer: "Brand: Tamiflu\nIndication: influenza\nClass: Neuraminidase inhibitor, antiviral\nCounseling Points:\n- Complete full course of therapy\n- Treatment must be started within 48 hours of the onset of symptoms/exposure\n- Symptoms should improve within 2-3 days, if they worsen seek care\n- Provide appropriate syringe for dosing, specific to patient (i.e adult vs. child)\n- Take with food to minimize Gi irritation\n- Take missed dose as soon as possible, if next dose is within 2 hours, skip missed dose",
    category: "influenza"
  },
  {
    question: "Oxcarbazepine",
    answer: "Brand: Trileptal\nIndication: seizures\nClass: Dibenzazepine carboxamide, anticonvulsant\nCounseling Points:\n- Shake suspension well and prepare dose immediately after shaking\n- May mix suspension in small glass of water prior to administration or take from syringe\n- Avoid activities requiring mental alertness until effects known\n- Take with food but not alcohol or grapefruit\n- Avoid abrupt discontinuation",
    category: "seizures"
  },
  {
    question: "Oxybutynin",
    answer: "Brand: Ditropan\nIndication: overactive bladder\nClass: urinary antispasmodic\nCounseling Points:\n- this drug may cause anticholinergic effects, including constipation, urinary retention or blurred vision\n- heat exhaustion/stroke may occur when used in a hot environment",
    category: "overactive bladder"
  },
  {
    question: "Oxycodone",
    answer: "Brand: OxyContin\nIndication: pain\nClass: Opioid analgesic, C-II\nCounseling Points:\n- Use laxative for preventing constipation\n- May cause drowsiness; avoid driving until effects known\n- Avoid alcohol",
    category: "pain"
  },
  {
    question: "Pantoprazole",
    answer: "Brand: Protonix\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Should be taken 1 hours before meals",
    category: "GERD"
  },
  {
    question: "Paroxetine",
    answer: "Brand: Paxil, Paxil CR\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Do not crush or chew CR tablets\n- Shake suspension well before use\n- Avoid activities requiring mental alertness until effects known\n- Symptomatic improvement may not be seen for several weeks\n- Avoid abrupt discontinuation\n- Do not drink alcohol\n- Use caution with NSAIDs or aspirin",
    category: "depression"
  },
  {
    question: "Penicillin",
    answer: "Brand: N/A\nIndication: infection\nClass: Antibiotic\nCounseling Points:\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days, if they worsen seek care\n- Take on an empty stomach\n- Seek care for severe diarrhea, dark urine, yellowing of skin/eyes, unusual bruising/bleeding, blistering skin rash or shortness of breath",
    category: "infection"
  },
  {
    question: "Phentermine",
    answer: "Brand: Adipex-P\nIndication: obesity\nClass: Centrally acting appetite suppressant, C-IV\nCounseling Points:\n- May impair ability to operate a vehicle or machinery\n- Take during the day to avoid insomnia",
    category: "obesity"
  },
  {
    question: "Pioglitazone",
    answer: "Brand: Actos\nIndication: diabetes\nClass: Thiazolidinedione antidiabetic\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- May take without regard to food\n- May require several weeks for maximum effect\n- Tell provider if you experience bone pain, yellowing of skin/eyes, eye pain, or shortness of breath",
    category: "diabetes"
  },
  {
    question: "Potassium Chloride",
    answer: "Brand: Klor-Con\nIndication: hypokalemia\nClass: electrolyte, potassium\nCounseling Points:\n- take with food\n- capsules may be opened and sprinkled on applesauce\n- only crush or break if confirmed by provider/pharmacist",
    category: "hypokalemia"
  },
  {
    question: "Pramipexole",
    answer: "Brand: Mirapex, Mirapex ER\nIndication: Parkinson's disease\nClass: Dopamine agonist, antiparkinson\nCounseling Points:\n- Take with food is nausea occurs\n- Avoid activities requiring mental alertness until effects known\n- Rise slowly from sitting/laying position\n- Report new or increased gambling urges, sexual urges, compulsive eating or buying\n- Do not discontinue abruptly\n- Do not drink alcohol",
    category: "Parkinson's disease"
  },
  {
    question: "Pravastatin",
    answer: "Brand: Pravachol\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- take in the evening\n- avoid concurrent heavy alcohol use\n- does not take the place of diet and exercise",
    category: "dyslipidemia"
  },
  {
    question: "Prednisolone (oral)",
    answer: "Brand: Orapred, Pediapred\nIndication: inflammatory reactions\nClass: adrenal glucocorticosteroid\nCounseling Points:\n- take with food or milk to decrease DI upset\n- take in the morning to help prevent insomnia\n- for high-dose or long-term treatment, monitor for high blood sugar, osteoporosis and infection",
    category: "inflammatory reactions"
  },
  {
    question: "Prednisone",
    answer: "Brand: N/A (Deltasone)\nIndication: inflammatory reactions\nClass: adrenal corticosteroid\nCounseling Points:\n- take with food or milk to decrease GI upset\n- take in the morning to help prevent insomnia\n- for high-dose or long-term treatment, monitor for high blood sugar, osteoporosis, and infection",
    category: "inflammatory reactions"
  },
  {
    question: "Pregabalin",
    answer: "Brand: Lyrica\nIndication: neuropathic pain\nClass: Analgesic, anticonvulsant, C-V\nCounseling Points:\n- May cause drowsiness\n- Avoid sudden discontinuation\n- Avoid use of alcohol",
    category: "neuropathic pain"
  },
  {
    question: "Progesterone",
    answer: "Brand: Prometrium\nIndication: women's health\nClass: Progestin hormone\nCounseling Points:\n- Menstrual bleeding should occur 3-7 days after last dose; tell provider if it does not occur\n- For vaginal formulation, avoid using other vaginal drugs within 6 hours before or 6 hours after",
    category: "women's health"
  },
  {
    question: "Promethazine",
    answer: "Brand: Phenergan\nIndication: antiemetic\nClass: Phenothiazine antihistamine\nCounseling Points:\n- May cause drowsiness\n- Avoid alcohol",
    category: "antiemetic"
  },
  {
    question: "Propranolol",
    answer: "Brand: Inderal, Inderal LA, Inderal XL\nIndication: hypertension\nClass: β-adrenergic blocker, nonselective\nCounseling Points:\n- taking IR tablets on an empty stomach; ER can be taken with or without food but consistently\n- avoid alcohol\n- avoid abrupt discontinuation\n- may cause dizziness\n- may mask symptoms of hypoglycemia",
    category: "hypertension"
  },
  {
    question: "Quetiapine",
    answer: "Brand: Seroquel, Seroquel XR\nIndication: schizophrenia\nClass: Antipsychotic (atypical)\nCounseling Points:\n- Take with food but avoid alcohol\n- Avoid activities requiring mental alertness until effects known\n- May cause drowsiness\n- Rise slowly from sitting/laying position\n- Use caution with activities leading to an increased core temperature",
    category: "schizophrenia"
  },
  {
    question: "Ramipril",
    answer: "Brand: Altace\nIndication: hypertension\nClass: ACEI, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- may cause dizziness that is worsened by dehydration\n- seek care if swelling of face, eyes, nose, or lips",
    category: "hypertension"
  },
  {
    question: "Risperidone",
    answer: "Brand: Risperdal\nIndication: schizophrenia\nClass: Benzisoxazole, antipsychotic\nCounseling Points:\n- Take with food\n- Avoid alcohol\n- Avoid activities requiring mental alertness until effects are known\n- Use caution during activities leading to an increased core temperature\n- Rise slowly from sitting/laying position\n- Keep ODT tablet in blister pack until ready to use; place on tongue until dissolved\n- Do not mix oral solution with cola or tea",
    category: "schizophrenia"
  },
  {
    question: "Rivaroxaban",
    answer: "Brand: Xarelto\nIndication: anticoagulation\nClass: anticoagulant, factor Xa inhibitor\nCounseling Points:\n- watch for signs/symptoms of bleeding\n- doses 15 mg or higher should be taken with food\n- if taking for nonvalvular afib, take with evening meal",
    category: "anticoagulation"
  },
  {
    question: "Rizatriptan",
    answer: "Brand: Maxalt\nIndication: migraine\nClass: Antimigraine, serotonin receptor agonist\nCounseling Points:\n- Avoid alcohol\n- Caution driving until effects are known\n- Allow ODT tablet to dissolve on tongue, do not chew",
    category: "migraine"
  },
  {
    question: "Ropinirole",
    answer: "Brand: Requip, Requip XL\nIndication: Parkinson's disease\nClass: Dopamine agonist\nCounseling Points:\n- Take with food to reduce nausea\n- Avoid driving until effects are known\n- Rise slowly from sitting/standing position\n- Avoid sudden discontinuation\n- Do not drink alcohol",
    category: "Parkinson's disease"
  },
  {
    question: "Rosuvastatin",
    answer: "Brand: Crestor\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- do not drink alcohol\n- does not take the place of diet and exercise",
    category: "dyslipidemia"
  },
  {
    question: "Sertraline",
    answer: "Brand: Zoloft\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior or unusual bleeding\n- Avoid abrupt discontinuation\n- Do not drink alcohol or use NSAIDs or aspirin",
    category: "depression"
  },
  {
    question: "Sildenafil",
    answer: "Brand: Viagra, Revatio\nIndication: erectile dysfunction\nClass: erectile dysfunction agent, pulmonary hypertensive agent\nCounseling Points:\n- take 30 minutes-4 hours prior to anticipated sexual activity (not Revatio)\n- do not take more than once in a 24-hour period",
    category: "erectile dysfunction"
  },
  {
    question: "Simvastatin",
    answer: "Brand: Zocor\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- avoid excessive alcohol\n- take in the evening\n- consult provider/pharmacist before starting any new medications\n- does not take the place of diet and lifestyle changes",
    category: "dyslipidemia"
  },
  {
    question: "Sitagliptin",
    answer: "Brand: Januvia\nIndication: diabetes\nClass: Dipeptidyl peptidase-4 inhibitor, antidiabetic\nCounseling Points:\n- Monitor blood glucose 2-4 times a day\n- Take with morning meal if once a day dosing; take with morning and evening meal if twice daily dosing\n- Take with food",
    category: "diabetes"
  },
  {
    question: "Spironolactone",
    answer: "Brand: Aldactone, CaroSpir\nIndication: heart failure\nClass: potassium-sparing diuretic; selective aldosterone blocker\nCounseling Points:\n- may cause dizziness\n- avoid driving until effects are known\n- report muscle weakness, fatigue, or slowed heart rate, confusion, dry mouth thirst, decreased urination\n- avoid foods high in potassium\n- avoid alcohol and NSAIDs",
    category: "heart failure"
  },
  {
    question: "Sucralfate",
    answer: "Brand: Carafate\nIndication: duodenal ulcer\nClass: Gastrointestinal agent, miscellaneous\nCounseling Points:\n- Take on an empty stomach\n- Do not take other medications within 2-4 hours of this medication\n- Shake suspension well before use; store at room temperature",
    category: "duodenal ulcer"
  },
  {
    question: "Sumatriptan",
    answer: "Brand: Imitrex\nIndication: migraine\nClass: Antimigraine, serotonin receptor agonist\nCounseling Points:\n- May cause dizziness or somnolence; avoid activities requiring mental alertness until effects known\n- Take immediately at headache onset\n- May repeat x1 dose",
    category: "migraine"
  },
  {
    question: "Tamsulosin",
    answer: "Brand: Flomax\nIndication: BPH (benign prostatic hyperplasia)\nClass: α1-adrenergic blocker\nCounseling Points:\n- administer 30 minutes after same meal daily\n- may cause vertigo or dizziness; avoid driving until effects known\n- rise slowly from a sitting or lying position\n- syncope is possible with first dose or dose increases",
    category: "BPH (benign prostatic hyperplasia)"
  },
  {
    question: "Terazosin",
    answer: "Brand: N/A\nIndication: BPH (benign prostatic hyperplasia, HTN (hypertension)\nClass: α1-adrenergic blocker\nCounseling Points:\n- avoid abrupt discontinuation\n- may cause vertigo or dizziness; avoid driving until effects known\n- rise slowly from a sitting or lying position\n- syncope is possible with first dose or dose increases",
    category: "BPH (benign prostatic hyperplasia, HTN (hypertension)"
  },
  {
    question: "Testosterone",
    answer: "Brand: AndroGel, Androderm\nIndication: androgen replacement\nClass: Androgen, C-III\nCounseling Points:\n- Apply to clean, dry, intact skin of shoulders, upper arms and/or abdomen\n- Do not apply to genitals\n- Allow to dry\n- Avoid swimming/showering for 5-6 hours after application\n- Keep site covered as direct skin-skin contact can transfer drug\n- Report too frequent or persistent erections\n- Female sexual partners should report male-like changes\n- Seek medical attention for chest pain, SOB, stroke symptoms or behavioral changes",
    category: "androgen replacement"
  },
  {
    question: "Thyroid",
    answer: "Brand: Armour Thyroid\nIndication: hypothyroidism\nClass: Thyroid supplement\nCounseling Points:\n- May require 6-8 weeks before symptomatic improvement seen\n- Do not abruptly discontinue\n- Take on an empty stomach with water",
    category: "hypothyroidism"
  },
  {
    question: "Timolol",
    answer: "Brand: Betimol, Timoptic\nIndication: ocular issues\nClass: Beta-blocker, antiglaucoma agent\nCounseling Points:\n- Wash hands and remove contact lenses before using\n- Lie down or tilt head back for administration; pull down lower lid of eye to form a pocket and with other hand hold dropper close to eye and administer directed number of drops into pocket; close eyes and hold index finger over inner corner of eye for 1 minute\n- Do not rinse or wipe the dropper or allow anything to touch it including your eye; put the cap on the bottle when not in use\n- Separate from other eye drops by 5 minutes, wait 15 minutes before putting contacts back in",
    category: "ocular issues"
  },
  {
    question: "Tiotropium",
    answer: "Brand: Spiriva HandiHaler, Spiriva Respimat\nIndication: COPD\nClass: Anticholinergic bronchodilator\nCounseling Points:\n- Not indicated for rescue therapy\n- May cause increased HR, dry mouth, constipation, urinary difficulty, respiratory tract infection, sinusitis\n- Drug capsules are for inhalation only, do not swallow\n- When using HandiHaler, inhale contents twice to ensure drug delivery\n- Maximum benefit may not be seen for 1-2 months",
    category: "COPD"
  },
  {
    question: "Tizanidine",
    answer: "Brand: Zanaflex\nIndication: pain\nClass: Centrally acting skeletal muscle relaxant, α2-agonist\nCounseling Points:\n- May cause dizziness and somnolence; avoid driving until effects known\n- May cause dry mouth and weakness\n- Rise slowly from sitting/standing position",
    category: "pain"
  },
  {
    question: "Topiramate",
    answer: "Brand: Topamax\nIndication: seizures\nClass: Anticonvulsant\nCounseling Points:\n- May cause dizziness and somnolence; avoid driving until effects known\n- May cause nervousness and confusion\n- Do not abruptly discontinue\n- Seek care for new eye problems or high body temperature\n- May decrease sweating; avoid hot temperatures\n- Stay hydrated\n- May decrease effectiveness of contraceptive; use alternative form\n- Take missed dose as soon as possible, if more than 1 missed dose consult provider",
    category: "seizures"
  },
  {
    question: "Tramadol",
    answer: "Brand: Ultram\nIndication: pain\nClass: Opioid analgesic, C-IV\nCounseling Points:\n- For chronic use, use a laxative to prevent constipation\n- May cause drowsiness; avoid driving until effects known\n- Do not crush or chew ER products; may be taken with or without food but be consistent\n- Avoid alcohol",
    category: "pain"
  },
  {
    question: "Trazodone",
    answer: "Brand: Desyrel\nIndication: depression\nClass: Antidepressant\nCounseling Points:\n- Avoid driving until effects known\n- May cause priapism\n- Avoid sudden discontinuation\n- Do not drink alcohol",
    category: "depression"
  },
  {
    question: "Triamcinolone (nasal)",
    answer: "Brand: Nasacort AQ\nIndication: allergic rhinitis\nClass: Intranasal adrenal glucocorticosteroid\nCounseling Points:\n- Use proper administration technique",
    category: "allergic rhinitis"
  },
  {
    question: "Triamcinolone (topical)",
    answer: "Brand: N/A\nIndication: skin disorders\nClass: Topical corticosteroid\nCounseling Points:\n- Apply thin layer to affected area of skin\n- Apply to clean, intact area\n- Wash hands before and after application\n- Avoid contact with eyes and mouth\n- Avoid tight dressings",
    category: "skin disorders"
  },
  {
    question: "Triamterene/HCTZ",
    answer: "Brand: Dyazide, Maxzide\nIndication: hypertension\nClass: potassium sparing/thiazide diuretic combination\nCounseling Points:\n- may cause dizziness; rise slowly from a sitting/lying position\n- avoid foods high in potassium\n- avoid alcohol and NSAIDs\n- may cause photosensitivity; use sunscreen",
    category: "hypertension"
  },
  {
    question: "Trimethoprim/Sulfamethoxazole",
    answer: "Brand: Bactrim, Septra\nIndication: infection\nClass: Sulfonamide antibiotic\nCounseling Points:\n- Complete full course of therapy\n- For suspension, shake well, store at room temperature, and protect from light\n- Symptoms should improve within 2-3 days, if worsen seek care\n- May cause photosensitivity; use sunscreen\n- Maintain adequate hydration\n- Seek medical attention for severe diarrhea, dark urine, yellowing of eyes/skin, unusual bruising/bleeding, blistering skin rash, SOB",
    category: "infection"
  },
  {
    question: "Valacyclovir",
    answer: "Brand: Valtrex\nIndication: herpes\nClass: Viral DNA polymerase inhibitor\nCounseling Points:\n- Complete full course of therapy\n- Stay hydrated\n- Symptoms should improve within 2-3 days; if they don't or worsen seek medical attention\n- Take at first sign of symptoms for best efficacy",
    category: "herpes"
  },
  {
    question: "Valsartan",
    answer: "Brand: Diovan\nIndication: hypertension\nClass: angiotensin II receptor antagonist\nCounseling Points:\n- do not discontinue abruptly\n- may cause dizziness; avoid driving until effects known\n- avoid alcohol and NSAIDs",
    category: "hypertension"
  },
  {
    question: "Varenicline",
    answer: "Brand: Chantix\nIndication: smoking cessation\nClass: Smoking cessation agent\nCounseling Points:\n- Take after eating with a full glass of water\n- Contact provider if experience sleepwalking, seizures, SOB, mental status changes/suicidal ideation\n- May use with other nicotine replacement products\n- May cause sleep disturbances and vivid dreams\n- Avoid alcohol",
    category: "smoking cessation"
  },
  {
    question: "Venlafaxine",
    answer: "Brand: Effexor, Effexor XR\nIndication: depression\nClass: Antidepressant, serotonin/norepinephrine reuptake inhibitor\nCounseling Points:\n- Take with food, avoid alcohol\n- Swallow ER formulations whole; may open and sprinkle on food but swallow without chewing followed by water\n- Symptomatic improvement may not be seen for a few weeks\n- Do not discontinue abruptly\n- May cause dizziness and somnolence, avoid driving until effects known",
    category: "depression"
  },
  {
    question: "Verapamil",
    answer: "Brand: Calan SR\nIndication: hypertension\nClass: calcium channel blocker\nCounseling Points:\n- do not crush or chew ER products; may sprinkle on food and swallow without chewing followed by water\n- report syncope, hypotension, edema\n- avoid sudden discontinuation of drug\n- rise slowly from a sitting or lying position to avoid dizziness\n- avoid alcohol and grapefruit",
    category: "hypertension"
  },
  {
    question: "Warfarin",
    answer: "Brand: Coumadin\nIndication: anticoagulation\nClass: anticoagulant, vitamin K antagonist\nCounseling Points:\n- report signs of bleeding\n- consult provider/pharmacist before starting new medications\n- keep diet consistent in the amount of vitamin K (green leafy vegetables)\n- *these are three of the most important points that every patient must know for safety; please note that there are MANY more important counseling points that providers should educate patients on when starting warfarin",
    category: "anticoagulation"
  },
  {
    question: "Zolpidem",
    answer: "Brand: Ambien\nIndication: insomnia\nClass: Nonbarbiturate hypnotic, C-IV\nCounseling Points:\n- Take on an empty stomach\n- May cause daytime drowsiness; avoid driving\n- Avoid alcohol\n- Take immediately prior to bedtime\n- May experience complex behaviors while not full awake (i.e. sleep driving)\n- Should plan to get 7-8 hours of sleep when taking",
    category: "insomnia"
  }
];

export default drugData;
