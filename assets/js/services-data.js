/*
 * Legal Services directory data.
 * Each category: id, name, icon (Font Awesome class), summary, services: [name, description]
 * Add / remove services here — the Practice Areas page and home page update automatically.
 */
window.LEGAL_CATEGORIES = [
  {
    id: "criminal",
    slug: "criminal-lawyer-jalandhar",
    name: "Criminal Law & Defence",
    icon: "fa-gavel",
    summary: "Bail, FIRs, trials, appeals and quashing under the new criminal laws (BNS, BNSS, BSA) and the earlier IPC/CrPC.",
    services: [
      ["Regular Bail", "Bail applications before Magistrate, Sessions Court and High Court (Sec. 483 BNSS / earlier Sec. 439 CrPC)."],
      ["Anticipatory Bail", "Pre-arrest bail protection (Sec. 482 BNSS / earlier Sec. 438 CrPC) when arrest is apprehended."],
      ["Default / Statutory Bail", "Bail where the charge-sheet is not filed within the time prescribed by law."],
      ["FIR Registration & Police Complaints", "Drafting complaints, getting FIRs registered, Zero FIR and representations to SHO / SSP / Commissioner."],
      ["Private Criminal Complaints", "Complaints directly before the Magistrate and applications for police investigation (Sec. 175(3) BNSS / 156(3) CrPC)."],
      ["FIR Quashing", "Petitions before the Punjab & Haryana High Court to quash FIRs and proceedings (Sec. 528 BNSS / 482 CrPC), including on compromise."],
      ["Criminal Trial Defence", "Complete defence in Magistrate and Sessions trials — charge, evidence, cross-examination and final arguments."],
      ["Serious Offences (Sessions Trials)", "Defence and victim representation in cases such as murder, attempt to murder, robbery and dacoity."],
      ["NDPS Act Cases", "Bail, trial and appeals in narcotics matters, including commercial-quantity cases."],
      ["Dowry, Cruelty & 498A Matters", "Complaints and defence under Sec. 85/86 BNS (earlier 498A IPC) and the Dowry Prohibition Act."],
      ["Offences Against Women & POCSO", "Victim representation and defence in sexual offence and POCSO Act matters."],
      ["SC/ST (Prevention of Atrocities) Act", "Complaints, bail and trial under the SC/ST Act."],
      ["Arms Act & Excise Act Cases", "Defence in Arms Act, Punjab Excise Act and other special-law prosecutions."],
      ["White-Collar & Economic Offences", "Cheating, criminal breach of trust, forgery, fraud and corporate offences."],
      ["Juvenile Justice Matters", "Representation of children in conflict with law before the Juvenile Justice Board."],
      ["Criminal Appeals & Revisions", "Appeals against conviction/acquittal and revision petitions before Sessions Court and High Court."],
      ["Compounding & Compromise", "Settlement and compounding of compoundable offences, and quashing on compromise."],
      ["Victim & Complainant Representation", "Assisting victims, watching briefs and victim compensation applications."],
      ["Release of Seized Property & Vehicles", "Superdari / interim custody of vehicles and property seized by police."],
      ["Look Out Circular (LOC) Matters", "Challenging or seeking cancellation of Look Out Circulars and travel restrictions."],
      ["Prevention of Corruption Act (Vigilance Cases)", "Bail, defence and trial in vigilance and corruption cases."],
      ["Gambling & Excise Prosecutions", "Defence under the Public Gambling Act, Excise Act and other local laws."],
      ["Electricity Theft Cases", "Defence in electricity theft cases under Sec. 135 of the Electricity Act before the special court."]
    ]
  },
  {
    id: "civil",
    slug: "civil-lawyer-jalandhar",
    name: "Civil Litigation",
    icon: "fa-scale-balanced",
    summary: "Suits, injunctions, recovery, execution and appeals before civil courts.",
    services: [
      ["Recovery of Money Suits", "Suits for recovery of dues, loans, unpaid bills and advances."],
      ["Summary Suits (Order XXXVII CPC)", "Fast-track recovery suits based on cheques, bills of exchange and written contracts."],
      ["Permanent & Mandatory Injunctions", "Restraining illegal interference, construction or dispossession."],
      ["Declaration Suits", "Declaration of title, status or legal rights and cancellation of documents."],
      ["Specific Performance of Contract", "Enforcing agreements to sell and other contracts."],
      ["Possession Suits", "Recovery of possession on the basis of title or tenancy."],
      ["Damages & Compensation Claims", "Claims for loss caused by breach of contract or wrongful acts (torts)."],
      ["Defamation Cases", "Civil suits for damages and criminal complaints for defamation, including online defamation."],
      ["Execution of Decrees", "Getting decrees and orders enforced — attachment, arrest, delivery of possession."],
      ["Caveat Filing", "Caveats to ensure you are heard before any ex-parte order is passed."],
      ["Civil Appeals, Revisions & Reviews", "First and second appeals, civil revisions and review applications."],
      ["Commercial Court Disputes", "Commercial suits, including mandatory pre-institution mediation (Sec. 12A, Commercial Courts Act)."]
    ]
  },
  {
    id: "family",
    slug: "divorce-family-lawyer-jalandhar",
    name: "Family & Matrimonial Law",
    icon: "fa-people-roof",
    summary: "Divorce, maintenance, custody, marriage registration and protection — handled with sensitivity and privacy.",
    services: [
      ["Divorce by Mutual Consent", "Petition, settlement terms, first & second motion (Sec. 13B Hindu Marriage Act / Sec. 28 Special Marriage Act)."],
      ["Contested Divorce", "Divorce on grounds such as cruelty, desertion and adultery."],
      ["Judicial Separation", "Legal separation without dissolving the marriage."],
      ["Restitution of Conjugal Rights", "Petitions under Sec. 9 Hindu Marriage Act and corresponding laws."],
      ["Annulment of Marriage", "Declaring a marriage void or voidable."],
      ["Maintenance & Alimony", "Interim and permanent maintenance (Sec. 144 BNSS / 125 CrPC, Sec. 24 & 25 HMA, DV Act)."],
      ["Child Custody & Visitation", "Custody, guardianship and visitation rights under the Guardians and Wards Act."],
      ["Domestic Violence Act Cases", "Protection, residence and monetary relief orders under the PWDV Act, 2005."],
      ["Return of Stridhan / Dowry Articles", "Recovery of stridhan, jewellery and dowry articles."],
      ["Court Marriage", "Marriage under the Special Marriage Act, 1954 — notice, objections and registration."],
      ["Marriage Registration", "Registration under the Hindu Marriage Act, Anand Marriage Act and other personal laws."],
      ["Protection for Married Couples", "Protection petitions before the High Court for couples facing threats to life and liberty."],
      ["Muslim Family Law", "Nikah, talaq, khula, mehr, maintenance and related disputes."],
      ["Christian & Parsi Family Law", "Divorce, maintenance and custody under the respective personal laws."],
      ["Adoption", "Adoption under HAMA and the Juvenile Justice Act / CARA procedure."],
      ["NRI Matrimonial Disputes", "Disputes involving spouses abroad — maintenance, custody, passport and LOC issues."]
    ]
  },
  {
    id: "property",
    slug: "property-lawyer-jalandhar",
    name: "Property & Real Estate",
    icon: "fa-house",
    summary: "Title checks, documentation, registration, mutation, revenue matters and property disputes.",
    services: [
      ["Title Search & Due Diligence", "Checking title chain, encumbrances and revenue records before you buy."],
      ["Sale Deed & Agreement to Sell", "Drafting, stamp duty guidance and registration of sale documents."],
      ["Gift, Release & Exchange Deeds", "Transfer of property within family and between parties."],
      ["Mutation (Intkal) & Revenue Records", "Mutation, correction of Jamabandi / Fard and revenue entries."],
      ["Demarcation (Nishandehi)", "Applications for demarcation of land boundaries."],
      ["Partition of Property", "Partition through civil courts and revenue authorities."],
      ["Illegal Possession & Encroachment", "Legal action to remove encroachments and recover possession."],
      ["Landlord–Tenant Disputes", "Eviction, rent recovery and rent control proceedings."],
      ["Lease & Rent Agreements", "Residential and commercial lease and leave-and-licence agreements."],
      ["RERA Complaints", "Complaints before Punjab RERA for delayed possession, refunds and builder defaults."],
      ["Builder–Buyer Disputes", "Refunds, compensation and possession disputes against builders."],
      ["Revenue Court Matters", "Cases before Tehsildar, SDM, Collector and Commissioner."],
      ["Land Acquisition Compensation", "Claims for fair compensation and enhancement."],
      ["Property Disputes of NRIs", "Protecting property of NRIs from illegal occupation and fraud."]
    ]
  },
  {
    id: "succession",
    slug: "will-succession-lawyer-jalandhar",
    name: "Wills, Succession & Inheritance",
    icon: "fa-file-signature",
    summary: "Plan your estate and secure your family's inheritance.",
    services: [
      ["Will Drafting & Registration", "Clear, legally valid Wills and their registration."],
      ["Succession Certificate", "For bank deposits, shares and other movable assets of a deceased person."],
      ["Probate & Letters of Administration", "Court proceedings to prove a Will or administer an estate."],
      ["Legal Heir Certificate Assistance", "Documentation and applications for legal heir / surviving member certificates."],
      ["Inheritance & Family Property Disputes", "Disputes among heirs under Hindu, Muslim and other succession laws."],
      ["Family Settlement Deeds", "Amicable division of family property without litigation."],
      ["Trust Formation", "Private and charitable trusts — deed drafting and registration."],
      ["HUF Formation & Partition", "Creating a Hindu Undivided Family and partition of HUF property."]
    ]
  },
  {
    id: "corporate",
    slug: "company-business-lawyer-jalandhar",
    name: "Corporate & Business Law",
    icon: "fa-briefcase",
    summary: "From setting up a business to contracts, compliance and commercial disputes.",
    services: [
      ["Company & LLP Incorporation", "Private Limited, OPC and LLP registration with MCA."],
      ["Partnership Firm Registration", "Partnership deed drafting and registration with the Registrar of Firms."],
      ["Startup Legal Advisory", "Founders' agreements, shareholders' agreements and ESOP basics."],
      ["Commercial Contracts", "Drafting and vetting of vendor, supply, service and distribution agreements."],
      ["Franchise & Agency Agreements", "Franchise, dealership and agency documentation."],
      ["Corporate Compliance", "ROC filings, board resolutions and statutory registers."],
      ["Business Due Diligence", "Legal checks before investment, acquisition or partnership."],
      ["MSME / Udyam Registration", "Udyam registration and MSME Samadhaan for delayed payments."],
      ["NGO, Society & Section 8 Company", "Registration of societies, trusts and Section 8 companies."],
      ["Licences & Registrations", "FSSAI, Shop & Establishment, Trade licence and Import Export Code (IEC)."],
      ["Shareholder & Partner Disputes", "Resolution of disputes between partners, directors and shareholders."],
      ["FSSAI & Legal Metrology Notices", "Replies and defence in food safety, weights and measures and packaging notices."],
      ["Cooperative Society Disputes", "Elections, membership, recovery and disputes under the Punjab Cooperative Societies Act."]
    ]
  },
  {
    id: "banking",
    slug: "banking-recovery-lawyer-jalandhar",
    name: "Banking, Finance & Recovery",
    icon: "fa-building-columns",
    summary: "Cheque bounce, loan disputes, DRT, SARFAESI and insolvency.",
    services: [
      ["Cheque Bounce (Sec. 138 NI Act)", "Statutory notice, complaint filing and defence in cheque dishonour cases."],
      ["Debt Recovery Tribunal (DRT)", "Original applications, defence and appeals before DRT / DRAT."],
      ["SARFAESI Act Defence", "Challenging possession notices and auction of secured assets."],
      ["Loan Settlement & One-Time Settlement", "Negotiating settlements with banks and NBFCs."],
      ["Insolvency & Bankruptcy (NCLT)", "Insolvency applications and creditor/debtor representation under IBC."],
      ["Bank Account Freeze Matters", "Getting bank accounts de-frozen, including freezes linked to cyber complaints."],
      ["Recovery Agent Harassment", "Legal action against coercive recovery practices."],
      ["Banking Ombudsman Complaints", "Complaints under the RBI Integrated Ombudsman Scheme."]
    ]
  },
  {
    id: "consumer",
    slug: "consumer-court-lawyer-jalandhar",
    name: "Consumer Protection",
    icon: "fa-cart-shopping",
    summary: "Complaints before District, State and National Consumer Commissions.",
    services: [
      ["Consumer Complaints", "Filing complaints for defective goods and deficiency in service (Consumer Protection Act, 2019)."],
      ["e-Daakhil Online Filing", "Online filing of consumer complaints through the e-Daakhil portal."],
      ["Insurance Claim Rejection", "Challenging repudiation of health, life, motor and fire insurance claims."],
      ["Builder & Real Estate Complaints", "Delayed possession and defective construction complaints."],
      ["E-commerce Disputes", "Refunds, fake products and unfair trade practices by online platforms."],
      ["Medical Negligence Claims", "Compensation for negligence by doctors and hospitals."],
      ["Banking & Telecom Service Disputes", "Wrong charges, service failures and unfair practices."],
      ["Consumer Appeals", "Appeals before the State and National Commissions."]
    ]
  },
  {
    id: "cyber",
    slug: "cyber-crime-lawyer-jalandhar",
    name: "Cyber Law & IT",
    icon: "fa-laptop-code",
    summary: "Online fraud, social media crime, data protection and IT compliance.",
    services: [
      ["Online Fraud & UPI Scam", "Reporting on the 1930 helpline / cybercrime.gov.in, FIRs and recovery steps."],
      ["Social Media Harassment & Defamation", "Takedown requests, complaints and legal action against fake profiles and abuse."],
      ["Sextortion & Morphed Images", "Confidential, urgent help with removal and criminal action."],
      ["Hacking & Identity Theft", "Complaints under the IT Act and BNS for hacking and impersonation."],
      ["Data Protection (DPDP Act)", "Compliance advice under the Digital Personal Data Protection Act, 2023."],
      ["Website Legal Documents", "Terms of use, privacy policy and disclaimer drafting."],
      ["Cyber Crime Defence", "Defence for persons wrongly accused in cyber crime cases."]
    ]
  },
  {
    id: "constitutional",
    slug: "writ-petition-high-court-lawyer",
    name: "Constitutional & Writ Matters",
    icon: "fa-landmark",
    summary: "Writ petitions and enforcement of fundamental rights.",
    services: [
      ["Writ Petitions (Art. 226)", "Writs before the Punjab & Haryana High Court against government action."],
      ["Habeas Corpus", "Petitions for production of a person illegally detained."],
      ["Public Interest Litigation (PIL)", "PILs on issues affecting the public at large."],
      ["Challenge to Government Orders", "Quashing arbitrary orders, tenders, notices and decisions."],
      ["Fundamental Rights Enforcement", "Protection of life, liberty, equality and freedom."],
      ["Supreme Court Matters", "Coordination of SLPs and petitions before the Supreme Court of India."]
    ]
  },
  {
    id: "service",
    slug: "service-matter-labour-lawyer-jalandhar",
    name: "Service & Employment Law",
    icon: "fa-user-tie",
    summary: "For government employees, private employees and employers.",
    services: [
      ["Government Service Matters", "Appointment, promotion, seniority, transfer and regularisation disputes."],
      ["Departmental Inquiries", "Defence in charge-sheets, suspension and disciplinary proceedings."],
      ["Pension & Retiral Benefits", "Pension, gratuity, leave encashment and arrears."],
      ["Central Administrative Tribunal (CAT)", "Service matters of central government employees."],
      ["Labour Court & Industrial Disputes", "Illegal termination, reinstatement and back wages."],
      ["Salary & Dues Recovery", "Recovery of unpaid salary and settlement dues."],
      ["PF, ESI & Gratuity Claims", "Claims and disputes under EPF, ESI and Payment of Gratuity Acts."],
      ["POSH (Workplace Harassment)", "Complaints, Internal Committee compliance and policy drafting."],
      ["Employment Contracts & NDAs", "Appointment letters, non-compete, non-disclosure and HR policies."],
      ["Armed Forces & Ex-Servicemen Matters", "Pension, disability pension and service matters before the Armed Forces Tribunal."]
    ]
  },
  {
    id: "accident",
    slug: "accident-claim-mact-lawyer-jalandhar",
    name: "Motor Accident & Insurance",
    icon: "fa-car-burst",
    summary: "Compensation for accident victims and their families.",
    services: [
      ["MACT Compensation Claims", "Claims for death and injury before the Motor Accident Claims Tribunal."],
      ["Hit & Run Compensation", "Compensation in hit-and-run cases under the Motor Vehicles Act scheme."],
      ["Defence for Owners & Drivers", "Representation of vehicle owners, drivers and transporters."],
      ["Insurance Claims", "Motor, life, health, fire and marine insurance claims and disputes."],
      ["Employee's Compensation", "Compensation for workplace injuries and death."]
    ]
  },
  {
    id: "tax",
    slug: "gst-income-tax-lawyer-jalandhar",
    name: "Taxation",
    icon: "fa-receipt",
    summary: "Notices, assessments and appeals under Income Tax and GST.",
    services: [
      ["Income Tax Notices & Assessments", "Replies to notices, scrutiny and reassessment proceedings."],
      ["Income Tax Appeals", "Appeals before CIT(A) and the Income Tax Appellate Tribunal."],
      ["GST Registration & Compliance", "GST registration, amendments and compliance guidance."],
      ["GST Notices & Appeals", "Replies to show-cause notices and appeals under GST law."],
      ["Stamp Duty Matters", "Adjudication, deficiency notices and refunds of stamp duty."],
      ["Property Tax & Municipal Dues", "Disputes with municipal corporations over property tax."]
    ]
  },
  {
    id: "ip",
    slug: "trademark-registration-lawyer-jalandhar",
    name: "Intellectual Property",
    icon: "fa-copyright",
    summary: "Protect your brand, content and inventions.",
    services: [
      ["Trademark Registration", "Search, filing, examination reply and registration of trademarks."],
      ["Trademark Objection & Opposition", "Replies to objections and opposition proceedings."],
      ["Copyright Registration", "Registration for books, music, software, art and films."],
      ["Patent Filing Assistance", "Coordination of patent searches and filing."],
      ["Design Registration", "Protection of product designs."],
      ["IP Infringement & Passing Off", "Notices, suits and injunctions against infringers."]
    ]
  },
  {
    id: "adr",
    slug: "arbitration-mediation-lawyer-jalandhar",
    name: "Arbitration, Mediation & ADR",
    icon: "fa-handshake",
    summary: "Faster, cost-effective dispute resolution outside court.",
    services: [
      ["Arbitration Proceedings", "Representation before arbitral tribunals."],
      ["Challenge & Enforcement of Awards", "Petitions under Sec. 34 and enforcement under Sec. 36, Arbitration Act."],
      ["Mediation & Conciliation", "Court-annexed and private mediation."],
      ["Lok Adalat Settlements", "Settlement of pending and pre-litigation cases through Lok Adalat."],
      ["Pre-Litigation Mediation", "Mandatory pre-institution mediation for commercial disputes."]
    ]
  },
  {
    id: "nri",
    slug: "nri-legal-services-punjab",
    name: "NRI Legal Services",
    icon: "fa-earth-asia",
    summary: "Legal support for Non-Resident Indians — wherever you are in the world.",
    services: [
      ["NRI Property Protection", "Securing property from illegal possession, fraud and family disputes."],
      ["Power of Attorney for NRIs", "Drafting PoA executed abroad and its adjudication / stamping in Punjab."],
      ["NRI Matrimonial Matters", "Divorce, maintenance and custody involving NRI spouses."],
      ["Representation in Indian Courts", "Handling cases in India on behalf of clients living abroad."],
      ["Document Attestation & Apostille", "Assistance with apostille, embassy attestation and verification."],
      ["NRI Succession & Inheritance", "Succession certificates, mutation and transfer of ancestral property."],
      ["Punjab NRI Commission Complaints", "Complaints before the Punjab State Commission for NRIs."],
      ["FEMA Advice for NRIs", "Buying, selling and repatriating money from property in India under FEMA rules."],
      ["Sale or Purchase of Property for NRIs", "Title checks, agreements, registration through a Power of Attorney holder, and safe transfer of sale money."],
      ["NRI Tenant Eviction & Rent Recovery", "Evicting tenants who refuse to leave or pay, and recovering unpaid rent from NRI-owned property."],
      ["NRI Wills & Estate Planning", "Wills covering property in India and abroad, so heirs avoid disputes later."],
      ["Court Hearings by Video Conference", "Evidence and hearings by video link where the court allows, so you need not travel."],
      ["OCI, Passport & Document Help", "Affidavits, attestations and documents needed for OCI, passports and consulates."]
    ]
  },
  {
    id: "documents",
    slug: "legal-notice-drafting-jalandhar",
    name: "Legal Drafting & Documentation",
    icon: "fa-file-contract",
    summary: "Professionally drafted documents that protect your interests.",
    services: [
      ["Legal Notice & Reply", "Drafting and sending legal notices and replies to notices received."],
      ["Affidavits & Declarations", "Affidavits for courts, government offices, passports and banks."],
      ["Power of Attorney", "General and Special Power of Attorney."],
      ["Agreements & MOUs", "Memorandum of understanding, loan, sale and service agreements."],
      ["Indemnity Bonds & Undertakings", "Indemnity bonds, surety bonds and undertakings."],
      ["Settlement & Compromise Deeds", "Written settlements to close disputes."],
      ["Name Change & Gazette Notification", "Affidavit, newspaper publication and gazette notification."],
      ["Date of Birth & Record Correction", "Correction of name, date of birth and records in official documents."]
    ]
  },
  {
    id: "govt",
    slug: "rti-police-complaint-lawyer-jalandhar",
    name: "RTI, Govt & Human Rights",
    icon: "fa-scroll",
    summary: "Holding public authorities accountable.",
    services: [
      ["RTI Applications & Appeals", "Drafting RTI applications, first appeals and second appeals."],
      ["Police Complaints & Inaction", "Representations to senior police officers when police do not act."],
      ["Human Rights Commission", "Complaints before the State and National Human Rights Commissions."],
      ["Women, SC & Minority Commissions", "Complaints before statutory commissions for protection of rights."],
      ["Passport Matters", "Passport refusal, impounding, police verification and pending-case NOC issues."],
      ["Public Grievances", "Grievances against government departments through official channels."],
      ["Arms Licence Matters", "Applications, renewal, cancellation and appeals relating to arms licences."],
      ["Disability Rights", "Rights and benefits under the Rights of Persons with Disabilities Act, 2016."],
      ["Transgender Rights", "Identity certificates and protection under the Transgender Persons (Protection of Rights) Act, 2019."]
    ]
  },
  {
    id: "senior",
    slug: "senior-citizen-lawyer-jalandhar",
    name: "Senior Citizens & Welfare",
    icon: "fa-person-cane",
    summary: "Protecting the dignity, property and maintenance of elders.",
    services: [
      ["Maintenance for Parents & Senior Citizens", "Applications before the Maintenance Tribunal under the 2007 Act."],
      ["Eviction of Abusive Relatives", "Protecting senior citizens' property and residence."],
      ["Revocation of Property Transfers", "Cancelling gifts/transfers made on condition of care that is not provided."],
      ["Free Legal Aid Guidance", "Help accessing free legal aid through the District Legal Services Authority."]
    ]
  },
  {
    id: "waqf",
    slug: "waqf-board-lawyer-punjab",
    name: "Waqf Law & Waqf Board Matters",
    icon: "fa-mosque",
    summary: "Waqf properties, Waqf Board and Waqf Tribunal matters under the Waqf Act, 1995 as amended in 2025.",
    services: [
      ["Waqf Property Registration", "Registration of waqf properties with the Waqf Board and on the government portal, with the required documents."],
      ["Waqf Deed (Waqfnama)", "Drafting and registration of a waqf deed dedicating property for religious or charitable purposes."],
      ["Waqf-alal-Aulad (Family Waqf)", "Family waqf for descendants, and disputes about family waqf property."],
      ["Waqf Tribunal Cases", "Suits and applications before the Waqf Tribunal on title, possession and management of waqf property."],
      ["Encroachment on Waqf Property", "Removal of encroachments and recovery of possession of waqf land and buildings."],
      ["Mutawalli Matters", "Appointment, removal, duties and disputes of the mutawalli (manager) of a waqf."],
      ["Waqf Accounts & Compliance", "Annual accounts, budgets, audit and returns that mutawallis must file with the Waqf Board."],
      ["Lease & Rent of Waqf Property", "Leases, renewals, rent revision and tenant disputes over waqf shops, houses and land."],
      ["Waqf Survey & Record Correction", "Objections to survey reports and correction of entries in waqf and revenue records."],
      ["Mosque, Madrasa, Dargah & Qabristan Property", "Management committees, property protection and disputes of mosques, madrasas, dargahs, idgahs and graveyards."],
      ["Challenge to Waqf Board Orders", "Appeals, representations and High Court writ petitions against orders of the Waqf Board."],
      ["Waqf (Amendment) Act, 2025 Advice", "Advice on how the 2025 amendments affect existing waqf properties, records and mutawallis."]
    ]
  },
  {
    id: "religious",
    slug: "religious-charitable-trust-lawyer-jalandhar",
    name: "Religious & Charitable Institutions",
    icon: "fa-place-of-worship",
    summary: "Trusts, committees and properties of temples, gurdwaras, churches, dharamshalas and charitable bodies.",
    services: [
      ["Temple, Gurdwara & Church Trusts", "Trust deeds, registration and governance of religious trusts."],
      ["Religious Committee Disputes", "Elections, management and control disputes of religious committees."],
      ["Religious Property Protection", "Protecting land and buildings of religious and charitable institutions from encroachment."],
      ["Charitable Trust & Society Registration", "Registration and compliance of charitable trusts and societies."],
      ["Donation & Endowment Matters", "Donation deeds, endowments and disputes over offerings and funds."],
      ["12A / 80G Registration Support", "Coordination of income tax registrations for charitable institutions."]
    ]
  },
  {
    id: "immigration",
    slug: "immigration-travel-agent-fraud-lawyer-jalandhar",
    name: "Immigration & Travel Agent Fraud",
    icon: "fa-plane-departure",
    summary: "Fraud by immigration and travel agents, visa paperwork, passports and help for returning migrants.",
    services: [
      ["Fraud by Immigration / Travel Agents", "Police complaints, FIRs and recovery of money from fake or unlicensed agents."],
      ["Punjab Travel Professionals Act Complaints", "Action against unregistered travel and immigration consultants under Punjab law."],
      ["Visa Documentation & Affidavits", "Affidavits of support, sponsorship, relationship and other visa documents."],
      ["Passport Issues", "Passport refusal, impounding, pending-case NOC and police verification problems."],
      ["Help for Deported / Returned Migrants", "Legal help with cases, recovery of money paid to agents and documents after return."],
      ["Apostille & Document Attestation", "Assistance with apostille, MEA and embassy attestation of documents."]
    ]
  },
  {
    id: "utility",
    slug: "electricity-pspcl-dispute-lawyer-jalandhar",
    name: "Electricity, Water & Utility Disputes",
    icon: "fa-bolt",
    summary: "Disputes with PSPCL and other utilities: wrong bills, disconnection, theft cases and connection matters.",
    services: [
      ["Wrong / Excessive Electricity Bills", "Complaints and appeals against inflated or incorrect bills."],
      ["CGRF & Electricity Ombudsman", "Complaints before the Consumer Grievance Redressal Forum and appeals to the Ombudsman."],
      ["Disconnection & Reconnection", "Challenging illegal disconnection and getting supply restored."],
      ["Electricity Theft Allegations", "Replies to theft notices and defence before the special court."],
      ["Connection Transfer & Load Matters", "Name change, new connection and load disputes."],
      ["Water, Sewerage & Municipal Bills", "Disputes over water and sewerage charges with local bodies."]
    ]
  },
  {
    id: "agri",
    slug: "agricultural-land-panchayat-lawyer-punjab",
    name: "Agricultural & Village Land",
    icon: "fa-tractor",
    summary: "Farmland, revenue records, panchayat (shamlat) land, canal water and rural property matters in Punjab.",
    services: [
      ["Agricultural Land Disputes", "Possession, partition and boundary disputes over farmland."],
      ["Panchayat / Shamlat Land Matters", "Disputes over village common land under the Punjab Village Common Lands Act."],
      ["Revenue Record (Jamabandi / Girdawari) Correction", "Correction of entries in jamabandi, girdawari and other revenue records."],
      ["Canal Water & Khal Disputes", "Disputes over water turns (warabandi) and water channels before the canal authorities."],
      ["Agricultural Lease (Theka) Disputes", "Disputes between landowners and tenant farmers."],
      ["Land Consolidation (Chakbandi) Matters", "Objections and appeals in consolidation proceedings."],
      ["Farm Loans & Kisan Credit Card Disputes", "Disputes with banks and cooperative societies over farm loans."]
    ]
  },
  {
    id: "others",
    slug: "education-medical-municipal-lawyer-jalandhar",
    name: "Other Specialised Areas",
    icon: "fa-layer-group",
    summary: "Education, medical, environmental, municipal and election law.",
    services: [
      ["Education Law", "Admissions, fee refund, withheld results/degrees and ragging complaints."],
      ["Medical & Healthcare Law", "Medical negligence, hospital compliance and defence of doctors."],
      ["Environmental Law (NGT)", "Pollution complaints and matters before the National Green Tribunal."],
      ["Municipal & Building Matters", "Building plan, sealing, demolition and municipal notices."],
      ["Election Disputes", "Election petitions in panchayat, municipal and other elections."],
      ["Animal & Pet Law", "Complaints under the Prevention of Cruelty to Animals Act and pet disputes."],
      ["RTE Admissions", "Admission under the Right to Education Act quota for children from weaker sections."]
    ]
  }
];

