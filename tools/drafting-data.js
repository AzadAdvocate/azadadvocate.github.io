/*
 * Drafting Desk catalogue — every document listed gets a one-click WhatsApp button.
 * Each group: id, name, icon (Font Awesome), items: ["Document name", "optional short note"]
 * After editing, run:  node tools/build-seo-pages.js
 */
module.exports = [
  {
    id: "property", name: "Property & Real Estate", icon: "fa-house",
    items: [
      ["Agreement to Sell (Bayana)", "Advance / earnest money agreement before the sale deed"],
      ["Sale Deed", "Final transfer document for registration"],
      ["Gift Deed", "Transfer of property as a gift, usually within family"],
      ["Release / Relinquishment Deed", "Giving up a share in property in favour of co-owners"],
      ["Exchange Deed"],
      ["Partition Deed", "Division of joint property among co-owners"],
      ["Conveyance Deed"],
      ["Mortgage Deed"],
      ["Rectification Deed", "Correcting mistakes in a registered deed"],
      ["Cancellation Deed"],
      ["Rent Agreement (Residential)"],
      ["Shop / Commercial Lease Deed"],
      ["Leave and Licence Agreement"],
      ["Paying Guest (PG) Agreement"],
      ["Agricultural Land Lease (Theka / Patta) Agreement"],
      ["Rent Receipt"],
      ["Development / Collaboration Agreement", "Landowner and builder agreement"],
      ["Builder–Buyer Agreement Review"],
      ["Possession Letter"],
      ["Property NOC"],
      ["Easement / Right of Way Agreement"],
      ["Title Search Report", "Legal report on ownership before you buy"]
    ]
  },
  {
    id: "commercial", name: "Business Agreements & Contracts", icon: "fa-file-contract",
    items: [
      ["Service Agreement"],
      ["Supply Agreement"],
      ["Vendor Agreement"],
      ["Distribution Agreement"],
      ["Dealership Agreement"],
      ["Franchise Agreement"],
      ["Agency Agreement"],
      ["Commission Agreement"],
      ["Consultancy Agreement"],
      ["Manufacturing Agreement"],
      ["Job Work Agreement"],
      ["Joint Venture Agreement"],
      ["Memorandum of Understanding (MOU)"],
      ["Letter of Intent (LOI)"],
      ["Non-Disclosure Agreement (NDA)"],
      ["Non-Compete Agreement"],
      ["Marketing Agreement"],
      ["Sponsorship Agreement"],
      ["Event Management Agreement"],
      ["Transport & Logistics Agreement"],
      ["Warehousing Agreement"],
      ["Annual Maintenance Contract (AMC)"],
      ["Construction / Contractor Agreement"],
      ["Interior Design Agreement"],
      ["Purchase Order Terms & Conditions"],
      ["Business Transfer Agreement"]
    ]
  },
  {
    id: "business", name: "Business Setup & Corporate", icon: "fa-briefcase",
    items: [
      ["Partnership Deed"],
      ["Admission Deed of Partner"],
      ["Retirement Deed of Partner"],
      ["Dissolution Deed of Partnership"],
      ["LLP Agreement"],
      ["Founders' Agreement"],
      ["Shareholders' Agreement"],
      ["Share Purchase Agreement"],
      ["Memorandum & Articles of Association (MOA / AOA)"],
      ["Board Resolutions"],
      ["Minutes of Meetings"],
      ["Trust Deed", "Private or charitable trust"],
      ["Society Memorandum & Bye-laws"],
      ["Section 8 Company Documents"]
    ]
  },
  {
    id: "family", name: "Family, Wills & Personal", icon: "fa-people-roof",
    items: [
      ["Will (Vasiyat)"],
      ["Codicil", "Changes to an existing Will"],
      ["Family Settlement Deed"],
      ["Mutual Divorce Settlement Agreement"],
      ["Maintenance / Alimony Agreement"],
      ["Child Custody & Visitation Agreement"],
      ["Adoption Deed"],
      ["Marriage Affidavits (Court Marriage)"],
      ["Advance Medical Directive (Living Will)"],
      ["Guardianship Affidavit / Application"],
      ["Senior Citizen Maintenance Application"]
    ]
  },
  {
    id: "poa", name: "Power of Attorney", icon: "fa-file-signature",
    items: [
      ["General Power of Attorney"],
      ["Special Power of Attorney"],
      ["Property Power of Attorney"],
      ["NRI Power of Attorney", "For execution abroad and use in Punjab"],
      ["Power of Attorney for Court Cases"],
      ["Bank / Financial Power of Attorney"],
      ["Revocation of Power of Attorney"]
    ]
  },
  {
    id: "affidavits", name: "Affidavits, Undertakings & Bonds", icon: "fa-stamp",
    items: [
      ["General Affidavit"],
      ["Name Change Affidavit"],
      ["One and the Same Person Affidavit", "When your name is spelt differently in documents"],
      ["Date of Birth Affidavit"],
      ["Address Proof Affidavit"],
      ["Income Affidavit"],
      ["Single / Marital Status Affidavit"],
      ["Gap Year Affidavit"],
      ["Lost Documents Affidavit"],
      ["Passport Affidavits & Annexures"],
      ["Legal Heir Affidavit"],
      ["No Objection Affidavit"],
      ["Relationship Affidavit"],
      ["Residence / Domicile Affidavit"],
      ["Character Affidavit"],
      ["Anti-Ragging Affidavit"],
      ["Self-Declaration"],
      ["Undertaking"],
      ["Indemnity Bond"],
      ["Surety Bond"]
    ]
  },
  {
    id: "notices", name: "Legal Notices & Replies", icon: "fa-envelope-open-text",
    items: [
      ["Legal Notice for Recovery of Money"],
      ["Cheque Bounce Notice (Sec. 138 NI Act)"],
      ["Notice to Tenant (Eviction / Arrears)"],
      ["Notice to Landlord (Security Deposit Refund)"],
      ["Notice to Builder"],
      ["Consumer Legal Notice"],
      ["Notice to Insurance Company"],
      ["Notice for Unpaid Salary / Dues"],
      ["Notice for Breach of Contract"],
      ["Defamation Notice"],
      ["Matrimonial Legal Notice"],
      ["Notice for Return of Stridhan"],
      ["Reply to Legal Notice"],
      ["Public Notice in Newspaper", "Property purchase, lost documents, disowning and other notices"]
    ]
  },
  {
    id: "court", name: "Court Petitions & Applications", icon: "fa-gavel",
    items: [
      ["Plaint (Civil Suit)"],
      ["Written Statement"],
      ["Replication / Rejoinder"],
      ["Interim Application (Stay / Injunction)"],
      ["Caveat"],
      ["Regular Bail Application"],
      ["Anticipatory Bail Application"],
      ["Private Criminal Complaint"],
      ["Application for Police Investigation (Sec. 175(3) BNSS)"],
      ["Cheque Bounce Complaint"],
      ["FIR Quashing Petition"],
      ["Divorce Petition (Mutual / Contested)"],
      ["Maintenance Petition"],
      ["Domestic Violence Act Application"],
      ["Child Custody Petition"],
      ["Succession Certificate Petition"],
      ["Probate / Letters of Administration Petition"],
      ["Consumer Complaint"],
      ["MACT Claim Petition"],
      ["Writ Petition"],
      ["Appeal / Revision"],
      ["Execution Petition"],
      ["Evidence Affidavit"],
      ["Compromise Deed for Court"]
    ]
  },
  {
    id: "employment", name: "Employment & HR", icon: "fa-user-tie",
    items: [
      ["Offer Letter"],
      ["Appointment Letter"],
      ["Employment Agreement"],
      ["Internship Agreement"],
      ["Freelancer / Consultant Agreement"],
      ["Employee Handbook & HR Policy"],
      ["POSH Policy"],
      ["Show Cause Notice"],
      ["Warning Letter"],
      ["Termination Letter"],
      ["Relieving & Experience Letter"],
      ["Full & Final Settlement"],
      ["Non-Solicitation Agreement"],
      ["Driver / Domestic Help Agreement"]
    ]
  },
  {
    id: "finance", name: "Loans, Money & Finance", icon: "fa-hand-holding-dollar",
    items: [
      ["Loan Agreement (Personal / Friendly Loan)"],
      ["Promissory Note (Pronote)"],
      ["Money Receipt"],
      ["Acknowledgement of Debt"],
      ["Guarantee Deed"],
      ["Hypothecation Agreement"],
      ["Investment Agreement"],
      ["Hire Purchase Agreement"],
      ["Loan Settlement / OTS Letter"]
    ]
  },
  {
    id: "digital", name: "Digital, Online Business & IP", icon: "fa-laptop-code",
    items: [
      ["Website Terms & Conditions"],
      ["Privacy Policy"],
      ["Refund & Cancellation Policy"],
      ["Website Disclaimer"],
      ["App User Agreement"],
      ["Data Processing Agreement (DPDP Act)"],
      ["Software / Website Development Agreement"],
      ["SaaS / Subscription Agreement"],
      ["Influencer Agreement"],
      ["Content Creator / Collaboration Agreement"],
      ["Trademark Assignment Deed"],
      ["Copyright Assignment Deed"],
      ["Licence Agreement (IP)"]
    ]
  },
  {
    id: "government", name: "Government, Police & Complaints", icon: "fa-scroll",
    items: [
      ["RTI Application"],
      ["RTI First Appeal"],
      ["Police Complaint"],
      ["Representation to SSP / Commissioner"],
      ["Cyber Crime Complaint"],
      ["Human Rights Commission Complaint"],
      ["Women's Commission Complaint"],
      ["Application to Tehsildar / SDM", "Mutation, demarcation, record correction"],
      ["Grievance Letter to Government Department"],
      ["Bank Complaint / Banking Ombudsman Complaint"],
      ["Insurance Claim Letter"],
      ["School / College Fee Refund Application"]
    ]
  },
  {
    id: "settlement", name: "Settlement & Dispute Resolution", icon: "fa-handshake",
    items: [
      ["Settlement Agreement"],
      ["Compromise Deed"],
      ["Memorandum of Settlement"],
      ["Arbitration Agreement / Clause"],
      ["Mediation Settlement Agreement"],
      ["Release & Discharge Deed"],
      ["No Dues Certificate"]
    ]
  },
  {
    id: "vehicle", name: "Vehicles & Everyday Documents", icon: "fa-car",
    items: [
      ["Vehicle Sale Agreement (Second-hand Car / Bike)"],
      ["Vehicle NOC"],
      ["Vehicle Rental / Hire Agreement"],
      ["Wedding / Event Vendor Agreement"],
      ["Clinic Patient Consent Forms"],
      ["Authority Letter"],
      ["Declaration Letter"],
      ["NOC (General)"]
    ]
  }
];
