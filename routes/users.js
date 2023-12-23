var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/account/:id', function(req, res, next) {
  res.json(
  {
  "avatar": {
    "gravatar": {
      "hash": "19232fd8c41adb1ab67822a1ec6f3dc3"
    },
    "tmdb": {
      "avatar_path": null
    }
  },
  "id": 20702514,
  "iso_639_1": "en",
  "iso_3166_1": "PH",
  "name": "",
  "include_adult": false,
  "username": "wilsonmarasigan"
}

  );
});

router.get('/account/:id/favorite/movies', function(req, res, next) {
  res.json(
    {
      "page": 1,
      "results": [],
      "total_pages": 0,
      "total_results": 0
    }

  )
});

router.get('/account/:id/favorite/tv', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:id/lists', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:id/rated/movies', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:id/rated/tv', function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/account/:id/rated/tv', function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/account/:id/rated/tv/episodes', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:account_id/watchlist/movies', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:account_id/watchlist/tv', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/authentication/guest_session/new', function(req, res, next) {
  res.json({
    "success": true,
    "guest_session_id": "0f88ad697dea11655e0016a2cacf01f1",
    "expires_at": "2023-11-20 22:26:54 UTC"
  });
});

router.get('/authentication/token/new', function(req, res, next) {
  res.json({
    "success": true,
    "expires_at": "2023-11-19 23:28:29 UTC",
    "request_token": "86b587231e4b4acbe75f7a76dfbfdd7de79b5d19"
  });
});

router.get('/certification/movie/list', function(req, res, next) {
  res.json({
    "certifications": {
      "AU": [
        {
          "certification": "E",
          "meaning": "Exempt from classification. Films that are exempt from classification must not contain contentious material (i.e. material that would ordinarily be rated M or higher).",
          "order": 1
        },
        {
          "certification": "G",
          "meaning": "General. The content is very mild in impact.",
          "order": 2
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance recommended. There are no age restrictions. The content is mild in impact.",
          "order": 3
        },
        {
          "certification": "M",
          "meaning": "Recommended for mature audiences. There are no age restrictions. The content is moderate in impact.",
          "order": 4
        },
        {
          "certification": "MA 15+",
          "meaning": "Mature Accompanied. Unsuitable for children younger than 15. Children younger than 15 years must be accompanied by a parent or guardian. The content is strong in impact.",
          "order": 5
        },
        {
          "certification": "R 18+",
          "meaning": "Restricted to 18 years and over. Adults only. The content is high in impact.",
          "order": 6
        },
        {
          "certification": "X 18+",
          "meaning": "Restricted to 18 years and over. Films with this rating have pornographic content. Films classified as X18+ are banned from being sold or rented in all Australian states and are only legally available in the Australian Capital Territory and the Northern Territory. However, importing X18+ material from the two territories to any of the Australian states is legal.The content is sexually explicit in impact.",
          "order": 7
        },
        {
          "certification": "RC",
          "meaning": "Refused Classification. Banned from sale or hire in Australia; also generally applies to importation (if inspected by and suspicious to Customs). Private Internet viewing is unenforced and attempts to legally censor such online material has resulted in controversy. Films are rated RC if their content exceeds the guidelines. The content is very high in impact.",
          "order": 8
        }
      ],
      "BG": [
        {
          "certification": "D",
          "meaning": "Prohibited for persons under 16.",
          "order": 4
        },
        {
          "certification": "X",
          "meaning": "Prohibited for persons under 18.",
          "order": 5
        },
        {
          "certification": "B",
          "meaning": "Without age restrictions.",
          "order": 2
        },
        {
          "certification": "C",
          "meaning": "Not recommended for children under 12.",
          "order": 3
        },
        {
          "certification": "A",
          "meaning": "Recommended for children.",
          "order": 1
        }
      ],
      "BR": [
        {
          "certification": "14",
          "meaning": "Not recommended for minors under fourteen. More violent material, stronger sex references and/or nudity.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Not recommended for minors under sixteen. Scenes featuring production, trafficking and/or use of illegal drugs, hyper-realistic sex, sexual violence, abortion, torture, mutilation, suicide, trivialization of violence and death penalty.",
          "order": 5
        },
        {
          "certification": "L",
          "meaning": "General Audiences. Do not expose children to potentially harmful content.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Not recommended for minors under twelve. Scenes can include physical aggression, use of legal drugs and sexual innuendo.",
          "order": 3
        },
        {
          "certification": "10",
          "meaning": "Not recommended for minors under ten. Violent content or inappropriate language to children, even if of a less intensity.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "Not recommended for minors under eighteen. Scenes featuring explicit sex, incest, pedophilia, praising of the use of illegal drugs and violence of a strong imagery impact.",
          "order": 6
        }
      ],
      "CA": [
        {
          "certification": "G",
          "meaning": "All ages.",
          "order": 2
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance advised. There is no age restriction but some material may not be suitable for all children.",
          "order": 3
        },
        {
          "certification": "14A",
          "meaning": "Persons under 14 years of age must be accompanied by an adult.",
          "order": 4
        },
        {
          "certification": "18A",
          "meaning": "Persons under 18 years of age must be accompanied by an adult. In the Maritimes & Manitoba, children under the age of 14 are prohibited from viewing the film.",
          "order": 5
        },
        {
          "certification": "R",
          "meaning": "Restricted to 18 years and over. No rental or purchase by those under 18. Content not suitable for minors. Video contains frequent use of: sexual activity; brutal/graphic violence; intense horror; and/or other disturbing content.",
          "order": 6
        },
        {
          "certification": "A",
          "meaning": "Admittance restricted to people 18 years of age or older. Sole purpose of the film is the portrayal of sexually explicit activity and/or explicit violence.",
          "order": 7
        },
        {
          "certification": "E",
          "meaning": "Exempt. Contains material not subject to classification such as documentaries, nature, travel, music, arts and culture, sports and educational and instructional information.",
          "order": 1
        }
      ],
      "CA-QC": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "G",
          "meaning": "General Rating – May be viewed, rented or purchased by persons of all ages. If a film carrying a \"G\" rating might offend the sensibilities of a child under 8 years of age, \"Not suitable for young children\" is appended to the classification.",
          "order": 1
        },
        {
          "certification": "13+",
          "meaning": "13 years and over – May be viewed, rented or purchased only by children 13 years of age or over. Children under 13 may be admitted only if accompanied by an adult.",
          "order": 2
        },
        {
          "certification": "16+",
          "meaning": "16 years and over – May be viewed, rented or purchased only by children 16 years of age or over.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "18 years and over – May be viewed, rented or purchased only by adults 18 years of age or over. If a film contains real and explicit sexual activity \"Explicit sexuality\" is appended to the classification, and in the retail video industry storeowners are required to place the film in a room reserved for adults.",
          "order": 4
        }
      ],
      "DE": [
        {
          "certification": "12",
          "meaning": "Children 12 or older admitted, children between 6 and 11 only when accompanied by parent or a legal guardian.",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "No youth admitted, only adults.",
          "order": 5
        },
        {
          "certification": "0",
          "meaning": "No age restriction.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "No children younger than 6 years admitted.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Children 16 or older admitted, nobody under this age admitted.",
          "order": 4
        }
      ],
      "DK": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "A",
          "meaning": "Suitable for a general audience.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Not recommended for children under 7.",
          "order": 2
        },
        {
          "certification": "11",
          "meaning": "For ages 11 and up.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "For ages 15 and up.",
          "order": 4
        },
        {
          "certification": "F",
          "meaning": "Exempt from classification.",
          "order": 5
        }
      ],
      "ES": [
        {
          "certification": "A",
          "meaning": "General admission.",
          "order": 1
        },
        {
          "certification": "Ai",
          "meaning": "General admission.",
          "order": 2
        },
        {
          "certification": "7",
          "meaning": "Not recommended for audiences under 7.",
          "order": 3
        },
        {
          "certification": "7i",
          "meaning": "Not recommended for audiences under 7.",
          "order": 4
        },
        {
          "certification": "12",
          "meaning": "Not recommended for audiences under 12.",
          "order": 5
        },
        {
          "certification": "16",
          "meaning": "Not recommended for audiences under 16.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Not recommended for audiences under 18.",
          "order": 7
        },
        {
          "certification": "X",
          "meaning": "Prohibited for audiences under 18.",
          "order": 8
        }
      ],
      "FI": [
        {
          "certification": "K-16",
          "meaning": "Over 16 years.",
          "order": 4
        },
        {
          "certification": "K-12",
          "meaning": "Over 12 years.",
          "order": 3
        },
        {
          "certification": "K-7",
          "meaning": "Over 7 years.",
          "order": 2
        },
        {
          "certification": "S",
          "meaning": "For all ages.",
          "order": 1
        },
        {
          "certification": "K-18",
          "meaning": "Adults only.",
          "order": 5
        },
        {
          "certification": "KK",
          "meaning": "Banned from commercial distribution.",
          "order": 6
        }
      ],
      "FR": [
        {
          "certification": "TP",
          "meaning": "Valid for all audiences.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Unsuitable for children younger than 12 or forbidden in cinemas for under 12.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Unsuitable for children younger than 16 or forbidden in cinemas for under 16.",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "Unsuitable for children younger than 18 or forbidden in cinemas for under 18.",
          "order": 4
        }
      ],
      "GB": [
        {
          "certification": "15",
          "meaning": "Only those over 15 years are admitted. Nobody younger than 15 can rent or buy a 15-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category can contain adult themes, hard drugs, frequent strong language and limited use of very strong language, strong violence and strong sex references, and nudity without graphic detail. Sexual activity may be portrayed but without any strong detail. Sexual violence may be shown if discreet and justified by context.",
          "order": 5
        },
        {
          "certification": "R18",
          "meaning": "Can only be shown at licensed adult cinemas or sold at licensed sex shops, and only to adults, those aged 18 or over. Films under this category are always hard-core pornography, defined as material intended for sexual stimulation and containing clear images of real sexual activity, strong fetish material, explicit animated images, or sight of certain acts such as triple simultaneous penetration and snowballing. There remains a range of material that is often cut from the R18 rating: strong images of injury in BDSM or spanking works, urolagnia, scenes suggesting incest even if staged, references to underage sex or childhood sexual development and aggressive behaviour such as hair-pulling or spitting on a performer are not permitted. More cuts are demanded in this category than any other category.",
          "order": 7
        },
        {
          "certification": "PG",
          "meaning": "All ages admitted, but certain scenes may be unsuitable for young children. May contain mild language and sex/drugs references. May contain moderate violence if justified by context (e.g. fantasy).",
          "order": 2
        },
        {
          "certification": "12A",
          "meaning": "Films under this category are considered to be unsuitable for very young people. Those aged under 12 years are only admitted if accompanied by an adult, aged at least 18 years, at all times during the motion picture. However, it is generally not recommended that children under 12 years should watch the film. Films under this category can contain mature themes, discrimination, soft drugs, moderate swear words, infrequent strong language and moderate violence, sex references and nudity. Sexual activity may be briefly and discreetly portrayed. Sexual violence may be implied or briefly indicated.",
          "order": 3
        },
        {
          "certification": "U",
          "meaning": "All ages admitted, there is nothing unsuitable for children.",
          "order": 1
        },
        {
          "certification": "18",
          "meaning": "Only adults are admitted. Nobody younger than 18 can rent or buy an 18-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category do not have limitation on the bad language that is used. Hard drugs are generally allowed, and explicit sex references along with detailed sexual activity are also allowed. Scenes of strong real sex may be permitted if justified by the context. Very strong, gory, and/or sadistic violence is usually permitted. Strong sexual violence is permitted unless it is eroticised or excessively graphic.",
          "order": 6
        },
        {
          "certification": "12",
          "meaning": "Home media only since 2002. 12A-rated films are usually given a 12 certificate for the VHS/DVD version unless extra material has been added that requires a higher rating. Nobody younger than 12 can rent or buy a 12-rated VHS, DVD, Blu-ray Disc, UMD or game. The content guidelines are identical to those used for the 12A certificate.",
          "order": 4
        }
      ],
      "HU": [
        {
          "certification": "6",
          "meaning": "Not recommended below age of 6.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Not recommended below age of 16.",
          "order": 4
        },
        {
          "certification": "KN",
          "meaning": "Without age restriction.",
          "order": 1
        },
        {
          "certification": "18",
          "meaning": "Not recommended below age of 18.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "12",
          "meaning": "Not recommended below age of 12.",
          "order": 3
        },
        {
          "certification": "X",
          "meaning": "Restricted below 18, for adults only.",
          "order": 6
        }
      ],
      "IN": [
        {
          "certification": "U",
          "meaning": "Unrestricted Public Exhibition throughout India, suitable for all age groups. Films under this category should not upset children over 4. Such films may contain educational, social or family-oriented themes. Films under this category may also contain fantasy violence and/or mild bad language.",
          "order": 1
        },
        {
          "certification": "U/A 7+",
          "meaning": "Viewable for 7 and above years old.",
          "order": 2
        },
        {
          "certification": "UA",
          "meaning": "All ages admitted, but it is advised that children below 12 be accompanied by a parent as the theme or content may be considered intense or inappropriate for young children. Films under this category may contain mature themes, sexual references, mild sex scenes, violence with brief gory images and/or infrequent use of crude language.",
          "order": 3
        },
        {
          "certification": "U/A 13+",
          "meaning": "Viewable for 13 and above years old.",
          "order": 4
        },
        {
          "certification": "U/A 16+",
          "meaning": "Viewable for 16 and above years old.",
          "order": 5
        },
        {
          "certification": "A",
          "meaning": "Restricted to adult audiences (18 years or over). Nobody below the age of 18 may buy/rent an A-rated DVD, VHS, UMD or watch a film in the cinema with this rating. Films under this category may contain adult/disturbing themes, frequent crude language, brutal violence with blood and gore, strong sex scenes and/or scenes of drug abuse which is considered unsuitable for minors.",
          "order": 6
        },
        {
          "certification": "S",
          "meaning": "Restricted to any special class of persons.",
          "order": 7
        }
      ],
      "IT": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "T",
          "meaning": "All ages admitted.",
          "order": 1
        },
        {
          "certification": "6+",
          "meaning": "Not suitable for children under 6.",
          "order": 2
        },
        {
          "certification": "14+",
          "meaning": "Released to ages 14 and older; children who are at least 12 may be admitted with adult accompaniment.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Released to ages 18 and older; children who are at least 16 may be admitted with adult accompaniment.",
          "order": 4
        }
      ],
      "LT": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "V",
          "meaning": "Movies for the audience of all ages.",
          "order": 1
        },
        {
          "certification": "N-7",
          "meaning": "Movies for viewers from 7 years old. Younger than 7 years of age, viewers of this index have been featured only together with accompanying adult persons.",
          "order": 2
        },
        {
          "certification": "N-13",
          "meaning": "Movies for viewers from 13 years of age. The viewers from 7 to 13 years of age are allowed to enter this index only together with accompanying adult persons.",
          "order": 3
        },
        {
          "certification": "N-16",
          "meaning": "Movies for viewers from 16 years of age.",
          "order": 4
        },
        {
          "certification": "N-18",
          "meaning": "Movies for viewers from 18 years of age.",
          "order": 5
        }
      ],
      "MY": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "U",
          "meaning": "(Umum: \"General Audiences\") - For general audiences. (Used by the majority of films screened in Malaysia until 2008 but it continues only for television, notably for RTM.)",
          "order": 1
        },
        {
          "certification": "P13",
          "meaning": "(Penjaga 13 : \"Parental Guidance 13\") - Children under 13 not admitted unless accompanied by an adult. (Introduced in 2006, this became the official Malaysian motion picture rating system in 2008. The \"PG-13\" rating was revised to \"P13\" from April 2012 onwards to emphasize the use of Malay language instead of English.) Passionate kissing scenes are not allowed under a P13 rating.",
          "order": 2
        },
        {
          "certification": "18SG",
          "meaning": "(Seram, Ganas: \"Graphic Violence and Horror/Terror\") - Film may contain strong violence, gore or horror/terror people may find objectionable.",
          "order": 3
        },
        {
          "certification": "18SX",
          "meaning": "(Seks: \"Sexual Content\") - Film may contain sex scenes, nudity or sexual dialogue/references people may find objectionable (despite scenes of sex and nudity being strictly censored off by the LPF.)",
          "order": 4
        },
        {
          "certification": "18PA",
          "meaning": "(Politik, Agama: \"Strong Religious or Political Elements\") - Film may contain elements which include religious, social or political aspects people may find objectionable. Rarely used.",
          "order": 5
        },
        {
          "certification": "18PL",
          "meaning": "(Pelbagai: \"Various\") - Film may contain strong violence, gore, horror/terror, sex scenes, nudity, sexual dialogues/references, religious, social or political aspects people may find objectionable. The majority of the 18+ movies use this rating. For example, a film with sex scenes and strong violence will be classified as 18PL, despite scenes of sex and nudity being strictly censored off by the LPF.",
          "order": 6
        }
      ],
      "NL": [
        {
          "certification": "AL",
          "meaning": "All ages.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Potentially harmful to children under 6 years.",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "Potentially harmful to children under 9 years.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Potentially harmful to children under 12 years; broadcasting is not allowed before 8:00 pm.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Potentially harmful to children under 16 years; broadcasting is not allowed before 10:00 pm.",
          "order": 6
        },
        {
          "certification": "14",
          "meaning": "Potentially harmful to children under 14 years; broadcasting is not allowed before 8:00 pm.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Potentially harmful to (and not allowed for) children under 18 years; broadcasting is not allowed before midnight.",
          "order": 7
        }
      ],
      "NO": [
        {
          "certification": "6",
          "meaning": "6 years (no restriction for children accompanied by an adult).",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "9 years (children down to 6 years accompanied by an adult).",
          "order": 3
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "18",
          "meaning": " 18 years (absolute lower limit).",
          "order": 6
        },
        {
          "certification": "15",
          "meaning": "15 years (young down to 12 years accompanied by an adult).",
          "order": 5
        },
        {
          "certification": "12",
          "meaning": "12 years (children down to 9 years accompanied by an adult).",
          "order": 4
        },
        {
          "certification": "A",
          "meaning": "Suitable for all.",
          "order": 1
        }
      ],
      "NZ": [
        {
          "certification": "G",
          "meaning": "Suitable for general audiences.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance recommended for younger viewers.",
          "order": 2
        },
        {
          "certification": "M",
          "meaning": "Suitable for (but not restricted to) mature audiences 16 years and up.",
          "order": 3
        },
        {
          "certification": "R13",
          "meaning": "Restricted to persons 13 years of age and over.",
          "order": 4
        },
        {
          "certification": "R15",
          "meaning": "Restricted to persons 15 years of age and over.",
          "order": 6
        },
        {
          "certification": "R16",
          "meaning": "Restricted to persons 16 years of age and over.",
          "order": 7
        },
        {
          "certification": "R18",
          "meaning": "Restricted to persons 18 years of age and over.",
          "order": 9
        },
        {
          "certification": "R",
          "meaning": "Restricted to a particular class of persons, or for particular purposes, or both.",
          "order": 11
        },
        {
          "certification": "RP13",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "RP16",
          "meaning": "",
          "order": 8
        },
        {
          "certification": "RP18",
          "meaning": "",
          "order": 10
        }
      ],
      "PH": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "PG",
          "meaning": "Viewers below 13 years old must be accompanied by a parent or supervising adult.",
          "order": 2
        },
        {
          "certification": "X",
          "meaning": "“X-rated” films are not suitable for public exhibition.",
          "order": 6
        },
        {
          "certification": "R-18",
          "meaning": "Only viewers who are 18 years old and above can be admitted.",
          "order": 5
        },
        {
          "certification": "R-16",
          "meaning": "Only viewers who are 16 years old and above can be admitted.",
          "order": 4
        },
        {
          "certification": "G",
          "meaning": "Viewers of all ages are admitted.",
          "order": 1
        },
        {
          "certification": "R-13",
          "meaning": "Only viewers who are 13 years old and above can be admitted.",
          "order": 3
        }
      ],
      "PT": [
        {
          "certification": "Públicos",
          "meaning": "For all the public (especially designed for children under 3 years of age).",
          "order": 1
        },
        {
          "certification": "M/3",
          "meaning": "Passed for viewers aged 3 and older.",
          "order": 2
        },
        {
          "certification": "M/6",
          "meaning": "Passed for viewers aged 6 and older.",
          "order": 3
        },
        {
          "certification": "M/12",
          "meaning": "Passed for viewers aged 12 and older.",
          "order": 4
        },
        {
          "certification": "M/14",
          "meaning": "Passed for viewers aged 14 and older.",
          "order": 5
        },
        {
          "certification": "M/16",
          "meaning": "Passed for viewers aged 16 and older.",
          "order": 6
        },
        {
          "certification": "M/18",
          "meaning": "Passed for viewers aged 18 and older.",
          "order": 7
        },
        {
          "certification": "P",
          "meaning": "Special rating supplementary to the M/18 age rating denoting pornography.",
          "order": 8
        }
      ],
      "RU": [
        {
          "certification": "6+",
          "meaning": "(For children above 6) – Unsuitable for children under 6.",
          "order": 2
        },
        {
          "certification": "0+",
          "meaning": "All ages are admitted.",
          "order": 1
        },
        {
          "certification": "16+",
          "meaning": "(For children above 16) – Unsuitable for children under 16.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "(Prohibited for children) – Prohibited for children under 18.",
          "order": 5
        },
        {
          "certification": "12+",
          "meaning": "(For children above 12) – Unsuitable for children under 12.",
          "order": 3
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        }
      ],
      "SE": [
        {
          "certification": "11",
          "meaning": "Children over the age of 7, who are accompanied by an adult, are admitted to films that have been passed for children from the age of 11.",
          "order": 3
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "15",
          "meaning": "Children over the age of 7, who are accompanied by an adult, are admitted to films that have been passed for children from the age of 11. Updated on March 1, 2017.",
          "order": 4
        },
        {
          "certification": "Btl",
          "meaning": "All ages.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Children under the age of 7, who are accompanied by an adult (a person aged 18 or over), are admitted to films that have been passed for children from the age of 7.",
          "order": 2
        }
      ],
      "US": [
        {
          "certification": "R",
          "meaning": "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
          "order": 4
        },
        {
          "certification": "PG",
          "meaning": "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
          "order": 2
        },
        {
          "certification": "NC-17",
          "meaning": "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
          "order": 5
        },
        {
          "certification": "G",
          "meaning": "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
          "order": 1
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "PG-13",
          "meaning": "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
          "order": 3
        }
      ],
      "KR": [
        {
          "certification": "All",
          "meaning": "Film suitable for all ages.",
          "order": 0
        },
        {
          "certification": "12",
          "meaning": "Film intended for audiences 12 and over. Underage audiences accompanied by a parent or guardian are allowed.",
          "order": 1
        },
        {
          "certification": "15",
          "meaning": "Film intended for audiences 15 and over. Underage audiences accompanied by a parent or guardian are allowed.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "No one under 18 is allowed to watch this film.",
          "order": 3
        },
        {
          "certification": "Restricted Screening",
          "meaning": "Film needs a certain restriction in screening or advertisement as it is considered a highly bad influence to universal human dignity, social value, good customs or national emotion due to excessive expression of nudity, violence, social behavior, etc. (technically not an age restriction but films with this rating may only be screened at \"adults only\" theatres, with the age of majority set at 19).",
          "order": 4
        }
      ],
      "SK": [
        {
          "certification": "U",
          "meaning": "General audience.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Not recommended for children younger than 7 years.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "Not recommended for people younger than 12 years.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Not recommended for people younger than 15 years.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Prohibited for minors under 18 years of age.",
          "order": 5
        }
      ],
      "TH": [
        {
          "certification": "P",
          "meaning": "Educational.",
          "order": 1
        },
        {
          "certification": "G",
          "meaning": "General audience",
          "order": 2
        },
        {
          "certification": "13",
          "meaning": "Suitable for viewers aged 13 years and over.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Suitable for viewers aged 15 years and over",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Suitable for viewers aged 18 years and over.",
          "order": 5
        },
        {
          "certification": "20",
          "meaning": "Content is unsuitable for viewers aged under 20",
          "order": 6
        },
        {
          "certification": "Banned",
          "meaning": "Films that are not allowed to screen publicly in Thailand",
          "order": 7
        }
      ],
      "MX": [
        {
          "certification": "AA",
          "meaning": "Informative-only rating: Understandable for children under 7 years.",
          "order": 1
        },
        {
          "certification": "A",
          "meaning": "Information-only rating: For all age groups.",
          "order": 2
        },
        {
          "certification": "B",
          "meaning": "Information-only rating: For adolescents 12 years and older.",
          "order": 3
        },
        {
          "certification": "B-15",
          "meaning": "Information-only rating: Not recommended for children under 15.",
          "order": 4
        },
        {
          "certification": "C",
          "meaning": "Restrictive rating: For adults 18 and older.",
          "order": 5
        },
        {
          "certification": "D",
          "meaning": "Restrictive rating: Adult movies (legally prohibited to those under 18 years of age).",
          "order": 6
        }
      ],
      "ID": [
        {
          "certification": "SU",
          "meaning": "All ages.",
          "order": 1
        },
        {
          "certification": "13+",
          "meaning": "Suitable for ages 13 and above.",
          "order": 2
        },
        {
          "certification": "17+",
          "meaning": "Suitable for ages 17 and above.",
          "order": 3
        },
        {
          "certification": "21+",
          "meaning": "Suitable for ages 21 and above.",
          "order": 4
        }
      ],
      "TR": [
        {
          "certification": "Genel İzleyici Kitlesi",
          "meaning": "General audience.",
          "order": 1
        },
        {
          "certification": "6A",
          "meaning": "Viewers under the age of 6 may watch with accompanying family members.",
          "order": 2
        },
        {
          "certification": "6+",
          "meaning": "Suitable for viewers aged 6 and over.",
          "order": 3
        },
        {
          "certification": "10A",
          "meaning": "Viewers under the age of 10 may watch with accompanying family members.",
          "order": 4
        },
        {
          "certification": "10+",
          "meaning": "Suitable for viewers aged 10 and over.",
          "order": 5
        },
        {
          "certification": "13A",
          "meaning": "Viewers under the age of 13 may watch with accompanying family members.",
          "order": 6
        },
        {
          "certification": "13+",
          "meaning": "Suitable for viewers aged 13 and over.",
          "order": 7
        },
        {
          "certification": "16+",
          "meaning": "Suitable for viewers aged 16 and over.",
          "order": 8
        },
        {
          "certification": "18+",
          "meaning": "Suitable for viewers aged 18 and over.",
          "order": 9
        }
      ],
      "AR": [
        {
          "certification": "ATP",
          "meaning": "For all public.",
          "order": 1
        },
        {
          "certification": "+13",
          "meaning": "Suitable for 13-year-olds and over. Children under the age of 13 are admitted if accompanied by an adult.",
          "order": 2
        },
        {
          "certification": "+16",
          "meaning": "Suitable for 16-year-olds and over.",
          "order": 3
        },
        {
          "certification": "+18",
          "meaning": "Suitable for 18-year-olds and over.",
          "order": 4
        },
        {
          "certification": "C",
          "meaning": "Suitable for 18-year-olds and over. Restricted to specially licensed venues.",
          "order": 5
        }
      ],
      "GR": [
        {
          "certification": "K",
          "meaning": "No restrictions.",
          "order": 1
        },
        {
          "certification": "K12",
          "meaning": "The film may contain mild violence and adult themes. Suitable for people aged 13 and above.",
          "order": 2
        },
        {
          "certification": "K15",
          "meaning": "The film may contain violence, drug abuse, and softcore pornographic scenes. An ID card certifying the age is required in all Greek cinemas and video rental shops in order to get a cinema ticket or rent a video of a ",
          "order": 3
        },
        {
          "certification": "K18",
          "meaning": "Not permitted to people under the age of 18.",
          "order": 4
        }
      ],
      "TW": [
        {
          "certification": "0+",
          "meaning": "Viewing is permitted for audiences of all ages.",
          "order": 1
        },
        {
          "certification": "6+",
          "meaning": "Viewing is not permitted for children under 6; children between 6 and 11 shall be accompanied and given guidance by parents, teachers, seniors, or adult relatives or friends.",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "Viewing is not permitted for children under 12.",
          "order": 3
        },
        {
          "certification": "15+",
          "meaning": "Viewing is not permitted for those under 15.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "Viewing is not permitted for those under 18.",
          "order": 5
        }
      ],
      "ZA": [
        {
          "certification": "A",
          "meaning": "Suitable for all.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental Guidance.",
          "order": 2
        },
        {
          "certification": "7-9PG",
          "meaning": "Not suitable for children under the age of 7. Children aged 7–9 years old may not be admitted unless accompanied by an adult.",
          "order": 3
        },
        {
          "certification": "10-12PG",
          "meaning": "Not suitable for children under the age of 10. Children aged 10–12 years old may not be admitted unless accompanied by an adult.",
          "order": 4
        },
        {
          "certification": "13",
          "meaning": "Not suitable for children under the age of 13.",
          "order": 5
        },
        {
          "certification": "16",
          "meaning": "Not suitable for persons under the age of 16.",
          "order": 6
        },
        {
          "certification": "18",
          "meaning": "Not suitable for persons under the age of 18.",
          "order": 7
        },
        {
          "certification": "X18",
          "meaning": "No one under 18 admitted; restricted to licensed adult premises.",
          "order": 8
        },
        {
          "certification": "XX",
          "meaning": "Must not be distributed or exhibited in public.",
          "order": 9
        }
      ],
      "SG": [
        {
          "certification": "G",
          "meaning": "Suitable for all ages.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Suitable for all but parents should guide their young.",
          "order": 2
        },
        {
          "certification": "PG13",
          "meaning": "Suitable for persons aged 13 and above but parental guidance is advised for children below 13.",
          "order": 3
        },
        {
          "certification": "NC16",
          "meaning": "Suitable for persons aged 16 and above.",
          "order": 4
        },
        {
          "certification": "M18",
          "meaning": "Suitable for persons aged 18 and above.",
          "order": 5
        },
        {
          "certification": "R21",
          "meaning": "Suitable for adults aged 21 and above (restricted to licensed cinemas).",
          "order": 6
        }
      ],
      "IE": [
        {
          "certification": "G",
          "meaning": "Suitable for children of school going age (note: children can be enrolled in school from the age of 4).",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Suitable for children over the age of 8. Parental guidance is recommended for children under the age of 12.",
          "order": 2
        },
        {
          "certification": "12A",
          "meaning": "Suitable for viewers of 12 and over. Younger children may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 3
        },
        {
          "certification": "15A",
          "meaning": "Suitable for viewers of 15 and over. Younger viewers may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Suitable for viewers of 16 and over. Younger viewers are not admitted.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Suitable only for adults. Viewers under 18 are not admitted at cinemas or permitted to purchase/rent the video.",
          "order": 6
        },
        {
          "certification": "12",
          "meaning": "Suitable for viewers of 12 and over. Younger children may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Suitable for viewers of 15 and over. Younger viewers may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 4
        }
      ],
      "PR": [
        {
          "certification": "G",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "PG-13",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "R",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "NC-17",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        }
      ],
      "JP": [
        {
          "certification": "G",
          "meaning": "General, suitable for all ages.",
          "order": 1
        },
        {
          "certification": "PG12",
          "meaning": "Parental guidance requested for young people under 12 years.",
          "order": 2
        },
        {
          "certification": "R15+",
          "meaning": "No one under 15 admitted.",
          "order": 3
        },
        {
          "certification": "R18+",
          "meaning": "No one under 18 admitted.",
          "order": 4
        }
      ],
      "VI": [
        {
          "certification": "G",
          "meaning": "All ages admitted.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Some material may not be suitable for children.",
          "order": 2
        },
        {
          "certification": "PG-13",
          "meaning": "Some material may be inappropriate for children under 13.",
          "order": 3
        },
        {
          "certification": "R",
          "meaning": "Under 17 requires accompanying parent or adult guardian.",
          "order": 4
        },
        {
          "certification": "NC-17",
          "meaning": "No one 17 and under admitted.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        }
      ],
      "CH": [
        {
          "certification": "0",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "8",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "10",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "12",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "14",
          "meaning": "",
          "order": 6
        },
        {
          "certification": "16",
          "meaning": "",
          "order": 7
        },
        {
          "certification": "18",
          "meaning": "",
          "order": 8
        }
      ],
      "IL": [
        {
          "certification": "All",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "14",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "",
          "order": 5
        }
      ],
      "HK": [
        {
          "certification": "I",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "IIA",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "IIB",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "III",
          "meaning": "",
          "order": 4
        }
      ],
      "MO": [
        {
          "certification": "A",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "B",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "C",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "D",
          "meaning": "",
          "order": 4
        }
      ],
      "LV": [
        {
          "certification": "U",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "7+",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "16+",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "",
          "order": 5
        }
      ],
      "LU": [
        {
          "certification": "EA",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "",
          "order": 5
        }
      ],
      "CZ": [
        {
          "certification": "UR",
          "meaning": "Not rated.",
          "order": 0
        },
        {
          "certification": "U",
          "meaning": "No age limit.",
          "order": 1
        },
        {
          "certification": "12+",
          "meaning": "Unsuitable for persons under the age of 12.",
          "order": 2
        },
        {
          "certification": "15+",
          "meaning": "Unsuitable for persons under the age of 15.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Unsuitable for persons under the age of 18.",
          "order": 4
        }
      ]
    }
  });
});

router.get('/certification/tv/list', function(req, res, next) {
  res.json({
    "certifications": {
      "AU": [
        {
          "certification": "P",
          "meaning": "Programming is intended for younger children 2–11; commercial stations must show at least 30 minutes of P-rated content each weekday and weekends at all times. No advertisements may be shown during P-rated programs.",
          "order": 1
        },
        {
          "certification": "C",
          "meaning": "Programming intended for older children 5–14; commercial stations must show at least 30 minutes of C-rated content each weekday between 7 a.m. and 8 a.m. or between 4 p.m. and 8:30 p.m. A further 2 and a half ours a week must also be shown either within these time bands or between 7 a.m. and 8:30 p.m. on weekends and school holidays, for a total of five hours a week (averaged as 260 hours over the course of a year). C-rated content is subject to certain restrictions and limitations on advertising (typically five minutes maximum per 30-minute period or seven minutes including promotions and community announcements).",
          "order": 2
        },
        {
          "certification": "G",
          "meaning": "For general exhibition; all ages are permitted to watch programming with this rating.",
          "order": 3
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance is recommended for young viewers; PG-rated content may air at any time on digital-only channels, otherwise, it should only be broadcast between 8:30 a.m. and 4:00 p.m. and between 7:00 p.m. and 6:00 a.m. on weekdays, and between 10:00 a.m. and 6:00 a.m. on weekends.",
          "order": 4
        },
        {
          "certification": "M",
          "meaning": "Recommended for mature audiences; M-rated content may only be broadcast between 8:30 p.m. and 5:00 a.m. on any day, and additionally between 12:00 p.m. and 3:00 p.m. on schooldays.",
          "order": 5
        },
        {
          "certification": "MA 15+",
          "meaning": "Not suitable for children and teens under 15; MA15+-rated programming may only be broadcast between 9:00 p.m. and 5:00 a.m. on any given day. Consumer advice is mandatory. Some R18+ rated movies on DVD/Blu-ray are often re-edited on free TV/cable channels to secure a more ",
          "order": 6
        },
        {
          "certification": "AV 15+",
          "meaning": "Not suitable for children and teens under 15; this is the same as the MA15+ rating, except the ",
          "order": 7
        },
        {
          "certification": "R 18+",
          "meaning": "Not for children under 18; this is limited to Adult ",
          "order": 8
        }
      ],
      "BR": [
        {
          "certification": "14",
          "meaning": "Content suitable for viewers over the age of 14.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Content suitable for viewers over the age of 16.",
          "order": 4
        },
        {
          "certification": "L",
          "meaning": "Content is suitable for all audiences.",
          "order": 0
        },
        {
          "certification": "10",
          "meaning": "Content suitable for viewers over the age of 10.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Content suitable for viewers over the age of 12.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "Content suitable for viewers over the age of 18.",
          "order": 5
        }
      ],
      "CA": [
        {
          "certification": "Exempt",
          "meaning": "Shows which are exempt from ratings (such as news and sports programming) will not display an on-screen rating at all.",
          "order": 1
        },
        {
          "certification": "C",
          "meaning": "Programming suitable for children ages of 2–7 years. No profanity or sexual content of any level allowed. Contains little violence.",
          "order": 2
        },
        {
          "certification": "C8",
          "meaning": "Suitable for children ages 8+. Low level violence and fantasy horror is allowed. No foul language is allowed, but occasional ",
          "order": 3
        },
        {
          "certification": "G",
          "meaning": "Suitable for general audiences. Programming suitable for the entire family with mild violence, and mild profanity and/or censored language.",
          "order": 4
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance. Moderate violence and moderate profanity is allowed, as is brief nudity and sexual references if important to the context of the story.",
          "order": 5
        },
        {
          "certification": "14+",
          "meaning": "Programming intended for viewers ages 14 and older. May contain strong violence and strong profanity, and depictions of sexual activity as long as they are within the context of a story.",
          "order": 6
        },
        {
          "certification": "18+",
          "meaning": "Programming intended for viewers ages 18 and older. May contain explicit violence and sexual activity. Programming with this rating cannot air before the watershed (9:00 p.m. to 6:00 a.m.).",
          "order": 7
        }
      ],
      "CA-QC": [
        {
          "certification": "18+",
          "meaning": "Only to be viewed by adults and may contain extreme violence and graphic sexual content. It is mostly used for 18+ movies and pornography.",
          "order": 5
        },
        {
          "certification": "13+",
          "meaning": "Appropriate – suitable for children 13 and up and may contain with moderate violence, language, and some sexual situations.",
          "order": 3
        },
        {
          "certification": "8+",
          "meaning": "Appropriate for children 8 and up may contain with little violence, language, and little to no sexual situations.",
          "order": 2
        },
        {
          "certification": "16+",
          "meaning": "Recommended for children over the age of 16 and may contain with strong violence, strong language, and strong sexual content.",
          "order": 4
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "G",
          "meaning": "Appropriate for all ages and must contain little or no violence and little to no sexual content.",
          "order": 1
        }
      ],
      "DE": [
        {
          "certification": "0",
          "meaning": "Can be aired at any time.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Can be aired at any time.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "The broadcaster must take the decision about the air time by taking in consideration the impact on young children in the timeframe from 6:00am to 8:00pm.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Can be aired only from 10:00pm Uhr to 6:00am.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Can be aired only from 11:00pm Uhr to 6:00am.",
          "order": 5
        }
      ],
      "ES": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "ERI",
          "meaning": "Specially recommended for younger children.",
          "order": 1
        },
        {
          "certification": "TP",
          "meaning": "For general viewing.",
          "order": 2
        },
        {
          "certification": "7",
          "meaning": "Not recommended for viewers under the age of 7.",
          "order": 3
        },
        {
          "certification": "10",
          "meaning": "Not recommended for viewers under the age of 10.",
          "order": 4
        },
        {
          "certification": "12",
          "meaning": "Not recommended for viewers under the age of 12.",
          "order": 5
        },
        {
          "certification": "13",
          "meaning": "Not recommended for viewers under the age of 13.",
          "order": 6
        },
        {
          "certification": "16",
          "meaning": "Not recommended for viewers under the age of 16.",
          "order": 7
        },
        {
          "certification": "18",
          "meaning": "Not recommended for viewers under the age of 18.",
          "order": 8
        }
      ],
      "FR": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "10",
          "meaning": "Not recommended for children under 10. Not allowed in children's television series.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Not recommended for children under 12. Not allowed air before 10:00 p.m. Some channels and programs are subject to exception.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Not recommended for children under 16. Not allowed air before 10:30 p.m. Some channels and programs are subject to exception.",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "Not recommended for persons under 18. Allowed between midnight and 5 a.m. and only in some channels, access to these programs is locked by a personal password.",
          "order": 4
        }
      ],
      "GB": [
        {
          "certification": "U",
          "meaning": "The U symbol stands for Universal. A U film should be suitable for audiences aged four years and over.",
          "order": 0
        },
        {
          "certification": "PG",
          "meaning": "PG stands for Parental Guidance. This means a film is suitable for general viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older.",
          "order": 1
        },
        {
          "certification": "12A",
          "meaning": "Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. 12A requires an adult to accompany any child under 12 seeing a 12A film at the cinema.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "No-one under 15 is allowed to see a 15 film at the cinema or buy/rent a 15 rated video. 15 rated works are not suitable for children under 15 years of age.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Films rated 18 are for adults. No-one under 18 is allowed to see an 18 film at the cinema or buy / rent an 18 rated video. No 18 rated works are suitable for children.",
          "order": 5
        },
        {
          "certification": "R18",
          "meaning": "The R18 category is a special and legally-restricted classification primarily for explicit works of consenting sex or strong fetish material involving adults.",
          "order": 6
        }
      ],
      "HU": [
        {
          "certification": "Unrated",
          "meaning": "Without age restriction.",
          "order": 1
        },
        {
          "certification": "Children",
          "meaning": "Programs recommended for children. It is an optional rating, there is no obligation for broadcasters to indicate it.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Programs not recommended for teens and children below the age of 16, may contain more intensive violence and sexual content. A yellow circle with the number 16 written inside is used for this rating.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "The program is recommended only for adult viewers (for ages 18 and up), may contain explicit violence and explicit sexual content. A red circle with the number 18 written inside is used for this rating (the red circle was also used until 2002, but it did not contain any number in it).",
          "order": 6
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "6",
          "meaning": "Programs not recommended for children below the age of 6, may not contain any violence or sexual content. A yellow circle with the number 6 written inside is used for this rating.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Programs not recommended for children below the age of 12, may contain light sexual content or explicit language. Most films without serious violence or sexual content fit into this category as well. A yellow circle with the number 12 written inside is used for this rating.",
          "order": 4
        }
      ],
      "KR": [
        {
          "certification": "Exempt",
          "meaning": "This rating is only for knowledge based game shows; lifestyle shows; documentary shows; news; current topic discussion shows; education/culture shows; sports that excludes MMA or other violent sports; and other programs that Korea Communications Standards Commission recognizes.",
          "order": 1
        },
        {
          "certification": "ALL",
          "meaning": "This rating is for programming that is appropriate for all ages. This program usually involves programs designed for children or families.",
          "order": 2
        },
        {
          "certification": "7",
          "meaning": "This rating is for programming that may contain material inappropriate for children younger than 7, and parental discretion should be used. Some cartoon programming not deemed strictly as ",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "This rating is for programs that may deemed inappropriate for those younger than 12, and parental discretion should be used. Usually used for animations that have stronger themes or violence then those designed for children, or for reality shows that have mild violence, themes, or language.",
          "order": 4
        },
        {
          "certification": "15",
          "meaning": "This rating is for programs that contain material that may be inappropriate for children under 15, and that parental discretion should be used. Examples include most dramas, and talk shows on OTA (over-the-air) TV (KBS, MBC, SBS), and many American TV shows/dramas on Cable TV channels like OCN and OnStyle. The programs that have this rating may include moderate or strong adult themes, language, sexual inference, and violence. As with the TV-MA rating in North America, this rating is commonly applied to live events where the occurrence of inappropriate dialogue is unpredictable. Since 2007, this rating is the most used rating for TV.",
          "order": 5
        },
        {
          "certification": "19",
          "meaning": "This rating is for programs that are intended for adults only. 19-rated programming cannot air during the hours of 7:00AM to 9:00AM, and 1:00PM to 10:00PM. Programmes that receive this rating will almost certainly have adult themes, sexual situations, frequent use of strong language and disturbing scenes of violence.",
          "order": 6
        }
      ],
      "LT": [
        {
          "certification": "S",
          "meaning": "Intended for adult viewers from the age of 18 (corresponding to the age-appropriate index N-18) and broadcast between 23 (11pm) and 6 (6am) hours; Limited to minors and intended for adult audiences.",
          "order": 3
        },
        {
          "certification": "N-14",
          "meaning": "Intended for viewers from 14 years of age and broadcast from 21 (9pm) to 6 (6am) hours.",
          "order": 2
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "N-7",
          "meaning": "Intended for viewers from 7 years old.",
          "order": 1
        }
      ],
      "NL": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "AL",
          "meaning": "Not harmful / All Ages.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Take care with children under 6.",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "Take care with children under 9.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Take care with children under 12.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Take care with children under 16.",
          "order": 6
        },
        {
          "certification": "14",
          "meaning": "Take care with children under 14.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Take care with children under 18.",
          "order": 7
        }
      ],
      "PH": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "G",
          "meaning": "Suitable for all ages. Material for television, which in the judgment of the Board does not contain anything unsuitable for children.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance suggested. Material for television, which, in the judgment of the Board, may contain some adult material that may be permissible for children to watch but only under the guidance and supervision of a parent or adult.",
          "order": 2
        },
        {
          "certification": "SPG",
          "meaning": "Stronger and more vigilant parental guidance is suggested. Programs classified as “SPG” may contain more serious topic and theme, which may not be advisable for children to watch except under the very vigilant guidance and presence of a parent or an adult.",
          "order": 3
        },
        {
          "certification": "X",
          "meaning": "Any television program that does not conform to the “G”, “PG”, and “SPG” classification shall be disapproved for television broadcast.",
          "order": 4
        }
      ],
      "PT": [
        {
          "certification": "12AP",
          "meaning": "Acompanhamento Parental (may not be suitable for children under 12, parental guidance advised).",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "Not suitable for children under 18.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "16",
          "meaning": "Not suitable for children under 16, access to these programs is locked by a personal password.",
          "order": 4
        },
        {
          "certification": "T",
          "meaning": "Todos (suitable for all).",
          "order": 1
        },
        {
          "certification": "10AP",
          "meaning": "Acompanhamento Parental (may not be suitable for children under 10, parental guidance advised).",
          "order": 2
        }
      ],
      "RU": [
        {
          "certification": "16+",
          "meaning": "Only teens the age of 16 or older can watch.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "Restricted to People 18 or Older.",
          "order": 5
        },
        {
          "certification": "6+",
          "meaning": "Only kids the age of 6 or older can watch.",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "Only kids the age of 12 or older can watch.",
          "order": 3
        },
        {
          "certification": "0+",
          "meaning": "Can be watched by Any Age.",
          "order": 1
        }
      ],
      "SK": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "7",
          "meaning": "Content suitable for children over 6 years.",
          "order": 2
        },
        {
          "certification": "U",
          "meaning": "Content suitable for all children.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Content suitable for children over 12 years.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Content suitable for teens over 15 years.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Content exclusively for adults.",
          "order": 5
        }
      ],
      "TH": [
        {
          "certification": "ส",
          "meaning": "Sor - Educational movies which the public should be encouraged to see.",
          "order": 1
        },
        {
          "certification": "ท",
          "meaning": "Tor - G Movies appropriate for the general public. No sex, abusive language or violence.",
          "order": 2
        },
        {
          "certification": "น 13+",
          "meaning": "Nor 13+ Movies appropriate for audiences aged 13 and older.",
          "order": 3
        },
        {
          "certification": "น 15+",
          "meaning": "Nor 15+ Movies appropriate for audiences aged 15 and older. Some violence, brutality, inhumanity, bad language or indecent gestures allowed.",
          "order": 4
        },
        {
          "certification": "น 18+",
          "meaning": "Nor 18+ Movies appropriate for audiences aged 18 and older.",
          "order": 5
        },
        {
          "certification": "ฉ 20-",
          "meaning": "Chor 20 - Movies prohibited for audiences aged below 20.",
          "order": 6
        },
        {
          "certification": "-",
          "meaning": "Banned.",
          "order": 7
        }
      ],
      "US": [
        {
          "certification": "TV-MA",
          "meaning": "This program is specifically designed to be viewed by adults and therefore may be unsuitable for children under 17.",
          "order": 6
        },
        {
          "certification": "TV-Y",
          "meaning": "This program is designed to be appropriate for all children.",
          "order": 1
        },
        {
          "certification": "TV-14",
          "meaning": "This program contains some material that many parents would find unsuitable for children under 14 years of age.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "TV-PG",
          "meaning": "This program contains material that parents may find unsuitable for younger children.",
          "order": 4
        },
        {
          "certification": "TV-Y7",
          "meaning": "This program is designed for children age 7 and above.",
          "order": 2
        },
        {
          "certification": "TV-G",
          "meaning": "Most parents would find this program suitable for all ages.",
          "order": 3
        }
      ],
      "IT": [
        {
          "certification": "T",
          "meaning": "All ages admitted.",
          "order": 1
        },
        {
          "certification": "BA",
          "meaning": "Parental guidance suggested.",
          "order": 2
        },
        {
          "certification": "VM12",
          "meaning": "Not recommended for children under 12.",
          "order": 3
        },
        {
          "certification": "VM14",
          "meaning": "Not recommended for children under 14.",
          "order": 4
        },
        {
          "certification": "VM18",
          "meaning": "Not recommended for children under 18.",
          "order": 5
        }
      ],
      "FI": [
        {
          "certification": "S",
          "meaning": "Allowed at all times.",
          "order": 0
        },
        {
          "certification": "K7",
          "meaning": "Not allowed air before 7:00 a.m., not recommended for children under 7.",
          "order": 1
        },
        {
          "certification": "K12",
          "meaning": "Not allowed air before 5:00 p.m., not recommended for children under 12.",
          "order": 2
        },
        {
          "certification": "K16",
          "meaning": "Not allowed air before 9:00 p.m., not recommended for children under 16.",
          "order": 3
        },
        {
          "certification": "K18",
          "meaning": "Not allowed air before 11:00 p.m., not recommended for children under 18.",
          "order": 4
        }
      ],
      "MY": [
        {
          "certification": "U",
          "meaning": "No age limit. Can be broadcast anytime.",
          "order": 1
        },
        {
          "certification": "P13",
          "meaning": "Viewers under 13 years of age need parental/guardian supervision while viewing. Can be broadcast anytime, but some elements may only be broadcast at night.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "For viewers 18 and above. Cannot be broadcast before 10:00 PM.",
          "order": 3
        }
      ],
      "NZ": [
        {
          "certification": "G",
          "meaning": "Approved for general viewing.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental Guidance recommended for younger viewers.",
          "order": 2
        },
        {
          "certification": "M",
          "meaning": "Suitable for mature audiences 16 years and over.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "People under 16 years should not view.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "People under 18 years should not view.",
          "order": 5
        }
      ],
      "NO": [
        {
          "certification": "A",
          "meaning": "Allowed at all times.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Allowed at all times.",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "Allowed at all times.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Only allowed during the period 19.00 – 05.30.",
          "order": 4
        },
        {
          "certification": "15",
          "meaning": "Only allowed during the period 21.00 – 05.30.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Only allowed during the period 21.00 – 05.30.",
          "order": 6
        }
      ],
      "BG": [
        {
          "certification": "Unrated",
          "meaning": "Can be viewed for each age.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Content suitable for viewers over the age of 12.",
          "order": 2
        },
        {
          "certification": "14",
          "meaning": "Content suitable for viewers over the age of 14.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Content suitable for viewers over the age of 16.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Content suitable for viewers over the age of 18. Not allowed before 23:00.",
          "order": 5
        }
      ],
      "MX": [
        {
          "certification": "AA",
          "meaning": "Aimed at children (can be broadcast anytime).",
          "order": 1
        },
        {
          "certification": "A",
          "meaning": "Appropriate for all ages.",
          "order": 2
        },
        {
          "certification": "B",
          "meaning": "Designed for ages 12 and older (allowed only between 16:00 and 05:59).",
          "order": 3
        },
        {
          "certification": "B-15",
          "meaning": "Designed for ages 15 and up (allowed only between 19:00 and 05:59).",
          "order": 4
        },
        {
          "certification": "C",
          "meaning": "Designed to be viewed by adults aged 18 or older (allowed only between 21:00 and 05:59).",
          "order": 5
        },
        {
          "certification": "D",
          "meaning": "Exclusively for adults aged 18 or older (allowed only between midnight and 05:00).",
          "order": 6
        }
      ],
      "IN": [
        {
          "certification": "U",
          "meaning": "Viewable for all ages.",
          "order": 1
        },
        {
          "certification": "U/A 7+",
          "meaning": "Viewable for 7 and above years old.",
          "order": 2
        },
        {
          "certification": "U/A 13+",
          "meaning": "Viewable for 13 and above years old.",
          "order": 3
        },
        {
          "certification": "U/A 16+",
          "meaning": "Viewable for 16 and above years old.",
          "order": 4
        },
        {
          "certification": "A",
          "meaning": "Viewable only for adults.",
          "order": 5
        }
      ],
      "DK": [
        {
          "certification": "A",
          "meaning": "Suitable for a general audience.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Not recommended for children under 7.",
          "order": 2
        },
        {
          "certification": "11",
          "meaning": "For ages 11 and up.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "For ages 15 and up.",
          "order": 4
        }
      ],
      "SE": [
        {
          "certification": "Btl",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "Från 7 år",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "Från 11 år",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "Från 15 år",
          "meaning": "",
          "order": 4
        }
      ],
      "ID": [
        {
          "certification": "SU",
          "meaning": "Suitable for general audiences over the age of 2 years.",
          "order": 1
        },
        {
          "certification": "P",
          "meaning": "Suitable for pre-school children from ages 2 through 6.",
          "order": 2
        },
        {
          "certification": "A",
          "meaning": "Suitable for children from ages 7 through 12.",
          "order": 3
        },
        {
          "certification": "R",
          "meaning": "Suitable for teens from ages 13 through 17.",
          "order": 4
        },
        {
          "certification": "D",
          "meaning": "Suitable for viewers over 18 and older. Programmes with this rating are aired from 10.00 PM to 03.00 AM.",
          "order": 5
        }
      ],
      "TR": [
        {
          "certification": "Genel İzleyici",
          "meaning": "General audience. Suitable for all ages.",
          "order": 1
        },
        {
          "certification": "7+",
          "meaning": "Suitable for ages 7 and over.",
          "order": 2
        },
        {
          "certification": "13+",
          "meaning": "Suitable for ages 13 and over.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Suitable for ages 18 and over.",
          "order": 4
        }
      ],
      "AR": [
        {
          "certification": "ATP",
          "meaning": "Suitable for all audiences.",
          "order": 1
        },
        {
          "certification": "SAM 13",
          "meaning": "Suitable for ages 13 and up.",
          "order": 2
        },
        {
          "certification": "SAM 16",
          "meaning": "Suitable for ages 16 and up.",
          "order": 3
        },
        {
          "certification": "SAM 18",
          "meaning": "Suitable for ages 18 and up.",
          "order": 4
        }
      ],
      "PL": [
        {
          "certification": "0",
          "meaning": "Positive or neutral view of the world, little to no violence, non-sexual love, and no sexual content.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "As above; may additionally contain some mild language, bloodless violence, and a more negative view of the world.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "May contain some foul language, some violence, and some sexual content.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Deviant social behaviour, world filled with violence and sexuality, simplified picture of adulthood, display of physical force, especially in controversial social context (against or by parents, teachers, etc.), immoral behaviour without ethic dilemma, putting the blame on the victim, excessive concentration on material possessions.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "One-sided display of the joys of adult life without showing responsibilities (e.g. work), social justification of violent behaviour, excessive vulgarity, use of racial slurs and social stereotypes, explicit sexual content, praise of aggression or vulgarity, access to these programs is locked by a personal password.",
          "order": 5
        }
      ],
      "MA": [
        {
          "certification": "NR",
          "meaning": "All audiences.",
          "order": 0
        },
        {
          "certification": "10",
          "meaning": "Not recommended for under 10.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Not recommended for under 12.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Not recommended for under 16.",
          "order": 3
        }
      ],
      "GR": [
        {
          "certification": "K",
          "meaning": "Suitable for all ages.",
          "order": 1
        },
        {
          "certification": "8",
          "meaning": "Suitable for ages 8 and up (allowed only 30 minutes after the kid-friendly zone).",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "Suitable for ages 12 and up (allowed only between 9:30 p.m. and 6:00 a.m., or between 10:00 p.m. and 6:00 a.m. during Fridays, Saturdays and school holidays).",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Suitable for ages 16 and up (allowed only between 11:00 p.m. and 6:00 a.m.).",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Suitable for ages 18 and up (allowed only between 1:00 a.m. and 6:00 a.m.).",
          "order": 5
        }
      ],
      "IL": [
        {
          "certification": "E",
          "meaning": "Exempt from classification. This rating is usually applied to live broadcasts.",
          "order": 1
        },
        {
          "certification": "G",
          "meaning": "General Audiences. Anyone, regardless of age, can watch the programme.",
          "order": 1
        },
        {
          "certification": "12+",
          "meaning": "Suitable for children 12 and over only.",
          "order": 2
        },
        {
          "certification": "15+",
          "meaning": "Suitable for teens 15 and over only.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Suitable for adults 18 and over only.",
          "order": 4
        }
      ],
      "TW": [
        {
          "certification": "0+",
          "meaning": "Suitable for watching by general audiences.",
          "order": 1
        },
        {
          "certification": "6+",
          "meaning": "Not suitable for viewing by children under the age of six; children over six and under the age of twelve can view if accompanied by parents, teacher or an adult relative.",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "Not suitable for viewing by children under the age of twelve, split from the former rating Parental Guidance.",
          "order": 3
        },
        {
          "certification": "15+",
          "meaning": "Not suitable for viewing by people under the age of fifteen, split from the former rating Parental Guidance.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "Not suitable for viewing by people under the age of eighteen.",
          "order": 4
        }
      ],
      "ZA": [
        {
          "certification": "All",
          "meaning": "This is a programme/film that does not contain any obscenity, and is suitable for family viewing. A logo must be displayed in the corner of the screen for 30 seconds after each commercial break.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Children under 6 may watch this programme/film, but must be accompanied by an adult. This program contains an adult related theme, which might include very mild language, violence and sexual innuendo. A logo must be displayed in the corner of the screen for one minute after each commercial break.",
          "order": 2
        },
        {
          "certification": "13",
          "meaning": "Children under 13 are prohibited from watching this programme/film. This programme contains mild language, violence and sexual innuendo. A logo must be displayed in the corner of the screen for two minutes after each commercial break.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Children under 16 are prohibited from watching this programme/film. It contains moderate violence, language, and some sexual situations. In the case of television, this programme may only be broadcast after 9pm–4:30am. A logo must be displayed in the corner of the screen for five minutes after each commercial break. A full-screen warning must be issued before the start of the programme. If the programme is longer than an hour, a warning must be displayed every half an hour.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Children under 18 are prohibited from watching this programme/film. It contains extreme violence, language and/or graphic sexual content. In the case of television, this program may only be broadcast from 10pm–4:30am. A logo must be displayed in the corner of the screen for the duration of the programme. A full-screen warning must be issued before the start of the programme and after each commercial break.",
          "order": 5
        },
        {
          "certification": "X18",
          "meaning": "This is reserved for films of an extreme sexual nature (pornography). X18 films may only be distributed in the form of video and DVD in a controlled environment (e.g. adult shops). No public viewing of this film may take place. X18 films may not be broadcast on television and in cinemas. This has been breached twice by e.tv, where the softcore (borderline hardcore) Emmanuelle was screened. The X18 rating does not refer to child pornography/child sexual abuse—due to being banned by the Film and Publication Board.",
          "order": 6
        }
      ],
      "SG": [
        {
          "certification": "G",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "PG13",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "NC16",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "M18",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "R21",
          "meaning": "Suitable for adults aged 21 and above.",
          "order": 6
        }
      ],
      "PR": [
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        },
        {
          "certification": "TV-MA",
          "meaning": "",
          "order": 6
        },
        {
          "certification": "TV-Y",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "TV-Y7",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "TV-G",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "TV-PG",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "TV-14",
          "meaning": "",
          "order": 5
        }
      ],
      "VI": [
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        },
        {
          "certification": "TV-Y",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "TV-Y7",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "TV-G",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "TV-PG",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "TV-14",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "TV-MA",
          "meaning": "",
          "order": 6
        }
      ]
    }
  });
});

router.get('/movie/changes', function(req, res, next) {
  res.json({
    "results": [
      {
        "id": 1178677,
        "adult": false
      },
      {
        "id": 194143,
        "adult": false
      },
      {
        "id": 901193,
        "adult": false
      },
      {
        "id": 213,
        "adult": false
      },
      {
        "id": null,
        "adult": null
      },
      {
        "id": 1206599,
        "adult": false
      },
      {
        "id": 1206583,
        "adult": false
      },
      {
        "id": 1204674,
        "adult": false
      },
      {
        "id": 1190229,
        "adult": false
      },
      {
        "id": 1195952,
        "adult": false
      },
      {
        "id": 1206286,
        "adult": false
      },
      {
        "id": 1146313,
        "adult": false
      },
      {
        "id": 788532,
        "adult": false
      },
      {
        "id": 870359,
        "adult": false
      },
      {
        "id": 1113300,
        "adult": false
      },
      {
        "id": 1175995,
        "adult": false
      },
      {
        "id": 1176000,
        "adult": false
      },
      {
        "id": 1176261,
        "adult": false
      },
      {
        "id": 1176318,
        "adult": false
      },
      {
        "id": 1176700,
        "adult": false
      },
      {
        "id": 1177152,
        "adult": false
      },
      {
        "id": 1192186,
        "adult": false
      },
      {
        "id": 1192189,
        "adult": false
      },
      {
        "id": 1192856,
        "adult": false
      },
      {
        "id": 1196991,
        "adult": false
      },
      {
        "id": 1199400,
        "adult": false
      },
      {
        "id": 1202892,
        "adult": false
      },
      {
        "id": 1203564,
        "adult": false
      },
      {
        "id": 1205078,
        "adult": false
      },
      {
        "id": 1205612,
        "adult": false
      },
      {
        "id": 1120016,
        "adult": false
      },
      {
        "id": 1186957,
        "adult": false
      },
      {
        "id": 1192548,
        "adult": false
      },
      {
        "id": 1198730,
        "adult": false
      },
      {
        "id": 1205651,
        "adult": false
      },
      {
        "id": 1203663,
        "adult": false
      },
      {
        "id": 1130766,
        "adult": false
      },
      {
        "id": 1206403,
        "adult": false
      },
      {
        "id": 1206574,
        "adult": false
      },
      {
        "id": 1206227,
        "adult": false
      },
      {
        "id": 1206399,
        "adult": false
      },
      {
        "id": 1206411,
        "adult": false
      },
      {
        "id": 1196489,
        "adult": false
      },
      {
        "id": 1152908,
        "adult": false
      },
      {
        "id": 1206337,
        "adult": false
      },
      {
        "id": 1202839,
        "adult": false
      },
      {
        "id": 1193695,
        "adult": false
      },
      {
        "id": 1206444,
        "adult": false
      },
      {
        "id": 1205921,
        "adult": false
      },
      {
        "id": 1206189,
        "adult": false
      },
      {
        "id": 1072493,
        "adult": false
      },
      {
        "id": 1206546,
        "adult": false
      },
      {
        "id": 1034833,
        "adult": false
      },
      {
        "id": 82954,
        "adult": false
      },
      {
        "id": 1206589,
        "adult": false
      },
      {
        "id": 903088,
        "adult": false
      },
      {
        "id": 478043,
        "adult": false
      },
      {
        "id": 1206596,
        "adult": false
      },
      {
        "id": 1206562,
        "adult": null
      },
      {
        "id": 1203939,
        "adult": false
      },
      {
        "id": 129689,
        "adult": false
      },
      {
        "id": 244719,
        "adult": false
      },
      {
        "id": 1206593,
        "adult": true
      },
      {
        "id": 1049579,
        "adult": false
      },
      {
        "id": 1128900,
        "adult": false
      },
      {
        "id": 266026,
        "adult": false
      },
      {
        "id": 901121,
        "adult": false
      },
      {
        "id": 1206600,
        "adult": false
      },
      {
        "id": 1038611,
        "adult": false
      },
      {
        "id": 483482,
        "adult": false
      },
      {
        "id": 825800,
        "adult": false
      },
      {
        "id": 244658,
        "adult": false
      },
      {
        "id": 1206601,
        "adult": false
      },
      {
        "id": 391628,
        "adult": false
      },
      {
        "id": 105097,
        "adult": false
      },
      {
        "id": 958197,
        "adult": false
      },
      {
        "id": 1206598,
        "adult": false
      },
      {
        "id": 1206595,
        "adult": false
      },
      {
        "id": 884582,
        "adult": false
      },
      {
        "id": 882691,
        "adult": false
      },
      {
        "id": 287793,
        "adult": false
      },
      {
        "id": 128556,
        "adult": false
      },
      {
        "id": 858994,
        "adult": false
      },
      {
        "id": 1206602,
        "adult": false
      },
      {
        "id": 705635,
        "adult": false
      },
      {
        "id": 394985,
        "adult": false
      },
      {
        "id": 1206603,
        "adult": false
      },
      {
        "id": 52398,
        "adult": false
      },
      {
        "id": 420049,
        "adult": false
      },
      {
        "id": 1206511,
        "adult": false
      },
      {
        "id": 1204864,
        "adult": false
      },
      {
        "id": 1060444,
        "adult": false
      },
      {
        "id": 418670,
        "adult": false
      },
      {
        "id": 1152785,
        "adult": false
      },
      {
        "id": 1180750,
        "adult": false
      },
      {
        "id": 67004,
        "adult": false
      },
      {
        "id": 42649,
        "adult": false
      },
      {
        "id": 1206604,
        "adult": false
      },
      {
        "id": 244871,
        "adult": false
      },
      {
        "id": 670292,
        "adult": false
      }
    ],
    "page": 1,
    "total_pages": 55,
    "total_results": 5417
  });
});

router.get('/person/changes', function(req, res, next) {
  res.json({
    "results": [
      {
        "id": 4379234,
        "adult": false
      },
      {
        "id": 3144475,
        "adult": false
      },
      {
        "id": 4379235,
        "adult": false
      },
      {
        "id": 4379236,
        "adult": false
      },
      {
        "id": 4379237,
        "adult": false
      },
      {
        "id": 132133,
        "adult": false
      },
      {
        "id": 2012753,
        "adult": false
      },
      {
        "id": 4379238,
        "adult": false
      },
      {
        "id": 4378348,
        "adult": false
      },
      {
        "id": 4312232,
        "adult": false
      },
      {
        "id": 4379239,
        "adult": false
      },
      {
        "id": 4379240,
        "adult": false
      },
      {
        "id": 4379241,
        "adult": false
      },
      {
        "id": 4379242,
        "adult": false
      },
      {
        "id": 4379243,
        "adult": false
      },
      {
        "id": 4379244,
        "adult": false
      },
      {
        "id": 4379245,
        "adult": false
      },
      {
        "id": 4379246,
        "adult": false
      },
      {
        "id": 4379247,
        "adult": false
      },
      {
        "id": 4379248,
        "adult": false
      },
      {
        "id": 4323539,
        "adult": false
      },
      {
        "id": 2764578,
        "adult": false
      },
      {
        "id": 4379249,
        "adult": false
      },
      {
        "id": 4379250,
        "adult": false
      },
      {
        "id": 3775270,
        "adult": false
      },
      {
        "id": 122468,
        "adult": false
      },
      {
        "id": 4379251,
        "adult": true
      },
      {
        "id": 4377886,
        "adult": null
      },
      {
        "id": 4377882,
        "adult": null
      },
      {
        "id": 3775273,
        "adult": false
      },
      {
        "id": 4377448,
        "adult": false
      },
      {
        "id": 4084205,
        "adult": false
      },
      {
        "id": 4371497,
        "adult": null
      },
      {
        "id": 4371499,
        "adult": null
      },
      {
        "id": 4371494,
        "adult": null
      },
      {
        "id": 3775268,
        "adult": false
      },
      {
        "id": 4371503,
        "adult": null
      },
      {
        "id": 4371506,
        "adult": null
      },
      {
        "id": 2621212,
        "adult": false
      },
      {
        "id": 18365,
        "adult": false
      },
      {
        "id": 4379252,
        "adult": false
      },
      {
        "id": 4379253,
        "adult": false
      },
      {
        "id": 4379254,
        "adult": false
      },
      {
        "id": 4379255,
        "adult": false
      },
      {
        "id": 4379256,
        "adult": false
      },
      {
        "id": 4379257,
        "adult": false
      },
      {
        "id": 4379258,
        "adult": false
      },
      {
        "id": 4379259,
        "adult": false
      },
      {
        "id": 4379260,
        "adult": false
      },
      {
        "id": 4379261,
        "adult": false
      },
      {
        "id": 553850,
        "adult": null
      },
      {
        "id": 4379262,
        "adult": false
      },
      {
        "id": 121710,
        "adult": false
      },
      {
        "id": 3758338,
        "adult": null
      },
      {
        "id": 3758341,
        "adult": null
      },
      {
        "id": 4085241,
        "adult": false
      },
      {
        "id": 1246151,
        "adult": false
      },
      {
        "id": 1325619,
        "adult": false
      },
      {
        "id": 4379263,
        "adult": false
      },
      {
        "id": 4379264,
        "adult": false
      },
      {
        "id": 4379265,
        "adult": false
      },
      {
        "id": 4379266,
        "adult": false
      },
      {
        "id": 3775271,
        "adult": false
      },
      {
        "id": 4379267,
        "adult": false
      },
      {
        "id": 4379268,
        "adult": false
      },
      {
        "id": 4379269,
        "adult": false
      },
      {
        "id": 4379270,
        "adult": false
      },
      {
        "id": 4379271,
        "adult": false
      },
      {
        "id": 4379272,
        "adult": false
      },
      {
        "id": 4379273,
        "adult": false
      },
      {
        "id": 4379274,
        "adult": false
      },
      {
        "id": 4379275,
        "adult": false
      },
      {
        "id": 4379276,
        "adult": false
      },
      {
        "id": 4379277,
        "adult": false
      },
      {
        "id": 4379278,
        "adult": false
      },
      {
        "id": 1003914,
        "adult": false
      },
      {
        "id": 4379279,
        "adult": false
      },
      {
        "id": 4379280,
        "adult": false
      },
      {
        "id": 4379281,
        "adult": false
      },
      {
        "id": 143707,
        "adult": false
      },
      {
        "id": 2869634,
        "adult": false
      },
      {
        "id": 4379282,
        "adult": false
      },
      {
        "id": 4379283,
        "adult": false
      },
      {
        "id": 1461608,
        "adult": false
      },
      {
        "id": 4379284,
        "adult": false
      },
      {
        "id": 4379285,
        "adult": false
      },
      {
        "id": 4379286,
        "adult": false
      },
      {
        "id": 4379287,
        "adult": false
      },
      {
        "id": 4379288,
        "adult": false
      },
      {
        "id": 4379289,
        "adult": false
      },
      {
        "id": 4379290,
        "adult": false
      },
      {
        "id": 4379291,
        "adult": false
      },
      {
        "id": 4379292,
        "adult": false
      },
      {
        "id": 4379293,
        "adult": false
      },
      {
        "id": 4379294,
        "adult": false
      },
      {
        "id": 4379295,
        "adult": false
      },
      {
        "id": 4379296,
        "adult": false
      },
      {
        "id": 4379297,
        "adult": false
      },
      {
        "id": 4379298,
        "adult": false
      },
      {
        "id": 4379299,
        "adult": false
      }
    ],
    "page": 1,
    "total_pages": 111,
    "total_results": 11058
  });
});

router.get('/tv/changes', function(req, res, next) {
  res.json({
    "results": [
      {
        "id": 16394,
        "adult": false
      },
      {
        "id": 29904,
        "adult": false
      },
      {
        "id": 6697,
        "adult": false
      },
      {
        "id": 29663,
        "adult": false
      },
      {
        "id": 226687,
        "adult": false
      },
      {
        "id": null,
        "adult": null
      },
      {
        "id": 239763,
        "adult": false
      },
      {
        "id": 198050,
        "adult": false
      },
      {
        "id": 133688,
        "adult": false
      },
      {
        "id": 2527,
        "adult": false
      },
      {
        "id": 621,
        "adult": false
      },
      {
        "id": 115953,
        "adult": false
      },
      {
        "id": 237894,
        "adult": false
      },
      {
        "id": 116899,
        "adult": false
      },
      {
        "id": 239762,
        "adult": false
      },
      {
        "id": 137065,
        "adult": false
      },
      {
        "id": 209867,
        "adult": false
      },
      {
        "id": 113137,
        "adult": false
      },
      {
        "id": 216523,
        "adult": false
      },
      {
        "id": 239764,
        "adult": false
      },
      {
        "id": 1056,
        "adult": false
      },
      {
        "id": 203,
        "adult": false
      },
      {
        "id": 236161,
        "adult": false
      },
      {
        "id": 424,
        "adult": false
      },
      {
        "id": 203946,
        "adult": false
      },
      {
        "id": 121,
        "adult": false
      },
      {
        "id": 129387,
        "adult": false
      },
      {
        "id": 238486,
        "adult": false
      },
      {
        "id": 239687,
        "adult": false
      },
      {
        "id": 239685,
        "adult": false
      },
      {
        "id": 214160,
        "adult": false
      },
      {
        "id": 1057,
        "adult": false
      },
      {
        "id": 64073,
        "adult": false
      },
      {
        "id": 62828,
        "adult": false
      },
      {
        "id": 45282,
        "adult": false
      },
      {
        "id": 157742,
        "adult": false
      },
      {
        "id": 239465,
        "adult": false
      },
      {
        "id": 12513,
        "adult": false
      },
      {
        "id": 134206,
        "adult": false
      },
      {
        "id": 215293,
        "adult": false
      },
      {
        "id": 204219,
        "adult": null
      },
      {
        "id": 225358,
        "adult": false
      },
      {
        "id": 239765,
        "adult": false
      },
      {
        "id": 238042,
        "adult": false
      },
      {
        "id": 106251,
        "adult": false
      },
      {
        "id": 226197,
        "adult": false
      },
      {
        "id": 228849,
        "adult": false
      },
      {
        "id": 76773,
        "adult": false
      },
      {
        "id": 110837,
        "adult": false
      },
      {
        "id": 239268,
        "adult": false
      },
      {
        "id": 86831,
        "adult": false
      },
      {
        "id": 86031,
        "adult": false
      },
      {
        "id": 239723,
        "adult": null
      },
      {
        "id": 46136,
        "adult": false
      },
      {
        "id": 219783,
        "adult": false
      },
      {
        "id": 235610,
        "adult": false
      },
      {
        "id": 239766,
        "adult": false
      },
      {
        "id": 4086,
        "adult": false
      },
      {
        "id": 239761,
        "adult": false
      },
      {
        "id": 155292,
        "adult": false
      },
      {
        "id": 237243,
        "adult": false
      },
      {
        "id": 210402,
        "adult": false
      },
      {
        "id": 114477,
        "adult": false
      },
      {
        "id": 217088,
        "adult": false
      },
      {
        "id": 236142,
        "adult": false
      },
      {
        "id": 195459,
        "adult": false
      },
      {
        "id": 230924,
        "adult": false
      },
      {
        "id": 239666,
        "adult": false
      },
      {
        "id": 119495,
        "adult": false
      },
      {
        "id": 210455,
        "adult": false
      },
      {
        "id": 11213,
        "adult": false
      },
      {
        "id": 155631,
        "adult": false
      },
      {
        "id": 94038,
        "adult": false
      },
      {
        "id": 38003,
        "adult": false
      },
      {
        "id": 85174,
        "adult": true
      },
      {
        "id": 86073,
        "adult": true
      },
      {
        "id": 31295,
        "adult": false
      },
      {
        "id": 237983,
        "adult": false
      },
      {
        "id": 233816,
        "adult": false
      },
      {
        "id": 87917,
        "adult": false
      },
      {
        "id": 198182,
        "adult": false
      },
      {
        "id": 204082,
        "adult": false
      },
      {
        "id": 7897,
        "adult": false
      },
      {
        "id": 4429,
        "adult": false
      },
      {
        "id": 219109,
        "adult": false
      },
      {
        "id": 15,
        "adult": false
      },
      {
        "id": 70523,
        "adult": false
      },
      {
        "id": 219651,
        "adult": false
      },
      {
        "id": 221913,
        "adult": false
      },
      {
        "id": 6007,
        "adult": false
      },
      {
        "id": 6721,
        "adult": false
      },
      {
        "id": 220374,
        "adult": false
      },
      {
        "id": 238179,
        "adult": false
      },
      {
        "id": 6788,
        "adult": false
      },
      {
        "id": 41743,
        "adult": false
      },
      {
        "id": 236619,
        "adult": false
      },
      {
        "id": 207586,
        "adult": false
      },
      {
        "id": 85377,
        "adult": false
      },
      {
        "id": 96932,
        "adult": false
      },
      {
        "id": 125581,
        "adult": false
      }
    ],
    "page": 1,
    "total_pages": 22,
    "total_results": 2120
  });
});

router.get('/configuration', function(req, res, next) {
  res.json({
"images": {
  "base_url": "http://image.tmdb.org/t/p/",
  "secure_base_url": "https://image.tmdb.org/t/p/",
  "backdrop_sizes": [
    "w300",
    "w780",
    "w1280",
    "original"
  ],
  "logo_sizes": [
    "w45",
    "w92",
    "w154",
    "w185",
    "w300",
    "w500",
    "original"
  ],
  "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  "profile_sizes": [
    "w45",
    "w185",
    "h632",
    "original"
  ],
  "still_sizes": [
    "w92",
    "w185",
    "w300",
    "original"
  ]
},
"change_keys": [
  "adult",
  "air_date",
  "also_known_as",
  "alternative_titles",
  "biography",
  "birthday",
  "budget",
  "cast",
  "certifications",
  "character_names",
  "created_by",
  "crew",
  "deathday",
  "episode",
  "episode_number",
  "episode_run_time",
  "freebase_id",
  "freebase_mid",
  "general",
  "genres",
  "guest_stars",
  "homepage",
  "images",
  "imdb_id",
  "languages",
  "name",
  "network",
  "origin_country",
  "original_name",
  "original_title",
  "overview",
  "parts",
  "place_of_birth",
  "plot_keywords",
  "production_code",
  "production_companies",
  "production_countries",
  "releases",
  "revenue",
  "runtime",
  "season",
  "season_number",
  "season_regular",
  "spoken_languages",
  "status",
  "tagline",
  "title",
  "translations",
  "tvdb_id",
  "tvrage_id",
  "type",
  "video",
  "videos"
]
});
});

router.get('/configuration/countries', function(req, res, next) {
  res.json([
{
  "iso_3166_1": "AD",
  "english_name": "Andorra",
  "native_name": "Andorra"
},
{
  "iso_3166_1": "AE",
  "english_name": "United Arab Emirates",
  "native_name": "United Arab Emirates"
},
{
  "iso_3166_1": "AF",
  "english_name": "Afghanistan",
  "native_name": "Afghanistan"
},
{
  "iso_3166_1": "AG",
  "english_name": "Antigua and Barbuda",
  "native_name": "Antigua & Barbuda"
},
{
  "iso_3166_1": "AI",
  "english_name": "Anguilla",
  "native_name": "Anguilla"
},
{
  "iso_3166_1": "AL",
  "english_name": "Albania",
  "native_name": "Albania"
},
{
  "iso_3166_1": "AM",
  "english_name": "Armenia",
  "native_name": "Armenia"
},
{
  "iso_3166_1": "AN",
  "english_name": "Netherlands Antilles",
  "native_name": "Netherlands Antilles"
},
{
  "iso_3166_1": "AO",
  "english_name": "Angola",
  "native_name": "Angola"
},
{
  "iso_3166_1": "AQ",
  "english_name": "Antarctica",
  "native_name": "Antarctica"
},
{
  "iso_3166_1": "AR",
  "english_name": "Argentina",
  "native_name": "Argentina"
},
{
  "iso_3166_1": "AS",
  "english_name": "American Samoa",
  "native_name": "American Samoa"
},
{
  "iso_3166_1": "AT",
  "english_name": "Austria",
  "native_name": "Austria"
},
{
  "iso_3166_1": "AU",
  "english_name": "Australia",
  "native_name": "Australia"
},
{
  "iso_3166_1": "AW",
  "english_name": "Aruba",
  "native_name": "Aruba"
},
{
  "iso_3166_1": "AZ",
  "english_name": "Azerbaijan",
  "native_name": "Azerbaijan"
},
{
  "iso_3166_1": "BA",
  "english_name": "Bosnia and Herzegovina",
  "native_name": "Bosnia & Herzegovina"
},
{
  "iso_3166_1": "BB",
  "english_name": "Barbados",
  "native_name": "Barbados"
},
{
  "iso_3166_1": "BD",
  "english_name": "Bangladesh",
  "native_name": "Bangladesh"
},
{
  "iso_3166_1": "BE",
  "english_name": "Belgium",
  "native_name": "Belgium"
},
{
  "iso_3166_1": "BF",
  "english_name": "Burkina Faso",
  "native_name": "Burkina Faso"
},
{
  "iso_3166_1": "BG",
  "english_name": "Bulgaria",
  "native_name": "Bulgaria"
},
{
  "iso_3166_1": "BH",
  "english_name": "Bahrain",
  "native_name": "Bahrain"
},
{
  "iso_3166_1": "BI",
  "english_name": "Burundi",
  "native_name": "Burundi"
},
{
  "iso_3166_1": "BJ",
  "english_name": "Benin",
  "native_name": "Benin"
},
{
  "iso_3166_1": "BM",
  "english_name": "Bermuda",
  "native_name": "Bermuda"
},
{
  "iso_3166_1": "BN",
  "english_name": "Brunei Darussalam",
  "native_name": "Brunei"
},
{
  "iso_3166_1": "BO",
  "english_name": "Bolivia",
  "native_name": "Bolivia"
},
{
  "iso_3166_1": "BR",
  "english_name": "Brazil",
  "native_name": "Brazil"
},
{
  "iso_3166_1": "BS",
  "english_name": "Bahamas",
  "native_name": "Bahamas"
},
{
  "iso_3166_1": "BT",
  "english_name": "Bhutan",
  "native_name": "Bhutan"
},
{
  "iso_3166_1": "BU",
  "english_name": "Burma",
  "native_name": "Burma"
},
{
  "iso_3166_1": "BV",
  "english_name": "Bouvet Island",
  "native_name": "Bouvet Island"
},
{
  "iso_3166_1": "BW",
  "english_name": "Botswana",
  "native_name": "Botswana"
},
{
  "iso_3166_1": "BY",
  "english_name": "Belarus",
  "native_name": "Belarus"
},
{
  "iso_3166_1": "BZ",
  "english_name": "Belize",
  "native_name": "Belize"
},
{
  "iso_3166_1": "CA",
  "english_name": "Canada",
  "native_name": "Canada"
},
{
  "iso_3166_1": "CC",
  "english_name": "Cocos  Islands",
  "native_name": "Cocos (Keeling) Islands"
},
{
  "iso_3166_1": "CD",
  "english_name": "Congo",
  "native_name": "Democratic Republic of the Congo (Kinshasa)"
},
{
  "iso_3166_1": "CF",
  "english_name": "Central African Republic",
  "native_name": "Central African Republic"
},
{
  "iso_3166_1": "CG",
  "english_name": "Congo",
  "native_name": "Republic of the Congo (Brazzaville)"
},
{
  "iso_3166_1": "CH",
  "english_name": "Switzerland",
  "native_name": "Switzerland"
},
{
  "iso_3166_1": "CI",
  "english_name": "Cote D'Ivoire",
  "native_name": "Côte d’Ivoire"
},
{
  "iso_3166_1": "CK",
  "english_name": "Cook Islands",
  "native_name": "Cook Islands"
},
{
  "iso_3166_1": "CL",
  "english_name": "Chile",
  "native_name": "Chile"
},
{
  "iso_3166_1": "CM",
  "english_name": "Cameroon",
  "native_name": "Cameroon"
},
{
  "iso_3166_1": "CN",
  "english_name": "China",
  "native_name": "China"
},
{
  "iso_3166_1": "CO",
  "english_name": "Colombia",
  "native_name": "Colombia"
},
{
  "iso_3166_1": "CR",
  "english_name": "Costa Rica",
  "native_name": "Costa Rica"
},
{
  "iso_3166_1": "CS",
  "english_name": "Serbia and Montenegro",
  "native_name": "Serbia and Montenegro"
},
{
  "iso_3166_1": "CU",
  "english_name": "Cuba",
  "native_name": "Cuba"
},
{
  "iso_3166_1": "CV",
  "english_name": "Cape Verde",
  "native_name": "Cape Verde"
},
{
  "iso_3166_1": "CX",
  "english_name": "Christmas Island",
  "native_name": "Christmas Island"
},
{
  "iso_3166_1": "CY",
  "english_name": "Cyprus",
  "native_name": "Cyprus"
},
{
  "iso_3166_1": "CZ",
  "english_name": "Czech Republic",
  "native_name": "Czech Republic"
},
{
  "iso_3166_1": "DE",
  "english_name": "Germany",
  "native_name": "Germany"
},
{
  "iso_3166_1": "DJ",
  "english_name": "Djibouti",
  "native_name": "Djibouti"
},
{
  "iso_3166_1": "DK",
  "english_name": "Denmark",
  "native_name": "Denmark"
},
{
  "iso_3166_1": "DM",
  "english_name": "Dominica",
  "native_name": "Dominica"
},
{
  "iso_3166_1": "DO",
  "english_name": "Dominican Republic",
  "native_name": "Dominican Republic"
},
{
  "iso_3166_1": "DZ",
  "english_name": "Algeria",
  "native_name": "Algeria"
},
{
  "iso_3166_1": "EC",
  "english_name": "Ecuador",
  "native_name": "Ecuador"
},
{
  "iso_3166_1": "EE",
  "english_name": "Estonia",
  "native_name": "Estonia"
},
{
  "iso_3166_1": "EG",
  "english_name": "Egypt",
  "native_name": "Egypt"
},
{
  "iso_3166_1": "EH",
  "english_name": "Western Sahara",
  "native_name": "Western Sahara"
},
{
  "iso_3166_1": "ER",
  "english_name": "Eritrea",
  "native_name": "Eritrea"
},
{
  "iso_3166_1": "ES",
  "english_name": "Spain",
  "native_name": "Spain"
},
{
  "iso_3166_1": "ET",
  "english_name": "Ethiopia",
  "native_name": "Ethiopia"
},
{
  "iso_3166_1": "FI",
  "english_name": "Finland",
  "native_name": "Finland"
},
{
  "iso_3166_1": "FJ",
  "english_name": "Fiji",
  "native_name": "Fiji"
},
{
  "iso_3166_1": "FK",
  "english_name": "Falkland Islands",
  "native_name": "Falkland Islands"
},
{
  "iso_3166_1": "FM",
  "english_name": "Micronesia",
  "native_name": "Micronesia"
},
{
  "iso_3166_1": "FO",
  "english_name": "Faeroe Islands",
  "native_name": "Faroe Islands"
},
{
  "iso_3166_1": "FR",
  "english_name": "France",
  "native_name": "France"
},
{
  "iso_3166_1": "GA",
  "english_name": "Gabon",
  "native_name": "Gabon"
},
{
  "iso_3166_1": "GB",
  "english_name": "United Kingdom",
  "native_name": "United Kingdom"
},
{
  "iso_3166_1": "GD",
  "english_name": "Grenada",
  "native_name": "Grenada"
},
{
  "iso_3166_1": "GE",
  "english_name": "Georgia",
  "native_name": "Georgia"
},
{
  "iso_3166_1": "GF",
  "english_name": "French Guiana",
  "native_name": "French Guiana"
},
{
  "iso_3166_1": "GH",
  "english_name": "Ghana",
  "native_name": "Ghana"
},
{
  "iso_3166_1": "GI",
  "english_name": "Gibraltar",
  "native_name": "Gibraltar"
},
{
  "iso_3166_1": "GL",
  "english_name": "Greenland",
  "native_name": "Greenland"
},
{
  "iso_3166_1": "GM",
  "english_name": "Gambia",
  "native_name": "Gambia"
},
{
  "iso_3166_1": "GN",
  "english_name": "Guinea",
  "native_name": "Guinea"
},
{
  "iso_3166_1": "GP",
  "english_name": "Guadaloupe",
  "native_name": "Guadeloupe"
},
{
  "iso_3166_1": "GQ",
  "english_name": "Equatorial Guinea",
  "native_name": "Equatorial Guinea"
},
{
  "iso_3166_1": "GR",
  "english_name": "Greece",
  "native_name": "Greece"
},
{
  "iso_3166_1": "GS",
  "english_name": "South Georgia and the South Sandwich Islands",
  "native_name": "South Georgia & South Sandwich Islands"
},
{
  "iso_3166_1": "GT",
  "english_name": "Guatemala",
  "native_name": "Guatemala"
},
{
  "iso_3166_1": "GU",
  "english_name": "Guam",
  "native_name": "Guam"
},
{
  "iso_3166_1": "GW",
  "english_name": "Guinea-Bissau",
  "native_name": "Guinea-Bissau"
},
{
  "iso_3166_1": "GY",
  "english_name": "Guyana",
  "native_name": "Guyana"
},
{
  "iso_3166_1": "HK",
  "english_name": "Hong Kong",
  "native_name": "Hong Kong SAR China"
},
{
  "iso_3166_1": "HM",
  "english_name": "Heard and McDonald Islands",
  "native_name": "Heard & McDonald Islands"
},
{
  "iso_3166_1": "HN",
  "english_name": "Honduras",
  "native_name": "Honduras"
},
{
  "iso_3166_1": "HR",
  "english_name": "Croatia",
  "native_name": "Croatia"
},
{
  "iso_3166_1": "HT",
  "english_name": "Haiti",
  "native_name": "Haiti"
},
{
  "iso_3166_1": "HU",
  "english_name": "Hungary",
  "native_name": "Hungary"
},
{
  "iso_3166_1": "ID",
  "english_name": "Indonesia",
  "native_name": "Indonesia"
},
{
  "iso_3166_1": "IE",
  "english_name": "Ireland",
  "native_name": "Ireland"
},
{
  "iso_3166_1": "IL",
  "english_name": "Israel",
  "native_name": "Israel"
},
{
  "iso_3166_1": "IN",
  "english_name": "India",
  "native_name": "India"
},
{
  "iso_3166_1": "IO",
  "english_name": "British Indian Ocean Territory",
  "native_name": "British Indian Ocean Territory"
},
{
  "iso_3166_1": "IQ",
  "english_name": "Iraq",
  "native_name": "Iraq"
},
{
  "iso_3166_1": "IR",
  "english_name": "Iran",
  "native_name": "Iran"
},
{
  "iso_3166_1": "IS",
  "english_name": "Iceland",
  "native_name": "Iceland"
},
{
  "iso_3166_1": "IT",
  "english_name": "Italy",
  "native_name": "Italy"
},
{
  "iso_3166_1": "JM",
  "english_name": "Jamaica",
  "native_name": "Jamaica"
},
{
  "iso_3166_1": "JO",
  "english_name": "Jordan",
  "native_name": "Jordan"
},
{
  "iso_3166_1": "JP",
  "english_name": "Japan",
  "native_name": "Japan"
},
{
  "iso_3166_1": "KE",
  "english_name": "Kenya",
  "native_name": "Kenya"
},
{
  "iso_3166_1": "KG",
  "english_name": "Kyrgyz Republic",
  "native_name": "Kyrgyzstan"
},
{
  "iso_3166_1": "KH",
  "english_name": "Cambodia",
  "native_name": "Cambodia"
},
{
  "iso_3166_1": "KI",
  "english_name": "Kiribati",
  "native_name": "Kiribati"
},
{
  "iso_3166_1": "KM",
  "english_name": "Comoros",
  "native_name": "Comoros"
},
{
  "iso_3166_1": "KN",
  "english_name": "St. Kitts and Nevis",
  "native_name": "St. Kitts & Nevis"
},
{
  "iso_3166_1": "KP",
  "english_name": "North Korea",
  "native_name": "North Korea"
},
{
  "iso_3166_1": "KR",
  "english_name": "South Korea",
  "native_name": "South Korea"
},
{
  "iso_3166_1": "KW",
  "english_name": "Kuwait",
  "native_name": "Kuwait"
},
{
  "iso_3166_1": "KY",
  "english_name": "Cayman Islands",
  "native_name": "Cayman Islands"
},
{
  "iso_3166_1": "KZ",
  "english_name": "Kazakhstan",
  "native_name": "Kazakhstan"
},
{
  "iso_3166_1": "LA",
  "english_name": "Lao People's Democratic Republic",
  "native_name": "Laos"
},
{
  "iso_3166_1": "LB",
  "english_name": "Lebanon",
  "native_name": "Lebanon"
},
{
  "iso_3166_1": "LC",
  "english_name": "St. Lucia",
  "native_name": "St. Lucia"
},
{
  "iso_3166_1": "LI",
  "english_name": "Liechtenstein",
  "native_name": "Liechtenstein"
},
{
  "iso_3166_1": "LK",
  "english_name": "Sri Lanka",
  "native_name": "Sri Lanka"
},
{
  "iso_3166_1": "LR",
  "english_name": "Liberia",
  "native_name": "Liberia"
},
{
  "iso_3166_1": "LS",
  "english_name": "Lesotho",
  "native_name": "Lesotho"
},
{
  "iso_3166_1": "LT",
  "english_name": "Lithuania",
  "native_name": "Lithuania"
},
{
  "iso_3166_1": "LU",
  "english_name": "Luxembourg",
  "native_name": "Luxembourg"
},
{
  "iso_3166_1": "LV",
  "english_name": "Latvia",
  "native_name": "Latvia"
},
{
  "iso_3166_1": "LY",
  "english_name": "Libyan Arab Jamahiriya",
  "native_name": "Libya"
},
{
  "iso_3166_1": "MA",
  "english_name": "Morocco",
  "native_name": "Morocco"
},
{
  "iso_3166_1": "MC",
  "english_name": "Monaco",
  "native_name": "Monaco"
},
{
  "iso_3166_1": "MD",
  "english_name": "Moldova",
  "native_name": "Moldova"
},
{
  "iso_3166_1": "ME",
  "english_name": "Montenegro",
  "native_name": "Montenegro"
},
{
  "iso_3166_1": "MG",
  "english_name": "Madagascar",
  "native_name": "Madagascar"
},
{
  "iso_3166_1": "MH",
  "english_name": "Marshall Islands",
  "native_name": "Marshall Islands"
},
{
  "iso_3166_1": "MK",
  "english_name": "Macedonia",
  "native_name": "Macedonia"
},
{
  "iso_3166_1": "ML",
  "english_name": "Mali",
  "native_name": "Mali"
},
{
  "iso_3166_1": "MM",
  "english_name": "Myanmar",
  "native_name": "Myanmar (Burma)"
},
{
  "iso_3166_1": "MN",
  "english_name": "Mongolia",
  "native_name": "Mongolia"
},
{
  "iso_3166_1": "MO",
  "english_name": "Macao",
  "native_name": "Macau SAR China"
},
{
  "iso_3166_1": "MP",
  "english_name": "Northern Mariana Islands",
  "native_name": "Northern Mariana Islands"
},
{
  "iso_3166_1": "MQ",
  "english_name": "Martinique",
  "native_name": "Martinique"
},
{
  "iso_3166_1": "MR",
  "english_name": "Mauritania",
  "native_name": "Mauritania"
},
{
  "iso_3166_1": "MS",
  "english_name": "Montserrat",
  "native_name": "Montserrat"
},
{
  "iso_3166_1": "MT",
  "english_name": "Malta",
  "native_name": "Malta"
},
{
  "iso_3166_1": "MU",
  "english_name": "Mauritius",
  "native_name": "Mauritius"
},
{
  "iso_3166_1": "MV",
  "english_name": "Maldives",
  "native_name": "Maldives"
},
{
  "iso_3166_1": "MW",
  "english_name": "Malawi",
  "native_name": "Malawi"
},
{
  "iso_3166_1": "MX",
  "english_name": "Mexico",
  "native_name": "Mexico"
},
{
  "iso_3166_1": "MY",
  "english_name": "Malaysia",
  "native_name": "Malaysia"
},
{
  "iso_3166_1": "MZ",
  "english_name": "Mozambique",
  "native_name": "Mozambique"
},
{
  "iso_3166_1": "NA",
  "english_name": "Namibia",
  "native_name": "Namibia"
},
{
  "iso_3166_1": "NC",
  "english_name": "New Caledonia",
  "native_name": "New Caledonia"
},
{
  "iso_3166_1": "NE",
  "english_name": "Niger",
  "native_name": "Niger"
},
{
  "iso_3166_1": "NF",
  "english_name": "Norfolk Island",
  "native_name": "Norfolk Island"
},
{
  "iso_3166_1": "NG",
  "english_name": "Nigeria",
  "native_name": "Nigeria"
},
{
  "iso_3166_1": "NI",
  "english_name": "Nicaragua",
  "native_name": "Nicaragua"
},
{
  "iso_3166_1": "NL",
  "english_name": "Netherlands",
  "native_name": "Netherlands"
},
{
  "iso_3166_1": "NO",
  "english_name": "Norway",
  "native_name": "Norway"
},
{
  "iso_3166_1": "NP",
  "english_name": "Nepal",
  "native_name": "Nepal"
},
{
  "iso_3166_1": "NR",
  "english_name": "Nauru",
  "native_name": "Nauru"
},
{
  "iso_3166_1": "NU",
  "english_name": "Niue",
  "native_name": "Niue"
},
{
  "iso_3166_1": "NZ",
  "english_name": "New Zealand",
  "native_name": "New Zealand"
},
{
  "iso_3166_1": "OM",
  "english_name": "Oman",
  "native_name": "Oman"
},
{
  "iso_3166_1": "PA",
  "english_name": "Panama",
  "native_name": "Panama"
},
{
  "iso_3166_1": "PE",
  "english_name": "Peru",
  "native_name": "Peru"
},
{
  "iso_3166_1": "PF",
  "english_name": "French Polynesia",
  "native_name": "French Polynesia"
},
{
  "iso_3166_1": "PG",
  "english_name": "Papua New Guinea",
  "native_name": "Papua New Guinea"
},
{
  "iso_3166_1": "PH",
  "english_name": "Philippines",
  "native_name": "Philippines"
},
{
  "iso_3166_1": "PK",
  "english_name": "Pakistan",
  "native_name": "Pakistan"
},
{
  "iso_3166_1": "PL",
  "english_name": "Poland",
  "native_name": "Poland"
},
{
  "iso_3166_1": "PM",
  "english_name": "St. Pierre and Miquelon",
  "native_name": "St. Pierre & Miquelon"
},
{
  "iso_3166_1": "PN",
  "english_name": "Pitcairn Island",
  "native_name": "Pitcairn Islands"
},
{
  "iso_3166_1": "PR",
  "english_name": "Puerto Rico",
  "native_name": "Puerto Rico"
},
{
  "iso_3166_1": "PS",
  "english_name": "Palestinian Territory",
  "native_name": "Palestinian Territories"
},
{
  "iso_3166_1": "PT",
  "english_name": "Portugal",
  "native_name": "Portugal"
},
{
  "iso_3166_1": "PW",
  "english_name": "Palau",
  "native_name": "Palau"
},
{
  "iso_3166_1": "PY",
  "english_name": "Paraguay",
  "native_name": "Paraguay"
},
{
  "iso_3166_1": "QA",
  "english_name": "Qatar",
  "native_name": "Qatar"
},
{
  "iso_3166_1": "RE",
  "english_name": "Reunion",
  "native_name": "Réunion"
},
{
  "iso_3166_1": "RO",
  "english_name": "Romania",
  "native_name": "Romania"
},
{
  "iso_3166_1": "RS",
  "english_name": "Serbia",
  "native_name": "Serbia"
},
{
  "iso_3166_1": "RU",
  "english_name": "Russia",
  "native_name": "Russia"
},
{
  "iso_3166_1": "RW",
  "english_name": "Rwanda",
  "native_name": "Rwanda"
},
{
  "iso_3166_1": "SA",
  "english_name": "Saudi Arabia",
  "native_name": "Saudi Arabia"
},
{
  "iso_3166_1": "SB",
  "english_name": "Solomon Islands",
  "native_name": "Solomon Islands"
},
{
  "iso_3166_1": "SC",
  "english_name": "Seychelles",
  "native_name": "Seychelles"
},
{
  "iso_3166_1": "SD",
  "english_name": "Sudan",
  "native_name": "Sudan"
},
{
  "iso_3166_1": "SE",
  "english_name": "Sweden",
  "native_name": "Sweden"
},
{
  "iso_3166_1": "SG",
  "english_name": "Singapore",
  "native_name": "Singapore"
},
{
  "iso_3166_1": "SH",
  "english_name": "St. Helena",
  "native_name": "St. Helena"
},
{
  "iso_3166_1": "SI",
  "english_name": "Slovenia",
  "native_name": "Slovenia"
},
{
  "iso_3166_1": "SJ",
  "english_name": "Svalbard & Jan Mayen Islands",
  "native_name": "Svalbard & Jan Mayen"
},
{
  "iso_3166_1": "SK",
  "english_name": "Slovakia",
  "native_name": "Slovakia"
},
{
  "iso_3166_1": "SL",
  "english_name": "Sierra Leone",
  "native_name": "Sierra Leone"
},
{
  "iso_3166_1": "SM",
  "english_name": "San Marino",
  "native_name": "San Marino"
},
{
  "iso_3166_1": "SN",
  "english_name": "Senegal",
  "native_name": "Senegal"
},
{
  "iso_3166_1": "SO",
  "english_name": "Somalia",
  "native_name": "Somalia"
},
{
  "iso_3166_1": "SR",
  "english_name": "Suriname",
  "native_name": "Suriname"
},
{
  "iso_3166_1": "SS",
  "english_name": "South Sudan",
  "native_name": "South Sudan"
},
{
  "iso_3166_1": "ST",
  "english_name": "Sao Tome and Principe",
  "native_name": "São Tomé & Príncipe"
},
{
  "iso_3166_1": "SU",
  "english_name": "Soviet Union",
  "native_name": "Soviet Union"
},
{
  "iso_3166_1": "SV",
  "english_name": "El Salvador",
  "native_name": "El Salvador"
},
{
  "iso_3166_1": "SY",
  "english_name": "Syrian Arab Republic",
  "native_name": "Syria"
},
{
  "iso_3166_1": "SZ",
  "english_name": "Swaziland",
  "native_name": "Eswatini (Swaziland)"
},
{
  "iso_3166_1": "TC",
  "english_name": "Turks and Caicos Islands",
  "native_name": "Turks & Caicos Islands"
},
{
  "iso_3166_1": "TD",
  "english_name": "Chad",
  "native_name": "Chad"
},
{
  "iso_3166_1": "TF",
  "english_name": "French Southern Territories",
  "native_name": "French Southern Territories"
},
{
  "iso_3166_1": "TG",
  "english_name": "Togo",
  "native_name": "Togo"
},
{
  "iso_3166_1": "TH",
  "english_name": "Thailand",
  "native_name": "Thailand"
},
{
  "iso_3166_1": "TJ",
  "english_name": "Tajikistan",
  "native_name": "Tajikistan"
},
{
  "iso_3166_1": "TK",
  "english_name": "Tokelau",
  "native_name": "Tokelau"
},
{
  "iso_3166_1": "TL",
  "english_name": "Timor-Leste",
  "native_name": "Timor-Leste"
},
{
  "iso_3166_1": "TM",
  "english_name": "Turkmenistan",
  "native_name": "Turkmenistan"
},
{
  "iso_3166_1": "TN",
  "english_name": "Tunisia",
  "native_name": "Tunisia"
},
{
  "iso_3166_1": "TO",
  "english_name": "Tonga",
  "native_name": "Tonga"
},
{
  "iso_3166_1": "TP",
  "english_name": "East Timor",
  "native_name": "East Timor"
},
{
  "iso_3166_1": "TR",
  "english_name": "Turkey",
  "native_name": "Turkey"
},
{
  "iso_3166_1": "TT",
  "english_name": "Trinidad and Tobago",
  "native_name": "Trinidad & Tobago"
},
{
  "iso_3166_1": "TV",
  "english_name": "Tuvalu",
  "native_name": "Tuvalu"
},
{
  "iso_3166_1": "TW",
  "english_name": "Taiwan",
  "native_name": "Taiwan"
},
{
  "iso_3166_1": "TZ",
  "english_name": "Tanzania",
  "native_name": "Tanzania"
},
{
  "iso_3166_1": "UA",
  "english_name": "Ukraine",
  "native_name": "Ukraine"
},
{
  "iso_3166_1": "UG",
  "english_name": "Uganda",
  "native_name": "Uganda"
},
{
  "iso_3166_1": "UM",
  "english_name": "United States Minor Outlying Islands",
  "native_name": "U.S. Outlying Islands"
},
{
  "iso_3166_1": "US",
  "english_name": "United States of America",
  "native_name": "United States"
},
{
  "iso_3166_1": "UY",
  "english_name": "Uruguay",
  "native_name": "Uruguay"
},
{
  "iso_3166_1": "UZ",
  "english_name": "Uzbekistan",
  "native_name": "Uzbekistan"
},
{
  "iso_3166_1": "VA",
  "english_name": "Holy See",
  "native_name": "Vatican City"
},
{
  "iso_3166_1": "VC",
  "english_name": "St. Vincent and the Grenadines",
  "native_name": "St. Vincent & Grenadines"
},
{
  "iso_3166_1": "VE",
  "english_name": "Venezuela",
  "native_name": "Venezuela"
},
{
  "iso_3166_1": "VG",
  "english_name": "British Virgin Islands",
  "native_name": "British Virgin Islands"
},
{
  "iso_3166_1": "VI",
  "english_name": "US Virgin Islands",
  "native_name": "U.S. Virgin Islands"
},
{
  "iso_3166_1": "VN",
  "english_name": "Vietnam",
  "native_name": "Vietnam"
},
{
  "iso_3166_1": "VU",
  "english_name": "Vanuatu",
  "native_name": "Vanuatu"
},
{
  "iso_3166_1": "WF",
  "english_name": "Wallis and Futuna Islands",
  "native_name": "Wallis & Futuna"
},
{
  "iso_3166_1": "WS",
  "english_name": "Samoa",
  "native_name": "Samoa"
},
{
  "iso_3166_1": "XC",
  "english_name": "Czechoslovakia",
  "native_name": "Czechoslovakia"
},
{
  "iso_3166_1": "XG",
  "english_name": "East Germany",
  "native_name": "East Germany"
},
{
  "iso_3166_1": "XI",
  "english_name": "Northern Ireland",
  "native_name": "Northern Ireland"
},
{
  "iso_3166_1": "XK",
  "english_name": "Kosovo",
  "native_name": "Kosovo"
},
{
  "iso_3166_1": "YE",
  "english_name": "Yemen",
  "native_name": "Yemen"
},
{
  "iso_3166_1": "YT",
  "english_name": "Mayotte",
  "native_name": "Mayotte"
},
{
  "iso_3166_1": "YU",
  "english_name": "Yugoslavia",
  "native_name": "Yugoslavia"
},
{
  "iso_3166_1": "ZA",
  "english_name": "South Africa",
  "native_name": "South Africa"
},
{
  "iso_3166_1": "ZM",
  "english_name": "Zambia",
  "native_name": "Zambia"
},
{
  "iso_3166_1": "ZR",
  "english_name": "Zaire",
  "native_name": "Zaire"
},
{
  "iso_3166_1": "ZW",
  "english_name": "Zimbabwe",
  "native_name": "Zimbabwe"
}
]);
});

router.get('/configuration/jobs', function(req, res, next) {
  res.json([
{
  "department": "Production",
  "jobs": [
    "Casting",
    "ADR Voice Casting",
    "Production Accountant",
    "Finance",
    "Coordinating Producer",
    "Script Researcher",
    "Line Producer",
    "Development Manager",
    "Publicist",
    "Supervising Producer",
    "Assistant Production Manager",
    "Executive Producer",
    "Production Manager",
    "Other",
    "Production Director",
    "Unit Manager",
    "Associate Producer",
    "Assistant Production Coordinator",
    "Co-Producer",
    "Consulting Producer",
    "Producer",
    "Location Manager",
    "Executive In Charge Of Production",
    "Administration",
    "Executive In Charge Of Post Production",
    "Unit Production Manager",
    "Character Technical Supervisor",
    "Co-Executive Producer",
    "Senior Executive Consultant",
    "Production Supervisor",
    "Casting Associate",
    "Casting Consultant",
    "Local Casting",
    "Production Office Coordinator",
    "Executive Consultant",
    "Casting Assistant",
    "Researcher",
    "Production Coordinator",
    "Casting Producer",
    "Musical Casting",
    "Street Casting",
    "Assistant Extras Casting",
    "Back-up Set Production Assistant",
    "Post Producer",
    "Second Assistant Production Coordinator",
    "Additional Casting",
    "Art Department Production Assistant",
    "Executive Co-Producer",
    "Key Set Production Assistant",
    "Post Production Coordinator",
    "Production Designer",
    "Second Unit Location Manager",
    "Attorney",
    "Delegated Producer",
    "Feature Finishing Producer",
    "Grip Production Assistant",
    "Production Secretary",
    "Trainee Production Coordinator",
    "Accounting Clerk Assistant",
    "Consulting Accountant",
    "General Manager",
    "Insert Unit Location Manager",
    "Location Production Assistant",
    "Production Trainee",
    "Unit Swing",
    "Assistant Accountant",
    "Data Management Technician",
    "First Assistant Production Coordinator",
    "Head of Research",
    "Location Assistant",
    "Location Coordinator",
    "Production Executive",
    "Second Assistant Accountant",
    "Accountant",
    "Assistant Location Manager",
    "Finishing Producer",
    "Location Casting",
    "Post Production Accountant",
    "Casting Researcher",
    "Key Art Production Assistant",
    "Executive Assistant",
    "Post Coordinator",
    "Post Production Producer",
    "Additional Production Assistant",
    "Development Producer",
    "Director of Operations",
    "Key Production Assistant",
    "Accounting Trainee",
    "Additional Post-Production Supervisor",
    "Casting Coordinator",
    "Contract Manager",
    "Extras Casting Coordinator",
    "Producer's Assistant",
    "Casting Director",
    "Extras Casting Assistant",
    "Post Production Technical Engineer",
    "Accounting Supervisor",
    "Key Accountant",
    "Production Runner",
    "Truck Production Assistant",
    "Executive Producer's Assistant",
    "Extras Casting",
    "First Assistant Accountant",
    "Human Resources",
    "Key Grip Production Assistant",
    "Production Assistant",
    "Travel Coordinator",
    "Background Casting Director",
    "Back-up Truck Production Assistant",
    "Business Affairs Coordinator",
    "Controller",
    "Head of Production",
    "Original Casting",
    "Payroll Accountant",
    "Research Assistant",
    "Second Assistant Unit Manager",
    "Assistant Unit Manager",
    "Broadcast Producer",
    "Head of Programming",
    "Locale Casting Director",
    "Production Consultant",
    "Production Driver"
  ]
},
{
  "department": "Crew",
  "jobs": [
    "Supervising Technical Director",
    "Production Artist",
    "Documentation & Support",
    "Compositor",
    "Video Assist Operator",
    "Score Engineer",
    "Additional Dialogue",
    "Unit Publicist",
    "Studio Teacher",
    "Transportation Co-Captain",
    "Second Unit Cinematographer",
    "Visual Effects Design Consultant",
    "Series Writer",
    "Temp Sound Editor",
    "Post Production Assistant",
    "Set Production Assistant",
    "Loader",
    "Public Relations",
    "Dramaturgy",
    "Second Film Editor",
    "Supervisor of Production Resources",
    "Production Office Assistant",
    "Systems Administrators & Support",
    "Picture Car Coordinator",
    "Craft Service",
    "Prop Maker",
    "Digital Effects Producer",
    "Choreographer",
    "Sound Design Assistant",
    "Sequence Artist",
    "Actor's Assistant",
    "Chef",
    "Propmaker",
    "Manager of Operations",
    "Martial Arts Choreographer",
    "Executive in Charge of Finance",
    "Lighting Camera",
    "Editorial Staff",
    "Special Effects",
    "Information Systems Manager",
    "Set Medic",
    "Production Controller",
    "Quality Control Supervisor",
    "Associate Choreographer",
    "Pilot",
    "Presenter",
    "Software Engineer",
    "Schedule Coordinator",
    "Motion Actor",
    "Stand In",
    "Production Intern",
    "Digital Effects Supervisor",
    "CG Supervisor",
    "Visual Effects Editor",
    "Additional Writing",
    "Stunt Coordinator",
    "Motion Capture Artist",
    "Transportation Coordinator",
    "Transportation Captain",
    "Cinematography",
    "Treatment",
    "CGI Supervisor",
    "Script",
    "Additional Music",
    "Creator",
    "Graphic Novel Illustrator",
    "Software Team Lead",
    "Machinist",
    "Post-Production Manager",
    "Utility Stunts",
    "Executive Visual Effects Producer",
    "Radio Play",
    "Second Unit",
    "Temp Music Editor",
    "Mix Technician",
    "Post Production Consulting",
    "Set Production Intern",
    "Legal Services",
    "Translator",
    "Telecine Colorist",
    "Animatronic and Prosthetic Effects",
    "Makeup Effects",
    "Poem",
    "In Memory Of",
    "Animatronics Supervisor",
    "Fight Choreographer",
    "Dialect Coach",
    "Steadycam",
    "Digital Producer",
    "Thanks",
    "Animatronics Designer",
    "Marine Coordinator",
    "Photoscience Manager",
    "Special Sound Effects",
    "Armory Coordinator",
    "Pyrotechnician",
    "Techno Crane Operator",
    "Post Production Supervisor",
    "Sequence Supervisor",
    "Driver",
    "Technical Supervisor",
    "Creative Consultant",
    "Commissioning Editor",
    "Special Effects Coordinator",
    "Security",
    "Other",
    "Carpenter",
    "Sequence Lead",
    "Department Administrator",
    "Sets & Props Supervisor",
    "Mixing Engineer",
    "Title Graphics",
    "Visual Effects Art Director",
    "Video Game",
    "Armorer",
    "Aerial Coordinator",
    "Animal Wrangler",
    "Drone Operator",
    "Stunts",
    "Supervising Animator",
    "Projection",
    "Tattooist",
    "Sets & Props Artist",
    "Cableman",
    "Scenic Artist",
    "Executive Music Producer",
    "Animal Coordinator",
    "Administrative Assistant",
    "Stunt Double",
    "Assistant Craft Service",
    "Cast Driver",
    "Digital Supervisor",
    "Medical Consultant",
    "Playback Coordinator",
    "Set Runner",
    "Specialized Driver",
    "Transcriptions",
    "Clearances Consultant",
    "Series Publicist",
    "Stunt Driver",
    "Child Wrangler",
    "Dialogue Coach",
    "Key Special Effects",
    "Assistant Script",
    "Scientific Consultant",
    "Special Effects Assistant",
    "Special Effects Manager",
    "Vehicles Wrangler",
    "Base Camp Operator",
    "Catering Head Chef",
    "Chaperone",
    "Clearances Coordinator",
    "Special Effects Best Boy",
    "Logistics Coordinator",
    "Master at Arms",
    "Post Production Scripts",
    "Sponsorship Director",
    "Assistant Picture Car Coordinator",
    "Vehicles Coordinator",
    "Catering",
    "Police Consultant",
    "Supervising Armorer",
    "Technical Advisor",
    "Acting Double",
    "Additional Script Supervisor",
    "Interactive Manager",
    "Assistant Vehicles Coordinator",
    "File Footage",
    "Head Driver",
    "Health and Safety",
    "Military Consultant",
    "Charge Scenic Artist",
    "Film Processor",
    "Key Scenic Artist",
    "Marine Pilot",
    "Unit Medic",
    "Chaperone Tutor",
    "Floor Runner",
    "Weapons Master",
    "Weapons Wrangler",
    "Security Coordinator",
    "Sponsorship Coordinator",
    "Captain Driver",
    "Director of Communications",
    "Generator Operator",
    "Intern",
    "Receptionist",
    "Special Effects Technician",
    "Assistant Chef"
  ]
},
{
  "department": "Camera",
  "jobs": [
    "Camera Department Manager",
    "Russian Arm Operator",
    "Additional Camera",
    "Dolly Grip",
    "Steadicam Operator",
    "Camera Technician",
    "Still Photographer",
    "Helicopter Camera",
    "Aerial Camera",
    "Second Unit Director of Photography",
    "Director of Photography",
    "Underwater Camera",
    "Grip",
    "Camera Intern",
    "Camera Operator",
    "Key Grip",
    "Additional Still Photographer",
    "Camera Supervisor",
    "Camera Loader",
    "Additional Photography",
    "First Assistant Camera",
    "Epk Camera Operator",
    "Underwater Director of Photography",
    "Ultimate Arm Operator",
    "Aerial Director of Photography",
    "Other",
    "Aerial Camera Technician",
    "Libra Head Technician",
    "Additional Director of Photography",
    "Additional First Assistant Camera",
    "BTS Photographer",
    "Camera Trainee",
    "Focus Puller",
    "Second Assistant \"D\" Camera",
    "Videojournalist",
    "Epk Director",
    "Assistant Camera",
    "BTS Footage",
    "Second Company Grip",
    "Third Assistant Camera",
    "Additional Second Assistant Camera",
    "Best Boy Grip",
    "Red Technician",
    "\"D\" Camera Operator",
    "Set Photographer",
    "\"A\" Camera Operator",
    "\"B\" Camera Operator",
    "\"C\" Camera Operator",
    "Camera Car",
    "Camera Production Assistant",
    "Clapper Loader",
    "First Assistant \"B\" Camera",
    "First Assistant \"D\" Camera",
    "Camera Department Production Assistant",
    "Additional Key Grip",
    "Digital Imaging Technician",
    "First Assistant \"C\" Camera",
    "First Company Grip",
    "Second Assistant Camera",
    "Third Assistant \"A\" Camera",
    "Assistant Grip",
    "Jimmy Jib Operator",
    "Third Assistant \"B\" Camera",
    "Additional Grip",
    "Drone Cinematographer",
    "Phantom Operator",
    "Second Assistant \"B\" Camera",
    "Underwater Stills Photographer",
    "Second Assistant \"C\" Camera",
    "Video Report",
    "Additional Set Photographer",
    "Drone Pilot",
    "Additional Underwater Photography",
    "Data Wrangler",
    "First Assistant \"A\" Camera",
    "Head of Layout",
    "Second Assistant \"A\" Camera",
    "Third Assistant \"C\" Camera",
    "Third Assistant \"D\" Camera",
    "Underwater Epk Photographer",
    "BTS Videographer",
    "Camera Truck",
    "Epk Producer"
  ]
},
{
  "department": "Writing",
  "jobs": [
    "Writer",
    "Storyboard",
    "Story Editor",
    "Idea",
    "Script Editor",
    "Short Story",
    "Story",
    "Teleplay",
    "Adaptation",
    "Author",
    "Scenario Writer",
    "Script Consultant",
    "Opera",
    "Musical",
    "Comic Book",
    "Series Composition",
    "Novel",
    "Dialogue",
    "Co-Writer",
    "Characters",
    "Theatre Play",
    "Other",
    "Screenstory",
    "Original Story",
    "Creative Producer",
    "Book",
    "Screenplay",
    "Original Series Creator",
    "Graphic Novel",
    "Original Film Writer",
    "Story Consultant",
    "Writers' Assistant",
    "Executive Story Editor",
    "Story Manager",
    "Senior Story Editor",
    "Story Supervisor",
    "Staff Writer",
    "Writers' Production",
    "Story Artist",
    "Story Developer",
    "Head of Story",
    "Lyricist",
    "Junior Story Editor",
    "Original Concept",
    "Story Coordinator"
  ]
},
{
  "department": "Art",
  "jobs": [
    "Art Direction",
    "Production Design",
    "Set Designer",
    "Interior Designer",
    "Prop Designer",
    "Assistant Set Designer",
    "Dressing Prop",
    "Head Designer",
    "Gun Wrangler",
    "Additional Set Dresser",
    "Assistant Decorator",
    "Assistant Production Design",
    "Construction Grip",
    "Construction Manager",
    "First Assistant Property Master",
    "Greensman",
    "Construction Foreman",
    "Lead Painter",
    "Assistant Director of Photography",
    "Additional Key Construction Grip",
    "First Assistant Art Direction",
    "Digital Storyboarding",
    "Head Carpenter",
    "Assistant Property Master",
    "Co-Art Director",
    "Conceptual Illustrator",
    "Assistant Set Propsman",
    "Storyboard Designer",
    "Assistant Set Decoration Buyer",
    "Concept Artist",
    "Set Decorating Coordinator",
    "Construction Buyer",
    "Decorator",
    "Art Department Assistant",
    "Background Designer",
    "Sign Painter",
    "Title Designer",
    "Art Designer",
    "Art Direction Intern",
    "Creative Director",
    "Sculptor",
    "Assistant Set Dresser",
    "Additional Storyboarding",
    "Settings",
    "Other",
    "Production Illustrator",
    "Standby Painter",
    "Assistant Art Director",
    "Art Department Coordinator",
    "Draughtsman",
    "Additional Construction Grip",
    "Art Department Trainee",
    "Art Department Manager",
    "Graphic Designer",
    "Head Decorator",
    "Supervising Art Director",
    "Construction Coordinator",
    "Lead Set Dresser",
    "Set Dresser",
    "Additional Construction",
    "Assistant Set Decoration",
    "Set Decoration",
    "Leadman",
    "Daily Grip",
    "Conceptual Design",
    "Set Decoration Buyer",
    "Property Master",
    "Location Scout",
    "Painter",
    "Property Builder",
    "Runner Art Department",
    "Paint Coordinator",
    "Storyboard Artist",
    "Special Props",
    "Standby Carpenter",
    "On Set Props",
    "Set Propsman",
    "Property Graphic Designer",
    "Petty Cash Buyer",
    "Head Greensman",
    "Title Illustration",
    "Property Buyer",
    "Props",
    "Standby Property Master",
    "Shop Electric",
    "On Set Key Props",
    "Key Construction Grip",
    "Key Set Painter",
    "Standby Art Director",
    "Opening Title Sequence",
    "Key Carpenter",
    "Second Assistant Art Director",
    "Textile Artist",
    "Set Painter",
    "Web Designer",
    "Main Title Designer",
    "On Set Computer Graphics",
    "Original Series Design",
    "Set Dressing Buyer",
    "Set Supervisor",
    "Storyboard Assistant",
    "Set Buyer",
    "Supervising Carpenter",
    "Swing",
    "Helping Hand"
  ]
},
{
  "department": "Actors",
  "jobs": [
    "Cameo",
    "Actor",
    "Voice",
    "Special Guest",
    "Stunt Double"
  ]
},
{
  "department": "Directing",
  "jobs": [
    "Director",
    "Script Supervisor",
    "Layout",
    "Continuity",
    "Special Guest Director",
    "Other",
    "Assistant Director",
    "Co-Director",
    "Second Assistant Director",
    "Third Assistant Director",
    "Script Coordinator",
    "First Assistant Director",
    "Insert Unit Director",
    "Second Second Assistant Director",
    "Second Unit First Assistant Director",
    "Insert Unit First Assistant Director",
    "Field Director",
    "Crowd Assistant Director",
    "Stage Director",
    "Action Director",
    "Additional Second Assistant Director",
    "Assistant Director Trainee",
    "Second Assistant Director Trainee",
    "Additional Third Assistant Director",
    "First Assistant Director (Prep)",
    "First Assistant Director Trainee",
    "Second Unit Director",
    "Series Director"
  ]
},
{
  "department": "Sound",
  "jobs": [
    "Music Editor",
    "Sound Designer",
    "Sound Recordist",
    "Assistant Sound Editor",
    "Sound Effects",
    "Supervising ADR Editor",
    "Utility Sound",
    "Original Music Composer",
    "Music Supervisor",
    "ADR Supervisor",
    "Playback Singer",
    "Supervising Music Editor",
    "Sound Director",
    "Dialogue Editor",
    "Boom Operator",
    "Songs",
    "Orchestrator",
    "Supervising Sound Effects Editor",
    "Recording Supervision",
    "Additional Music Supervisor",
    "Sound",
    "Musician",
    "Music Programmer",
    "Scoring Mixer",
    "Additional Sound Re-Recordist",
    "Supervising Sound Editor",
    "Sound Re-Recording Mixer",
    "Sound Engineer",
    "Foley Editor",
    "Music Score Producer",
    "Additional Soundtrack",
    "Foley",
    "Sound Montage Associate",
    "Music Director",
    "Sound Effects Editor",
    "Music",
    "First Assistant Sound Editor",
    "Dolby Consultant",
    "Production Sound Mixer",
    "Other",
    "Sound Effects Designer",
    "Theme Song Performance",
    "ADR & Dubbing",
    "Vocal Coach",
    "Additional Sound Re-Recording Mixer",
    "Assistant Music Supervisor",
    "Supervising Dialogue Editor",
    "Sound Editor",
    "Sound Mixer",
    "ADR Editor",
    "Apprentice Sound Editor",
    "Conductor",
    "Foley Recordist",
    "Assistant Dialogue Editor",
    "Assistant Sound Designer",
    "Foley Recording Engineer",
    "Music Sound Design and Processing",
    "Second Assistant Sound",
    "Music Coordinator",
    "O.B. Sound",
    "ADR Engineer",
    "Audio Post Coordinator",
    "Location Sound Recordist",
    "Music Consultant",
    "Sound Technical Supervisor",
    "Assistant Sound Engineer",
    "Sound Mix Technician",
    "Additional Production Sound Mixer",
    "Foley Mixer",
    "Keyboard Programmer",
    "Location Sound Assistant",
    "Sound Post Production Coordinator",
    "ADR Recordist",
    "Loop Group Coordinator",
    "Music Producer",
    "ADR Recording Engineer",
    "Sound Supervisor",
    "ADR Editor",
    "Foley Artist",
    "Joint ADR Mixer",
    "Sound Assistant",
    "Sound Post Supervisor",
    "Assistant Foley Artist",
    "Music Arranger",
    "Music Supervision Assistant",
    "ADR Coordinator",
    "Main Title Theme Composer",
    "Music Co-Supervisor",
    "ADR Post Producer",
    "Foley Supervisor",
    "Sound Re-Recording Assistant",
    "ADR Mixer",
    "Digital Foley Artist",
    "Location Sound Mixer",
    "Vocals"
  ]
},
{
  "department": "Visual Effects",
  "jobs": [
    "Chief Technician / Stop-Motion Expert",
    "Visual Development",
    "Animation Manager",
    "I/O Manager",
    "3D Modeller",
    "CGI Director",
    "Mechanical Designer",
    "Animation Fix Coordinator",
    "Pyrotechnic Supervisor",
    "Animation Director",
    "Battle Motion Coordinator",
    "Visual Effects Producer",
    "Color Designer",
    "Pre-Visualization Supervisor",
    "3D Animator",
    "Fix Animator",
    "VFX Supervisor",
    "Character Modelling Supervisor",
    "Visual Effects Technical Director",
    "Visual Effects",
    "Animation Supervisor",
    "Simulation & Effects Artist",
    "3D Supervisor",
    "Creature Technical Director",
    "Lead Character Designer",
    "VFX Director of Photography",
    "Imaging Science",
    "VFX Editor",
    "2D Artist",
    "3D Coordinator",
    "3D Tracking Layout",
    "Creature Design",
    "Visual Effects Supervisor",
    "Visual Effects Designer",
    "Digital Compositor",
    "Matchmove Supervisor",
    "Stereoscopic Coordinator",
    "VFX Lighting Artist",
    "Shading",
    "VFX Production Coordinator",
    "Simulation & Effects Production Assistant",
    "Key Animation",
    "Lead Animator",
    "Opening/Ending Animation",
    "I/O Supervisor",
    "Special Effects Supervisor",
    "2D Supervisor",
    "Character Designer",
    "Animation Department Coordinator",
    "3D Director",
    "3D Sequence Supervisor",
    "CG Animator",
    "CG Painter",
    "VFX Artist",
    "3D Artist",
    "Animation Production Assistant",
    "Mechanical & Creature Designer",
    "Cloth Setup",
    "CG Engineer",
    "Additional Effects Development",
    "Visual Effects Coordinator",
    "3D Generalist",
    "Digital Effects Producer",
    "Roto Supervisor",
    "Animation",
    "Modeling",
    "24 Frame Playback",
    "Creature Effects Technical Director",
    "Visual Effects Assistant Editor",
    "Visual Effects Director",
    "Visual Effects Production Manager",
    "Cyber Scanning Supervisor",
    "Generalist",
    "Visual Effects Camera",
    "Compositing Artist",
    "Compositing Supervisor",
    "Rotoscoping Artist",
    "Senior Modeller",
    "Stereoscopic Technical Director",
    "Director of Previsualization",
    "Photo Retouching",
    "Smoke Artist",
    "CG Artist",
    "Digital Film Recording",
    "Head of Animation",
    "Senior Animator",
    "Visual Effects Compositor",
    "Animation Coordinator",
    "Layout Supervisor",
    "Pre-Visualization Coordinator",
    "Visual Effects Production Assistant",
    "Modelling Supervisor",
    "Senior Visual Effects Supervisor",
    "Animation Technical Director",
    "2D Sequence Supervisor",
    "Lead Creature Designer",
    "Visual Effects Lineup",
    "Senior Generalist",
    "Compositing Lead",
    "Matte Painter",
    "Pipeline Technical Director",
    "Supervising Animation Director",
    "Additional Visual Effects",
    "Effects Supervisor",
    "Stereoscopic Supervisor"
  ]
},
{
  "department": "Editing",
  "jobs": [
    "Additional Editorial Assistant",
    "Assistant Editor",
    "Editorial Manager",
    "Editor",
    "Archival Footage Research",
    "Supervising Film Editor",
    "Editorial Production Assistant",
    "Digital Intermediate",
    "Associate Editor",
    "Additional Editing",
    "Editorial Coordinator",
    "Co-Editor",
    "Archival Footage Coordinator",
    "Color Timer",
    "First Assistant Editor",
    "Other",
    "Negative Cutter",
    "Editorial Services",
    "Atmos Editor",
    "Additional Editor",
    "Color Assistant",
    "Digital Color Timer",
    "Senior Digital Intermediate Colorist",
    "3D Editor",
    "Colorist",
    "EPK Editor",
    "Senior Colorist",
    "First Assistant Picture Editor",
    "Supervising Editor",
    "Color Grading",
    "Dailies Operator",
    "Digital Colorist",
    "Lead Editor",
    "3D Digital Colorist",
    "Assistant Picture Editor",
    "Dailies Technician",
    "Digital Conform Editor",
    "Project Manager",
    "Stereoscopic Editor",
    "Additional Colorist",
    "Dailies Manager",
    "Digital Intermediate Editor",
    "Digital Intermediate Colorist",
    "Digital Intermediate Data Wrangler",
    "Consulting Editor",
    "Editorial Consultant",
    "Digital Intermediate Producer",
    "Online Editor",
    "Digital Intermediate Assistant"
  ]
},
{
  "department": "Lighting",
  "jobs": [
    "Directing Lighting Artist",
    "Best Boy Electric",
    "Rigging Gaffer",
    "Best Boy Electrician",
    "Lighting Coordinator",
    "Lighting Director",
    "Underwater Gaffer",
    "Lighting Technician",
    "Gaffer",
    "Lighting Manager",
    "Master Lighting Artist",
    "Other",
    "Rigging Supervisor",
    "Lighting Supervisor",
    "Lighting Production Assistant",
    "Rigging Grip",
    "Chief Lighting Technician",
    "Lighting Artist",
    "Electrician",
    "O.B. Lighting",
    "Additional Gaffer",
    "Key Rigging Grip",
    "Lighting Design",
    "Assistant Electrician",
    "Assistant Chief Lighting Technician",
    "Best Boy Lighting Technician",
    "Daily Electrics",
    "Genetator Operator",
    "Lighting Programmer",
    "Standby Rigger",
    "Additional Lighting Technician",
    "Assistant Gaffer"
  ]
},
{
  "department": "Costume & Make-Up",
  "jobs": [
    "Set Costumer",
    "Co-Costume Designer",
    "Makeup Effects Designer",
    "Hair Department Head",
    "Tattoo Designer",
    "Seamstress",
    "Prosthetic Makeup Artist",
    "Set Dressing Manager",
    "Set Dressing Production Assistant",
    "Hair Setup",
    "Key Hair Stylist",
    "Makeup Artist",
    "Makeup Designer",
    "Hair Designer",
    "Tailor",
    "Ager/Dyer",
    "Costume Design",
    "Key Makeup Artist",
    "Key Set Costumer",
    "Set Dressing Artist",
    "Set Dressing Supervisor",
    "Shoe Design",
    "Costume Coordinator",
    "Key Costumer",
    "Costume Supervisor",
    "Makeup Department Head",
    "Prosthetic Designer",
    "Costume Illustrator",
    "Wigmaker",
    "Other",
    "Hair Supervisor",
    "Wardrobe Supervisor",
    "Hairstylist",
    "Prosthetic Supervisor",
    "Facial Setup Artist",
    "Assistant Costume Designer",
    "Costume Consultant",
    "Makeup Supervisor",
    "Wig Designer",
    "Assistant Hairstylist",
    "Hairdresser",
    "Key Hairdresser",
    "Special Effects Key Makeup Artist",
    "Special Effects Makeup Artist",
    "Contact Lens Painter",
    "Prosthetics Painter",
    "Truck Costumer",
    "Additional Wardrobe Assistant",
    "Costumer",
    "Extras Dresser",
    "Makeup & Hair Assistant",
    "Daily Makeup & Hair",
    "Dresser",
    "Makeup Trainee",
    "Wardrobe Intern",
    "Costume Mistress",
    "Wardrobe Specialized Technician",
    "Makeup & Hair",
    "Prosthetics Sculptor",
    "First Assistant Hairstylist",
    "First Assistant Makeup Artist",
    "Lead Costumer",
    "Hair Assistant",
    "Principal Costumer",
    "Truck Supervisor",
    "Costume Set Supervisor",
    "Key Dresser",
    "On Set Dresser",
    "Additional Hairstylist",
    "Assistant Hairdresser",
    "Costume Assistant",
    "Costume Designer",
    "Daily Wardrobe",
    "Extras Makeup Artist",
    "Contact Lens Technician",
    "Costume Standby",
    "Prosthetics",
    "Wardrobe Assistant",
    "Wardrobe Designer",
    "Wardrobe Master",
    "Assistant Makeup Artist",
    "Contact Lens Designer",
    "Wardrobe Coordinator"
  ]
}
]);
});

router.get('/configuration/languages', function(req, res, next) {
  res.json([
{
  "iso_639_1": "an",
  "english_name": "Aragonese",
  "name": ""
},
{
  "iso_639_1": "ak",
  "english_name": "Akan",
  "name": ""
},
{
  "iso_639_1": "cr",
  "english_name": "Cree",
  "name": ""
},
{
  "iso_639_1": "az",
  "english_name": "Azerbaijani",
  "name": "Azərbaycan"
},
{
  "iso_639_1": "cs",
  "english_name": "Czech",
  "name": "Český"
},
{
  "iso_639_1": "aa",
  "english_name": "Afar",
  "name": ""
},
{
  "iso_639_1": "br",
  "english_name": "Breton",
  "name": ""
},
{
  "iso_639_1": "af",
  "english_name": "Afrikaans",
  "name": "Afrikaans"
},
{
  "iso_639_1": "bo",
  "english_name": "Tibetan",
  "name": ""
},
{
  "iso_639_1": "ce",
  "english_name": "Chechen",
  "name": ""
},
{
  "iso_639_1": "kw",
  "english_name": "Cornish",
  "name": ""
},
{
  "iso_639_1": "fo",
  "english_name": "Faroese",
  "name": ""
},
{
  "iso_639_1": "la",
  "english_name": "Latin",
  "name": "Latin"
},
{
  "iso_639_1": "ng",
  "english_name": "Ndonga",
  "name": ""
},
{
  "iso_639_1": "sc",
  "english_name": "Sardinian",
  "name": ""
},
{
  "iso_639_1": "ti",
  "english_name": "Tigrinya",
  "name": ""
},
{
  "iso_639_1": "tn",
  "english_name": "Tswana",
  "name": ""
},
{
  "iso_639_1": "tr",
  "english_name": "Turkish",
  "name": "Türkçe"
},
{
  "iso_639_1": "pa",
  "english_name": "Punjabi",
  "name": "ਪੰਜਾਬੀ"
},
{
  "iso_639_1": "et",
  "english_name": "Estonian",
  "name": "Eesti"
},
{
  "iso_639_1": "fr",
  "english_name": "French",
  "name": "Français"
},
{
  "iso_639_1": "ha",
  "english_name": "Hausa",
  "name": "Hausa"
},
{
  "iso_639_1": "is",
  "english_name": "Icelandic",
  "name": "Íslenska"
},
{
  "iso_639_1": "li",
  "english_name": "Limburgish",
  "name": ""
},
{
  "iso_639_1": "ln",
  "english_name": "Lingala",
  "name": ""
},
{
  "iso_639_1": "ss",
  "english_name": "Swati",
  "name": ""
},
{
  "iso_639_1": "ab",
  "english_name": "Abkhazian",
  "name": ""
},
{
  "iso_639_1": "sh",
  "english_name": "Serbo-Croatian",
  "name": ""
},
{
  "iso_639_1": "eu",
  "english_name": "Basque",
  "name": "euskera"
},
{
  "iso_639_1": "fy",
  "english_name": "Frisian",
  "name": ""
},
{
  "iso_639_1": "ja",
  "english_name": "Japanese",
  "name": "日本語"
},
{
  "iso_639_1": "oj",
  "english_name": "Ojibwa",
  "name": ""
},
{
  "iso_639_1": "or",
  "english_name": "Oriya",
  "name": ""
},
{
  "iso_639_1": "pi",
  "english_name": "Pali",
  "name": ""
},
{
  "iso_639_1": "su",
  "english_name": "Sundanese",
  "name": ""
},
{
  "iso_639_1": "th",
  "english_name": "Thai",
  "name": "ภาษาไทย"
},
{
  "iso_639_1": "ig",
  "english_name": "Igbo",
  "name": ""
},
{
  "iso_639_1": "id",
  "english_name": "Indonesian",
  "name": "Bahasa indonesia"
},
{
  "iso_639_1": "kk",
  "english_name": "Kazakh",
  "name": "қазақ"
},
{
  "iso_639_1": "ki",
  "english_name": "Kikuyu",
  "name": ""
},
{
  "iso_639_1": "ug",
  "english_name": "Uighur",
  "name": ""
},
{
  "iso_639_1": "ve",
  "english_name": "Venda",
  "name": ""
},
{
  "iso_639_1": "rw",
  "english_name": "Kinyarwanda",
  "name": "Kinyarwanda"
},
{
  "iso_639_1": "mi",
  "english_name": "Maori",
  "name": ""
},
{
  "iso_639_1": "nv",
  "english_name": "Navajo",
  "name": ""
},
{
  "iso_639_1": "hi",
  "english_name": "Hindi",
  "name": "हिन्दी"
},
{
  "iso_639_1": "pt",
  "english_name": "Portuguese",
  "name": "Português"
},
{
  "iso_639_1": "sg",
  "english_name": "Sango",
  "name": ""
},
{
  "iso_639_1": "sk",
  "english_name": "Slovak",
  "name": "Slovenčina"
},
{
  "iso_639_1": "sr",
  "english_name": "Serbian",
  "name": "Srpski"
},
{
  "iso_639_1": "ty",
  "english_name": "Tahitian",
  "name": ""
},
{
  "iso_639_1": "xh",
  "english_name": "Xhosa",
  "name": ""
},
{
  "iso_639_1": "ar",
  "english_name": "Arabic",
  "name": "العربية"
},
{
  "iso_639_1": "co",
  "english_name": "Corsican",
  "name": ""
},
{
  "iso_639_1": "bi",
  "english_name": "Bislama",
  "name": ""
},
{
  "iso_639_1": "eo",
  "english_name": "Esperanto",
  "name": "Esperanto"
},
{
  "iso_639_1": "hz",
  "english_name": "Herero",
  "name": ""
},
{
  "iso_639_1": "fi",
  "english_name": "Finnish",
  "name": "suomi"
},
{
  "iso_639_1": "iu",
  "english_name": "Inuktitut",
  "name": ""
},
{
  "iso_639_1": "lv",
  "english_name": "Latvian",
  "name": "Latviešu"
},
{
  "iso_639_1": "it",
  "english_name": "Italian",
  "name": "Italiano"
},
{
  "iso_639_1": "nl",
  "english_name": "Dutch",
  "name": "Nederlands"
},
{
  "iso_639_1": "kn",
  "english_name": "Kannada",
  "name": "?????"
},
{
  "iso_639_1": "sa",
  "english_name": "Sanskrit",
  "name": ""
},
{
  "iso_639_1": "sq",
  "english_name": "Albanian",
  "name": "shqip"
},
{
  "iso_639_1": "tl",
  "english_name": "Tagalog",
  "name": ""
},
{
  "iso_639_1": "lb",
  "english_name": "Letzeburgesch",
  "name": ""
},
{
  "iso_639_1": "ts",
  "english_name": "Tsonga",
  "name": ""
},
{
  "iso_639_1": "ml",
  "english_name": "Malayalam",
  "name": ""
},
{
  "iso_639_1": "vo",
  "english_name": "Volapük",
  "name": ""
},
{
  "iso_639_1": "zu",
  "english_name": "Zulu",
  "name": "isiZulu"
},
{
  "iso_639_1": "os",
  "english_name": "Ossetian; Ossetic",
  "name": ""
},
{
  "iso_639_1": "sm",
  "english_name": "Samoan",
  "name": ""
},
{
  "iso_639_1": "za",
  "english_name": "Zhuang",
  "name": ""
},
{
  "iso_639_1": "bn",
  "english_name": "Bengali",
  "name": "বাংলা"
},
{
  "iso_639_1": "cu",
  "english_name": "Slavic",
  "name": ""
},
{
  "iso_639_1": "ga",
  "english_name": "Irish",
  "name": "Gaeilge"
},
{
  "iso_639_1": "gv",
  "english_name": "Manx",
  "name": ""
},
{
  "iso_639_1": "hu",
  "english_name": "Hungarian",
  "name": "Magyar"
},
{
  "iso_639_1": "jv",
  "english_name": "Javanese",
  "name": ""
},
{
  "iso_639_1": "kr",
  "english_name": "Kanuri",
  "name": ""
},
{
  "iso_639_1": "km",
  "english_name": "Khmer",
  "name": ""
},
{
  "iso_639_1": "ky",
  "english_name": "Kirghiz",
  "name": "??????"
},
{
  "iso_639_1": "na",
  "english_name": "Nauru",
  "name": ""
},
{
  "iso_639_1": "nr",
  "english_name": "Ndebele",
  "name": ""
},
{
  "iso_639_1": "oc",
  "english_name": "Occitan",
  "name": ""
},
{
  "iso_639_1": "ro",
  "english_name": "Romanian",
  "name": "Română"
},
{
  "iso_639_1": "ru",
  "english_name": "Russian",
  "name": "Pусский"
},
{
  "iso_639_1": "hy",
  "english_name": "Armenian",
  "name": ""
},
{
  "iso_639_1": "ch",
  "english_name": "Chamorro",
  "name": "Finu' Chamorro"
},
{
  "iso_639_1": "xx",
  "english_name": "No Language",
  "name": "No Language"
},
{
  "iso_639_1": "ba",
  "english_name": "Bashkir",
  "name": ""
},
{
  "iso_639_1": "gl",
  "english_name": "Galician",
  "name": "Galego"
},
{
  "iso_639_1": "io",
  "english_name": "Ido",
  "name": ""
},
{
  "iso_639_1": "lu",
  "english_name": "Luba-Katanga",
  "name": ""
},
{
  "iso_639_1": "mh",
  "english_name": "Marshall",
  "name": ""
},
{
  "iso_639_1": "mg",
  "english_name": "Malagasy",
  "name": ""
},
{
  "iso_639_1": "mo",
  "english_name": "Moldavian",
  "name": ""
},
{
  "iso_639_1": "mn",
  "english_name": "Mongolian",
  "name": ""
},
{
  "iso_639_1": "nd",
  "english_name": "Ndebele",
  "name": ""
},
{
  "iso_639_1": "no",
  "english_name": "Norwegian",
  "name": "Norsk"
},
{
  "iso_639_1": "pl",
  "english_name": "Polish",
  "name": "Polski"
},
{
  "iso_639_1": "sw",
  "english_name": "Swahili",
  "name": "Kiswahili"
},
{
  "iso_639_1": "tg",
  "english_name": "Tajik",
  "name": ""
},
{
  "iso_639_1": "to",
  "english_name": "Tonga",
  "name": ""
},
{
  "iso_639_1": "wa",
  "english_name": "Walloon",
  "name": ""
},
{
  "iso_639_1": "yi",
  "english_name": "Yiddish",
  "name": ""
},
{
  "iso_639_1": "en",
  "english_name": "English",
  "name": "English"
},
{
  "iso_639_1": "as",
  "english_name": "Assamese",
  "name": ""
},
{
  "iso_639_1": "gd",
  "english_name": "Gaelic",
  "name": ""
},
{
  "iso_639_1": "kl",
  "english_name": "Kalaallisut",
  "name": ""
},
{
  "iso_639_1": "my",
  "english_name": "Burmese",
  "name": ""
},
{
  "iso_639_1": "qu",
  "english_name": "Quechua",
  "name": ""
},
{
  "iso_639_1": "sn",
  "english_name": "Shona",
  "name": ""
},
{
  "iso_639_1": "uk",
  "english_name": "Ukrainian",
  "name": "Український"
},
{
  "iso_639_1": "fa",
  "english_name": "Persian",
  "name": "فارسی"
},
{
  "iso_639_1": "ka",
  "english_name": "Georgian",
  "name": "ქართული"
},
{
  "iso_639_1": "gu",
  "english_name": "Gujarati",
  "name": ""
},
{
  "iso_639_1": "av",
  "english_name": "Avaric",
  "name": ""
},
{
  "iso_639_1": "ae",
  "english_name": "Avestan",
  "name": ""
},
{
  "iso_639_1": "gn",
  "english_name": "Guarani",
  "name": ""
},
{
  "iso_639_1": "mt",
  "english_name": "Maltese",
  "name": "Malti"
},
{
  "iso_639_1": "ne",
  "english_name": "Nepali",
  "name": ""
},
{
  "iso_639_1": "sv",
  "english_name": "Swedish",
  "name": "svenska"
},
{
  "iso_639_1": "tt",
  "english_name": "Tatar",
  "name": ""
},
{
  "iso_639_1": "wo",
  "english_name": "Wolof",
  "name": "Wolof"
},
{
  "iso_639_1": "cn",
  "english_name": "Cantonese",
  "name": "广州话 / 廣州話"
},
{
  "iso_639_1": "cv",
  "english_name": "Chuvash",
  "name": ""
},
{
  "iso_639_1": "da",
  "english_name": "Danish",
  "name": "Dansk"
},
{
  "iso_639_1": "dz",
  "english_name": "Dzongkha",
  "name": ""
},
{
  "iso_639_1": "ny",
  "english_name": "Chichewa; Nyanja",
  "name": ""
},
{
  "iso_639_1": "rn",
  "english_name": "Rundi",
  "name": "Kirundi"
},
{
  "iso_639_1": "st",
  "english_name": "Sotho",
  "name": ""
},
{
  "iso_639_1": "tk",
  "english_name": "Turkmen",
  "name": ""
},
{
  "iso_639_1": "uz",
  "english_name": "Uzbek",
  "name": "ozbek"
},
{
  "iso_639_1": "vi",
  "english_name": "Vietnamese",
  "name": "Tiếng Việt"
},
{
  "iso_639_1": "el",
  "english_name": "Greek",
  "name": "ελληνικά"
},
{
  "iso_639_1": "ca",
  "english_name": "Catalan",
  "name": "Català"
},
{
  "iso_639_1": "cy",
  "english_name": "Welsh",
  "name": "Cymraeg"
},
{
  "iso_639_1": "de",
  "english_name": "German",
  "name": "Deutsch"
},
{
  "iso_639_1": "ks",
  "english_name": "Kashmiri",
  "name": ""
},
{
  "iso_639_1": "ms",
  "english_name": "Malay",
  "name": "Bahasa melayu"
},
{
  "iso_639_1": "nb",
  "english_name": "Norwegian Bokmål",
  "name": "Bokmål"
},
{
  "iso_639_1": "rm",
  "english_name": "Raeto-Romance",
  "name": ""
},
{
  "iso_639_1": "si",
  "english_name": "Sinhalese",
  "name": "සිංහල"
},
{
  "iso_639_1": "es",
  "english_name": "Spanish",
  "name": "Español"
},
{
  "iso_639_1": "te",
  "english_name": "Telugu",
  "name": "తెలుగు"
},
{
  "iso_639_1": "tw",
  "english_name": "Twi",
  "name": ""
},
{
  "iso_639_1": "ps",
  "english_name": "Pushto",
  "name": "پښتو"
},
{
  "iso_639_1": "bg",
  "english_name": "Bulgarian",
  "name": "български език"
},
{
  "iso_639_1": "mk",
  "english_name": "Macedonian",
  "name": ""
},
{
  "iso_639_1": "ik",
  "english_name": "Inupiaq",
  "name": ""
},
{
  "iso_639_1": "ko",
  "english_name": "Korean",
  "name": "한국어/조선말"
},
{
  "iso_639_1": "lt",
  "english_name": "Lithuanian",
  "name": "Lietuvių"
},
{
  "iso_639_1": "om",
  "english_name": "Oromo",
  "name": ""
},
{
  "iso_639_1": "se",
  "english_name": "Northern Sami",
  "name": ""
},
{
  "iso_639_1": "so",
  "english_name": "Somali",
  "name": "Somali"
},
{
  "iso_639_1": "ta",
  "english_name": "Tamil",
  "name": "தமிழ்"
},
{
  "iso_639_1": "ur",
  "english_name": "Urdu",
  "name": "اردو"
},
{
  "iso_639_1": "am",
  "english_name": "Amharic",
  "name": ""
},
{
  "iso_639_1": "bs",
  "english_name": "Bosnian",
  "name": "Bosanski"
},
{
  "iso_639_1": "dv",
  "english_name": "Divehi",
  "name": ""
},
{
  "iso_639_1": "ay",
  "english_name": "Aymara",
  "name": ""
},
{
  "iso_639_1": "bm",
  "english_name": "Bambara",
  "name": "Bamanankan"
},
{
  "iso_639_1": "ii",
  "english_name": "Yi",
  "name": ""
},
{
  "iso_639_1": "ie",
  "english_name": "Interlingue",
  "name": ""
},
{
  "iso_639_1": "kv",
  "english_name": "Komi",
  "name": ""
},
{
  "iso_639_1": "ku",
  "english_name": "Kurdish",
  "name": ""
},
{
  "iso_639_1": "nn",
  "english_name": "Norwegian Nynorsk",
  "name": ""
},
{
  "iso_639_1": "zh",
  "english_name": "Mandarin",
  "name": "普通话"
},
{
  "iso_639_1": "he",
  "english_name": "Hebrew",
  "name": "עִבְרִית"
},
{
  "iso_639_1": "ee",
  "english_name": "Ewe",
  "name": "Èʋegbe"
},
{
  "iso_639_1": "fj",
  "english_name": "Fijian",
  "name": ""
},
{
  "iso_639_1": "ff",
  "english_name": "Fulah",
  "name": "Fulfulde"
},
{
  "iso_639_1": "ht",
  "english_name": "Haitian; Haitian Creole",
  "name": ""
},
{
  "iso_639_1": "hr",
  "english_name": "Croatian",
  "name": "Hrvatski"
},
{
  "iso_639_1": "ia",
  "english_name": "Interlingua",
  "name": ""
},
{
  "iso_639_1": "kj",
  "english_name": "Kuanyama",
  "name": ""
},
{
  "iso_639_1": "lo",
  "english_name": "Lao",
  "name": ""
},
{
  "iso_639_1": "lg",
  "english_name": "Ganda",
  "name": ""
},
{
  "iso_639_1": "mr",
  "english_name": "Marathi",
  "name": ""
},
{
  "iso_639_1": "sd",
  "english_name": "Sindhi",
  "name": ""
},
{
  "iso_639_1": "be",
  "english_name": "Belarusian",
  "name": "беларуская мова"
},
{
  "iso_639_1": "ho",
  "english_name": "Hiri Motu",
  "name": ""
},
{
  "iso_639_1": "kg",
  "english_name": "Kongo",
  "name": ""
},
{
  "iso_639_1": "sl",
  "english_name": "Slovenian",
  "name": "Slovenščina"
},
{
  "iso_639_1": "yo",
  "english_name": "Yoruba",
  "name": "Èdè Yorùbá"
}
]);
});

router.get('/configuration/primary_translations', function(req, res, next) {
  res.json([
"af-ZA",
"ar-AE",
"ar-SA",
"be-BY",
"bg-BG",
"bn-BD",
"ca-ES",
"ch-GU",
"cn-CN",
"cs-CZ",
"cy-GB",
"da-DK",
"de-AT",
"de-CH",
"de-DE",
"el-GR",
"en-AU",
"en-CA",
"en-GB",
"en-IE",
"en-NZ",
"en-US",
"eo-EO",
"es-ES",
"es-MX",
"et-EE",
"eu-ES",
"fa-IR",
"fi-FI",
"fr-CA",
"fr-FR",
"ga-IE",
"gd-GB",
"gl-ES",
"he-IL",
"hi-IN",
"hr-HR",
"hu-HU",
"id-ID",
"it-IT",
"ja-JP",
"ka-GE",
"kk-KZ",
"kn-IN",
"ko-KR",
"ky-KG",
"lt-LT",
"lv-LV",
"ml-IN",
"mr-IN",
"ms-MY",
"ms-SG",
"nb-NO",
"nl-BE",
"nl-NL",
"no-NO",
"pa-IN",
"pl-PL",
"pt-BR",
"pt-PT",
"ro-RO",
"ru-RU",
"si-LK",
"sk-SK",
"sl-SI",
"sq-AL",
"sr-RS",
"sv-SE",
"ta-IN",
"te-IN",
"th-TH",
"tl-PH",
"tr-TR",
"uk-UA",
"vi-VN",
"zh-CN",
"zh-HK",
"zh-SG",
"zh-TW",
"zu-ZA"
]);
});

router.get('/configuration/timezones', function(req, res, next) {
  res.json([
{
  "iso_3166_1": "AD",
  "zones": [
    "Europe/Andorra"
  ]
},
{
  "iso_3166_1": "AE",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "AF",
  "zones": [
    "Asia/Kabul"
  ]
},
{
  "iso_3166_1": "AG",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "AI",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "AL",
  "zones": [
    "Europe/Tirane"
  ]
},
{
  "iso_3166_1": "AM",
  "zones": [
    "Asia/Yerevan"
  ]
},
{
  "iso_3166_1": "AO",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "AQ",
  "zones": [
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/Mawson",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Troll",
    "Asia/Urumqi",
    "Pacific/Auckland",
    "Pacific/Port_Moresby",
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "AR",
  "zones": [
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Cordoba",
    "America/Argentina/Salta",
    "America/Argentina/Jujuy",
    "America/Argentina/Tucuman",
    "America/Argentina/Catamarca",
    "America/Argentina/La_Rioja",
    "America/Argentina/San_Juan",
    "America/Argentina/Mendoza",
    "America/Argentina/San_Luis",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Ushuaia"
  ]
},
{
  "iso_3166_1": "AS",
  "zones": [
    "Pacific/Pago_Pago"
  ]
},
{
  "iso_3166_1": "AT",
  "zones": [
    "Europe/Vienna"
  ]
},
{
  "iso_3166_1": "AU",
  "zones": [
    "Australia/Lord_Howe",
    "Antarctica/Macquarie",
    "Australia/Hobart",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Broken_Hill",
    "Australia/Brisbane",
    "Australia/Lindeman",
    "Australia/Adelaide",
    "Australia/Darwin",
    "Australia/Perth",
    "Australia/Eucla"
  ]
},
{
  "iso_3166_1": "AW",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "AX",
  "zones": [
    "Europe/Helsinki"
  ]
},
{
  "iso_3166_1": "AZ",
  "zones": [
    "Asia/Baku"
  ]
},
{
  "iso_3166_1": "BA",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "BB",
  "zones": [
    "America/Barbados"
  ]
},
{
  "iso_3166_1": "BD",
  "zones": [
    "Asia/Dhaka"
  ]
},
{
  "iso_3166_1": "BE",
  "zones": [
    "Europe/Brussels"
  ]
},
{
  "iso_3166_1": "BF",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "BG",
  "zones": [
    "Europe/Sofia"
  ]
},
{
  "iso_3166_1": "BH",
  "zones": [
    "Asia/Qatar"
  ]
},
{
  "iso_3166_1": "BI",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "BJ",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "BL",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "BM",
  "zones": [
    "Atlantic/Bermuda"
  ]
},
{
  "iso_3166_1": "BN",
  "zones": [
    "Asia/Kuching"
  ]
},
{
  "iso_3166_1": "BO",
  "zones": [
    "America/La_Paz"
  ]
},
{
  "iso_3166_1": "BQ",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "BR",
  "zones": [
    "America/Noronha",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Maceio",
    "America/Bahia",
    "America/Sao_Paulo",
    "America/Campo_Grande",
    "America/Cuiaba",
    "America/Santarem",
    "America/Porto_Velho",
    "America/Boa_Vista",
    "America/Manaus",
    "America/Eirunepe",
    "America/Rio_Branco"
  ]
},
{
  "iso_3166_1": "BS",
  "zones": [
    "America/Toronto"
  ]
},
{
  "iso_3166_1": "BT",
  "zones": [
    "Asia/Thimphu"
  ]
},
{
  "iso_3166_1": "BV",
  "zones": []
},
{
  "iso_3166_1": "BW",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "BY",
  "zones": [
    "Europe/Minsk"
  ]
},
{
  "iso_3166_1": "BZ",
  "zones": [
    "America/Belize"
  ]
},
{
  "iso_3166_1": "CA",
  "zones": [
    "America/St_Johns",
    "America/Halifax",
    "America/Glace_Bay",
    "America/Moncton",
    "America/Goose_Bay",
    "America/Toronto",
    "America/Iqaluit",
    "America/Winnipeg",
    "America/Resolute",
    "America/Rankin_Inlet",
    "America/Regina",
    "America/Swift_Current",
    "America/Edmonton",
    "America/Cambridge_Bay",
    "America/Inuvik",
    "America/Dawson_Creek",
    "America/Fort_Nelson",
    "America/Whitehorse",
    "America/Dawson",
    "America/Vancouver",
    "America/Panama",
    "America/Puerto_Rico",
    "America/Phoenix"
  ]
},
{
  "iso_3166_1": "CC",
  "zones": [
    "Asia/Yangon"
  ]
},
{
  "iso_3166_1": "CD",
  "zones": [
    "Africa/Maputo",
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CF",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CG",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CH",
  "zones": [
    "Europe/Zurich"
  ]
},
{
  "iso_3166_1": "CI",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "CK",
  "zones": [
    "Pacific/Rarotonga"
  ]
},
{
  "iso_3166_1": "CL",
  "zones": [
    "America/Santiago",
    "America/Punta_Arenas",
    "Pacific/Easter"
  ]
},
{
  "iso_3166_1": "CM",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CN",
  "zones": [
    "Asia/Shanghai",
    "Asia/Urumqi"
  ]
},
{
  "iso_3166_1": "CO",
  "zones": [
    "America/Bogota"
  ]
},
{
  "iso_3166_1": "CR",
  "zones": [
    "America/Costa_Rica"
  ]
},
{
  "iso_3166_1": "CU",
  "zones": [
    "America/Havana"
  ]
},
{
  "iso_3166_1": "CV",
  "zones": [
    "Atlantic/Cape_Verde"
  ]
},
{
  "iso_3166_1": "CW",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "CX",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "CY",
  "zones": [
    "Asia/Nicosia",
    "Asia/Famagusta"
  ]
},
{
  "iso_3166_1": "CZ",
  "zones": [
    "Europe/Prague"
  ]
},
{
  "iso_3166_1": "DE",
  "zones": [
    "Europe/Berlin",
    "Europe/Zurich"
  ]
},
{
  "iso_3166_1": "DJ",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "DK",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "DM",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "DO",
  "zones": [
    "America/Santo_Domingo"
  ]
},
{
  "iso_3166_1": "DZ",
  "zones": [
    "Africa/Algiers"
  ]
},
{
  "iso_3166_1": "EC",
  "zones": [
    "America/Guayaquil",
    "Pacific/Galapagos"
  ]
},
{
  "iso_3166_1": "EE",
  "zones": [
    "Europe/Tallinn"
  ]
},
{
  "iso_3166_1": "EG",
  "zones": [
    "Africa/Cairo"
  ]
},
{
  "iso_3166_1": "EH",
  "zones": [
    "Africa/El_Aaiun"
  ]
},
{
  "iso_3166_1": "ER",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "ES",
  "zones": [
    "Europe/Madrid",
    "Africa/Ceuta",
    "Atlantic/Canary"
  ]
},
{
  "iso_3166_1": "ET",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "FI",
  "zones": [
    "Europe/Helsinki"
  ]
},
{
  "iso_3166_1": "FJ",
  "zones": [
    "Pacific/Fiji"
  ]
},
{
  "iso_3166_1": "FK",
  "zones": [
    "Atlantic/Stanley"
  ]
},
{
  "iso_3166_1": "FM",
  "zones": [
    "Pacific/Kosrae",
    "Pacific/Port_Moresby",
    "Pacific/Guadalcanal"
  ]
},
{
  "iso_3166_1": "FO",
  "zones": [
    "Atlantic/Faroe"
  ]
},
{
  "iso_3166_1": "FR",
  "zones": [
    "Europe/Paris"
  ]
},
{
  "iso_3166_1": "GA",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "GB",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "GD",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "GE",
  "zones": [
    "Asia/Tbilisi"
  ]
},
{
  "iso_3166_1": "GF",
  "zones": [
    "America/Cayenne"
  ]
},
{
  "iso_3166_1": "GG",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "GH",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "GI",
  "zones": [
    "Europe/Gibraltar"
  ]
},
{
  "iso_3166_1": "GL",
  "zones": [
    "America/Nuuk",
    "America/Danmarkshavn",
    "America/Scoresbysund",
    "America/Thule"
  ]
},
{
  "iso_3166_1": "GM",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "GN",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "GP",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "GQ",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "GR",
  "zones": [
    "Europe/Athens"
  ]
},
{
  "iso_3166_1": "GS",
  "zones": [
    "Atlantic/South_Georgia"
  ]
},
{
  "iso_3166_1": "GT",
  "zones": [
    "America/Guatemala"
  ]
},
{
  "iso_3166_1": "GU",
  "zones": [
    "Pacific/Guam"
  ]
},
{
  "iso_3166_1": "GW",
  "zones": [
    "Africa/Bissau"
  ]
},
{
  "iso_3166_1": "GY",
  "zones": [
    "America/Guyana"
  ]
},
{
  "iso_3166_1": "HK",
  "zones": [
    "Asia/Hong_Kong"
  ]
},
{
  "iso_3166_1": "HM",
  "zones": []
},
{
  "iso_3166_1": "HN",
  "zones": [
    "America/Tegucigalpa"
  ]
},
{
  "iso_3166_1": "HR",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "HT",
  "zones": [
    "America/Port-au-Prince"
  ]
},
{
  "iso_3166_1": "HU",
  "zones": [
    "Europe/Budapest"
  ]
},
{
  "iso_3166_1": "ID",
  "zones": [
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Jayapura"
  ]
},
{
  "iso_3166_1": "IE",
  "zones": [
    "Europe/Dublin"
  ]
},
{
  "iso_3166_1": "IL",
  "zones": [
    "Asia/Jerusalem"
  ]
},
{
  "iso_3166_1": "IM",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "IN",
  "zones": [
    "Asia/Kolkata"
  ]
},
{
  "iso_3166_1": "IO",
  "zones": [
    "Indian/Chagos"
  ]
},
{
  "iso_3166_1": "IQ",
  "zones": [
    "Asia/Baghdad"
  ]
},
{
  "iso_3166_1": "IR",
  "zones": [
    "Asia/Tehran"
  ]
},
{
  "iso_3166_1": "IS",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "IT",
  "zones": [
    "Europe/Rome"
  ]
},
{
  "iso_3166_1": "JE",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "JM",
  "zones": [
    "America/Jamaica"
  ]
},
{
  "iso_3166_1": "JO",
  "zones": [
    "Asia/Amman"
  ]
},
{
  "iso_3166_1": "JP",
  "zones": [
    "Asia/Tokyo"
  ]
},
{
  "iso_3166_1": "KE",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "KG",
  "zones": [
    "Asia/Bishkek"
  ]
},
{
  "iso_3166_1": "KH",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "KI",
  "zones": [
    "Pacific/Tarawa",
    "Pacific/Kanton",
    "Pacific/Kiritimati"
  ]
},
{
  "iso_3166_1": "KM",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "KN",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "KP",
  "zones": [
    "Asia/Pyongyang"
  ]
},
{
  "iso_3166_1": "KR",
  "zones": [
    "Asia/Seoul"
  ]
},
{
  "iso_3166_1": "KW",
  "zones": [
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "KY",
  "zones": [
    "America/Panama"
  ]
},
{
  "iso_3166_1": "KZ",
  "zones": [
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Qostanay",
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Atyrau",
    "Asia/Oral"
  ]
},
{
  "iso_3166_1": "LA",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "LB",
  "zones": [
    "Asia/Beirut"
  ]
},
{
  "iso_3166_1": "LC",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "LI",
  "zones": [
    "Europe/Zurich"
  ]
},
{
  "iso_3166_1": "LK",
  "zones": [
    "Asia/Colombo"
  ]
},
{
  "iso_3166_1": "LR",
  "zones": [
    "Africa/Monrovia"
  ]
},
{
  "iso_3166_1": "LS",
  "zones": [
    "Africa/Johannesburg"
  ]
},
{
  "iso_3166_1": "LT",
  "zones": [
    "Europe/Vilnius"
  ]
},
{
  "iso_3166_1": "LU",
  "zones": [
    "Europe/Brussels"
  ]
},
{
  "iso_3166_1": "LV",
  "zones": [
    "Europe/Riga"
  ]
},
{
  "iso_3166_1": "LY",
  "zones": [
    "Africa/Tripoli"
  ]
},
{
  "iso_3166_1": "MA",
  "zones": [
    "Africa/Casablanca"
  ]
},
{
  "iso_3166_1": "MC",
  "zones": [
    "Europe/Paris"
  ]
},
{
  "iso_3166_1": "MD",
  "zones": [
    "Europe/Chisinau"
  ]
},
{
  "iso_3166_1": "ME",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "MF",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "MG",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "MH",
  "zones": [
    "Pacific/Kwajalein",
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "MK",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "ML",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "MM",
  "zones": [
    "Asia/Yangon"
  ]
},
{
  "iso_3166_1": "MN",
  "zones": [
    "Asia/Ulaanbaatar",
    "Asia/Hovd",
    "Asia/Choibalsan"
  ]
},
{
  "iso_3166_1": "MO",
  "zones": [
    "Asia/Macau"
  ]
},
{
  "iso_3166_1": "MP",
  "zones": [
    "Pacific/Guam"
  ]
},
{
  "iso_3166_1": "MQ",
  "zones": [
    "America/Martinique"
  ]
},
{
  "iso_3166_1": "MR",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "MS",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "MT",
  "zones": [
    "Europe/Malta"
  ]
},
{
  "iso_3166_1": "MU",
  "zones": [
    "Indian/Mauritius"
  ]
},
{
  "iso_3166_1": "MV",
  "zones": [
    "Indian/Maldives"
  ]
},
{
  "iso_3166_1": "MW",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "MX",
  "zones": [
    "America/Mexico_City",
    "America/Cancun",
    "America/Merida",
    "America/Monterrey",
    "America/Matamoros",
    "America/Chihuahua",
    "America/Ciudad_Juarez",
    "America/Ojinaga",
    "America/Mazatlan",
    "America/Bahia_Banderas",
    "America/Hermosillo",
    "America/Tijuana"
  ]
},
{
  "iso_3166_1": "MY",
  "zones": [
    "Asia/Kuching",
    "Asia/Singapore"
  ]
},
{
  "iso_3166_1": "MZ",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "NA",
  "zones": [
    "Africa/Windhoek"
  ]
},
{
  "iso_3166_1": "NC",
  "zones": [
    "Pacific/Noumea"
  ]
},
{
  "iso_3166_1": "NE",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "NF",
  "zones": [
    "Pacific/Norfolk"
  ]
},
{
  "iso_3166_1": "NG",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "NI",
  "zones": [
    "America/Managua"
  ]
},
{
  "iso_3166_1": "NL",
  "zones": [
    "Europe/Brussels"
  ]
},
{
  "iso_3166_1": "NO",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "NP",
  "zones": [
    "Asia/Kathmandu"
  ]
},
{
  "iso_3166_1": "NR",
  "zones": [
    "Pacific/Nauru"
  ]
},
{
  "iso_3166_1": "NU",
  "zones": [
    "Pacific/Niue"
  ]
},
{
  "iso_3166_1": "NZ",
  "zones": [
    "Pacific/Auckland",
    "Pacific/Chatham"
  ]
},
{
  "iso_3166_1": "OM",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "PA",
  "zones": [
    "America/Panama"
  ]
},
{
  "iso_3166_1": "PE",
  "zones": [
    "America/Lima"
  ]
},
{
  "iso_3166_1": "PF",
  "zones": [
    "Pacific/Tahiti",
    "Pacific/Marquesas",
    "Pacific/Gambier"
  ]
},
{
  "iso_3166_1": "PG",
  "zones": [
    "Pacific/Port_Moresby",
    "Pacific/Bougainville"
  ]
},
{
  "iso_3166_1": "PH",
  "zones": [
    "Asia/Manila"
  ]
},
{
  "iso_3166_1": "PK",
  "zones": [
    "Asia/Karachi"
  ]
},
{
  "iso_3166_1": "PL",
  "zones": [
    "Europe/Warsaw"
  ]
},
{
  "iso_3166_1": "PM",
  "zones": [
    "America/Miquelon"
  ]
},
{
  "iso_3166_1": "PN",
  "zones": [
    "Pacific/Pitcairn"
  ]
},
{
  "iso_3166_1": "PR",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "PS",
  "zones": [
    "Asia/Gaza",
    "Asia/Hebron"
  ]
},
{
  "iso_3166_1": "PT",
  "zones": [
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores"
  ]
},
{
  "iso_3166_1": "PW",
  "zones": [
    "Pacific/Palau"
  ]
},
{
  "iso_3166_1": "PY",
  "zones": [
    "America/Asuncion"
  ]
},
{
  "iso_3166_1": "QA",
  "zones": [
    "Asia/Qatar"
  ]
},
{
  "iso_3166_1": "RE",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "RO",
  "zones": [
    "Europe/Bucharest"
  ]
},
{
  "iso_3166_1": "RS",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "RU",
  "zones": [
    "Europe/Kaliningrad",
    "Europe/Moscow",
    "Europe/Simferopol",
    "Europe/Kirov",
    "Europe/Volgograd",
    "Europe/Astrakhan",
    "Europe/Saratov",
    "Europe/Ulyanovsk",
    "Europe/Samara",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    "Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr"
  ]
},
{
  "iso_3166_1": "RW",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "SA",
  "zones": [
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "SB",
  "zones": [
    "Pacific/Guadalcanal"
  ]
},
{
  "iso_3166_1": "SC",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "SD",
  "zones": [
    "Africa/Khartoum"
  ]
},
{
  "iso_3166_1": "SE",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "SG",
  "zones": [
    "Asia/Singapore"
  ]
},
{
  "iso_3166_1": "SH",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "SI",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "SJ",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "SK",
  "zones": [
    "Europe/Prague"
  ]
},
{
  "iso_3166_1": "SL",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "SM",
  "zones": [
    "Europe/Rome"
  ]
},
{
  "iso_3166_1": "SN",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "SO",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "SR",
  "zones": [
    "America/Paramaribo"
  ]
},
{
  "iso_3166_1": "SS",
  "zones": [
    "Africa/Juba"
  ]
},
{
  "iso_3166_1": "ST",
  "zones": [
    "Africa/Sao_Tome"
  ]
},
{
  "iso_3166_1": "SV",
  "zones": [
    "America/El_Salvador"
  ]
},
{
  "iso_3166_1": "SX",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "SY",
  "zones": [
    "Asia/Damascus"
  ]
},
{
  "iso_3166_1": "SZ",
  "zones": [
    "Africa/Johannesburg"
  ]
},
{
  "iso_3166_1": "TC",
  "zones": [
    "America/Grand_Turk"
  ]
},
{
  "iso_3166_1": "TD",
  "zones": [
    "Africa/Ndjamena"
  ]
},
{
  "iso_3166_1": "TF",
  "zones": [
    "Asia/Dubai",
    "Indian/Maldives"
  ]
},
{
  "iso_3166_1": "TG",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "TH",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "TJ",
  "zones": [
    "Asia/Dushanbe"
  ]
},
{
  "iso_3166_1": "TK",
  "zones": [
    "Pacific/Fakaofo"
  ]
},
{
  "iso_3166_1": "TL",
  "zones": [
    "Asia/Dili"
  ]
},
{
  "iso_3166_1": "TM",
  "zones": [
    "Asia/Ashgabat"
  ]
},
{
  "iso_3166_1": "TN",
  "zones": [
    "Africa/Tunis"
  ]
},
{
  "iso_3166_1": "TO",
  "zones": [
    "Pacific/Tongatapu"
  ]
},
{
  "iso_3166_1": "TR",
  "zones": [
    "Europe/Istanbul"
  ]
},
{
  "iso_3166_1": "TT",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "TV",
  "zones": [
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "TW",
  "zones": [
    "Asia/Taipei"
  ]
},
{
  "iso_3166_1": "TZ",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "UA",
  "zones": [
    "Europe/Kyiv",
    "Europe/Simferopol"
  ]
},
{
  "iso_3166_1": "UG",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "UM",
  "zones": [
    "Pacific/Pago_Pago",
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "US",
  "zones": [
    "America/New_York",
    "America/Detroit",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Indiana/Indianapolis",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Vevay",
    "America/Chicago",
    "America/Indiana/Tell_City",
    "America/Indiana/Knox",
    "America/Menominee",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/North_Dakota/Beulah",
    "America/Denver",
    "America/Boise",
    "America/Phoenix",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Juneau",
    "America/Sitka",
    "America/Metlakatla",
    "America/Yakutat",
    "America/Nome",
    "America/Adak",
    "Pacific/Honolulu"
  ]
},
{
  "iso_3166_1": "UY",
  "zones": [
    "America/Montevideo"
  ]
},
{
  "iso_3166_1": "UZ",
  "zones": [
    "Asia/Samarkand",
    "Asia/Tashkent"
  ]
},
{
  "iso_3166_1": "VA",
  "zones": [
    "Europe/Rome"
  ]
},
{
  "iso_3166_1": "VC",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "VE",
  "zones": [
    "America/Caracas"
  ]
},
{
  "iso_3166_1": "VG",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "VI",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "VN",
  "zones": [
    "Asia/Ho_Chi_Minh",
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "VU",
  "zones": [
    "Pacific/Efate"
  ]
},
{
  "iso_3166_1": "WF",
  "zones": [
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "WS",
  "zones": [
    "Pacific/Apia"
  ]
},
{
  "iso_3166_1": "YE",
  "zones": [
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "YT",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "ZA",
  "zones": [
    "Africa/Johannesburg"
  ]
},
{
  "iso_3166_1": "ZM",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "ZW",
  "zones": [
    "Africa/Maputo"
  ]
}
]);
});

router.get('/credit/:credit_id', function(req, res, next) {
  res.json({
"success": false,
"status_code": 34,
"status_message": "The resource you requested could not be found."
});
});

router.get('/discover/movie', function(req, res, next) {
  if (req.query.with_genres == 20300 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/6Ra4oY_L1HM.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030088801,
        "original_language": "en",
        "original_title": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
        "overview": "This discussion will provide a constitutional law analysis of certain serious criminal offenses in the Philippines: Robbery, Kidnapping, Arbitrary detention, Unlawful arrest, Arson.",
        "popularity": 2590.24,
        "poster_path": "/images/6Ra4oY_L1HM.jpg",
        "release_date": "2023-07-19",
        "title": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/PNkPfxySMg0.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030088802,
        "original_language": "en",
        "original_title": "RA No  11648 statutory rape",
        "overview": "The discussion will center on analyzing Republic Act No. 11648, which amended Article 266-A of the Revised Penal Code on online libel. Specifically, points of discussion include: An overview of the new provisions introduced under the amended Article 266-A, Comparison to the previous provisions to understand the key changes/updates, Constitutional and legal issues potentially raised by the amendments.",
        "popularity": 1617.893,
        "poster_path": "/images/PNkPfxySMg0.jpg",
        "release_date": "2023-10-25",
        "title": "RA No  11648   statutory rape",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/8OqZT7jfFn8.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030088803,
        "original_language": "en",
        "original_title": "bigamy, illegal marriage   performance of illegal marriage",
        "overview": "The discussion will focus on analyzing and comparing the crimes of bigamy, illegal marriage, and performance of illegal marriage under Philippine law. Specifically, it will: Define the elements and nature of bigamy as contracting a second or subsequent marriage, Explain illegal marriage in terms of lack of legal requirements or impediments.",
        "popularity": 1595.817,
        "poster_path": "/images/8OqZT7jfFn8.jpg",
        "release_date": "2023-09-27",
        "title": "bigamy, illegal marriage   performance of illegal marriage",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/KLdPUh7D0sU.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030088804,
        "original_language": "en",
        "original_title": "error in personae, aberatiu ictus, praeter intentioneme",
        "overview": "The discussion will examine the concepts of error in personae, aberatio ictus, and praeter intentionem in relation to Article 4 of the Revised Penal Code of the Philippines. Specifically, it will analyze: Error in personae, which refers to mistakes regarding the identity of the victim, Aberatio ictus, which relates to deviation of the criminal act from the initial plan, Praeter intentionem, or unintended consequences of an unlawful act.",
        "popularity": 1108.183,
        "poster_path": "/images/KLdPUh7D0sU.jpg",
        "release_date": "2023-09-15",
        "title": "error in personae, aberatiu ictus, praeter intentioneme",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/kxirVAw_-0s.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030088805,
        "original_language": "en",
        "original_title": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder,",
        "overview": "The discussion will examine issues relating to different forms of homicide and related crimes within the framework of the Philippine Constitution. Specifically, it will analyze: Death under exceptional circumstances, Tumultuous affray, Abortion, Infanticide, Parricide, Murder.",
        "popularity": 1044.199,
        "poster_path": "/images/kxirVAw_-0s.jpg",
        "release_date": "2023-07-08",
        "title": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder,",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454,
		"url": "FOc_FnSXp6U"
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }


  if (req.query.with_genres == 20301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/zcYAnpJxV5g.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030188801,
        "original_language": "en",
        "original_title": "Impossible crime",
        "overview": "The discussion will focus on the concept of impossible crimes under Philippine criminal law. An impossible crime refers to an act that is incapable of being performed due to factual or legal impossibility, yet there is criminal intent to commit the act.",
        "popularity": 2590.24,
        "poster_path": "/images/zcYAnpJxV5g.jpg",
        "release_date": "2023-07-19",
        "title": "Impossible crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/ncg7TsrhiUY.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030188802,
        "original_language": "en",
        "original_title": "Stages of felony",
        "overview": "The discussion will focus on the different stages a felony can take under Philippine law - attempted, frustrated or consummated. Specifically, it will examine: Defining the elements and requirements of an attempted felony, including specifics on overt acts and proximity to completion.",
        "popularity": 1617.893,
        "poster_path": "/images/ncg7TsrhiUY.jpg",
        "release_date": "2023-10-25",
        "title": "Stages of felony",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/a6yRu-13OFc.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030188803,
        "original_language": "en",
        "original_title": "Plunder",
        "overview": "The discussion will provide an analysis of the crime of plunder as defined under Republic Act 7080, as amended by Republic Act 7659. Specifically, it will: Outline the key provisions of both laws pertaining to the offense of plunder, Explain the essential elements that must be proved to constitute plunder.",
        "popularity": 1595.817,
        "poster_path": "/images/a6yRu-13OFc.jpg",
        "release_date": "2023-09-27",
        "title": "Plunder",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/dLSWeutlFPA.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030188804,
        "original_language": "en",
        "original_title": "Treason, Rebellion, coup detat, sedition",
        "overview": "The video will discuss and compare the crimes of treason, rebellion, coup d'etat and sedition under Philippine law. It will analyze the following elements: The offender, The criminal act, The mode, and the Criminal intent.",
        "popularity": 1108.183,
        "poster_path": "/images/dLSWeutlFPA.jpg",
        "release_date": "2023-09-15",
        "title": "Treason, Rebellion, coup detat, sedition",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/bhI5oNqfplk.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030188805,
        "original_language": "en",
        "original_title": "Violence against women RA No  9262",
        "overview": "The discussion is all about RA No 9262 with cases in which the victim must be a woman with whom the offender has a marital sexual or dating relationship or the child is the biological child of the woman or the child is under the care of a woman.",
        "popularity": 1044.199,
        "poster_path": "/images/bhI5oNqfplk.jpg",
        "release_date": "2023-07-08",
        "title": "Violence against women RA No  9262",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }


  if (req.query.with_genres == 20302 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/JgDpR8Xme4Y.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030288801,
        "original_language": "en",
        "original_title": "Amnesty and pardon",
        "overview": "The discussion will focus on comparing and contrasting the concepts of amnesty and pardon under Philippine law. Specific points of analysis include: Defining amnesty and pardon, and how they differ in terms of effect and application, Requirements and procedures for granting each type of relief.",
        "popularity": 2590.24,
        "poster_path": "/images/JgDpR8Xme4Y.jpg",
        "release_date": "2023-07-19",
        "title": "Amnesty and pardon",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/BB3yoKrF8DM.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030288802,
        "original_language": "en",
        "original_title": "Probation and community service",
        "overview": "The video will provide an overview and analysis of probation and community service as alternatives to imprisonment under Philippine law. Specifically, it will cover: An introduction to probation and its legal basis under Presidential Decree 968, as amended by Republic Act 10707, and Eligibility criteria and procedures for both probation and community service.",
        "popularity": 1617.893,
        "poster_path": "/images/BB3yoKrF8DM.jpg",
        "release_date": "2023-10-25",
        "title": "Probation and community service",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/JxsN19NL_Ds.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030288803,
        "original_language": "en",
        "original_title": "Three-fold rule and GCTA",
        "overview": "The discussion will focus on analyzing the Three-fold Rule under Philippine penal law and its relationship to the Good Conduct Time Allowance (GCTA) system. Specifically, it will: Explain the Three-fold Rule, Outline the GCTA system, how it grants reductions in sentence length for good behavior, and Compare how these two concepts interact and potentially conflict.",
        "popularity": 1595.817,
        "poster_path": "/images/JxsN19NL_Ds.jpg",
        "release_date": "2023-09-27",
        "title": "Three-fold rule and GCTA",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/arge5NNeppQ.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030288804,
        "original_language": "en",
        "original_title": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
        "overview": "The discussion will examine different parties to a crime based on provisions in the Revised Penal Code and how they relate to criminal liability. Specifically, it will explore the roles and elements of principal, accomplice, accessory - a person who helps a felon escape punishment for reasons of blood or affinity, fencing, obstruction of justice - acts that hinder investigation/prosecution.",
        "popularity": 1108.183,
        "poster_path": "/images/arge5NNeppQ.jpg",
        "release_date": "2023-09-15",
        "title": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/Pgzb33HIBDQ.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030288805,
        "original_language": "en",
        "original_title": "Trafficking in person, child trafficking, child pornography, cyber sex",
        "overview": "The discussion will focus on analyzing trafficking in persons based on Republic Act 9208 (The Anti-Trafficking in Persons Act of 2003), as amended by RA 11862. Specifically, it will examine the key elements that define trafficking offenses under this law.",
        "popularity": 1044.199,
        "poster_path": "/images/Pgzb33HIBDQ.jpg",
        "release_date": "2023-07-08",
        "title": "Trafficking in person, child trafficking, child pornography, cyber sex",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }


  if (req.query.with_genres == 20303 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/O4WKPNUks5U.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030388801,
        "original_language": "en",
        "original_title": "Special complex crime",
        "overview": "The discussion will focus on the concept of a special complex crime under Philippine criminal law. A special complex crime involves the commission of two or more felonies through a single criminal act, transaction, or course of conduct where the law prescribes a single, indivisible penalty for the whole offense.",
        "popularity": 2590.24,
        "poster_path": "/images/O4WKPNUks5U.jpg",
        "release_date": "2023-07-19",
        "title": "Special complex crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/B6-DJ-qWYKg.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030388802,
        "original_language": "en",
        "original_title": "Rape with homicide, robbery with homicide or rape",
        "overview": "The video will provide an analysis of the legal concept of special complex crimes under Philippine law. A main focus will be on two key characteristics that define special complex crimes such as the original design and direct connection.",
        "popularity": 1617.893,
        "poster_path": "/images/B6-DJ-qWYKg.jpg",
        "release_date": "2023-10-25",
        "title": "Rape with homicide, robbery with homicide or rape",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/CaRrSRRAI8c.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030388803,
        "original_language": "en",
        "original_title": "Kidnapping with homicide or rape",
        "overview": "The discussion will focus on analyzing the special complex crime of kidnapping with either homicide or rape under Philippine law. Specifically, it will examine kidnapping as one of the principal offenses of this special complex crime and homicide or rape as the other principal offense committed through the same criminal act.",
        "popularity": 1595.817,
        "poster_path": "/images/CaRrSRRAI8c.jpg",
        "release_date": "2023-09-27",
        "title": "Kidnapping with homicide or rape",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/FZQmGvdWONY.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030388804,
        "original_language": "en",
        "original_title": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
        "overview": "The discussion will focus on the special complex crime of kidnapping with rape, rape through forcible abduction, and kidnapping and robbery. For a crime to be called kidnapping with rape, the original design must be to commit kidnapping. If the original design however, is to rape the victim then the crime commited is complex crime of rape through forcible abduction.",
        "popularity": 1108.183,
        "poster_path": "/images/FZQmGvdWONY.jpg",
        "release_date": "2023-09-15",
        "title": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/ybOrhRO0uMM.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030388805,
        "original_language": "en",
        "original_title": "Theft and estafae",
        "overview": "The discussion will focus on distinguishing the crimes of theft and estafa through misappropriation under Philippine law. Specifically, it will define the elements of theft as taking another's property without consent and explain estafa through misappropriation, which involves receiving property through trust, administration of an obligation, or duty to deliver, and later misappropriating, converting or denying the property.",
        "popularity": 1044.199,
        "poster_path": "/images/ybOrhRO0uMM.jpg",
        "release_date": "2023-07-08",
        "title": "Theft and estafa",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }


  if (req.query.with_genres == 20304 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/bZ_Dn4SFniM.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030488801,
        "original_language": "en",
        "original_title": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
        "overview": "The discussion is all about Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, and child cohabitation. The discussion will also include laws and example cases under it.",
        "popularity": 2590.24,
        "poster_path": "/images/bZ_Dn4SFniM.jpg",
        "release_date": "2023-07-19",
        "title": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/AYoZ07A0OWg.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030488802,
        "original_language": "en",
        "original_title": "Falsification, malversation, estafa, theft",
        "overview": "The discussion will analyze the crime of falsification of public, commercial or private documents in relation to other offenses like malversation, estafa, and theft. Specifically, it will cover 4 rules on classifying these crimes.",
        "popularity": 1617.893,
        "poster_path": "/images/AYoZ07A0OWg.jpg",
        "release_date": "2023-10-25",
        "title": "Falsification, malversation, estafa, theft",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/4c6N2L9mO3A.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030488803,
        "original_language": "en",
        "original_title": "Terrorism",
        "overview": "The video will analyze the concept of terrorism under Republic Act 11479 or the Anti-Terrorism Act of 2020. Specifically, it will cover an overview of the definition of terrorism provided in RA 11479 and the acts classified as terrorism and potential issues around vagueness/overreach.",
        "popularity": 1595.817,
        "poster_path": "/images/4c6N2L9mO3A.jpg",
        "release_date": "2023-09-27",
        "title": "Terrorism",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/_zPGalIJJbA.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030488804,
        "original_language": "en",
        "original_title": "Generality and territoriality",
        "overview": "The discussion will provide a comparative analysis of the principles of generality and territoriality in criminal law. Specifically, it will define the key concepts of generality and territoriality separately, examine the scope and application of each principle, and compare and contrast the approaches of both principles.",
        "popularity": 1108.183,
        "poster_path": "/images/_zPGalIJJbA.jpg",
        "release_date": "2023-09-15",
        "title": "Generality and territoriality",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/cNsyonG2K1o.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030488805,
        "original_language": "en",
        "original_title": "Territoriality, repeal and RA 10951 001 2",
        "overview": "The discussion will continue examining the principle of territoriality in criminal law. Specifically, it will analyze specific types of crimes in relation to territorial jurisdiction issues, evaluate concepts like objective and subjective territoriality in more depth and discuss exceptions to territoriality such as crimes on the high seas.",
        "popularity": 1044.199,
        "poster_path": "/images/cNsyonG2K1o.jpg",
        "release_date": "2023-07-08",
        "title": "Territoriality, repeal and RA 10951 001 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }


  if (req.query.with_genres == 20305 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/hzwrQOg7CqA.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030588801,
        "original_language": "en",
        "original_title": "Culpa and mistake of fact",
        "overview": "The discussion will provide analyses of the doctrine of Culpa and the concept of Mistake of Fact in criminal law. Specifically, it will define Culpa and explain the two prevailing views on its scope and culpability standards, distinguish Culpa from Dolus and analyze their applications, and outline the rules governing mistakes of fact as exculpatory or inculpatory circumstances.",
        "popularity": 2590.24,
        "poster_path": "/images/hzwrQOg7CqA.jpg",
        "release_date": "2023-07-19",
        "title": "Culpa and mistake of fact",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/TDpAhpVcKXo.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030588802,
        "original_language": "en",
        "original_title": "Penalties special law",
        "overview": "The discussion will focus on analyzing criminal penalties associated with offenses established under special laws in the Philippines. Some points of discussion may include examining categories of special laws that contain criminal provisions, discussing the range and graduation of penalties for violating special laws, and comparing penalty schemes between special laws and the Revised Penal Code.",
        "popularity": 1617.893,
        "poster_path": "/images/TDpAhpVcKXo.jpg",
        "release_date": "2023-10-25",
        "title": "Penalties special law",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/Cf0TCYWhreQ.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030588803,
        "original_language": "en",
        "original_title": "Penalties for special law",
        "overview": "The discussion will center on analyzing special penal laws and applicable penalties through examination of two case studies such as People v. Obias (G.R. No. 222187, March 25, 2019) and People v. Pis-an (G.R. No. 242692, July 13, 2020)",
        "popularity": 1595.817,
        "poster_path": "/images/Cf0TCYWhreQ.jpg",
        "release_date": "2023-09-27",
        "title": "Penalties for special law",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/QPIpzPG8GhI.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030588804,
        "original_language": "en",
        "original_title": "Lawas principle",
        "overview": "The video will examine the legal concept and principles surrounding single criminal investure under Philippine law. As a foundational point, it will discuss Article 48 of the Revised Penal Code, which establishes the general rule regarding a single criminal act.",
        "popularity": 1108.183,
        "poster_path": "/images/QPIpzPG8GhI.jpg",
        "release_date": "2023-09-15",
        "title": "Lawas principle",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/Nhh2qyOpCiY.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030588805,
        "original_language": "en",
        "original_title": "Carnapping and piracy",
        "overview": "The discussion centers around the issue of carnapping and how motor vehicles are used on public highways. Specifically, we will be exploring the legal implications when a motor vehicle is carnapped and subsequently utilized on public roadways.",
        "popularity": 1044.199,
        "poster_path": "/images/Nhh2qyOpCiY.jpg",
        "release_date": "2023-07-08",
        "title": "Carnapping and piracy",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }


  if (req.query.with_genres == 20306 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/4P9MdLhfxvw.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030688801,
        "original_language": "en",
        "original_title": "Brigandage and hijacking",
        "overview": "The crime of brigandage under Philippine law involves organized armed robbery carried out by groups of four or more individuals. Specifically brigandage refers to a form of aggravated robbery or theft committed by an association of four or more persons who are armed with firearms or other deadly weapons.",
        "popularity": 2590.24,
        "poster_path": "/images/4P9MdLhfxvw.jpg",
        "release_date": "2023-07-19",
        "title": "Brigandage and hijacking",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/nFK07TccaHc.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030688802,
        "original_language": "en",
        "original_title": "Syndicated estafa",
        "overview": "The discussion will center around the crime of syndicated estafa based on Philippine laws and jurisprudence. Some key points of focus could include legally defining the elements that constitute the offense of syndicated estafa, analyzing the distinctive characteristics that make this different from simple estafa, and exploring the legal frameworks used to identify syndicated criminal operations.",
        "popularity": 1617.893,
        "poster_path": "/images/nFK07TccaHc.png",
        "release_date": "2023-10-25",
        "title": "Syndicated estafa",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kSqwVtztixg.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030688803,
        "original_language": "en",
        "original_title": "Voyuerism",
        "overview": "The discussion will center around analyzing Republic Act 9995, also known as the Anti-Photo and Video Voyeurism Act of 2009. Some potential discussion points include defining key terms related to photo/video voyeurism as outlined in the law, examining the specific acts that are deemed illegal photo/video voyeurism, and discussing the intent and objectives of RA 9995 in addressing these issues.",
        "popularity": 1595.817,
        "poster_path": "/images/kSqwVtztixg.jpg",
        "release_date": "2023-09-27",
        "title": "Voyuerism",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/huREGMfs_54.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030688804,
        "original_language": "en",
        "original_title": "Hazing",
        "overview": "The discussion will center around analyzing the legal framework for hazing under Republic Act 8049 (also known as the Anti-Hazing Law of 1995), as subsequently amended by RA 11053 in 2018. A primary focus will be on the key elements that constitute hazing based on these laws.",
        "popularity": 1108.183,
        "poster_path": "/images/huREGMfs_54.jpg",
        "release_date": "2023-09-15",
        "title": "Hazing",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/-e3At2-lqTk.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030688805,
        "original_language": "en",
        "original_title": "Cyber libel",
        "overview": "The discussion will focus on analyzing key aspects of cyber libel law based on the Court of Appeals decision in People vs. Santos and Ressa of Rappler (CA-G.R. SP No. 151618). Specifically, it will examine the appellate court's rulings on applicability of traditional libel rules to online publications/blog posts, interpretation of actual malice in the context of digital media, and scope and limits of exemptions like fair comment and criticism.",
        "popularity": 1044.199,
        "poster_path": "/images/-e3At2-lqTk.jpg",
        "release_date": "2023-07-08",
        "title": "Cyber libel",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20307 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/yJyR5OOmcVQ.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030788801,
        "original_language": "en",
        "original_title": "Complex crime",
        "overview": "The video will examine the concept of complex crimes under Article 48 of the Revised Penal Code of the Philippines. Specifically, it will cover an overview of complex crimes as defined in the RPC and distinguishing between the two types such as the compound crime where one felony serves as a means for committing another and complex crime proper where a single act constitutes two or more grave/less grave felonies.",
        "popularity": 2590.24,
        "poster_path": "/images/yJyR5OOmcVQ.jpg",
        "release_date": "2023-07-19",
        "title": "Complex crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/pnScrR_P5AM.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030788802,
        "original_language": "en",
        "original_title": "Delito continuado",
        "overview": "The video will provide an analysis of the legal concept of delito continuado or continuing crime under Philippine law. Key aspects that will be covered include the definition of a continuing crime as composed of several acts committed under a single criminal impulse in violation of a single penal provision and distinguishing features compared to other types of crimes like complex crimes.",
        "popularity": 1617.893,
        "poster_path": "/images/pnScrR_P5AM.jpg",
        "release_date": "2023-10-25",
        "title": "Delito continuado",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/GQpnQnCKBDU.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030788803,
        "original_language": "en",
        "original_title": "Delito continuado 2",
        "overview": "The discussion will cover the second part of the concept of delito continuado or continuing crime under Philippine criminal law. Specifically, it will focus on analyzing the four kinds of continuing crimes identified by Train jurisprudence such as the crimes committed with indivisible intention, crimes committed by successive acts, crimes committed by intermittent acts, and crimes committed in breach of only one duty.",
        "popularity": 1595.817,
        "poster_path": "/images/GQpnQnCKBDU.jpg",
        "release_date": "2023-09-27",
        "title": "Delito continuado 2",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
	  {
        "adult": false,
        "backdrop_path": "/images/czX5xV2da1k.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030788804,
        "original_language": "en",
        "original_title": "Penalty 1",
        "overview": "The discussion will examine the rules governing the application of penalties in criminal cases under Philippine law. Specifically, it will outline the general rules on imposing the proper penalty, analyze circumstances that may modify the penalty, such as aggravating/mitigating factors, and discuss rules on continuous, multiple, complex and indeterminate sentence crimes.",
        "popularity": 1595.817,
        "poster_path": "/images/czX5xV2da1k.jpg",
        "release_date": "2023-09-27",
        "title": "Penalty 1",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
	  {
        "adult": false,
        "backdrop_path": "/images/diTKu8CVMoI.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030788805,
        "original_language": "en",
        "original_title": "Penalty 2",
        "overview": "The discussion will examine the rules regarding the duration of penalties in criminal cases under Philippine law. Specifically, it will outline the general guidelines for determining the length of each type of penalty, analyze factors that affect the duration such as the range prescribed by law, and discuss how mitigating and aggravating circumstances can modify the duration.",
        "popularity": 1595.817,
        "poster_path": "/images/diTKu8CVMoI.jpg",
        "release_date": "2023-09-27",
        "title": "Penalty 2",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 30300 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/yZAv5u72r2E.jpg",
        "genre_ids": [
        
        ],
        "id": 3030088801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 1",
        "overview": "The discussion will focus on the first part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/yZAv5u72r2E.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 1",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/x7YFlRd2a44.jpg",
        "genre_ids": [
        
        ],

        "id": 3030088802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 2",
        "overview": "The discussion will focus on the second part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/x7YFlRd2a44.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 2",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/9wdgsK5gBN0.jpg",
        "genre_ids": [
        
        ],
        "id": 3030088803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 3",
        "overview": "The discussion will focus on the third part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/9wdgsK5gBN0.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 3",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/aIKEU6YktdA.jpg",
        "genre_ids": [
        
        ],
        "id": 3030188801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 4",
        "overview": "The discussion will focus on the fourth part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/aIKEU6YktdA.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 4",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/m1_rMY84MmM.jpg",
        "genre_ids": [
        
        ],

        "id": 3030188802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 5",
        "overview": "The discussion will focus on the fifth part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/m1_rMY84MmM.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 5",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/Ckd2JrSXI9A.jpg",
        "genre_ids": [
        
        ],
        "id": 3030188803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 6",
        "overview": "The discussion will focus on the sixth part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/Ckd2JrSXI9A.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 6",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30302 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/Vi6lV7KAi7M.jpg",
        "genre_ids": [
        
        ],
        "id": 3030288801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 7",
        "overview": "The discussion will focus on the seventh part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/Vi6lV7KAi7M.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 7",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/CiaiqmGR3Bs.jpg",
        "genre_ids": [
        
        ],

        "id": 3030288802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 8",
        "overview": "The discussion will focus on the eighth part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/CiaiqmGR3Bs.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 8",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/7QUIPi5-yF8.jpg",
        "genre_ids": [
        
        ],
        "id": 3030288803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 9",
        "overview": "The discussion will focus on the ninth part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/7QUIPi5-yF8.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 9",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30303 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/kxwEc2oi8-E.jpg",
        "genre_ids": [
        
        ],
        "id": 3030388801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 10",
        "overview": "The discussion will focus on the tenth part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/kxwEc2oi8-E.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 10",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/NhaoeTyNLkc.jpg",
        "genre_ids": [
        
        ],

        "id": 3030388802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 11",
        "overview": "The discussion will focus on the eleventh part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/NhaoeTyNLkc.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 11",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/FOc_FnSXp6U.jpg",
        "genre_ids": [
        
        ],
        "id": 3030388803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 12",
        "overview": "The discussion will focus on the twelfth part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/FOc_FnSXp6U.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 12",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30304 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/q8kQ3KriJL8.jpg",
        "genre_ids": [
        
        ],
        "id": 3030488801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 13",
        "overview": "The discussion will focus on the fundamentals of local government by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/q8kQ3KriJL8.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 13",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      }
	  ],
    "total_pages": 1,
    "total_results": 3
    });
 }
 
  if (req.query.with_genres == 40301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/jUMsFRd88nk.jpg",
        "genre_ids": [
        ],
        "id": 4030188801,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 1",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/jUMsFRd88nk.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 1",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/a3CrgjgewzM.jpg",
        "genre_ids": [
        ],
        "id": 4030188802,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 2",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/a3CrgjgewzM.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 2",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/VVe84yFKufI.jpg",
        "genre_ids": [
        ],
        "id": 4030188803,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 3",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/VVe84yFKufI.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 3",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/gn7wP3-fW3k.jpg",
        "genre_ids": [
        ],
        "id": 4030188804,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 4",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/gn7wP3-fW3k.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 4",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/VGgvIe9oJ7I.jpg",
        "genre_ids": [
        ],
        "id": 4030188805,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 5",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/VGgvIe9oJ7I.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 5",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      }
	  ],
    "total_pages": 1,
    "total_results": 5
    });
 }


});


router.get('/discover/tv', function(req, res, next) {
  if (req.query.with_genres == 20300 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/6Ra4oY_L1HM.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030088801,
        "original_language": "en",
        "original_title": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
        "overview": "This discussion will provide a constitutional law analysis of certain serious criminal offenses in the Philippines: Robbery, Kidnapping, Arbitrary detention, Unlawful arrest, Arson.",
        "popularity": 2590.24,
        "poster_path": "/images/6Ra4oY_L1HM.jpg",
        "release_date": "2023-07-19",
        "title": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/PNkPfxySMg0.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030088802,
        "original_language": "en",
        "original_title": "RA No  11648 statutory rape",
        "overview": "The discussion will center on analyzing Republic Act No. 11648, which amended Article 266-A of the Revised Penal Code on online libel. Specifically, points of discussion include: An overview of the new provisions introduced under the amended Article 266-A, Comparison to the previous provisions to understand the key changes/updates, Constitutional and legal issues potentially raised by the amendments.",
        "popularity": 1617.893,
        "poster_path": "/images/PNkPfxySMg0.jpg",
        "release_date": "2023-10-25",
        "title": "RA No  11648   statutory rape",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/8OqZT7jfFn8.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030088803,
        "original_language": "en",
        "original_title": "bigamy, illegal marriage   performance of illegal marriage",
        "overview": "The discussion will focus on analyzing and comparing the crimes of bigamy, illegal marriage, and performance of illegal marriage under Philippine law. Specifically, it will: Define the elements and nature of bigamy as contracting a second or subsequent marriage, Explain illegal marriage in terms of lack of legal requirements or impediments.",
        "popularity": 1595.817,
        "poster_path": "/images/8OqZT7jfFn8.jpg",
        "release_date": "2023-09-27",
        "title": "bigamy, illegal marriage   performance of illegal marriage",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/KLdPUh7D0sU.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030088804,
        "original_language": "en",
        "original_title": "error in personae, aberatiu ictus, praeter intentioneme",
        "overview": "The discussion will examine the concepts of error in personae, aberatio ictus, and praeter intentionem in relation to Article 4 of the Revised Penal Code of the Philippines. Specifically, it will analyze: Error in personae, which refers to mistakes regarding the identity of the victim, Aberatio ictus, which relates to deviation of the criminal act from the initial plan, Praeter intentionem, or unintended consequences of an unlawful act.",
        "popularity": 1108.183,
        "poster_path": "/images/KLdPUh7D0sU.jpg",
        "release_date": "2023-09-15",
        "title": "error in personae, aberatiu ictus, praeter intentioneme",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741,
		"url": "FOc_FnSXp6U"
      },
      {
        "adult": false,
        "backdrop_path": "/images/kxirVAw_-0s.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030088805,
        "original_language": "en",
        "original_title": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder,",
        "overview": "The discussion will examine issues relating to different forms of homicide and related crimes within the framework of the Philippine Constitution. Specifically, it will analyze: Death under exceptional circumstances, Tumultuous affray, Abortion, Infanticide, Parricide, Murder.",
        "popularity": 1044.199,
        "poster_path": "/images/kxirVAw_-0s.jpg",
        "release_date": "2023-07-08",
        "title": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder,",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454,
		"url": "FOc_FnSXp6U"
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/zcYAnpJxV5g.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030188801,
        "original_language": "en",
        "original_title": "Impossible crime",
        "overview": "The discussion will focus on the concept of impossible crimes under Philippine criminal law. An impossible crime refers to an act that is incapable of being performed due to factual or legal impossibility, yet there is criminal intent to commit the act.",
        "popularity": 2590.24,
        "poster_path": "/images/zcYAnpJxV5g.jpg",
        "release_date": "2023-07-19",
        "title": "Impossible crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/ncg7TsrhiUY.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030188802,
        "original_language": "en",
        "original_title": "Stages of felony",
        "overview": "The discussion will focus on the different stages a felony can take under Philippine law - attempted, frustrated or consummated. Specifically, it will examine: Defining the elements and requirements of an attempted felony, including specifics on overt acts and proximity to completion.",
        "popularity": 1617.893,
        "poster_path": "/images/ncg7TsrhiUY.jpg",
        "release_date": "2023-10-25",
        "title": "Stages of felony",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/a6yRu-13OFc.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030188803,
        "original_language": "en",
        "original_title": "Plunder",
        "overview": "The discussion will provide an analysis of the crime of plunder as defined under Republic Act 7080, as amended by Republic Act 7659. Specifically, it will: Outline the key provisions of both laws pertaining to the offense of plunder, Explain the essential elements that must be proved to constitute plunder.",
        "popularity": 1595.817,
        "poster_path": "/images/a6yRu-13OFc.jpg",
        "release_date": "2023-09-27",
        "title": "Plunder",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/dLSWeutlFPA.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030188804,
        "original_language": "en",
        "original_title": "Treason, Rebellion, coup detat, sedition",
        "overview": "The video will discuss and compare the crimes of treason, rebellion, coup d'etat and sedition under Philippine law. It will analyze the following elements: The offender, The criminal act, The mode, and the Criminal intent.",
        "popularity": 1108.183,
        "poster_path": "/images/dLSWeutlFPA.jpg",
        "release_date": "2023-09-15",
        "title": "Treason, Rebellion, coup detat, sedition",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/bhI5oNqfplk.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030188805,
        "original_language": "en",
        "original_title": "Violence against women RA No  9262",
        "overview": "The discussion is all about RA No 9262 with cases in which the victim must be a woman with whom the offender has a marital sexual or dating relationship or the child is the biological child of the woman or the child is under the care of a woman.",
        "popularity": 1044.199,
        "poster_path": "/images/bhI5oNqfplk.jpg",
        "release_date": "2023-07-08",
        "title": "Violence against women RA No  9262",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20302 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/JgDpR8Xme4Y.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030288801,
        "original_language": "en",
        "original_title": "Amnesty and pardon",
        "overview": "The discussion will focus on comparing and contrasting the concepts of amnesty and pardon under Philippine law. Specific points of analysis include: Defining amnesty and pardon, and how they differ in terms of effect and application, Requirements and procedures for granting each type of relief.",
        "popularity": 2590.24,
        "poster_path": "/images/JgDpR8Xme4Y.jpg",
        "release_date": "2023-07-19",
        "title": "Amnesty and pardon",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/BB3yoKrF8DM.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030288802,
        "original_language": "en",
        "original_title": "Probation and community service",
        "overview": "The video will provide an overview and analysis of probation and community service as alternatives to imprisonment under Philippine law. Specifically, it will cover: An introduction to probation and its legal basis under Presidential Decree 968, as amended by Republic Act 10707, and Eligibility criteria and procedures for both probation and community service.",
        "popularity": 1617.893,
        "poster_path": "/images/BB3yoKrF8DM.jpg",
        "release_date": "2023-10-25",
        "title": "Probation and community service",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/JxsN19NL_Ds.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030288803,
        "original_language": "en",
        "original_title": "Three-fold rule and GCTA",
        "overview": "The discussion will focus on analyzing the Three-fold Rule under Philippine penal law and its relationship to the Good Conduct Time Allowance (GCTA) system. Specifically, it will: Explain the Three-fold Rule, Outline the GCTA system, how it grants reductions in sentence length for good behavior, and Compare how these two concepts interact and potentially conflict.",
        "popularity": 1595.817,
        "poster_path": "/images/JxsN19NL_Ds.jpg",
        "release_date": "2023-09-27",
        "title": "Three-fold rule and GCTA",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/arge5NNeppQ.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030288804,
        "original_language": "en",
        "original_title": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
        "overview": "The discussion will examine different parties to a crime based on provisions in the Revised Penal Code and how they relate to criminal liability. Specifically, it will explore the roles and elements of principal, accomplice, accessory - a person who helps a felon escape punishment for reasons of blood or affinity, fencing, obstruction of justice - acts that hinder investigation/prosecution.",
        "popularity": 1108.183,
        "poster_path": "/images/arge5NNeppQ.jpg",
        "release_date": "2023-09-15",
        "title": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/Pgzb33HIBDQ.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030288805,
        "original_language": "en",
        "original_title": "Trafficking in person, child trafficking, child pornography, cyber sex",
        "overview": "The discussion will focus on analyzing trafficking in persons based on Republic Act 9208 (The Anti-Trafficking in Persons Act of 2003), as amended by RA 11862. Specifically, it will examine the key elements that define trafficking offenses under this law.",
        "popularity": 1044.199,
        "poster_path": "/images/Pgzb33HIBDQ.jpg",
        "release_date": "2023-07-08",
        "title": "Trafficking in person, child trafficking, child pornography, cyber sex",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20303 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/O4WKPNUks5U.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030388801,
        "original_language": "en",
        "original_title": "Special complex crime",
        "overview": "The discussion will focus on the concept of a special complex crime under Philippine criminal law. A special complex crime involves the commission of two or more felonies through a single criminal act, transaction, or course of conduct where the law prescribes a single, indivisible penalty for the whole offense.",
        "popularity": 2590.24,
        "poster_path": "/images/O4WKPNUks5U.jpg",
        "release_date": "2023-07-19",
        "title": "Special complex crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/B6-DJ-qWYKg.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030388802,
        "original_language": "en",
        "original_title": "Rape with homicide, robbery with homicide or rape",
        "overview": "The video will provide an analysis of the legal concept of special complex crimes under Philippine law. A main focus will be on two key characteristics that define special complex crimes such as the original design and direct connection.",
        "popularity": 1617.893,
        "poster_path": "/images/B6-DJ-qWYKg.jpg",
        "release_date": "2023-10-25",
        "title": "Rape with homicide, robbery with homicide or rape",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/CaRrSRRAI8c.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030388803,
        "original_language": "en",
        "original_title": "Kidnapping with homicide or rape",
        "overview": "The discussion will focus on analyzing the special complex crime of kidnapping with either homicide or rape under Philippine law. Specifically, it will examine kidnapping as one of the principal offenses of this special complex crime and homicide or rape as the other principal offense committed through the same criminal act.",
        "popularity": 1595.817,
        "poster_path": "/images/CaRrSRRAI8c.jpg",
        "release_date": "2023-09-27",
        "title": "Kidnapping with homicide or rape",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/FZQmGvdWONY.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030388804,
        "original_language": "en",
        "original_title": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
        "overview": "The discussion will focus on the special complex crime of kidnapping with rape, rape through forcible abduction, and kidnapping and robbery. For a crime to be called kidnapping with rape, the original design must be to commit kidnapping. If the original design however, is to rape the victim then the crime commited is complex crime of rape through forcible abduction.",
        "popularity": 1108.183,
        "poster_path": "/images/FZQmGvdWONY.jpg",
        "release_date": "2023-09-15",
        "title": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/ybOrhRO0uMM.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030388805,
        "original_language": "en",
        "original_title": "Theft and estafae",
        "overview": "The discussion will focus on distinguishing the crimes of theft and estafa through misappropriation under Philippine law. Specifically, it will define the elements of theft as taking another's property without consent and explain estafa through misappropriation, which involves receiving property through trust, administration of an obligation, or duty to deliver, and later misappropriating, converting or denying the property.",
        "popularity": 1044.199,
        "poster_path": "/images/ybOrhRO0uMM.jpg",
        "release_date": "2023-07-08",
        "title": "Theft and estafa",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20304 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/bZ_Dn4SFniM.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030488801,
        "original_language": "en",
        "original_title": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
        "overview": "The discussion is all about Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, and child cohabitation. The discussion will also include laws and example cases under it.",
        "popularity": 2590.24,
        "poster_path": "/images/bZ_Dn4SFniM.jpg",
        "release_date": "2023-07-19",
        "title": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/AYoZ07A0OWg.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030488802,
        "original_language": "en",
        "original_title": "Falsification, malversation, estafa, theft",
        "overview": "The discussion will analyze the crime of falsification of public, commercial or private documents in relation to other offenses like malversation, estafa, and theft. Specifically, it will cover 4 rules on classifying these crimes.",
        "popularity": 1617.893,
        "poster_path": "/images/AYoZ07A0OWg.jpg",
        "release_date": "2023-10-25",
        "title": "Falsification, malversation, estafa, theft",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/4c6N2L9mO3A.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030488803,
        "original_language": "en",
        "original_title": "Terrorism",
        "overview": "The video will analyze the concept of terrorism under Republic Act 11479 or the Anti-Terrorism Act of 2020. Specifically, it will cover an overview of the definition of terrorism provided in RA 11479 and the acts classified as terrorism and potential issues around vagueness/overreach.",
        "popularity": 1595.817,
        "poster_path": "/images/4c6N2L9mO3A.jpg",
        "release_date": "2023-09-27",
        "title": "Terrorism",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/_zPGalIJJbA.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030488804,
        "original_language": "en",
        "original_title": "Generality and territoriality",
        "overview": "The discussion will provide a comparative analysis of the principles of generality and territoriality in criminal law. Specifically, it will define the key concepts of generality and territoriality separately, examine the scope and application of each principle, and compare and contrast the approaches of both principles.",
        "popularity": 1108.183,
        "poster_path": "/images/_zPGalIJJbA.jpg",
        "release_date": "2023-09-15",
        "title": "Generality and territoriality",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/cNsyonG2K1o.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030488805,
        "original_language": "en",
        "original_title": "Territoriality, repeal and RA 10951 001 2",
        "overview": "The discussion will continue examining the principle of territoriality in criminal law. Specifically, it will analyze specific types of crimes in relation to territorial jurisdiction issues, evaluate concepts like objective and subjective territoriality in more depth and discuss exceptions to territoriality such as crimes on the high seas.",
        "popularity": 1044.199,
        "poster_path": "/images/cNsyonG2K1o.jpg",
        "release_date": "2023-07-08",
        "title": "Territoriality, repeal and RA 10951 001 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20305 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/hzwrQOg7CqA.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030588801,
        "original_language": "en",
        "original_title": "Culpa and mistake of fact",
        "overview": "The discussion will provide analyses of the doctrine of Culpa and the concept of Mistake of Fact in criminal law. Specifically, it will define Culpa and explain the two prevailing views on its scope and culpability standards, distinguish Culpa from Dolus and analyze their applications, and outline the rules governing mistakes of fact as exculpatory or inculpatory circumstances.",
        "popularity": 2590.24,
        "poster_path": "/images/hzwrQOg7CqA.jpg",
        "release_date": "2023-07-19",
        "title": "Culpa and mistake of fact",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/TDpAhpVcKXo.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030588802,
        "original_language": "en",
        "original_title": "Penalties special law",
        "overview": "The discussion will focus on analyzing criminal penalties associated with offenses established under special laws in the Philippines. Some points of discussion may include examining categories of special laws that contain criminal provisions, discussing the range and graduation of penalties for violating special laws, and comparing penalty schemes between special laws and the Revised Penal Code.",
        "popularity": 1617.893,
        "poster_path": "/images/TDpAhpVcKXo.jpg",
        "release_date": "2023-10-25",
        "title": "Penalties special law",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/Cf0TCYWhreQ.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030588803,
        "original_language": "en",
        "original_title": "Penalties for special law",
        "overview": "The discussion will center on analyzing special penal laws and applicable penalties through examination of two case studies such as People v. Obias (G.R. No. 222187, March 25, 2019) and People v. Pis-an (G.R. No. 242692, July 13, 2020)",
        "popularity": 1595.817,
        "poster_path": "/images/Cf0TCYWhreQ.jpg",
        "release_date": "2023-09-27",
        "title": "Penalties for special law",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/QPIpzPG8GhI.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030588804,
        "original_language": "en",
        "original_title": "Lawas principle",
        "overview": "The video will examine the legal concept and principles surrounding single criminal investure under Philippine law. As a foundational point, it will discuss Article 48 of the Revised Penal Code, which establishes the general rule regarding a single criminal act.",
        "popularity": 1108.183,
        "poster_path": "/images/QPIpzPG8GhI.jpg",
        "release_date": "2023-09-15",
        "title": "Lawas principle",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/Nhh2qyOpCiY.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030588805,
        "original_language": "en",
        "original_title": "Carnapping and piracy",
        "overview": "The discussion centers around the issue of carnapping and how motor vehicles are used on public highways. Specifically, we will be exploring the legal implications when a motor vehicle is carnapped and subsequently utilized on public roadways.",
        "popularity": 1044.199,
        "poster_path": "/images/Nhh2qyOpCiY.jpg",
        "release_date": "2023-07-08",
        "title": "Carnapping and piracy",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20306 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/4P9MdLhfxvw.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030688801,
        "original_language": "en",
        "original_title": "Brigandage and hijacking",
        "overview": "The crime of brigandage under Philippine law involves organized armed robbery carried out by groups of four or more individuals. Specifically brigandage refers to a form of aggravated robbery or theft committed by an association of four or more persons who are armed with firearms or other deadly weapons.",
        "popularity": 2590.24,
        "poster_path": "/images/4P9MdLhfxvw.jpg",
        "release_date": "2023-07-19",
        "title": "Brigandage and hijacking",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/nFK07TccaHc.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030688802,
        "original_language": "en",
        "original_title": "Syndicated estafa",
        "overview": "The discussion will center around the crime of syndicated estafa based on Philippine laws and jurisprudence. Some key points of focus could include legally defining the elements that constitute the offense of syndicated estafa, analyzing the distinctive characteristics that make this different from simple estafa, and exploring the legal frameworks used to identify syndicated criminal operations.",
        "popularity": 1617.893,
        "poster_path": "/images/nFK07TccaHc.png",
        "release_date": "2023-10-25",
        "title": "Syndicated estafa",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kSqwVtztixg.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030688803,
        "original_language": "en",
        "original_title": "Voyuerism",
        "overview": "The discussion will center around analyzing Republic Act 9995, also known as the Anti-Photo and Video Voyeurism Act of 2009. Some potential discussion points include defining key terms related to photo/video voyeurism as outlined in the law, examining the specific acts that are deemed illegal photo/video voyeurism, and discussing the intent and objectives of RA 9995 in addressing these issues.",
        "popularity": 1595.817,
        "poster_path": "/images/kSqwVtztixg.jpg",
        "release_date": "2023-09-27",
        "title": "Voyuerism",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/huREGMfs_54.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 2030688804,
        "original_language": "en",
        "original_title": "Hazing",
        "overview": "The discussion will center around analyzing the legal framework for hazing under Republic Act 8049 (also known as the Anti-Hazing Law of 1995), as subsequently amended by RA 11053 in 2018. A primary focus will be on the key elements that constitute hazing based on these laws.",
        "popularity": 1108.183,
        "poster_path": "/images/huREGMfs_54.jpg",
        "release_date": "2023-09-15",
        "title": "Hazing",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/-e3At2-lqTk.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 2030688805,
        "original_language": "en",
        "original_title": "Cyber libel",
        "overview": "The discussion will focus on analyzing key aspects of cyber libel law based on the Court of Appeals decision in People vs. Santos and Ressa of Rappler (CA-G.R. SP No. 151618). Specifically, it will examine the appellate court's rulings on applicability of traditional libel rules to online publications/blog posts, interpretation of actual malice in the context of digital media, and scope and limits of exemptions like fair comment and criticism.",
        "popularity": 1044.199,
        "poster_path": "/images/-e3At2-lqTk.jpg",
        "release_date": "2023-07-08",
        "title": "Cyber libel",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 20307 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/yJyR5OOmcVQ.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 2030788801,
        "original_language": "en",
        "original_title": "Complex crime",
        "overview": "The video will examine the concept of complex crimes under Article 48 of the Revised Penal Code of the Philippines. Specifically, it will cover an overview of complex crimes as defined in the RPC and distinguishing between the two types such as the compound crime where one felony serves as a means for committing another and complex crime proper where a single act constitutes two or more grave/less grave felonies.",
        "popularity": 2590.24,
        "poster_path": "/images/yJyR5OOmcVQ.jpg",
        "release_date": "2023-07-19",
        "title": "Complex crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/pnScrR_P5AM.jpg",
        "genre_ids": [
          27,
          9648
        ],

        "id": 2030788802,
        "original_language": "en",
        "original_title": "Delito continuado",
        "overview": "The video will provide an analysis of the legal concept of delito continuado or continuing crime under Philippine law. Key aspects that will be covered include the definition of a continuing crime as composed of several acts committed under a single criminal impulse in violation of a single penal provision and distinguishing features compared to other types of crimes like complex crimes.",
        "popularity": 1617.893,
        "poster_path": "/images/pnScrR_P5AM.jpg",
        "release_date": "2023-10-25",
        "title": "Delito continuado",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/GQpnQnCKBDU.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030788803,
        "original_language": "en",
        "original_title": "Delito continuado 2",
        "overview": "The discussion will cover the second part of the concept of delito continuado or continuing crime under Philippine criminal law. Specifically, it will focus on analyzing the four kinds of continuing crimes identified by Train jurisprudence such as the crimes committed with indivisible intention, crimes committed by successive acts, crimes committed by intermittent acts, and crimes committed in breach of only one duty.",
        "popularity": 1595.817,
        "poster_path": "/images/GQpnQnCKBDU.jpg",
        "release_date": "2023-09-27",
        "title": "Delito continuado 2",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
	  {
        "adult": false,
        "backdrop_path": "/images/czX5xV2da1k.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030788804,
        "original_language": "en",
        "original_title": "Penalty 1",
        "overview": "The discussion will examine the rules governing the application of penalties in criminal cases under Philippine law. Specifically, it will outline the general rules on imposing the proper penalty, analyze circumstances that may modify the penalty, such as aggravating/mitigating factors, and discuss rules on continuous, multiple, complex and indeterminate sentence crimes.",
        "popularity": 1595.817,
        "poster_path": "/images/czX5xV2da1k.jpg",
        "release_date": "2023-09-27",
        "title": "Penalty 1",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
	  {
        "adult": false,
        "backdrop_path": "/images/diTKu8CVMoI.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 2030788805,
        "original_language": "en",
        "original_title": "Penalty 2",
        "overview": "The discussion will examine the rules regarding the duration of penalties in criminal cases under Philippine law. Specifically, it will outline the general guidelines for determining the length of each type of penalty, analyze factors that affect the duration such as the range prescribed by law, and discuss how mitigating and aggravating circumstances can modify the duration.",
        "popularity": 1595.817,
        "poster_path": "/images/diTKu8CVMoI.jpg",
        "release_date": "2023-09-27",
        "title": "Penalty 2",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 }

  if (req.query.with_genres == 30300 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/yZAv5u72r2E.jpg",
        "genre_ids": [
        
        ],
        "id": 3030088801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 1",
        "overview": "The discussion will focus on the first part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/yZAv5u72r2E.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 1",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/x7YFlRd2a44.jpg",
        "genre_ids": [
        
        ],

        "id": 3030088802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 2",
        "overview": "The discussion will focus on the second part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/x7YFlRd2a44.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 2",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/9wdgsK5gBN0.jpg",
        "genre_ids": [
        
        ],
        "id": 3030088803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 3",
        "overview": "The discussion will focus on the third part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/9wdgsK5gBN0.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 3",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/aIKEU6YktdA.jpg",
        "genre_ids": [
        
        ],
        "id": 3030188801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 4",
        "overview": "The discussion will focus on the fourth part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/aIKEU6YktdA.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 4",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/m1_rMY84MmM.jpg",
        "genre_ids": [
        
        ],

        "id": 3030188802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 5",
        "overview": "The discussion will focus on the fifth part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/m1_rMY84MmM.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 5",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/Ckd2JrSXI9A.jpg",
        "genre_ids": [
        
        ],
        "id": 3030188803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 6",
        "overview": "The discussion will focus on the sixth part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/Ckd2JrSXI9A.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 6",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30302 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/Vi6lV7KAi7M.jpg",
        "genre_ids": [
        
        ],
        "id": 3030288801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 7",
        "overview": "The discussion will focus on the seventh part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/Vi6lV7KAi7M.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 7",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/CiaiqmGR3Bs.jpg",
        "genre_ids": [
        
        ],

        "id": 3030288802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 8",
        "overview": "The discussion will focus on the eighth part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/CiaiqmGR3Bs.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 8",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/7QUIPi5-yF8.jpg",
        "genre_ids": [
        
        ],
        "id": 3030288803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 9",
        "overview": "The discussion will focus on the ninth part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/7QUIPi5-yF8.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 9",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30303 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/kxwEc2oi8-E.jpg",
        "genre_ids": [
        
        ],
        "id": 3030388801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 10",
        "overview": "The discussion will focus on the tenth part of Political Law by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/kxwEc2oi8-E.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 10",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/NhaoeTyNLkc.jpg",
        "genre_ids": [
        
        ],

        "id": 3030388802,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 11",
        "overview": "The discussion will focus on the eleventh part of Political Law by Atty Loanzon.",
        "popularity": 1617.893,
        "poster_path": "/images/NhaoeTyNLkc.jpg",
        "release_date": "2023-10-25",
        "title": "Political Atty Loanzon Lecture 11",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/FOc_FnSXp6U.jpg",
        "genre_ids": [
        
        ],
        "id": 3030388803,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 12",
        "overview": "The discussion will focus on the twelfth part of Political Law by Atty Loanzon.",
        "popularity": 1595.817,
        "poster_path": "/images/FOc_FnSXp6U.jpg",
        "release_date": "2023-09-27",
        "title": "Political Atty Loanzon Lecture 12",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      }
    ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30304 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/q8kQ3KriJL8.jpg",
        "genre_ids": [
        
        ],
        "id": 3030488801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 13",
        "overview": "The discussion will focus on the fundamentals of local government by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/q8kQ3KriJL8.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 13",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      }
	  ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 30304 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/q8kQ3KriJL8.jpg",
        "genre_ids": [
        
        ],
        "id": 3030488801,
        "original_language": "en",
        "original_title": "Political Atty Loanzon Lecture 13",
        "overview": "The discussion will focus on the fundamentals of local government by Atty Loanzon.",
        "popularity": 2590.24,
        "poster_path": "/images/q8kQ3KriJL8.jpg",
        "release_date": "2023-07-19",
        "title": "Political Atty Loanzon Lecture 13",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      }
	  ],
    "total_pages": 1,
    "total_results": 3
    });
 }

  if (req.query.with_genres == 40301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/jUMsFRd88nk.jpg",
        "genre_ids": [
        
        ],
        "id": 4030188801,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 1",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/jUMsFRd88nk.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 1",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/a3CrgjgewzM.jpg",
        "genre_ids": [
        
        ],
        "id": 4030188802,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 2",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/a3CrgjgewzM.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 2",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/VVe84yFKufI.jpg",
        "genre_ids": [
        
        ],
        "id": 4030188803,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 3",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/VVe84yFKufI.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 3",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/gn7wP3-fW3k.jpg",
        "genre_ids": [
        
        ],
        "id": 4030188804,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 4",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/gn7wP3-fW3k.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 4",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
	  {
        "adult": false,
        "backdrop_path": "/images/VGgvIe9oJ7I.jpg",
        "genre_ids": [
        
        ],
        "id": 4030188805,
        "original_language": "en",
        "original_title": "Taxation Atty. Lim - Lecture 5",
        "overview": "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
        "popularity": 2590.24,
        "poster_path": "/images/VGgvIe9oJ7I.jpg",
        "release_date": "2023-07-19",
        "title": "Taxation Atty. Lim - Lecture 5",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      }
	  ],
    "total_pages": 1,
    "total_results": 5
    });
 }


});

router.get('/find/:external_id', function(req, res, next) {
  res.json({
"movie_results": [],
"person_results": [],
"tv_results": [],
"tv_episode_results": [
  {
    "id": 412766,
    "name": "The Choice (2)",
    "overview": "Part 2 of 2. When new evidence surfaces, DH is pressured to change his statement; Olczyk receives news about his father; a rift grows between Robin and Leon.",
    "media_type": "tv_episode",
    "vote_average": 0,
    "vote_count": 0,
    "air_date": "2003-09-16",
    "episode_number": 4,
    "episode_type": "standard",
    "production_code": "",
    "runtime": 45,
    "season_number": 1,
    "show_id": 9885,
    "still_path": null
  }
],
"tv_season_results": []
});
});

router.get('/genre/movie/list', function(req, res, next) {
  res.json({
"genres": [
		{
		  "id": 30300,
		  "name": "Political Atty Loanzon - Lecture 1"
		},
		{
		  "id": 30301,
		  "name": "Political Atty Loanzon - Lecture 2"
		},
		{
		  "id": 30302,
		  "name": "Political Atty Loanzon - Lecture 3"
		},
		{
		  "id": 30303,
		  "name": "Political Atty Loanzon - Lecture 4"
		},
		{
		  "id": 30304,
		  "name": "Political Atty Loanzon - Lecture 5"
		},
		{
		  "id": 30305,
		  "name": "Political Atty Loanzon - Lecture 6"
		},
		{
		  "id": 90106,
		  "name": "Reviewer on Taxation Part 1"
		},
		{
		  "id": 90107,
		  "name": "Reviewer on Taxation Part 2"
		},
		{
		  "id": 90108,
		  "name": "Reviewer on Taxation Part 3"
		},
		{
		  "id": 90109,
		  "name": "Reviewer on Taxation Part 4"
		},
		{
		  "id": 90110,
		  "name": "Reviewer on Taxation Part 5"
		},
		{
		  "id": 90111,
		  "name": "Reviewer on Commercial Part 1"
		},
		{
		  "id": 90112,
		  "name": "Reviewer on Taxation Part 2"
		},
		{
		  "id": 90113,
		  "name": "Reviewer on Taxation Part 3"
		},
		{
		  "id": 90114,
		  "name": "Reviewer on Taxation Part 4"
		},
		{
		  "id": 90115,
		  "name": "Reviewer on Taxation Part 5"
		},
		{
		  "id": 90116,
		  "name": "Reviewer on Civil Part 1"
		},
		{
		  "id": 90117,
		  "name": "Reviewer on Civil Part 2"
		},
		{
		  "id": 90118,
		  "name": "Reviewer on Civil Part 2"
		},
		{
		  "id": 90119,
		  "name": "Reviewer on Civil Part 3"
		},
		{
		  "id": 90120,
		  "name": "Reviewer on Civil Part 4"
		},
		{
		  "id": 90121,
		  "name": "Reviewer on Civil Part 5"
		},
		{
		  "id": 90122,
		  "name": "Reviewer on Labort Part 1"
		},
		{
		  "id": 90123,
		  "name": "Reviewer on Labort Part 2"
		},
		{
		  "id": 90124,
		  "name": "Reviewer on Labort Part 3"
		},
		{
		  "id": 20300,
		  "name": "Reviewer on Criminal Part 1"
		},
		{
		  "id": 20301,
		  "name": "Reviewer on Criminal Part 2"
		},
		{
		  "id": 20302,
		  "name": "Reviewer on Criminal Part 3"
		},
		{
		  "id": 90128,
		  "name": "Reviewer on Criminal Part 4"
		},
		{
		  "id": 90129,
		  "name": "Reviewer on Criminal Part 5"
		},
		{
		  "id": 90130,
		  "name": "Reviewer on Remedial Part 1"
		},
		{
		  "id": 90131,
		  "name": "Reviewer on Remedial Part 2"
		},
		{
		  "id": 90132,
		  "name": "Reviewer on Remedial Part 3"
		},
		{
		  "id": 90133,
		  "name": "Reviewer on Remedial Part 4"
		},
		{
		  "id": 90135,
		  "name": "Reviewer on Remedial Part 5"
		},
		{
		  "id": 90136,
		  "name": "Reviewer on Legal Ethics Part 1"
		},
		{
		  "id": 90137,
		  "name": "Reviewer on Legal Ethics Part 2"
		},
		{
		  "id": 90138,
		  "name": "Reviewer on Legal Ethics Part 3"
		}
	  ]
});
});

router.get('/genre/tv/list', function(req, res, next) {
  res.json({
 "genres": [
    
    {
      "id": 1006,
      "name": "Taxation Part 1"
    },
    {
      "id": 1007,
      "name": "Taxation Part 2"
    },
    {
      "id": 1008,
      "name": "Taxation Part 3"
    },
    {
      "id": 1009,
      "name": "Taxation Part 4"
    },
    {
      "id": 1100,
      "name": "Taxation Part 5"
    },
    {
      "id": 1110,
      "name": "Commercial Part 1"
    },
    {
      "id": 1120,
      "name": "Commercial Part 2"
    },
    {
      "id": 1130,
      "name": "Commercial Part 3"
    },
    {
      "id": 1140,
      "name": "Commercial Part 4"
    },
    {
      "id": 1150,
      "name": "Commercial Part 5"
    },
    {
      "id": 1160,
      "name": "Civil Part 1"
    },
    {
      "id": 1170,
      "name": "Civil Part 2"
    },
    {
      "id": 1180,
      "name": "Civil Part 2"
    },
    {
      "id": 1190,
      "name": "Civil Part 3"
    },
    {
      "id": 1200,
      "name": "Civil Part 4"
    },
    {
      "id": 1210,
      "name": "Civil Part 5"
    },
    {
      "id": 1220,
      "name": "Labort Part 1"
    },
    {
      "id": 1230,
      "name": "Labort Part 2"
    },
    {
      "id": 1240,
      "name": "Labort Part 3"
    },
    {
      "id": 20300,
      "name": "Judge Campanilla Criminal Part 1"
    },
    {
      "id": 20301,
      "name": "Judge Campanilla Criminal Part 2"
    },
    {
      "id": 20302,
      "name": "Judge Campanilla Criminal Part 3"
    },
    {
      "id": 20303,
      "name": "Judge Campanilla Criminal Part 4"
    },
    {
      "id": 20304,
      "name": "Judge Campanilla Criminal Part 5"
    },
	 {
      "id": 20305,
      "name": "Judge Campanilla Criminal Part 6"
    },
    {
      "id": 20306,
      "name": "Judge Campanilla Criminal Part 7"
    },
    {
      "id": 20307,
      "name": "Judge Campanilla Criminal Part 8"
    },
    {
      "id": 20303,
      "name": "Judge Campanilla Criminal Part 4"
    },
    {
      "id": 20304,
      "name": "Judge Campanilla Criminal Part 5"
    },
    {
      "id": 1300,
      "name": "Remedial Part 1"
    },
    {
      "id": 1310,
      "name": "Remedial Part 2"
    },
    {
      "id": 1320,
      "name": "Remedial Part 3"
    },
    {
      "id": 1330,
      "name": "Remedial Part 4"
    },
    {
      "id": 1350,
      "name": "Remedial Part 5"
    },
    {
      "id": 1360,
      "name": "Legal Ethics Part 1"
    },
    {
      "id": 1370,
      "name": "Legal Ethics Part 2"
    },
    {
      "id": 1380,
      "name": "Legal Ethics Part 3"
    }
  ]
});
});

router.get('/genre/tv/com/list', function(req, res, next) {
  res.json({
 "genres": [
    {
      "id": 90300,
      "name": "Commercial Part 1"
    },
    {
      "id": 90301,
      "name": "Commercial Part 2"
    },
    {
      "id": 90302,
      "name": "Commercial Part 3"
    },
    {
      "id": 90303,
      "name": "Commercial Part 4"
    },
    {
      "id": 90304,
      "name": "Commercial Part 5"
    },
	{
      "id": 90305,
      "name": "Commercial Part 6"
    }
  ]
});
});

router.get('/genre/tv/rem/list', function(req, res, next) {
  res.json({
 "genres": [
    {
      "id": 80300,
      "name": "Remedial Part 1"
    },
    {
      "id": 80301,
      "name": "Remedial Part 2"
    },
    {
      "id": 80302,
      "name": "Remedial Part 3"
    },
    {
      "id": 80303,
      "name": "Remedial Part 4"
    },
    {
      "id": 80304,
      "name": "Remedial Part 5"
    },
	{
      "id": 80305,
      "name": "Remedial Part 6"
    }
  ]
});
});

router.get('/genre/tv/civ/list', function(req, res, next) {
  res.json({
 "genres": [
    {
      "id": 70300,
      "name": "Civil Part 1"
    },
    {
      "id": 70301,
      "name": "Civil Part 2"
    },
    {
      "id": 70302,
      "name": "Civil Part 2"
    },
    {
      "id": 70303,
      "name": "Civil Part 3"
    },
    {
      "id": 70304,
      "name": "Civil Part 4"
    },
    {
      "id": 70305,
      "name": "Civil Part 5"
    },
    {
      "id": 70306,
      "name": "Civil Part 6"
    }
  ]
});
});

router.get('/genre/tv/le/list', function(req, res, next) {
  res.json({
 "genres": [
    {
      "id": 60300,
      "name": "Legal Ethics Part 1"
    },
    {
      "id": 60301,
      "name": "Legal Ethics Part 2"
    },
    {
      "id": 60302,
      "name": "Legal Ethics Part 3"
    },
	{
      "id": 60303,
      "name": "Legal Ethics Part 4"
    },
	{
      "id": 60304,
      "name": "Legal Ethics Part 5"
    },
	{
      "id": 60305,
      "name": "Legal Ethics Part 6"
    }
  ]
});
});

router.get('/genre/tv/tax/list', function(req, res, next) {
  res.json({
 "genres": [
    {
      "id": 40301,
      "name": "Taxation Atty. Lim - Lecture 1"
    },
    {
      "id": 40302,
      "name": "Taxation Atty. Lim - Lecture 2"
    },
    {
      "id": 40303,
      "name": "Taxation Atty. Lim - Lecture 3"
    },
    {
      "id": 40304,
      "name": "Taxation Atty. Lim - Lecture 4"
    },
    {
      "id": 40305,
      "name": "Taxation Atty. Lim - Lecture 5"
    },
    {
      "id": 40306,
      "name": "Taxation Atty. Lim - Lecture 6"
    },
  ]
});
});

router.get('/genre/tv/labor/list', function(req, res, next) {
  res.json({
 "genres": [
    {
      "id": 40300,
      "name": "Labort Part 1"
    },
    {
      "id": 40301,
      "name": "Labort Part 2"
    },
    {
      "id": 40302,
      "name": "Labort Part 3"
    },
	{
      "id": 40303,
      "name": "Labort Part 4"
    },
	{
      "id": 40304,
      "name": "Labort Part 5"
    },
	{
      "id": 40305,
      "name": "Labort Part 6"
    },
  ]
});
});

router.get('/genre/tv/political/list', function(req, res, next) {
  res.json({
 "genres": [
    {
	  "id": 30300,
	  "name": "Political Atty Loanzon - Lecture 1"
	},
	{
	  "id": 30301,
	  "name": "Political Atty Loanzon - Lecture 2"
	},
	{
	  "id": 30302,
	  "name": "Political Atty Loanzon - Lecture 3"
	},
	{
	  "id": 30303,
	  "name": "Political Atty Loanzon - Lecture 4"
	},
	{
	  "id": 30304,
	  "name": "Political Atty Loanzon - Lecture 5"
	},
	{
	  "id": 30305,
	  "name": "Political Atty Loanzon - Lecture 6"
	}
  ]
});
});

router.get('/list/:list_id', function(req, res, next) {
  res.json({
"created_by": "D7Zins",
"description": "Love",
"favorite_count": 0,
"id": 1211,
"iso_639_1": "en",
"item_count": 0,
"items": [],
"name": "Love",
"page": 1,
"poster_path": null,
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/now_playing', function(req, res, next) {
  res.json({
"dates": {
  "maximum": "2023-11-22",
  "minimum": "2023-10-11"
},
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/popular', function(req, res, next) {
  res.json({
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/top_rated', function(req, res, next) {
  res.json({
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/upcoming', function(req, res, next) {
  res.json({
"dates": {
  "maximum": "2023-12-13",
  "minimum": "2023-11-22"
},
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/:movie_id', function(req, res, next) {
  res.json({
"adult": false,
"backdrop_path": "/5AIAnucJKZ3sHpm7r1ykFVIoUHK.jpg",
"belongs_to_collection": null,
"budget": 50000000,
"genres": [
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 53,
    "name": "Thriller"
  }
],
"homepage": "",
"id": 1272,
"imdb_id": "tt0448134",
"original_language": "en",
"original_title": "Sunshine",
"overview": "Fifty years into the future, the sun is dying, and Earth is threatened by arctic temperatures. A team of astronauts is sent to revive the Sun — but the mission fails. Seven years later, a new team is sent to finish the mission as mankind’s last hope.",
"popularity": 26.64,
"poster_path": "/3dmW9NWP80wnXln5IUoQTAmXbj5.jpg",
"production_companies": [
  {
    "id": 290,
    "logo_path": "/jrgCuaQsY9ouP5ILZf4Dq4ZOkIX.png",
    "name": "Ingenious Media",
    "origin_country": "GB"
  },
  {
    "id": 20478,
    "logo_path": "/gSS2OBc6dRsK2ewRx5lcwnARrpl.png",
    "name": "Moving Picture Company",
    "origin_country": "GB"
  },
  {
    "id": 2452,
    "logo_path": "/6CLoZ59fLPG7UyxQtGTqRevjf58.png",
    "name": "UK Film Council",
    "origin_country": "GB"
  },
  {
    "id": 284,
    "logo_path": null,
    "name": "DNA Films",
    "origin_country": "GB"
  }
],
"production_countries": [
  {
    "iso_3166_1": "GB",
    "name": "United Kingdom"
  }
],
"release_date": "2007-04-05",
"revenue": 34806812,
"runtime": 107,
"spoken_languages": [
  {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
  }
],
"status": "Released",
"tagline": "If the sun dies, so do we.",
"title": "Sunshine",
"video": false,
"vote_average": 6.952,
"vote_count": 3440
});
});

router.get('/movie/:movie_id/account_states', function(req, res, next) {
  res.json({
"id": 12722,
"favorite": false,
"rated": false,
"watchlist": false
});
});

router.get('/movie/:movie_id/alternative_titles', function(req, res, next) {
  res.json({
"id": 343611,
"titles": [

]
});
});

router.get('/movie/:movie_id/changes', function(req, res, next) {
  res.json({
"changes": []
});
});

router.get('/movie/:movie_id/credits', function(req, res, next) {
  res.json({
"id": 343611,
"cast": [

],
"crew": [

]
});
});

router.get('/movie/:movie_id/release_dates', function(req, res, next) {
  res.json({
"id": 343611,
"results": [

]
});
});

router.get('/movie/:movie_id/recommendations', function(req, res, next) {
  res.json({
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/person/popular', function(req, res, next) {
  res.json({
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/latest', function(req, res, next) {
  res.json({
"adult": false,
"backdrop_path": null,
"belongs_to_collection": null,
"budget": 0,
"genres": [],
"homepage": "",
"id": 1207469,
"imdb_id": null,
"original_language": "en",
"original_title": "The 5th Wheel",
"overview": "Plot unknown. Female driven comedy.",
"popularity": 0,
"poster_path": null,
"production_companies": [],
"production_countries": [],
"release_date": "",
"revenue": 0,
"runtime": 0,
"spoken_languages": [],
"status": "Released",
"tagline": "",
"title": "The 5th Wheel",
"video": false,
"vote_average": 0,
"vote_count": 0
});
});

router.get('/movie/:movie_id/reviews', function(req, res, next) {
  res.json({
"id": 1272,
"page": 1,
"results": [

],
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/:movie_id/videos', function(req, res, next) {
    res.json({
        "id": 203281,
        "results": [
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Complex Crime - Trailer",
            "key": "Ie7oUZxhu08",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "763cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Delito Continuado - Trailer",
            "key": "DmJLp1fsFjs",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "863cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Falsification Malversation of Funds Estafa Theft - Trailer",
            "key": "hkEeuD78pOsjs",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "963cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Bigamy Illegal Marriage Performance of Illegal Marriage - Trailer",
            "key": "3332tdEQq34",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "1063cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Three fold rule and GCTA - Trailer",
            "key": "eYy-PYBlWQ8",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "1163cf1f8ed6c3000096d5629f"
          }
        ]
        });
  }
);

router.get('/review/:review_id', function(req, res, next) {
  res.json({
"success": false,
"status_code": 34,
"status_message": "The resource you requested could not be found."
});
});

router.get('/search/movie', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/search/tv', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/tv/airing_today', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    "genre_ids": [
      10763
    ],
    "id": 94722,
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Tagesschau",
    "overview": "German daily news program, the oldest still existing program on German television.",
    "popularity": 3276.253,
    "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    "first_air_date": "1952-12-26",
    "name": "Tagesschau",
    "vote_average": 7.167,
    "vote_count": 165
  },
  {
    "adult": false,
    "backdrop_path": "/ugcdRKcOyUMAr9hAsL058cAX2vj.jpg",
    "genre_ids": [
      10764
    ],
    "id": 12409,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Star Academy",
    "overview": "Star Academy is a French reality television show produced by the Dutch company Endemol. It consists of a contest of young singers. It spawned an equally successful show in Quebec called Star Académie. It is broadcast on NRJ12. At the end of each season, selected contestants would go on tour around France, Morocco, Switzerland, Belgium, Tunisia, and other French-speaking countries.\n\nThe contestants stayed in the Dammarie-lès-Lys castle: The Vives-Eaux castle.\n\nThe reality show was hosted by Nikos Aliagas and featured guest stars such as Madonna, Alizée, Céline Dion, Tina Arena, Nelly Furtado, Tokio Hotel, Andrea Bocelli, Charles Aznavour, Hélène Ségara, Peter Kingsbery, Phil Collins, Laura Pausini, Kylie Minogue, Dannii Minogue, Tina Turner, Mariah Carey, Lara Fabian, Rihanna, Shania Twain, Moby, Avril Lavigne, Anastacia, Alicia Keys, Craig David, 50 Cent, will.i.am, James Blunt, Diddy, Sting, David Guetta, Lenny Kravitz, Janet Jackson, Britney Spears, Liza Minnelli, Johnny Hallyday, Paul Anka, Lionel Richie, Alanis Morissette, Ray Charles, Stevie Wonder, Elton John, Bee Gees, Ricky Martin, and Beyoncé.",
    "popularity": 2193.914,
    "poster_path": "/80BP36meHtHF2UuDBgvAJxgFo5V.jpg",
    "first_air_date": "2001-10-20",
    "name": "Star Academy",
    "vote_average": 6.563,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/aDRIKJuB63tuJUZf1O4mRmbMTVw.jpg",
    "genre_ids": [
      10764,
      99
    ],
    "id": 6480,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House Hunters",
    "overview": "Hosted by Suzanne Whang, the show takes viewers behind the scenes as individuals, couples and families learn what to look for and decide whether or not a home is meant for them. Focusing on the emotional experience of finding and purchasing a new home, each episode follows a prospective buyer and real estate agent through the home-buying process, from start to finish.",
    "popularity": 2123.248,
    "poster_path": "/7Bsr9ogG0q6yHtNuIp6bJ6EFpbH.jpg",
    "first_air_date": "1999-09-30",
    "name": "House Hunters",
    "vote_average": 5.1,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/g8sQ4wCNGYLIkVok5aQsX0WYyMr.jpg",
    "genre_ids": [
      80,
      9648
    ],
    "id": 231454,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "宣判",
    "overview": "",
    "popularity": 2091.944,
    "poster_path": "/1k2Xaetf31vXEg4oAEKJzzK5aBa.jpg",
    "first_air_date": "2023-10-30",
    "name": "The Justice",
    "vote_average": 7.667,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg",
    "genre_ids": [
      10764
    ],
    "id": 82250,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Gran hermano VIP",
    "overview": "",
    "popularity": 1864.387,
    "poster_path": "/9269PATr0bmEXKjkpR88mzGmNYI.jpg",
    "first_air_date": "2004-01-22",
    "name": "Gran hermano VIP",
    "vote_average": 4.1,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/7F9pXKnGsjPRiHGi14xKVlIxUI3.jpg",
    "genre_ids": [
      18
    ],
    "id": 152551,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "我要逆风去",
    "overview": "Xu Si (Gong Jun), an investment professional who moves back to mainland China from a Hong Kong investment bank, meets Jiang Hu (Zhong Chuxi), the only daughter of the chairman of a national clothing conglomerate. Due to their differing business philosophies, the two are at odds with each other. When Jiang Hu's father's company suddenly goes bankrupt, she finds herself plummeting from the heights of success. Meanwhile, Xu Si, who has always been ambitious, sets his sights on the rubber-soled shoe brand \"Tengyue,\" which was once created by Jiang Hu's father. Determined to save \"Tengyue\" at all costs, Jiang Hu, despite her downfall, engages in a fierce battle with Xu Si.\n\nUltimately, their interactions and struggles will determine the fate of \"Tengyue\" and whether it can be revived.",
    "popularity": 1862.213,
    "poster_path": "/cZSb43j1O1pRZIwwn0fgCx5XJIP.jpg",
    "first_air_date": "2023-10-30",
    "name": "Rising With the Wind",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/zvQY9Ddg0JUXs0HNIZ3moj2DZth.jpg",
    "genre_ids": [
      18
    ],
    "id": 117685,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "风起霓裳",
    "overview": "In the reign of Emperor Taizong (627—649), which was called the Prosperity of Zhenguan, former clothing maker An is framed and imprisoned. When she was in danger, she entrusts her young daughter Liu Li to an old friend in the palace. Liu Li grows up in the palace and becomes a medical officer, responsible for epidemic prevention.",
    "popularity": 1772.978,
    "poster_path": "/96xFaFO71aYXcDEbiNd9tmWSKV9.jpg",
    "first_air_date": "2021-01-27",
    "name": "Weaving a Tale of Love",
    "vote_average": 5.5,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/nbFV7KIU22WHmgyPe89DytZhL03.jpg",
    "genre_ids": [
      10764
    ],
    "id": 233816,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Love Island Games",
    "overview": "In this cheeky new iteration, romance meets reality as fan-favorite Islanders are faced with both team and couples' challenges, all while navigating dating, eliminations, recoupling, dramatic arrivals and new competition twists and turns like never before.",
    "popularity": 1604.52,
    "poster_path": "/1ACzNV3c4alBW7rUyo51n8uGoJw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Love Island Games",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 237200,
    "origin_country": [
      "CZ"
    ],
    "original_language": "cs",
    "original_name": "Stardance XII ...kolem dokola",
    "overview": "",
    "popularity": 1529.448,
    "poster_path": "/ot9MBwaVWb8vJU3mrUPXSuIcxUP.jpg",
    "first_air_date": "2023-10-15",
    "name": "Stardance XII ...kolem dokola",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/wU1y7snEVYiJBpZ2k1DjIpHgJbx.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 1434,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Family Guy",
    "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    "popularity": 1034.788,
    "poster_path": "/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    "first_air_date": "1999-01-31",
    "name": "Family Guy",
    "vote_average": 7.3,
    "vote_count": 3951
  },
  {
    "adult": false,
    "backdrop_path": "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
    "genre_ids": [
      10751,
      16,
      35
    ],
    "id": 456,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Simpsons",
    "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    "popularity": 990.737,
    "poster_path": "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
    "first_air_date": "1989-12-17",
    "name": "The Simpsons",
    "vote_average": 7.998,
    "vote_count": 9244
  },
  {
    "adult": false,
    "backdrop_path": "/4zv4RYmXNqvNmKEVINksgIgmvUJ.jpg",
    "genre_ids": [
      16
    ],
    "id": 79481,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "斗破苍穹",
    "overview": "In a land where no magic is present. A land where the strong make the rules and weak have to obey. A land filled with alluring treasures and beauty, yet also filled with unforeseen danger. Three years ago, Xiao Yan, who had shown talents none had seen in decades, suddenly lost everything. His powers, his reputation, and his promise to his mother. What sorcery has caused him to lose all of his powers? And why has his fiancee suddenly shown up?",
    "popularity": 636.191,
    "poster_path": "/a9bJPlezCXF6u0siDxf7cZaSXaJ.jpg",
    "first_air_date": "2017-01-07",
    "name": "Fights Break Sphere",
    "vote_average": 8.694,
    "vote_count": 36
  },
  {
    "adult": false,
    "backdrop_path": "/5s0VnyIk2nArAhVnIGVYQiElmea.jpg",
    "genre_ids": [
      10759,
      18
    ],
    "id": 62286,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Fear the Walking Dead",
    "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
    "popularity": 620.056,
    "poster_path": "/l7N9aS6VyYvjelKoCB2eZge0Qky.jpg",
    "first_air_date": "2015-08-23",
    "name": "Fear the Walking Dead",
    "vote_average": 7.692,
    "vote_count": 4636
  },
  {
    "adult": false,
    "backdrop_path": "/f9ZGy1xMbrp7N9rrv0WoFG8Iw3D.jpg",
    "genre_ids": [
      18
    ],
    "id": 238469,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "无所畏惧",
    "overview": "Luo Yingwei used to be a staff member of the government, and passed the judicial examination by self-studying the law. However, she suffered a blow: her husband Liu Ming broke up with her, and Liu Ming owed a huge amount of usury in China, which made Luo Yingwei deeply involved in a debt crisis. But Luo Yingwei did not give up, she chose to fight back with legal means. As a newcomer to the law firm, Luo Yingwei is burdened with huge debts on one hand and faces pressure in the workplace on the other. Fortunately, she met like-minded partners - Qiu Hua and Xia Shu. They always adhere to their faith in the law and uphold justice. Together, they witness the diversity of human nature and the warmth of society through different cases.",
    "popularity": 597.726,
    "poster_path": "/oQgga07JBpi8EQtr266VLW2JYie.jpg",
    "first_air_date": "2023-11-03",
    "name": "Fearless",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/aCiXh5QX6bg0BtpFEBXKaZYScB4.jpg",
    "genre_ids": [
      10763,
      10764,
      99
    ],
    "id": 203599,
    "origin_country": [
      "HK"
    ],
    "original_language": "cn",
    "original_name": "東張西望",
    "overview": "Scoop is a comprehensive information programme of Television Broadcasts Limited.\n\nThe content of the program is mainly based on entertainment news and personal follow-up of the artists, and will also be interspersed with the latest trends of TVB dramas and artists. Some entertainment news content clips will be rebroadcast on the next day's \"Entertainment Live\".\n\nThis program will be broadcast on Jade Channel from 19:30-20:00 (Hong Kong time) from June 6, 2005, and will be broadcast every day from March 3, 2019, and will be broadcast on myTV (later myTV SUPER) to provide \"Program Review\".",
    "popularity": 436.154,
    "poster_path": "/qo6y0XvSBlKM3XCbYVdcR3a6qyQ.jpg",
    "first_air_date": "2005-06-06",
    "name": "Scoop",
    "vote_average": 6.714,
    "vote_count": 14
  },
  {
    "adult": false,
    "backdrop_path": "/fvBkMzrgrh1lTMczKipnH9Ud6A1.jpg",
    "genre_ids": [
      18,
      10765
    ],
    "id": 237859,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "山有木兮木有心",
    "overview": "Taichu, ancient sacred tree of Xuefeng mountain, and Xinyue, the saint of Snowluo tribe, help Donglin Wang Guangye in competitions. Disputes between countries, including King Beirong, Princess Regent of Nanchu, and others. Who will dominate the Central Plains? Masters like Shangguan Zui, Meng Yilang and Yanshi Meng Ji enter the scene with cunning strategies and chess figures. What will this bring to Bo Yun's chaotic world?",
    "popularity": 426.947,
    "poster_path": "/g99KfIA4XNnoR2jq2x5Wm7xyKtw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Sacred Tree Has Heart",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/4GVXeBUUkJ0UPhRVWZs1ng62Gj.jpg",
    "genre_ids": [
      35,
      10764
    ],
    "id": 33238,
    "origin_country": [
      "KR"
    ],
    "original_language": "ko",
    "original_name": "런닝맨",
    "overview": "These days, variety entertainment is gradually disappearing. It is one of Korea's representative variety entertainment shows that has been in charge of Sunday evenings for over 10 years. In this program, many stars and members play games and missions together. It is characterized by going around several places. In particular, this program focuses solely on laughter among the many fun elements of entertainment.\n\nOpen your eyes! Big fun enters!\n\nOpen your mouth!  A big smile enters!\n\nOpen your mind! Instructive lesson enters!",
    "popularity": 423.828,
    "poster_path": "/2Wmmu1MkqxJ48J7aySET9EKEjXz.jpg",
    "first_air_date": "2010-07-11",
    "name": "Running Man",
    "vote_average": 8.3,
    "vote_count": 167
  },
  {
    "adult": false,
    "backdrop_path": "/11nGiX6hLdexBD4TVUAAVzSIAQy.jpg",
    "genre_ids": [
      10751,
      18
    ],
    "id": 14929,
    "origin_country": [
      "CA"
    ],
    "original_language": "en",
    "original_name": "Heartland",
    "overview": "Life is hard on the Flemings' ranch in the Alberta foothills where abused or neglected horses find refuge with a kind, hard-working family. Debts abound and the bank is about to foreclose. Can they keep the ranch running?",
    "popularity": 409.296,
    "poster_path": "/uc2gtWczT58BiAUJWFz9P5aZmNF.jpg",
    "first_air_date": "2007-10-14",
    "name": "Heartland",
    "vote_average": 8.286,
    "vote_count": 536
  },
  {
    "adult": false,
    "backdrop_path": "/xAEfikFqZueBHh1LJXwPQidq6sg.jpg",
    "genre_ids": [],
    "id": 220285,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Spy Ninjas: Corruption",
    "overview": "The Spy Ninjas are back. The legends of the past and young heroes of the future must unite to defend their home from a threat that corrupts anything in its way. Join the Spy Ninjas on their quest to ensure their existence isn't erased from the internet.",
    "popularity": 394.713,
    "poster_path": "/eXKl6qhZMwLPYjROYjHBShv3ugq.jpg",
    "first_air_date": "2023-11-11",
    "name": "Spy Ninjas: Corruption",
    "vote_average": 0,
    "vote_count": 0
  }
],
"total_pages": 13,
"total_results": 252
});
});

router.get('/tv/on_the_air', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    "genre_ids": [
      10763
    ],
    "id": 94722,
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Tagesschau",
    "overview": "German daily news program, the oldest still existing program on German television.",
    "popularity": 3276.253,
    "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    "first_air_date": "1952-12-26",
    "name": "Tagesschau",
    "vote_average": 7.155,
    "vote_count": 165
  },
  {
    "adult": false,
    "backdrop_path": "/ugcdRKcOyUMAr9hAsL058cAX2vj.jpg",
    "genre_ids": [
      10764
    ],
    "id": 12409,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Star Academy",
    "overview": "Star Academy is a French reality television show produced by the Dutch company Endemol. It consists of a contest of young singers. It spawned an equally successful show in Quebec called Star Académie. It is broadcast on NRJ12. At the end of each season, selected contestants would go on tour around France, Morocco, Switzerland, Belgium, Tunisia, and other French-speaking countries.\n\nThe contestants stayed in the Dammarie-lès-Lys castle: The Vives-Eaux castle.\n\nThe reality show was hosted by Nikos Aliagas and featured guest stars such as Madonna, Alizée, Céline Dion, Tina Arena, Nelly Furtado, Tokio Hotel, Andrea Bocelli, Charles Aznavour, Hélène Ségara, Peter Kingsbery, Phil Collins, Laura Pausini, Kylie Minogue, Dannii Minogue, Tina Turner, Mariah Carey, Lara Fabian, Rihanna, Shania Twain, Moby, Avril Lavigne, Anastacia, Alicia Keys, Craig David, 50 Cent, will.i.am, James Blunt, Diddy, Sting, David Guetta, Lenny Kravitz, Janet Jackson, Britney Spears, Liza Minnelli, Johnny Hallyday, Paul Anka, Lionel Richie, Alanis Morissette, Ray Charles, Stevie Wonder, Elton John, Bee Gees, Ricky Martin, and Beyoncé.",
    "popularity": 2193.914,
    "poster_path": "/80BP36meHtHF2UuDBgvAJxgFo5V.jpg",
    "first_air_date": "2001-10-20",
    "name": "Star Academy",
    "vote_average": 6.563,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/aDRIKJuB63tuJUZf1O4mRmbMTVw.jpg",
    "genre_ids": [
      10764,
      99
    ],
    "id": 6480,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House Hunters",
    "overview": "Hosted by Suzanne Whang, the show takes viewers behind the scenes as individuals, couples and families learn what to look for and decide whether or not a home is meant for them. Focusing on the emotional experience of finding and purchasing a new home, each episode follows a prospective buyer and real estate agent through the home-buying process, from start to finish.",
    "popularity": 2123.248,
    "poster_path": "/7Bsr9ogG0q6yHtNuIp6bJ6EFpbH.jpg",
    "first_air_date": "1999-09-30",
    "name": "House Hunters",
    "vote_average": 5.1,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/g8sQ4wCNGYLIkVok5aQsX0WYyMr.jpg",
    "genre_ids": [
      80,
      9648
    ],
    "id": 231454,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "宣判",
    "overview": "",
    "popularity": 2091.944,
    "poster_path": "/stAFsiKB8No9wYtNpX6yyjRgrkO.jpg",
    "first_air_date": "2023-10-30",
    "name": "The Justice",
    "vote_average": 7.7,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg",
    "genre_ids": [
      10764
    ],
    "id": 82250,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Gran hermano VIP",
    "overview": "",
    "popularity": 1864.387,
    "poster_path": "/9269PATr0bmEXKjkpR88mzGmNYI.jpg",
    "first_air_date": "2004-01-22",
    "name": "Gran hermano VIP",
    "vote_average": 4.1,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/7F9pXKnGsjPRiHGi14xKVlIxUI3.jpg",
    "genre_ids": [
      18
    ],
    "id": 152551,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "我要逆风去",
    "overview": "Xu Si (Gong Jun), an investment professional who moves back to mainland China from a Hong Kong investment bank, meets Jiang Hu (Zhong Chuxi), the only daughter of the chairman of a national clothing conglomerate. Due to their differing business philosophies, the two are at odds with each other. When Jiang Hu's father's company suddenly goes bankrupt, she finds herself plummeting from the heights of success. Meanwhile, Xu Si, who has always been ambitious, sets his sights on the rubber-soled shoe brand \"Tengyue,\" which was once created by Jiang Hu's father. Determined to save \"Tengyue\" at all costs, Jiang Hu, despite her downfall, engages in a fierce battle with Xu Si.\n\nUltimately, their interactions and struggles will determine the fate of \"Tengyue\" and whether it can be revived.",
    "popularity": 1862.213,
    "poster_path": "/cZSb43j1O1pRZIwwn0fgCx5XJIP.jpg",
    "first_air_date": "2023-10-30",
    "name": "Rising With the Wind",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/218ZehBKlH8efPRRccmB7bu0oLQ.jpg",
    "genre_ids": [
      35,
      9648,
      10766,
      18
    ],
    "id": 219109,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Elas por Elas",
    "overview": "Seven friends who met in their youth at an English course meet again 25 years later; Lara, Taís, Helena, Adriana, Renée, Natália and Carol, each of them has a different personality and origin, but they share a deep affection.",
    "popularity": 1836.795,
    "poster_path": "/m0cvvnhnRXdQhLARx7qt9lz7hTE.jpg",
    "first_air_date": "2023-09-25",
    "name": "Elas por Elas",
    "vote_average": 7.364,
    "vote_count": 11
  },
  {
    "adult": false,
    "backdrop_path": "/zvQY9Ddg0JUXs0HNIZ3moj2DZth.jpg",
    "genre_ids": [
      18
    ],
    "id": 117685,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "风起霓裳",
    "overview": "In the reign of Emperor Taizong (627—649), which was called the Prosperity of Zhenguan, former clothing maker An is framed and imprisoned. When she was in danger, she entrusts her young daughter Liu Li to an old friend in the palace. Liu Li grows up in the palace and becomes a medical officer, responsible for epidemic prevention.",
    "popularity": 1772.978,
    "poster_path": "/96xFaFO71aYXcDEbiNd9tmWSKV9.jpg",
    "first_air_date": "2021-01-27",
    "name": "Weaving a Tale of Love",
    "vote_average": 5.5,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/nbFV7KIU22WHmgyPe89DytZhL03.jpg",
    "genre_ids": [
      10764
    ],
    "id": 233816,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Love Island Games",
    "overview": "In this cheeky new iteration, romance meets reality as fan-favorite Islanders are faced with both team and couples' challenges, all while navigating dating, eliminations, recoupling, dramatic arrivals and new competition twists and turns like never before.",
    "popularity": 1604.52,
    "poster_path": "/1ACzNV3c4alBW7rUyo51n8uGoJw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Love Island Games",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 237200,
    "origin_country": [
      "CZ"
    ],
    "original_language": "cs",
    "original_name": "Stardance XII ...kolem dokola",
    "overview": "",
    "popularity": 1529.448,
    "poster_path": "/ot9MBwaVWb8vJU3mrUPXSuIcxUP.jpg",
    "first_air_date": "2023-10-15",
    "name": "Stardance XII ...kolem dokola",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
    "genre_ids": [
      10751,
      35,
      18
    ],
    "id": 91759,
    "origin_country": [
      "HK"
    ],
    "original_language": "cn",
    "original_name": "愛·回家之開心速遞",
    "overview": "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
    "popularity": 1333.13,
    "poster_path": "/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
    "first_air_date": "2017-02-06",
    "name": "Come Home Love: Lo and Behold",
    "vote_average": 5.032,
    "vote_count": 32
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg",
    "genre_ids": [
      18,
      80,
      10766
    ],
    "id": 209265,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Terra e Paixão",
    "overview": "When her husband is killed in a land grabbing attempt, Aline takes charge of cultivating his land and protecting his family. Facing the powerful Antonio La Selva, responsible for the death of her husband and the largest landowner in the region, Aline is determined to keep possession of her land and invest in its production. However, she didn't expect that she would fall in love with Daniel, son of her rival, who is at odds with his rebellious half-brother, Caio, who, in turn, also falls in love with the girl. In the interior of Brazil, Aline will have to fight two battles: the dispute for her lands and for her heart.",
    "popularity": 1264.527,
    "poster_path": "/6SgKArqMYmqSl5XlHEucGXvotw.jpg",
    "first_air_date": "2023-05-08",
    "name": "Land of Desire",
    "vote_average": 6.541,
    "vote_count": 123
  },
  {
    "adult": false,
    "backdrop_path": "/pEJL28C17jVPCwUipGO0JdTUobO.jpg",
    "genre_ids": [
      35,
      10766
    ],
    "id": 213026,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Fuzuê",
    "overview": "The department store Fuzue, specialized in popular items, is a success led by Nero Braga e Silva. Little does he know that the store's grounds have hidden relics for over 300 years.",
    "popularity": 1147.757,
    "poster_path": "/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg",
    "first_air_date": "2023-08-14",
    "name": "Fuzue",
    "vote_average": 5.8,
    "vote_count": 20
  },
  {
    "adult": false,
    "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
    "genre_ids": [
      10751,
      35
    ],
    "id": 218145,
    "origin_country": [
      "SK"
    ],
    "original_language": "sk",
    "original_name": "Mama na prenájom",
    "overview": "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
    "popularity": 1136.182,
    "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
    "first_air_date": "2023-01-09",
    "name": "Mom for rent",
    "vote_average": 6.083,
    "vote_count": 12
  },
  {
    "adult": false,
    "backdrop_path": "/wU1y7snEVYiJBpZ2k1DjIpHgJbx.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 1434,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Family Guy",
    "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    "popularity": 1034.788,
    "poster_path": "/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    "first_air_date": "1999-01-31",
    "name": "Family Guy",
    "vote_average": 7.3,
    "vote_count": 3951
  },
  {
    "adult": false,
    "backdrop_path": "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
    "genre_ids": [
      10751,
      16,
      35
    ],
    "id": 456,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Simpsons",
    "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    "popularity": 990.737,
    "poster_path": "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
    "first_air_date": "1989-12-17",
    "name": "The Simpsons",
    "vote_average": 7.998,
    "vote_count": 9244
  },
  {
    "adult": false,
    "backdrop_path": "/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 95479,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "呪術廻戦",
    "overview": "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
    "popularity": 971.05,
    "poster_path": "/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg",
    "first_air_date": "2020-10-03",
    "name": "Jujutsu Kaisen",
    "vote_average": 8.567,
    "vote_count": 2907
  },
  {
    "adult": false,
    "backdrop_path": "/69Jblm3seQgiPuPQMrJqg9Nxhaz.jpg",
    "genre_ids": [
      10763,
      10767
    ],
    "id": 101463,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Al rojo vivo",
    "overview": "\"Al rojo vivo\" is a program on laSexta focused on the analysis and debate of national and international political current affairs. The format is hosted and directed by Antonio García Ferreras and produced by the News Services of laSexta.",
    "popularity": 920.828,
    "poster_path": "/ag6PmoBxkF2s1uY3An618NCEt3g.jpg",
    "first_air_date": "2011-01-10",
    "name": "Al rojo vivo",
    "vote_average": 3.262,
    "vote_count": 21
  },
  {
    "adult": false,
    "backdrop_path": "/2GflJk6Hm1L3FFVWIvnuOskDFGv.jpg",
    "genre_ids": [
      18,
      9648
    ],
    "id": 226773,
    "origin_country": [
      "PH"
    ],
    "original_language": "tl",
    "original_name": "Senior High",
    "overview": "A student’s death causes a scandal at the prestigious Northford High. Investigations conclude it was a suicide. The victim’s twin sister thinks otherwise. As she searches for truth, she will unravel secrets that are far more shocking and dangerous.",
    "popularity": 863.95,
    "poster_path": "/k285iD6gZIoLsVSczSjc4WIXkdc.jpg",
    "first_air_date": "2023-08-28",
    "name": "Senior High",
    "vote_average": 0,
    "vote_count": 0
  }
],
"total_pages": 63,
"total_results": 1250
});
});

router.get('/tv/popular', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    "genre_ids": [
      10763
    ],
    "id": 94722,
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Tagesschau",
    "overview": "German daily news program, the oldest still existing program on German television.",
    "popularity": 3276.253,
    "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    "first_air_date": "1952-12-26",
    "name": "Tagesschau",
    "vote_average": 7.155,
    "vote_count": 165
  },
  {
    "adult": false,
    "backdrop_path": "/ugcdRKcOyUMAr9hAsL058cAX2vj.jpg",
    "genre_ids": [
      10764
    ],
    "id": 12409,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Star Academy",
    "overview": "Star Academy is a French reality television show produced by the Dutch company Endemol. It consists of a contest of young singers. It spawned an equally successful show in Quebec called Star Académie. It is broadcast on NRJ12. At the end of each season, selected contestants would go on tour around France, Morocco, Switzerland, Belgium, Tunisia, and other French-speaking countries.\n\nThe contestants stayed in the Dammarie-lès-Lys castle: The Vives-Eaux castle.\n\nThe reality show was hosted by Nikos Aliagas and featured guest stars such as Madonna, Alizée, Céline Dion, Tina Arena, Nelly Furtado, Tokio Hotel, Andrea Bocelli, Charles Aznavour, Hélène Ségara, Peter Kingsbery, Phil Collins, Laura Pausini, Kylie Minogue, Dannii Minogue, Tina Turner, Mariah Carey, Lara Fabian, Rihanna, Shania Twain, Moby, Avril Lavigne, Anastacia, Alicia Keys, Craig David, 50 Cent, will.i.am, James Blunt, Diddy, Sting, David Guetta, Lenny Kravitz, Janet Jackson, Britney Spears, Liza Minnelli, Johnny Hallyday, Paul Anka, Lionel Richie, Alanis Morissette, Ray Charles, Stevie Wonder, Elton John, Bee Gees, Ricky Martin, and Beyoncé.",
    "popularity": 2193.914,
    "poster_path": "/80BP36meHtHF2UuDBgvAJxgFo5V.jpg",
    "first_air_date": "2001-10-20",
    "name": "Star Academy",
    "vote_average": 6.563,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/aDRIKJuB63tuJUZf1O4mRmbMTVw.jpg",
    "genre_ids": [
      10764,
      99
    ],
    "id": 6480,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House Hunters",
    "overview": "Hosted by Suzanne Whang, the show takes viewers behind the scenes as individuals, couples and families learn what to look for and decide whether or not a home is meant for them. Focusing on the emotional experience of finding and purchasing a new home, each episode follows a prospective buyer and real estate agent through the home-buying process, from start to finish.",
    "popularity": 2123.248,
    "poster_path": "/7Bsr9ogG0q6yHtNuIp6bJ6EFpbH.jpg",
    "first_air_date": "1999-09-30",
    "name": "House Hunters",
    "vote_average": 5.1,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/g8sQ4wCNGYLIkVok5aQsX0WYyMr.jpg",
    "genre_ids": [
      80,
      9648
    ],
    "id": 231454,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "宣判",
    "overview": "",
    "popularity": 2091.944,
    "poster_path": "/stAFsiKB8No9wYtNpX6yyjRgrkO.jpg",
    "first_air_date": "2023-10-30",
    "name": "The Justice",
    "vote_average": 7.7,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg",
    "genre_ids": [
      10764
    ],
    "id": 82250,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Gran hermano VIP",
    "overview": "",
    "popularity": 1864.387,
    "poster_path": "/9269PATr0bmEXKjkpR88mzGmNYI.jpg",
    "first_air_date": "2004-01-22",
    "name": "Gran hermano VIP",
    "vote_average": 4.1,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/7F9pXKnGsjPRiHGi14xKVlIxUI3.jpg",
    "genre_ids": [
      18
    ],
    "id": 152551,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "我要逆风去",
    "overview": "Xu Si (Gong Jun), an investment professional who moves back to mainland China from a Hong Kong investment bank, meets Jiang Hu (Zhong Chuxi), the only daughter of the chairman of a national clothing conglomerate. Due to their differing business philosophies, the two are at odds with each other. When Jiang Hu's father's company suddenly goes bankrupt, she finds herself plummeting from the heights of success. Meanwhile, Xu Si, who has always been ambitious, sets his sights on the rubber-soled shoe brand \"Tengyue,\" which was once created by Jiang Hu's father. Determined to save \"Tengyue\" at all costs, Jiang Hu, despite her downfall, engages in a fierce battle with Xu Si.\n\nUltimately, their interactions and struggles will determine the fate of \"Tengyue\" and whether it can be revived.",
    "popularity": 1862.213,
    "poster_path": "/cZSb43j1O1pRZIwwn0fgCx5XJIP.jpg",
    "first_air_date": "2023-10-30",
    "name": "Rising With the Wind",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/218ZehBKlH8efPRRccmB7bu0oLQ.jpg",
    "genre_ids": [
      35,
      9648,
      10766,
      18
    ],
    "id": 219109,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Elas por Elas",
    "overview": "Seven friends who met in their youth at an English course meet again 25 years later; Lara, Taís, Helena, Adriana, Renée, Natália and Carol, each of them has a different personality and origin, but they share a deep affection.",
    "popularity": 1836.795,
    "poster_path": "/m0cvvnhnRXdQhLARx7qt9lz7hTE.jpg",
    "first_air_date": "2023-09-25",
    "name": "Elas por Elas",
    "vote_average": 7.364,
    "vote_count": 11
  },
  {
    "adult": false,
    "backdrop_path": "/zvQY9Ddg0JUXs0HNIZ3moj2DZth.jpg",
    "genre_ids": [
      18
    ],
    "id": 117685,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "风起霓裳",
    "overview": "In the reign of Emperor Taizong (627—649), which was called the Prosperity of Zhenguan, former clothing maker An is framed and imprisoned. When she was in danger, she entrusts her young daughter Liu Li to an old friend in the palace. Liu Li grows up in the palace and becomes a medical officer, responsible for epidemic prevention.",
    "popularity": 1772.978,
    "poster_path": "/96xFaFO71aYXcDEbiNd9tmWSKV9.jpg",
    "first_air_date": "2021-01-27",
    "name": "Weaving a Tale of Love",
    "vote_average": 5.5,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/nbFV7KIU22WHmgyPe89DytZhL03.jpg",
    "genre_ids": [
      10764
    ],
    "id": 233816,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Love Island Games",
    "overview": "In this cheeky new iteration, romance meets reality as fan-favorite Islanders are faced with both team and couples' challenges, all while navigating dating, eliminations, recoupling, dramatic arrivals and new competition twists and turns like never before.",
    "popularity": 1604.52,
    "poster_path": "/1ACzNV3c4alBW7rUyo51n8uGoJw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Love Island Games",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 237200,
    "origin_country": [
      "CZ"
    ],
    "original_language": "cs",
    "original_name": "Stardance XII ...kolem dokola",
    "overview": "",
    "popularity": 1529.448,
    "poster_path": "/ot9MBwaVWb8vJU3mrUPXSuIcxUP.jpg",
    "first_air_date": "2023-10-15",
    "name": "Stardance XII ...kolem dokola",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/hCu11X8wCvloA49xzZQKZ9GdXcQ.jpg",
    "genre_ids": [
      18
    ],
    "id": 225929,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "治愈系恋人",
    "overview": "When Gu Yunzheng, an associate professor of neurosurgery, goes on a medical aid mission in Lacaya, he meets Su Wei'an, a \"deserter\" who has abandoned her medical career to become a businessperson. From bickering all the time to falling in love with each other, he gradually discovers that all her abnormal behavior is caused by a genetic disease called Huntington's disease. The love for his beloved one makes him empathize with the sadness and despair of this incurable disease faced by 30,000 patients and their families across the country. Finally, Gu Yunzheng decides to give up his promising career and devote his life to the research of curing this rare disease, fighting alongside his lover to carve light out of the darkness.",
    "popularity": 1472.728,
    "poster_path": "/d2FwkOhWrimCjqhi6P0YUEPeVH9.jpg",
    "first_air_date": "2023-11-02",
    "name": "Love is Panacea",
    "vote_average": 6.667,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/N1hWzVPpZ8lIQvQskgdQogxdsc.jpg",
    "genre_ids": [
      18,
      10765
    ],
    "id": 84958,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Loki",
    "overview": "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
    "popularity": 1370.678,
    "poster_path": "/voHUmluYmKyleFkTu3lOXQG702u.jpg",
    "first_air_date": "2021-06-09",
    "name": "Loki",
    "vote_average": 8.18,
    "vote_count": 10732
  },
  {
    "adult": false,
    "backdrop_path": "/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
    "genre_ids": [
      10751,
      35,
      18
    ],
    "id": 91759,
    "origin_country": [
      "HK"
    ],
    "original_language": "cn",
    "original_name": "愛·回家之開心速遞",
    "overview": "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
    "popularity": 1333.13,
    "poster_path": "/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
    "first_air_date": "2017-02-06",
    "name": "Come Home Love: Lo and Behold",
    "vote_average": 5.032,
    "vote_count": 32
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg",
    "genre_ids": [
      18,
      80,
      10766
    ],
    "id": 209265,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Terra e Paixão",
    "overview": "When her husband is killed in a land grabbing attempt, Aline takes charge of cultivating his land and protecting his family. Facing the powerful Antonio La Selva, responsible for the death of her husband and the largest landowner in the region, Aline is determined to keep possession of her land and invest in its production. However, she didn't expect that she would fall in love with Daniel, son of her rival, who is at odds with his rebellious half-brother, Caio, who, in turn, also falls in love with the girl. In the interior of Brazil, Aline will have to fight two battles: the dispute for her lands and for her heart.",
    "popularity": 1264.527,
    "poster_path": "/6SgKArqMYmqSl5XlHEucGXvotw.jpg",
    "first_air_date": "2023-05-08",
    "name": "Land of Desire",
    "vote_average": 6.541,
    "vote_count": 123
  },
  {
    "adult": false,
    "backdrop_path": "/pEJL28C17jVPCwUipGO0JdTUobO.jpg",
    "genre_ids": [
      35,
      10766
    ],
    "id": 213026,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Fuzuê",
    "overview": "The department store Fuzue, specialized in popular items, is a success led by Nero Braga e Silva. Little does he know that the store's grounds have hidden relics for over 300 years.",
    "popularity": 1147.757,
    "poster_path": "/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg",
    "first_air_date": "2023-08-14",
    "name": "Fuzue",
    "vote_average": 5.8,
    "vote_count": 20
  },
  {
    "adult": false,
    "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
    "genre_ids": [
      10751,
      35
    ],
    "id": 218145,
    "origin_country": [
      "SK"
    ],
    "original_language": "sk",
    "original_name": "Mama na prenájom",
    "overview": "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
    "popularity": 1136.182,
    "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
    "first_air_date": "2023-01-09",
    "name": "Mom for rent",
    "vote_average": 6.083,
    "vote_count": 12
  },
  {
    "adult": false,
    "backdrop_path": "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 72879,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Demain nous appartient",
    "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
    "popularity": 1058.895,
    "poster_path": "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
    "first_air_date": "2017-07-17",
    "name": "Tomorrow is Ours",
    "vote_average": 6.216,
    "vote_count": 44
  },
  {
    "adult": false,
    "backdrop_path": "/wU1y7snEVYiJBpZ2k1DjIpHgJbx.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 1434,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Family Guy",
    "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    "popularity": 1034.788,
    "poster_path": "/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    "first_air_date": "1999-01-31",
    "name": "Family Guy",
    "vote_average": 7.3,
    "vote_count": 3951
  },
  {
    "adult": false,
    "backdrop_path": "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
    "genre_ids": [
      10751,
      16,
      35
    ],
    "id": 456,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Simpsons",
    "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    "popularity": 990.737,
    "poster_path": "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
    "first_air_date": "1989-12-17",
    "name": "The Simpsons",
    "vote_average": 7.998,
    "vote_count": 9244
  }
],
"total_pages": 7973,
"total_results": 159444
});
});

router.get('/tv/top_rated', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 1396,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Breaking Bad",
    "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
    "popularity": 422.169,
    "poster_path": "/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    "first_air_date": "2008-01-20",
    "name": "Breaking Bad",
    "vote_average": 8.894,
    "vote_count": 12647
  },
  {
    "adult": false,
    "backdrop_path": "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    "genre_ids": [
      16,
      18,
      10765,
      10759
    ],
    "id": 94605,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Arcane",
    "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
    "popularity": 93.725,
    "poster_path": "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    "first_air_date": "2021-11-06",
    "name": "Arcane",
    "vote_average": 8.7,
    "vote_count": 3426
  },
  {
    "adult": false,
    "backdrop_path": "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
    "genre_ids": [
      10759,
      35,
      16
    ],
    "id": 37854,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "ワンピース",
    "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
    "popularity": 162.281,
    "poster_path": "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    "first_air_date": "1999-10-20",
    "name": "One Piece",
    "vote_average": 8.7,
    "vote_count": 4165
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg",
    "genre_ids": [
      18,
      10751
    ],
    "id": 70785,
    "origin_country": [
      "CA"
    ],
    "original_language": "en",
    "original_name": "Anne with an E",
    "overview": "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.",
    "popularity": 93.108,
    "poster_path": "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
    "first_air_date": "2017-03-19",
    "name": "Anne with an E",
    "vote_average": 8.694,
    "vote_count": 4412
  },
  {
    "adult": false,
    "backdrop_path": "/A6tMQAo6t6eRFCPhsrShmxZLqFB.jpg",
    "genre_ids": [
      10759,
      16,
      10765
    ],
    "id": 31911,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "overview": "Disregard for alchemy’s laws ripped half of Ed Elric’s limbs from his body and left Al’s soul clinging to a suit of armor. To restore what was lost, the brothers seek the Philosopher’s Stone. Enemies and allies – the corrupt military, the Homunculi, and foreign alchemists – will alter the Elric’s course, but their purpose will remain unchanged and their bond unbreakable.",
    "popularity": 115.005,
    "poster_path": "/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
    "first_air_date": "2009-04-05",
    "name": "Fullmetal Alchemist: Brotherhood",
    "vote_average": 8.693,
    "vote_count": 1793
  },
  {
    "adult": false,
    "backdrop_path": "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 246,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Avatar: The Last Airbender",
    "overview": "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
    "popularity": 97.788,
    "poster_path": "/cHFZA8Tlv03nKTGXhLOYOLtqoSm.jpg",
    "first_air_date": "2005-02-21",
    "name": "Avatar: The Last Airbender",
    "vote_average": 8.7,
    "vote_count": 3556
  },
  {
    "adult": false,
    "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 85937,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "鬼滅の刃",
    "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
    "popularity": 93.17,
    "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    "first_air_date": "2019-04-06",
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "vote_average": 8.683,
    "vote_count": 5713
  },
  {
    "adult": false,
    "backdrop_path": "/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg",
    "genre_ids": [
      16,
      10765,
      10759,
      18
    ],
    "id": 95557,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Invincible",
    "overview": "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.",
    "popularity": 822.277,
    "poster_path": "/dMOpdkrDC5dQxqNydgKxXjBKyAc.jpg",
    "first_air_date": "2021-03-25",
    "name": "Invincible",
    "vote_average": 8.671,
    "vote_count": 3860
  },
  {
    "adult": false,
    "backdrop_path": "/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
    "genre_ids": [
      16,
      10765,
      10759
    ],
    "id": 1429,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "進撃の巨人",
    "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
    "popularity": 200.317,
    "poster_path": "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    "first_air_date": "2013-04-07",
    "name": "Attack on Titan",
    "vote_average": 8.665,
    "vote_count": 5674
  },
  {
    "adult": false,
    "backdrop_path": "/jsXKG9uppnPrhqFNhImllyCfLhl.jpg",
    "genre_ids": [
      10759,
      16
    ],
    "id": 65930,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "僕のヒーローアカデミア",
    "overview": "A superhero-admiring boy without any powers enrolls in a prestigious hero academy and learns what it really means to be a hero.",
    "popularity": 44.552,
    "poster_path": "/ivOLM47yJt90P19RH1NvJrAJz9F.jpg",
    "first_air_date": "2016-04-03",
    "name": "My Hero Academia",
    "vote_average": 8.664,
    "vote_count": 4546
  },
  {
    "adult": false,
    "backdrop_path": "/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
    "genre_ids": [
      18
    ],
    "id": 87108,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Chernobyl",
    "overview": "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
    "popularity": 96.227,
    "poster_path": "/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "first_air_date": "2019-05-06",
    "name": "Chernobyl",
    "vote_average": 8.654,
    "vote_count": 5489
  },
  {
    "adult": false,
    "backdrop_path": "/uoA7xBzCt3XXqL5fMmB8pmYgABJ.jpg",
    "genre_ids": [
      18,
      10765,
      35
    ],
    "id": 67915,
    "origin_country": [
      "KR"
    ],
    "original_language": "ko",
    "original_name": "쓸쓸하고 찬란하神-도깨비",
    "overview": "In his quest for a bride to break his immortal curse, a 939-year-old guardian of souls meets a grim reaper and a sprightly student with a tragic past.",
    "popularity": 79.054,
    "poster_path": "/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg",
    "first_air_date": "2016-12-02",
    "name": "Goblin",
    "vote_average": 8.652,
    "vote_count": 2555
  },
  {
    "adult": false,
    "backdrop_path": "/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 60059,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Better Call Saul",
    "overview": "Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts criminal in criminal lawyer.",
    "popularity": 248.451,
    "poster_path": "/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
    "first_air_date": "2015-02-08",
    "name": "Better Call Saul",
    "vote_average": 8.652,
    "vote_count": 4482
  },
  {
    "adult": false,
    "backdrop_path": "/5iWJwQPBusPTV7G7n5TABNRP7tO.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 31132,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Regular Show",
    "overview": "Two bored groundskeepers, Mordecai (a six-foot-tall blue jay) and Rigby (a hyperactive raccoon) are best friends who spend their days trying to entertain themselves by any means necessary, much to the displeasure of their boss. Their everyday pursuits often lead to things spiraling out of control and into the surreal.",
    "popularity": 309.9,
    "poster_path": "/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg",
    "first_air_date": "2010-09-06",
    "name": "Regular Show",
    "vote_average": 8.648,
    "vote_count": 1806
  },
  {
    "adult": false,
    "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    "genre_ids": [
      18
    ],
    "id": 100088,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Last of Us",
    "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
    "popularity": 208.901,
    "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    "first_air_date": "2023-01-15",
    "name": "The Last of Us",
    "vote_average": 8.643,
    "vote_count": 4217
  },
  {
    "adult": false,
    "backdrop_path": "/cHyY5z4txdVyGtYMvBJhCqCcJso.jpg",
    "genre_ids": [
      16,
      10765,
      18,
      10759,
      35
    ],
    "id": 92685,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Owl House",
    "overview": "An animated fantasy-comedy series that follows Luz, a self-assured teenage girl who accidentally stumbles upon a portal to a magical world where she befriends a rebellious witch, Eda, and an adorably tiny warrior, King. Despite not having magical abilities, Luz pursues her dream of becoming a witch by serving as Eda's apprentice at the Owl House and ultimately finds a new family in an unlikely setting.",
    "popularity": 160.734,
    "poster_path": "/zhdy3PcNVE15wj1wrxn45ARZBnx.jpg",
    "first_air_date": "2020-01-10",
    "name": "The Owl House",
    "vote_average": 8.64,
    "vote_count": 1398
  },
  {
    "adult": false,
    "backdrop_path": "/gDDwXPs53PYNVM8LASxXOxtxmX5.jpg",
    "genre_ids": [
      35,
      10751
    ],
    "id": 72637,
    "origin_country": [
      "AR"
    ],
    "original_language": "es",
    "original_name": "O11CE",
    "overview": "The series revolves around Gabo, a soccer-loving teenager who, upon receiving a scholarship from the prestigious Sports Academic Institute (IAD) of Buenos Aires, will see his dream of playing at Los Halcones Dorados, the renowned amateur team of the school, and also his longing to become a professional footballer.",
    "popularity": 118.927,
    "poster_path": "/sen4We5WQCRsGZe82ohTEmxFD06.jpg",
    "first_air_date": "2017-06-19",
    "name": "Once",
    "vote_average": 8.64,
    "vote_count": 1372
  },
  {
    "adult": false,
    "backdrop_path": "/2Yfzm5857lprGonYPl30XgEpTry.jpg",
    "genre_ids": [
      16,
      9648,
      10765
    ],
    "id": 13916,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "DEATH NOTE",
    "overview": "Light Yagami is an ace student with great prospects—and he’s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and Light has vowed to use the power of the Death Note to rid the world of evil. But will Light succeed in his noble goal, or will the Death Note turn him into the very thing he fights against?",
    "popularity": 95.342,
    "poster_path": "/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg",
    "first_air_date": "2006-10-04",
    "name": "Death Note",
    "vote_average": 8.639,
    "vote_count": 3683
  },
  {
    "adult": false,
    "backdrop_path": "/y8DX7y9vvUcc0uKYd7USO9QkTg6.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 42573,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "スラムダンク",
    "overview": "Sakuragi Hanamichi is a junior high punk used to getting into fights and being rejected by girls but upon entering high school he meets the girl of his dreams, Haruko Akagi. He will do anything in order to win her heart including joining the school basketball team that is aiming to conquer the nation lead by Haruko's brother. The problem is that Sakuragi has never played basketball before and a freshman sensation is stealing the spotlight and Haruko's affection from him.",
    "popularity": 104.324,
    "poster_path": "/nOeEieXG63hck1mRGChcKBN2Obc.jpg",
    "first_air_date": "1993-10-16",
    "name": "Slam Dunk",
    "vote_average": 8.637,
    "vote_count": 811
  }
],
"total_pages": 93,
"total_results": 1845
});
});

router.get('/tv/:series_id', function(req, res, next) {

  if (req.params.series_id == 2030088801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		  {
			"id": 2030088801,
			"credit_id": "5307ee44c3a36841f00011b0",
			"name": "Neilson Review",
			"gender": 2,
			"profile_path": "/igRrhRzTQIzUIOzhmo3A1LwMHOI.jpg"
		  }
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030088801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
		"overview": "This discussion will provide a constitutional law analysis of certain serious criminal offenses in the Philippines: Robbery, Kidnapping, Arbitrary detention, Unlawful arrest, Arson.",
		"popularity": 23.139,
        "poster_path": "/images/6Ra4oY_L1HM.jpg",
		"production_companies": [
		  {
			"id": 2030088801,
			"logo_path": "/images/6Ra4oY_L1HM.jpg",
			"name": "Stillking Films",
			"origin_country": "CZ"
		  }
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030088802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  {
			"id": 18,
			"name": "Drama"
		  },
		  {
			"id": 9648,
			"name": "Mystery"
		  },
		  {
			"id": 10765,
			"name": "Sci-Fi & Fantasy"
		  }
		],
		"homepage": "",
		"id": 2030088802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "RA No  11648 statutory rape",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "RA No  11648 statutory rape",
		"overview": "The discussion will center on analyzing Republic Act No. 11648, which amended Article 266-A of the Revised Penal Code on online libel. Specifically, points of discussion include: An overview of the new provisions introduced under the amended Article 266-A, Comparison to the previous provisions to understand the key changes/updates, Constitutional and legal issues potentially raised by the amendments.",
		"popularity": 23.139,
        "poster_path": "/images/PNkPfxySMg0.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030088803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030088803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "bigamy, illegal marriage performance of illegal marriage",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "bigamy, illegal marriage performance of illegal marriage",
		"overview": "The discussion will focus on analyzing and comparing the crimes of bigamy, illegal marriage, and performance of illegal marriage under Philippine law. Specifically, it will: Define the elements and nature of bigamy as contracting a second or subsequent marriage, Explain illegal marriage in terms of lack of legal requirements or impediments.",
		"popularity": 23.139,
        "poster_path": "/images/8OqZT7jfFn8.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030088804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030088804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "error in personae, aberatiu ictus, praeter intentioneme",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "error in personae, aberatiu ictus, praeter intentioneme",
		"overview": "The discussion will examine the concepts of error in personae, aberatio ictus, and praeter intentionem in relation to Article 4 of the Revised Penal Code of the Philippines. Specifically, it will analyze: Error in personae, which refers to mistakes regarding the identity of the victim, Aberatio ictus, which relates to deviation of the criminal act from the initial plan, Praeter intentionem, or unintended consequences of an unlawful act.",
		"popularity": 23.139,
        "poster_path": "/images/KLdPUh7D0sU.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030088805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030088805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder",
		"overview": "The discussion will examine issues relating to different forms of homicide and related crimes within the framework of the Philippine Constitution. Specifically, it will analyze: Death under exceptional circumstances, Tumultuous affray, Abortion, Infanticide, Parricide, Murder.",
		"popularity": 23.139,
        "poster_path": "/images/kxirVAw_-0s.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030188801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030188801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Impossible crime",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Impossible crime",
		"overview": "The discussion will focus on the concept of impossible crimes under Philippine criminal law. An impossible crime refers to an act that is incapable of being performed due to factual or legal impossibility, yet there is criminal intent to commit the act.",
		"popularity": 23.139,
        "poster_path": "/images/zcYAnpJxV5g.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030188802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030188802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Stages of felony",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Stages of felony",
		"overview": "The discussion will focus on the different stages a felony can take under Philippine law - attempted, frustrated or consummated. Specifically, it will examine: Defining the elements and requirements of an attempted felony, including specifics on overt acts and proximity to completion.",
		"popularity": 23.139,
        "poster_path": "/images/ncg7TsrhiUY.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030188803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030188803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Plunder",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Plunder",
		"overview": "The discussion will provide an analysis of the crime of plunder as defined under Republic Act 7080, as amended by Republic Act 7659. Specifically, it will: Outline the key provisions of both laws pertaining to the offense of plunder, Explain the essential elements that must be proved to constitute plunder.",
		"popularity": 23.139,
        "poster_path": "/images/a6yRu-13OFc.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030188804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030188804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Treason, Rebellion, coup detat, sedition",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Treason, Rebellion, coup detat, sedition",
		"overview": "The video will discuss and compare the crimes of treason, rebellion, coup d'etat and sedition under Philippine law. It will analyze the following elements: The offender, The criminal act, The mode, and the Criminal intent.",
		"popularity": 23.139,
        "poster_path": "/images/dLSWeutlFPA.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030188805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030188805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Violence against women RA No  9262",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Violence against women RA No  9262",
		"overview": "The discussion is all about RA No 9262 with cases in which the victim must be a woman with whom the offender has a marital sexual or dating relationship or the child is the biological child of the woman or the child is under the care of a woman.",
		"popularity": 23.139,
        "poster_path": "/images/bhI5oNqfplk.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030288801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030288801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Amnesty and pardon",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Amnesty and pardon",
		"overview": "The discussion will focus on comparing and contrasting the concepts of amnesty and pardon under Philippine law. Specific points of analysis include: Defining amnesty and pardon, and how they differ in terms of effect and application, Requirements and procedures for granting each type of relief.",
		"popularity": 23.139,
        "poster_path": "/images/JgDpR8Xme4Y.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030288802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		   
		],
		"homepage": "",
		"id": 2030288802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Probation and community service",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Probation and community service",
		"overview": "The video will provide an overview and analysis of probation and community service as alternatives to imprisonment under Philippine law. Specifically, it will cover: An introduction to probation and its legal basis under Presidential Decree 968, as amended by Republic Act 10707, and Eligibility criteria and procedures for both probation and community service.",
		"popularity": 23.139,
        "poster_path": "/images/BB3yoKrF8DM.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030288803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030288803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Three-fold rule and GCTA",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Three-fold rule and GCTA",
		"overview":  "The discussion will focus on analyzing the Three-fold Rule under Philippine penal law and its relationship to the Good Conduct Time Allowance (GCTA) system. Specifically, it will: Explain the Three-fold Rule, Outline the GCTA system, how it grants reductions in sentence length for good behavior, and Compare how these two concepts interact and potentially conflict.",
		"popularity": 23.139,
        "poster_path": "/images/JxsN19NL_Ds.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030288804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		
		],
		"homepage": "",
		"id": 2030288804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
		"overview": "The discussion will examine different parties to a crime based on provisions in the Revised Penal Code and how they relate to criminal liability. Specifically, it will explore the roles and elements of principal, accomplice, accessory - a person who helps a felon escape punishment for reasons of blood or affinity, fencing, obstruction of justice - acts that hinder investigation/prosecution.",
		"popularity": 23.139,
        "poster_path": "/images/arge5NNeppQ.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030288805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
	
		],
		"homepage": "",
		"id": 2030288805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Trafficking in person, child trafficking, child pornography, cyber sex",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Trafficking in person, child trafficking, child pornography, cyber sex",
		"overview": "The discussion will focus on analyzing trafficking in persons based on Republic Act 9208 (The Anti-Trafficking in Persons Act of 2003), as amended by RA 11862. Specifically, it will examine the key elements that define trafficking offenses under this law.",
		"popularity": 23.139,
        "poster_path": "/images/Pgzb33HIBDQ.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030388801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030388801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Special complex crime",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Special complex crime",
		"overview": "The discussion will focus on the concept of a special complex crime under Philippine criminal law. A special complex crime involves the commission of two or more felonies through a single criminal act, transaction, or course of conduct where the law prescribes a single, indivisible penalty for the whole offense.",
		"popularity": 23.139,
        "poster_path": "/images/O4WKPNUks5U.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030388802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030388802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Rape with homicide, robbery with homicide or rape",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Rape with homicide, robbery with homicide or rape",
		"overview": "The video will provide an analysis of the legal concept of special complex crimes under Philippine law. A main focus will be on two key characteristics that define special complex crimes such as the original design and direct connection.",
		"popularity": 23.139,
        "poster_path": "/images/B6-DJ-qWYKg.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030388803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030388803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Kidnapping with homicide or rape",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Kidnapping with homicide or rape",
		"overview": "The discussion will focus on analyzing the special complex crime of kidnapping with either homicide or rape under Philippine law. Specifically, it will examine kidnapping as one of the principal offenses of this special complex crime and homicide or rape as the other principal offense committed through the same criminal act.",
		"popularity": 23.139,
        "poster_path": "/images/CaRrSRRAI8c.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030388804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		 
		],
		"homepage": "",
		"id": 2030388804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
		"overview":  "The discussion will focus on the special complex crime of kidnapping with rape, rape through forcible abduction, and kidnapping and robbery. For a crime to be called kidnapping with rape, the original design must be to commit kidnapping. If the original design however, is to rape the victim then the crime commited is complex crime of rape through forcible abduction.",
		"popularity": 23.139,
        "poster_path": "/images/FZQmGvdWONY.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030388805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030388805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Theft and estafa",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Theft and estafa",
		"overview": "The discussion will focus on distinguishing the crimes of theft and estafa through misappropriation under Philippine law. Specifically, it will define the elements of theft as taking another's property without consent and explain estafa through misappropriation, which involves receiving property through trust, administration of an obligation, or duty to deliver, and later misappropriating, converting or denying the property.",
		"popularity": 23.139,
        "poster_path": "/images/ybOrhRO0uMM.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 2030488801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
 
		],
		"homepage": "",
		"id": 2030488801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
		"overview":   "The discussion is all about Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, and child cohabitation. The discussion will also include laws and example cases under it.",
		"popularity": 23.139,
        "poster_path": "/images/bZ_Dn4SFniM.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030488802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		   
		],
		"homepage": "",
		"id": 2030488802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Falsification, malversation, estafa, theft",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Falsification, malversation, estafa, theft",
		"overview": "The discussion will analyze the crime of falsification of public, commercial or private documents in relation to other offenses like malversation, estafa, and theft. Specifically, it will cover 4 rules on classifying these crimes.",
		"popularity": 23.139,
        "poster_path": "/images/AYoZ07A0OWg.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030488803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030488803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Terrorism",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Terrorism",
		"overview": "The video will analyze the concept of terrorism under Republic Act 11479 or the Anti-Terrorism Act of 2020. Specifically, it will cover an overview of the definition of terrorism provided in RA 11479 and the acts classified as terrorism and potential issues around vagueness/overreach.",
		"popularity": 23.139,
        "poster_path": "/images/4c6N2L9mO3A.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030488804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030488804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Generality and territoriality",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Generality and territoriality",
		"overview": "The discussion will provide a comparative analysis of the principles of generality and territoriality in criminal law. Specifically, it will define the key concepts of generality and territoriality separately, examine the scope and application of each principle, and compare and contrast the approaches of both principles.",
		"popularity": 23.139,
        "poster_path": "/images/_zPGalIJJbA.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030488805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030488805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Territoriality, repeal and RA 10951 001 2",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Territoriality, repeal and RA 10951 001 2",
		"overview":  "The discussion will continue examining the principle of territoriality in criminal law. Specifically, it will analyze specific types of crimes in relation to territorial jurisdiction issues, evaluate concepts like objective and subjective territoriality in more depth and discuss exceptions to territoriality such as crimes on the high seas.",
		"popularity": 23.139,
        "poster_path": "/images/cNsyonG2K1o.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030588801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030588801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Culpa and mistake of fact",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Culpa and mistake of fact",
		"overview":  "The discussion will provide analyses of the doctrine of Culpa and the concept of Mistake of Fact in criminal law. Specifically, it will define Culpa and explain the two prevailing views on its scope and culpability standards, distinguish Culpa from Dolus and analyze their applications, and outline the rules governing mistakes of fact as exculpatory or inculpatory circumstances.",
		"popularity": 23.139,
        "poster_path": "/images/hzwrQOg7CqA.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030588802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		   
		],
		"homepage": "",
		"id": 2030588802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Penalties special law",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Penalties special law",
		"overview": "The discussion will focus on analyzing criminal penalties associated with offenses established under special laws in the Philippines. Some points of discussion may include examining categories of special laws that contain criminal provisions, discussing the range and graduation of penalties for violating special laws, and comparing penalty schemes between special laws and the Revised Penal Code.",
		"popularity": 23.139,
        "poster_path": "/images/TDpAhpVcKXo.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030588803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  {
			"id": 18,
			"name": "Drama"
		  },
		  {
			"id": 9648,
			"name": "Mystery"
		  },
		  {
			"id": 10765,
			"name": "Sci-Fi & Fantasy"
		  }
		],
		"homepage": "",
		"id": 2030588803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Penalties for special law",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Penalties for special law",
		"overview":  "The discussion will center on analyzing special penal laws and applicable penalties through examination of two case studies such as People v. Obias (G.R. No. 222187, March 25, 2019) and People v. Pis-an (G.R. No. 242692, July 13, 2020)",
		"popularity": 23.139,
        "poster_path": "/images/Cf0TCYWhreQ.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030588804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030588804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Lawas principle",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Lawas principle",
		"overview":  "The video will examine the legal concept and principles surrounding single criminal investure under Philippine law. As a foundational point, it will discuss Article 48 of the Revised Penal Code, which establishes the general rule regarding a single criminal act.",
		"popularity": 23.139,
        "poster_path": "/images/QPIpzPG8GhI.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030588805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		   
		],
		"homepage": "",
		"id": 2030588805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Carnapping and piracy",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Carnapping and piracy",
		"overview":  "The discussion centers around the issue of carnapping and how motor vehicles are used on public highways. Specifically, we will be exploring the legal implications when a motor vehicle is carnapped and subsequently utilized on public roadways.",
		"popularity": 23.139,
        "poster_path": "/images/Nhh2qyOpCiY.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030688801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		   
		],
		"homepage": "",
		"id": 2030688801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Brigandage and hijacking",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Brigandage and hijacking",
		"overview":  "The crime of brigandage under Philippine law involves organized armed robbery carried out by groups of four or more individuals. Specifically brigandage refers to a form of aggravated robbery or theft committed by an association of four or more persons who are armed with firearms or other deadly weapons.",
		"popularity": 23.139,
        "poster_path": "/images/4P9MdLhfxvw.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030688802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030688802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Syndicated estafa",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Syndicated estafa",
		"overview":  "The discussion will center around the crime of syndicated estafa based on Philippine laws and jurisprudence. Some key points of focus could include legally defining the elements that constitute the offense of syndicated estafa, analyzing the distinctive characteristics that make this different from simple estafa, and exploring the legal frameworks used to identify syndicated criminal operations.",
		"popularity": 23.139,
        "poster_path": "/images/nFK07TccaHc.png",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030688803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		   
		],
		"homepage": "",
		"id": 2030688803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Voyuerism",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Voyuerism",
		"overview":  "The discussion will center around analyzing Republic Act 9995, also known as the Anti-Photo and Video Voyeurism Act of 2009. Some potential discussion points include defining key terms related to photo/video voyeurism as outlined in the law, examining the specific acts that are deemed illegal photo/video voyeurism, and discussing the intent and objectives of RA 9995 in addressing these issues.",
		"popularity": 23.139,
        "poster_path": "/images/kSqwVtztixg.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030688804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		 
		],
		"homepage": "",
		"id": 2030688804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Hazing",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Hazing",
		"overview":  "The discussion will center around analyzing the legal framework for hazing under Republic Act 8049 (also known as the Anti-Hazing Law of 1995), as subsequently amended by RA 11053 in 2018. A primary focus will be on the key elements that constitute hazing based on these laws.",
		"popularity": 23.139,
        "poster_path": "/images/huREGMfs_54.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030688805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		  
		],
		"homepage": "",
		"id": 2030688805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Cyber libel",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Cyber libel",
		"overview": "The discussion will focus on analyzing key aspects of cyber libel law based on the Court of Appeals decision in People vs. Santos and Ressa of Rappler (CA-G.R. SP No. 151618). Specifically, it will examine the appellate court's rulings on applicability of traditional libel rules to online publications/blog posts, interpretation of actual malice in the context of digital media, and scope and limits of exemptions like fair comment and criticism.",
		"popularity": 23.139,
        "poster_path": "/images/-e3At2-lqTk.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030788801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		 
		],
		"homepage": "",
		"id": 2030788801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Special Complex crime",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Special Complex crime",
		"overview":  "The video will examine the concept of complex crimes under Article 48 of the Revised Penal Code of the Philippines. Specifically, it will cover an overview of complex crimes as defined in the RPC and distinguishing between the two types such as the compound crime where one felony serves as a means for committing another and complex crime proper where a single act constitutes two or more grave/less grave felonies.",
		"popularity": 23.139,
        "poster_path": "/images/yJyR5OOmcVQ.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030788802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030788802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Delito continuado",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Delito continuado",
		"overview":   "The video will provide an analysis of the legal concept of delito continuado or continuing crime under Philippine law. Key aspects that will be covered include the definition of a continuing crime as composed of several acts committed under a single criminal impulse in violation of a single penal provision and distinguishing features compared to other types of crimes like complex crimes.",
		"popularity": 23.139,
        "poster_path": "/images/pnScrR_P5AM.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 2030788803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030788803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Delito continuado 2",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Delito continuado 2",
		"overview":  "The discussion will cover the second part of the concept of delito continuado or continuing crime under Philippine criminal law. Specifically, it will focus on analyzing the four kinds of continuing crimes identified by Train jurisprudence such as the crimes committed with indivisible intention, crimes committed by successive acts, crimes committed by intermittent acts, and crimes committed in breach of only one duty.",
		"popularity": 23.139,
        "poster_path": "/images/GQpnQnCKBDU.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 2030788804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030788804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Penalty 1",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Penalty 1",
		"overview":  "The discussion will examine the rules governing the application of penalties in criminal cases under Philippine law. Specifically, it will outline the general rules on imposing the proper penalty, analyze circumstances that may modify the penalty, such as aggravating/mitigating factors, and discuss rules on continuous, multiple, complex and indeterminate sentence crimes.",
		"popularity": 23.139,
        "poster_path": "/images/czX5xV2da1k.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 2030788805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 2030788805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Penalty 2",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Penalty 2",
		"overview":  "The discussion will examine the rules regarding the duration of penalties in criminal cases under Philippine law. Specifically, it will outline the general guidelines for determining the length of each type of penalty, analyze factors that affect the duration such as the range prescribed by law, and discuss how mitigating and aggravating circumstances can modify the duration.",
		"popularity": 23.139,
        "poster_path": "/images/diTKu8CVMoI.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }


  if (req.params.series_id == 3030088801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030088801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 1",
		"next_episode_to_air": null,
		"networks": [
		  
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 1",
		"overview":  "The discussion will focus on the first part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/yZAv5u72r2E.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030088802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030088802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 2",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 2",
		"overview":  "The discussion will focus on the second part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/x7YFlRd2a44.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030088803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030088803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 3",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 3",
		"overview":  "The discussion will focus on the third part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/9wdgsK5gBN0.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030188801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030188801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 4",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 4",
		"overview":  "The discussion will focus on the fourth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/aIKEU6YktdA.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030188802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030188802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 5",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 5",
		"overview":  "The discussion will focus on the fifth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/m1_rMY84MmM.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030188803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030188803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 6",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 6",
		"overview":  "The discussion will focus on the sixth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/Ckd2JrSXI9A.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030288801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030288801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 7",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 7",
		"overview":  "The discussion will focus on the seventh part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/Vi6lV7KAi7M.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030288802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030288802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 8",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 8",
		"overview":  "The discussion will focus on the eighth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/CiaiqmGR3Bs.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030288803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030288803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 9",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 9",
		"overview":  "The discussion will focus on the ninth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/7QUIPi5-yF8.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030388801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030388801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 10",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 10",
		"overview":  "The discussion will focus on the tenth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/kxwEc2oi8-E.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030388802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030388802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 11",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 11",
		"overview":  "The discussion will focus on the eleventh part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/NhaoeTyNLkc.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030388803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030388803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 12",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 12",
		"overview":  "The discussion will focus on the twelfth part of Political Law by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/FOc_FnSXp6U.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 3030488801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 3030488801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Political Atty Loanzon Lecture 13",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Political Atty Loanzon Lecture 13",
		"overview":  "The discussion will focus on the fundamentals of local government by Atty Loanzon.",
		"popularity": 23.139,
        "poster_path": "/images/q8kQ3KriJL8.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 4030188801){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 4030188801,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Taxation Atty. Lim - Lecture 1",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Taxation Atty. Lim - Lecture 1",
		"overview":  "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
		"popularity": 23.139,
        "poster_path": "/images/jUMsFRd88nk.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 4030188802){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 4030188802,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Taxation Atty. Lim - Lecture 2",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Taxation Atty. Lim - Lecture 2",
		"overview":  "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
		"popularity": 23.139,
        "poster_path": "/images/a3CrgjgewzM.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 4030188803){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 4030188803,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Taxation Atty. Lim - Lecture 3",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Taxation Atty. Lim - Lecture 3",
		"overview":  "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
		"popularity": 23.139,
        "poster_path": "/images/VVe84yFKufI.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

  if (req.params.series_id == 4030188804){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 4030188804,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Taxation Atty. Lim - Lecture 4",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Taxation Atty. Lim - Lecture 4",
		"overview":  "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
		"popularity": 23.139,
        "poster_path": "/images/gn7wP3-fW3k.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }
  
  if (req.params.series_id == 4030188805){
	res.json(
		{
		"adult": false,
		"backdrop_path": null,
		"created_by": [
		],
		"episode_run_time": [
		  43
		],
		"first_air_date": "2005-04-13",
		"genres": [
		],
		"homepage": "",
		"id": 4030188805,
		"in_production": false,
		"languages": [
		  "en"
		],
		"last_air_date": "2005-05-18",
		"last_episode_to_air": {
		},
		"name": "Taxation Atty. Lim - Lecture 5",
		"next_episode_to_air": null,
		"networks": [
		  {
			"id": 6,
			"logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
			"name": "NBC",
			"origin_country": "US"
		  }
		],
		"number_of_episodes": 1,
		"number_of_seasons": 1,
		"origin_country": [
		  "US"
		],
		"original_language": "en",
		"original_name": "Taxation Atty. Lim - Lecture 5",
		"overview":  "The discussion will focus on the fundamentals of Taxation by Atty Virginia Lim.",
		"popularity": 23.139,
        "poster_path": "/images/VGgvIe9oJ7I.jpg",
		"production_companies": [
		],
		"production_countries": [
		  {
			"iso_3166_1": "US",
			"name": "United States of America"
		  }
		],
		"seasons": [

		],
		"spoken_languages": [
		  {
			"english_name": "English",
			"iso_639_1": "en",
			"name": "English"
		  }
		],
		"status": "Ended",
		"tagline": "",
		"type": "Miniseries",
		"vote_average": 5.7,
		"vote_count": 29
		});
  }

});

router.get('/tv/:series_id/account_states', function(req, res, next) {
  res.json({
"id": 12111,
"favorite": false,
"rated": false,
"watchlist": false
});
});

router.get('/tv/:series_id/aggregate_credits', function(req, res, next) {
  res.json({
"cast": [
  {
    "adult": false,
    "gender": 2,
    "id": 101975,
    "known_for_department": "Acting",
    "name": "William Jordan",
    "original_name": "William Jordan",
    "popularity": 5.307,
    "profile_path": "/6PtjpLaRV1aTG9AwrrrcQIKBfjg.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa757294",
        "character": "",
        "episode_count": 26
      }
    ],
    "total_episode_count": 26,
    "order": 0
  },
  {
    "adult": false,
    "gender": 2,
    "id": 114961,
    "known_for_department": "Acting",
    "name": "Olan Soule",
    "original_name": "Olan Soule",
    "popularity": 15.06,
    "profile_path": "/eRfeczVvHN08blaAJIiWv2Kav1H.jpg",
    "roles": [
      {
        "credit_id": "52581cdd760ee36aaa756eee",
        "character": "",
        "episode_count": 2
      }
    ],
    "total_episode_count": 2,
    "order": 500
  },
  {
    "adult": false,
    "gender": 1,
    "id": 83457,
    "known_for_department": "Acting",
    "name": "Donna Douglas",
    "original_name": "Donna Douglas",
    "popularity": 8.294,
    "profile_path": "/m81iRXtKxiNjyztDW3Cyde7lFMF.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756fda",
        "character": "",
        "episode_count": 2
      }
    ],
    "total_episode_count": 2,
    "order": 501
  },
  {
    "adult": false,
    "gender": 2,
    "id": 160969,
    "known_for_department": "Acting",
    "name": "Lou Frizzell",
    "original_name": "Lou Frizzell",
    "popularity": 8.507,
    "profile_path": "/72Q2TeunDiewxaiixBp1BVpjmu2.jpg",
    "roles": [
      {
        "credit_id": "52a0733219c295119a08202c",
        "character": "",
        "episode_count": 2
      }
    ],
    "total_episode_count": 2,
    "order": 516
  },
  {
    "adult": false,
    "gender": 1,
    "id": 21458,
    "known_for_department": "Acting",
    "name": "Joan Freeman",
    "original_name": "Joan Freeman",
    "popularity": 10.905,
    "profile_path": "/vc1EIOhvqo6tcLqigF1xFPYdf2g.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756f81",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 502
  },
  {
    "adult": false,
    "gender": 2,
    "id": 10226,
    "known_for_department": "Acting",
    "name": "David Hedison",
    "original_name": "David Hedison",
    "popularity": 7.034,
    "profile_path": "/lLlEmLQQs61H0d4htGoba2p6qVe.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa757053",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 503
  },
  {
    "adult": false,
    "gender": 2,
    "id": 27012,
    "known_for_department": "Acting",
    "name": "Robert Ginty",
    "original_name": "Robert Ginty",
    "popularity": 4.336,
    "profile_path": "/jpPeOev6AMggRqlwikBOz4emSs.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa757076",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 504
  },
  {
    "adult": false,
    "gender": 1,
    "id": 38226,
    "known_for_department": "Acting",
    "name": "Caroline McWilliams",
    "original_name": "Caroline McWilliams",
    "popularity": 4.972,
    "profile_path": "/b3LbPRaeqTWP1YBZQzD3mDmZvGT.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa7570b0",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 505
  },
  {
    "adult": false,
    "gender": 2,
    "id": 51518,
    "known_for_department": "Acting",
    "name": "Allan Miller",
    "original_name": "Allan Miller",
    "popularity": 6.823,
    "profile_path": "/1PJ8Px5HKxhZZuLqtEazknCjCXr.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa7570f7",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 506
  },
  {
    "adult": false,
    "gender": 2,
    "id": 44728,
    "known_for_department": "Acting",
    "name": "Cameron Mitchell",
    "original_name": "Cameron Mitchell",
    "popularity": 9.59,
    "profile_path": "/niLc67b00QIa0oDWp47mXcv319e.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa757132",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 507
  },
  {
    "adult": false,
    "gender": 1,
    "id": 41227,
    "known_for_department": "Acting",
    "name": "Anne Lockhart",
    "original_name": "Anne Lockhart",
    "popularity": 12.515,
    "profile_path": "/2S2Fg2ICuiEMUod9SFnOp2usJqX.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa757166",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 508
  },
  {
    "adult": false,
    "gender": 2,
    "id": 65508,
    "known_for_department": "Acting",
    "name": "James Olson",
    "original_name": "James Olson",
    "popularity": 5.051,
    "profile_path": "/poeGcRZH9GXvNCfqQn66STpMqhz.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa7571b2",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 509
  },
  {
    "adult": false,
    "gender": 2,
    "id": 140345,
    "known_for_department": "Acting",
    "name": "Mills Watson",
    "original_name": "Mills Watson",
    "popularity": 8.664,
    "profile_path": "/40HK1yTiHV4mwGyqX6CvYLX2lTP.jpg",
    "roles": [
      {
        "credit_id": "52581cdd760ee36aaa756f00",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 510
  },
  {
    "adult": false,
    "gender": 2,
    "id": 9601,
    "known_for_department": "Acting",
    "name": "Kenneth Mars",
    "original_name": "Kenneth Mars",
    "popularity": 9.872,
    "profile_path": "/5ueZGenOr87KfMENzffdtGn3AQ9.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756f93",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 511
  },
  {
    "adult": false,
    "gender": 1,
    "id": 153510,
    "known_for_department": "Acting",
    "name": "Marlyn Mason",
    "original_name": "Marlyn Mason",
    "popularity": 6.494,
    "profile_path": "/qGC0eYEWK0sr0wkDHrrI87MvMkx.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa7571c4",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 512
  },
  {
    "adult": false,
    "gender": 2,
    "id": 86369,
    "known_for_department": "Acting",
    "name": "Parley Baer",
    "original_name": "Parley Baer",
    "popularity": 13.607,
    "profile_path": "/a6b9pONRmi03ggBpHpevyGokxgJ.jpg",
    "roles": [
      {
        "credit_id": "52581cdd760ee36aaa756f12",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 513
  },
  {
    "adult": false,
    "gender": 2,
    "id": 157661,
    "known_for_department": "Acting",
    "name": "Edward Winter",
    "original_name": "Edward Winter",
    "popularity": 14.35,
    "profile_path": "/5i5G10prRVSV5ZFRwsY1cseEPgK.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756fa5",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 514
  },
  {
    "adult": false,
    "gender": 2,
    "id": 40464,
    "known_for_department": "Acting",
    "name": "Cal Bellini",
    "original_name": "Cal Bellini",
    "popularity": 4.4,
    "profile_path": "/3GxcoD9KSB3MwuEZ3w4lQ8EeS7o.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa7571d6",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 515
  },
  {
    "adult": false,
    "gender": 2,
    "id": 2031009,
    "known_for_department": "Acting",
    "name": "Hank Stohl",
    "original_name": "Hank Stohl",
    "popularity": 8.492,
    "profile_path": null,
    "roles": [
      {
        "credit_id": "5ae39e8492514149e2004fb5",
        "character": "Pilot",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 517
  },
  {
    "adult": false,
    "gender": 2,
    "id": 2590971,
    "known_for_department": "Acting",
    "name": "Scott Mulhern",
    "original_name": "Scott Mulhern",
    "popularity": 6.532,
    "profile_path": null,
    "roles": [
      {
        "credit_id": "6022fd6c9979d2003de43d4c",
        "character": "Sgt. Eddie Larkin",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 518
  },
  {
    "adult": false,
    "gender": 2,
    "id": 3845671,
    "known_for_department": "Acting",
    "name": "David Yanez",
    "original_name": "David Yanez",
    "popularity": 3.176,
    "profile_path": null,
    "roles": [
      {
        "credit_id": "63a96b3f15a4a10082d29704",
        "character": "Pauley Ramirez",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 519
  }
],
"crew": [
  {
    "adult": false,
    "gender": 2,
    "id": 97959,
    "known_for_department": "Directing",
    "name": "Dennis Donnelly",
    "original_name": "Dennis Donnelly",
    "popularity": 3.119,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cde760ee36aaa756fbb",
        "job": "Director",
        "episode_count": 4
      }
    ],
    "department": "Directing",
    "total_episode_count": 4
  },
  {
    "adult": false,
    "gender": 2,
    "id": 104019,
    "known_for_department": "Directing",
    "name": "John Patterson",
    "original_name": "John Patterson",
    "popularity": 9.256,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cde760ee36aaa7570d8",
        "job": "Director",
        "episode_count": 3
      }
    ],
    "department": "Directing",
    "total_episode_count": 3
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1219262,
    "known_for_department": "Directing",
    "name": "Sigmund Neufeld Jr.",
    "original_name": "Sigmund Neufeld Jr.",
    "popularity": 7.463,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdd760ee36aaa756f3f",
        "job": "Director",
        "episode_count": 2
      }
    ],
    "department": "Directing",
    "total_episode_count": 2
  },
  {
    "adult": false,
    "gender": 2,
    "id": 15625,
    "known_for_department": "Acting",
    "name": "Lawrence Dobkin",
    "original_name": "Lawrence Dobkin",
    "popularity": 10.421,
    "profile_path": "/ofKRDUDiEv4hxxjAF6scXP26tsh.jpg",
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa7571fd",
        "job": "Director",
        "episode_count": 1
      }
    ],
    "department": "Directing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 18907,
    "known_for_department": "Directing",
    "name": "Richard Quine",
    "original_name": "Richard Quine",
    "popularity": 6.148,
    "profile_path": "/6GgNKUTs8ElPPqi3FC7Jg3GUQd8.jpg",
    "jobs": [
      {
        "credit_id": "52581cdd760ee36aaa756ecf",
        "job": "Director",
        "episode_count": 1
      }
    ],
    "department": "Directing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1214371,
    "known_for_department": "Writing",
    "name": "Gene Levitt",
    "original_name": "Gene Levitt",
    "popularity": 6.574,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa7572d0",
        "job": "Producer",
        "episode_count": 26
      }
    ],
    "department": "Production",
    "total_episode_count": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 8634,
    "known_for_department": "Acting",
    "name": "Jack Webb",
    "original_name": "Jack Webb",
    "popularity": 4.994,
    "profile_path": "/4X6wbZ9wDqVrpDP3WvIJZBLPsLh.jpg",
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa7572ba",
        "job": "Producer",
        "episode_count": 26
      }
    ],
    "department": "Production",
    "total_episode_count": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 10077,
    "known_for_department": "Writing",
    "name": "Harold Jack Bloom",
    "original_name": "Harold Jack Bloom",
    "popularity": 3.202,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdd760ee36aaa756ebb",
        "job": "Writer",
        "episode_count": 26
      }
    ],
    "department": "Writing",
    "total_episode_count": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 14840,
    "known_for_department": "Writing",
    "name": "T.S. Cook",
    "original_name": "T.S. Cook",
    "popularity": 4.659,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cde760ee36aaa75710b",
        "job": "Writer",
        "episode_count": 2
      }
    ],
    "department": "Writing",
    "total_episode_count": 2
  },
  {
    "adult": false,
    "gender": 2,
    "id": 19477,
    "known_for_department": "Writing",
    "name": "Robert C. Dennis",
    "original_name": "Robert C. Dennis",
    "popularity": 9.635,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa757191",
        "job": "Writer",
        "episode_count": 1
      }
    ],
    "department": "Writing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1213036,
    "known_for_department": "Writing",
    "name": "Michael Donovan",
    "original_name": "Michael Donovan",
    "popularity": 7.531,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "57fad8069251414479001e1d",
        "job": "Writer",
        "episode_count": 1
      }
    ],
    "department": "Writing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 47756,
    "known_for_department": "Production",
    "name": "Buck Houghton",
    "original_name": "Buck Houghton",
    "popularity": 1.075,
    "profile_path": "/awYLIMQA0KiIfMsFvmipseorWZv.jpg",
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa75721e",
        "job": "Writer",
        "episode_count": 1
      }
    ],
    "department": "Writing",
    "total_episode_count": 1
  }
],
"id": 12111
});
});

router.get('/tv/:series_id/alternative_titles', function(req, res, next) {
  res.json({
"id": 12111,
"results": [
  {
    "iso_3166_1": "US",
    "title": "Project UFO",
    "type": "Alias"
  }
]
});
});

router.get('/tv/:series_id/changes', function(req, res, next) {
  res.json({
"changes": []
});
});

router.get('/tv/:series_id/content_ratings', function(req, res, next) {
  res.json({
"results": [],
"id": 101970
});
});

router.get('/tv/:series_id/credits', function(req, res, next) {
  res.json({
"cast": [],
"crew": [],
"id": 101970
});
});

router.get('/tv/:series_id/episode_groups', function(req, res, next) {
  res.json({
"results": [],
"id": 12751
});
});

router.get('/tv/:series_id/images', function(req, res, next) {
  res.json({
"backdrops": [
  {
    "aspect_ratio": 1.778,
    "height": 720,
    "iso_639_1": null,
    "file_path": "/4Dr7rvNyLmiHBvd2cpFCKCkreGF.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 1280
  },
  {
    "aspect_ratio": 1.778,
    "height": 720,
    "iso_639_1": null,
    "file_path": "/zcBS6kukiRZOBJRQDCLE4dt17a4.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 1280
  }
],
"id": 12751,
"logos": [],
"posters": [
  {
    "aspect_ratio": 0.709,
    "height": 1500,
    "iso_639_1": "en",
    "file_path": "/4dOlxvavpgpDyAFmLNIre1JmcCf.jpg",
    "vote_average": 5.172,
    "vote_count": 1,
    "width": 1063
  },
  {
    "aspect_ratio": 0.68,
    "height": 1000,
    "iso_639_1": null,
    "file_path": "/u3B62sum2inP3ut1v4bX3oR6Msy.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 680
  },
  {
    "aspect_ratio": 0.68,
    "height": 1000,
    "iso_639_1": "fr",
    "file_path": "/hPviX1p4VGxILnlvQUk24p123ez.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 680
  }
]
});
});

router.get('/tv/:series_id/keywords', function(req, res, next) {
  res.json({
"id": 12751,
"results": []
});
});

router.get('/tv/latest', function(req, res, next) {
  res.json({
"adult": false,
"backdrop_path": null,
"created_by": [],
"episode_run_time": [],
"first_air_date": "",
"genres": [],
"homepage": "",
"id": 239901,
"in_production": true,
"languages": [],
"last_air_date": null,
"last_episode_to_air": null,
"name": "The Legend of Rosy Clouds",
"next_episode_to_air": null,
"networks": [],
"number_of_episodes": 1,
"number_of_seasons": 1,
"origin_country": [
  "CN"
],
"original_language": "zh",
"original_name": "云秀行",
"overview": "~~ Adapted from the novel series ”Saiunkoku Monogatari” (彩雲国物語) by Yukino Sai (雪乃紗衣).",
"popularity": 0,
"poster_path": null,
"production_companies": [],
"production_countries": [],
"seasons": [
  {
    "air_date": null,
    "episode_count": 1,
    "id": 366477,
    "name": "Season 1",
    "overview": "",
    "poster_path": null,
    "season_number": 1,
    "vote_average": 0
  }
],
"spoken_languages": [],
"status": "Returning Series",
"tagline": "",
"type": "Scripted",
"vote_average": 0,
"vote_count": 0
});
});

router.get('/tv/:series_id/recommendations', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/tv/:series_id/reviews', function(req, res, next) {
  res.json({
"id": 12751,
"page": 1,
"results": [],
"total_pages": 0,
"total_results": 0
});
});

router.get('/tv/:series_id/screened_theatrically', function(req, res, next) {
  res.json({
"id": 12751,
"results": []
});
});

router.get('/tv/:series_id/similar', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/tv/:series_id/translations', function(req, res, next) {
  res.json({
"id": 12751,
"translations": [
  {
    "iso_3166_1": "US",
    "iso_639_1": "en",
    "name": "English",
    "english_name": "English",
    "data": {
      "name": "",
      "overview": "Automan is an American science fiction superhero television series produced by Glen A. Larson. It aired for only 12 episodes on ABC between 1983 and 1984.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "BS",
    "iso_639_1": "bs",
    "name": "Bosanski",
    "english_name": "Bosnian",
    "data": {
      "name": "",
      "overview": "",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "IT",
    "iso_639_1": "it",
    "name": "Italiano",
    "english_name": "Italian",
    "data": {
      "name": "Automan",
      "overview": "Automan è una serie televisiva di fantascienza creata nel 1983 da Glen A. Larson. Si avvicina molto dal punto di vista visivo al film Tron della Disney grazie agli effetti speciali applicati al vestiario e ai mezzi di locomozione legati al protagonista. La serie venne mandata in onda per intero (13 episodi) dapprima su Italia 1 a partire dal 5 gennaio 1985 poi replicata nel 1986; negli anni novanta ne furono trasmessi solo alcuni episodi su Videomusic e successivamente su TMC2.\n\nLa serie è composta soltanto da una stagione di tredici episodi della durata di circa 50 minuti perché negli Stati Uniti non ebbe un successo tale da giustificare la produzione di altre stagioni.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "FR",
    "iso_639_1": "fr",
    "name": "Français",
    "english_name": "French",
    "data": {
      "name": "Automan",
      "overview": "Informaticien au sein de la police, Walter Nebicher n'est pas le flic le plus populaire de son service. Seule sa collègue Roxanne semble remarquer qu'il existe. Désireux de faire ses preuves, Walter créé Automan, un hologramme capable de contrôler la matière et de se transformer à l'infini en voiture, hélicoptère... Cet être électronique, rebaptisé \"Otto J. Mann\" pour le commun des mortels, va faire équipe avec Walter pour ses enquêtes !",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "ES",
    "iso_639_1": "es",
    "name": "Español",
    "english_name": "Spanish",
    "data": {
      "name": "Automan",
      "overview": "Serie de TV (1983-1984). Walter Nebicher es un experto programador y agente de la policía. Para dar batalla contra el crimen organizado, Walter ha generado una nueva forma de vida de \"energía\", a partir del desarrollo de una inteligencia artificial tan potente que es capaz de traer mundo real un holograma que se asemeja a \"Tron\": su cuerpo brilla con patrones geométricos en neón azul. Se llama Automan y se exhibe como un superhéroe con habilidades en el mundo real, pero falla por completo en las relaciones humanas. Para trasladarse por la ciudad, lo ayuda su poliédrico y diminuto compañero llamado Cursor, quien puede materializar un coche, un avión y un helicóptero. El Lamborghini Countach que conduce Automan sólo puede girar en ángulos rectos, debido a que Walter ha utilizado un algoritmo que sacó del juego PacMan. A causa de que requiere grandes cantidades de energía, Automan emerge por las noches, cuando baja el consume energético de la ciudad, y coopera con el Departamento de Policía.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "MX",
    "iso_639_1": "es",
    "name": "Español",
    "english_name": "Spanish",
    "data": {
      "name": "",
      "overview": "",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "HR",
    "iso_639_1": "hr",
    "name": "Hrvatski",
    "english_name": "Croatian",
    "data": {
      "name": "Automan",
      "overview": "Walter Nebicher je policajac. Također je stručnjak za računala. Razvio je vrlo sofisticirani hologram po imenu Automan, koji mu pomaže u borbi protiv kriminala. Automan ima pomoćnika po imenu Cursor koji može stvoriti holografske objekte kao što su automobil, helikopter ili bilo koji drugi objekt potreban Walteru ili Automanu u borbi protiv kriminala.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "DE",
    "iso_639_1": "de",
    "name": "Deutsch",
    "english_name": "German",
    "data": {
      "name": "",
      "overview": "Walter Nebicher ist Computerfachmann im Police Department von Los Angeles. Gerne würde er aktiv an der Verbrechensbekämpfung auf den Straßen teilnehmen, doch sein Chef, Captain Boyd, pfeift ihn ständig zurück, und auch die anderen Polizisten nehmen Walter eigentlich nicht so richtig ernst. Ausgleich findet der Computerfreak in seiner Freizeit, wo er Computerspiele kreiert. Seine wichtigste Erfindung dabei ist „Automan“, bei dem es sich um ein dreidimensionales Hologramm handelt, das sogar ohne Bildschirm sichtbar wird. Da Walter ihn als elektronischen Superdetektiv programmiert hat, ist Automan nun der unübertroffene Verbrechensbekämpfer. Wichtige Dienste leistet Automan bei der Jagd nach Verbrechern sein Helfer „Cursor“, ein kleines, leuchtendes Sechseck, das alles hervorbringen kann, was der elektronische Verbrecherschreck gerade braucht. So zum Beispiel Automans imposantes computergesteuertes Auto… (Text: TV München)",
      "homepage": "",
      "tagline": "Automan - Der Superdetektiv"
    }
  }
]
});
});

router.get('/tv/:series_id/videos', function(req, res, next) {

   if (req.params.series_id == 2030088801){
      res.json({
      "id": 2030088801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "1. Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
          "key": "Gg60vbmUmaY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030088802){
      res.json({
      "id": 2030088802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "2. RA No. 11648 - statutory rape",
          "key": "DjHwll-HpeM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030088803){
      res.json({
      "id": 2030088803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "3. bigamy, illegal marriage _ performance of illegal marriage",
          "key": "DwOJ4hULUyo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030088804){
      res.json({
      "id": 2030088804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "4 error in personae, aberatiu ictus, praeter intentionem",
          "key": "Su8MATkGkVs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030088805){
      res.json({
      "id": 2030088805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "5. death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder, discharge of firearm",
          "key": "o9UuV-1dM1I",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030188801){
      res.json({
      "id": 2030188801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "6. Impossible crime",
          "key": "k3jYl_Mvazs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030188802){
      res.json({
      "id": 2030188802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "7. Stages of felony",
          "key": "0CNnZU1w9BU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030188803){
      res.json({
      "id": 2030188803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "8. Plunder",
          "key": "NAON0E2jQak",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030188804){
      res.json({
      "id": 2030188804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "9. Treason, Rebellion, coup detat, sedition",
          "key": "CSIH-4gVgbM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030188805){
      res.json({
      "id": 2030188805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Violence against women RA No. 9262",
          "key": "VK4r7_g6RJE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030288801){
      res.json({
      "id": 2030288801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "11. Amnesty and pardon",
          "key": "fUK67vTHUDM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030288802){
      res.json({
      "id": 2030288802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "12. Probation and community service",
          "key": "gqxQlZG22hk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030288803){
      res.json({
      "id": 2030288803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "13. Three-fold rule and GCTA",
          "key": "UMQ0DySDM4E",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030288804){
      res.json({
      "id": 2030288804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "14. Principal, accomplice, accessory, fencing, obstruction of justice 1",
          "key": "l1G9L8dF6zQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030288805){
      res.json({
      "id": 2030288805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "15. trafficking in person, child trafficking, child pornography, cyber sex",
          "key": "2NVM2K2ucJo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030388801){
      res.json({
      "id": 2030388801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "16. special complex crime",
          "key": "fyFQiuUbixA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030388802){
      res.json({
      "id": 2030388802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "17. Rape with homicide, robbery with homicide or rape",
          "key": "br1MFi8_rJg",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030388803){
      res.json({
      "id": 2030388803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "18. Kidnapping with homicide or rape",
          "key": "88B31z7Z29w",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030388804){
      res.json({
      "id": 2030388804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "19. Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
          "key": "nYkSb-Px7l8",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030388805){
      res.json({
      "id": 2030388805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "20. Theft and estafa",
          "key": "BGo08N73ARs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030488801){
      res.json({
      "id": 2030488801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "21. Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
          "key": "dAHoNOPs7iQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030488802){
      res.json({
      "id": 2030488802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "22. falsification, malversation, estafa, theft",
          "key": "WJ51r1JfU0k",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030488803){
      res.json({
      "id": 2030488803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "23. Terrorism",
          "key": "ue5KIyFCXlY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030488804){
      res.json({
      "id": 2030488804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Generality and territoriality",
          "key": "-rxaYsUN3YY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030488805){
      res.json({
      "id": 2030488805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "25. Territoriality, repeal and RA 10951-001_2",
          "key": "Xau1OihxAeA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030588801){
      res.json({
      "id": 2030588801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "26. Culpa and mistake of fact",
          "key": "VRkwFCIpkq0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030588802){
      res.json({
      "id": 2030588802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "27.  Penalties special law",
          "key": "HScUS6yhGhI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030588803){
      res.json({
      "id": 2030588803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "28. Penalties for special law",
          "key": "81r6XN8OcQI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030588804){
      res.json({
      "id": 2030588804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "29. Lawas principle",
          "key": "aEGVWsTneFI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030588805){
      res.json({
      "id": 2030588805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "30. Carnapping and piracy",
          "key": "aa3iL9ZgadA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030688801){
      res.json({
      "id": 2030688801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "31. Brigandage and hijacking",
          "key": "-SaHpgGlAac",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030688802){
      res.json({
      "id": 2030688802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "32. Syndicated estafa",
          "key": "UryS3aRqRrY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030688803){
      res.json({
      "id": 2030688803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "33. Voyuerism",
          "key": "GTxLKdTj2WQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030688804){
      res.json({
      "id": 2030688804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "34. Hazing",
          "key": "p4Ehr1fxAbI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030688805){
      res.json({
      "id": 2030688805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "35. Cyber-libel",
          "key": "PeRi98ktHpE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030788801){
      res.json({
      "id": 2030788801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "36. complex crime",
          "key": "ftJ16-7QKnU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030788802){
      res.json({
      "id": 2030788802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "37. Delito continuado",
          "key": "TbUsPpK71Rk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2030788803){
      res.json({
      "id": 2030788803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "38. Delito continuado 2",
          "key": "Gb_fIzBMLf0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 2030788804){
      res.json({
      "id": 2030788804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Penalty 1",
          "key": "TpfvoK9q4po",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 2030788805){
      res.json({
      "id": 2030788805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Penalty 2",
          "key": "Sxz0W6TUjso",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
   if (req.params.series_id == 3030088801){
      res.json({
      "id": 3030088801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 1",
          "key": "N9CqCe4LDz0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030088802){
      res.json({
      "id": 3030088802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 2",
          "key": "YbV71WzyU5E",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030088803){
      res.json({
      "id": 3030088803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 3",
          "key": "MJZW11VWas8",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030188801){
      res.json({
      "id": 3030188801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 4",
          "key": "YkA3sehU5SI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030188802){
      res.json({
      "id": 3030188802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 5",
          "key": "sx8H8JpnEas",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030188803){
      res.json({
      "id": 3030188803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 6",
          "key": "fQIpwtQFlTk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030288801){
      res.json({
      "id": 3030288801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 7",
          "key": "N07GFlShNVo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030288802){
      res.json({
      "id": 3030288802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 8",
          "key": "p4H4RmrTdmg",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030288803){
      res.json({
      "id": 3030288803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 9",
          "key": "FcLoVZCxoy4",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030388801){
      res.json({
      "id": 3030388801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 10",
          "key": "CZYCCa6LDKQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030388802){
      res.json({
      "id": 3030388802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 11",
          "key": "RNCxHfvgHxs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030388803){
      res.json({
      "id": 3030388803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 12",
          "key": "cDZkTpVg1cQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.series_id == 3030488801){
      res.json({
      "id": 3030488801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 13",
          "key": "qj1YA-PbzWY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

if (req.params.tv_id == 4030188801){
      res.json({
      "id": 4030188801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 1",
          "key": "jKf-s7Dh1zk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
  	if (req.params.tv_id == 4030188802){
      res.json({
      "id": 4030188802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 2",
          "key": "CYD8pM4GNLo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188803){
      res.json({
      "id": 4030188803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 3",
          "key": "pCL_Djs7GXU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188804){
      res.json({
      "id": 4030188804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 4",
          "key": "rVXASdTCqpw",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188805){
      res.json({
      "id": 4030188805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 5",
          "key": "0-hWVzUDK0w",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
});

router.get('/tv/:series_id/watch/providers', function(req, res, next) {
  res.json({
"id": 12751,
"results": {}
});
});

router.get('/tv/episode_group/:tv_episode_group_id', function(req, res, next) {
  res.json({
"success": false,
"status_code": 34,
"status_message": "The resource you requested could not be found."
});
});

router.get('/movie/:movie_id/lists', function(req, res, next) {
  res.json({
"id": 343611,
"page": 1,
"results": [
  {
    "description": "Select a title for trailers and more.\r\n\r\nCain Cinema features a 4K UHD picture on a 120\" (16:9) screen, and a 7.2.4 Dolby Atmos audio experience. ",
    "favorite_count": 0,
    "id": 7081593,
    "item_count": 1161,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Now Showing at Cain Cinema",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8238235,
    "item_count": 5446,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "My Movie Library",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8168597,
    "item_count": 10936,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 103747,
    "item_count": 1082,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Grandma",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 7102641,
    "item_count": 466,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Seen movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 7144,
    "item_count": 9948,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Latest Releases",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8205193,
    "item_count": 576,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "***Acțiune***",
    "poster_path": null
  },
  {
    "description": "Master List In Progress",
    "favorite_count": 0,
    "id": 51108,
    "item_count": 10311,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "My Movies",
    "poster_path": null
  },
  {
    "description": "I watch way too much but not everything till the end",
    "favorite_count": 0,
    "id": 142064,
    "item_count": 2392,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Watched",
    "poster_path": null
  },
  {
    "description": "bombs, guns, exitement  ",
    "favorite_count": 0,
    "id": 145374,
    "item_count": 426,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Action ",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8234057,
    "item_count": 2355,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Favorite Actresses",
    "poster_path": null
  },
  {
    "description": "https://www.imdb.com/list/ls027244689/",
    "favorite_count": 0,
    "id": 7057475,
    "item_count": 1780,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "IMDB: 027244689 [Movies]",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 104711,
    "item_count": 1013,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "watched movies",
    "poster_path": null
  },
  {
    "description": "desc",
    "favorite_count": 0,
    "id": 63036,
    "item_count": 11143,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "2010-2018;US;All",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 78677,
    "item_count": 8035,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8203611,
    "item_count": 29822,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "list7",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 21427,
    "item_count": 3008,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "All Movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 32023,
    "item_count": 2611,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Ush Kino",
    "poster_path": null
  },
  {
    "description": "All the Great Movies I've Watched So Far",
    "favorite_count": 0,
    "id": 7092449,
    "item_count": 712,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Watched Movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 7113976,
    "item_count": 1035,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Watchlist",
    "poster_path": null
  }
],
"total_pages": 18,
"total_results": 346
});
});

router.get('/tv/:tv_id/season/1', function(req, res, next) {
  
   if (req.params.tv_id == 2230088801){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "1. Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
          "key": "Gg60vbmUmaY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088802){
      res.json({
      "id": 223008880102,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "2. RA No. 11648 - statutory rape",
          "key": "DjHwll-HpeM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088803){
      res.json({
      "id": 223008880103,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "3. bigamy, illegal marriage _ performance of illegal marriage",
          "key": "DwOJ4hULUyo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088804){
      res.json({
      "id": 223008880104,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "4 error in personae, aberatiu ictus, praeter intentionem",
          "key": "Su8MATkGkVs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088805){
      res.json({
      "id": 223008880105,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "5. death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder, discharge of firearm",
          "key": "o9UuV-1dM1I",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088806){
      res.json({
      "id": 223018880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "6. Impossible crime",
          "key": "k3jYl_Mvazs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088807){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "7. Stages of felony",
          "key": "0CNnZU1w9BU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088808){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "8. Plunder",
          "key": "NAON0E2jQak",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088809){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "9. Treason, Rebellion, coup detat, sedition",
          "key": "CSIH-4gVgbM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888010){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "10. Violence against women RA No. 9262",
          "key": "VK4r7_g6RJE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888011){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "11. Amnesty and pardon",
          "key": "fUK67vTHUDM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888012){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "12. Probation and community service",
          "key": "gqxQlZG22hk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888013){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "13. Three-fold rule and GCTA",
          "key": "UMQ0DySDM4E",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888014){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "14. Principal, accomplice, accessory, fencing, obstruction of justice 1",
          "key": "l1G9L8dF6zQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888015){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "15. trafficking in person, child trafficking, child pornography, cyber sex",
          "key": "2NVM2K2ucJo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888016){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "16. special complex crime",
          "key": "fyFQiuUbixA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888017){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "17. Rape with homicide, robbery with homicide or rape",
          "key": "br1MFi8_rJg",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888018){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "18. Kidnapping with homicide or rape",
          "key": "88B31z7Z29w",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888019){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "19. Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
          "key": "nYkSb-Px7l8",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888020){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "20. Theft and estafa",
          "key": "BGo08N73ARs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888021){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "21. Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
          "key": "dAHoNOPs7iQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888022){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "22. falsification, malversation, estafa, theft",
          "key": "WJ51r1JfU0k",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888023){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "23. Terrorism",
          "key": "ue5KIyFCXlY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888024){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Generality and territoriality",
          "key": "-rxaYsUN3YY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888025){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "25. Territoriality, repeal and RA 10951-001_2",
          "key": "Xau1OihxAeA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888026){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "26. Culpa and mistake of fact",
          "key": "VRkwFCIpkq0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888027){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "27.  Penalties special law",
          "key": "HScUS6yhGhI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888028){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "28. Penalties for special law",
          "key": "81r6XN8OcQI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888029){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "29. Lawas principle",
          "key": "aEGVWsTneFI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888030){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "30. Carnapping and piracy",
          "key": "aa3iL9ZgadA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888031){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "31. Brigandage and hijacking",
          "key": "-SaHpgGlAac",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888032){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "32. Syndicated estafa",
          "key": "UryS3aRqRrY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888033){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "33. Voyuerism",
          "key": "GTxLKdTj2WQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888034){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "34. Hazing",
          "key": "p4Ehr1fxAbI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888035){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "35. Cyber-libel",
          "key": "PeRi98ktHpE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888036){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "36. complex crime",
          "key": "ftJ16-7QKnU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888037){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "37. Delito continuado",
          "key": "TbUsPpK71Rk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888038){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "38. Delito continuado 2",
          "key": "Gb_fIzBMLf0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.tv_id == 22300888039){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Penalty 1",
          "key": "TpfvoK9q4po",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.tv_id == 22300888040){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Penalty 2",
          "key": "Sxz0W6TUjso",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.tv_id == 3030088801){
      res.json({
      "id": 3030088801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 1",
          "key": "N9CqCe4LDz0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.tv_id == 3030088802){
      res.json({
      "id": 3030088802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 2",
          "key": "YbV71WzyU5E",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }

   if (req.params.tv_id == 3030088803){
      res.json({
      "id": 3030088803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 3",
          "key": "MJZW11VWas8",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 3030188804){
      res.json({
      "id": 3030188804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 4",
          "key": "YkA3sehU5SI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 3030188805){
      res.json({
      "id": 3030188805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 5",
          "key": "sx8H8JpnEas",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 3030188806){
      res.json({
      "id": 3030188806,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 6",
          "key": "fQIpwtQFlTk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 3030288807){
      res.json({
      "id": 3030288807,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 7",
          "key": "N07GFlShNVo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 3030288808){
      res.json({
      "id": 3030288808,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 8",
          "key": "p4H4RmrTdmg",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 3030288809){
      res.json({
      "id": 3030288809,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 9",
          "key": "cLoVZCxoy4",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 30303888010){
      res.json({
      "id": 30303888010,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 10",
          "key": "CZYCCa6LDKQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 30303888011){
      res.json({
      "id": 30303888011,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 11",
          "key": "RNCxHfvgHxs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 30303888012){
      res.json({
      "id": 30303888012,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 12",
          "key": "cDZkTpVg1cQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
 
   if (req.params.tv_id == 30304888013){
      res.json({
      "id": 30304888013,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Political Atty Loanzon Lecture 13",
          "key": "qj1YA-PbzWY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188801){
      res.json({
      "id": 4030188801,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 1",
          "key": "jKf-s7Dh1zk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
  	if (req.params.tv_id == 4030188802){
      res.json({
      "id": 4030188802,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 2",
          "key": "CYD8pM4GNLo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188803){
      res.json({
      "id": 4030188803,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 3",
          "key": "pCL_Djs7GXU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188804){
      res.json({
      "id": 4030188804,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 4",
          "key": "rVXASdTCqpw",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
	if (req.params.tv_id == 4030188805){
      res.json({
      "id": 4030188805,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "Taxation Atty. Lim - Lecture 5",
          "key": "0-hWVzUDK0w",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
	
});

module.exports = router;
