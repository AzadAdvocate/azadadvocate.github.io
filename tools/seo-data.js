/*
 * SEO content for the service landing pages.
 * Keyed by category id from assets/js/services-data.js.
 *   title    – <title> tag (what Google shows as the blue link)
 *   h1       – main heading on the page
 *   intro    – opening paragraph
 *   searches – everyday phrases people type into Google (shown on the page)
 *   faqs     – [question, answer] in simple Hinglish
 * After editing, run:  node tools/build-seo-pages.js
 */
module.exports.categories = {
  criminal: {
    title: "Criminal Lawyer in Jalandhar | Bail, FIR, Quashing & Criminal Cases",
    h1: "Criminal Lawyer in Jalandhar",
    intro: "Legal help in police and criminal matters at the District & Sessions Courts, Jalandhar: regular and anticipatory bail, FIR registration, false FIRs, quashing, NDPS, 498A, cheating and trial defence under the new criminal laws (BNS, BNSS, BSA) and the earlier IPC/CrPC.",
    searches: ["criminal lawyer in Jalandhar", "bail lawyer Jalandhar", "anticipatory bail kaise milti hai", "zamanat ke liye vakil", "jhoothi FIR ho gayi kya karein", "FIR quash kaise hoti hai", "police case vakil Jalandhar", "NDPS case lawyer", "498A case lawyer", "फौजदारी वकील जालंधर"],
    faqs: [
      ["Anticipatory bail (agrim zamanat) kya hoti hai?", "Jab kisi ko giraftari ka darr ho, to woh giraftari se pehle Sessions Court ya High Court mein anticipatory bail ki arzi laga sakta hai (Sec. 482 BNSS, pehle Sec. 438 CrPC). Court shartein laga kar giraftari se protection de sakti hai."],
      ["Jhoothi FIR ho jaye to kya karein?", "Ghabraayein nahi. Saare saboot (messages, recordings, documents) sambhal kar rakhein, anticipatory bail ke baare mein turant salah lein, senior police officers ko representation dein, aur zaroorat ho to High Court mein FIR quash karwane ki petition (Sec. 528 BNSS / Sec. 482 CrPC) laga sakte hain."],
      ["Police FIR nahi likh rahi to kya karein?", "Likhit shikayat SSP / Police Commissioner ko bhejein. Phir bhi karwai na ho to Magistrate ke saamne arzi (Sec. 175(3) BNSS, pehle 156(3) CrPC) laga kar investigation ka order maanga ja sakta hai."],
      ["Bail kitne din mein mil jaati hai?", "Ye offence, court aur case ke facts par depend karta hai. Bailable offence mein bail adhikar ke roop mein milti hai. Non-bailable offence mein court facts dekh kar faisla karti hai."]
    ]
  },
  civil: {
    title: "Civil Lawyer in Jalandhar | Recovery, Injunction (Stay), Civil Suits & Appeals",
    h1: "Civil Lawyer in Jalandhar",
    intro: "Civil suits and appeals before the civil courts at Jalandhar: recovery of money, stay orders (injunctions), declaration, specific performance, possession, defamation and execution of decrees.",
    searches: ["civil lawyer Jalandhar", "stay order kaise milta hai", "paise wapas lene ka case", "recovery suit lawyer", "agreement todne par case", "defamation case kaise karein", "decree execution lawyer", "दीवानी वकील जालंधर"],
    faqs: [
      ["Stay order (injunction) kaise milta hai?", "Civil suit ke saath temporary injunction ki arzi lagti hai. Court dekhti hai ki prima facie case hai ya nahi, nuksaan kis taraf zyada hoga, aur kya baad mein bharpai na ho sakne wala nuksaan hoga."],
      ["Udhaar diye paise wapas kaise milenge?", "Pehle legal notice bheja jaata hai. Paise na milne par recovery suit (aam taur par 3 saal ki limitation ke andar) ya cheque ho to cheque bounce case kiya ja sakta hai."],
      ["Civil case mein kitna time lagta hai?", "Ye court ke workload aur case ki complexity par depend karta hai. Kai maamle mediation ya Lok Adalat se jaldi suljh jaate hain."]
    ]
  },
  family: {
    title: "Divorce & Family Lawyer in Jalandhar | Mutual Divorce, Maintenance, Custody",
    h1: "Divorce & Family Lawyer in Jalandhar",
    intro: "Confidential help in family and matrimonial matters at the Family Courts, Jalandhar: mutual consent and contested divorce, maintenance (kharcha), child custody, domestic violence, stridhan, court marriage and protection for married couples.",
    searches: ["divorce lawyer in Jalandhar", "talaq ke liye vakil", "mutual divorce kitne time mein hota hai", "family court Jalandhar", "kharcha case 125 / 144", "maintenance case lawyer", "child custody lawyer Jalandhar", "court marriage Jalandhar", "तलाक वकील जालंधर"],
    faqs: [
      ["Mutual divorce mein kitna time lagta hai?", "Hindu Marriage Act ki Sec. 13B mein pati-patni kam se kam 1 saal se alag rehte hon to joint petition lagti hai. First motion ke baad 6 mahine ka waiting period hota hai, jise court uchit maamlon mein maaf bhi kar sakti hai."],
      ["Kharcha (maintenance) kaise milta hai?", "Patni, bachche ya maa-baap Sec. 144 BNSS (pehle Sec. 125 CrPC) mein maintenance maang sakte hain. Divorce case ke dauraan Sec. 24 HMA mein interim maintenance, aur DV Act mein bhi monetary relief milta hai."],
      ["Bachche ki custody kisko milti hai?", "Court ke liye sabse zaroori bachche ki bhalai (welfare) hai. Umar, padhai, maa-baap ki halat dekh kar custody aur milne ke adhikar (visitation) tay hote hain."],
      ["Ghar wale shaadi ke khilaaf hain, suraksha kaise milegi?", "Baalig couple jaan ke khatre mein Punjab & Haryana High Court mein protection petition laga sakta hai."]
    ]
  },
  property: {
    title: "Property Lawyer in Jalandhar | Land Dispute, Registry, Mutation (Intkal), Possession",
    h1: "Property Lawyer in Jalandhar",
    intro: "Property and land matters in Jalandhar: title checks before buying, sale deed and registry, mutation (intkal), Jamabandi/Fard correction, demarcation, illegal possession (kabza), partition, tenant disputes and RERA complaints.",
    searches: ["property lawyer Jalandhar", "zameen ka case vakil", "kabza chhudwane ke liye vakil", "registry kaise karwayein", "intkal / mutation kaise hota hai", "fard jamabandi correction", "rent agreement Jalandhar", "builder ke khilaaf complaint", "प्रॉपर्टी वकील जालंधर"],
    faqs: [
      ["Zameen/plot khareedne se pehle kya check karein?", "Title documents ki poori chain, latest Jamabandi/Fard, intkal (mutation), koi loan ya case to nahi (encumbrance), aur zaroori approvals. Registry se pehle vakil se title verification karwana sabse surakshit hai."],
      ["Kisi ne meri zameen par kabza kar liya hai, kya karein?", "Possession aur injunction ka civil suit kiya ja sakta hai. Criminal trespass ho to police complaint bhi. Title ke aadhar par possession ke suit ki limitation aam taur par 12 saal hai, isliye der na karein."],
      ["Intkal (mutation) kya hota hai?", "Revenue record mein maalik ka naam darj karna. Ye tax aur record ke liye zaroori hai, lekin akela intkal maalikana haq (title) saabit nahi karta."]
    ]
  },
  succession: {
    title: "Will, Succession Certificate & Inheritance Lawyer in Jalandhar",
    h1: "Will & Succession Lawyer in Jalandhar",
    intro: "Wills, succession certificates, probate, legal heir documentation, family settlements and inheritance disputes for families in Jalandhar and NRIs.",
    searches: ["will kaise banwayein", "vasiyat kaise likhein", "succession certificate kaise banta hai", "legal heir certificate Jalandhar", "pita ki property mein hissa", "inheritance lawyer Punjab", "वसीयत वकील"],
    faqs: [
      ["Kya will ki registry zaroori hai?", "Nahi, will ki registry zaroori nahi hai, lekin karwana behtar hai. Will par likhne wale ke sign aur do gawahon ke sign (attestation) zaroori hain."],
      ["Succession certificate kab chahiye hota hai?", "Jab marne wale ke bank account, FD, shares jaise assets nominee ke bina ya vivaad mein hon, to bank aksar civil court se succession certificate maangte hain."],
      ["Beti ka pita ki property mein hissa hota hai?", "Hindu Succession Act ke tahat betiyon ko betoon ke barabar adhikar hain. Asli position property ke type aur facts par depend karti hai."]
    ]
  },
  corporate: {
    title: "Company Registration & Business Lawyer in Jalandhar | Contracts, Partnership, LLP",
    h1: "Business & Corporate Lawyer in Jalandhar",
    intro: "Legal support for traders, startups and companies in Jalandhar: company and LLP registration, partnership deeds, contracts, licences (FSSAI, Shop Act, IEC), MSME/Udyam, compliance and business disputes.",
    searches: ["company registration Jalandhar", "partnership deed kaise banti hai", "LLP registration", "business agreement lawyer", "FSSAI licence Jalandhar", "MSME udyam registration", "NGO registration Punjab"],
    faqs: [
      ["Partnership firm aur company mein kya fark hai?", "Partnership mein partners ki zimmedari aam taur par unlimited hoti hai. Private Limited Company / LLP mein zimmedari limited hoti hai aur compliance zyada hoti hai. Business ke size aur plan ke hisaab se chunna chahiye."],
      ["Business agreement vakil se kyon banwayein?", "Saaf likhit terms (payment, delivery, penalty, dispute resolution) baad ke jhagdon se bachati hain aur court mein saboot banti hain."]
    ]
  },
  banking: {
    title: "Banking & Recovery Lawyer in Jalandhar | Loan, DRT, SARFAESI, Account Freeze",
    h1: "Banking & Recovery Lawyer in Jalandhar",
    intro: "Help with cheque bounce, loan disputes, bank recovery, DRT, SARFAESI possession notices, one-time settlements, insolvency and bank account freezes.",
    searches: ["cheque bounce case lawyer", "bank ne account freeze kar diya", "loan recovery notice ka jawab", "SARFAESI notice kya karein", "DRT lawyer", "loan settlement OTS", "recovery agent harassment complaint"],
    faqs: [
      ["Bank account freeze ho gaya, kya karein?", "Pehle bank se likhit mein freeze ka kaaran aur kis authority ke order par hua, ye maangein. Aksar cyber complaint ki wajah se freeze hota hai. Phir sambandhit police/cyber cell ya court mein uchit arzi lagai ja sakti hai."],
      ["SARFAESI notice aaya hai, kya karein?", "Notice mein di gayi time limit ke andar likhit jawab/objection dein. Zaroorat ho to Debt Recovery Tribunal (DRT) mein challenge kiya ja sakta hai. Der na karein."]
    ]
  },
  consumer: {
    title: "Consumer Court Lawyer in Jalandhar | Consumer Complaint, Insurance Claim, Refund",
    h1: "Consumer Court Lawyer in Jalandhar",
    intro: "Consumer complaints before the District Consumer Commission, Jalandhar and higher commissions: defective products, service failures, insurance claim rejection, builder delays, e-commerce refunds and medical negligence.",
    searches: ["consumer court Jalandhar", "consumer complaint kaise karein", "insurance claim reject ho gaya", "online shopping refund complaint", "builder delay complaint", "e-daakhil complaint", "उपभोक्ता अदालत जालंधर"],
    faqs: [
      ["Consumer complaint kahan karein?", "₹50 lakh tak District Commission, ₹50 lakh se ₹2 crore tak State Commission, aur ₹2 crore se upar National Commission. Complaint online e-Daakhil se bhi ho sakti hai."],
      ["Consumer complaint kitne time mein karni hoti hai?", "Aam taur par cause of action se 2 saal ke andar."],
      ["Insurance company ne claim reject kar diya, kya karein?", "Rejection letter, policy aur saare documents ke saath consumer complaint ya Insurance Ombudsman ka raasta dekha ja sakta hai."]
    ]
  },
  cyber: {
    title: "Cyber Crime Lawyer in Jalandhar | Online Fraud, UPI Scam, Social Media Harassment",
    h1: "Cyber Crime Lawyer in Jalandhar",
    intro: "Urgent help with online fraud and UPI scams, fake profiles, social media harassment, sextortion, hacking and bank account freezes linked to cyber complaints.",
    searches: ["online fraud ho gaya kya karein", "UPI fraud complaint", "paise wapas kaise milenge fraud", "cyber cell Jalandhar", "instagram fake id complaint", "sextortion help", "cyber crime lawyer Punjab", "ऑनलाइन फ्रॉड शिकायत"],
    faqs: [
      ["Online fraud hote hi sabse pehle kya karein?", "Turant 1930 par call karein aur cybercrime.gov.in par complaint darj karein. Bank ko inform karke card/UPI block karwaayein. Screenshot, transaction ID aur numbers sambhal kar rakhein."],
      ["Kya fraud ke paise wapas mil sakte hain?", "Jitni jaldi report hoti hai, utni zyada sambhavna hoti hai ki paise aage jaane se pehle freeze ho jaayein. Phir court ke zariye release ki arzi lagai ja sakti hai."],
      ["Social media par fake ID ya badnaami ho rahi hai, kya karein?", "Platform par report karein, saboot sambhal kar rakhein, aur cyber cell mein complaint karein. Zaroorat ho to criminal aur civil karwai dono ho sakti hain."]
    ]
  },
  constitutional: {
    title: "Writ Petition & High Court Matters | Punjab & Haryana High Court",
    h1: "Writ Petitions & Constitutional Matters",
    intro: "Writ petitions and constitutional remedies: challenging arbitrary government orders, protection petitions, habeas corpus and enforcement of fundamental rights.",
    searches: ["writ petition kaise file karein", "High Court protection petition", "habeas corpus petition", "government order challenge", "PIL kaise file karein"],
    faqs: [
      ["Writ petition kab lagti hai?", "Jab sarkari vibhag ya authority ka faisla manmaana, gair-kaanooni ho ya maulik adhikaron ka hanan kare, to High Court mein Article 226 ke tahat writ petition lagai ja sakti hai."]
    ]
  },
  service: {
    title: "Service Matter & Labour Lawyer in Jalandhar | Govt Employees, Pension, Termination",
    h1: "Service & Employment Lawyer in Jalandhar",
    intro: "For government and private employees: promotion, seniority, suspension, departmental inquiries, pension, gratuity, PF, illegal termination, unpaid salary and POSH complaints.",
    searches: ["government job case lawyer", "pension nahi mil rahi", "salary nahi mili kya karein", "naukri se nikal diya case", "departmental inquiry lawyer", "gratuity claim", "labour court Jalandhar"],
    faqs: [
      ["Company ne bina kaaran naukri se nikaal diya, kya karein?", "Appointment letter, salary slips aur termination letter sambhal kar rakhein. Aapki category ke hisaab se Labour Court/Industrial Tribunal, civil court ya legal notice ka raasta ho sakta hai."],
      ["Retirement ke baad pension/gratuity atak gayi hai?", "Pehle vibhag ko likhit representation dein. Samadhan na ho to legal notice, aur phir sambandhit tribunal ya High Court mein petition lagai ja sakti hai."]
    ]
  },
  accident: {
    title: "Accident Claim Lawyer in Jalandhar | MACT Compensation, Insurance Claims",
    h1: "Accident Claim (MACT) Lawyer in Jalandhar",
    intro: "Compensation claims before the Motor Accident Claims Tribunal for injury and death, hit-and-run cases, insurance claims and defence of vehicle owners and drivers.",
    searches: ["accident claim kaise karein", "MACT Jalandhar", "accident compensation lawyer", "road accident death claim", "hit and run compensation", "insurance se accident claim"],
    faqs: [
      ["Accident claim ke liye kya documents chahiye?", "FIR/DDR, medical records aur bills, income proof, aur gaadi ke registration, insurance aur driving licence ki details. Mrityu ke maamle mein post-mortem report aur death certificate bhi."],
      ["Claim kahan file hota hai?", "Motor Accident Claims Tribunal (MACT) mein, jahan accident hua, jahan claimant rehta hai, ya jahan opposite party rehti hai."]
    ]
  },
  tax: {
    title: "GST & Income Tax Lawyer in Jalandhar | Notices, Appeals, Registration",
    h1: "GST & Income Tax Matters in Jalandhar",
    intro: "Replies to income tax and GST notices, assessments, appeals, GST registration and stamp duty matters.",
    searches: ["income tax notice aaya kya karein", "GST notice reply", "GST registration Jalandhar", "income tax appeal", "stamp duty notice"],
    faqs: [
      ["Income tax ya GST notice aaya hai, kya karein?", "Notice mein di gayi date ke andar jawab dena zaroori hai. Notice ignore karne par ek-tarfa order ho sakta hai. Documents ke saath jaldi salah lein."]
    ]
  },
  ip: {
    title: "Trademark Registration in Jalandhar | Copyright, Brand Protection",
    h1: "Trademark & Intellectual Property",
    intro: "Trademark search, filing and objection replies, copyright and design registration, and action against copying of your brand.",
    searches: ["trademark registration Jalandhar", "brand name register kaise karein", "trademark objection reply", "copyright registration", "brand copy kar liya complaint"],
    faqs: [
      ["Trademark registration kyon zaroori hai?", "Registered trademark aapke brand naam/logo par kaanooni adhikar deta hai, aur copy karne walon ke khilaaf karwai aasaan banata hai."]
    ]
  },
  adr: {
    title: "Arbitration, Mediation & Lok Adalat | Settlement Lawyer in Jalandhar",
    h1: "Arbitration, Mediation & Lok Adalat",
    intro: "Settling disputes faster and at lower cost through arbitration, mediation and Lok Adalat.",
    searches: ["Lok Adalat Jalandhar", "case mein samjhauta kaise karein", "mediation lawyer", "arbitration lawyer Punjab"],
    faqs: [
      ["Lok Adalat ka faisla kitna pakka hota hai?", "Lok Adalat ka award civil court ki decree ki tarah maana jaata hai aur uske khilaaf aam taur par appeal nahi hoti. Isliye samjhaute ki shartein dhyaan se tay karein."]
    ]
  },
  nri: {
    title: "NRI Legal Services Punjab | NRI Property, Power of Attorney, Divorce — Jalandhar",
    h1: "NRI Legal Services in Punjab",
    intro: "For NRIs in Canada, UK, USA, Australia, the Gulf and Europe with matters in Jalandhar and Doaba: property protection, illegal possession, Power of Attorney, succession and mutation, matrimonial disputes and court representation without frequent travel.",
    searches: ["NRI property lawyer Punjab", "NRI ki zameen par kabza", "power of attorney from Canada for Punjab", "NRI divorce India", "NRI lawyer Jalandhar", "Punjab NRI Commission complaint", "ਐਨਆਰਆਈ ਵਕੀਲ ਜਲੰਧਰ"],
    faqs: [
      ["Kya mujhe har tareekh par India aana padega?", "Zyadatar maamlon mein nahi. Power of Attorney aur affidavits videsh mein banwa kar bheje ja sakte hain, aur vakil aapki taraf se pesh ho sakta hai. Kuch steps mein khud ki maujoodgi zaroori hoti hai, jo pehle bata diya jaata hai."],
      ["Videsh mein banwai Power of Attorney Punjab mein kaise chalegi?", "Embassy/consulate mein attest ya apostille karwa kar India bhejni hoti hai, aur yahan tay samay ke andar stamp duty adjudication karwani padti hai."]
    ]
  },
  documents: {
    title: "Legal Notice, Affidavit, Agreement & Rent Agreement Drafting in Jalandhar",
    h1: "Legal Notice & Document Drafting",
    intro: "Professionally drafted legal notices, replies, affidavits, Power of Attorney, agreements, rent agreements, MOUs, name change and record correction.",
    searches: ["legal notice kaise bhejein", "legal notice ka jawab", "affidavit kaise banwayein", "rent agreement Jalandhar", "power of attorney kaise banti hai", "name change gazette Punjab"],
    faqs: [
      ["Legal notice ka jawab dena zaroori hai?", "Hamesha kaanooni roop se zaroori nahi, lekin samay par sahi jawab dena aksar faydemand hota hai, kyunki baad mein court mein notice aur jawab dono saboot bante hain."]
    ]
  },
  govt: {
    title: "RTI, Police Complaint & Human Rights Lawyer in Jalandhar",
    h1: "RTI, Police Complaints & Government Matters",
    intro: "RTI applications and appeals, complaints when police do not act, human rights and statutory commission complaints, and passport-related legal issues.",
    searches: ["RTI kaise file karein", "police sunwai nahi kar rahi", "SSP ko complaint kaise karein", "human rights commission complaint", "passport police verification problem"],
    faqs: [
      ["RTI ka jawab nahi aaya to kya karein?", "Aam taur par 30 din mein jawab na aaye to first appeal (30 din ke andar) aur phir Information Commission mein second appeal (90 din ke andar) ki ja sakti hai."]
    ]
  },
  senior: {
    title: "Senior Citizen Lawyer in Jalandhar | Maintenance, Property Protection",
    h1: "Legal Help for Senior Citizens",
    intro: "Maintenance claims under the Senior Citizens Act, protection of property and residence, and revocation of transfers when promised care is not given.",
    searches: ["bujurg maa-baap ka kharcha", "bachche ghar se nikaal rahe hain", "senior citizen maintenance tribunal", "gift deed cancel kaise karein"],
    faqs: [
      ["Bachche dekhbhaal nahi kar rahe, kya kar sakte hain?", "Maintenance and Welfare of Parents and Senior Citizens Act, 2007 ke tahat Maintenance Tribunal mein kharche ki arzi lagai ja sakti hai."]
    ]
  },
  others: {
    title: "Education, Medical Negligence & Municipal Matters | Lawyer in Jalandhar",
    h1: "Other Specialised Legal Areas",
    intro: "Education disputes, medical negligence, environmental complaints, municipal and building matters, and election disputes.",
    searches: ["fees refund nahi mil rahi", "degree rok li college ne", "doctor ki laaparwahi case", "municipal notice building", "sealing / demolition notice"],
    faqs: []
  }
};

