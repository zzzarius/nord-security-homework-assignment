export function getFlagImageSrcFromText(text: string) {
  let countryName = "";
  let countryCode = "notFound";
  const lowercaseText = text.toLowerCase();

  if (lowercaseText.includes("andorra")) {
    countryName = "Andorra";
    countryCode = "ad";
  }
  if (lowercaseText.includes("united arab emirates")) {
    countryName = "United Arab Emirates";
    countryCode = "ae";
  }
  if (lowercaseText.includes("afghanistan")) {
    countryName = "Afghanistan";
    countryCode = "af";
  }
  if (lowercaseText.includes("antigua and barbuda")) {
    countryName = "Antigua and Barbuda";
    countryCode = "ag";
  }
  if (lowercaseText.includes("anguilla")) {
    countryName = "Anguilla";
    countryCode = "ai";
  }
  if (lowercaseText.includes("albania")) {
    countryName = "Albania";
    countryCode = "al";
  }
  if (lowercaseText.includes("armenia")) {
    countryName = "Armenia";
    countryCode = "am";
  }
  if (lowercaseText.includes("angola")) {
    countryName = "Angola";
    countryCode = "ao";
  }
  if (lowercaseText.includes("antarctica")) {
    countryName = "Antarctica";
    countryCode = "aq";
  }
  if (lowercaseText.includes("argentina")) {
    countryName = "Argentina";
    countryCode = "ar";
  }
  if (lowercaseText.includes("american samoa")) {
    countryName = "American Samoa";
    countryCode = "as";
  }
  if (lowercaseText.includes("austria")) {
    countryName = "Austria";
    countryCode = "at";
  }
  if (lowercaseText.includes("australia")) {
    countryName = "Australia";
    countryCode = "au";
  }
  if (lowercaseText.includes("aruba")) {
    countryName = "Aruba";
    countryCode = "aw";
  }
  if (lowercaseText.includes("aland islands")) {
    countryName = "Aland Islands";
    countryCode = "ax";
  }
  if (lowercaseText.includes("azerbaijan")) {
    countryName = "Azerbaijan";
    countryCode = "az";
  }
  if (lowercaseText.includes("bosnia and herzegovina")) {
    countryName = "Bosnia and Herzegovina";
    countryCode = "ba";
  }
  if (lowercaseText.includes("barbados")) {
    countryName = "Barbados";
    countryCode = "bb";
  }
  if (lowercaseText.includes("bangladesh")) {
    countryName = "Bangladesh";
    countryCode = "bd";
  }
  if (lowercaseText.includes("belgium")) {
    countryName = "Belgium";
    countryCode = "be";
  }
  if (lowercaseText.includes("burkina faso")) {
    countryName = "Burkina Faso";
    countryCode = "bf";
  }
  if (lowercaseText.includes("bulgaria")) {
    countryName = "Bulgaria";
    countryCode = "bg";
  }
  if (lowercaseText.includes("bahrain")) {
    countryName = "Bahrain";
    countryCode = "bh";
  }
  if (lowercaseText.includes("burundi")) {
    countryName = "Burundi";
    countryCode = "bi";
  }
  if (lowercaseText.includes("benin")) {
    countryName = "Benin";
    countryCode = "bj";
  }
  if (lowercaseText.includes("saint barthelemy")) {
    countryName = "Saint Barthelemy";
    countryCode = "bl";
  }
  if (lowercaseText.includes("bermuda")) {
    countryName = "Bermuda";
    countryCode = "bm";
  }
  if (lowercaseText.includes("brunei darussalam")) {
    countryName = "Brunei Darussalam";
    countryCode = "bn";
  }
  if (lowercaseText.includes("bolivia")) {
    countryName = "Bolivia";
    countryCode = "bo";
  }
  if (lowercaseText.includes("bonaire, sint eustatius and saba")) {
    countryName = "Bonaire, Sint Eustatius and Saba";
    countryCode = "bq";
  }
  if (lowercaseText.includes("brazil")) {
    countryName = "Brazil";
    countryCode = "br";
  }
  if (lowercaseText.includes("bahamas")) {
    countryName = "Bahamas";
    countryCode = "bs";
  }
  if (lowercaseText.includes("bhutan")) {
    countryName = "Bhutan";
    countryCode = "bt";
  }
  if (lowercaseText.includes("bouvet island")) {
    countryName = "Bouvet island";
    countryCode = "bv";
  }
  if (lowercaseText.includes("botswana")) {
    countryName = "Botswana";
    countryCode = "bw";
  }
  if (lowercaseText.includes("belarus")) {
    countryName = "Belarus";
    countryCode = "by";
  }
  if (lowercaseText.includes("belize")) {
    countryName = "Belize";
    countryCode = "bz";
  }
  if (lowercaseText.includes("canada")) {
    countryName = "Canada";
    countryCode = "ca";
  }
  if (lowercaseText.includes("cocos (keeling) islands")) {
    countryName = "Cocos (Keeling) islands";
    countryCode = "cc";
  }
  if (lowercaseText.includes("democratic republic of the congo")) {
    countryName = "Democratic Republic of the Congo";
    countryCode = "cd";
  }
  if (lowercaseText.includes("central african republic")) {
    countryName = "Central African republic";
    countryCode = "cf";
  }
  if (lowercaseText.includes("congo")) {
    countryName = "Congo";
    countryCode = "cg";
  }
  if (lowercaseText.includes("switzerland")) {
    countryName = "Switzerland";
    countryCode = "ch";
  }
  if (lowercaseText.includes("cote d'ivoire")) {
    countryName = "Cote d'ivoire";
    countryCode = "ci";
  }
  if (lowercaseText.includes("cook islands")) {
    countryName = "Cook islands";
    countryCode = "ck";
  }
  if (lowercaseText.includes("chile")) {
    countryName = "Chile";
    countryCode = "cl";
  }
  if (lowercaseText.includes("cameroon")) {
    countryName = "Cameroon";
    countryCode = "cm";
  }
  if (lowercaseText.includes("china")) {
    countryName = "China";
    countryCode = "cn";
  }
  if (lowercaseText.includes("colombia")) {
    countryName = "Colombia";
    countryCode = "co";
  }
  if (lowercaseText.includes("costa rica")) {
    countryName = "Costa Rica";
    countryCode = "cr";
  }
  if (lowercaseText.includes("cuba")) {
    countryName = "Cuba";
    countryCode = "cu";
  }
  if (lowercaseText.includes("cape verde")) {
    countryName = "Cape Verde";
    countryCode = "cv";
  }
  if (lowercaseText.includes("curacao")) {
    countryName = "Curacao";
    countryCode = "cw";
  }
  if (lowercaseText.includes("christmas island")) {
    countryName = "Christmas island";
    countryCode = "cx";
  }
  if (lowercaseText.includes("cyprus")) {
    countryName = "Cyprus";
    countryCode = "cy";
  }
  if (lowercaseText.includes("czech republic")) {
    countryName = "Czech republic";
    countryCode = "cz";
  }
  if (lowercaseText.includes("germany")) {
    countryName = "Germany";
    countryCode = "de";
  }
  if (lowercaseText.includes("djibouti")) {
    countryName = "Djibouti";
    countryCode = "dj";
  }
  if (lowercaseText.includes("denmark")) {
    countryName = "Denmark";
    countryCode = "dk";
  }
  if (lowercaseText.includes("dominica")) {
    countryName = "Dominica";
    countryCode = "dm";
  }
  if (lowercaseText.includes("dominican republic")) {
    countryName = "Dominican republic";
    countryCode = "do";
  }
  if (lowercaseText.includes("algeria")) {
    countryName = "Algeria";
    countryCode = "dz";
  }
  if (lowercaseText.includes("ecuador")) {
    countryName = "Ecuador";
    countryCode = "ec";
  }
  if (lowercaseText.includes("estonia")) {
    countryName = "Estonia";
    countryCode = "ee";
  }
  if (lowercaseText.includes("egypt")) {
    countryName = "Egypt";
    countryCode = "eg";
  }
  if (lowercaseText.includes("western sahara")) {
    countryName = "Western Sahara";
    countryCode = "eh";
  }
  if (lowercaseText.includes("eritrea")) {
    countryName = "Eritrea";
    countryCode = "er";
  }
  if (lowercaseText.includes("spain")) {
    countryName = "Spain";
    countryCode = "es";
  }
  if (lowercaseText.includes("ethiopia")) {
    countryName = "Ethiopia";
    countryCode = "et";
  }
  if (lowercaseText.includes("european union")) {
    countryName = "European union";
    countryCode = "eu";
  }
  if (lowercaseText.includes("finland")) {
    countryName = "Finland";
    countryCode = "fi";
  }
  if (lowercaseText.includes("fiji")) {
    countryName = "Fiji";
    countryCode = "fj";
  }
  if (lowercaseText.includes("falkland")) {
    countryName = "Falkland islands (Malvinas)";
    countryCode = "fk";
  }
  if (lowercaseText.includes("micronesia")) {
    countryName = "Federated States of Micronesia";
    countryCode = "fm";
  }
  if (lowercaseText.includes("faroe islands")) {
    countryName = "Faroe islands";
    countryCode = "fo";
  }
  if (lowercaseText.includes("france")) {
    countryName = "France";
    countryCode = "fr";
  }
  if (lowercaseText.includes("gabon")) {
    countryName = "Gabon";
    countryCode = "ga";
  }
  if (lowercaseText.includes("england")) {
    countryName = "England";
    countryCode = "gbEng";
  }
  if (lowercaseText.includes("northern ireland")) {
    countryName = "Northern Ireland";
    countryCode = "gbNir";
  }
  if (lowercaseText.includes("scotland")) {
    countryName = "Scotland";
    countryCode = "gbSct";
  }
  if (lowercaseText.includes("wales")) {
    countryName = "Wales";
    countryCode = "gbWls";
  }
  if (lowercaseText.includes("united kingdom")) {
    countryName = "United Kingdom";
    countryCode = "gb";
  }
  if (lowercaseText.includes("grenada")) {
    countryName = "Grenada";
    countryCode = "gd";
  }
  if (lowercaseText.includes("georgia")) {
    countryName = "Georgia";
    countryCode = "ge";
  }
  if (lowercaseText.includes("french guiana")) {
    countryName = "French Guiana";
    countryCode = "gf";
  }
  if (lowercaseText.includes("guernsey")) {
    countryName = "Guernsey";
    countryCode = "gg";
  }
  if (lowercaseText.includes("ghana")) {
    countryName = "Ghana";
    countryCode = "gh";
  }
  if (lowercaseText.includes("gibraltar")) {
    countryName = "Gibraltar";
    countryCode = "gi";
  }
  if (lowercaseText.includes("greenland")) {
    countryName = "Greenland";
    countryCode = "gl";
  }
  if (lowercaseText.includes("gambia")) {
    countryName = "Gambia";
    countryCode = "gm";
  }
  if (lowercaseText.includes("guinea")) {
    countryName = "Guinea";
    countryCode = "gn";
  }
  if (lowercaseText.includes("guadeloupe")) {
    countryName = "Guadeloupe";
    countryCode = "gp";
  }
  if (lowercaseText.includes("equatorial guinea")) {
    countryName = "Equatorial Guinea";
    countryCode = "gq";
  }
  if (lowercaseText.includes("greece")) {
    countryName = "Greece";
    countryCode = "gr";
  }
  if (lowercaseText.includes("south georgia and the south sandwich islands")) {
    countryName = "South Georgia and the South Sandwich Islands";
    countryCode = "gs";
  }
  if (lowercaseText.includes("guatemala")) {
    countryName = "Guatemala";
    countryCode = "gt";
  }
  if (lowercaseText.includes("guam")) {
    countryName = "Guam";
    countryCode = "gu";
  }
  if (lowercaseText.includes("guinea-bissau")) {
    countryName = "Guinea-bissau";
    countryCode = "gw";
  }
  if (lowercaseText.includes("guyana")) {
    countryName = "Guyana";
    countryCode = "gy";
  }
  if (lowercaseText.includes("hong kong")) {
    countryName = "Hong Kong";
    countryCode = "hk";
  }
  if (lowercaseText.includes("heard island and mcdonald islands"))
    countryCode = "hm";
  if (lowercaseText.includes("honduras")) {
    countryName = "Honduras";
    countryCode = "hn";
  }
  if (lowercaseText.includes("croatia")) {
    countryName = "Croatia";
    countryCode = "hr";
  }
  if (lowercaseText.includes("haiti")) {
    countryName = "Haiti";
    countryCode = "ht";
  }
  if (lowercaseText.includes("hungary")) {
    countryName = "Hungary";
    countryCode = "hu";
  }
  if (lowercaseText.includes("indonesia")) {
    countryName = "Indonesia";
    countryCode = "id";
  }
  if (lowercaseText.includes("ireland")) {
    countryName = "Ireland";
    countryCode = "ie";
  }
  if (lowercaseText.includes("israel")) {
    countryName = "Israel";
    countryCode = "il";
  }
  if (lowercaseText.includes("isle of man")) {
    countryName = "Isle of man";
    countryCode = "im";
  }
  if (lowercaseText.includes("india")) {
    countryName = "India";
    countryCode = "in";
  }
  if (lowercaseText.includes("british indian ocean territory")) {
    countryName = "British Indian ocean territory";
    countryCode = "io";
  }
  if (lowercaseText.includes("iraq")) {
    countryName = "Iraq";
    countryCode = "iq";
  }
  if (lowercaseText.includes("iran")) {
    countryName = "Iran";
    countryCode = "ir";
  }
  if (lowercaseText.includes("iceland")) {
    countryName = "Iceland";
    countryCode = "is";
  }
  if (lowercaseText.includes("italy")) {
    countryName = "Italy";
    countryCode = "it";
  }
  if (lowercaseText.includes("jersey")) {
    countryName = "Jersey";
    countryCode = "je";
  }
  if (lowercaseText.includes("jamaica")) {
    countryName = "Jamaica";
    countryCode = "jm";
  }
  if (lowercaseText.includes("jordan")) {
    countryName = "Jordan";
    countryCode = "jo";
  }
  if (lowercaseText.includes("japan")) {
    countryName = "Japan";
    countryCode = "jp";
  }
  if (lowercaseText.includes("kenya")) {
    countryName = "Kenya";
    countryCode = "ke";
  }
  if (lowercaseText.includes("kyrgyzstan")) {
    countryName = "Kyrgyzstan";
    countryCode = "kg";
  }
  if (lowercaseText.includes("cambodia")) {
    countryName = "Cambodia";
    countryCode = "kh";
  }
  if (lowercaseText.includes("kiribati")) {
    countryName = "Kiribati";
    countryCode = "ki";
  }
  if (lowercaseText.includes("comoros")) {
    countryName = "Comoros";
    countryCode = "km";
  }
  if (lowercaseText.includes("saint kitts and nevis")) {
    countryName = "Saint Kitts and Nevis";
    countryCode = "kn";
  }
  if (lowercaseText.includes("north korea")) {
    countryName = "North Korea";
    countryCode = "kp";
  }
  if (lowercaseText.includes("south korea")) {
    countryName = "South Korea";
    countryCode = "kr";
  }
  if (lowercaseText.includes("kuwait")) {
    countryName = "Kuwait";
    countryCode = "kw";
  }
  if (lowercaseText.includes("cayman islands")) {
    countryName = "Cayman islands";
    countryCode = "ky";
  }
  if (lowercaseText.includes("kazakhstan")) {
    countryName = "Kazakhstan";
    countryCode = "kz";
  }
  if (lowercaseText.includes("lao")) {
    countryName = "Lao";
    countryCode = "la";
  }
  if (lowercaseText.includes("lebanon")) {
    countryName = "Lebanon";
    countryCode = "lb";
  }
  if (lowercaseText.includes("saint lucia")) {
    countryName = "Saint Lucia";
    countryCode = "lc";
  }
  if (lowercaseText.includes("liechtenstein")) {
    countryName = "Liechtenstein";
    countryCode = "li";
  }
  if (lowercaseText.includes("sri lanka")) {
    countryName = "Sri lanka";
    countryCode = "lk";
  }
  if (lowercaseText.includes("liberia")) {
    countryName = "Liberia";
    countryCode = "lr";
  }
  if (lowercaseText.includes("lesotho")) {
    countryName = "Lesotho";
    countryCode = "ls";
  }
  if (lowercaseText.includes("lithuania")) {
    countryName = "Lithuania";
    countryCode = "lt";
  }
  if (lowercaseText.includes("luxembourg")) {
    countryName = "Luxembourg";
    countryCode = "lu";
  }
  if (lowercaseText.includes("latvia")) {
    countryName = "Latvia";
    countryCode = "lv";
  }
  if (lowercaseText.includes("libya")) {
    countryName = "Libya";
    countryCode = "ly";
  }
  if (lowercaseText.includes("morocco")) {
    countryName = "Morocco";
    countryCode = "ma";
  }
  if (lowercaseText.includes("monaco")) {
    countryName = "Monaco";
    countryCode = "mc";
  }
  if (lowercaseText.includes("moldova, republic of")) {
    countryName = "Moldova, republic of";
    countryCode = "md";
  }
  if (lowercaseText.includes("montenegro")) {
    countryName = "Montenegro";
    countryCode = "me";
  }
  if (lowercaseText.includes("saint martin (french part)")) {
    countryName = "Saint martin (french part)";
    countryCode = "mf";
  }
  if (lowercaseText.includes("madagascar")) {
    countryName = "Madagascar";
    countryCode = "mg";
  }
  if (lowercaseText.includes("marshall islands")) {
    countryName = "Marshall islands";
    countryCode = "mh";
  }
  if (lowercaseText.includes("north macedonia")) {
    countryName = "North macedonia";
    countryCode = "mk";
  }
  if (lowercaseText.includes("mali")) {
    countryName = "Mali";
    countryCode = "ml";
  }
  if (lowercaseText.includes("myanmar")) {
    countryName = "Myanmar";
    countryCode = "mm";
  }
  if (lowercaseText.includes("mongolia")) {
    countryName = "Mongolia";
    countryCode = "mn";
  }
  if (lowercaseText.includes("macao")) {
    countryName = "Macao";
    countryCode = "mo";
  }
  if (lowercaseText.includes("northern mariana islands")) {
    countryName = "Northern mariana islands";
    countryCode = "mp";
  }
  if (lowercaseText.includes("martinique")) {
    countryName = "Martinique";
    countryCode = "mq";
  }
  if (lowercaseText.includes("mauritania")) {
    countryName = "Mauritania";
    countryCode = "mr";
  }
  if (lowercaseText.includes("montserrat")) {
    countryName = "Montserrat";
    countryCode = "ms";
  }
  if (lowercaseText.includes("malta")) {
    countryName = "Malta";
    countryCode = "mt";
  }
  if (lowercaseText.includes("mauritius")) {
    countryName = "Mauritius";
    countryCode = "mu";
  }
  if (lowercaseText.includes("maldives")) {
    countryName = "Maldives";
    countryCode = "mv";
  }
  if (lowercaseText.includes("malawi")) {
    countryName = "Malawi";
    countryCode = "mw";
  }
  if (lowercaseText.includes("mexico")) {
    countryName = "Mexico";
    countryCode = "mx";
  }
  if (lowercaseText.includes("malaysia")) {
    countryName = "Malaysia";
    countryCode = "my";
  }
  if (lowercaseText.includes("mozambique")) {
    countryName = "Mozambique";
    countryCode = "mz";
  }
  if (lowercaseText.includes("namibia")) {
    countryName = "Namibia";
    countryCode = "na";
  }
  if (lowercaseText.includes("new caledonia")) {
    countryName = "New caledonia";
    countryCode = "nc";
  }
  if (lowercaseText.includes("niger")) {
    countryName = "Niger";
    countryCode = "ne";
  }
  if (lowercaseText.includes("norfolk island")) {
    countryName = "Norfolk island";
    countryCode = "nf";
  }
  if (lowercaseText.includes("nigeria")) {
    countryName = "Nigeria";
    countryCode = "ng";
  }
  if (lowercaseText.includes("nicaragua")) {
    countryName = "Nicaragua";
    countryCode = "ni";
  }
  if (lowercaseText.includes("netherlands")) {
    countryName = "Netherlands";
    countryCode = "nl";
  }
  if (lowercaseText.includes("norway")) {
    countryName = "Norway";
    countryCode = "no";
  }
  if (lowercaseText.includes("nepal")) {
    countryName = "Nepal";
    countryCode = "np";
  }
  if (lowercaseText.includes("nauru")) {
    countryName = "Nauru";
    countryCode = "nr";
  }
  if (lowercaseText.includes("niue")) {
    countryName = "Niue";
    countryCode = "nu";
  }
  if (lowercaseText.includes("new zealand")) {
    countryName = "New zealand";
    countryCode = "nz";
  }
  if (lowercaseText.includes("oman")) {
    countryName = "Oman";
    countryCode = "om";
  }
  if (lowercaseText.includes("panama")) {
    countryName = "Panama";
    countryCode = "pa";
  }
  if (lowercaseText.includes("peru")) {
    countryName = "Peru";
    countryCode = "pe";
  }
  if (lowercaseText.includes("french polynesia")) {
    countryName = "French polynesia";
    countryCode = "pf";
  }
  if (lowercaseText.includes("papua new guinea")) {
    countryName = "Papua new guinea";
    countryCode = "pg";
  }
  if (lowercaseText.includes("philippines")) {
    countryName = "Philippines";
    countryCode = "ph";
  }
  if (lowercaseText.includes("pakistan")) {
    countryName = "Pakistan";
    countryCode = "pk";
  }
  if (lowercaseText.includes("poland")) {
    countryName = "Poland";
    countryCode = "pl";
  }
  if (lowercaseText.includes("saint pierre and miquelon")) {
    countryName = "Saint pierre and miquelon";
    countryCode = "pm";
  }
  if (lowercaseText.includes("pitcairn")) {
    countryName = "Pitcairn";
    countryCode = "pn";
  }
  if (lowercaseText.includes("puerto rico")) {
    countryName = "Puerto rico";
    countryCode = "pr";
  }
  if (lowercaseText.includes("palestine, state of")) {
    countryName = "Palestine, state of";
    countryCode = "ps";
  }
  if (lowercaseText.includes("portugal")) {
    countryName = "Portugal";
    countryCode = "pt";
  }
  if (lowercaseText.includes("palau")) {
    countryName = "Palau";
    countryCode = "pw";
  }
  if (lowercaseText.includes("paraguay")) {
    countryName = "Paraguay";
    countryCode = "py";
  }
  if (lowercaseText.includes("qatar")) {
    countryName = "Qatar";
    countryCode = "qa";
  }
  if (lowercaseText.includes("reunion")) {
    countryName = "Reunion";
    countryCode = "re";
  }
  if (lowercaseText.includes("romania")) {
    countryName = "Romania";
    countryCode = "ro";
  }
  if (lowercaseText.includes("serbia")) {
    countryName = "Serbia";
    countryCode = "rs";
  }
  if (lowercaseText.includes("russian federation")) {
    countryName = "Russian federation";
    countryCode = "ru";
  }
  if (lowercaseText.includes("rwanda")) {
    countryName = "Rwanda";
    countryCode = "rw";
  }
  if (lowercaseText.includes("saudi arabia")) {
    countryName = "Saudi arabia";
    countryCode = "sa";
  }
  if (lowercaseText.includes("solomon islands")) {
    countryName = "Solomon islands";
    countryCode = "sb";
  }
  if (lowercaseText.includes("seychelles")) {
    countryName = "Seychelles";
    countryCode = "sc";
  }
  if (lowercaseText.includes("sudan")) {
    countryName = "Sudan";
    countryCode = "sd";
  }
  if (lowercaseText.includes("sweden")) {
    countryName = "Sweden";
    countryCode = "se";
  }
  if (lowercaseText.includes("singapore")) {
    countryName = "Singapore";
    countryCode = "sg";
  }
  if (lowercaseText.includes("saint helena, ascension and tristan da cunha")) {
    countryName = "Saint helena, ascension and tristan da cunha";
    countryCode = "sh";
  }
  if (lowercaseText.includes("slovenia")) {
    countryName = "Slovenia";
    countryCode = "si";
  }
  if (lowercaseText.includes("svalbard and jan mayen")) {
    countryName = "Svalbard and jan mayen";
    countryCode = "sj";
  }
  if (lowercaseText.includes("slovakia")) {
    countryName = "Slovakia";
    countryCode = "sk";
  }
  if (lowercaseText.includes("sierra leone")) {
    countryName = "Sierra leone";
    countryCode = "sl";
  }
  if (lowercaseText.includes("san marino")) {
    countryName = "San marino";
    countryCode = "sm";
  }
  if (lowercaseText.includes("senegal")) {
    countryName = "Senegal";
    countryCode = "sn";
  }
  if (lowercaseText.includes("somalia")) {
    countryName = "Somalia";
    countryCode = "so";
  }
  if (lowercaseText.includes("suriname")) {
    countryName = "Suriname";
    countryCode = "sr";
  }
  if (lowercaseText.includes("south sudan")) {
    countryName = "South sudan";
    countryCode = "ss";
  }
  if (lowercaseText.includes("sao tome and principe")) {
    countryName = "Sao tome and principe";
    countryCode = "st";
  }
  if (lowercaseText.includes("el salvador")) {
    countryName = "El salvador";
    countryCode = "sv";
  }
  if (lowercaseText.includes("sint maarten (dutch part)")) {
    countryName = "Sint maarten (dutch part)";
    countryCode = "sx";
  }
  if (lowercaseText.includes("syrian arab republic")) {
    countryName = "Syrian arab republic";
    countryCode = "sy";
  }
  if (lowercaseText.includes("eswatini")) {
    countryName = "Eswatini";
    countryCode = "sz";
  }
  if (lowercaseText.includes("turks and caicos islands")) {
    countryName = "Turks and caicos islands";
    countryCode = "tc";
  }
  if (lowercaseText.includes("chad")) {
    countryName = "Chad";
    countryCode = "td";
  }
  if (lowercaseText.includes("french southern territories")) {
    countryName = "French southern territories";
    countryCode = "tf";
  }
  if (lowercaseText.includes("togo")) {
    countryName = "Togo";
    countryCode = "tg";
  }
  if (lowercaseText.includes("thailand")) {
    countryName = "Thailand";
    countryCode = "th";
  }
  if (lowercaseText.includes("tajikistan")) {
    countryName = "Tajikistan";
    countryCode = "tj";
  }
  if (lowercaseText.includes("tokelau")) {
    countryName = "Tokelau";
    countryCode = "tk";
  }
  if (lowercaseText.includes("timor-leste")) {
    countryName = "Timor-leste";
    countryCode = "tl";
  }
  if (lowercaseText.includes("turkmenistan")) {
    countryName = "Turkmenistan";
    countryCode = "tm";
  }
  if (lowercaseText.includes("tunisia")) {
    countryName = "Tunisia";
    countryCode = "tn";
  }
  if (lowercaseText.includes("tonga")) {
    countryName = "Tonga";
    countryCode = "to";
  }
  if (lowercaseText.includes("turkey")) {
    countryName = "Turkey";
    countryCode = "tr";
  }
  if (lowercaseText.includes("trinidad and tobago")) {
    countryName = "Trinidad and tobago";
    countryCode = "tt";
  }
  if (lowercaseText.includes("tuvalu")) {
    countryName = "Tuvalu";
    countryCode = "tv";
  }
  if (lowercaseText.includes("taiwan, province of china")) {
    countryName = "Taiwan, province of china";
    countryCode = "tw";
  }
  if (lowercaseText.includes("tanzania, united republic of")) {
    countryName = "Tanzania, united republic of";
    countryCode = "tz";
  }
  if (lowercaseText.includes("ukraine")) {
    countryName = "Ukraine";
    countryCode = "ua";
  }
  if (lowercaseText.includes("uganda")) {
    countryName = "Uganda";
    countryCode = "ug";
  }
  if (lowercaseText.includes("united states minor outlying islands")) {
    countryName = "United states minor outlying islands";
    countryCode = "um";
  }
  if (lowercaseText.includes("united states")) {
    countryName = "United states";
    countryCode = "us";
  }
  if (lowercaseText.includes("uruguay")) {
    countryName = "Uruguay";
    countryCode = "uy";
  }
  if (lowercaseText.includes("uzbekistan")) {
    countryName = "Uzbekistan";
    countryCode = "uz";
  }
  if (lowercaseText.includes("holy see (vatican city state)")) {
    countryName = "Holy see (vatican city state)";
    countryCode = "va";
  }
  if (lowercaseText.includes("saint vincent and the grenadines")) {
    countryName = "Saint vincent and the grenadines";
    countryCode = "vc";
  }
  if (lowercaseText.includes("venezuela")) {
    countryName = "Venezuela";
    countryCode = "ve";
  }
  if (lowercaseText.includes("virgin islands, british")) {
    countryName = "Virgin islands, british";
    countryCode = "vg";
  }
  if (lowercaseText.includes("virgin islands, u.s.")) {
    countryName = "Virgin islands, u.s.";
    countryCode = "vi";
  }
  if (lowercaseText.includes("viet nam")) {
    countryName = "Viet nam";
    countryCode = "vn";
  }
  if (lowercaseText.includes("vanuatu")) {
    countryName = "Vanuatu";
    countryCode = "vu";
  }
  if (lowercaseText.includes("wallis and futuna")) {
    countryName = "Wallis and futuna";
    countryCode = "wf";
  }
  if (lowercaseText.includes("samoa")) {
    countryName = "Samoa";
    countryCode = "ws";
  }
  if (lowercaseText.includes("kosovo")) {
    countryName = "Kosovo";
    countryCode = "xk";
  }
  if (lowercaseText.includes("yemen")) {
    countryName = "Yemen";
    countryCode = "ye";
  }
  if (lowercaseText.includes("mayotte")) {
    countryName = "Mayotte";
    countryCode = "yt";
  }
  if (lowercaseText.includes("south africa")) {
    countryName = "South africa";
    countryCode = "za";
  }
  if (lowercaseText.includes("zambia")) {
    countryName = "Zambia";
    countryCode = "zm";
  }
  if (lowercaseText.includes("zimbabwe")) {
    countryName = "Zimbabwe";
    countryCode = "zw";
  }
  return [`/flags/${countryCode}.svg`, countryName];
}