/* Online / remote legal services */
window.ONLINE_SERVICES = [
  { icon: "fa-video", name: "Online Legal Consultation", desc: "Discuss your matter by video call, phone or WhatsApp from anywhere in India or abroad." },
  { icon: "fa-envelope-open-text", name: "Legal Notice Online", desc: "Share the facts and documents online — receive a professionally drafted legal notice, sent by registered post / email." },
  { icon: "fa-file-pen", name: "Online Document Drafting", desc: "Agreements, affidavits, Power of Attorney, Wills, deeds and MOUs drafted and delivered digitally." },
  { icon: "fa-house-circle-check", name: "Rent Agreement Online", desc: "Residential and commercial rent agreements with e-stamp paper guidance." },
  { icon: "fa-magnifying-glass", name: "Document Review & Legal Opinion", desc: "Written opinion on property titles, contracts, notices and court documents." },
  { icon: "fa-heart", name: "Court Marriage Assistance", desc: "Online guidance on documents, notice and registration under the Special Marriage Act." },
  { icon: "fa-handshake-simple", name: "Mutual Consent Divorce", desc: "Online consultation, settlement drafting and petition preparation." },
  { icon: "fa-shield-halved", name: "Cyber Fraud Help", desc: "Immediate guidance on reporting online fraud (1930 / cybercrime.gov.in), complaints and FIRs." },
  { icon: "fa-cart-shopping", name: "Consumer Complaint (e-Daakhil)", desc: "Consumer complaints prepared and filed online through e-Daakhil." },
  { icon: "fa-scroll", name: "RTI Filing Online", desc: "RTI applications and appeals drafted and filed online." },
  { icon: "fa-building", name: "Business Registration", desc: "Company, LLP, GST, MSME/Udyam, FSSAI and partnership registrations." },
  { icon: "fa-copyright", name: "Trademark Filing Online", desc: "Trademark search, application and objection replies." },
  { icon: "fa-laptop-file", name: "Court e-Filing", desc: "Filing of cases through the eCourts e-filing system where available." },
  { icon: "fa-tv", name: "Virtual Hearing Support", desc: "Assistance with video-conference hearings, where permitted by the court." },
  { icon: "fa-list-check", name: "Case Status Updates", desc: "Regular updates on your case — next date, orders and next steps." },
  { icon: "fa-earth-asia", name: "NRI Legal Desk", desc: "End-to-end handling of property, family and court matters for clients living abroad." }
];