/* Extra landing pages for very common searches */
module.exports.topics = [
  {
    slug: "bail-lawyer-jalandhar",
    category: "criminal",
    name: "Bail",
    title: "Bail Lawyer in Jalandhar | Regular & Anticipatory Bail (Zamanat)",
    h1: "Bail Lawyer in Jalandhar",
    intro: "Regular bail, anticipatory bail and default bail applications before the Magistrate, Sessions Court and the Punjab & Haryana High Court, under the BNSS (earlier CrPC).",
    searches: ["bail lawyer Jalandhar", "zamanat kaise milti hai", "anticipatory bail kaise lein", "agrim zamanat", "bail ke liye kya chahiye", "जमानत वकील जालंधर"],
    steps: [
      ["Get the FIR copy", "Check the sections, whether the offence is bailable, and the stage of the case."],
      ["Choose the right bail", "Anticipatory bail (Sec. 482 BNSS) before arrest; regular bail (Sec. 480 / 483 BNSS) after arrest."],
      ["File in the right court", "Magistrate, Sessions Court or High Court, depending on the offence and earlier orders."],
      ["Surety & bonds", "Arrange a surety with ID and property / FD documents for the bail bonds."]
    ],
    docs: ["Copy of FIR", "Arrest memo / custody details", "Earlier bail orders, if any", "ID and address proof of the accused", "Surety's ID, address proof and property / FD papers", "Medical records, if relevant"],
    faqs: [
      ["Bailable offence mein bail milna adhikar hai?", "Haan. Bailable offence mein bail adhikar ke roop mein milti hai (Sec. 478 BNSS, pehle Sec. 436 CrPC)."],
      ["Anticipatory bail ke liye giraftari hona zaroori hai?", "Nahi. Anticipatory bail giraftari se pehle hi maangi jaati hai, jab giraftari ka uchit darr ho."],
      ["Bail reject ho jaye to kya karein?", "Upar ki court mein arzi lagai ja sakti hai, jaise Magistrate ke baad Sessions Court, aur phir High Court. Haalaat badalne par nayi arzi bhi lag sakti hai."],
      ["Default bail kya hai?", "Agar police tay samay (offence ke hisaab se 60 ya 90 din) mein charge-sheet file na kare, to accused default bail ka haqdaar ho sakta hai (Sec. 187(3) BNSS)."]
    ]
  },
  {
    slug: "mutual-divorce-lawyer-jalandhar",
    category: "family",
    name: "Mutual Consent Divorce",
    title: "Mutual Divorce Lawyer in Jalandhar | Process, Time & Documents",
    h1: "Mutual Consent Divorce in Jalandhar",
    intro: "When both husband and wife agree to separate, a mutual consent divorce is usually the quickest and most dignified route. Help with settlement terms, petition drafting and both motions at the Family Court, Jalandhar.",
    searches: ["mutual divorce Jalandhar", "aapsi sehmati se talaq", "mutual divorce kitne din mein", "mutual divorce documents", "6 months waiting period waiver", "आपसी सहमति से तलाक"],
    steps: [
      ["Settle the terms", "Alimony, stridhan, child custody and pending cases are agreed in writing."],
      ["First motion", "A joint petition (Sec. 13B HMA / Sec. 28 SMA) is filed and both spouses record statements."],
      ["Waiting period", "Generally six months, which the court may waive in suitable cases."],
      ["Second motion & decree", "Both confirm consent again and the court grants the divorce decree."]
    ],
    docs: ["Marriage certificate / wedding photographs", "Address and ID proof of both spouses", "Passport-size photographs", "Proof of living separately for one year or more", "Written settlement terms", "Details of any pending cases"],
    faqs: [
      ["Mutual divorce ke liye kitne samay alag rehna zaroori hai?", "Hindu Marriage Act aur Special Marriage Act mein petition se pehle kam se kam 1 saal alag rehna zaroori hai."],
      ["Kya 6 mahine ka waiting period maaf ho sakta hai?", "Haan, Supreme Court ke faisle ke anusaar uchit maamlon mein court ye period maaf kar sakti hai."],
      ["Petition kahan file hoti hai?", "Jahan shaadi hui thi, jahan pati-patni aakhri baar saath rahe, ya jahan patni rehti hai, us jagah ki Family Court mein."],
      ["NRI pati/patni ke saath mutual divorce ho sakta hai?", "Haan. Kuch steps video conferencing ya Power of Attorney ke zariye ho sakte hain, jahan court anumati de."]
    ]
  },
  {
    slug: "court-marriage-jalandhar",
    category: "family",
    name: "Court Marriage",
    title: "Court Marriage in Jalandhar | Process, Documents & Registration",
    h1: "Court Marriage in Jalandhar",
    intro: "Guidance and documentation for court marriage under the Special Marriage Act, 1954, marriage registration under the Hindu Marriage Act and Anand Marriage Act, and protection petitions for couples facing threats.",
    searches: ["court marriage Jalandhar", "court marriage kaise hoti hai", "court marriage documents", "love marriage protection", "marriage registration Jalandhar", "कोर्ट मैरिज जालंधर"],
    steps: [
      ["Notice of intended marriage", "Given to the Marriage Officer of the district where at least one partner has lived for the last 30 days."],
      ["30-day notice period", "The notice is displayed and objections, if any, may be raised within 30 days."],
      ["Solemnisation", "The marriage is solemnised before the Marriage Officer with three witnesses."],
      ["Marriage certificate", "The Marriage Officer issues the marriage certificate."]
    ],
    docs: ["Age proof of both (birth certificate / Class 10 certificate / passport)", "Address proof of both", "Passport-size photographs", "Affidavit on age and marital status", "Divorce decree / death certificate of previous spouse, if applicable", "Three witnesses with ID proof"],
    faqs: [
      ["Court marriage ke liye kitni umar chahiye?", "Ladke ki kam se kam 21 saal aur ladki ki kam se kam 18 saal."],
      ["Court marriage mein kitne din lagte hain?", "Special Marriage Act mein notice ke baad 30 din ka period hota hai, uske baad shaadi ho sakti hai."],
      ["Ghar wale khilaaf hain aur dhamki de rahe hain?", "Baalig couple High Court mein protection petition laga kar suraksha maang sakta hai."],
      ["Mandir/Gurdwara mein shaadi ho chuki hai, registration kaise hoga?", "Hindu Marriage Act ya Anand Marriage Act ke tahat marriage registration karwai ja sakti hai."]
    ]
  },
  {
    slug: "cheque-bounce-lawyer-jalandhar",
    category: "banking",
    name: "Cheque Bounce",
    title: "Cheque Bounce Lawyer in Jalandhar | Section 138 NI Act Notice & Case",
    h1: "Cheque Bounce Lawyer in Jalandhar",
    intro: "Legal notices, complaints and defence in cheque dishonour cases under Section 138 of the Negotiable Instruments Act, with strict attention to the time limits.",
    searches: ["cheque bounce case Jalandhar", "cheque bounce notice", "cheque bounce hone par kya karein", "138 NI Act case", "cheque bounce case defence", "चेक बाउंस केस"],
    steps: [
      ["Return memo", "The bank returns the cheque with a memo stating why it was dishonoured."],
      ["Legal notice within 30 days", "A demand notice is sent to the drawer within 30 days of receiving the memo."],
      ["15 days to pay", "The drawer gets 15 days from receiving the notice to pay."],
      ["Complaint within 1 month", "If not paid, the complaint is filed within one month after the 15 days end."]
    ],
    docs: ["Original dishonoured cheque", "Bank return memo", "Legal notice with postal / courier receipts", "Proof of delivery", "Documents showing the debt (agreement, invoice, ledger)", "Reply to notice, if any"],
    faqs: [
      ["Cheque bounce case kahan file hota hai?", "Jis bank branch mein payee ne cheque jama kiya (jahan uska account hai), us area ki court mein."],
      ["Cheque bounce mein kya saza ho sakti hai?", "Do saal tak ki saza, ya cheque amount se dugna tak jurmana, ya dono. Court case ke dauraan 20% tak interim compensation ka order bhi de sakti hai."],
      ["Kya cheque bounce case mein samjhauta ho sakta hai?", "Haan, ye offence compoundable hai aur kisi bhi stage par samjhauta ho sakta hai."],
      ["Notice ki time limit nikal gayi to?", "Time limits sakht hain. Agar notice ya complaint der se hui ho to vakil se turant salah lein, kyunki kuch maamlon mein naya raasta (jaise civil recovery) ho sakta hai."]
    ]
  }
];
