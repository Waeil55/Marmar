const lawData = [
  {
    question: "What is the Controlled Substances Act (CSA)?",
    answer: "Federal law regulating controlled substances and creating a closed system for manufacture, distribution, and dispensing",
    category: "Controlled Substances"
  },
  {
    question: "Which agency regulates controlled substances?",
    answer: "DEA (Drug Enforcement Administration) under the Department of Justice",
    category: "Controlled Substances"
  },
  {
    question: "Define Schedule I.",
    answer: "High abuse potential\nNo accepted medical use\nLack of safety even under supervision",
    category: "Controlled Substances"
  },
  {
    question: "What are some examples of Schedule I drugs?",
    answer: "Heroin, LSD, marijuana, MDMA, psilocybin, peyote",
    category: "Controlled Substances"
  },
  {
    question: "Define Schedule II.",
    answer: "High abuse potential\nAccepted medical use (with restrictions)\nSevere dependence risk",
    category: "Controlled Substances"
  },
  {
    question: "What are some examples of Schedule II drugs?",
    answer: "Morphine, oxycodone, fentanyl, hydrocodone combos, amphetamine, methylphenidate, methadone",
    category: "Controlled Substances"
  },
  {
    question: "Define Schedule III.",
    answer: "Less abuse than I & II, accepted medical use, moderate/low physical dependence or high psychological dependence",
    category: "Controlled Substances"
  },
  {
    question: "What are some examples of Schedule III drugs?",
    answer: "Tylenol #3, buprenorphine, ketamine, anabolic steroids, dronabinol",
    category: "Controlled Substances"
  },
  {
    question: "Define Schedule IV.",
    answer: "Low abuse potential relative to III\nAccepted medical use\nLimited dependence risk",
    category: "Controlled Substances"
  },
  {
    question: "What are some examples of Schedule IV drugs?",
    answer: "Benzodiazepines, zolpidem, tramadol, carisoprodol",
    category: "Controlled Substances"
  },
  {
    question: "Define Schedule V.",
    answer: "Lowest abuse potential\nAccepted medical use\nLimited dependence risk",
    category: "Controlled Substances"
  },
  {
    question: "What are some examples of Schedule V drugs?",
    answer: "Codeine cough syrups, pregabalin, diphenoxylate/atropine",
    category: "Controlled Substances"
  },
  {
    question: "What is the Schedule III codeine limit?",
    answer: "≤1.8 g per 100 mL OR ≤90 mg per dosage unit",
    category: "Controlled Substances"
  },
  {
    question: "What is the Schedule V codeine limit?",
    answer: "≤200 mg per 100 mL",
    category: "Controlled Substances"
  },
  {
    question: "Rule of Three (Schedule III)",
    answer: "Quantities divisible by 3",
    category: "Controlled Substances"
  },
  {
    question: "Rule of Five (Schedule V)",
    answer: "Quantities divisible by 5",
    category: "Controlled Substances"
  },
  {
    question: "What is the DEA number format?",
    answer: "2 letters + 7 numbers\nLast digit = check digit",
    category: "Controlled Substances"
  },
  {
    question: "What are the DEA number validation steps?",
    answer: "1. Add digits 1, 3, 5\n2. Add digits 2, 4, 6 then x 2\n3. Add both totals\n4. Last digit must equal check digit",
    category: "Controlled Substances"
  },
  {
    question: "What is DEA Form 223?",
    answer: "Certificate of registration",
    category: "DEA Forms"
  },
  {
    question: "What is DEA Form 224?",
    answer: "New application (pharmacy/practitioner)",
    category: "DEA Forms"
  },
  {
    question: "What is DEA Form 224a?",
    answer: "Renewal application",
    category: "DEA Forms"
  },
  {
    question: "What is DEA From 224b?",
    answer: "Chain pharmacy renewal affidavit",
    category: "DEA Forms"
  },
  {
    question: "What is DEA Form 225?",
    answer: "Manufacturer/distributor/researcher application",
    category: "DEA Forms"
  },
  {
    question: "What is DEA Form 363?",
    answer: "Narcotic treatment program application",
    category: "DEA Forms"
  },
  {
    question: "What is the purpose of DEA Form 222?",
    answer: "Ordering Schedule I & II drugs",
    category: "DEA Forms"
  },
  {
    question: "What is the format of DEA Form 222?",
    answer: "Single-sheet form (replaced triplicate)",
    category: "DEA Forms"
  },
  {
    question: "What is the DEA Form 222 item limit?",
    answer: "20 items per form",
    category: "DEA Forms"
  },
  {
    question: "What is the DEA Form 222 retention?",
    answer: "Keep copy for 2 years",
    category: "DEA Forms"
  },
  {
    question: "What is the validity period of DEA Form 222?",
    answer: "60 days",
    category: "DEA Forms"
  },
  {
    question: "What is the DEA Form 222 mistake rule?",
    answer: "Cannot correct - must replace and keep defective form for 4 years",
    category: "DEA Forms"
  },
  {
    question: "What are the actions of a lost DEA Form 222?",
    answer: "Execute new form\nAttach statement with order # and date\nNotify DEA if stolen",
    category: "DEA Forms"
  },
  {
    question: "What is the purpose of POA in pharmacy law?",
    answer: "Allows someone to sign DEA Form 222 on registrant's behalf",
    category: "Controlled Substances"
  },
  {
    question: "What are POA granting requirements?",
    answer: "Registrant signature\nPerson granted signature\n2 witnesses",
    category: "Controlled Substances"
  },
  {
    question: "What are POA revocation requirements?",
    answer: "Signature of registrant (or last registrant signer)\n2 witnesses",
    category: "Controlled Substances"
  },
  {
    question: "Is registration needed for NTP?",
    answer: "Yes, DEA Form 363",
    category: "Controlled Substances"
  },
  {
    question: "What are required elements of a controlled prescription?",
    answer: "Patient name & address\nDrug name, strength, dosage form, quantity\nDirections\nDate issued\nPrescriber name, address, DEA #\nSignature",
    category: "Controlled Substances"
  },
  {
    question: "What are acceptable controlled Rx signatures?",
    answer: "Manual signature\nElectronic (per DEA rules)",
    category: "Controlled Substances"
  },
  {
    question: "What is the definition of corresponding definition?",
    answer: "Pharmacist and prescriber share responsibility for validity and legitimacy of controlled prescription",
    category: "Controlled Substances"
  },
  {
    question: "What are DEA red flags for fraudulent prescriptions?",
    answer: "Altered Rx\nEarly refill requests\nCash payment for expensive opioids\nDoctor shopping\nUnusual quantities\nTraveling long distance\nMultiple prescribers/pharmacies",
    category: "Controlled Substances"
  },
  {
    question: "What does the \"N\" in Schedule IIN designate?",
    answer: "Non-narcotics",
    category: "Controlled Substances"
  },
  {
    question: "How long is DEA registration valid for pharmacies, pharmacists, hospitals, mid-level practitioners, and practitioners?",
    answer: "3 years (36 months)",
    category: "Controlled Substances"
  },
  {
    question: "How long is a DEA registration valid for manufacturers and distributors?",
    answer: "1 year (12 months)",
    category: "Controlled Substances"
  },
  {
    question: "Can hospital medical interns & residents prescribe controlled substances without their own DEA registration?",
    answer: "Yes, they may prescribe under the hospital's DEA registration if:\nLicensed by the state to prescribe\nActing within scope of employment\nAuthorized by hospital\nAssigned internal code suffix to institutional DEA number",
    category: "Controlled Substances"
  },
  {
    question: "What is DEA Form 510?",
    answer: "New application for chemical registrants, including entities distributing listed chemicals used in the manufacture of controlled substances",
    category: "DEA Forms"
  },
  {
    question: "What must occur when a practitioner dies/retires or a pharmacy goes out of business?",
    answer: "DEA must be notified to terminate registration. The registrant must:\nReturn DEA registration certificate\nReturn executed DEA Form 222s\nDispose of controlled substances per DEA rules\nMaintain records for at least 2 years",
    category: "Controlled Substances"
  },
  {
    question: "Are hospital medication orders for controlled substances considered prescriptions and required to be written on security prescription blanks under federal law?",
    answer: "No. Hospital medication orders are not defined as prescriptions under federal law and do not need to be written on a security prescription blank because the medication is administered within the institution",
    category: "Controlled Substances"
  },
  {
    question: "Which signatures are legally valid on controlled substance prescriptions under federal law?",
    answer: "Prescription prepared by staff but personally signed by the prescriber\nPrescription prepared & signed by the prescriber",
    category: "Controlled Substances"
  },
  {
    question: "Which signatures are NOT legally valid on controlled substance prescriptions under federal law?",
    answer: "Staff signing prescriber's name (even with consent)\nRubber stamp signature\nPre-printed signature on prescription blank",
    category: "Controlled Substances"
  },
  {
    question: "What does MPJE stand for?",
    answer: "Multistate Pharmacy Jurisprudence Examination",
    category: "MPJE"
  },
  {
    question: "What organization administers the MPJE?",
    answer: "NABP (National Association of Boards of Pharmacy)",
    category: "MPJE"
  },
  {
    question: "How many questions are on the MPJE?",
    answer: "120 total questions (100 scored, 20 unscored)",
    category: "MPJE"
  },
  {
    question: "How long is the MPJE?",
    answer: "2.5 hours (150 minutes)",
    category: "MPJE"
  },
  {
    question: "How many questions must be completed for the exam to be scored?",
    answer: "At least 107 questions",
    category: "MPJE"
  },
  {
    question: "What is the MPJE scoring format?",
    answer: "Pass/Fail only (no numerical score reported)",
    category: "MPJE"
  },
  {
    question: "Is the MPJE computer adaptive?",
    answer: "Yes, question difficulty adapts based on answers",
    category: "MPJE"
  },
  {
    question: "Can you skip questions or go back on the MPJE?",
    answer: "No, questions must be answered in order with no review",
    category: "MPJE"
  },
  {
    question: "How many attempts are allowed per jurisdiction for the MPJE?",
    answer: "5 attempts per state",
    category: "MPJE"
  },
  {
    question: "What question formats appear on the MPJE?",
    answer: "Multiple choice, Select All That Apply, K-type questions",
    category: "MPJE"
  },
  {
    question: "Are federal and state law questions labeled as such on the MPJE?",
    answer: "No, they are mixed together unless specifically stated",
    category: "MPJE"
  },
  {
    question: "Should you memorize statute citations for the MPJE?",
    answer: "No, citations are not tested",
    category: "MPJE"
  },
  {
    question: "What is the UMPJE?",
    answer: "A standardized national jurisprudence exam covering laws common to all states",
    category: "MPJE"
  },
  {
    question: "Does passing the UMPJE remove responsibility to know state law?",
    answer: "No, pharmacists are still responsible for individual state laws",
    category: "MPJE"
  },
  {
    question: "How many scored questions are on the UMPJE?",
    answer: "100 scored questions",
    category: "MPJE"
  },
  {
    question: "How are UMPJE questions different from MPJE questions?",
    answer: "Only 3 answer choices per questions",
    category: "MPJE"
  },
  {
    question: "What is the supreme law of the United States?",
    answer: "The U.S. Constitution",
    category: "Constitutional Law"
  },
  {
    question: "What clause establishes that federal law overrides state law?",
    answer: "Supremacy Clause (Article VI)",
    category: "Constitutional Law"
  },
  {
    question: "What power allows states to regulate pharmacy practice?",
    answer: "Police powers under the 10th Amendment",
    category: "Constitutional Law"
  },
  {
    question: "Which amendment reserves powers not given to the federal government to the states?",
    answer: "10th Amendment",
    category: "Constitutional Law"
  },
  {
    question: "Who creates statutes?",
    answer: "Legislatures (Congress or state legislatures)",
    category: "Legal Framework"
  },
  {
    question: "Who creates regulations?",
    answer: "Administrative agencies (e.g., Board of Pharmacy, FDA, DEA)",
    category: "Legal Framework"
  },
  {
    question: "Can a regulation exist without a statute?",
    answer: "No",
    category: "Legal Framework"
  },
  {
    question: "Can a statute exist without a regulation?",
    answer: "Yes",
    category: "Legal Framework"
  },
  {
    question: "Where are federal statutes codified?",
    answer: "United States Code (USC)",
    category: "Legal Framework"
  },
  {
    question: "Where are federal regulations codified?",
    answer: "Code of Federal Regulations (CFR)",
    category: "Legal Framework"
  },
  {
    question: "Where are Indiana statutes codified?",
    answer: "Indiana Code (IC)",
    category: "Indiana Law"
  },
  {
    question: "Where are Indiana regulations codified?",
    answer: "Indiana Administrative Code (IAC)",
    category: "Indiana Law"
  },
  {
    question: "What process do agencies use to create regulations?",
    answer: "Notice and Comment Rulemaking",
    category: "Legal Framework"
  },
  {
    question: "Where are proposed federal regulations published?",
    answer: "Federal Register",
    category: "Legal Framework"
  },
  {
    question: "Where can the public submit comments on proposed federal rules?",
    answer: "regulations.gov",
    category: "Legal Framework"
  },
  {
    question: "What happens after public comments are reviewed?",
    answer: "Agency issues a final rule or abandons rulemaking",
    category: "Legal Framework"
  },
  {
    question: "What is due process?",
    answer: "Government must follow fair procedures before depriving life, liberty, or property",
    category: "Constitutional Law"
  },
  {
    question: "Which amendment applies due process to the federal government?",
    answer: "5th Amendment",
    category: "Constitutional Law"
  },
  {
    question: "Which amendment applies due process to the states?",
    answer: "14th Amendment",
    category: "Constitutional Law"
  },
  {
    question: "What is procedural due process?",
    answer: "Fair procedures (notice and hearing)",
    category: "Constitutional Law"
  },
  {
    question: "What is substantive due process?",
    answer: "Protection of fundamental rights from government interference",
    category: "Constitutional Law"
  },
  {
    question: "What level of scrutiny applies to fundamental rights?",
    answer: "Strict scrutiny",
    category: "Constitutional Law"
  },
  {
    question: "What five freedoms are protected by the First Amendment?",
    answer: "Religion, Speech, Press, Assembly, Petition",
    category: "Constitutional Law"
  },
  {
    question: "What did the Declaration of Independence do?",
    answer: "Declared the 13 colonies independent from Great Britain (July 4, 1776)",
    category: "Constitutional Law"
  },
  {
    question: "Is the Declaration of Independence legally binding?",
    answer: "No, it states principles but is not legally binding law",
    category: "Constitutional Law"
  },
  {
    question: "What famous pamphlet argued for independence in 1776?",
    answer: "Common Sense by Thomas Paine",
    category: "Constitutional Law"
  },
  {
    question: "What three unalienable rights are listed in the Declaration?",
    answer: "Life, Liberty, and the Pursuit of Happiness",
    category: "Constitutional Law"
  },
  {
    question: "When was the U.S. Constitution ratified?",
    answer: "1787",
    category: "Constitutional Law"
  },
  {
    question: "What are the first 10 amendments called?",
    answer: "The Bill of Rights (added in 1791)",
    category: "Constitutional Law"
  },
  {
    question: "How many total amendments are in the Constitution?",
    answer: "27",
    category: "Constitutional Law"
  },
  {
    question: "What does Article I establish?",
    answer: "Legislative Branch (Congress)",
    category: "Constitutional Law"
  },
  {
    question: "What does Article II establish?",
    answer: "Executive Branch (President)",
    category: "Constitutional Law"
  },
  {
    question: "What does article III establish?",
    answer: "Judicial Branch (Courts)",
    category: "Constitutional Law"
  },
  {
    question: "What is required to amend the Constitution?",
    answer: "2/3 of Congress + 3/4 of states",
    category: "Constitutional Law"
  },
  {
    question: "2nd Amendment",
    answer: "Right to bear arms",
    category: "Constitutional Law"
  },
  {
    question: "3rd Amendment",
    answer: "No quartering soldiers in homes",
    category: "Constitutional Law"
  },
  {
    question: "4th Amendment",
    answer: "Protection against unreasonable searches and seizures",
    category: "Constitutional Law"
  },
  {
    question: "5th Amendment protections",
    answer: "Double jeopardy, self-incrimination, due process, takings clause",
    category: "Constitutional Law"
  },
  {
    question: "6th Amendment",
    answer: "Speedy trial, impartial jury, right to attorney",
    category: "Constitutional Law"
  },
  {
    question: "8th Amendment",
    answer: "No cruel and unusual punishment; no excessive fines/bails",
    category: "Constitutional Law"
  },
  {
    question: "9th Amendment",
    answer: "Rights not listed still exist",
    category: "Constitutional Law"
  },
  {
    question: "10th Amendment",
    answer: "Powers not given to federal government belong to states or people",
    category: "Constitutional Law"
  },
  {
    question: "13th Amendment",
    answer: "Abolished slavery",
    category: "Constitutional Law"
  },
  {
    question: "14th Amendment",
    answer: "Applies due process and equal protection to states",
    category: "Constitutional Law"
  },
  {
    question: "15th Amendment",
    answer: "Race cannot be used to deny voting",
    category: "Constitutional Law"
  },
  {
    question: "16th Amendment",
    answer: "Federal income tax",
    category: "Constitutional Law"
  },
  {
    question: "17th Amendment",
    answer: "Direct election of Senators",
    category: "Constitutional Law"
  },
  {
    question: "18th Amendment",
    answer: "Prohibition (later repealed)",
    category: "Constitutional Law"
  },
  {
    question: "19th Amendment",
    answer: "Women's right to vote",
    category: "Constitutional Law"
  },
  {
    question: "21st Amendment",
    answer: "Repealed Prohibition",
    category: "Constitutional Law"
  },
  {
    question: "22nd Amendment",
    answer: "President limited to two terms",
    category: "Constitutional Law"
  },
  {
    question: "25th Amendment",
    answer: "Presidential succession and disability procedures",
    category: "Constitutional Law"
  },
  {
    question: "26th Amendment",
    answer: "Voting age of 18",
    category: "Constitutional Law"
  },
  {
    question: "Who is commander-in-chief of the armed forces?",
    answer: "The President",
    category: "Constitutional Law"
  },
  {
    question: "How long is a presidential term?",
    answer: "4 years",
    category: "Constitutional Law"
  },
  {
    question: "What are the President's main powers?",
    answer: "Sign/veto bills, appoint judges, make treaties, pardon criminals",
    category: "Constitutional Law"
  },
  {
    question: "Who confirms presidential appointments?",
    answer: "Senate",
    category: "Constitutional Law"
  },
  {
    question: "Who is first in line after the President?",
    answer: "Vice President",
    category: "Constitutional Law"
  },
  {
    question: "Who is second in line after the President?",
    answer: "Speaker of the House",
    category: "Constitutional Law"
  },
  {
    question: "Who is third in line after the President?",
    answer: "President Pro Tempore of the Senate",
    category: "Constitutional Law"
  },
  {
    question: "Which Cabinet Secretary is first in line after congressional leaders?",
    answer: "Secretary of State",
    category: "Constitutional Law"
  },
  {
    question: "What does \"bicameral\" mean?",
    answer: "Two chambers (House and Senate)",
    category: "Constitutional Law"
  },
  {
    question: "How many Senators are there?",
    answer: "100 (2 per state)",
    category: "Constitutional Law"
  },
  {
    question: "How long is a Senator's term?",
    answer: "6 years",
    category: "Constitutional Law"
  },
  {
    question: "How many representatives are there?",
    answer: "435",
    category: "Constitutional Law"
  },
  {
    question: "How long is a Representative's term?",
    answer: "2 years",
    category: "Constitutional Law"
  },
  {
    question: "How many votes are needed to pass a bill in the House?",
    answer: "218 (simple majority)",
    category: "Constitutional Law"
  },
  {
    question: "How many votes are needed to pass a bill in the Senate?",
    answer: "51 (simple majority)",
    category: "Constitutional Law"
  },
  {
    question: "Who introduces a bill?",
    answer: "A Senator or Representative (sponsor)",
    category: "Legal Framework"
  },
  {
    question: "Where is a bill sent after introduction?",
    answer: "Committee/Subcommittee",
    category: "Legal Framework"
  },
  {
    question: "What resolves differences between House & Senate versions?",
    answer: "Conference Committee",
    category: "Legal Framework"
  },
  {
    question: "What are the President's 4 options when receiving a bill?",
    answer: "Sign, Veto, Pocket Veto, Take no action (becomes law in 10 days)",
    category: "Legal Framework"
  },
  {
    question: "How can Congress override a veto?",
    answer: "2/3 vote in both chambers",
    category: "Legal Framework"
  },
  {
    question: "What Article of the Constitution establishes the federal judiciary?",
    answer: "Article III",
    category: "Constitutional Law"
  },
  {
    question: "What are the 3 levels of the federal court system?",
    answer: "District Courts, Courts of Appeals, Supreme Court",
    category: "Legal Framework"
  },
  {
    question: "What is the role of the U.S. District Courts?",
    answer: "Trial courts (federal question and diversity jurisdiction)",
    category: "Legal Framework"
  },
  {
    question: "What is federal question jurisdiction?",
    answer: "Cases involving the U.S. Constitution or federal law",
    category: "Legal Framework"
  },
  {
    question: "What is diversity jurisdiction?",
    answer: "Cases between citizens of different states where amount exceeds $75,000",
    category: "Legal Framework"
  },
  {
    question: "How many Supreme Court justices are there?",
    answer: "9",
    category: "Legal Framework"
  },
  {
    question: "How long do Supreme Court justices serve?",
    answer: "Lifetime appointments",
    category: "Legal Framework"
  },
  {
    question: "What is a writ of certiorari?",
    answer: "A request asking the Supreme Court to hear a case",
    category: "Legal Framework"
  },
  {
    question: "How many cert petitions does SCOTUS receive yearly vs hear?",
    answer: "~10,000 petitions; hears ~75-80 cases",
    category: "Legal Framework"
  },
  {
    question: "What is common law?",
    answer: "Judge-made law created through court decisions",
    category: "Legal Framework"
  },
  {
    question: "What is precedent?",
    answer: "A prior court decision that is binding on lower courts",
    category: "Legal Framework"
  },
  {
    question: "What does \"stare decisis\" mean?",
    answer: "\"To stand by things decided\" (follow precedent)",
    category: "Legal Framework"
  },
  {
    question: "What is the Federal Register?",
    answer: "The daily journal/newspaper of the federal government",
    category: "Legal Framework"
  },
  {
    question: "What are the 3 legal tests for a valid regulation?",
    answer: "1. Within agency authority\n2. Based on statutory authority\n3. Reasonably related to public health, safety, welfare",
    category: "Legal Framework"
  },
  {
    question: "What can agencies do for compliance?",
    answer: "Issue guidance, policy statements, interpretive rules",
    category: "Legal Framework"
  },
  {
    question: "What enforcement actions can agencies take?",
    answer: "Inspections, recalls, fines, injunctions, seizure, prosecution",
    category: "Legal Framework"
  },
  {
    question: "Who reviews agency actions for legality?",
    answer: "Courts (Judicial Review)",
    category: "Legal Framework"
  },
  {
    question: "What must a person have to challenge agency action in court?",
    answer: "Standing, exhaustion of remedies, ripeness",
    category: "Legal Framework"
  },
  {
    question: "What does HHS stand for?",
    answer: "Department of Health and Human Services",
    category: "Agencies"
  },
  {
    question: "Name major agencies under HHS relevant to pharmacy.",
    answer: "FDA, CMS, CDC, NIH, HRSA, SAMHSA",
    category: "Agencies"
  },
  {
    question: "What does FDA regulate?",
    answer: "Safety and efficacy of drugs, food, medical devices",
    category: "Agencies"
  },
  {
    question: "What does DEA regulate?",
    answer: "Controlled substances",
    category: "Agencies"
  },
  {
    question: "What does CMS regulate?",
    answer: "Medicare and Medicaid",
    category: "Agencies"
  },
  {
    question: "What does FTC regulate?",
    answer: "Trade practices and consumer protection",
    category: "Agencies"
  },
  {
    question: "What constitutional clause gives Congress power to regulate drug distribution?",
    answer: "Interstate Commerce Clause (Article I, Section 8)",
    category: "Constitutional Law"
  },
  {
    question: "Who regulates drug distribution?",
    answer: "Federal govenment",
    category: "Legal Framework"
  },
  {
    question: "Who regulates the practice of pharmacy?",
    answer: "States",
    category: "Legal Framework"
  },
  {
    question: "Which is broader: statute or regulation?",
    answer: "Statute (broad framework)",
    category: "Legal Framework"
  },
  {
    question: "Which is more detailed: statute or regulation?",
    answer: "Regulation (specific implementation details)",
    category: "Legal Framework"
  },
  {
    question: "What gives an agency authority to create a regulation?",
    answer: "A statute",
    category: "Legal Framework"
  },
  {
    question: "What is the United States Code (USC)?",
    answer: "The codified database of all general and permanent federal statutes",
    category: "Legal Framework"
  },
  {
    question: "How many titles are in the United States Code?",
    answer: "51 titles",
    category: "Legal Framework"
  },
  {
    question: "Which title of the USC contains food and drug laws?",
    answer: "Title 21",
    category: "Legal Framework"
  },
  {
    question: "In a citation like \"21 USC §123(a)\", what does \"21\" represent?",
    answer: "The Title number",
    category: "Legal Framework"
  },
  {
    question: "In a USC citation, what does the \"§\" symbol mean?",
    answer: "Section",
    category: "Legal Framework"
  },
  {
    question: "In \"21 USC §123(a),\" what does \"(a)\" represent?",
    answer: "A specific paragraph within the section",
    category: "Legal Framework"
  },
  {
    question: "What is the Code of Federal Regulations (CFR)?",
    answer: "The codified collection of federal agency regulations",
    category: "Legal Framework"
  },
  {
    question: "How many titles are in the CFR?",
    answer: "50 titles",
    category: "Legal Framework"
  },
  {
    question: "What is Title 21 of the CFR?",
    answer: "Food and Drugs",
    category: "Legal Framework"
  },
  {
    question: "In a CFR citation \"21 CFR 310.502,\" what does \"310\" represent?",
    answer: "The Part number",
    category: "Legal Framework"
  },
  {
    question: "In \"21 CFR 310.502,\" what does \"502\" represent?",
    answer: "The Section number",
    category: "Legal Framework"
  },
  {
    question: "Where are proposed federal regulations first published before being codified in the CFR?",
    answer: "Federal Register",
    category: "Legal Framework"
  },
  {
    question: "What does \"IC\" stand for in Indiana law citations?",
    answer: "Indiana Code (state statutes)",
    category: "Indiana Law"
  },
  {
    question: "What does \"IAC\" stand for in Indiana law citations?",
    answer: "Indiana Administrative Code (state regulations)",
    category: "Indiana Law"
  },
  {
    question: "In \"IC 25-26-13-4,\" what does the first number (25) represent?",
    answer: "Title",
    category: "Indiana Law"
  },
  {
    question: "In \"856 IAC 1-33-2,\" what does 856 represent?",
    answer: "Title number for Indiana Administrative Code (Board of Pharmacy)",
    category: "Indiana Law"
  },
  {
    question: "Who creates Indiana pharmacy regulations?",
    answer: "Indiana Board of Pharmacy",
    category: "Indiana Law"
  },
  {
    question: "Where are proposed Indiana regulations published?",
    answer: "Indiana Register",
    category: "Indiana Law"
  },
  {
    question: "What gives the Board of Pharmacy authority to create rules?",
    answer: "Statutory authority granted by the legislature",
    category: "Indiana Law"
  },
  {
    question: "Can a Board of Pharmacy create rules without statutory authority?",
    answer: "No",
    category: "Indiana Law"
  },
  {
    question: "What is required for a regulation to be valid?",
    answer: "It must be within agency authority, based on statute, and reasonably related to public health, safety, and welfare",
    category: "Legal Framework"
  },
  {
    question: "Who regulates drug distribution at the federal level?",
    answer: "Federal government (under Interstate Commerce Clause)",
    category: "Legal Framework"
  },
  {
    question: "Who regulates pharmacy practice?",
    answer: "States (under police powers/10th Amendment)",
    category: "Legal Framework"
  },
  {
    question: "Which federal agency enforces controlled substance laws?",
    answer: "DEA",
    category: "Agencies"
  },
  {
    question: "What is Indiana's equivalent of the Federal Register?",
    answer: "Indiana Register (IR)",
    category: "Indiana Law"
  },
  {
    question: "Where are proposed Indiana pharmacy rules published?",
    answer: "Indiana Register",
    category: "Indiana Law"
  },
  {
    question: "Who can submit comments during Indiana rulemaking?",
    answer: "Members of the public and interested parties",
    category: "Indiana Law"
  },
  {
    question: "Where can you find Indiana Board of Pharmacy meeting dates and agendas?",
    answer: "Indiana Professional Licensing Agency (PLA) website",
    category: "Indiana Law"
  },
  {
    question: "What is an Advance Notice of Proposed Rulemaking (ANPRM)?",
    answer: "A preliminary notice asking for public input before proposing a formal rule",
    category: "Legal Framework"
  },
  {
    question: "What is a Notice of Proposed Rulemaking (NPRM)?",
    answer: "The official published proposed rule during notice and comment",
    category: "Legal Framework"
  },
  {
    question: "After the comment period, what does the agency publish?",
    answer: "A Final Rule",
    category: "Legal Framework"
  },
  {
    question: "Where are final federal regulations ultimately codified?",
    answer: "Code of Federal Regulations (CFR)",
    category: "Legal Framework"
  },
  {
    question: "Can Congress block a final agency rule?",
    answer: "Yes, through a resolution of disapproval (rare)",
    category: "Legal Framework"
  },
  {
    question: "Can courts invalidate an agency regulation?",
    answer: "Yes, if unconstitutional, exceeds authority, or arbitrary/capricious",
    category: "Legal Framework"
  },
  {
    question: "What is an Administrative Law Judge (ALJ)?",
    answer: "An official who presides over agency hearings",
    category: "Legal Framework"
  },
  {
    question: "What is the final decision from an agency hearing called?",
    answer: "Administrative Order",
    category: "Legal Framework"
  },
  {
    question: "What is judicial review?",
    answer: "Court review of an agency's actions",
    category: "Legal Framework"
  },
  {
    question: "What does authorization legislation do?",
    answer: "Creates or establishes a government program",
    category: "Legal Framework"
  },
  {
    question: "What does appropriation legislation do?",
    answer: "Provides funding for the program",
    category: "Legal Framework"
  },
  {
    question: "Can a program operate without appropriation?",
    answer: "No, it must be funded",
    category: "Legal Framework"
  },
  {
    question: "What are the 4 key federal committees for health policy?",
    answer: "Senate: HELP and Finance\nHouse: Energy and Commerce and Ways and Means",
    category: "Legal Framework"
  },
  {
    question: "What does the Senate HELP Committee stand for?",
    answer: "Health, Education, Labor and Pensions",
    category: "Legal Framework"
  },
  {
    question: "When reviewing agency action, what can courts evaluate?",
    answer: "Whether agency exceeded authority?\nWhether proper procedures were followed?\nWhether decision was arbitrary or capricious?",
    category: "Legal Framework"
  },
  {
    question: "What are 2 types of due process?",
    answer: "Procedural due process and substantive due process",
    category: "Constitutional Law"
  },
  {
    question: "What must be true for a controlled substance prescription to be valid under federal law?",
    answer: "It must be issued for a legitimate medical purpose by a practitioner acting in the usual course of professional practice",
    category: "Controlled Substances"
  },
  {
    question: "Who has a \"corresponding responsibility\" when dispensing controlled substances?",
    answer: "The pharmacist",
    category: "Controlled Substances"
  },
  {
    question: "What DEA form is required to order Schedule II controlled substances?",
    answer: "DEA Form 222 (or its electronic equivalent via CSOS)",
    category: "DEA Forms"
  },
  {
    question: "How often must a pharmacy conduct a federal controlled substance inventory?",
    answer: "Initially upon registration and at least every 2 years thereafter",
    category: "Pharmacy Practice"
  },
  {
    question: "What must be done with Schedule II inventory records?",
    answer: "They must be maintained separately from all other records",
    category: "Pharmacy Practice"
  },
  {
    question: "What is the maximum emergency supply of a Schedule II drug that may be dispensed before receiving a written prescription?",
    answer: "Limited quantity sufficient to treat during the emergency period (oral authorization allowed; written prescription required within 7 days)",
    category: "Pharmacy Practice"
  },
  {
    question: "What is the primary purpose of a Prescription Drug Monitoring Program (PDMP)?",
    answer: "To track controlled substance dispensing and detect misuse or diversion",
    category: "Pharmacy Practice"
  },
  {
    question: "Who typically has access to PDMP data?",
    answer: "Authorized prescribers, pharmacists, regulatory boards, and sometimes law enforcement (depending on state law)",
    category: "Pharmacy Practice"
  },
  {
    question: "How many times may a Schedule III-V prescription be refilled under federal law?",
    answer: "Up to 5 refills within 6 months of the issue date",
    category: "Pharmacy Practice"
  },
  {
    question: "Can Schedule II prescriptions be refilled?",
    answer: "No",
    category: "Pharmacy Practice"
  },
  {
    question: "How many times may a Schedule III-V prescription be transferred under federal law?",
    answer: "Once (unless pharmacies share a real-time electronic database)",
    category: "Pharmacy Practice"
  },
  {
    question: "Can Schedule II prescriptions be transferred?",
    answer: "Only in limited circumstances (e.g., pharmacy closure) and under strict federal guidelines",
    category: "Pharmacy Practice"
  },
  {
    question: "What is the primary difference between USP <795> and USP <797>?",
    answer: "<795> governs nonsterile compounding; <797> governs sterile compounding",
    category: "Pharmacy Practice"
  },
  {
    question: "What does USP <800> address?",
    answer: "Handling of hazardous drugs to minimize exposure risk",
    category: "Pharmacy Practice"
  },
  {
    question: "What is required before compounding a sterile preparation?",
    answer: "Proper training, environmental controls, and appropriate engineering controls (e.g., cleanroom standards)",
    category: "Pharmacy Practice"
  },
  {
    question: "What is malpractice?",
    answer: "Professional negligence that causes harm to a patient",
    category: "Liability"
  },
  {
    question: "What 4 elements must be proven in a malpractice claim?",
    answer: "Duty, breach, causation, damages",
    category: "Liability"
  },
  {
    question: "What is vicarious liability?",
    answer: "When an employer is legally responsible for the actions of an employee",
    category: "Liability"
  },
  {
    question: "What is \"strict liability\" in product liability cases?",
    answer: "Liability without needing to prove negligence (defective product cases)",
    category: "Liability"
  },
  {
    question: "What does HIPAA protect?",
    answer: "Protected Health Information (PHI)",
    category: "HIPAA"
  },
  {
    question: "What are the 2 main HIPAA rules relevant to pharmacy?",
    answer: "Privacy Rule and Security Rule",
    category: "HIPAA"
  },
  {
    question: "When may PHI be disclosed without patient authorization?",
    answer: "For treatment, payment, healthcare operations (TPO)",
    category: "HIPAA"
  },
  {
    question: "What can occur during a Board of Pharmacy inspection?",
    answer: "Review of records, inventory, security, and compliance procedures",
    category: "Pharmacy Practice"
  },
  {
    question: "What is an Administrative Law Judge (ALJ) responsible for?",
    answer: "Presiding over agency hearings",
    category: "Legal Framework"
  },
  {
    question: "What is an administrative order?",
    answer: "The final decision issued by an agency after a hearing",
    category: "Legal Framework"
  },
  {
    question: "What is the \"scope of practice\"?",
    answer: "The activities professionals are legally authorized to perform",
    category: "Pharmacy Practice"
  },
  {
    question: "Can pharmacists delegate professional judgment to technicians?",
    answer: "No",
    category: "Pharmacy Practice"
  },
  {
    question: "Who determines technician scope of duties?",
    answer: "State law and Board of Pharmacy regulations",
    category: "Pharmacy Practice"
  },
  {
    question: "What must pharmacies ensure when delivering medications?",
    answer: "Proper labeling, security, and patient confidentiality",
    category: "Pharmacy Practice"
  },
  {
    question: "What is required if controlled substances are lost or stolen?",
    answer: "Prompt notification to DEA and completion of DEA Form 106",
    category: "Pharmacy Practice"
  },
  {
    question: "What is an adulterated drug?",
    answer: "A drug that fails purity, strength, or quality standards",
    category: "Federal Law"
  },
  {
    question: "What is misbranding?",
    answer: "False or misleading labeling or inadequate directions for use",
    category: "Federal Law"
  },
  {
    question: "What is a \"pocket veto\"?",
    answer: "When the President takes no action and Congress adjourns within 10 days, causing the bill to die",
    category: "Legal Framework"
  },
  {
    question: "What is a conference committee?",
    answer: "A committee formed to reconcile differences between House and Senate versions of a bill",
    category: "Legal Framework"
  },
  {
    question: "What is therapeutic substitution?",
    answer: "Dispensing a different drug than prescribed, usually within the same class (requires authorization)",
    category: "Pharmacy Practice"
  },
  {
    question: "What is generic substitution?",
    answer: "Dispensing an FDA-approved equivalent product in place of the brand-name drug",
    category: "Pharmacy Practice"
  },
  {
    question: "Under the FDCA, does the definition of a drug depend on actual consumer use or manufacturer intent?",
    answer: "Manufacturer/supplier intent controls - not how the consumer uses the product",
    category: "Federal Law"
  },
  {
    question: "What was the primary focus of the Pure Food and Drug Act of 1906?",
    answer: "Preventing misbranding and adulteration of food and drugs",
    category: "Federal Law"
  },
  {
    question: "Did the 1906 Act require proof of safety before marketing?",
    answer: "No",
    category: "Federal Law"
  },
  {
    question: "What agency eventually evolved from the enforcement of the 1906 Act?",
    answer: "The FDA",
    category: "Federal Law"
  },
  {
    question: "What event led to the Food, Drug, and Cosmetic Act of 1938?",
    answer: "The sulfanilamide elixir tragedy (diethylene glycol poisoning)",
    category: "Federal Law"
  },
  {
    question: "What major requirement did the FDCA of 1938 introduce?",
    answer: "Drugs must be proven safe before marketing",
    category: "Federal Law"
  },
  {
    question: "What authority did the FDCA give the FDA regarding inspections?",
    answer: "Authority to inspect manufacturing facilities",
    category: "Federal Law"
  },
  {
    question: "What type of products did the 1938 Act newly regulate?",
    answer: "Medical devices and cosmetics",
    category: "Federal Law"
  },
  {
    question: "What did the Durham-Humphrey Amendment establish?",
    answer: "The distinction between prescription (Rx only) and OTC drugs",
    category: "Federal Law"
  },
  {
    question: "What legend did Durham-Humphrey require?",
    answer: "\"Caution: Federal law prohibits dispensing without a prescription\"",
    category: "Federal Law"
  },
  {
    question: "Did this amendment allow refills?",
    answer: "Yes - authorized refills",
    category: "Federal Law"
  },
  {
    question: "What global drug tragedy led to the Kefauver-Harris Amendment of 1962?",
    answer: "Thalidomide causing birth defects (phocomelia)",
    category: "Federal Law"
  },
  {
    question: "What major new requirement did Kefauver-Harris add?",
    answer: "Drugs must be proven effective (not just safe) before approval",
    category: "Federal Law"
  },
  {
    question: "What type of studies became mandatory after Kefauver-Harris?",
    answer: "Well-controlled clinical trials",
    category: "Federal Law"
  },
  {
    question: "What did Kefauver-Harris require regarding informed consent?",
    answer: "Required informed consent from clinical trial participants",
    category: "Federal Law"
  },
  {
    question: "What manufacturing standards were strengthened by Kefauver-Harris?",
    answer: "Good Manufacturing Practices (GMPs)",
    category: "Federal Law"
  },
  {
    question: "Did Kefauver-Harris apply retroactively to previously approved drugs?",
    answer: "Yes - efficacy review of previously approved drugs began",
    category: "Federal Law"
  },
  {
    question: "What did the Controlled Substances Act establish?",
    answer: "The 5-schedule classification system",
    category: "Federal Law"
  },
  {
    question: "What determines a drug's schedule?",
    answer: "Abuse potential, medical use, and safety/dependence risk",
    category: "Federal Law"
  },
  {
    question: "What federal agency enforces the CSA?",
    answer: "DEA",
    category: "Agencies"
  },
  {
    question: "What amendment shifted prescription drug advertising oversight to the FDA?",
    answer: "Kefauver-Harris Amendment",
    category: "Federal Law"
  },
  {
    question: "What is another name for the Drug Price Competition and Patent Term Restoration Act (1984)?",
    answer: "Hatch-Waxman",
    category: "Federal Law"
  },
  {
    question: "What did the Hatch-Waxman create?",
    answer: "The Abbreviated New Drug Application (ANDA) pathway",
    category: "Federal Law"
  },
  {
    question: "What is required in an ANDA?",
    answer: "Bioequivalence - not full clinical trials",
    category: "Federal Law"
  },
  {
    question: "What did Hatch-Waxman balance?",
    answer: "Generic access and brand patent protections",
    category: "Federal Law"
  },
  {
    question: "What is the purpose of the Poison Preventing Packaging Act?",
    answer: "Prevent accidental pediatric poisionings",
    category: "Federal Law"
  },
  {
    question: "Can a patient request non-child-resistant packaging?",
    answer: "Yes, via written request (blanket waivers allowed)",
    category: "Federal Law"
  },
  {
    question: "What did OBRA '90 require pharmacists to perform?",
    answer: "Prospective drug utilization review (DUR)",
    category: "Federal Law"
  },
  {
    question: "What did OBRA '90 require regarding patient interaction?",
    answer: "Offer to counsel Medicaid patients (later expanded by states)",
    category: "Federal Law"
  },
  {
    question: "Did OBRA '90 apply only to Medicaid originally?",
    answer: "Yes, but most states extended it to all patients",
    category: "Federal Law"
  },
  {
    question: "What is the purpose of Drug Supply Chain Security Act (DSCSA) (2013)?",
    answer: "Track-and-trace system for prescription drugs in the supply chain",
    category: "Federal Law"
  },
  {
    question: "What is required with drug distribution under DSCSA?",
    answer: "Transaction information, history, and statement",
    category: "Federal Law"
  },
  {
    question: "What did the FDA Modernization Act of 1997 allow regarding off-label use?",
    answer: "Dissemination of certain off-label information to providers",
    category: "Federal Law"
  },
  {
    question: "What major post-marketing authority did the 2007 FDA Amendments Act give FDA?",
    answer: "Risk Evaluation and Mitigation Strategies (REMS)",
    category: "Federal Law"
  },
  {
    question: "Can FDA require post-marketing studies?",
    answer: "Yes, under FDAAA",
    category: "Federal Law"
  },
  {
    question: "How can the FDA determine a manufacturer's \"intent\" for a product?",
    answer: "By examining labeling, advertising, promotional materials, and marketing format",
    category: "Federal Law"
  },
  {
    question: "If a product makes a structure/function claim but no disease claim, can it still be considered a drug?",
    answer: "Yes, if it is intended to affect the structure or function of the body (unless properly regulated as a dietary supplement)",
    category: "Federal Law"
  },
  {
    question: "Can a product be both a cosmetic and a drug?",
    answer: "Yes, if it is marketed for both cosmetic and therapeutic purposes",
    category: "Federal Law"
  },
  {
    question: "Can a product be both a drug and a device?",
    answer: "No - it must be classified as one or the other (unless it is a combination product)",
    category: "Federal Law"
  },
  {
    question: "Is Medicare based on income?",
    answer: "No. Medicare eligibility is not based on income.",
    category: "Medicare & Medicaid"
  },
  {
    question: "What are the 4 parts of Medicare?",
    answer: "Part A: Inpatient (hospital insurance)\nPart B: Outpatient/medical insurance\nPart C: Medicare Advantage (managed care plans)\nPart D: Prescription drug benefit",
    category: "Medicare & Medicaid"
  },
  {
    question: "What insulin costs are capped under Medicare Part B and D?",
    answer: "$35 per month supply (no deductible required)",
    category: "Medicare & Medicaid"
  },
  {
    question: "What is the 2026 Medicare Part D out-of-pocket cap?",
    answer: "$2,100 annual cap",
    category: "Medicare & Medicaid"
  },
  {
    question: "What are the 6 \"protected classes\" under Medicare Part D?",
    answer: "Antidepressants, antipsychotics, anticonvulsants, antiretrovirals, antineoplastics, immunosuppressants",
    category: "Medicare & Medicaid"
  },
  {
    question: "What is the \"Any Willing Provider\" clause in Part D?",
    answer: "Plans must accept participation from any pharmacy that agrees to plan terms and conditions",
    category: "Medicare & Medicaid"
  },
  {
    question: "How long must pharmacies keep Medicare Part D records?",
    answer: "10 years",
    category: "Medicare & Medicaid"
  },
  {
    question: "What is the Medicare Part D late enrollment penalty?",
    answer: "1% premium increase per month of delay",
    category: "Medicare & Medicaid"
  },
  {
    question: "What is the Extra Help Program?",
    answer: "A low-income subsidy (≤150% FPL) that reduces Part D costs (e.g., low copays for generics and brands)",
    category: "Medicare & Medicaid"
  },
  {
    question: "Name the top 3 PBMs (2023).",
    answer: "Caremark (CVS Health), Express Scripts (Cigna), Optum Rx (UnitedHealth Group)",
    category: "Medicare & Medicaid"
  },
  {
    question: "What is the difference between HMO and PPO?",
    answer: "HMO: Must stay in network, usually need PCP + referrals\nPPO: More flexibility, high cost out-of-network, no referral needed",
    category: "Medicare & Medicaid"
  },
  {
    question: "What does the Anti-Kickback Statute prohibit?",
    answer: "Offering or receiving remuneration to generate federal healthcare business",
    category: "Fraud & Abuse"
  },
  {
    question: "Does Anti-Kickback require criminal intent?",
    answer: "Yes",
    category: "Fraud & Abuse"
  },
  {
    question: "Are manufacturer coupons allowed with Medicare Part D?",
    answer: "No. They're considered illegal kickbacks",
    category: "Fraud & Abuse"
  },
  {
    question: "Who enforces the Anti-Kickback Statute?",
    answer: "Office of Inspector General (OIG)",
    category: "Fraud & Abuse"
  },
  {
    question: "What are \"safe harbor\" provisions?",
    answer: "Exceptions protecting certain arrangements from Anti-Kickback violations",
    category: "Fraud & Abuse"
  },
  {
    question: "What does Stark Law prohibit?",
    answer: "Physician self-referrals for designated health services to entities where they have a financial relationship",
    category: "Fraud & Abuse"
  },
  {
    question: "Does Stark require criminal intent?",
    answer: "No",
    category: "Fraud & Abuse"
  },
  {
    question: "What services are considered \"designated health services\" under Stark?",
    answer: "Lab, radiology, DME, outpatient drugs, PT/OT, home health, hospital services, etc",
    category: "Fraud & Abuse"
  },
  {
    question: "What does the False Claims Act prohibit?",
    answer: "Submitting false or fraudulent claims to the federal government",
    category: "Fraud & Abuse"
  },
  {
    question: "What are damages under FCA?",
    answer: "Treble (3x) damages",
    category: "Fraud & Abuse"
  },
  {
    question: "What are Qui Tam lawsuits?",
    answer: "Whistleblower suits where private individuals can recover 15-25% of recovered funds",
    category: "Fraud & Abuse"
  },
  {
    question: "Why was OBRA '90 significant for pharmacy practice?",
    answer: "It mandated prospective DUR, counseling, and documentation as a condition of Medicaid participation",
    category: "Pharmacy Practice"
  },
  {
    question: "What must pharmacists screen for during prospective DUR?",
    answer: "Therapeutic duplication, drug-disease contraindications, drug-drug interactions, incorrect dosage/duration, drug-allergy interactions, misuse/abuse, over/under utilization",
    category: "Pharmacy Practice"
  },
  {
    question: "What are the 3 components of OBRA '90?",
    answer: "1. Drug Utilization Review (DUR)\n2. Rebates (Best Price requirement)\n3. Demonstration projects",
    category: "Pharmacy Practice"
  },
  {
    question: "Does OBRA require counseling?",
    answer: "It requires an offer to counsel (not forced counseling)",
    category: "Pharmacy Practice"
  },
  {
    question: "Can a patient refuse counseling?",
    answer: "Yes. Must be informed and voluntary; document refusal",
    category: "Pharmacy Practice"
  },
  {
    question: "What must be documented under OBRA?",
    answer: "Patient demographics, disease states, allergies, medication list, pharmacist interventions, refusals",
    category: "Pharmacy Practice"
  },
  {
    question: "When was HIPAA enacted?",
    answer: "1996",
    category: "HIPAA"
  },
  {
    question: "What is PHI?",
    answer: "Individually identifiable health information related to condition, treatment, or payment",
    category: "HIPAA"
  },
  {
    question: "What is the \"minimum necessary\" rule?",
    answer: "Only disclose the minimum PHI necessary to accomplish the purpose",
    category: "HIPAA"
  },
  {
    question: "Who are \"covered entities\"?",
    answer: "Health plans, clearinghouses, and healthcare providers transmitting electronic health information",
    category: "HIPAA"
  },
  {
    question: "Who enforces HIPAA?",
    answer: "Office for Civil Rights (OCR)",
    category: "HIPAA"
  },
  {
    question: "How long must HIPAA acknowledgment records be kept?",
    answer: "6 years",
    category: "HIPAA"
  },
  {
    question: "What is required if a PHI breach affects >500 individuals?",
    answer: "Notify affects individuals within 60 days and notify media + HHS",
    category: "HIPAA"
  },
  {
    question: "Is written authorization required to use PHI for marketing?",
    answer: "Yes",
    category: "HIPAA"
  },
  {
    question: "What is the refill reminder exception?",
    answer: "Allows refill/adherence communications about currently prescribed drugs if remuneration is reasonably related to cost",
    category: "HIPAA"
  },
  {
    question: "Who funds Medicaid?",
    answer: "State and federal government (minimum 50% federal match)",
    category: "Medicare & Medicaid"
  },
  {
    question: "Is Medicaid eligibility based on income?",
    answer: "Yes",
    category: "Medicare & Medicaid"
  },
  {
    question: "Who are dual eligibles?",
    answer: "Individuals eligible for both Medicare and Medicaid",
    category: "Medicare & Medicaid"
  },
  {
    question: "Can a pharmacy waive Medicare copays to attract patients?",
    answer: "No",
    category: "Fraud & Abuse"
  },
  {
    question: "Must pharmacies check employees against the OIG Exclusion List?",
    answer: "Yes",
    category: "Fraud & Abuse"
  },
  {
    question: "Are pharmacies required to provide FWA training?",
    answer: "Yes",
    category: "Fraud & Abuse"
  },
  {
    question: "Who is eligible for Medicare?",
    answer: "Individuals ≥65 years of age, individuals with permanent disabilities, individuals with ESRD, individuals exposed to environmental hazards",
    category: "Medicare & Medicaid"
  },
  {
    question: "Why are Medicare coverage decisions important?",
    answer: "Private insurance companies often follow Medicare coverage policies",
    category: "Medicare & Medicaid"
  },
  {
    question: "What are the 3 phases of Medicare Part D (2025)?",
    answer: "1. Deductible phase\n2. Initial coverage phase\n3. Catastrophic coverage phase",
    category: "Medicare & Medicaid"
  },
  {
    question: "During the Initial Coverage Phase, what does the patient typically pay?",
    answer: "25% coinsurance",
    category: "Medicare & Medicaid"
  },
  {
    question: "In the Catastrophic Phase (2025), who pays for brand drugs?",
    answer: "Part D plan, manufacturer, Medicare",
    category: "Medicare & Medicaid"
  },
  {
    question: "In the Catastrophic Phase (2025), who pays for generic drugs?",
    answer: "Part D plan, Medicare",
    category: "Medicare & Medicaid"
  },
  {
    question: "What is MTM?",
    answer: "Medication Therapy Management - pharmacist-provided services to optimize therapeutic outcomes",
    category: "Pharmacy Practice"
  },
  {
    question: "What are the 5 core elements of MTM?",
    answer: "1. Medication therapy review\n2. Personal medication record\n3. Medication-related action plan\n4. Intervention/referral\n5. Documentation and follow-up",
    category: "Pharmacy Practice"
  },
  {
    question: "What vaccines are covered under Part D?",
    answer: "All commercially available vaccines not covered under Part B",
    category: "Medicare & Medicaid"
  },
  {
    question: "Name drugs not required to be covered under Part D.",
    answer: "Weight loss drugs, fertility drugs, cosmetic/hair growth drugs, OTC drugs, DESI drugs, non-FDA approved drugs",
    category: "Medicare & Medicaid"
  },
  {
    question: "What are Indiana Medicaid programs?",
    answer: "Hoosier Healthwise, Hoosier Care Connect, Healthy Indiana Plan (HIP), Traditional Medicaid, Indiana PathWays for Aging, HoosierRx",
    category: "Indiana Law"
  },
  {
    question: "Who qualifies for Hoosier Healthwise?",
    answer: "Children ≤19 and pregnant women",
    category: "Indiana Law"
  },
  {
    question: "Who qualifies for Healthy Indiana Plan (HIP)?",
    answer: "Ages 19-64 with income ≤ ~138% FPL",
    category: "Indiana Law"
  },
  {
    question: "Who qualifies for HoosierRx?",
    answer: "Indiana residents ≥65 with income <150% FPL and enrolled in Part D",
    category: "Indiana Law"
  },
  {
    question: "What must pharmacists screen for?",
    answer: "Drug interactions, duplication, incorrect dose/duration, drug-disease, allergies, misuse/abuse",
    category: "Pharmacy Practice"
  },
  {
    question: "What must be documented?",
    answer: "Patient demographics, medication list, allergies, pharmacist interventions",
    category: "Pharmacy Practice"
  },
  {
    question: "What national standards did HIPAA establish?",
    answer: "Electronic healthcare transactions, privacy standards, security standards, NPI numbers",
    category: "HIPAA"
  },
  {
    question: "Who are covered entities under HIPAA?",
    answer: "Health plans, clearinghouses, healthcare providers transmitting electronic data",
    category: "HIPAA"
  },
  {
    question: "Are incidental disclosures automatically violations?",
    answer: "No, if reasonable safeguards are in place",
    category: "HIPAA"
  },
  {
    question: "What are reasonable safeguards?",
    answer: "Administrative, technical, and physical protections to limit PHI exposure",
    category: "HIPAA"
  },
  {
    question: "What are some examples of PHI?",
    answer: "Name, address, DOB, SSN, medical record number, email, photos",
    category: "HIPAA"
  },
  {
    question: "What must a pharmacy do regarding Notice of Privacy Practices?",
    answer: "Provide notice, attempt to obtain written acknowledgement, document good faith effort, keep record for 6 years",
    category: "HIPAA"
  },
  {
    question: "When must breach notification occur?",
    answer: "Within 60 days if breach poses significant risk",
    category: "HIPAA"
  }
];

export default lawData;
