export interface Language {
  name: string,
  certificates: Certificate[]
}

export interface Certificate {
  name: string,
  levels: string[],
}

export const LANGUAGES_API: Language[] = [
  {
    "name": "Basque",
    "certificates": [
      {
        "name": "IVAP-HAEE",
        "levels": [
          "",
          "",
          "HE 1 - IVAP-HAEE",
          "HE 2 - IVAP-HAEE",
          "HE 3 - IVAP-HAEE",
          "HE 4 - IVAP-HAEE"
        ]
      },
      {
        "name": "HABE",
        "levels": [
          "",
          "",
          "Lehenengo maila – HABE",
          "Bigarren maila – HABE",
          "Hirugarren maila – HABE",
          "Laugarren maila – HABE"
        ]
      },
      {
        "name": "EGA",
        "levels": [
          "",
          "",
          "",
          "",
          "Euskararen Gaitasun Agiria",
          ""
        ]
      }
    ]
  },
  {
    "name": "Catalan",
    "certificates": [
      {
        "name": "Catalan Language Certificates",
        "levels": [
          "",
          "Bàsic-A2",
          "Elemental-B1",
          "Intermedi-B2",
          "Suficiència-C1",
          "Superior-C2"
        ]
      },
      {
        "name": "Simtest",
        "levels": [
          "A1",
          "A2",
          "B1",
          "B2",
          "C1",
          "C2"
        ]
      }
    ]
  },
  {
    "name": "Mandarin Chinese",
    "certificates": [
      {
        "name": "Chinese Hanyu Shuiping Kaoshi (HSK) (Levels according to French and German associations)",
        "levels": [
          "HSK Level 1 HSK Level 2",
          "HSK Level 3 HSK Level 4",
          "HSK Level 4 HSK Level 5",
          "HSK Level 5 HSK Level 6",
          "HSK Level 6",
          ""
        ]
      },
      {
        "name": "Test of Chinese As A Foreign Language (TOCFL) (Taiwan)",
        "levels": [
          "TOCFL Level 1",
          "TOCFL Level 2",
          "TOCFL Level 3",
          "TOCFL Level 4",
          "TOCFL Level 5",
          "TOCFL Level 6"
        ]
      }
    ]
  },
  {
    "name": "Welsh",
    "certificates": [
      {
        "name": "WJEC Defnyddio'r Gymraeg",
        "levels": [
          "Mynediad (Entry)",
          "Sylfaen (Foundation)",
          "Canolradd (Intermediate)",
          "Uwch (Advanced)",
          "-",
          "-"
        ]
      }
    ]
  },
  {
    "name": "Czech",
    "certificates": [
      {
        "name": "Czech Language Certificate Exam (CCE)",
        "levels": [
          "CCE-A1",
          "CCE-A2",
          "CCE-B1",
          "CCE-B2",
          "CCE-C1",
          "-"
        ]
      }
    ]
  },
  {
    "name": "Danish",
    "certificates": [
      {
        "name": "Prøve i Dansk (Danish Language Exam)",
        "levels": [
          "Danskprøve A1",
          "Prøve i Dansk 1",
          "Prøve i Dansk 2",
          "Prøve i Dansk 3",
          "Studieprøven",
          ""
        ]
      }
    ]
  },
  {
    "name": "Dutch",
    "certificates": [
      {
        "name": "CNaVT - Certificaat Nederlands als Vreemde Taal (Certificate of Dutch as Foreign Language)",
        "levels": [
          "",
          "Profile tourist and informal language proficiency (PTIT)",
          "Profile societal language proficiency (PMT)",
          "Profile professional language proficiency (PPT), Profile language proficiency higher education (PTHO)",
          "Profile academic language proficiency (PAT)",
          ""
        ]
      },
      {
        "name": "Inburgeringsexamen (Integration examination for immigrants from outside the EU)",
        "levels": [
          "Pre-examination at embassy of home country",
          "Examination in the Netherlands",
          "",
          "",
          "",
          ""
        ]
      },
      {
        "name": "Staatsexamen Nederlands als tweede taal NT2 (State Examination Dutch as second language NT2)",
        "levels": [
          "",
          "",
          "NT2 programma I",
          "NT2 programma II",
          "",
          ""
        ]
      }
    ]
  },
  {
    "name": "English",
    "certificates": [
      {
        "name": "Anglia Examinations",
        "levels": [
          "Preliminary",
          "Elementary",
          "Intermediate",
          "Advanced",
          "Proficiency",
          "Masters"
        ]
      },
      {
        "name": "TrackTest",
        "levels": [
          "A1 (Beginner)",
          "A2 (Elementary)",
          "B1 (Pre-Intermediate)",
          "B2 (Intermediate)",
          "C1 (Upper-Intermediate)",
          "C2 (Advanced)"
        ]
      },
      {
        "name": "TOELS: Wheebox Test of English Language Skills",
        "levels": [
          "11 (Beginner)",
          "20 (Pre-Intermediate)",
          "25 (Intermediate)",
          "30 (Graduate)",
          "33 (Advanced)",
          ""
        ]
      },
      {
        "name": "iTEP",
        "levels": [
          "0–1.9",
          "2–2.4",
          "2.5-3.4",
          "3.5-4.4",
          "4.5-5.4",
          "5.5-6"
        ]
      },
      {
        "name": "IELTS[42][43]",
        "levels": [
          "2",
          "3",
          "3.5-5.5 (3.5 is the margin)",
          "5.5-7 (5.5 is the margin)",
          "7-8 (7 is the margin)",
          "8.0-9.0 (8.0 is the margin)"
        ]
      },
      {
        "name": "TOEIC Listening & Reading Test",
        "levels": [
          "60-105 listening60-110 reading",
          "110-270 (listening)115-270 (reading)",
          "275-395 (listening)275-380 (reading)",
          "400-485 (listening)385-450 (reading)",
          "490-495 (listening)455-495 (reading)",
          ""
        ]
      },
      {
        "name": "TOEIC Speaking & Writing Test",
        "levels": [
          "50-80 speaking30-60 writing",
          "90-110 (speaking)70-110 (writing)",
          "120-150 (speaking)120-140 (writing)",
          "160-170 (speaking)150-170 (writing)",
          "180-200 (speaking)180-200 (writing)",
          ""
        ]
      },
      {
        "name": "CLB Canadian Language Benchmarks",
        "levels": [
          "",
          "3/4",
          "5",
          "6/7",
          "8/9",
          "10-12"
        ]
      },
      {
        "name": "Versant",
        "levels": [
          "26-35",
          "36-46",
          "47-57",
          "58-68",
          "69-78",
          "79-80"
        ]
      },
      {
        "name": "Speexx Language Assessment Center",
        "levels": [
          "10-19",
          "20-29",
          "30-49",
          "50-79",
          "80-89",
          "90-100"
        ]
      },
      {
        "name": "Duolingo English Test ",
        "levels": [
          "10-20",
          "25-55",
          "60-85",
          "90-115",
          "120-140",
          "145-160"
        ]
      },
      {
        "name": "Password English Tests",
        "levels": [
          "2.0 - 2.5",
          "3.0 - 3.5",
          "4.0 - 5.0",
          "5.5 - 6.5",
          "7.0 or above",
          ""
        ]
      },
      {
        "name": "TOEFL (IBT)",
        "levels": [
          "",
          "10-15 (speaking)7-12 (writing)",
          "42-71 (total)4-17 (reading)9-16 (listening)16-19 (speaking)13-16 (writing)",
          "72-94 (total)18-23 (reading)17-21 (listening)20-24 (speaking)17-23 (writing)",
          "95-120 (total)24-30 (reading)22-30 (listening)25-30 (speaking)24-30 (writing)",
          ""
        ]
      },
      {
        "name": "TOEFL ITP",
        "levels": [
          "",
          "337",
          "460",
          "543",
          "627",
          ""
        ]
      },
      {
        "name": "TOEFL Junior Standard",
        "levels": [
          "",
          "225-245 (listening)210-245 (language form)210-240 (reading)",
          "250-285 (listening)250-275 (language form)245-275 (reading)",
          "290-300 (listening)280-300 (language form)280-300 (reading)",
          "",
          ""
        ]
      },
      {
        "name": "EF Standard English Test",
        "levels": [
          "1-30",
          "31-40",
          "41-50",
          "51-60",
          "61-70",
          "71-100"
        ]
      },
      {
        "name": "City and Guilds",
        "levels": [
          "Preliminary",
          "Access",
          "Achiever",
          "Communicator",
          "Expert",
          "Mastery"
        ]
      },
      {
        "name": "RQF (UK Only)",
        "levels": [
          "Entry Level",
          "Level 1",
          "Level 2",
          "Level 3",
          "Levels 4-6",
          "Level 7-8"
        ]
      },
      {
        "name": "Cambridge exam",
        "levels": [
          "A1 Movers",
          "A2 Key",
          "B1 Preliminary",
          "B2 First",
          "C1 Advanced",
          "C2 Proficiency"
        ]
      },
      {
        "name": "Michigan exam",
        "levels": [
          "MET Go! Basic User (CEFR A1) ",
          "Michigan English Test (MET) (0 to 39) / MET Go! Elementary User (CEFR A2) [54]",
          "Michigan English Test (MET) (40 to 52) / MET Go! Intermediate User (CEFR B1) [54]",
          "ECCE / Michigan English Test (MET) (53 to 63)[55]",
          "Michigan English Test (MET) (64 to 80)",
          "ECPE"
        ]
      },
      {
        "name": "LanguageCert International ESOL - Listening, Reading, Writing LanguageCert International ESOL - Speaking",
        "levels": [
          "A1 Preliminary(Entry Level 1)",
          "A2 Access(Entry Level 2)",
          "B1 Achiever(Entry Level 3)",
          "B2 Communicator(Level 1)",
          "C1 Expert(Level 2)",
          "C2 Mastery(Level 3)"
        ]
      },
      {
        "name": "PTE Academic",
        "levels": [
          "",
          "30",
          "43",
          "59",
          "76",
          "85ƒ"
        ]
      },
      {
        "name": "PTE General (formerly LTE)",
        "levels": [
          "Level A1",
          "Level 1",
          "Level 2",
          "Level 3",
          "Level 4",
          "Level 5"
        ]
      },
      {
        "name": "Trinity College London Integrated Skills in English (ISE) / Graded Examinations in Spoken English (GESE)[59]",
        "levels": [
          "GESE 2",
          "ISE 0 GESE 3, 4",
          "ISE I GESE 5, 6",
          "ISE II GESE 7, 8, 9",
          "ISE III GESE 10, 11",
          "ISE IV GESE 12"
        ]
      },
      {
        "name": "British General Qualifications[61]",
        "levels": [
          "GCSE Foundation Tier",
          "GCSE Higher Tier",
          "GCE AS Level and lower grade A-Level",
          "GCE A-Level",
          "",
          ""
        ]
      },
      {
        "name": "Learning Resource Network",
        "levels": [
          "CEF A1",
          "CEF A2",
          "CEF B1",
          "CEF B2",
          "CEF C1",
          "CEF C2"
        ]
      }
    ]
  },
  {
    "name": "Esperanto",
    "certificates": [
      {
        "name": "Esperanto KER History  (Esperanto)",
        "levels": [
          "A1",
          "A2",
          "B1",
          "B2",
          "C1",
          "C2"
        ]
      }
    ]
  },
  {
    "name": "Finnish",
    "certificates": [
      {
        "name": "YKI",
        "levels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      }
    ]
  },
  {
    "name": "French",
    "certificates": [
      {
        "name": "CIEP / Alliance française diplomas",
        "levels": [
          "TCF A1 / DELF A1",
          "TCF A2 / DELF A2 / CEFP 1",
          "TCF B1 / DELF B1 / CEFP 2",
          "TCF B2 / DELF B2 / Diplôme de Langue",
          "TCF C1 / DALF C1 / DSLCF",
          "TCF C2 / DALF C2 / DHEF"
        ]
      },
      {
        "name": "CLB/NCLC Canadian Language Benchmarks",
        "levels": [
          "",
          "3/4",
          "5",
          "6/7",
          "8/9",
          "10-12"
        ]
      }
    ]
  },
  {
    "name": "Speexx Language Assessment Center",
    "certificates": [
      {
        "name": "10-19",
        "levels": [
          "20-29",
          "30-49",
          "50-79",
          "80-89",
          "90-100",
          ""
        ]
      }
    ]
  },
  {
    "name": "Galician",
    "certificates": [
      {
        "name": "Certificado de lingua galega (CELGA)",
        "levels": [
          "",
          "CELGA 1",
          "CELGA 2",
          "CELGA 3",
          "CELGA 4",
          "CELGA 5"
        ]
      }
    ]
  },
  {
    "name": "German",
    "certificates": [
      {
        "name": "Goethe-Institut",
        "levels": [
          "Goethe-Zertifikat A1  Start Deutsch 1",
          "Goethe-Zertifikat A2  Start Deutsch 2",
          "Goethe-Zertifikat B1  Zertifikat Deutsch (ZD)",
          "Goethe-Zertifikat B2  Zertifikat Deutsch für den Beruf (ZDfB)",
          "Goethe-Zertifikat C1  Zentrale Mittelstufenprüfung",
          "Goethe-Zertifikat C2 - Großes Deutsches Sprachdiplom (GDS)  Zentrale Oberstufenprüfung  Kleines Deutsches Sprachdiplom"
        ]
      },
      {
        "name": "Speexx Language Assessment Center",
        "levels": [
          "10-19",
          "20-29",
          "30-49",
          "50-79",
          "80-89",
          "90-100"
        ]
      },
      {
        "name": "Österreichisches Sprachdiplom Deutsch",
        "levels": [
          "A1 ÖSD Zertifikat A1 (ÖSD ZA1)",
          "A2 ÖSD Zertifikat A2 (ÖSD ZA2)",
          "B1 ÖSD Zertifikat Deutsch Österreich (ÖSD B1 ZDÖ); B1 ÖSD Zertifikat B1 (ZB1)",
          "B2 ÖSD Zertifikat B2 (ÖSD ZB2)",
          "C1 ÖSD Zertifikat C1 (ÖSD ZC1)",
          "C2 ÖSD Zertifikat C2 (ÖSD ZC2); C2 ÖSD Zertifikat C2 / Wirtschaftssprache Deutsch (ÖSD ZC2 / WD)"
        ]
      },
      {
        "name": "Deutsch als Fremdsprache in der Wirtschaft (WiDaF)",
        "levels": [
          "-",
          "0-246",
          "247-495",
          "496-735",
          "736-897",
          "898-990"
        ]
      },
      {
        "name": "TestDaF",
        "levels": [
          "",
          "",
          "",
          "TDN 3—TDN 4",
          "TDN 4—TDN 5",
          ""
        ]
      }
    ]
  },
  {
    "name": "Greek",
    "certificates": [
      {
        "name": "Πιστοποίηση Ελληνομάθειας (Certificate of Attainment in Modern Greek)",
        "levels": [
          "Α1(Στοιχειώδης Γνώση)",
          "Α2(Βασική Γνώση)",
          "Β1(Μέτρια Γνώση)",
          "Β2(Καλή Γνώση)",
          "Γ1(Πολύ Καλή Γνώση)",
          "Γ2(Άριστη Γνώση)"
        ]
      }
    ]
  },
  {
    "name": "Hebrew",
    "certificates": [
      {
        "name": "Ulpan (as codified by the Rothberg International School) ",
        "levels": [
          "A1.1 Aleph Beginner A1.2 Aleph Advanced",
          "A2 Bet",
          "B1 Gimel",
          "B2 Dalet",
          "C1.1 Hé C1.2 Vav",
          "C2 Native Speaker"
        ]
      }
    ]
  },
  {
    "name": "Icelandic",
    "certificates": [
      {
        "name": "Íslenskupróf vegna umsóknar um íslenskan ríkisborgararétt",
        "levels": [
          "Pass",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    ]
  },
  {
    "name": "Italian",
    "certificates": [
      {
        "name": "CELI",
        "levels": [
          "Impatto",
          "1",
          "2",
          "3",
          "4",
          "5"
        ]
      },
      {
        "name": "Speexx Language Assessment Center",
        "levels": [
          "10-19",
          "20-29",
          "30-49",
          "50-79",
          "80-89",
          "90-100"
        ]
      },
      {
        "name": "CILS",
        "levels": [
          "A1",
          "A2",
          "Uno",
          "Due",
          "Tre",
          "Quattro / DIT C2"
        ]
      },
      {
        "name": "PLIDA (Dante Alighieri Society diplomas)",
        "levels": [
          "PLIDA A1",
          "PLIDA A2",
          "PLIDA B1",
          "PLIDA B2",
          "PLIDA C1",
          "PLIDA C2"
        ]
      }
    ]
  },
  {
    "name": "Japanese",
    "certificates": [
      {
        "name": "Japanese-Language Proficiency Test (JLPT)",
        "levels": [
          "JLPT 5",
          "JLPT 4",
          "JLPT 3",
          "JLPT 2",
          "JLPT 1",
          ""
        ]
      },
      {
        "name": "Japan Foundation Test for Basic Japanese (JFT-Basic)",
        "levels": [
          "",
          "Pass",
          "",
          "",
          "",
          ""
        ]
      },
      {
        "name": "Certificate of Japanese as a Foreign Language (J-cert)",
        "levels": [
          "N/A",
          "A2.1 A2.2",
          "B1",
          "B2",
          "C1",
          "C2"
        ]
      }
    ]
  },
  {
    "name": "Korean",
    "certificates": [
      {
        "name": "Test of Proficiency in Korean (TOPIK)",
        "levels": [
          "Level 1",
          "Level 2",
          "Level 3",
          "Level 4",
          "Level 5",
          "Level 6"
        ]
      }
    ]
  },
  {
    "name": "Norwegian",
    "certificates": [
      {
        "name": "Norskprøve ",
        "levels": [
          "A1",
          "A2",
          "B1",
          "B2",
          "C1 – høyere akademisk nivå (advanced academic level) ",
          ""
        ]
      }
    ]
  },
  {
    "name": "Polish",
    "certificates": [
      {
        "name": "Egzaminy Certyfikatowe z Języka Polskiego jako Obcego",
        "levels": [
          "",
          "",
          "B1 (podstawowy)",
          "B2 (średni ogólny)",
          "",
          "C2 (zaawansowany)"
        ]
      }
    ]
  },
  {
    "name": "Portuguese",
    "certificates": [
      {
        "name": "CAPLE",
        "levels": [
          "ACESSO",
          "CIPLE",
          "DEPLE",
          "DIPLE",
          "DAPLE",
          "DUPLE"
        ]
      },
      {
        "name": "CELPE-Bras",
        "levels": [
          "Intermediate",
          "Intermediate",
          "Superior Intermediate",
          "Superior Intermediate",
          "Advanced",
          "Superior Advanced"
        ]
      }
    ]
  },
  {
    "name": "Russian",
    "certificates": [
      {
        "name": "ТРКИ – Тест по русскому языку как иностранному (TORFL – Test of Russian as a Foreign Language)",
        "levels": [
          "ТЭУ Элементарный уровень",
          "ТБУ Базовый уровень",
          "ТРКИ-1 (I Cертификационный уровень) (1st Certificate level)",
          "ТРКИ-2",
          "ТРКИ-3",
          "ТРКИ-4"
        ]
      }
    ]
  },
  {
    "name": "Spanish",
    "certificates": [
      {
        "name": "DELE",
        "levels": [
          "A1",
          "A2",
          "B1 (formerly \"Inicial\")",
          "B2 (formerly \"Intermedio\")",
          "C1",
          "C2 (formerly \"Superior\")"
        ]
      },
      {
        "name": "Speexx Language Assessment Center",
        "levels": [
          "10-19",
          "20-29",
          "30-49",
          "50-79",
          "80-89",
          "90-100"
        ]
      },
      {
        "name": "LanguageCert USAL esPro BULATS",
        "levels": [
          "10-19",
          "20-39",
          "40-59",
          "60-74",
          "75-89",
          "90-100"
        ]
      }
    ]
  },
  {
    "name": "Swedish",
    "certificates": [
      {
        "name": "TISUS",
        "levels": [
          "-",
          "-",
          "-",
          "-",
          "Pass",
          "-"
        ]
      },
      {
        "name": "Swedex",
        "levels": [
          "-",
          "A2",
          "B1",
          "B2",
          "-",
          "-"
        ]
      },
      {
        "name": "YKI",
        "levels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      }
    ]
  },
  {
    "name": "Turkish",
    "certificates": [
      {
        "name": "TYS",
        "levels": [
          "A1",
          "A2",
          "B1",
          "B2 (55-70%)",
          "C1 (71-88%)",
          "C2 (89-100%)"
        ]
      }
    ]
  },
  {
    "name": "Luxembourgish",
    "certificates": [
      {
        "name": "Institut National des Langues",
        "levels": [
          "",
          "A2",
          "B1",
          "B2",
          "C1",
          ""
        ]
      }
    ]
  },
  {
    "name": "Ukrainian",
    "certificates": [
      {
        "name": "UMI/ULF - Ukrainian as foreign language",
        "levels": [
          "UMI 1",
          "UMI 2",
          "UMI 3",
          "UMI 4",
          "UMI 5",
          "UMI 6"
        ]
      }
    ]
  },
  {
    "name": "Taiwanese",
    "certificates": [
      {
        "name": "GTPT - General Taiwanese Proficiency Test",
        "levels": [
          "151 - 220",
          "221 - 290",
          "291 - 340",
          "341 - 380",
          "381 - 430",
          "431 - 500"
        ]
      }
    ]
  }
]
